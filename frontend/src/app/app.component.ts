import { Component } from '@angular/core';
import { ApiService } from './api/api.service';
import { Joke } from './models/joke.model';
import { AvailableJokes } from './models/availableJokes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private apiService: ApiService) { }
  availableJokes = "Hiya"
  title = 'letterboardFrontEnd';
  submitJoke( available ) {
    const myJoke = { available };
    const availableJokes = this.apiService.checkJoke( myJoke ).subscribe(
      data => {
        this.availableJokes = '';
        for ( const joke of data.availableJokes ) {
          this.availableJokes += `${ joke }\n\n`
        }
      }
    );
  }
}
