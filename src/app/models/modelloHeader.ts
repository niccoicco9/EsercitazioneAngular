export class ModelloHeader {
    public anni: number;
    public nome: string;
    public fatto: boolean;

    constructor(nome: string, anni: number, fatto: boolean) {
        this.nome = nome;
        this.anni = anni;
        this.fatto = fatto;
    }
}
