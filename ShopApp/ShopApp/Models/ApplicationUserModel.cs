using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Models
{
    public class ApplicationUserModel
    {
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
        public string StreetName { get; set; }
        public string StreetNumber { get; set; }
        public string Role { get; set; }
    }
}
