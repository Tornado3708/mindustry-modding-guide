const returner = ( object ) => (  ) => object 



const list = {}
const _float  = "float"
const _String = "String"
const _int    = "int"
const _arr = type => type+"[]"
const _true   = "true"
const _false  = "false"
const _boolean = "boolean"
const _null = "null"

list.__proto__.add = function( name, type, def_val, categories=[] ){ this[name] = { type, def_val, categories, describe }; return this }
const getList = returner( list )
export function describe( description ){ this.description = description, delete this.describe; return getList() }





const _json = "json"

const _pvp  = "pvp"

const _ground = "ground"
const _naval  = "naval"
const _flying = "flying"

const _build = "build"
const _command = "command"
const _design = "design"

const _legs  = [ _ground, "legs" ]
const _mech  = [ _ground, "mech" ]
const _boost = [ _ground, "boost" ]



list
  .add( "abilities"             , _arr( "Ability" )    , "[]" )
  .add( "accel"                 , _float               , 1.1   , [ _json ] )
  .add( "aimDst"                , _float               , -1    , [ _json ] )
  .add( "allowedInPayloads"     , _boolean             , _true )
  .add( "allowLegStep"          , _boolean             , _false, [ ..._legs ] )
  .add( "alwaysCreateOutline"   , _boolean             , _false )
  .add( "alwaysShootWhenMoving" , _boolean             , _false )
  .add( "ammoCapacity"          , _int                 , -1    , [ _pvp ] )
  .add( "ammoType"              , "ItemAmmoType"       , "Items.copper" )
  .add( "armor"                 , _float               , 0 )
  .add( "autoFindTarget"        , _boolean             , _true)
  .add( "baseRotateSpeed"       , _float               , 5.5 , [ ..._mech ] )
  .add( "boostMultiplier"       , _float               , 1 , [ ..._boost ] )
  .add( "bounded"               , _boolean             , _true )
  .add( "buildBeamOffset"       , _float               , 3.8,   [ _build ] )
  .add( "buildRange"            , _float               , 220,   [ _build ] )
  .add( "buildSpeed"            , _float               , -1 ,   [ _build ] )
  .add( "canAttack"             , _boolean             , _true )
  .add( "canBoost"              , _boolean             , _false, [ "boost" ] )
  .add( "canDrown"              , _boolean             , _true )
  .add( "circleTarget"          , _boolean             , _false )
  .add( "clipSize"              , _float               , -1 )
  .add( "crashDamageMultiplier" , _float               , 1 )
  .add( "createScorch"          , _boolean             , _true )
  .add( "createWreck"           , _boolean             , _true )
  .add( "commands"              , _arr( "UnitCommand") , "[]"   , [ _command ] )
  .add( "coreUnitDocking"       , _boolean             , _false )
  .add( "drag"                  , _float               , 0.3 )
  .add( "deathExplosionEffect"  , "<span style=\"background:red;\">unknown</span>"            , "Fx.dynamicExplosion" )
  .add( "deathSound"            , "Sounds"             , "Sounds.bang" )
  .add( "defaultCommand"        , "UnitCommand"        , "null")
  .add( "drawBody"              , _boolean             , _true , [ _design ] )
  .add( "drawBuildBeam"         , _boolean             , _true , [ _build ] )
  .add( "drawCell"              , _boolean             , _true , [ _design ] )
  .add( "drawItems"             , _boolean             , _true , [ _design ] )
  .add( "drawMinimap"           , _boolean             , _true )
  .add( "drawShields"           ,_boolean              , _true , [ _design ] )
  .add( "drownTimeMultiplier"   , _float               , 1 )
  .add( "engineColor"           , "Color"              , _null, [ _json ] )
  .add( "engineLayer"           ,  _float             , -1    , [ _design ] )


export default list 