import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../types';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditPlayerComponent } from './edit-player/edit-player.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css', '.././project-details.component.css']
})
export class PlayerComponent implements OnInit {
  public dataSource: IPlayer[];
  public displayedColumns: string[] = ['name', 'dateOfBirth', 'familyId', 'teamId'];

  constructor(public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.dataSource = [
      { name: 'john', dateOfBirth: new Date(), familyId: 5, teamId: 10, col: 'test', id: 2 },
      { name: 'jake', dateOfBirth: new Date(), familyId: 6, teamId: 10, col: 'test', id: 2 },
      { name: 'bob', dateOfBirth: new Date(), familyId: 7, teamId: 10, col: 'test', id: 2 },
      { name: 'tom', dateOfBirth: new Date(), familyId: 8, teamId: 10, col: 'test', id: 2 },
      { name: 'name', dateOfBirth: new Date(), familyId: 9, teamId: 10, col: 'test', id: 2 },
      { name: 'test', dateOfBirth: new Date(), familyId: 10, teamId: 10, col: 'test', id: 2 },
      { name: 'brandon', dateOfBirth: new Date(), familyId: 11, teamId: 10, col: 'test', id: 2 },
      { name: 'justin', dateOfBirth: new Date(), familyId: 512, teamId: 10, col: 'test', id: 2 },
    ];

    this.dataSource.forEach(item => {
      item.dateOfBirth = item.dateOfBirth.toDateString();
    })
  }

  public onEditPlayer(event: any): void {
    console.log(event);

    const dialogRef = this.dialog.open(EditPlayerComponent, {
      // width: '250px',
      data: { player: event },
    });
  }

}