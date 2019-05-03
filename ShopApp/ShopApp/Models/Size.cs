using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Models
{
    public class Size
    {
        [Key]
        public int SizeID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(3)")]
        public string SizeName { get; set; }
    }
}
