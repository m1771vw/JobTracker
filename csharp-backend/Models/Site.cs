using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobTracker.Models
{
    public class Site
    {
        [Key]
        public int site_id { get; set; }
        public string name { get; set; }
        public Site() {}
    }
}