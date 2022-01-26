import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // UC1

  title = 'HelloWorld';

  ngOnInit(){
    this.title="Hello from bridgelabz";
  }

}
