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
    public class SwapiController : ControllerBase
    {

        [Route("People")]
        [HttpPost]
        public IActionResult People(Framework.AllCriteria criteria)
        {
            List<string> items = new List<string>();
            var httpRequest = "https://swapi.dev/api/people/";
            string json = (new WebClient()).DownloadString(httpRequest);
            var getItem = json.Split(",");

            foreach (var item in getItem)
            {
                items.Add(item);
            }
            try
            {
                return new JsonResult(items);
            }

            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
