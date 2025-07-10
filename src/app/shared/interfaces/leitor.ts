import { BorrowedBook } from "./livro-emprestado";

export interface Leitor {
    fullname: string;
    email: string;
    phone_number: string;
    borrowed_book: BorrowedBook[];
}