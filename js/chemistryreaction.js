class LoadingScene extends Phaser.Scene {

    constructor() {
        super("LoadingScene");
    }

    preload() {
        /*for(var i =0;i<60;i++) {
            this.load.image('background'+i, 'assets/background.jpg');
        } //PARA TESTAR LOADING */
        this.load.image('creditbg', './assets/assets_old/creditbg.jpg');
        this.load.image('back', './assets/assets_old/back.png');
        this.load.image('reactcoins', './assets/assets_old/reactcoins.png')
        this.load.image('voltar', './assets/assets_old/voltar.png');
        this.load.image('menu', './assets/assets_old/menuscreen.jpg');
        this.load.image('jogar', './assets/assets_old/jogar.png');
        this.load.image('creditos', './assets/assets_old/creditos.png');
        this.load.image('redcross', './assets/assets_old/redcross.png');
        this.load.image('reacoes', './assets/assets_old/reacoes.png');
        this.load.image('list', './assets/assets_old/list.jpg');
        this.load.image('bg', './assets/assets_old/background.jpg');
        this.load.image('balancebg', './assets/assets_old/balancebg.jpg');
        this.load.image('agno3', './assets/assets_old/agno3.png');
        this.load.image('cacl2', './assets/assets_old/cacl2.png');
        this.load.image('cuso4', './assets/assets_old/cuso4.png');
        this.load.image('fecl3', './assets/assets_old/fecl3.png');
        this.load.image('k2so4', './assets/assets_old/k2so4.png');
        this.load.image('na2co3', './assets/assets_old/na2co3.png');
        this.load.image('naoh', './assets/assets_old/naoh.png');
        this.load.image('redcheck', './assets/assets_old/redcheck.png');
        this.load.image('r1', './assets/assets_old/r1.png');
        this.load.image('r2', './assets/assets_old/r2.png');
        this.load.image('r3', './assets/assets_old/r3.png');
        this.load.image('r4', './assets/assets_old/r4.png');
        this.load.image('r5', './assets/assets_old/r5.png');
        this.load.image('r6', './assets/assets_old/r6.png');
        this.load.image('r7', './assets/assets_old/r7.png');
        this.load.image('r8', './assets/assets_old/r8.png');
        this.load.image('r9', './assets/assets_old/r9.png');
        this.load.image('inputbox', './assets/assets_old/inputbox.png');
        this.load.plugin('rexinputtextplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexinputtextplugin.min.js', true);

        this.graphics = this.add.graphics();
        this.newGraphics = this.add.graphics();
        var progressBar = new Phaser.Geom.Rectangle(350, 250, 400, 50);
        var progressBarFill = new Phaser.Geom.Rectangle(355, 255, 0, 40);

        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillRectShape(progressBar);

        this.newGraphics.fillStyle(0x8A2BE2, 1);
        this.newGraphics.fillRectShape(progressBarFill);

        var loadingText = this.add.text(550, 320, "Loading: ",
            {
                fontSize: '32px',
                fill: '#8A2BE2',
                fontFamily: "Forced Square"
            });

        this.load.on('progress', this.updateBar,
            {
                newGraphics: this.newGraphics,
                loadingText: loadingText
            });

        this.load.on('complete', () => this.scene.start("MenuScene"));
    }

    updateBar(percentage) {
        this.newGraphics.clear();
        this.newGraphics.fillStyle(0x8A2BE2, 1);
        this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(355, 255, percentage * 390, 40));
        percentage = percentage * 100;
        this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%");
    }
}

class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    create() {

        this.add.image(0, 0, 'menu').setOrigin(0);
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        var jogar = createSprite(150, 250, 'jogar', this, 'GameScene');
        var creditos = createSprite(650, 250, 'creditos', this, 'CreditScene');

        function createSprite(x, y, reference, scene, key) {
            let newSprite = scene.add.sprite(x, y, reference)
                .setOrigin(0)
                .setInteractive()
                .on('pointerup', function (pointer) {
                    scene.scene.start(key);
                }, scene);
            return newSprite;
        }
    }
}

