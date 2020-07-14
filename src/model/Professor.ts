import { Disciplinas } from  '../enum/Disciplinas'
import { Funcionario } from './Funcionario';

export class Professor extends Funcionario {

    //Neste exemplo de código o professor irá ministrar apenas uma disciplina
    private disciplinas!: Disciplinas ;
    private formacao!: string;
    
    //getter and setter for
    get getDisciplinas():Disciplinas {
        return this.disciplinas;
    }
    
    set setDisciplinas(disciplinas:Disciplinas){
        this.disciplinas = disciplinas;
    }
    
    get getFormacao():string{
        return this.formacao;
    }

    set setFormacao(formacao:string){
        this.formacao = formacao;
    }

}

