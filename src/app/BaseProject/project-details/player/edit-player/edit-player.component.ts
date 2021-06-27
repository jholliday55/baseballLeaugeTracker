import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPlayer } from '../../types';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  public player: IPlayer;
  public formGroup: FormGroup;
  public header: string;

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder) { }

  public ngOnInit(): void {
    console.log(this.data);
    if (this.data && this.data.player) {
      this.player = this.data.player;
      this.header = 'Edit';
    } else {
      this.header = 'Add';
    }

    this.initform();
  }

  public initform(): void {
    this.formGroup = this.fb.group({
      name: [this.player && this.player.name],
      dateOfBirth: [this.player && this.player.dateOfBirth],
      familyId: [this.player && this.player.familyId],
      teamId: [this.player && this.player.teamId],
    })
  }

}
