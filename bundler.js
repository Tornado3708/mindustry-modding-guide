import UA from "./bundle/bundle_ua.js"

export const lang = "ua"

const ua = new Map([
  [ "Unittype", Object.assign( {}, UA.Unittype ) ]
])



const bundler = new Map([
  [ "ua", ua ]
])

export default bundler