using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopApp.Migrations
{
    public partial class Item1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Categories_Items_ItemID",
                table: "Categories");

            migrationBuilder.DropForeignKey(
                name: "FK_Colors_Items_ItemID",
                table: "Colors");

            migrationBuilder.DropForeignKey(
                name: "FK_Sizes_Items_ItemID",
                table: "Sizes");

            migrationBuilder.DropIndex(
                name: "IX_Sizes_ItemID",
                table: "Sizes");

            migrationBuilder.DropIndex(
                name: "IX_Colors_ItemID",
                table: "Colors");

            migrationBuilder.DropIndex(
                name: "IX_Categories_ItemID",
                table: "Categories");

            migrationBuilder.DropColumn(
                name: "ItemID",
                table: "Sizes");

            migrationBuilder.DropColumn(
                name: "ItemID",
                table: "Colors");

            migrationBuilder.DropColumn(
                name: "ItemID",
                table: "Categories");

            migrationBuilder.AddColumn<int>(
                name: "CategoryID",
                table: "Items",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ColorID",
                table: "Items",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SizesSizeID",
                table: "Items",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Items_CategoryID",
                table: "Items",
                column: "CategoryID");

            migrationBuilder.CreateIndex(
                name: "IX_Items_ColorID",
                table: "Items",
                column: "ColorID");

            migrationBuilder.CreateIndex(
                name: "IX_Items_SizesSizeID",
                table: "Items",
                column: "SizesSizeID");

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Categories_CategoryID",
                table: "Items",
                column: "CategoryID",
                principalTable: "Categories",
                principalColumn: "CategoryID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Colors_ColorID",
                table: "Items",
                column: "ColorID",
                principalTable: "Colors",
                principalColumn: "ColorID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Items_Sizes_SizesSizeID",
                table: "Items",
                column: "SizesSizeID",
                principalTable: "Sizes",
                principalColumn: "SizeID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Items_Categories_CategoryID",
                table: "Items");

            migrationBuilder.DropForeignKey(
                name: "FK_Items_Colors_ColorID",
                table: "Items");

            migrationBuilder.DropForeignKey(
                name: "FK_Items_Sizes_SizesSizeID",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_CategoryID",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_ColorID",
                table: "Items");

            migrationBuilder.DropIndex(
                name: "IX_Items_SizesSizeID",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "CategoryID",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "ColorID",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "SizesSizeID",
                table: "Items");

            migrationBuilder.AddColumn<int>(
                name: "ItemID",
                table: "Sizes",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ItemID",
                table: "Colors",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ItemID",
                table: "Categories",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sizes_ItemID",
                table: "Sizes",
                column: "ItemID");

            migrationBuilder.CreateIndex(
                name: "IX_Colors_ItemID",
                table: "Colors",
                column: "ItemID");

            migrationBuilder.CreateIndex(
                name: "IX_Categories_ItemID",
                table: "Categories",
                column: "ItemID");

            migrationBuilder.AddForeignKey(
                name: "FK_Categories_Items_ItemID",
                table: "Categories",
                column: "ItemID",
                principalTable: "Items",
                principalColumn: "ItemID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Colors_Items_ItemID",
                table: "Colors",
                column: "ItemID",
                principalTable: "Items",
                principalColumn: "ItemID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Sizes_Items_ItemID",
                table: "Sizes",
                column: "ItemID",
                principalTable: "Items",
                principalColumn: "ItemID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
