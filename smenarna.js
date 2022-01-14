
const Zaukrhli = (vypocet) => { //Zaukrouhlení na dvě desetiná místa 
    PocetMist = Math.pow(10, 2);
    vypocet *= PocetMist;
    vypocet = Math.round(vypocet);
    vypocet /= PocetMist;
    return vypocet;
}

function vypocti() {
    let vystup = document.getElementById("vystup");
    let castka = +document.getElementById("castka").value;
    let mena = document.querySelector(".section").value;
    let NaMenu = document.querySelector(".section2").value;

    getText("https://freecurrencyapi.net/api/v2/latest?apikey=4363eb70-72b0-11ec-a578-918f3effcd01&base_currency=" + mena); //vznesení požadavku

    async function getText(file) {
        let myObject = await fetch(file);
        let myText = await myObject.json();
        vystup.value = Zaukrhli(parseFloat(myText.data[NaMenu]) * castka, 2);
    }
}