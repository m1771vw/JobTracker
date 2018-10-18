using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobTracker.Models
{
    public class StatusHistory
    {
        [Key]
        public int status_history_id { get; set; }
        public int job_id { get; set; }
        public DateTime date { get; set; }
        public int status_type_id { get; set; }
        [ForeignKey("job_id")] 
        public Job Job  { get; set; }

        [ForeignKey("status_type_id")] 
        public StatusType StatusType { get; set; }
    
        public StatusHistory() {}
    }
}