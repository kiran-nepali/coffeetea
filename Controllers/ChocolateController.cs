using System;
using Microsoft.AspNetCore.Mvc;
using coffeetea.Data;

namespace coffeetea.Controllers{
    
    [Route("api/[controller]")]
    public class ChocolateController:ControllerBase{
        private IChocolateService _service;
        public ChocolateController(IChocolateService service){
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetChocolateinfo(){
            var chocolate = _service.GetChocolateData();
            return Ok(chocolate);
        }
    }
}