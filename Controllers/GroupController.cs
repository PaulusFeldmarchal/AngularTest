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

        [HttpGet]
        public async Task<ActionResult> About(int id)
        {
            var result = await _service.GetDetail(id);
            return Json(result);
        }

        // POST: Group/Create
        [HttpPost]
        public async Task<ActionResult> Create([FromBody]GroupModel model)
        {
            await _service.Add(model);
            return Ok();
        }

        // PUT: Group/Edit/5
        [HttpPut]
        public async Task<ActionResult> Edit([FromBody]GroupModel model)
        {
            await _service.Update(model);
            return Ok();
        }

        // DELETE: Group/Delete/5
        [HttpDelete]
        public async Task<ActionResult> Delete(int id)
        {
            await _service.Delete(id);
            return Ok();
        }
    }
}