import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe,LowerCasePipe,CurrencyPipe,UpperCasePipe,JsonPipe,SlicePipe } from '@angular/common';//first step

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe,LowerCasePipe,CurrencyPipe,UpperCasePipe,JsonPipe,SlicePipe],//second step
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_basic';
  caps = "This lower case pipe";
  today = Date();
  num = 12334;
  myjson = {"name":"Tanvi","age":22,"salary":700000};
}
