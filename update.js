import bundler, { lang } from "./bundler.js"
import { main } from "./script.js"



const createTag = tag => content => `<${ tag }>${ content }</${ tag }>`
const addClass = tag => ( ...classes ) => text => text.replace( tag, tag +  ` class="${ classes.join( " " ) }"` )
const addID = tag => id => text => text.replace( tag, tag + `id="${ id }"` )


const [ h1, h2, th, td ] =  [ "h1", "h2", "th", "td" ].map( val => createTag( val ) )



const newInput = text => ( id=text ) => `<span>${ text }:<input type=\"checkbox\" id="${ id }"/></span>`
const table = ( thead, tbody ) => `<table>${ thead ? thead : "" }${ tbody ? tbody : "" }</table>`
const thead = (...content ) => `<thead>${ content.join( "" ).toString() }</thead>`
const tbody = (...content ) => `<tbody>${ content.join( "" ).toString() }</tbody>`



export const button = ( innerHTML ) => `<button id="${ innerHTML }">${ innerHTML }</button>`

const newRowGen = func => ( ...values ) => {
  let content = ""
  values.forEach( value => { content += func( value ) } )
  return `<tr>${ content }</tr>`
}
const hRow = newRowGen( th ), bRow  = newRowGen( td )


const createUpdate = ( updData, updFunc ) =>()=> updFunc( updData )

const trClass = addClass( "tr" )

const updFunc = {
  Unittype: ( obj ) => {
    let text = h1(obj.name)+h2(obj.info)+`<fieldset><legend>Параметри</legend>`
    
    text += [ "json", "ground", "naval", "flying" ].map( val => newInput( val )() ).join("")
    
    + `</fieldset><table>${ thead( hRow("Назва","Тип","За замовчуванням","Опис") ) }<tbody>`

    for( let name in obj ){
      if( typeof obj[name] === "string" ) continue
      text += trClass( ...obj[name].category )( bRow( name, obj[name].type, obj[name].value, obj[name].description ) )
    }

    main.innerHTML = text

    const checkbox = [ "json", "ground" ].map( id => document.getElementById( id )  )
    
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
  },
  Weapon: () => {}
}



const update = Object.fromEntries( [ "Unittype", "Weapon" ].map( val => [ val, () => createUpdate( bundler.get( lang ).get( val ), updFunc[ val ] ) ] ) )

export default update