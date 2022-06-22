"use strict";
function descascarBanana(banana) {
    if (typeof banana === 'string') {
        return banana.toUpperCase();
    }
    return banana + 2;
}
function logHumanName(human) {
    const { dieta, idade, nome } = human;
    console.log(dieta, idade, nome);
}
logHumanName({
    dieta: "Arvore",
    idade: 17,
    nome: "Leonardo"
});
