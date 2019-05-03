using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopApp.Migrations
{
    public partial class Item4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Sizes_SizesSizeID",
                table: "Items");

            migrationBuilder.RenameColumn(
                name: "SizesSizeID",
                table: "Items",
                newName: "SizesID");

            migrationBuilder.RenameIndex(
                name: "IX_Items_SizesSizeID",
                table: "Items",
                newName: "IX_Items_SizesID");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Sizes_SizesID",
                table: "Items",
                column: "SizesID",
                principalTable: "Sizes",
                principalColumn: "SizeID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Sizes_SizesID",
                table: "Items");

            migrationBuilder.RenameColumn(
                name: "SizesID",
                table: "Items",
                newName: "SizesSizeID");

            migrationBuilder.RenameIndex(
                name: "IX_Items_SizesID",
                table: "Items",
                newName: "IX_Items_SizesSizeID");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Sizes_SizesSizeID",
                table: "Items",
                column: "SizesSizeID",
                principalTable: "Sizes",
                principalColumn: "SizeID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
