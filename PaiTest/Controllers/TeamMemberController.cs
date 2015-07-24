using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PaiTest.DAL;
using PaiTest.Models;

namespace PaiTest.Controllers
{
    public class TeamMemberController : ApiController
    {
        // GET: api/TeamMember
        public IEnumerable<TeamMember> Get()
        {
            var teamMemberRepository = new TeamMemberRepository();
            return teamMemberRepository.Retrieve();
        }

        // GET: api/TeamMember/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/TeamMember
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/TeamMember/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/TeamMember/5
        public void Delete(int id)
        {
        }
    }
}
