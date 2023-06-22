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
const parametr = [
  "json",
  "ground",
  "flying",
  "naval",
  "mech",
  "legs",
  "crawl",
  "missile",
  "build",
  "movement"
]

const json     = newInput( "json" )()
const ground   = newInput( "ground" )()
const flying   = newInput( "flying" )()
const naval    = newInput( "naval" )()
const mech     = newInput( "mech" )()
const legs     = newInput( "legs" )()
const crawl    = newInput( "crawl" )()
const missile  = newInput( "missile" )()
const build    = newInput( "build" )()
const movement = newInput( "movement" )()
const boost = newInput( "boost" )()

function update(){

  const _fieldset = "<fieldset><legend>Параметри</legend>"
  const _hr = "<hr/>"
  let selectors = _fieldset +
    json + _hr +
    ground + flying + naval + _hr + 
    mech + legs + crawl + missile + build + boost + movement + "</fieldset>"


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

  const checkbox = Object.assign( [], parametr ).map( id => document.getElementById( id )  )



  let checked = []



  window.addEventListener( "change", () => {
    checkbox.forEach( ch => {
      if( !!~checked.indexOf( ch.id ) !== ch.checked ){
        ch.checked ? checked.push( ch.id ) : checked.splice( checked.indexOf( ch.id ), 1 )
      }
    } )
     
    const [ ,...tr ] = document.getElementsByTagName( "tr" )
    const list = []
    if( checked.length ){
      for( let i = 0; i < tr.length; i++ ){
        if( tr[i].className.includes( checked[ 0 ] ) ) list.push( tr[ i ] )
        tr[ i ].style.display = "none"
      }
      if( list.length > 1 ){
        for( let i = 1; i < checked.length; i++ ){
          let j = 0;
          while( j < list.length ){
            if( !list[ j ].className.includes( checked[ i ] ) ){
              list.splice( j, 1 )
              j--
            }
            j++
          }
        }
      }
      list.forEach( el => { el.style.display = "table-row" } )
    } else {
      for( let i = 0; i < tr.length; i++ ){
        tr[ i ].style.display = "table-row"
      }
    }
    console.log( list )
  })
  
}

update()

