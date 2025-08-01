import { BorrowedBook } from "./livro-emprestado";

export interface Leitor {
    nome_completo: string;
    email: string;
    numero_contato: string;
    livros_emprestados: BorrowedBook[];
}