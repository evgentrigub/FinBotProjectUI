import { Component, OnInit, Inject } from '@angular/core';
import { Strategy } from '../../models/strategy';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-strategy-dialog',
  templateUrl: './strategy-dialog.component.html',
  styleUrls: ['./strategy-dialog.component.scss'],
})
export class StrategyDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Strategy) { }

  ngOnInit() { }
}
