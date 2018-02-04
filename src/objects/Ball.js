import {pixi} from 'pixi.js';
import CONFIG from '../config';
import  { msg1 } from '../stages/mainStage';
import  { msg2 } from '../stages/mainStage';
import  { ticker } from '../stages/mainStage';
import {Howl, Howler} from 'howler';



// ball implementation of battle pong game
export default class Ball{
    constructor(color){
        // this.stage = new PIXI.Container();
        this.x=CONFIG.width/2
        this.y=CONFIG.height/2
        this.vx=3
        this.vy=3
        this.ball = PIXI.Sprite.fromImage('pong.png')
        this.ball = PIXI.Sprite.fromImage('pong.png')
        this.ball = PIXI.Sprite.fromImage('pong.png')
        this.draw_ball();
    }

    draw_ball(){

        this.ball.position.set(this.x,this.y)
        this.ball.scale.set(0.2,0.2)
    
        // this.stage.addChild(this.ball);
    }

    reset(x){

        ticker.stop()

         if(x=="right") msg1.text=parseInt(msg1._text)+1
        else    msg2.text=parseInt(msg2._text)+1


            

        this.ball.x=CONFIG.width/2
        this.ball.y=CONFIG.height/2

        setTimeout(()=>{
            alert('press enter to play again')
        },100)
        
       
        // console.log(parseInt(msg1._text))
        
        window.addEventListener('keydown', (e)=>{

                if(e.keyCode === 13){

                        ticker.start()
                       
                }

        })        

    }

    collision_move(){

        this.vx*= -1

    }

    check_boundary(){



        if(this.ball.y<=0 || this.ball.y>=(CONFIG.height-this.ball.height)){
            this.vy*= -1     
               
        } 

        if(this.ball.x>=(CONFIG.width-this.ball.width)){
            this.reset("right")
        }

        if(this.ball.x<=0){
            this.reset("left")
        }

        this.move_ball()  
          
    }


    move_ball(){
        
        // update the ball position here

             this.ball.x += this.vx;
             this.ball.y += this.vy;
       
    }

    // get_ball(){ return this.stage; }
    get_ball(){ return this.ball; }

}

