class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene")
    }

    preload() {
        this.load.spritesheet('elements', 'assets/elements.png', {
            frameWidth: 60, frameHeight: 90
        })
        this.load.spritesheet('mix', 'assets/mix.png', {
            frameWidth: 200, frameHeight: 300
        })
    }

    create() {
        function createElement(scene, x, y, frame) {
            let newElement = scene.add.sprite(x, y, 'elements', frame)
                .setOrigin(0)
                .setInteractive()
            scene.input.setDraggable(newElement)
            //return newElement
        }

        const mixer = this.add.sprite(500, 250, 'mix', 15)
    
        const agno3 = createElement(this, 0, 0, 0)
        const fecl3 = createElement(this, 100, 0, 1)
        const cuso4 = createElement(this, 200, 0, 2)
        const na2co3 = createElement(this, 300, 0, 0)
        const k2so4 = createElement(this, 400, 0, 0)
        const naoh = createElement(this, 0, 100, 0)
        const cacl2 = createElement(this, 0, 200, 0)

        //  The pointer has to move 16 pixels before it's considered as a drag
        this.input.dragDistanceThreshold = 16
        this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });
    }
}

var config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'game',
        width: 900,
        height: 500,
        mode: Phaser.Scale.FIT
    },
    scene: [MainScene]
};

var game = new Phaser.Game(config);