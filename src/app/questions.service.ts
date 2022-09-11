import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Question, Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) { }

  public getQuizzes() {
    return this.httpClient.get<any[]>(`./assets/quiz-list.json`).pipe(
      map((result: any[]) => {
        return result.map(
          (r) => {
            return { label: r.label, name: r.name, description: r.description, fileName: r.fileName } as Quiz;
          }
        );
      })
    );
  }

  public getQuestions(fileName: string) {
    return this.httpClient.get<any[]>(`./assets/${fileName}.json`).pipe(
      map((result: any[]) => {
        return result.map(
          (r) => {
            return { label: r.label, choices: r.choices } as Question;
          }
        );
      })
    );
  }
}
