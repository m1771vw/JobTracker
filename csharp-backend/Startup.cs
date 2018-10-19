using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

using Microsoft.EntityFrameworkCore;
using JobTracker.Models;   
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace csharp_backend
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            
            var connectionString = Configuration.GetConnectionString("JobTrackerContext");
            services.AddEntityFrameworkNpgsql().AddDbContext<JobTrackerContext>(options => options.UseNpgsql(connectionString));

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme) // Registering a certain class during runtime (authentication class)
                    .AddJwtBearer(options =>                                   // I want to use this AuthenticationScheme, will register it w/ the system. This will add the code to make the tokens, keep track of the token
                    {
                        options.TokenValidationParameters = new 
                        TokenValidationParameters
                        {
                            ValidateIssuer = false, // Validate it came from this server
                            ValidateLifetime = true,
                            ValidateAudience = false,
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretsuperSecretsuperSecretsuperSecret"))
                        };
                    });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            // app.UseHttpsRedirection();
            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());
            app.UseAuthentication();

            app.UseMvc();

        }
    }
}
