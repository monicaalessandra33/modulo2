const input = require ('readline-sync');
//esta entrada permite que a variável input utilize a dependência readline-sync. O comando require é usado antes da dependência.
console.log('Seja bem vindo! Precisamos te conhecer melhor');

const conhecimento = input.question('Qual o seu conhecimento em informatica? Digite: 0 - Nenhum; 1 - Basico; 2 - Intermediario; 3 - Avancado:');

if (conhecimento >=1 && conhecimento <= 3) {
    console.log('Pode participar do curso Back-End')
} else {
    console.log('Precisa ter conhecimentos básico em informatica')
};
