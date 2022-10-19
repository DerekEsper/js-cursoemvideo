function tabuada() {
    var num = document.getElementById('txtn');
    var tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('Você precisa digitar um número!!!');

    } else {
        let n = Number(num.value);
        let c = 1;
        tab.innerHTML = ""; // LIMPAR SELECT ANTES DE MOSTRAR NOVA TABUADA

        while (c <= 10) {
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
}