using API.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChuckController : ControllerBase
    {

        [Route("Categories")]
        [HttpPost]
        public IActionResult Categories(Framework.AllCriteria criteria)
        {

            List<string> items = new List<string>();
            var httpRequest = "https://api.chucknorris.io/jokes/categories";
            string json = (new WebClient()).DownloadString(httpRequest);
            var getItem = json.Split(",");


            foreach (var item in getItem)
            {
                item.Trim(new Char[] { ' ', '[', '"', ']' });

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





        [Route("LoadJoke")]
        [HttpGet]
        public IActionResult LoadJoke(string value)
        {
            var Item = "";
            var httpRequest = "";


            try
            {
                return new JsonResult(Item);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }



    }

}

