import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [PlayerService]
})
export class RosterComponent implements OnInit {
  players: FirebaseListObservable<any[]>;

  constructor(private router: Router, private PlayerService: PlayerService) { }

  ngOnInit() {
    this.players = this.PlayerService.getPlayers();
  }

  goToDetailPage(clickedPlayer: Player) {
   this.router.navigate(['players', clickedPlayer.$key]);
  }

}
