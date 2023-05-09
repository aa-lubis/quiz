import { Component } from '@angular/core';

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
