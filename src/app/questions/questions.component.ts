import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions.service';
import { Answers, Choice, Question, Quiz } from '../quiz.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  quiz: Quiz = {} as Quiz;
  answers: Answers = {} as Answers;
  questions: Question[] = [];
  currentQuestionIndex: number = -1;

  showResults = false;

  constructor(
    private route: ActivatedRoute,
    public questionsService: QuestionsService
  ) { }

  ngOnInit() {
    this.questionsService
      .getQuestions(this.route.snapshot.params['quizId'])
      .subscribe(questions => {
        this.questions = this.shuffle(questions).slice(0, 10);
        this.questions.forEach((el) => {
          el.choices = this.shuffle(el.choices);
        })
        this.answers = { values: [] } as Answers;
        this.currentQuestionIndex = 0;
      });
  }

  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
    this.nextOrViewResults();
  }

  nextOrViewResults() {
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      return;
    }

    this.currentQuestionIndex++;
  }

  reset() {
    this.quiz = {} as Quiz;
    this.questions = [];
    this.answers = {} as Answers;
    this.currentQuestionIndex = -1;
  }



  shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

}
