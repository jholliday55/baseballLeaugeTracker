import { Component, OnInit } from '@angular/core';
import { IPlayer } from '../types';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css', '.././project-details.component.css']
})
export class FamilyComponent implements OnInit {
  public dataSource: IPlayer[];
  public displayedColumns: string[] = ['name', 'dateOfBirth', 'familyId', 'teamId'];

  constructor() { }

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

}
