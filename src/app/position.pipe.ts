import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';
// import { PlayerComponent } from './player/player.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Pipe({
  name: 'position',
  pure: false
})

export class PositionPipe implements PipeTransform {

  transform(input: Player[], position) {
     var output: Player[] = [];
     if (position === "Goalkeeper") {
       for (var i = 0; i <input.length; i++) {
         if (input[i].position === "Goalkeeper") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (position === "Defender"){
       for (var i = 0; i <input.length; i++) {
         if (input[i].position === "Defender") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (position === "Midfielder"){
       for (var i = 0; i <input.length; i++) {
         if (input[i].position === "Midfielder") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (position === "Forward"){
       for (var i = 0; i <input.length; i++) {
         if (input[i].position === "Forward") {
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
   }
}
