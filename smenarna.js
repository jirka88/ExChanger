var tlacitko = document.getElementById("button");
    document.querySelectorAll(".section").forEach(item => { 
        item.addEventListener("click", event => {
        tlacitko.style.boxShadow = "6px 5px 0px black";
    })
  })
function vypocti() {
  
    let vystup = document.getElementById("vystup");
    let castka = +document.getElementById("castka").value;
    let mena = document.querySelector(".section").value;
    let NaMenu = document.getElementsByClassName("section")[1].value;
    getText("https://api.currencyapi.com/v3/latest?apikey=4p9sKWxpwIVcbIiYpQ5KCKfo1w4fGk6zO4kkTl3j&base_currency=" + mena); //vznesení požadavku

    async function getText(file) {
        try {
            let myObject = await fetch(file);
            let myText = await myObject.json();
            vystup.value = (parseFloat(myText.data[NaMenu].value) * castka ).toFixed(3) + " " + NaMenu;
            tlacitko.style.boxShadow = "6px 5px 0px green";
        } 
        catch (error) {
            tlacitko.style.boxShadow = "6px 5px 0px red";
            window.alert("Nastala chyba!");
        }   
    }
}
