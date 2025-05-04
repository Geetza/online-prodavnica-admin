"use strict";
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
  table.innerHTML = "";

  for (let i = 0; i < artikli.length; i++) {
    let tr = document.createElement("tr");

    let id = document.createElement("td");
    let naziv = document.createElement("td");
    let cena = document.createElement("td");

    id.textContent = artikli[i].id;
    naziv.textContent = artikli[i].naziv;
    cena.textContent = artikli[i].cena + "$";

    tr.appendChild(id);
    tr.appendChild(naziv);
    tr.appendChild(cena);

    tr.addEventListener("click", function () {
      PrikaziDetalje(artikli[i]);
    });

    table.appendChild(tr);
  }
}

function PrikaziDetalje(artikal) {
  let p = document.createElement("p");

  p.style.border = "1px solid black";
  p.style.padding = "10px";

  p.innerHTML =
    "Naziv: " +
    artikal.naziv +
    "<br>" +
    "Cena: " +
    artikal.cena +
    "$" +
    "<br>" +
    "Opis: " +
    artikal.opis;

  let detalji = document.querySelector(".detalji");

  if (detalji.firstChild) {
    detalji.firstChild.remove();
  }

  detalji.appendChild(p);
}

function ObradiFormu() {
  let submitBtn = document.querySelector("#submitBtn");

  submitBtn.addEventListener("click", function () {
    const form = document.querySelector("#forma");
    const formData = new FormData(forma);

    const naziv = formData.get("naziv");
    const cena = formData.get("cena");
    const opis = formData.get("opis");

    const noviArtikal = new Artikal(artikli.length + 1, naziv, cena, opis);
    artikli.push(noviArtikal);

    DodajRed();
  });
}

function Inicijalizuj() {
  DodajRed();
  ObradiFormu();
}

document.addEventListener("DOMContentLoaded", Inicijalizuj());
