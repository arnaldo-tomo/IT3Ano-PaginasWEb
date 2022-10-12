//relogio
function relogio() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    document.getElementById("text").innerHTML = h + ":" + m + ":" + s;
    setTimeout('relogio()', 1000);
}


function validaCampo() {
            if (document.cadastro.nome.value == "") {
                alert("O CAMPO NOME E OBRIGATORIO!");
                return false;
            }
            else
                if (document.cadastro.email.value == "") {
                    alert("O CAMPO EMAIL E OBRIGATORIO!");
                    return false;
                }
                else
                    if (document.cadastro.endereco.value == "") {
                        alert("O CAMPO DA MENSAGEM E E OBRIGATORIO!");
                        return false;
                    }

            return true;
        }