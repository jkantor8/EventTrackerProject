import { Time } from "@angular/common";

export class Rounds {
  id: number
  date: string;
  start: string;
  end: string;
  notes: string;
  holesPlayed: number;

  constructor(
    id: number = 0,
    date: string = '',
    start: string = '',
    end: string = '',
    notes: string = '',
    holesPlayed: number = 0
  ) {
    this.id = id;
    this.date = date;
    this.start = start;
    this.end = end;
    this.notes = notes;
    this.holesPlayed = holesPlayed;
  }

}
