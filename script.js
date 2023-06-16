import bundle from "./bundle.js";

window.bundle = bundle

const lang = "ua";
const main = document.getElementById( "main" );



const newTable = ( thead, tbody ) => `<table>${ thead ? thead : "" }${ tbody ? tbody : "" }</table>`
const newTHead = (...content ) => `<thead>${ content.join( "" ).toString() }</thead>`
const newTBody = (...content ) => `<tbody>${ content.join( "" ).toString() }</tbody>`
const newTH    = content => `<th>${ content }</th>`
const newTD    = content => `<td>${ content }</td>`

const newRowGen = func => ( ...values ) => {
  let content = ""
  values.forEach( value => { content += func( value ) } )
  return `<tr>${ content }</tr>`
}
const newDesc = newRowGen( newTH ), newRow  = newRowGen( newTD )



function update(){

  let head = newTHead( newDesc ("Назва", "Тип", "За замовчуванням",  "Опис" ) )
  let body = ""
  let text = bundle.get( lang )
  for( const name in text ){
    if( typeof text[name] === "function" ) continue
    let tr = newRow( name, text[name].type, text[name].def_val, text[name].description )
    if( text[name].categories.length ){
      let className = text[name].categories.join( " " )
      console.log( className )
      tr = tr.replace( "tr", `tr class=\"${ className }\"` )
    }
    body+=tr
  }
  main.innerHTML = newTable( head , body )

}

update()