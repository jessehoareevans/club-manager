import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';
import { PlayerComponent } from './player/player.component';
import { WelcomeComponent } from './welcome/welcome.component';

@Pipe({
  name: 'position',
  pure: false
})

export class PositionPipe implements PipeTransform {

  transform(input: Player[], position) {
     var output: Player[] = [];
     if (style === "Goalkeeper") {
       for (var i = 0; i <input.length; i++) {
         if (input[i].style === "Goalkeeper") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (style === "Defender"){
       for (var i = 0; i <input.length; i++) {
         if (input[i].style === "Defender") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (style === "Midfielder"){
       for (var i = 0; i <input.length; i++) {
         if (input[i].style === "Midfielder") {
           output.push(input[i]);
         }
       }
       return output;
     } else if (style === "Forward"){
       for (var i = 0; i <input.length; i++) {
         if (input[i].style === "Forward") {
           output.push(input[i]);
         }
       }
       return output;
     } else {
       return input;
     }
   }
}
