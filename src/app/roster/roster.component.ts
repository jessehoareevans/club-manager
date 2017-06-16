import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  players: Player[] = [
    new Player("Peter Schmeichel", "Danish", 53, "Goalkeeper"),
    new Player("Gianluigi Buffon", "Italian", 39, "Goalkeeper"),
    new Player("Roberto Carlos", "Brailian", 44, "Defender"),
    new Player("Jaap Stam", "Dutch", 44, "Defender"),
    new Player("Roy Keane", "Irish", 45, "Midfielder"),
    new Player("Paul Scholes", "English", 42, "Midfielder"),
    new Player("Ryan Giggs", "Welsh", 43, "Midfielder"),
    new Player("Eric Cantona", "French", 51, "Forward"),
    new Player("Ronaldinho", "Brazilian", 37, "Forward")
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage(clickedPlayer: Player) {
    this.router(['players', clickedPlayer.id])
  }

}
