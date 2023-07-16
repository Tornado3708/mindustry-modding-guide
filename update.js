import { Weapon } from "./bundle/general__vars.js"
import bundler, { lang } from "./bundler.js"
import { main } from "./script.js"



const createTag = tag => content => `<${ tag }>${ content }</${ tag }>`
const addClass = tag => ( ...classes ) => text => text.replace( tag, `${ tag } class="${ classes.join( " " ) }"` )
const addID = tag => id => text => text.replace( tag, tag + `id="${ id }"` )

const [ h1, h2, th, td, fieldset, legend ] =  [ "h1", "h2", "th", "td", "fieldset", "legend" ].map( val => createTag( val ) )

const newInput = text => ( id=text ) => `<span>${ text }:<input type=\"checkbox\" id="${ id }"/></span>`
const table = ( thead, tbody ) => `<table>${ thead ? thead : "" }${ tbody ? tbody : "" }</table>`
const thead = (...content ) => `<thead>${ content.join( "" ).toString() }</thead>`
const tbody = (...content ) => `<tbody>${ content.join( "" ).toString() }</tbody>`

const newRowGen = func => ( ...values ) => {
  let content = ""
  values.forEach( value => { content += func( value ) } )
  return `<tr>${ content }</tr>`
}

const hRow = newRowGen( th ), bRow  = newRowGen( td )
export const button = ( innerHTML ) => `<button id="${ innerHTML }">${ innerHTML }</button>`

const createUpdate = ( updData, updFunc ) =>()=> updFunc( updData )

const trClass = addClass( "tr" )


const form1 = ( ...checkboxes ) => ( obj ) => {
  let
    checked = [],
    text = h1( obj._name ) + h2( obj._info ) + fieldset( legend( "Параметри" ) + Object.assign( [], checkboxes ).map( val => newInput(val)() ).join( '' ) ) 
  + `</fieldset><table>${ thead( hRow("Назва","Тип","За замовчуванням","Опис") ) }<tbody>`
  for( let name in obj ){
    if( typeof obj[name] === "string" ) continue
    text += trClass( ...obj[name].category )( bRow( name, obj[name].type, obj[name].value, obj[name].description ) )
    main.innerHTML = text + "</tbody>"

    const checkbox = Object.assign( [], checkboxes ).map( id => document.getElementById( id )  )
    

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
  })
  }
}









const updFunc = {
  BulletType: form1( ),
  UnitType  : form1( "json", "naval", "ground", "boost", "design", "legs", "mech", "crawler", "missile" ),
  Weapon    : form1(  )
}



const update = Object.fromEntries( [ "UnitType", "Weapon" ].map( val => [ val, () => createUpdate( bundler.get( lang ).get( val ), updFunc[ val ] ) ] ) )

export default update