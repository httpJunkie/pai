using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PaiTest.Models
{
    public class TeamMember
    {
        public int TeamMemberId { get; set; }
        [StringLength(30)]
        public string Name { get; set; }
        [StringLength(30)]
        public string Title { get; set; }
        [StringLength(90)]
        public string FacebookLink { get; set; }
        [StringLength(90)]
        public string TwitterLink { get; set; }
        [StringLength(90)]
        public string InstagramLink { get; set; }
        [StringLength(90)]
        public string LinkedinLink { get; set; }
        [StringLength(30)]
        public string ImgPath { get; set; }
        [StringLength(30)]
        public string UserName { get; set; }
        [StringLength(8)]
        public string TmPassword { get; set; }

    }
}