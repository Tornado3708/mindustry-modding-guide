import bundle from "./bundle.js";

window.bundle = bundle

const lang = "ua";
const main = document.getElementById( "main" );



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

const newInput = text => ( id=text ) => `<span>${ text }:<input type=\"checkbox\" id="${ id }"/></span>`
const json = newInput( "json" )()
const ground = newInput( "ground" )()
const naval = newInput( "naval" )()
const flying = newInput( "flying" )()


function update(){

  let selectors = "<div>" + json + ground  + naval + flying + "</div>"


  let head = newTHead( newDesc ("Назва", "Тип", "За замовчуванням",  "Опис" ) )
  let body = ""
  let text = bundle.get( lang )
  for( const name in text ){
    if( typeof text[name] === "function" ) continue
    let tr = newRow( name, text[name].type, text[name].def_val, text[name].description )
    if( text[name].categories.length ){
      let className = text[name].categories.join( " " )
      tr = tr.replace( "tr", `tr class=\"${ className }\"` )
    }
    body+=tr
  }
  main.innerHTML = selectors + newTable( head , body )

  let checkbox = [
    "json",
    "ground",
    "naval",
    "flying"
  ].map( id => document.getElementById( id )  )

  let checked = []

  window.addEventListener( "change", () => {
    checkbox.forEach( ch => {
      if( !!~checked.indexOf( ch.id ) !== ch.checked ){
        ch.checked ? checked.push( ch.id ) : checked.splice( checked.indexOf( ch.id ), 1 )
      }
     } )
    const [,...tr] = document.getElementsByTagName( "tr" )
     for( let i = 0; i < tr.length; i++ ){
      checked.length
        ? function(){
          for( const flag of checked ){
            if( tr[i].className.includes( flag ) ){
              tr[ i ].style.display = "table-row"
              break
            }
            tr[ i ].style.display = "none"
          }
        }()
        : tr[ i ].style.display = "table-row"
     }
     console.log( checked )
  } )

}

update()

