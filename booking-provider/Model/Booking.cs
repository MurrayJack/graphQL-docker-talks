using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace booking_provider
{


    public class Booking {
    
        public int Id { get; set; }
       
        public int EntryId { get; set; }
       
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Location { get; set; }

        public string Room { get; set; }

    }
}