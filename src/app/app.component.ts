import { Component } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  greeting!: string;

  constructor(private appService: AppServiceService) {
    this.greeting = this.appService.greet('John');
  }
}
