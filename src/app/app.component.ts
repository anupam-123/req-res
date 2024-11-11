import { Component } from '@angular/core';
import { ResService } from './res.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[ResService]
})
export class AppComponent {
  posts: any[] = [];

  constructor(private ResServe: ResService) { }

  ngOnInit(): void {
    this.ResServe.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
