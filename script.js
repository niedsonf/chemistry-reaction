class LoadingScene extends Phaser.Scene {

    constructor(){
        super("LoadingScene");
    }

    preload() {
        /*for(var i =0;i<60;i++) {
			this.load.image('background'+i, 'assets/background.jpg');
		} //PARA TESTAR LOADING */
        this.load.image('voltar', 'assets/voltar.png');
        this.load.image('menu', 'assets/menuscreen.jpg');
        this.load.image('jogar', 'assets/jogar.png');
        this.load.image('creditos', 'assets/creditos.png');
        this.load.image('guia', 'assets/guia.png');
        this.load.image('redcross', 'assets/redcross.png');
        this.load.image('reacoes', 'assets/reacoes.png');
        this.load.image('list', 'assets/list.jpg');
        this.load.image('bg', 'assets/background.jpg');
        this.load.image('balancebg', 'assets/balancebg.jpg');
        this.load.image('agno3', 'assets/agno3.png');
        this.load.image('cacl2', 'assets/cacl2.png');
        this.load.image('cuso4', 'assets/cuso4.png');
        this.load.image('fecl3', 'assets/fecl3.png');
        this.load.image('k2so4', 'assets/k2so4.png');
        this.load.image('na2co3', 'assets/na2co3.png');
        this.load.image('naoh', 'assets/naoh.png');
        this.load.image('redcheck', 'assets/redcheck.png');
        this.load.image('r1', 'assets/r1.png');
        this.load.image('r2', 'assets/r2.png');
        this.load.image('r3', 'assets/r3.png');
        this.load.image('r4', 'assets/r4.png');
        this.load.image('r5', 'assets/r5.png');
        this.load.image('r6', 'assets/r6.png');
        this.load.image('r7', 'assets/r7.png');
        this.load.image('r8', 'assets/r8.png');
        this.load.image('r9', 'assets/r9.png');
        this.load.image('inputbox', 'assets/inputbox.png');
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
            newGraphics:this.newGraphics,
            loadingText:loadingText
        });

		this.load.on('complete', () => this.scene.start("MenuScene"));
	}

	updateBar(percentage) {
		this.newGraphics.clear();
        this.newGraphics.fillStyle(0x8A2BE2, 1);
        this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(355, 255, percentage*390, 40));
        percentage = percentage * 100;
        this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%");
	}
}

class MenuScene extends Phaser.Scene {

    constructor(){
        super('MenuScene');
    }

    create(){

        this.add.image(0, 0, 'menu').setOrigin(0);

        var jogar = createSprite(50, 250, 'jogar', this)
            .on('pointerup', function (pointer){
                this.scene.start('GameScene');
            }, this);

        var guia = createSprite(400, 250, 'guia', this)
            .on('pointerup', function (pointer){
                this.scene.start('GuiaScene');
            }, this);

        var creditos = createSprite(750, 250, 'creditos', this)
            .on('pointerup', function (pointer){
                this.scene.start('CreditScene');
            }, this);

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        function createSprite(x, y, reference, scene){
            let newSprite = scene.add.sprite(x, y, reference)
                .setOrigin(0)
                .setInteractive()
            return newSprite;
        }
    }
}

class GuiaScene extends Phaser.Scene {
    
    constructor(){
        super('GuiaScene');
    }

    create(){

        this.add.sprite(0, 0, 'voltar')
            .setOrigin(0)
            .setInteractive()
            .on('pointerup', function(pointer){
                this.scene.start('MenuScene')
            }, this)

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });
    
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });
    }
}

class CreditScene extends Phaser.Scene {

    constructor(){
        super('CreditScene');
    }

    create(){

        this.add.sprite(0, 0, 'voltar')
            .setOrigin(0)
            .setInteractive()
            .on('pointerup', function(pointer){
                this.scene.start('MenuScene')
            }, this)

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });
    
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });
    }
}

class GameScene extends Phaser.Scene {
 
    constructor(){
        super('GameScene');
    }

