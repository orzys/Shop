using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ShopApp.Migrations
{
    public partial class Item : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    ItemID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ItemName = table.Column<string>(nullable: true),
                    Quantity = table.Column<int>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    Raiting = table.Column<decimal>(nullable: false),
                    BrandID = table.Column<int>(nullable: true),
                    SexID = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.ItemID);
                    table.ForeignKey(
                        name: "FK_Items_Brands_BrandID",
                        column: x => x.BrandID,
                        principalTable: "Brands",
                        principalColumn: "BrandID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Items_Sexes_SexID",
                        column: x => x.SexID,
                        principalTable: "Sexes",
                        principalColumn: "SexID",
                        onDelete: ReferentialAction.Restrict);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_Items_BrandID",
                table: "Items",
                column: "BrandID");

            migrationBuilder.CreateIndex(
                name: "IX_Items_SexID",
                table: "Items",
                column: "SexID");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropTable(
                name: "Items");

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
        }
    }
}
