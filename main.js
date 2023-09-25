function tocaSom (idElementoSom) {
    document.querySelector(idElementoSom).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

let contador = 0

while (contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    console.log(instrumento)

    tecla.onclick = function () {
        tocaSom('#som_tecla_pom')
    };

    console.log(contador);

    contador = contador + 1;
}