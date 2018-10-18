using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobTracker.Models
{
    public class Job
    {
        [Key]
        public int job_id { get; set; }
        public string position { get; set; }
        public string company { get; set; }
        public string salary { get; set; }
        public int contact_id { get; set; }
        public string url { get; set; }
        public int site_id { get; set; }
        public string notes { get; set; }
        [ForeignKey("contact_id")] 
        public Contact Contact { get; set; }
        [ForeignKey("site_id")] 
        public Site Site { get; set; }

        public Job() {}
    }
}