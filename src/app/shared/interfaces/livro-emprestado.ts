export interface BorrowedBook {
    book_name: string;
    book_description: string;
    loan_date: Date;
    data_devolucao?: Date;
}