import { Sexo } from  '../enum/Sexo'

export class Pessoa  {
    private nome!: string ;
    private idade!: number ;
    private sexo!: Sexo ;
    private datanascimento!: Date;
    private cpf!: string;
    
    
    //Método Constructor
    constructor(nome: string, datanascimento : Date, cpf: string){
        this.nome = nome;       
        this.datanascimento = datanascimento;
        this.cpf = cpf;
        this.idade = this.calcAge(datanascimento);
    }
    
    // Getter and Setter
    get getNome(): string{
        return this.nome;
    }
    set setNome(nome: string){
        this.nome = nome;
    }
    get getIdade(): number{
        return this.idade;
    }
    set setIdade(idade: number){
        this.idade = idade;
    }
    get getSexo(): Sexo{
        return this.sexo;
    }
    set setSexo(sexo: Sexo){
        this.sexo = sexo;
    }
    get getDataNascimento(): Date{
        return this.datanascimento;
    }
    set setDataNascimento(datanascimento: Date){
        this.datanascimento = datanascimento;
    }
    get getCpf(): string{
        return this.cpf;
    }
    set setCpf(cpf: string){
        this.cpf = cpf;
    }

    public calcAge(dateString:Date) {
        var birthday = +dateString;
        return Number(~~((Date.now() - birthday) / (31557600000)));
      }
    
    public imprimirdados():object{
        return {
            nome: this.getNome,
            cpf: this.getCpf,
            idade: this.getIdade,
            sexo: this.getSexo,
            datanascimento: this.getDataNascimento
        };
    }
}