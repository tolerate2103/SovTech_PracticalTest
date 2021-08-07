using API.Framework;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {

        [Route("LoadJoke")]
        [HttpGet]
        public IActionResult LoadJoke(string value)
        {
            var httpRequest = "https://api.chucknorris.io/jokes/search?query=" + value;
            string json = (new WebClient()).DownloadString(httpRequest);
            try
            {
                return new JsonResult(json);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [Route("LoadPerson")]
        [HttpGet]
        public IActionResult LoadPerson(string value)
        {
            var httpRequest = "https://swapi.dev/api/people/?search=" + value;
            string json = (new WebClient()).DownloadString(httpRequest);

            try
            {
                return new JsonResult(json);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

    }
}
