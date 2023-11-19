namespace SpriteKind {
    export const Buff = SpriteKind.create()
    export const Curse = SpriteKind.create()
}
scene.setBackgroundColor(2)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f f . . f f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Buff)
controller.moveSprite(mySprite)
