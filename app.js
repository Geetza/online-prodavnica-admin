class Artikal {
  constructor(id, naziv, cena, opis) {
    this.id = id;
    this.naziv = naziv;
    this.cena = cena;
    this.opis = opis;
  }
}

const televizor = new Artikal(1, "Samsung TV", 800, "Ultra HD televizor");
const telefon = new Artikal(2, "Nokia 3310", 300, "Neunistivi telefon");
const frizider = new Artikal(3, "Gorenje", 700, "Samootapajuci");

let artikli = [televizor, telefon, frizider];

function DodajRed() {
  let table = document.querySelector("#artikli-body");

  for (let i = 0; i < artikli.length; i++) {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");

    id.textContent = artikli[i].id;
    naziv.textContent = artikli[i].naziv;
    cena.textContent = artikli[i].cena;

    tr.appendChild(id);
    tr.appendChild(naziv);
    tr.appendChild(cena);

    table.appendChild(tr);
  }
}

DodajRed();
