using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobTracker.Models
{
    public class Contact
    {
        [Key]
        public int contact_id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string phone { get; set; }
    
        public Contact() {}
    }
}