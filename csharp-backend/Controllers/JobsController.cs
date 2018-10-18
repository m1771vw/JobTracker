using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using JobTracker.Models;

namespace csharp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private JobTrackerContext _context;

        public JobsController(JobTrackerContext context)
        {
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            if(_context.Job.ToList().Count == 0 )
            {
                return NotFound();
            }
            return Ok(_context.Job.ToList());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Job job = _context.Job.SingleOrDefault(j => j.job_id == id);
            if(_context == null)
            {
                return NotFound();
            }
            return Ok(job);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Job job)
        {
            if(type == null)
            {
                return BadRequest();
            }
            _context.Job.Add(job);
            _context.SaveChanges();
            return Ok(_context.Job.Where(j => j.job_id == job.job_id).SingleOrDefault());
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Job job)
        {
            if(job == null || job.job_id != id)
            {
                return BadRequest();
            }
            _context.Job.Update(job);
            _context.SaveChanges();
            return Ok(job);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Job job = _context.Job.Find(id);
            if(job == null)
            {
                return NotFound();
            }
            _context.Job.Remove(job);
            _context.SaveChanges();
            return Ok(job);
        }
    }
}
