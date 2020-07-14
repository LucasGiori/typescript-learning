 import { Pessoa } from  './Pessoa'

export class Funcionario extends Pessoa {
    //Neste exemplo de código o professor irá ministrar apenas uma disciplina
    private codigo!: number ;
    private dataadmissao!: Date;
    private salario !: number;


    //getter and setter for
    get getCodigo():number{
       return this.codigo;
   }

   set setCodigo(codigo: number){
       this.codigo = codigo;
   }

   get getDataAdmissao():Date{
       return this.dataadmissao;
   }

   set setDataAdmissao(dataadmissao: Date){
       this.dataadmissao = dataadmissao;
   }

   get getSalario():number{
       return this.salario;
   }

   set setSalario(salario: number){
       this.salario = salario;
   }

}