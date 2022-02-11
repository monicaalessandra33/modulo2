const input = require ('readline-sync');
//esta entrada permite que a variável input utilize a dependência readline-sync. O comando require é usado antes da dependência.
console.log('Seja bem vindo(a)! Precisamos te conhecer melhor');

const conhecimento = input.question('Qual o seu conhecimento em informatica? Digite: 0-Nenhum; 1-Basico; 2-Intermediario; 3-Avancado:');

if (conhecimento >=1 && conhecimento <= 3) {
    console.log('Parabéns! Você pode participar do curso Back-End!')
} else if (conhecimento == 0) {
    console.log('Infelizmente, você precisa ter no mínimo conhecimentos básico em informatica!')
} else {
    console.log('Digite uma opção válida')
}
