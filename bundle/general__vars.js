export const float = "float"
export const int = "int"
export const boolean = "boolean"


export const empty = {
  ObjectSet: "ObjectSet<>()",
  Seq: "Seq<>()"
}

export const Ability = "Ability"
export const Color = "Color"
export const Colors = Color+"s"
export const DrawPart = "DrawPart"
export const Effect = "Effect"
export const Fx = "Fx"
export const Item = "Item"
export const Items = Item+"s"
export const itemAmmoType = Item+"AmmoType"
export const Sound = "Sound"
export const StatusEffect = "StatusEffect"
export const Sounds = Sound+"s"
export const Unit = "Unit"
export const UnitController = Unit+'Controller'
export const UnitCommand = Unit+"Command"
export const UnitEngine = Unit+"Engine"
export const Weapon = "Weapon"


export const setArr = className => className+"[]"
const setType  = className => (type='') => `${ className }<${ type }>` 
const setParam = className => param => `${ className }.${ param }`
export const toExtend = thisN => superN => `${ thisN } extends ${ superN }`


export const[ Func, ObjectSet, Prov, Seq ] = [
  "Func",
  "ObjectSet",
  "Prov",
  "Seq",
  
].map( name => setType( name ) )

export const [ ColorParam, FxParam, SoundsParam ] = [
  Color,
  Fx,
  Sounds
].map( name => setParam( name ) )



export const json = "json"

export const movement = "movement"
export const shoot = "shoot"
export const design = "design"
export const support = "support"
export const boost = "boost"

export const ground = "ground"
export const flying = "flying"
export const naval  = "naval"
export const missile = "missile"
export const mech  = [ ground, "mech" ]
export const legs  = [ ground, "legs" ]
export const tank  = [ ground, "tank" ]
export const hover = [ ground, "hover" ]
export const crawl = [ ground, "crawl" ]

export const build = [ support, "build" ]
export const mine = "mine"