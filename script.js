const encriptado = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'utaf',
    };

    const desencriptado = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    utaf: 'u',
    };

    function encrip() {
    var text = document.getElementById('box-crip').value;
    text = text.toLowerCase();
    var codi = text.replace(/a|e|i|o|u/g, (m) => encriptado[m]);
    document.getElementById('box-copy').value = codi;
    }

    function descrip() {
    var text2 = document.getElementById('box-copy').value;
    text2 = text2.toLowerCase();
    var descodi = text2.replace(/ai|enter|imes|ober|utaf/g, (m) => desencriptado[m]);
    document.getElementById('box-copy').value = descodi;
    }
    
function copy(){
    var content = document.getElementById("box-copy");

    content.select();
    document.execCommand('copy');
}

const elemento = document.getElementById("contacto");
const boton = document.getElementById("contact");
const close = document.getElementById("close");

boton.addEventListener("click", () => {
    elemento.style.display = "block";
});

close.addEventListener("click",() => {
    elemento.style.display = "none"
});

