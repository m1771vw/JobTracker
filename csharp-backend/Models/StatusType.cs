using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobTracker.Models
{
    public class StatusType
    {
        [Key]
        public int status_type_id { get; set; }
        public string status_type { get; set; }

        public StatusType() {}
    }
}