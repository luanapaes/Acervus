export interface BorrowedBook {
    book_name: string;
    book_description: string;
    loan_date: Date;
    loan_qtd: number;
    data_devolucao?: Date;
}