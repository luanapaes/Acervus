export interface BorrowedBook {
    nome: string;
    descricao: string;
    data_emprestimo: Date;
    data_devolucao?: Date;
}