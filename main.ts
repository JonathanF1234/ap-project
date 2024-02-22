function Spanwing (Difficulty: number) {
    if (Difficulty == 1) {
    	
    } else if (Difficulty == 2) {
    	
    } else if (Difficulty == 3) {
    	
    } else if (Difficulty == 4) {
    	
    } else if (Difficulty == 5) {
    	
    }
}
function Level (CurrentLevel: number) {
    if (CurrentLevel == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (CurrentLevel == 2) {
    	
    } else if (CurrentLevel == 3) {
    	
    }
}
let Difficulty = game.askForNumber("Select Difficulty only 1-3 is valid", 1)
let CurrentLevel = 1
Level(CurrentLevel)
let mySprite = sprites.create(img`
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
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 1))
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
scene.cameraFollowSprite(mySprite)
if (Difficulty == 0 || Difficulty > 3) {
    Difficulty = game.askForNumber("Invalid, Select Difficulty only 1-3 is valid", 1)
}
let Enemy_list = [0, 1]
Spanwing(Difficulty)
