import { Pipe, PipeTransform } from '@angular/core';
import { Answers } from './quiz.model';

@Pipe({
  name: 'correctAnswer'
})
export class CorrectAnswerPipe implements PipeTransform {

  transform(answers: Answers): number {
    return answers ? answers.values.filter(a => a.isCorrect).length : 0;
  }

}
