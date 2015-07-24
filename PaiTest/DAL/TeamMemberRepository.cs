using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Hosting;
using PaiTest.Models;

namespace PaiTest.DAL
{
    /// <summary>
    /// Stores the data in a json file so that no database is required for this
    /// sample application
    /// </summary>
    public class TeamMemberRepository
    {
        /// <summary>
        /// Creates a new Section with default values
        /// </summary>
        /// <returns></returns>
        internal TeamMember Create()
        {
            TeamMember teamMember = new TeamMember
            {
                FacebookLink = "http://www.facebook.com"
            };
            return teamMember;
        }

        /// <summary>
        /// Retrieves the list of Sections.
        /// </summary>
        /// <returns></returns>
        internal List<TeamMember> Retrieve()
        {
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/TeamMember.json");

            var json = System.IO.File.ReadAllText(filePath);

            var teamMember = JsonConvert.DeserializeObject<List<TeamMember>>(json);

            return teamMember;
        }

        /// <summary>
        /// Saves a new Section.
        /// </summary>
        /// <param name="Section"></param>
        /// <returns></returns>
        internal TeamMember Save(TeamMember teamMember)
        {
            // Read in the existing Sections
            var teamMembers = this.Retrieve();

            // Assign a new Id
            var maxId = teamMembers.Max(p => p.TeamMemberId);
            teamMember.TeamMemberId = maxId + 1;
            teamMembers.Add(teamMember);

            WriteData(teamMembers);
            return teamMember;
        }

        /// <summary>
        /// Updates an existing Section
        /// </summary>
        /// <param name="id"></param>
        /// <param name="Section"></param>
        /// <returns></returns>
        internal TeamMember Save(int id, TeamMember teamMember)
        {
            // Read in the existing Sections
            var teamMembers = this.Retrieve();

            // Locate and replace the item
            var itemIndex = teamMembers.FindIndex(p => p.TeamMemberId == teamMember.TeamMemberId);
            if (itemIndex > 0)
            {
                teamMembers[itemIndex] = teamMember;
            }
            else
            {
                return null;
            }

            WriteData(teamMembers);
            return teamMember;
        }

        private bool WriteData(List<TeamMember> teamMembers)
        {
            // Write out the Json
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/TeamMember.json");

            var json = JsonConvert.SerializeObject(teamMembers, Formatting.Indented);
            System.IO.File.WriteAllText(filePath, json);

            return true;
        }

    }
}
