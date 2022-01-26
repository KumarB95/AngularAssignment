import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // UC1

  title = 'HelloWorld';

  imgUrl="../assets/WhatsApp Image 2022-01-26 at 8.25.00 PM.jpeg"

  ngOnInit(){
    this.title="Hello from bridgelabz";
  }

}
