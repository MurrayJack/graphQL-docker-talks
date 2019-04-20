using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace booking_provider
{
    public class BookingData
    {
        List<Booking> items = new List<Booking>();

        public List<Booking> Items => items;

        public BookingData()
        {
            items.Add(new Booking { Id = 1, EntryId = 1, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 1" });
            items.Add(new Booking { Id = 2, EntryId = 1, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 2" });
            items.Add(new Booking { Id = 3, EntryId = 2, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 3" });
            items.Add(new Booking { Id = 4, EntryId = 3, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 1" });
            items.Add(new Booking { Id = 5, EntryId = 4, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 5" });
            items.Add(new Booking { Id = 6, EntryId = 5, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 6" });
            items.Add(new Booking { Id = 7, EntryId = 5, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 7" });
            items.Add(new Booking { Id = 8, EntryId = 6, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 8" });
            items.Add(new Booking { Id = 9, EntryId = 7, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 10" });
            items.Add(new Booking { Id = 10, EntryId = 9, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 11" });
            items.Add(new Booking { Id = 11, EntryId = 10, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 12" });
            items.Add(new Booking { Id = 12, EntryId = 11, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 13" });
            items.Add(new Booking { Id = 13, EntryId = 12, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 14" });
            items.Add(new Booking { Id = 14, EntryId = 11, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 15" });
            items.Add(new Booking { Id = 15, EntryId = 7, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 11" });
            items.Add(new Booking { Id = 16, EntryId = 1, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 11" });
            items.Add(new Booking { Id = 17, EntryId = 2, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 13" });
            items.Add(new Booking { Id = 18, EntryId = 3, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 14" });
            items.Add(new Booking { Id = 19, EntryId = 3, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 1" });
            items.Add(new Booking { Id = 20, EntryId = 3, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 12" });
            items.Add(new Booking { Id = 21, EntryId = 3, StartDate = DateTime.Now, EndDate = DateTime.Now.AddYears(1), Location = "Building 1", Room = "Room 1" });

        }
    }
}