function mudarFoto(foto) {
    document.getElementById("icon").src = foto;
}

function calcularTotal(){
    var qtd = document.getElementById("qtd_").value;

    document.getElementById("cash").value = parseInt(qtd) * 1500;
}