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
    public class StatusHistoryController : ControllerBase
    {
        private JobTrackerContext _context;

        public StatusHistoryController(JobTrackerContext context)
        {
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if(_context.StatusHistory.ToList().Count == 0 )
            { 
                return NotFound();
            }
            return Ok(_context.StatusHistory
            // .Include(j => j.contact_id)
                                    .Include("Job") //Table Name?
                                    .Include(s => s.Job.Contact)
                                    .Include(s => s.Job.Site)
                                    .Include(s => s.StatusType)
                                    // .Include("StatusType")  
                                    // .Include("StatusTypes")
                                //    .Include(j => j.site_id)
                                    .ToList());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            StatusHistory statusHistory = _context.StatusHistory
                                    .Include("Job") //Table Name?
                                    .Include(s => s.Job.Contact)
                                    .Include(s => s.Job.Site)
                                    .Include(s => s.StatusType).SingleOrDefault(s => s.status_history_id == id);
            if(statusHistory == null)
            {
                return NotFound();
            }
            return Ok(statusHistory);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] StatusHistory statusHistory)
        {
            if(statusHistory == null)
            {
                return BadRequest();
            }
            _context.StatusHistory.Add(statusHistory);
            _context.SaveChanges();
            return Ok(_context.StatusHistory.Where(s => s.status_history_id == statusHistory.status_history_id)
                                    .Include("Job") //Table Name?
                                    .Include(s => s.Job.Contact)
                                    .Include(s => s.Job.Site)
                                    .Include(s => s.StatusType)
                                    .SingleOrDefault());
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] StatusHistory statusHistory)
        {
            if(statusHistory == null || statusHistory.status_history_id != id)
            {
                return BadRequest();
            }
            _context.StatusHistory.Update(statusHistory);
            _context.SaveChanges();
            return Ok(_context.StatusHistory.Where(s => s.status_history_id == statusHistory.status_history_id)
                                    .Include("Job") //Table Name?
                                    .Include(s => s.Job.Contact)
                                    .Include(s => s.Job.Site)
                                    .Include(s => s.StatusType)
                                    .SingleOrDefault());
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            StatusHistory statusHistory = _context.StatusHistory.Where(s => s.status_history_id == id)
                                    .Include("Job") //Table Name?
                                    .Include(s => s.Job.Contact)
                                    .Include(s => s.Job.Site)
                                    .Include(s => s.StatusType)
                                    .SingleOrDefault();
            if(statusHistory == null)
            {
                return NotFound();
            }
            _context.StatusHistory.Remove(statusHistory);
            _context.SaveChanges();
            return Ok(statusHistory);
        }
    }
}
