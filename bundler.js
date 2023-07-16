import UA from "./bundle/bundle_ua.js"

export const lang = "ua"

const ua = new Map([
  [ 'BulletType', Object.assign( {}, UA.BulletType ) ],
  [ "UnitType"  , Object.assign( {}, UA.UnitType )],
  [ "Weapon"    , Object.assign( {}, UA.Weapon ) ],
])



const bundler = new Map([
  [ "ua", ua ]
])

export default bundler