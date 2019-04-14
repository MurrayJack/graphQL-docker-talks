using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace entry_provider.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<Entry>> Get()
        {
            List<Entry> items = new List<Entry>();

            items.Add(new Entry() { Id = 1, NameFirst = "Bob", NameLast = "Williams", BookingCollection = new int[] { 1, 2, 3 } });
            items.Add(new Entry() { Id = 2, NameFirst = "Murray", NameLast = "Timings", BookingCollection = new int[] { 4 } });
            items.Add(new Entry() { Id = 3, NameFirst = "James", NameLast = "Alan", BookingCollection = new int[] { 5 } });
            items.Add(new Entry() { Id = 4, NameFirst = "Allyson", NameLast = "Smith", BookingCollection = new int[] { 6, 7 } });
            items.Add(new Entry() { Id = 5, NameFirst = "Myf", NameLast = "Kemp", BookingCollection = new int[] { 8 } });
            items.Add(new Entry() { Id = 6, NameFirst = "Clare", NameLast = "Jones", BookingCollection = new int[] { 9 } });

            return items;
        }
    }
}
