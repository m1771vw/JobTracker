using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using JobTracker.Models;
using Microsoft.EntityFrameworkCore;

namespace csharp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private JobTrackerContext _context;

        public ContactsController(JobTrackerContext context)
        {
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if(_context.Contacts.ToList().Count == 0 )
            { 
                return NotFound();
            }
            return Ok(_context.Contacts
    
                                    .ToList());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Contact contact = _context.Contacts.SingleOrDefault(c => c.contact_id == id);
            if(contact == null)
            {
                return NotFound();
            }
            return Ok(contact);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Contact contact)
        {
            if(contact == null)
            {
                return BadRequest();
            }
            _context.Contacts.Add(contact);
            _context.SaveChanges();
            return Ok(_context.Contacts.Where(c => c.contact_id == contact.contact_id)
                                    
                                    .SingleOrDefault());
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Contact contact)
        {
            if(contact == null || contact.contact_id != id)
            {
                return BadRequest();
            }
            _context.Contacts.Update(contact);
            _context.SaveChanges();
            return Ok(_context.Contacts.Where(c => c.contact_id == contact.contact_id)
                                   
                                    .SingleOrDefault());
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Contact contact = _context.Contacts.Where(c => c.contact_id == id)
  
                                    .SingleOrDefault();
            if(contact == null)
            {
                return NotFound();
            }
            _context.Contacts.Remove(contact);
            _context.SaveChanges();
            return Ok(contact);
        }
    }
}
