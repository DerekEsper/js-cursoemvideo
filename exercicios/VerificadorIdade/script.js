function verificar() {
	var data = new Date();
	var ano = data.getFullYear();
	var fano = document.getElementById("txtano"); // ano digitado
	var res = document.querySelector("div#res");

	//n digitou ano   ou   ano > que ano atual
	if (fano.value.length == 0 || Number(fano.value) > ano) {
		window.alert("[ERRO] Verifique os dados e tente novamente!")

	} else {
		var fsex = document.getElementsByName("radsex");
		var idade = ano - Number(fano.value);
		var genero = "";
		var img = document.createElement("img");
		img.setAttribute("id", "foto");


		if (fsex[0].checked) {
			genero = "Mulher";

			if(idade >= 0 && idade < 10) {
				//criança
				img.setAttribute("src", "bebemenina.png");

			}else if (idade >= 10 && idade < 21){
				//jovem
				img.setAttribute("src", "adolescentemenina.png")

			}else if (idade >= 21 && idade < 50) {
				//adulto
				img.setAttribute("src", "adultomulher.png")

			}else {
				//idosa
				img.setAttribute("src", "idosamulher.png")
			}
		}else	if (fsex[1].checked) {
			genero = "Homem";

			if (idade >= 0 && idade < 10) {
				//criança
				img.setAttribute("src", "bebemenino.png");				

			} else if (idade >= 10 && idade < 21) {
				//jovem
				img.setAttribute("src", "adolescentemenino.png");

			} else if (idade >= 21 && idade < 50) {
				//adulto
				img.setAttribute("src", "adultohomem.png");

			} else {
				//idoso
				img.setAttribute("src", "idosohomem.png");
			}

		}
		res.style.textAlign = "center"; // centraliza o texto em js
		res.style.fontStyle = "italic";
		res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
		res.appendChild(img);
	}
}