using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace entry_provider
{
    public class Data
    {
        List<Entry> items = new List<Entry>();

        public List<Entry> Items => items;

        public Data()
        {
            items.Add(new Entry() { Id = 1, NameFirst = "Bob", NameLast = "Williams"});
            items.Add(new Entry() { Id = 2, NameFirst = "Murray", NameLast = "Timings"});
            items.Add(new Entry() { Id = 3, NameFirst = "James", NameLast = "Alan"});
            items.Add(new Entry() { Id = 4, NameFirst = "Allyson", NameLast = "Smith"});
            items.Add(new Entry() { Id = 5, NameFirst = "Myf", NameLast = "Kemp"});
            items.Add(new Entry() { Id = 6, NameFirst = "Clare", NameLast = "Jones"});
            items.Add(new Entry() { Id = 7, NameFirst = "Bob", NameLast = "Williams"});
            items.Add(new Entry() { Id = 8, NameFirst = "Bob", NameLast = "Timings"});
            items.Add(new Entry() { Id = 9, NameFirst = "Jin", NameLast = "Alan"});
            items.Add(new Entry() { Id = 10, NameFirst = "Al", NameLast = "Smith"});
            items.Add(new Entry() { Id = 11, NameFirst = "Stepharee", NameLast = "Kemp"});
            items.Add(new Entry() { Id = 12, NameFirst = "Sarah", NameLast = "Jones"});
        }
    }
}