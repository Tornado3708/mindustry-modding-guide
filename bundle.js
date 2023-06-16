import bundle_general from "./bundle_general.js"
import ua from "./bundle/ua.js"

console.table( bundle_general )

const bundle = new Map()

bundle.set( "ua", ua )


export default bundle