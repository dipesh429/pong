import {pixi} from 'pixi.js';
import CONFIG from './config';
import {Howl, Howler} from 'howler';

import  { getball } from './stages/mainStage';
import  { batleft } from './stages/mainStage';
import  { batright } from './stages/mainStage';
import  { ball } from './stages/mainStage';
import  { bat2 } from './stages/mainStage';
import  { bat1 } from './stages/mainStage';

var collision=()=>{

	// console.log(Math.floor(getball.x+getball.width))
	// console.log(CONFIG.width)
	// console.log(CONFIG.width-batright.width) //628

	if((Math.floor(getball.x+getball.width)+1)==(CONFIG.width-batright.width) || (Math.floor(getball.x)+1)==(batright.width)) {
	
	
		if((getball.y >=batright.y && getball.y<=(batright.y+100)) || (getball.y >= batleft.y && getball.y<=(batleft.y+100))) {
			// console.log('hey')

			const sound = new Howl({
				src:'1.mp3'
			})

			sound.play()

			ball.collision_move()
		}

		// else {

			// console.log('hllooooooo')
		// }


	}
	

}

export { collision }

