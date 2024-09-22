// Function to check button states
function checkButtons () {
    if (aPressed && leftPressed && rightPressed) {
        Render.toggleViewMode()
    }
}
// Event listeners for button presses
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    aPressed = true
    checkButtons()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    leftPressed = true
    checkButtons()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    rightPressed = false
    checkButtons()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    leftPressed = false
    checkButtons()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    rightPressed = true
    checkButtons()
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    aPressed = false
    checkButtons()
})
function start () {
    Render.moveWithController(5)
    Render.setViewAngleInDegree(90)
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
}
let rightPressed = false
let leftPressed = false
let aPressed = false
let mySprite: Sprite = null
// Initialize the map variable
let map = 0
mySprite = Render.getRenderSpriteVariable()
mySprite.setScale(0.75, ScaleAnchor.Middle)
start()
let pizzasteve = sprites.create(assets.image`skylarwhiteyo`, SpriteKind.Player)
pizzasteve.setScale(0.2, ScaleAnchor.Middle)
tiles.placeOnTile(pizzasteve, tiles.getTileLocation(12, 12))
Render.setZOffset(pizzasteve, -5)
