using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Models
{
    public class Color
    {
        [Key]
        public int ColorID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string ColorName { get; set; }
        public string ColorCode { get; set; }
    }
}
