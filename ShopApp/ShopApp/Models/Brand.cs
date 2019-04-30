using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Models
{
    public class Brand
    {
        [Key]
        public int BrandID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string BrandName { get; set; }
        public string BrandDescription { get; set; }
    }
}
