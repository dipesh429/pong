import { pixi } from 'pixi.js';
import Bat from '../objects/Bat';
import Ball from '../objects/Ball';
import CONFIG from '../config';
import Vue from 'vue'
import {collision} from '../collision'


let stage = new PIXI.Container;

// automatic player
let bat1 = new Bat(0, 0x16a085, true);
let bat2 = new Bat(CONFIG.width-10, 0x16a085, true);
let ball = new Ball(0xecf0f1);

let msg1 = new PIXI.Text(0,new PIXI.TextStyle({fill:0xFFFFFF}))
msg1.x=40


let msg2 = new PIXI.Text(0,new PIXI.TextStyle({fill:0xFFFFFF}))
msg2.x=CONFIG.width-50

// update logic
let ticker = new PIXI.ticker.Ticker();

ticker.stop();
ticker.add( (del) => ball.check_boundary(del) );
ticker.add( (del) => collision(del) );
ticker.start();
// end update logic

stage.addChild( bat1.get_bat(), bat2.get_bat(), ball.get_ball(),msg1,msg2);

 new Vue({

	created(){
        window.addEventListener('keydown', this.do) 
    },

    methods:{

    	move(bat,x){

    		bat.y+=x

    	},

    	do(e){
    		
    		var batleft= bat1.get_bat()
    		var batright= bat2.get_bat()
    		var movelength = 40
    		var heightpaddle = 100
    	
    		
    		//up bat1
    		if(e.keyCode==87){

    			if(batleft.y>=movelength) this.move(batleft,-movelength)

    		}

    		//down bat1

    		if(e.keyCode==83){

    			if(batleft.y<CONFIG.height-(heightpaddle)) this.move(batleft,+movelength)
    			
    		}

    		//up bat2

    		if(e.keyCode==79){
    			
    			if(batright.y>=movelength) this.move(batright,-movelength)
    		}

    		//down bat2

    		if(e.keyCode==76){

    			if(batright.y<CONFIG.height-(heightpaddle)) this.move(batright,+movelength)
    		}

    		
    	}
    }
    
})


 var getball = ball.get_ball()
 var batleft = bat1.get_bat()
 var batright = bat2.get_bat()


export {stage,batleft,batright,getball,ball,bat1,bat2,msg1,msg2,ticker}