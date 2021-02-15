function areaQuadrado(lado) {

    return lado * lado;
}

console.log(areaQuadrado(10)); 

// ============= * =====================

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

// ============= * =====================

function imc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;

}

console.log(imc(80, 1.8));

// ============= * =====================

function corFavorita(cor) {

    if(cor == "Azul"){
      return 'Eu gosto do céu';

    }else if(cor == "Verde") {
      return 'Eu gosto do Gon';
    }else{
      return 'Eu não gosto de cores.';
    }
}
// ============= * =====================
addEventListener('click', function(){ 
  console.log('Oi');
})

// ============= * =====================
function imc2(peso, altura) {

  const imc = peso / (altura * altura);
  console.log(imc);
}

console.log(imc2(80, 1.8)); // retorna o imc e undefined pq n tem o return

// ============= * =====================
