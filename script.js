export const main = document.getElementById( "main" );
export const nav = document.getElementById( "nav" );


export const newTable = ( thead, tbody ) => `<table>${ thead ? thead : "" }${ tbody ? tbody : "" }</table>`
export const newTHead = (...content ) => `<thead>${ content.join( "" ).toString() }</thead>`
export const newTBody = (...content ) => `<tbody>${ content.join( "" ).toString() }</tbody>`
export const newTH    = content => `<th>${ content }</th>`
export const newTD    = content => `<td>${ content }</td>`

const newRowGen = func => ( ...values ) => {
  let content = ""
  values.forEach( value => { content += func( value ) } )
  return `<tr>${ content }</tr>`
}
const newDesc = newRowGen( newTH ), newRow  = newRowGen( newTD )


// const parametr = [
//   "json",
//   "ground",
//   "flying",
//   "naval",
//   "mech",
//   "legs",
//   "crawl",
//   "missile",
//   "build",
//   "movement"
// ]

import update from "./update.js";
import { button } from "./update.js";


Object.assign([],[ "BulletType", "UnitType", "Weapon" ]).forEach( val => {
  nav.innerHTML += button( val )
  setTimeout( () => document.getElementById( val ).onclick = update[ val ]() )
  

} )


window.update = update