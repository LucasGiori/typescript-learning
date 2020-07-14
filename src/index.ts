import { Curso } from './enum/Curso'
import { Sexo } from './enum/Sexo';
import { Disciplinas } from './enum/Disciplinas';
import { Pessoa } from  './model/Pessoa';
import { Aluno } from './model/Aluno';
import { Funcionario } from './model/Funcionario';
import { Professor } from './model/Professor';
 
// //Instanciando a class Pessoa e passando os atributos 
// const pessoa = new Pessoa('Lucas Giori',new Date('06/12/1999'),'12345678985');
// //Defindo o sexo da pessoa atraves do Métod setSexo
// pessoa.setSexo=Sexo.M;
// pessoa.setIdade=pessoa.calcAge(pessoa.getDataNascimento)

// //Instanciando a class Pessoa e passando os atributos 
// const pessoa1 = new Pessoa('Isabela',new Date('06/12/1998'),'12345678985');
// //Defindo o sexo da pessoa atraves do Métod setSexo
// pessoa1.setSexo=Sexo.F;

// console.log(pessoa)
// console.log(pessoa.imprimirdados())
//console.log(pessoa1.imprimirdados())


let aluno1 = new Aluno('Lucas Giori',new Date('06/12/1999'),'01245678955');
aluno1.setCodigo=1;
aluno1.setCurso=Curso.sistemas
aluno1.setNivel=2;
aluno1.setDisciplina =[Disciplinas.algoritimos,Disciplinas.empreendedorismo]
aluno1.setSexo=Sexo.M

//Mostrndo obejeto Aluno
console.log(aluno1)

let professor = new Professor("Edson Macoto",new Date("06/11/1987"),'52345678985')

console.log(professor)