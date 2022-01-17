
function vypocti() {
    let tlacitko = document.getElementById("button");
    let vystup = document.getElementById("vystup");
    let castka = +document.getElementById("castka").value;
    let mena = document.querySelector(".section").value;
    let NaMenu = document.getElementsByClassName("section")[1].value;

    getText("https://freecurrencyapi.net/api/v2/latest?apikey=4363eb70-72b0-11ec-a578-918f3effcd01&base_currency=" + mena); //vznesení požadavku

    async function getText(file) {
        try {
            let myObject = await fetch(file);
            let myText = await myObject.json();
            vystup.value = (parseFloat(myText.data[NaMenu]) * castka ).toFixed(3) + " " + NaMenu;
            tlacitko.style.boxShadow = "6px 5px 0px green";
        } catch (error) {
            tlacitko.style.boxShadow = "6px 5px 0px red";
            window.alert("Nastala chyba!")
        }   
    }
}
