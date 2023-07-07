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


[ "Unittype", "Weapon" ].forEach( val => {
  nav.innerHTML += button( val )
  document.getElementById( val ).onclick = update[ val ]()
} )
document.getElementById( "Unittype" ).onclick = update.Unittype()
document.getElementById( "Unittype" ).onclick = update.Unittype()


window.update = update


// function update(){

//   const _fieldset = "<fieldset><legend>Параметри</legend>"
//   const _hr = "<hr/>"
//   let selectors = _fieldset +
//     json + _hr +
//     ground + flying + naval + _hr + 
//     mech + legs + crawl + missile + build + boost + movement + "</fieldset>"


//   let head = newTHead( newDesc ("Назва", "Тип", "За замовчуванням",  "Опис" ) )
//   let body = ""
//   let text = bundler.get( lang ).get( "Unittype" )
//   for( const name in text ){
//     if( typeof text[name] !== "object" ) continue
//     let tr = newRow( name, text[name].type, text[name].value, text[name].description )
//     if( text[name].category.length ){
//       let className = text[name].category.join( " " )
//       tr = tr.replace( "tr", `tr class=\"${ className }\"` )
//     }
//     body+=tr
//   }
//   main.innerHTML = text.info + selectors + newTable( head , body )

//   const checkbox = Object.assign( [], parametr ).map( id => document.getElementById( id )  )



//   let checked = []



//   window.addEventListener( "change", () => {
//     checkbox.forEach( ch => {
//       if( !!~checked.indexOf( ch.id ) !== ch.checked ){
//         ch.checked ? checked.push( ch.id ) : checked.splice( checked.indexOf( ch.id ), 1 )
//       }
//     } )
     
//     const [ ,...tr ] = document.getElementsByTagName( "tr" )
//     const list = []
//     if( checked.length ){
//       for( let i = 0; i < tr.length; i++ ){
//         if( tr[i].className.includes( checked[ 0 ] ) ) list.push( tr[ i ] )
//         tr[ i ].style.display = "none"
//       }
//       if( list.length > 1 ){
//         for( let i = 1; i < checked.length; i++ ){
//           let j = 0;
//           while( j < list.length ){
//             if( !list[ j ].className.includes( checked[ i ] ) ){
//               list.splice( j, 1 )
//               j--
//             }
//             j++
//           }
//         }
//       }
//       list.forEach( el => { el.style.display = "table-row" } )
//     } else {
//       for( let i = 0; i < tr.length; i++ ){
//         tr[ i ].style.display = "table-row"
//       }
//     }
//     console.log( list )
//   })
  
// }

// update()

