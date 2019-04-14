using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace entry_provider
{
    public class Entry {
    
        public int Id { get; set; }
        public string NameFirst { get; set; }
        public string NameLast { get; set; }
        public int[] BookingCollection { get; set; }

    }
}