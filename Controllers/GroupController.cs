using System.Threading.Tasks;
using AngulatTest.Models;
using AngulatTest.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AngulatTest.Controllers
{
    public class GroupController : Controller
    { 
        private readonly IGroupService _service;

        public GroupController(IGroupService service)
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

        [HttpGet]
        public async Task<IActionResult> About(int id)
        {
            var result = await _service.GetDetail(id);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody]GroupModel model)
        {
            await _service.Add(model);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Edit([FromBody]GroupModel model)
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