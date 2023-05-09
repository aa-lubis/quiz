import { Component, OnInit, Input } from '@angular/core';
import { Answers, Question } from '../shared/quiz.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() answers: Answers = {} as Answers;
  @Input() questions: Question[] = [];

  constructor() { }

  ngOnInit(): void { }
}
