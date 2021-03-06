import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-continent-countries',
  templateUrl: './continent-countries.component.html',
  styleUrls: ['./continent-countries.component.scss'],

})
export class ContinentCountriesComponent implements OnInit {
  @HostBinding('@pageAnimations')
  public animatePage = true;
  @Input() selectedContinent: string = "";
 
  continents = {

    "africa": {
      "continentName": "Afrique",
      "bannerimage": "pattern-afrique-min.png",
      "countries": [{
        "countryname": "Kenya",
        "image": "Kenya.png",
        "attributes": [
          { "key": "origine", "value": "Niery" },
          { "key": "altitude", "value": "1400m" },
          { "key": "extraction", "value": "Méthode Humide (Lavé)" },
          { "key": "variétés", "value": "Arabica (Uteuzi Jimbo Regional Select)" },
          { "key": "arômes", "value": "Chocolat, Caramel, Raisins blancs" }]
      },
      {
        "countryname": "Tanzanie",
        "image": "Tanzania.png",
        "attributes": [
          { "key": "origine", "value": "Twiga" },
          { "key": "altitude", "value": "1400-1800m" },
          { "key": "extraction", "value": "Méthode Humide (Lavé)" },
          { "key": "variétés", "value": "Arabica (Kents, Bourbon, Typica)" },
          { "key": "arômes", "value": "Fruits" }]
      }
      ]
    },
    "centralamerica": {
      "continentName": "Amérique Centrale",
      "bannerimage": "pattern-amc-min.png",
      "countries": [{
        "countryname": "GUATEMALA",
        "image": "Guatemala.png",
        "attributes": [
          { "key": "origine", "value": "Chimaltenango, Huehuetenango, Quiche, San Marcos, Solola" },
          { "key": "altitude", "value": "1500- 1900m" },
          { "key": "extraction", "value": "Méthode Humide (Lavé)" },
          { "key": "variétés", "value": "Arabica (Bourbon, Catura, Catuai)" },
          { "key": "arômes", "value": "Variés" }]
      },
      {
        "countryname": "COSTA RICA",
        "image": "Costarica.png",
        "attributes": [
          { "key": "origine", "value": "El Peresozo, Las Lomas" },
          { "key": "altitude", "value": "1540m" },
          { "key": "extraction", "value": "Méthode Sèche (Naturel)" },
          { "key": "variétés", "value": "Arabica (variés)" },
          { "key": "arômes", "value": "Chocolat Noir, Fruits Rouges" }]
      }
      ]
    },
    "northamerica": {
      "bannerimage": "pattern-amn-min.png",
      "continentName": "Amérique du Nord",
      "countries": [{
        "countryname": "MEXICO",
        "image": "Mexico.png",
        "attributes": [
          { "key": "origine", "value": "Veracruz, Coatepec" },
          { "key": "altitude", "value": "1405m" },
          { "key": "extraction", "value": "Méthode Humide (Lavé)" },
          { "key": "variétés", "value": "Arabica (Bourbon, Garnica, Sarchimor)" },
          { "key": "arômes", "value": "Amandes, Caramel, Fruits Tropicaux" }]
      }]
    },
    "southamerica": {
      "bannerimage": "pattern-ams-min.png",
      "continentName": "Amérique du Sud",
      "countries": [{
        "countryname": "COLOMBIE",
        "image": "Colombia.png",
        "attributes": [
          { "key": "origine", "value": "Caldas" },
          { "key": "altitude", "value": "1750m" },
          { "key": "extraction", "value": "Méthode Humide (Lavé)" },
          { "key": "variétés", "value": "Arabica (Castillo, Colombia,Caturo)" },
          { "key": "arômes", "value": "Chocolat, Fruits Rouges" }]
      },
      {
        "countryname": "Pérou",
        "image": "Peru.png",
        "attributes": [
          { "key": "origine", "value": "ChaCha" },
          { "key": "altitude", "value": "1600-2000m" },
          { "key": "extraction", "value": "Méthode Humide (Lavé)" },
          { "key": "variétés", "value": "Arabica (variés)" },
          { "key": "arômes", "value": "Pamplemousse, Caramel, Biscuit" }]
      }]
    },
    "asia": {
      "bannerimage": "pattern-asi-min.png",
      "continentName": "Asie",
      "countries": [{
        "countryname": "MYANMAR",
        "image": "Myanmar.png",
        "attributes": [
          { "key": "origine", "value": "Shan" },
          {"key": "altitude", "value": "1100-1600m" },
          {"key": "extraction", "value": "Méthode Humide (Lavé)" },
          {"key": "variétés", "value": "Arabica (Variés)" },
          {"key": "arômes", "value": "Thé Vert, Chocolat, Epices, Noisettes" }]
      }]
      }
  }


  constructor() {
      console.log("constructed");
    }

  ngOnInit(): void {
    }

  }
