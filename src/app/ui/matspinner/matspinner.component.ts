import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-matspinner',
  templateUrl: './matspinner.component.html',
  styleUrls: ['./matspinner.component.css']
})
export class MatspinnerComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  constructor() { }

  ngOnInit() {
  }
  

}
