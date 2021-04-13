class MenuScene extends Phaser.Scene {

    constructor(){
        super('MenuScene');
    }

    preload(){
        this.load.image('menu', 'assets/menuscreen.jpg');
        this.load.image('jogar', 'assets/jogar.png');
        this.load.image('creditos', 'assets/creditos.png');
        this.load.image('guia', 'assets/guia.png');
    }

    create(){

        this.add.image(0, 0, 'menu').setOrigin(0);
        var jogar = this.add.sprite(50, 250, 'jogar').setOrigin(0).setInteractive();
        var guia = this.add.sprite(400, 250, 'guia').setOrigin(0).setInteractive();
        var creditos = this.add.sprite(750, 250, 'creditos').setOrigin(0).setInteractive();

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        jogar.on('pointerup', function (pointer){
            this.scene.start('GameScene');
        }, this);

        guia.on('pointerup', function (pointer){
            this.scene.start('GuiaScene');
        }, this);

        creditos.on('pointerup', function (pointer){
            this.scene.start('CreditScene');
        }, this);

    }
}

class GuiaScene extends Phaser.Scene {

}

class CreditScene extends Phaser.Scene {

}

class GameScene extends Phaser.Scene {
 
    constructor(){
        super('GameScene');
    }

    preload (){
    this.load.image('bg', 'assets/background.jpg');
    this.load.image('agno3', 'assets/agno3.png');
    this.load.image('cacl2', 'assets/cacl2.png');
    this.load.image('cuso4', 'assets/cuso4.png');
    this.load.image('fecl3', 'assets/fecl3.png');
    this.load.image('k2so4', 'assets/k2so4.png');
    this.load.image('na2co3', 'assets/na2co3.png');
    this.load.image('naoh', 'assets/naoh.png');
    this.load.image('reacoes', 'assets/reacoes.png');
    this.load.image('list', 'assets/list.jpg');
    this.load.image('redcross', 'assets/redcross.png');
    this.load.image('redcheck', 'assets/redcheck.png');
    }   

    create (){
 
        const posx = [786, 951], posy = 27;
        var popup, popupisOpen = false;
        var slot = [false, false];
    
        var reactaux = {
            agno3: false,
            fecl3: false,
            cuso4: false,
            na2co3: false,
            k2so4: false,
            naoh: false,
            cacl2: false
        };
    
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
        
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
            if(popupisOpen){popup.alpha = 1}
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        this.add.image(0, 0, 'bg').setOrigin(0);
    
        // --------------------- AGNO3 --------------------- 
        var agno3 = this.add.sprite(25, 25, 'agno3').setOrigin(0).setInteractive();
    
        agno3.on('pointerup', function (pointer){
            reactaux.agno3 = selecting(agno3, 25, 25, reactaux.agno3);
        });
    
        // --------------------- FECL3 --------------------- 
        var fecl3 = this.add.sprite(178, 25, 'fecl3').setOrigin(0).setInteractive();

        fecl3.on('pointerup', function (pointer){
            reactaux.fecl3 = selecting(fecl3, 178, 25, reactaux.fecl3);
        });
    
        // --------------------- CUSO4 --------------------- 
        var cuso4 = this.add.sprite(331, 25, 'cuso4').setOrigin(0).setInteractive();
  
        cuso4.on('pointerup', function (pointer){
            reactaux.cuso4 = selecting(cuso4, 331, 25, reactaux.cuso4);
        });
        
        // --------------------- NA2CO3 ---------------------
        var na2co3 = this.add.sprite(25, 256, 'na2co3').setOrigin(0).setInteractive();
    
        na2co3.on('pointerup', function (pointer){
            reactaux.na2co3 = selecting(na2co3, 25, 256, reactaux.na2co3);
        });
    
        // --------------------- K2SO4 ---------------------
        var k2so4 = this.add.sprite(178, 256, 'k2so4').setOrigin(0).setInteractive();

        k2so4.on('pointerup', function (pointer){
            reactaux.k2so4 = selecting(k2so4, 178, 256, reactaux.k2so4);
        });
    
        // --------------------- NAOH ---------------------
        var naoh = this.add.sprite(331, 256, 'naoh').setOrigin(0).setInteractive();

        naoh.on('pointerup', function (pointer){
            reactaux.naoh = selecting(naoh, 331, 256, reactaux.naoh);
        });
    
        // --------------------- CACL2 ---------------------
        var cacl2 = this.add.sprite(484, 256, 'cacl2').setOrigin(0).setInteractive();
 
        cacl2.on('pointerup', function (pointer){
            reactaux.cacl2 = selecting(cacl2, 484, 256, reactaux.cacl2);
        });
    
        // --------------------- REAÇÕES POPUP ---------------------
        var reacoes = this.add.sprite(635, 49, 'reacoes').setInteractive();
    
        reacoes.on('pointerup', function(pointer){
            if(!popupisOpen){
                popup = this.add.image(25, 30, 'list').setInteractive().setOrigin(0);
                popupisOpen = true;
            }
            popup.on('pointerup', function (pointer){
                popup.destroy();
                popupisOpen = false;
            });
        }, this);

        // --------------------- PUSH BALANCE SCENE ---------------------
        var redcheck = this.add.sprite(1000, 256, 'redcheck').setOrigin(0).setInteractive();

        redcheck.on('pointerup', function (pointer){

            let toNext = [];

            if(slot[0] && slot[1]){
                for(let i in reactaux){
                    if(reactaux[i] == true){toNext.push(i)}
                }
                switch(true){
                    default:
                        defaultConfig();
                        break;
                    case toNext.includes('agno3' && 'cacl2'):
                        break;
                    case toNext.includes('agno3' && 'na2co3'):
                        break;    
                    case toNext.includes('agno3' && 'naoh'):
                        break;
                    case toNext.includes('agno3' && 'k2so4'):
                        break;
                    case toNext.includes('fecl3' && 'naoh'):
                        break;
                    case toNext.includes('fecl3' && 'na2co3'):
                        break;
                    case toNext.includes('cacl2' && 'na2co3'):
                        break;
                    case toNext.includes('cuso4' && 'naoh'):
                        break;
                    case toNext.includes('cuso4' && 'na2co3'):
                        break;                         
                }
            }
            
            console.log(toNext.toString());
            toNext.splice(0, toNext.length);
            console.log(toNext);

        }, this);

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
        }
    }
}

class BalanceScene extends Phaser.Scene {

    constructor(){
        super('BalanceScene');
    }

    preload(){
        this.load.image('bgbalance', 'assets/balancebg.jpg');
        this.load.image('agno3', 'assets/agno3.png');
        this.load.image('cacl2', 'assets/cacl2.png');
        this.load.image('cuso4', 'assets/cuso4.png');
        this.load.image('fecl3', 'assets/fecl3.png');
        this.load.image('k2so4', 'assets/k2so4.png');
        this.load.image('na2co3', 'assets/na2co3.png');
        this.load.image('naoh', 'assets/naoh.png');
        this.load.image('redcheck', 'assets/redcheck.png');
    }

    create(data){
        var balancebg = this.add.image(0, 0, 'balancebg').setOrigin(0);
        console.log(data);
    }

}

var config = {
    parent: 'game-container',
    type: Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1100,
    height: 500,
    scene: [MenuScene, CreditScene, GameScene, BalanceScene]
};

var game = new Phaser.Game(config);