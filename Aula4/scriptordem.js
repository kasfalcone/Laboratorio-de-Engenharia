let cadastrarCampos = document.getElementById("cadastrar");
cadastrarCampos.addEventListener("click", function () {
    let elementos = [];
    let campos = document.getElementById("nome").value;
    elementos.push(campos.toString());

    let elementoOL = document.createElement("OL");
    elementos.forEach(element => {
        let elementLI = document.createElement("LI");
        let textNode = document.createTextNode(element);
        elementLI.appendChild(textNode);
        elementoOL.appendChild(textNode);
    });

    document.body.appendChild(elementoOL);
});