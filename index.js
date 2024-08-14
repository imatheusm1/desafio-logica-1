let NickName = "Polly"
let QtdExpt = 1000
let nivel;

if (QtdExpt <1000){
    nivel = "Ferro";
} else if (QtdExpt >=1001 && QtdExpt <= 2000){
    nivel = "Bronze";
} else if (QtdExpt >= 2001 && QtdExpt <= 5000) {
    nivel = "Prata";
} else if (QtdExpt >= 5001 && QtdExpt <= 7000) {
    nivel = "Ouro";
} else if (QtdExpt >= 7001 && QtdExpt <= 8000) {
    nivel = "Platina";
} else if (QtdExpt >= 8001 && QtdExpt <= 9000) {
    nivel = "Ascendente";
} else if (QtdExpt >= 9001 && QtdExpt <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + NickName + " está no nivel de " + nivel);