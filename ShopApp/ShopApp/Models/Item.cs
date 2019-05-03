using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Models
{
    public class Item
    {
        [Key]
        public int ItemID { get; set; }
        public string ItemName { get; set; }
        public int ItemQuantity { get; set; }
        public string ItemDescription { get; set; }
        public string ItemImage { get; set; }
        public decimal ItemPrice { get; set; }
        public decimal ItemRaiting { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public virtual Category Category { get; set; }
        public Nullable<int> ColorID { get; set; }
        public virtual Color Color { get; set; }
        public Nullable<int> SizeID { get; set; }
        public virtual Size Size { get; set; }
        public Nullable<int> BrandID { get; set; }
        public virtual Brand Brand { get; set; }
        public Nullable<int> SexID { get; set; }
        public virtual Sex Sex { get; set; }

    }
}