class CreditScene extends Phaser.Scene {

    constructor() {
        super('CreditScene');
    }

    create() {

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        this.add.image(0, 0, 'creditbg')
            .setOrigin(0)

        this.add.sprite(0, 455, 'voltar')
            .setOrigin(0)
            .setInteractive()
            .on('pointerup', function (pointer) {
                this.scene.start('MenuScene')
            }, this)
    }
}

class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
    }

    create(data) {

        const posx = [786, 951], posy = 27;
        const textStyle =
        {
            fontFamily: 'Forced Square',
            fontSize: 30,
            color: 'blueviolet',
            align: 'center',
            fixedWidth: 210,
            fixedHeight: 50,
            shadow: {
                offsetX: 0.8,
                offsetY: 0.8,
                color: '#000',
                blur: 0.5,
                stroke: true,
                fill: true
            }
        }
        var popup;
        var slot = [false, false];
        var reactaux =
        {
            agno3: false,
            fecl3: false,
            cuso4: false,
            na2co3: false,
            k2so4: false,
            naoh: false,
            cacl2: false
        };

        data.score ? this.score = data.score : this.score = 0;

        this.add.image(0, 0, 'bg')
            .setOrigin(0);

        createSprite(0, 0, 'back', this)
            .on('pointerup', function (pointer) {
                this.scene.start('MenuScene');
            }, this)

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
            if (popup) { popup.alpha = 1 }
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        /// --- ADD SPRITES --- ///
        var agno3 = createSprite(25, 25, 'agno3', this)
            .on('pointerup', function (pointer) {
                reactaux.agno3 = selecting(agno3, 25, 25, reactaux.agno3);
            });

        var fecl3 = createSprite(178, 25, 'fecl3', this)
            .on('pointerup', function (pointer) {
                reactaux.fecl3 = selecting(fecl3, 178, 25, reactaux.fecl3);
            });

        var cuso4 = createSprite(331, 25, 'cuso4', this)
            .on('pointerup', function (pointer) {
                reactaux.cuso4 = selecting(cuso4, 331, 25, reactaux.cuso4);
            });

        var na2co3 = createSprite(25, 256, 'na2co3', this)
            .on('pointerup', function (pointer) {
                reactaux.na2co3 = selecting(na2co3, 25, 256, reactaux.na2co3);
            });

        var k2so4 = createSprite(178, 256, 'k2so4', this)
            .on('pointerup', function (pointer) {
                reactaux.k2so4 = selecting(k2so4, 178, 256, reactaux.k2so4);
            });

        var naoh = createSprite(331, 256, 'naoh', this)
            .on('pointerup', function (pointer) {
                reactaux.naoh = selecting(naoh, 331, 256, reactaux.naoh);
            });

        var cacl2 = createSprite(484, 256, 'cacl2', this)
            .on('pointerup', function (pointer) {
                reactaux.cacl2 = selecting(cacl2, 484, 256, reactaux.cacl2);
            });

        /// --- REACTCOINS --- ///
        this.add.image(530, 150, 'reactcoins')
            .setOrigin(0);
        var scoreholder = this.add.text(530, 163, 'x ' + this.score, textStyle);

        /// --- REACT LIST --- ///
        var reacoes = createSprite(520, 49, 'reacoes', this)
            .on('pointerup', function (pointer) {
                popup = createSprite(25, 30, 'list', this)
                    .on('pointerup', function (pointer) {
                        popup.destroy();
                    });
            }, this);

        /// --- PUSH BALANCE SCENE --- ///
        var text = this.add.text(634, 297, "ESCOLHA OS\nREAGENTES", textStyle);
        var redcheck = createSprite(715, 360, 'redcheck', this)
            .on('pointerup', function (pointer) {
                let toNext = [];
                toNext.push(this.score);
                if (slot[0] && slot[1]) {
                    for (let i in reactaux) {
                        if (reactaux[i] == true) { toNext.push(i) }
                    }
                    switch (true) {
                        default:
                            defaultConfig();
                            break;
                        case ['agno3', 'cacl2'].every(elem => toNext.includes(elem)):
                            toNext.push('r1');
                            this.scene.start('BalanceScene', toNext);
                            break;
                        case ['agno3', 'na2co3'].every(elem => toNext.includes(elem)):
                            toNext.push('r2');
                            this.scene.start('BalanceScene', toNext);
                            break;
                        case ['agno3', 'naoh'].every(elem => toNext.includes(elem)):
                            toNext.push('r3');
                            this.scene.start('BalanceScene', toNext);
                            break;
                        case ['agno3', 'k2so4'].every(elem => toNext.includes(elem)):
                            toNext.push('r4');
                            this.scene.start('BalanceScene', toNext);
                            break;
                        case ['fecl3', 'naoh'].every(elem => toNext.includes(elem)):
                            toNext.push('r5');
                            this.scene.start('BalanceScene', toNext);
                            break;
                        case ['fecl3', 'na2co3'].every(elem => toNext.includes(elem)):
                            toNext.push('r6');
                            this.scene.start('BalanceScene', toNext);
                            break;
                        case ['cacl2', 'na2co3'].every(elem => toNext.includes(elem)):
                            toNext.push('r7');
                            this.scene.start('BalanceScene', toNext);
                            break;
                        case ['cuso4', 'naoh'].every(elem => toNext.includes(elem)):
                            toNext.push('r8');
                            this.scene.start('BalanceScene', toNext);
                            break;
                        case ['cuso4', 'na2co3'].every(elem => toNext.includes(elem)):
                            toNext.push('r9');
                            this.scene.start('BalanceScene', toNext);
                            break;
                    }
                }
            }, this);

        /// --- FUNCTIONS --- ///
        function createSprite(x, y, reference, scene) {
            let newSprite = scene.add.sprite(x, y, reference)
                .setOrigin(0)
                .setInteractive()
            return newSprite;
        }

        function defaultConfig() {
            agno3.setPosition(25, 25);
            fecl3.setPosition(178, 25);
            cuso4.setPosition(331, 25);
            na2co3.setPosition(25, 256);
            k2so4.setPosition(178, 256);
            naoh.setPosition(331, 256);
            cacl2.setPosition(484, 256);
            slot = [false, false];
            for (let i in reactaux) {
                reactaux[i] = false;
            }
            text.setText('REA????O\nINV??LIDA').setStyle({ color: 'red' });
            setTimeout(() => text.setText("ESCOLHA OS\nREAGENTES").setStyle(textStyle), 1000);
        }

        function selecting(element, x, y, state) {
            let s = state;
            if (!s && !slot[1] || !s && !slot[0]) {
                switch (slot[0]) {
                    case false:
                        element.setPosition(posx[0], posy);
                        s = true;
                        slot[0] = true;
                        break;
                    case true:
                        element.setPosition(posx[1], posy);
                        s = true;
                        slot[1] = true;
                        break;
                }
            } else {
                switch (element.x) {
                    case 786:
                        element.setPosition(x, y);
                        s = false;
                        slot[0] = false;
                        break;
                    case 951:
                        element.setPosition(x, y);
                        s = false;
                        slot[1] = false;
                        break;
                }
            }
            return s;
        }
    }
}

