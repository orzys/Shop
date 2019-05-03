using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopApp.Migrations
{
    public partial class Item3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Raiting",
                table: "Items",
                newName: "ItemRaiting");

            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "Items",
                newName: "ItemQuantity");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "Items",
                newName: "ItemPrice");

            migrationBuilder.RenameColumn(
                name: "Image",
                table: "Items",
                newName: "ItemImage");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Items",
                newName: "ItemDescription");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ItemRaiting",
                table: "Items",
                newName: "Raiting");

            migrationBuilder.RenameColumn(
                name: "ItemQuantity",
                table: "Items",
                newName: "Quantity");

            migrationBuilder.RenameColumn(
                name: "ItemPrice",
                table: "Items",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "ItemImage",
                table: "Items",
                newName: "Image");

            migrationBuilder.RenameColumn(
                name: "ItemDescription",
                table: "Items",
                newName: "Description");
        }
    }
}
