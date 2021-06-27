import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDetailsComponent } from './BaseProject/project-details/project-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { FamilyComponent } from './BaseProject/project-details/family/family.component';
import { PlayerComponent } from './BaseProject/project-details/player/player.component';
import { CoachesComponent } from './BaseProject/project-details/coaches/coaches.component';
import { DivisionComponent } from './BaseProject/project-details/division/division.component';
import { TeamComponent } from './BaseProject/project-details/team/team.component';
import { InvoiceComponent } from './BaseProject/project-details/invoice/invoice.component';
import { EditPlayerComponent } from './BaseProject/project-details/player/edit-player/edit-player.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ProjectDetailsComponent,
    FamilyComponent,
    PlayerComponent,
    CoachesComponent,
    DivisionComponent,
    TeamComponent,
    InvoiceComponent,
    EditPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatDialogModule,
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [MatFormFieldModule, MatInputModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
