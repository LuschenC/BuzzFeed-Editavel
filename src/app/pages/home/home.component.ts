import { Component, OnInit } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [QuizzComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // <-- corrigido aqui
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
