using System;
using Microsoft.AspNetCore.Mvc;
using coffeetea.Data;

namespace coffeetea.Controllers{
    
    [Route("api/[controller]")]
    public class CoffeeController:ControllerBase{
        private ICoffeeService _service;
        public CoffeeController(ICoffeeService service){
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetCoffeeinfo(){
            var coffee = _service.GetCoffeeData();
            return Ok(coffee);
        }
    }
}