import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent implements OnInit {
  cards: any[] = [];
  selectedCard: any = null; // Variable to store the selected card
  httpClient = inject(HttpClient);
  errorMessage: string = ''; // Variable to store error messages
  p:number = 1;
  itemPerPage:number = 4;
  totalcards:any;

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get('http://localhost:3000/getAll')
      .pipe(
        catchError(this.handleError.bind(this)) // Handle errors
      )
      .subscribe({
        next: (data: any) => {
          this.cards = data;
          this.totalcards = data.length;
          console.log(data);
        },
        error: (err) => {
          console.error('HTTP Error occurred:', err.message);
          this.errorMessage = 'Failed to load data. Please try again later.'; // Set error message
        }
      });
  }

  handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    this.errorMessage = 'Failed to load data. Please try again later.';
    return throwError(() => new Error(error.message)); // Propagate the error
  }

  onSelectCard(card: any) {
    console.log('Card selected:', card); 
    this.selectedCard = card;
  }
  

  onBack() {
    this.selectedCard = null;
  }
}


