import { Component } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  constructor(public darkmode: DarkmodeService, ) {
     
  } 
  ngOnInit() {
    this.darkmode.init();
  }
}
