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
        public async Task<ActionResult> Index()
        {
            var models = await _service.GetAll();
            return Json(models);
        }

        [HttpGet]
        public async Task<ActionResult> Details(int id)
        {
            var model = await _service.Get(id);
            return Json(model);
        }
        
        [HttpPost]
        public async Task<ActionResult> Create([FromBody]CourseModel model)
        {
            await _service.Add(model);
            return Json("New group has been added!");
        }

        [HttpPut]
        public async Task<ActionResult> Edit([FromBody]CourseModel model)
        {
            await _service.Update(model);
            return Json("Group has been edited!");
        }

        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return Json("Group has been deleted!");
        }
    }
}