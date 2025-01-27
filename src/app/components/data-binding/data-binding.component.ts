import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  courseName: string = 'Angular 19';
  courseDur = '3 hrs';
  myPlaceHolder = 'Enter your name';
  clsName = 'bg-success';
  isActive = true;

  shiwWelcomeText() {
    alert('holaa');
  }

  showMsgmsg(msg: string) {
    alert(msg);
  }

  onStateChange() {
    alert('changed');
  }
}
