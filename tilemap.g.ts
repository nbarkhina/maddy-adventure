// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level1":return tiles.createTilemap(hex`200010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020000000000000200000000000000000000000000000003000000000000080202000002020000020000000000000000000000000000000000000000000607040400000404000004000000000000000000000000000000000000000006070704040005040000050400020202020202020202020202020004040404040404040404040404040404040002020202020202020202020202010000000000000000000000000000000000040404040404040404040404040404000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
......2222..22..2...............
.....22.22..2...2...............
22222222222222222...............
.................222222222222222
................................
................................
................................
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile5,myTiles.tile6,myTiles.tile3,myTiles.tile4,myTiles.tile9,myTiles.tile10,myTiles.tile12,myTiles.tile13], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile6":return tile6;
            case "myFlower":
            case "tile8":return tile8;
            case "myTile":
            case "tile9":return tile9;
            case "myTile0":
            case "tile10":return tile10;
            case "myTile1":
            case "tile11":return tile11;
            case "volcanoTile":
            case "tile12":return tile12;
            case "tile4":return tile4;
            case "tile7":return tile7;
            case "tile5":return tile5;
            case "myBrick":
            case "tile3":return tile3;
            case "tile0":
            case "tile13":return tile13;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
