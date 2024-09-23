type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
]

alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 25,
});

const novoAluno: aluno ={
    nome: "Lucas",
    idade: 32,
}

function exibeAluno(aluno: aluno){
    console.log(aluno.nome)
}
