function Spanwing (Difficulty: number) {
    if (Difficulty == 1 && CurrentLevel == 1) {
        for (let index = 0; index < 20; index++) {
            Snake = sprites.create(Enemy_list[0], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Snake, sprites.dungeon.darkGroundNorthEast1)
            Snake.follow(mySprite, 90)
        }
        info.setScore(20)
    } else if (Difficulty == 2 && CurrentLevel == 1) {
        for (let index = 0; index < 20; index++) {
            Snake = sprites.create(Enemy_list[0], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Snake, sprites.dungeon.darkGroundNorthEast1)
            Snake.follow(mySprite, 90)
        }
        Enemy_list.push(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `)
        for (let index = 0; index < 15; index++) {
            Ghost = sprites.create(Enemy_list[1], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Ghost, sprites.dungeon.darkGroundNorthWest1)
            Ghost.follow(mySprite, 80)
        }
        info.setScore(35)
    } else if (Difficulty == 3 && CurrentLevel == 1) {
        Enemy_list.push(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `)
        for (let index = 0; index < 20; index++) {
            Ghost = sprites.create(Enemy_list[1], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Ghost, sprites.dungeon.darkGroundNorthWest1)
            Ghost.follow(mySprite, 80)
        }
        for (let index = 0; index < 20; index++) {
            Ghost = sprites.create(Enemy_list[1], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Ghost, sprites.dungeon.darkGroundNorthEast1)
            Ghost.follow(mySprite, 80)
        }
        info.setScore(40)
    }
    if (Difficulty == 2 && CurrentLevel == 2) {
        Enemy_list.push(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c 1 b b b 1 b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b 1 f f 1 c b b b b f . . . . 
            f f 1 f f 1 f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `)
        for (let index = 0; index < 20; index++) {
            Snake = sprites.create(Enemy_list[0], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Snake, img`myTile6`)
            Snake.follow(mySprite, 90)
        }
        for (let index = 0; index < 15; index++) {
            Bat = sprites.create(Enemy_list[1], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Bat, sprites.castle.tileDarkGrass1)
            Bat.follow(mySprite, 120)
        }
    } else if (Difficulty == 3 && CurrentLevel == 2) {
        if (Enemy_list.length == 2) {
            Enemy_list.pop()
        }
        Enemy_list.push(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c 1 b b b 1 b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b 1 f f 1 c b b b b f . . . . 
            f f 1 f f 1 f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `)
        for (let index = 0; index < 30; index++) {
            Snake = sprites.create(Enemy_list[0], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Snake, img`myTile6`)
            Snake.follow(mySprite, 90)
        }
        for (let index = 0; index < 20; index++) {
            Bat = sprites.create(Enemy_list[1], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Bat, sprites.castle.tileDarkGrass1)
            Bat.follow(mySprite, 120)
        }
    } else if (Difficulty == 4 && CurrentLevel == 2) {
        if (Enemy_list.length == 2) {
            Enemy_list.shift()
        }
        Enemy_list.push(img`
            . . f f f . . . . . . . . f f f 
            . f f c c . . . . . . f c b b c 
            f f c c . . . . . . f c b b c . 
            f c f c . . . . . . f b c c c . 
            f f f c c . c c . f c b b c c . 
            f f c 3 c c 3 c c f b c b b c . 
            f f b 3 b c 3 b c f b c c b c . 
            . c 1 b b b 1 b c b b c c c . . 
            . c 1 b b b 1 b b c c c c . . . 
            c b b b b b b b b b c c . . . . 
            c b 1 f f 1 c b b b b f . . . . 
            f f 1 f f 1 f b b b b f c . . . 
            f f 2 2 2 2 f b b b b f c c . . 
            . f 2 2 2 2 b b b b c f . . . . 
            . . f b b b b b b c f . . . . . 
            . . . f f f f f f f . . . . . . 
            `)
        for (let index = 0; index < 30; index++) {
            Ghost = sprites.create(Enemy_list[0], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Ghost, img`myTile6`)
            Ghost.follow(mySprite, 80)
        }
        for (let index = 0; index < 30; index++) {
            Bat = sprites.create(Enemy_list[1], SpriteKind.Enemy)
            tiles.placeOnRandomTile(Bat, sprites.castle.tileDarkGrass1)
            Bat.follow(mySprite, 120)
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setScore(0)
})
info.onScore(0, function () {
    CurrentLevel += 1
})
function Level (CurrentLevel: number) {
    if (CurrentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
    } else if (CurrentLevel == 2) {
        tiles.setCurrentTilemap(tilemap`level5`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    info.changeScoreBy(-1)
})
let Bat: Sprite = null
let Ghost: Sprite = null
let Snake: Sprite = null
let Enemy_list: Image[] = []
let mySprite: Sprite = null
let CurrentLevel = 0
let Difficulty = 1
Difficulty = game.askForNumber("Select Difficulty only 1-3 is valid", 1)
CurrentLevel = 1
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 110, 110)
mySprite.setStayInScreen(true)
info.setLife(500)
scene.cameraFollowSprite(mySprite)
if (Difficulty == 0 || Difficulty > 3) {
    Difficulty = game.askForNumber("Invalid, Select Difficulty only 1-3 is valid", 1)
}
Enemy_list = [img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `]
forever(function () {
    if (CurrentLevel == 1) {
        Level(CurrentLevel)
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
    pauseUntil(() => CurrentLevel == 2)
    if (CurrentLevel == 2) {
        Level(CurrentLevel)
    }
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 2))
    pauseUntil(() => CurrentLevel == 3)
    if (CurrentLevel == 3) {
        tiles.setWallAt(tiles.getTileLocation(13, 23), false)
        tiles.setWallAt(tiles.getTileLocation(14, 23), false)
    }
})
forever(function () {
    if (CurrentLevel == 1) {
        Spanwing(Difficulty)
    }
    pauseUntil(() => CurrentLevel == 2)
    if (CurrentLevel == 2) {
        Difficulty += 1
        Spanwing(Difficulty)
    }
    pauseUntil(() => CurrentLevel == 3)
})
