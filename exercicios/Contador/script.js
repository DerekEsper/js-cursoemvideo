function contar() {
    var ini = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO! Faltam dados');

    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo igual a zero'); // PASSO == 0
            p = 1;
        }

        if (i < f) {  // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`;
            }

        }else {
            for(let c = i; c >= f; c -= p) {  // CONTAGEM DECRESCENTE
                res.innerHTML += ` ${c} \u{1f449}`;
            }            
        }
        res.innerHTML += `\u{1f3c1}`; // BANDEIRINHA
    }
}

