import { Component } from '@angular/core';
import { Quiz } from './quiz.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quiz-app';

  public quiz: any;
  public showResults: boolean = false;
  public currentQuestionIndex = -1;

  updateChoice(evt:any) {

  }

}
