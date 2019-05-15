using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace entry_provider.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntryController : ControllerBase
    {
        public static Data data = new Data();


        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Entry>> Get()
        {
            return data.Items;
        }

        [HttpGet("{id}")]
        public ActionResult<Entry> Get(int id)
        {
            return data.Items.FirstOrDefault(e => e.Id == id);
        }

        [HttpGet("{offSet}/{limit}")]
        public ActionResult<IEnumerable<Entry>> Get(int offSet, int limit)
        {
            return data.Items.GetRange(offSet, limit);
        }

        [HttpPost("{id}")]
        public ActionResult<bool> Post(int id, [FromQuery(Name = "NameFirst")] string NameFirst, [FromQuery(Name = "NameLast")] string NameLast)
        {
            var item = data.Items.FirstOrDefault(e => e.Id == id);

            if (item != null)
            {
                item.NameFirst = NameFirst;
                item.NameLast = NameLast;

                return true;
            }

            return false;
        }
    }
}
