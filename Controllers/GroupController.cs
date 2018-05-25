using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngulatTest.Models;
using AngulatTest.Services.Interfaces;
using Microsoft.AspNetCore.Http;
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
        public async Task<ActionResult> Index()
        {
            var models = await _service.GetAll();
            return Json(models);
        }


        // GET: Group/Details/5
        public async Task<ActionResult> Details(int id)
        {
            var model = await _service.Get(id);
            return Json(model);
        }

        // POST: Group/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([FromBody]GroupModel model)
        {
            await _service.Update(model);
            return Json("New group added!");
        }

        // PUT: Group/Edit/5
        [HttpPut]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([FromBody]GroupModel model)
        {
            
        }

        // GET: Group/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // DELETE: Group/Delete/5
        [HttpDelete]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}