    create (){

        const posx = [786, 951], posy = 27;
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
        
        this.add.image(0, 0, 'bg')
            .setOrigin(0);

        var text = this.add.text(600, 300, 'SELECIONE DOIS\n    REAGENTES', 
        {
            fontFamily: 'Forced Square',
            fontSize: 20
        });

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
            if(popup){popup.alpha = 1}
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });
    
        /// --- ADD SPRITES --- ///
        var agno3 = createSprite(25, 25, 'agno3', this)
            .on('pointerup', function (pointer){
                reactaux.agno3 = selecting(agno3, 25, 25, reactaux.agno3);
        });
    
        var fecl3 = createSprite(178, 25, 'fecl3', this)
            .on('pointerup', function (pointer){
                reactaux.fecl3 = selecting(fecl3, 178, 25, reactaux.fecl3);
        });
    
        var cuso4 = createSprite(331, 25, 'cuso4', this)
            .on('pointerup', function (pointer){
                reactaux.cuso4 = selecting(cuso4, 331, 25, reactaux.cuso4);
        });
        
        var na2co3 = createSprite(25, 256, 'na2co3', this)
            .on('pointerup', function (pointer){
                reactaux.na2co3 = selecting(na2co3, 25, 256, reactaux.na2co3);
        });
    
        var k2so4 = createSprite(178, 256, 'k2so4', this)
            .on('pointerup', function (pointer){
                reactaux.k2so4 = selecting(k2so4, 178, 256, reactaux.k2so4);
        });
    
        var naoh = createSprite(331, 256, 'naoh', this)
            .on('pointerup', function (pointer){
                reactaux.naoh = selecting(naoh, 331, 256, reactaux.naoh);
        });
    
        var cacl2 = createSprite(484, 256, 'cacl2', this)
            .on('pointerup', function (pointer){
                reactaux.cacl2 = selecting(cacl2, 484, 256, reactaux.cacl2);
        });

        /// --- REACT LIST --- ///
        var reacoes = createSprite(635, 49, 'reacoes', this)
            .on('pointerup', function(pointer){
                popup = createSprite(25, 30, 'list', this)
                    .on('pointerup', function (pointer){
                        popup.destroy();
                    });
            }, this);

        /// --- PUSH BALANCE SCENE --- ///
        var redcheck = createSprite(1000, 256, 'redcheck', this)
            .on('pointerup', function (pointer){
                var toNext = [];
                if(slot[0] && slot[1]){
                    for(let i in reactaux){
                        if(reactaux[i] == true){toNext.push(i)}
                    }
                    switch(true){
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
            }, this); //zerar array?

        /// --- FUNCTIONS --- ///
        function createSprite(x, y, reference, scene){
            let newSprite = scene.add.sprite(x, y, reference)
                .setOrigin(0)
                .setInteractive()
            return newSprite;
        }

        function defaultConfig(){
            agno3.setPosition(25, 25);
            fecl3.setPosition(178, 25);
            cuso4.setPosition(331, 25);
            na2co3.setPosition(25, 256);
            k2so4.setPosition(178, 256);
            naoh.setPosition(331, 256);
            cacl2.setPosition(484, 256);
            slot = [false, false];
            for(let i in reactaux){
                reactaux[i] = false;
            }
            text.setText('REAÇÃO INVÁLIDA');
            setTimeout(() => text.setText('SELECIONE DOIS\n    REAGENTES'), 1000);
        }

        function selecting(element, x, y, state){
            var s = state;
            if(!s && !slot[1] || !s && !slot[0]){
                switch(slot[0]){
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
                switch(element.x){
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

    constructor(){
        super('BalanceScene');
    }

    create(data){

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
        var collectCoef = []
        var coefV = generateInput(110, 65, this, 0)
        var coefW = generateInput(225, 65, this, 1)
        var coefX = generateInput(110, 133, this, 2)
        var coefZ = generateInput(225, 133, this, 3)

        this.add.image(0, 0, 'balancebg')
            .setOrigin(0);

        this.add.image(posx[0], posy, data[0])
            .setOrigin(0);

        this.add.image(posx[1], posy, data[1])
            .setOrigin(0);

        var eq = this.add.image(550, 400, data[2]);

        var inputbox = this.add.image(50, 50, 'inputbox')
            .setOrigin(0);

        var redcheck = this.add.sprite(310, 95, 'redcheck')
            .setOrigin(0)
            .setInteractive()
            .on('pointerup', function(pointer){
                let Answer = [];
                for(let i in gab){
                    if(i == data[2]){
                        Answer = gab[i];
                        break;
                    }
                }
                console.log(collectCoef);
                console.log(Answer);
                //funçao comparação

                //zerar array?
            });

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });
    
        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        function generateInput(x, y, scene, selector){
            var inputText = scene.add.rexInputText(x, y, 55, 35, 
            {
                type: 'number',
                text: '0',
                color: 'blueviolet',
                fontSize: '35px',
                fontFamily: 'Forced Square',
                backgroundColor: '#333333',
                align: 'center'
            })
                .setOrigin(0)
                .on('textchange', function (inputText) {
                    collectCoef[selector] = inputText.text;
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
    parent: 'game-container',
    dom: {createContainer: true},
    type: Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1100,
    height: 500,
    backgroundColor: '#4488aa',
    scene: [LoadingScene, MenuScene, GuiaScene, CreditScene, GameScene, BalanceScene]
};

var game = new Phaser.Game(config);