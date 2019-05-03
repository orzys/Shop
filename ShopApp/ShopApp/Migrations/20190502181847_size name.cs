using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopApp.Migrations
{
    public partial class sizename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Sizes_SizesID",
                table: "Items");

            migrationBuilder.RenameColumn(
                name: "Size",
                table: "Sizes",
                newName: "SizeName");

            migrationBuilder.RenameColumn(
                name: "SizesID",
                table: "Items",
                newName: "SizeID");

            migrationBuilder.RenameIndex(
                name: "IX_Items_SizesID",
                table: "Items",
                newName: "IX_Items_SizeID");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Sizes_SizeID",
                table: "Items",
                column: "SizeID",
                principalTable: "Sizes",
                principalColumn: "SizeID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Sizes_SizeID",
                table: "Items");

            migrationBuilder.RenameColumn(
                name: "SizeName",
                table: "Sizes",
                newName: "Size");

            migrationBuilder.RenameColumn(
                name: "SizeID",
                table: "Items",
                newName: "SizesID");

            migrationBuilder.RenameIndex(
                name: "IX_Items_SizeID",
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
    }
}
