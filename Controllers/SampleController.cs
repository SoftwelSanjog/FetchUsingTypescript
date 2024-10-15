using LearnTypescript.Models;
using Microsoft.AspNetCore.Mvc;

namespace LearnTypescript.Controllers
{
    public class SampleController : Controller
    {
        [HttpGet]
        public IActionResult GetData()
        {
            var data = new { message = "Hello from ASP.NET Core MVC!" };
            return Json(data); // Use Json to return JSON data
        }

        [HttpPost]
        public IActionResult PostData([FromBody] MyModel data)
        {
            if (data == null)
            {
                return BadRequest("Invalid data.");
            }
            // Process the data as needed
            return Json(new { message = "Data received successfully!" });
        }
    }
}
