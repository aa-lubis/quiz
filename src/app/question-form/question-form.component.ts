import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Choice, Question } from '../quiz.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input() question: Question = {} as Question;
  @Output() onChoiceMade = new EventEmitter<Choice>();

  public timer: number = 5;
  public runningTimer: number = 5;
  public progressValue: number = 100;
  private timeout: any;
  private timeoutInterval = 100;
  public breakpoint: number = 4;
  public cssBounce: boolean = true;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 2 : 4;
    this.runningTimer = this.timer;
    this.runTimer();
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 2 : 4;
  }

  runTimer() {
    this.timeout = setTimeout(() => {
      this.cssBounce = false;
      this.runningTimer -= this.timeoutInterval / 1000;
      this.progressValue = (this.runningTimer / this.timer) * 100;
      if (this.runningTimer >= 0) {
        this.runTimer();
      } else {
        this.onChange({ value: '', isCorrect: false } as Choice);
        this.resetTimer();
      }
    }, this.timeoutInterval);
  }

  resetTimer() {
    clearTimeout(this.timeout);
    this.runningTimer = this.timer;
    this.progressValue = 100;
    this.timeout = setTimeout(() => {
      this.runTimer();
    }, 1000)
  }

  onChange = (choice: Choice) => {
    this.cssBounce = true;
    this.onChoiceMade.emit(choice);
    this.resetTimer();

  };


}
