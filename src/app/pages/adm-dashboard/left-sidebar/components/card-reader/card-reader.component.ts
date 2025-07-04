import { Component, Input } from '@angular/core';
import { BorrowedBook } from '../../../../../shared/interfaces/borrowed-book';

@Component({
  selector: 'app-card-reader',
  standalone: true,
  imports: [],
  templateUrl: './card-reader.component.html',
  styleUrl: './card-reader.component.scss'
})
export class CardReaderComponent {
  @Input() fullname: string = '';
  @Input() phone_number: string = '';;
  @Input() email: string = '';
  @Input() borrowed_book!: BorrowedBook[];
  books: BorrowedBook[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadBorrowedBooks()
  }

  loadBorrowedBooks(){
    this.borrowed_book.map((book) => {
      return this.books.push(book)
    })
  }
}
