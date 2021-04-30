using System;
using Microsoft.AspNetCore.Mvc;
using coffeetea.Data;

namespace coffeetea.Controllers{
    
    [Route("api/[controller]")]
    public class TeaController:Controller{
        private ITeaService _service;
        public TeaController(ITeaService service){
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetTeainfo(){
            var tea = _service.GetTeaData();
            return Ok(tea);
        }
    }
}