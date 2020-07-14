import { Pessoa } from  './Pessoa'
import { Curso } from '../enum/Curso'
import { Disciplinas } from '../enum/Disciplinas' ;

 
export class Aluno extends Pessoa {
    //Neste exemplo de código o professor irá ministrar apenas uma disciplina
    private codigo!: number ;
    private nivel!: number;
    private curso!: Curso;
    private disciplina!: Array<Disciplinas>;


// array:Array<MeuTipo> = [
//     ...
//     ]

    //getter and setter for
   get getCodigo():number{
       return this.codigo;
   }

   set setCodigo(codigo: number){
       this.codigo = codigo;
   }

   get getNivel():number{
       return this.nivel;
   }

   set setNivel(nivel: number){
       this.nivel = nivel;
   }

   get getCurso():Curso{
       return this.curso;
   }
   
   set setCurso(curso:Curso){
       this.curso = curso;
   }

   get getDisciplina():Array<Disciplinas>{
        return this.disciplina;
   }
   
   set setDisciplina(disciplina:Array<Disciplinas>){
       this.disciplina = disciplina;
   }
}