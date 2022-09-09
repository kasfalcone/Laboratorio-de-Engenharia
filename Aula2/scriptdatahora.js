setInterval(() => {
    mostrarData();
},1000);

function mostrarData(){
    let dia = "";
    let dataCompleta = new Date().getDay();

    const hora = new Date().toLocaleTimeString();
    const data = new Date().toLocaleDateString();

    //console.log(data);
    switch(dataCompleta){
        case 0:
            dia = "Domingo, " ;
            break;
        case 1:
            dia = "Segunda-Feira, "
            break;
        case 2:
            dia = "Terça-Feira, "
            break;
        case 3:
            dia = "Quarta-Feira, "
            break;
        case 4:
            dia = "Quinta-Feira, "
            break;
        case 5:
            dia = "Sexta-Feira, "
            break;
        case 1:
            dia = "Sábado, "
            break;
    }
    dataCompleta = dia + data;
    //document.querySelector("#dia").innerHTML=dia;

    document.querySelector("#hora").innerHTML=hora;
    document.querySelector("#data").innerHTML=dataCompleta;
}

mostrarData();