class BalanceScene extends Phaser.Scene {

    constructor() {
        super('BalanceScene');
    }

    create(data) {

        const posx = [786, 951], posy = 27;
        const gab =
        {
            r1: [2, 1, 2, 1],
            r2: [2, 1, 1, 2],
            r3: [1, 1, 1, 1],
            r4: [2, 1, 1, 2],
            r5: [1, 3, 1, 3],
            r6: [2, 3, 1, 6],
            r7: [1, 1, 1, 2],
            r8: [1, 2, 1, 1],
            r9: [1, 1, 1, 1]
        }
        const textStyle =
            [
                {
                    fontFamily: 'Forced Square',
                    fontSize: '30px',
                    color: 'blueviolet',
                    align: 'center',
                    fixedHeight: 50,
                    shadow: {
                        offsetX: 0.8,
                        offsetY: 0.8,
                        color: '#000',
                        blur: 0.5,
                        stroke: true,
                        fill: true
                    }
                },
                {
                    type: 'number',
                    text: '0',
                    color: 'blueviolet',
                    fontSize: '35px',
                    fontFamily: 'Forced Square',
                    backgroundColor: '#333333',
                    align: 'center'
                }
            ]

        var collectCoef = [], Answer = [], newScore = data[0];
        var coefV = generateInput(110, 65, this, 0);
        var coefW = generateInput(225, 65, this, 1);
        var coefX = generateInput(110, 133, this, 2);
        var coefZ = generateInput(225, 133, this, 3);

        this.add.image(0, 0, 'balancebg')
            .setOrigin(0);

        var back = this.add.sprite(0, 0, 'back')
            .setOrigin(0)
            .setInteractive()
            .on('pointerup', function (pointer) {
                this.scene.start('GameScene')
            }, this);

        this.add.image(posx[0], posy, data[1])
            .setOrigin(0);

        this.add.image(posx[1], posy, data[2])
            .setOrigin(0);

        var eq = this.add.image(550, 400, data[3]);

        var inputbox = this.add.image(50, 50, 'inputbox')
            .setOrigin(0);

        var text = this.add.text(70, 200, "INSIRA OS\nCOEFICIENTES", textStyle[0]);

        var redcheck = this.add.sprite(310, 95, 'redcheck')
            .setOrigin(0)
            .setInteractive()
            .on('pointerup', function (pointer) {
                for (let i in gab) {
                    i == data[3] && String(gab[i]) == String(collectCoef) ? correctInput(this) : wrongInput()
                }
            }, this);

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        function correctInput(ref) {
            newScore++
            ref.scene.start('GameScene', { score: newScore })
        }

        function wrongInput() {
            text.setText('INCORRETO').setStyle({ color: 'red' });
            setTimeout(() => text.setText("INSIRA OS\nCOEFICIENTES").setStyle(textStyle[0]), 1500);
        }

        function generateInput(x, y, scene, selector) {
            let inputText = scene.add.rexInputText(x, y, 55, 35, textStyle[1])
                .setOrigin(0)
                .on('textchange', function (inputText) {
                    collectCoef[selector] = parseInt(inputText.text);
                })
                .node.addEventListener("keypress", function (evt) {
                    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57) {
                        evt.preventDefault();
                    }
                });
            return inputText;
        }
    }
}

