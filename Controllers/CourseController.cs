using System.Threading.Tasks;
using AngulatTest.Models;
using AngulatTest.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AngulatTest.Controllers
{
    public class CourseController : Controller
    {
        private readonly ICourseService _service;

        public CourseController(ICourseService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var models = await _service.GetAll();
            return Json(models);
        }

        [HttpGet]
        public async Task<IActionResult> Details(int id)
        {
            var model = await _service.Get(id);
            return Json(model);
        }
        
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]CourseModel model)
        {
            await _service.Add(model);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Edit([FromBody]CourseModel model)
        {
            await _service.Update(model);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return Ok();
        }
    }
}