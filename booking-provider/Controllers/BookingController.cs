using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace booking_provider.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        BookingData bookingData = new BookingData();

        [HttpGet]
        public ActionResult<IEnumerable<Booking>> Get()
        {
            return bookingData.Items;
        }

        [HttpGet("{entryId}")]
        public ActionResult<IEnumerable<Booking>> Get(int entryId)
        {
            return bookingData.Items.Where((e) => e.EntryId == entryId).ToList();
        }
    }
}
