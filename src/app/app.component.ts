import { LoadingService } from './shared/loading-service/loading.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ims';
  constructor(public loading: LoadingService) {}
}
