import bundle from "./bundle.js";



const lang = "ua";
const main = document.getElementById( "main" );



function update(){

  main.innerHTML = bundle.get( lang )

}

update()