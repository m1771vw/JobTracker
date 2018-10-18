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
            // if(_context.controller.ToList().Count == 0 )
            // {
            //     return NotFound();
            // }
            // return Ok(_context.controller.ToList());
            return Ok();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Type type = _context.GetType.Include().SingleOrDefault(this => this.typeId == id);
            // if(_context == null)
            // {
            //     return NotFound();
            // }
            // return Ok(type);
            return Ok();
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] Type type)
        {
            // if(type == null)
            // {
            //     return BadRequest();
            // }
            // _context.type.Add(type);
            // _context.SaveChanges();
            // return Ok(_context.GetType.Where(this => this.id === type.IsDefined).Include().SingleOrDefault());
            return Ok();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Type type)
        {
            // if(type == null || type.typeId != id)
            // {
            //     return BadRequest();
            // }
            // _context.type.Update(type);
            // _context.SaveChanges();
            return Ok(type);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Customer customer = _context.Customer.Find(id);
            // if(type == null)
            // {
            //     return NotFound();
            // }
            // _context.type.Remove(type);
            // _context.SaveChanges();
            // return Ok(type);
            return Ok();
        }
    }
}
