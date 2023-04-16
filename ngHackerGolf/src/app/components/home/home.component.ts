import { Rounds } from './../../models/rounds';
import { Component, OnInit } from '@angular/core';
import { HackerGolfService } from 'src/app/services/hacker-golf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  rounds: Rounds[] = [];
  newRound: Rounds = new Rounds();
  selectedRound: Rounds | null = null;


  constructor(
    private golfService: HackerGolfService
  ){}

    ngOnInit(): void {
      this.reload();
    }

    reload() {

      this.golfService.index().subscribe({
        next: (data) => {
          this.rounds = data;
        },
        error: (fail) => {
          //TODO: log fail
        }
      })
    }

    createRound() {
    this.golfService.create(this.newRound).subscribe({
      next: (data) => {
        this.reload();
        this.newRound = new Rounds();
      },
      error: (fail) => {
        // TODO: log fail
      }
    });
  }

  deleteRound(roundId: number) {
    this.golfService.delete(roundId).subscribe({
      next: (data) => {
        this.reload();
      },
      error: (fail) => {
        // TODO: log fail
      }
    });
  }

  editRound(round: Rounds) {
    this.selectedRound = Object.assign({}, round);
  }

  updateRound() {
    if (this.selectedRound) {
      this.golfService.update(this.selectedRound.id, this.selectedRound).subscribe({
        next: (data) => {
          this.reload();
          this.selectedRound = null;
        },
        error: (fail) => {
          // TODO: log fail
        }
      });
    }
  }
}

