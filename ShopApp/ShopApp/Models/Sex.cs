using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopApp.Models
{
    public class Sex
    {
        [Key]
        public int SexID { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string SexName { get; set; }
    }
}
