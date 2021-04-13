class Element extends Phaser.Scene{

    constructor(){
        super('Element');
    }

    create(name, x, y, select){
        var x = 0, y = 0, name = "", select = false;
        this.x = x;
        this.y = y;
        this.name = name;
        this.select = select;
    }
} 

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

        this.add.image(0, 0, 'menu').setOrigin(0, 0);
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

        creditos.on('pointerup', function (pointer){
            this.scene.start('CreditScene');
        }, this);

        guia.on('pointerup', function (pointer){
            this.scene.start('InfoScene');
        }, this);
    }
}

class InfoScene extends Phaser.Scene {

    constructor(){
        super('InfoScene');
    }

    preload(){
        this.load.image('voltar', 'assets/voltar.png');
    }

    create(){

        var voltar = this.add.sprite(0, 0, 'voltar').setOrigin(0).setInteractive();

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        voltar.on('pointerup', function (pointer){
            this.scene.start('MenuScene');
        }, this);
    }
}

class CreditScene extends Phaser.Scene {

    constructor(){
        super('CreditScene');
    }

    preload(){
        this.load.image('voltar', 'assets/voltar.png');
    }

    create(){

        var voltar = this.add.sprite(0, 0, 'voltar').setOrigin(0).setInteractive();

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        voltar.on('pointerup', function (pointer){
            this.scene.start('MenuScene');
        }, this);
    }
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
    }   

    create (){
 
        const posx = [786, 951], posy = 27;
        var popup, popupisOpen = false;
    
        var reactaux = {
            agno3: false,
            fecl3: false,
            cuso4: false,
            na2co3: false,
            k2so4: false,
            naoh: false,
            cacl2: false,
            pos1: false,
            pos2: false,
            element: "agno3"
        };

        function selecting(element, x, y, s){

            var ele = new Element(element, x, y, s);

            if(ele.select == undefined){ele.select = false}

            console.log(element);

            if(!ele.select){
                switch(reactaux.pos1){
                    case false:
                        ele.x = posx[0];
                        ele.y = posy; //setPosition(posx[0], posy);
                        //ele.select = true;
                        reactaux.pos1 = true;
                        break;
                    case true:
                        console.log("texto texto"+reactaux.pos1);
                        ele.x = posx [1];
                        ele.y = posy; //setPosition(posx[1], posy);
                        //ele.select = true;
                        reactaux.pos2 = true;
                        break;
                }
            } else {
                switch(ele.x){
                    case 786:
                        ele.setPosition(x, y);
                        ele.select = false;  
                        reactaux.pos1 = false;
                        break;
                    case 951:
                        ele.setPosition(x, y);
                        ele.select = false;  
                        reactaux.pos2 = false;
                        break;

                }
            }
        }
        
        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.alpha = 0.8;
            if(popupisOpen){popup.alpha = 1}
        });

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.alpha = 1;
        });

        this.add.image(0, 0, 'bg').setOrigin(0, 0);
    
        // --------------------- AGNO3 --------------------- 
        var agno3 = this.add.sprite(25, 25, 'agno3').setOrigin(0, 0).setInteractive();
    
        agno3.on('pointerup', function (pointer){
            selecting(agno3, 25, 25, false);
        });
        // --------------------- AGNO3 --------------------- 
    
        // --------------------- FECL3 --------------------- 
        var fecl3 = this.add.sprite(178, 25, 'fecl3').setOrigin(0, 0).setInteractive();

        fecl3.on('pointerup', function (pointer){
            selecting(fecl3, 178, 25, false);
        });
        // --------------------- FECL3 --------------------- 
    
        // --------------------- CUSO4 --------------------- 
        var cuso4 = this.add.sprite(331, 25, 'cuso4').setOrigin(0, 0).setInteractive();
  
        cuso4.on('pointerup', function (pointer){
            selecting(cuso4, 331, 25);
        });
        // --------------------- CUSO4 --------------------- 
        
        // --------------------- NA2CO3 ---------------------
        var na2co3 = this.add.sprite(25, 256, 'na2co3').setOrigin(0, 0).setInteractive();
    
        na2co3.on('pointerup', function (pointer){
            selecting(na2co3, 25, 256);
        });
        // --------------------- NA2CO3 ---------------------
    
        // --------------------- K2SO4 ---------------------
        var k2so4 = this.add.sprite(178, 256, 'k2so4').setOrigin(0, 0).setInteractive();

        k2so4.on('pointerup', function (pointer){
            selecting(k2so4, 178, 256);
        });
        // --------------------- K2SO4 ---------------------
    
        // --------------------- NAOH ---------------------
        var naoh = this.add.sprite(331, 256, 'naoh').setOrigin(0, 0).setInteractive();

        naoh.on('pointerup', function (pointer){
           selecting(naoh, 331, 256);
        });
        // --------------------- NAOH ---------------------
    
        // --------------------- CACL2 ---------------------
        var cacl2 = this.add.sprite(484, 256, 'cacl2').setOrigin(0, 0).setInteractive();
 
        cacl2.on('pointerup', function (pointer){
            selecting(cacl2, 484, 256);
        });
        // --------------------- CACL2 ---------------------
    
        // --------------------- REAÇÕES POPUP ---------------------
        var reacoes = this.add.sprite(635, 49, 'reacoes').setInteractive();
    
        reacoes.on('pointerup', function(pointer){
            if(!popupisOpen){
                popup = this.add.image(25, 30, 'list').setInteractive().setOrigin(0, 0);
                popupisOpen = true;
            }
            popup.on('pointerdown', function (pointer){
                popup.destroy();
                popupisOpen = false;
            });
        }, this);
        // --------------------- REAÇÕES POPUP ---------------------
    }
    
    /*selecting(element, x, y){
        console.log(reactaux.element+" "+x);
        if(!reactaux.element){
            switch(reactaux.pos1){
                case false:
                    element.setPosition(posx[0], posy);
                    reactaux.element = true;
                    reactaux.pos1 = true;
                    break;
                case true:
                    element.setPosition(posx[1], posy);
                    reactaux.element = true;
                    reactaux.pos2 = true;
                    break;
            }
        } else {
            switch(element.x){
                case 786:
                    element.setPosition(x, y);
                    reactaux.element = false;  
                    reactaux.pos1 = false;
                    break;
                case 951:
                    element.setPosition(x, y);
                    reactaux.element = false;  
                    reactaux.pos2 = false;
                    break;

            }
        }
    }*/
}

class BalanceScene extends Phaser.Scene {

    constructor(){
        super('BalanceScene');
    }

    preload(){
        this.load.image('button', 'assets/jogar.png');
    }



}

var config = {
    parent: 'game-container',
    type: Phaser.AUTO,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1100,
    height: 500,
    scene: [MenuScene, InfoScene, CreditScene, GameScene, BalanceScene]
}

var game = new Phaser.Game(config);