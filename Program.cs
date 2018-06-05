using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Https;
using System;
using System.Net;

namespace AngulatTest
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            return WebHost.CreateDefaultBuilder(args)
            .UseStartup<Startup>()
            .UseKestrel(options =>
            {
                options.Listen(IPAddress.Loopback, 5058, listenOptions =>
                {
                        listenOptions.UseHttps(@"C:\certificate\certificate.pfx", "password");
                });
            });
        }
    }
}
