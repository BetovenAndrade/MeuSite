import { Component } from '@angular/core';

@Component({  // <- Decorator: Diz que essa classe é um component
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'frontend';
}
