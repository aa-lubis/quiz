import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import { Quiz } from '../shared/quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  public quizzes: Quiz[] = [];

  constructor(public questionsService: QuestionsService) {
    this.questionsService.getQuizzes().subscribe(quizzes => {
      this.quizzes = quizzes;
    });
  }

  ngOnInit() {

  }

  reset() {
    this.quizzes = [];
  }

}
