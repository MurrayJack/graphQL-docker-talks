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
        Data data = new Data();

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
    }
}
