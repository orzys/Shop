using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopApp.Models;

namespace ShopApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public ItemsController(ApplicationContext context)
        {
            _context = context;
        }

        // GET: api/Items
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            var result = await (from a in _context.Items
                          join b in _context.Categories
                          on a.CategoryID equals b.CategoryID
                          join c in _context.Colors
                          on a.ColorID equals c.ColorID
                          join d in _context.Sizes
                          on a.SizeID equals d.SizeID
                          join e in _context.Brands
                          on a.BrandID equals e.BrandID
                          join f in _context.Sexes
                          on a.SexID equals f.SexID

                          select new
                          {
                              a.ItemID,
                              a.ItemName,
                              a.ItemQuantity,
                              a.ItemDescription,
                              a.ItemImage,
                              a.ItemPrice,
                              a.ItemRaiting,
                              b.CategoryID,
                              b.CategoryName,
                              c.ColorID,
                              c.ColorName,
                              d.SizeID,
                              d.SizeName,
                              e.BrandID,
                              e.BrandName,
                              f.SexID,
                              f.SexName
                          }).ToListAsync();

                        return Ok(result);
            //return await _context.Items.ToListAsync();
        }

        // GET: api/Items/ItemName  // GET: api/Items/5
        [HttpGet("{name}")]
        public async Task<ActionResult<Item>> GetItem(string name)
        {
            //var item = await _context.Items.FindAsync(id);

            //if (item == null)
            //{
            //    return NotFound();
            //}

            //return item;








            //var item = (from a in _context.Items
            //            where a.ItemID == id

            //            select new
            //            {
            //                a.ItemID,
            //                a.ItemDescription,
            //                a.ItemImage,
            //                a.ItemName,
            //                a.ItemPrice,
            //                a.ItemQuantity,
            //                a.ItemRaiting
            //            }).FirstOrDefault();


            //var itemDetails = await (from a in _context.Items
            //                         join b in _context.Categories
            //                         on a.CategoryID equals b.CategoryID
            //                         join c in _context.Colors
            //                         on a.ColorID equals c.ColorID
            //                         join d in _context.Sizes
            //                         on a.SizeID equals d.SizeID
            //                         join e in _context.Brands
            //                         on a.BrandID equals e.BrandID
            //                         join f in _context.Sexes
            //                         on a.SexID equals f.SexID

            //                         select new
            //                         {
            //                             a.ItemID,
            //                             a.ItemName,
            //                             a.ItemQuantity,
            //                             a.ItemDescription,
            //                             a.ItemImage,
            //                             a.ItemPrice,
            //                             a.ItemRaiting,
            //                             b.CategoryName,
            //                             c.ColorName,
            //                             d.SizeName,
            //                             e.BrandName,
            //                             f.SexName
            //                         }).ToListAsync();

            //return Ok(new { item, itemDetails });









            var item = (from a in _context.Items
                        where a.ItemName == name
                        join b in _context.Categories
                        on a.CategoryID equals b.CategoryID
                        join c in _context.Colors
                        on a.ColorID equals c.ColorID
                        join d in _context.Sizes
                        on a.SizeID equals d.SizeID
                        join e in _context.Brands
                        on a.BrandID equals e.BrandID
                        join f in _context.Sexes
                        on a.SexID equals f.SexID

                        select new
                        {
                            a.ItemID,
                            a.ItemName,
                            a.ItemQuantity,
                            a.ItemDescription,
                            a.ItemPrice,
                            a.ItemRaiting,
                            b.CategoryName,
                            c.ColorName,
                            d.SizeName,
                            e.BrandName,
                            f.SexName,
                            a.ItemImage
                        }).ToArray();
            return Ok(item);





            //var item = (from a in _context.Items
            //            where a.ItemName == name
            //            join b in _context.Categories
            //            on a.CategoryID equals b.CategoryID
            //            join c in _context.Colors
            //            on a.ColorID equals c.ColorID
            //            join d in _context.Sizes
            //            on a.SizeID equals d.SizeID
            //            join e in _context.Brands
            //            on a.BrandID equals e.BrandID
            //            join f in _context.Sexes
            //            on a.SexID equals f.SexID

            //            select new
            //            {
            //                a.ItemID,
            //                a.ItemName,
            //                a.ItemQuantity,
            //                a.ItemDescription,
            //                a.ItemPrice,
            //                a.ItemRaiting,
            //                b.CategoryName,
            //                c.ColorName,
            //                d.SizeName,
            //                e.BrandName,
            //                f.SexName,
            //                a.ItemImage
            //            }).FirstOrDefault();
            //return Ok(item);

        }

        // PUT: api/Items/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItem(int id, Item item)
        {
            if (id != item.ItemID)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Items
        [HttpPost]
        public async Task<ActionResult<Item>> PostItem(Item item)
        {
            _context.Items.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItem", new { id = item.ItemID }, item);
        }

        // DELETE: api/Items/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Item>> DeleteItem(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Items.Remove(item);
            await _context.SaveChangesAsync();

            return item;
        }

        private bool ItemExists(int id)
        {
            return _context.Items.Any(e => e.ItemID == id);
        }
    }
}
