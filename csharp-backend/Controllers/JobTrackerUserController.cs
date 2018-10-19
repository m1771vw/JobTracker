using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using JobTracker.Models;
using Microsoft.EntityFrameworkCore;

using BCrypt.Net;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace csharp_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobTrackerUserController : ControllerBase
    {
        private JobTrackerContext _context; 

        public JobTrackerUserController(JobTrackerContext context) 
        {
            _context = context;
        }
        
        [HttpGet]
        // [HttpGet, Authorize]
        public IActionResult Get()
        {
            //Trying to find
            Console.WriteLine("Trying to find authorized users");
            // if (_context.wizard.ToList().Count == 0)
            // {
            //     return NotFound();
            // }
            // return Ok();
            return Ok(_context.JobTrackerUsers.ToList());
        }

        [HttpPost]
        public ActionResult<JobTrackerUser> Register ([FromBody] JobTrackerUser user)
        {
            user.password = BCrypt.Net.BCrypt.HashPassword(user.password);
            _context.JobTrackerUsers.Add(user);
            _context.SaveChanges();

            return Ok(user);
        }

        [HttpPost("login")]
        public ActionResult Login ([FromBody] JobTrackerUser user)
        {
            foreach (JobTrackerUser c in _context.JobTrackerUsers)
            {
                if(c.username == user.username)
                {
                    bool verified = BCrypt.Net.BCrypt.Verify(user.password, c.password);
                    if(verified)
                    {
                        string token = BuildToken(c);
                        return Ok(token);
                    } 
                    else 
                    {
                        return NotFound();
                    }
                }
            }
            return NotFound();
        }

        public string BuildToken(JobTrackerUser user) 
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretsuperSecretsuperSecretsuperSecret"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                "localhost", // who it's from
                "localhost", // who it's going to
                expires: DateTime.Now.AddMinutes(30), // How long the token will last
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

    }
}
