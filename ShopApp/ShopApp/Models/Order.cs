using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Models
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }
        public string OrderDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string StreetName { get; set; }
        public string StreetNumber { get; set; }
        public string PaymentMethod { get; set; }
        public string OrderStatus { get; set; }
        [Column(TypeName = "nvarchar(450)")]
        public string UserID { get; set; }
        public virtual ApplicationUser User { get; set; }
        public Nullable<int> ItemID { get; set; }
        public virtual Item Item { get; set; }
        public int Quantity { get; set; }
        public int TotalPrice { get; set; }
    }
}
