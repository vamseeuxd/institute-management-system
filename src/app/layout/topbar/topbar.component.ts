import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  @Input() showMenu = false;
  @Output() showMenuChange:EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
