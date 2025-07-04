import { BorrowedBook } from "./borrowed-book";

export interface Reader {
    fullname: string;
    email: string;
    phone_number: string;
    borrowed_book: BorrowedBook[];
}