var config = {
    dom: { createContainer: true },
    type: Phaser.AUTO,
    scale: {
        parent: 'gameholder',
        width: 1100,
        height: 500,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    scene: [LoadingScene, MenuScene, CreditScene, GameScene, BalanceScene]
};

var game = new Phaser.Game(config);

/*class MainScene extends Phaser.Scene {

    constructor() {
        super("MainScene")
    }

    preload() {
        this.load.spritesheet('elements', './assets/elements.png', {
            frameWidth: 60, frameHeight: 90
        })
        this.load.spritesheet('mix', './assets/mix.png', {
            frameWidth: 200, frameHeight: 300
        })
    }

    create() {

        const TEXT_STYLE =
        {
            fontFamily: 'Arial',
            fontSize: 22,
            color: 'white',
        }

        const MIXER = this.add.sprite(700, 300, 'mix', 15)
    
        const FECL3 = createElement(this, 30, 30, 1, 'FeCl???')
        const CUSO4 = createElement(this, 140, 30, 2, 'CuSO???')
        const AGNO3 = createElement(this, 30, 190, 0, 'AgNO???')
        const NA2CO3 = createElement(this, 140, 190, 0, 'Na???CO???')
        const K2SO4 = createElement(this, 30, 350, 0, 'K???SO???')
        const NAOH = createElement(this, 140, 350, 0, 'NaOH')
        const CACL2 = createElement(this, 250, 350, 0, 'CaCl???')

        function createElement(scene, x, y, frame, elem) {
            let newElement = scene.add.sprite(x, y, 'elements', frame)
                .setOrigin(0)
                .setInteractive()
            scene.add.text(x, y+90, elem, TEXT_STYLE)
            return newElement
        }

        

    }
}*/