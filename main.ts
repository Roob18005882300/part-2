controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (JC == 0) {
        PlayerGuy.vy = -250
        JC += 1
    }
})
let JC = 0
let PlayerGuy: Sprite = null
PlayerGuy = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    c c c c b b c c c c c b b c c c 
    a a c b f f b c c c b f f b a a 
    a a a b f f b a a a b f f b a a 
    a a a a b b a a a a a b b a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a f f f f f a a a a 
    a a a a a a a a a a a f a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
scene.cameraFollowSprite(PlayerGuy)
controller.moveSprite(PlayerGuy, 100, 0)
PlayerGuy.ay = 1150
tiles.setTilemap(tilemap`level1`)
forever(function () {
    if (JC == 1) {
        pause(500)
        JC += -1
    }
})
