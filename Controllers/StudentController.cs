using System.Threading.Tasks;
using AngulatTest.Models;
using AngulatTest.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AngulatTest.Controllers
{
    public class StudentController : Controller
    {
        private readonly IStudentService _service;

        public StudentController(IStudentService service)
        {
            _service = service;
        }

        // GET: Group
        // POST: Group/Create
        [HttpGet]
        public async Task<ActionResult> Index()
        {
            var models = await _service.GetAll();
            return Json(models);
        }

        // GET: Group/Details/5
        [HttpGet]
        public async Task<ActionResult> Details(int id)
        {
            var model = await _service.Get(id);
            return Json(model);
        }

        // POST: Group/Create
        [HttpPost]
        public async Task<ActionResult> Create([FromBody]StudentModel model)
        {
            await _service.Add(model);
            return Json("New group has been added!");
        }

        // PUT: Group/Edit/5
        [HttpPut]
        public async Task<ActionResult> Edit([FromBody]StudentModel model)
        {
            await _service.Update(model);
            return Json("Group has been edited!");
        }

        // DELETE: Group/Delete/5
        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return Json("Group has been deleted!");
        }
    }
}