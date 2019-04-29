using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Models
{
    public class Category
    {
        [Key]
        public int CategoryID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string CategoryName { get; set; }
        public string CategoryDescription { get; set; }
    }
}
