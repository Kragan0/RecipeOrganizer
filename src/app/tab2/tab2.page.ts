import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  selectedTime: string = ''
  timerDuration: number = 0; // The time the user sets
  timeLeft: number = 0; // The time left on the timer
  isTimerRunning: boolean = false; // Flag to track if the timer is running
  timerInterval: any; // To hold the setInterval reference

  constructor(private platform: Platform) {}

  startTimer() {
    if (this.timerDuration > 0) {
      this.timeLeft = this.timerDuration * 60; // Convert minutes to seconds
      this.isTimerRunning = true;

      // Start the countdown
      this.timerInterval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.stopTimer();
          this.triggerTimerEnd();
        }
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.timerInterval); // Stop the timer
    this.isTimerRunning = false;
  }

  triggerTimerEnd() {
    // You can use Ionic's Toast, Alert, or Sound
    alert('Time is up!');
    // Alternatively, you can use the Vibration API or Play Sound
    // this.platform.ready().then(() => {
    //   navigator.vibrate(1000); // Vibrates for 1 second
    // });

  }
}
