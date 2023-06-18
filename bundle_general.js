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


export const unknown = "<span style=\"background:red;\">unknown</span>"


const _json = "json"

const _pvp  = "pvp"

const _ground = "ground"
const _naval  = "naval"
const _flying = "flying"

const _build = "build"
const _command = "command"
const _design = "design"

const _Color = "Color"
const _Sounds = "Sounds"
const _movement = "movement"
const _mining   = "mining"

const _missile = "missile"
const _legs    = [ _ground, "legs" ]
const _mech    = [ _ground, "mech" ]
const _tank    = [ _ground, "tank" ]
const _crawl = [ _ground, "crawl" ]
const _boost   = [ _ground, "boost" ]



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
  .add( "autoFindTarget"        , _boolean             , _true )
  .add( "baseLegStraightness"   , _float               , 0 )
  .add( "baseRotateSpeed"       , _float               , 5.5 , [ ..._mech ] )
  .add( "boostMultiplier"       , _float               , 1 , [ ..._boost ] )
  .add( "bounded"               , _boolean             , _true )
  .add( "buildBeamOffset"       , _float               , 3.8,   [ _build ] )
  .add( "buildRange"            , _float               , 220,   [ _build ] )
  .add( "buildSpeed"            , _float               , -1 ,   [ _build ] )
  // .add( "buildTime"             , _float               , -1   , [ _build ] )
  .add( "canAttack"             , _boolean             , _true )
  .add( "canBoost"              , _boolean             , _false, [ "boost" ] )
  .add( "canDrown"              , _boolean             , _true )
  .add( "circleTarget"          , _boolean             , _false )
  .add( "clipSize"              , _float               , -1 )
  .add( "crashDamageMultiplier" , _float               , 1 )
  .add( "crawlSlowdown"         , _float               , 0.5   , [ ..._crawl ] )
  .add( "crawlSlowdownFrac"     , _float               , 0.55 )
  .add( "createScorch"          , _boolean             , _true )
  .add( "createWreck"           , _boolean             , _true )
  .add( "crushDamage"           , _float               , 0 )
  .add( "commands"              , _arr( "UnitCommand") , "[]"   , [ _command ] )
  .add( "coreUnitDocking"       , _boolean             , _false )
  .add( "drag"                  , _float               , 0.3 )
  .add( "deathExplosionEffect"  , unknown              , "Fx.dynamicExplosion" )
  .add( "deathSound"            , _Sounds              , "Sounds.bang" )
  .add( "defaultCommand"        , "UnitCommand"        , "null")
  .add( "drawBody"              , _boolean             , _true , [ _design ] )
  .add( "drawBuildBeam"         , _boolean             , _true , [ _build ] )
  .add( "drawCell"              , _boolean             , _true , [ _design ] )
  .add( "drawItems"             , _boolean             , _true , [ _design ] )
  .add( "drawMinimap"           , _boolean             , _true )
  .add( "drawShields"           , _boolean             , _true , [ _design ] )
  .add( "drownTimeMultiplier"   , _float               , 1 )
  .add( "engineColor"           , _Color              , _null, [ _json ] )
  .add( "engineLayer"           , _float               , -1    , [ _design ] )
  .add( "engineOffset"          , _float               , 5 )
  .add( "engines"               , _arr( "UnitEngine" ) , "[]"  )
  .add( "engineSize"            , _float               , 2.5  )
  .add( "fallSpeed"             , _float               , 0.018, [ ..._boost ] )
  .add( "fallEffect"            , unknown              , "Fx.fallEffect" )
  .add( "fallEngineEffect"      , unknown              , "Fx.fallEffect" )
  .add( "faceTarget"            , _boolean             , _true )
  .add( "flipBackLegs"          , _boolean             , _true , [ ..._legs ] )
  .add( "flipLegSide"           , _boolean             , _false, [ ..._legs ] )
  .add( "flying"                , _boolean             , _false , [ _flying  ] )
  .add( "fogRadius"             , _float               , -1 )
  .add( "forceMultiTarget"      , _boolean             , _false )
  .add( "groundLayer"           , _float               , 60 )
  .add( "healColor"             , _Color              , "Color.valueof(\"98ffa9\")" )
  .add( "healFlash"             , _boolean             , _true )
  .add( "health"                , _float               , 200 )
  .add( "hidden"                , _boolean             , _false )
  .add( "hittable"              , _boolean             , _true )
  .add( "hitSize"               , _float               , 6 )
  .add( "homingDelay"           , _float               , 10 )
  .add( "hoverable"             , _boolean             , _true )
  .add( "hovering"              , _boolean             , _false )
  .add( "innerEngineColor"      , _Color               , "Colors.white" )
  .add( "internal"              , _boolean             , _false )
  .add( "isEnemy"               , _boolean             , _true )
  .add( "itemCapacity"          , _int                 , -1 )
  .add( "itemOffsetY"           , _float               , 3 )
  .add( "immunities"            , "ObjectSet<StatusEffect>[]", "[]" )
  .add( "killable"              , _boolean             , _true )
  .add( "legBaseOffset"         , _float               , 0     , [ ..._legs ] )
  .add( "legContinuousMove"     , _boolean             , "undefined", [ ..._legs ] )
  .add( "legCount"              , _int                 , 4     , [ ..._legs ] )
  .add( "legExtension"          , _float               , 0     , [ ..._legs ] )
  .add( "legForwardScl"         , _float               , 1     , [ ..._legs ] )
  .add( "legGroupSize"          , _int                 , 2     , [ ..._legs ] )
  .add( "legLength"             , _float               , 10    , [ ..._legs ] )
  .add( "legLengthScl"          , _float               , 1     , [ ..._legs ] )
  .add( "legMaxLength"          , _float               , 1.75  , [ ..._legs ] )
  .add( "legMinLength"          , _float               , 0     , [ ..._legs ] )
  .add( "legMoveSpace"          , _float               , 1     , [ ..._legs ] )
  .add( "legPairOffset"         , _float               , 0     , [ ..._legs ] )
  .add( "legPhysicsLayer"       , _boolean             , _true , [ ..._legs ] )
  .add( "legSpeed"              , _float               , 0.1   , [ ..._legs ] )
  .add( "legSplashDamage"       , _float               , 0     , [ ..._legs ] )
  .add( "legSplashRange"        , _float               , 5     , [ ..._legs ] )
  .add( "legStraightLength"     , _float               , 1     , [ ..._legs ] )
  .add( "legStraightness"       , _float               , 0     , [ ..._legs ] )
  .add( "lifetime"              , _float               , 300   , [ ..._missile ] )
  .add( "lightColor"            , _Color               , "Colors.valueof(\"fbd367\")" )
  .add( "lightOpacity"          , _float               , 0.6 )
  .add( "lightRadius"           , _float               , -1 )
  .add( "lockLegBase"           , _boolean             , _false, [ ..._legs ] )
  .add( "logicControllable"     , _boolean             , _true )
  .add( "loopSound"             , _Sounds              , _Sounds+".none" )
  .add( "loopSoundVolume"       , _float               , 0.5 )
  .add( "lowAltitude"           , _boolean             , _false )
  .add( "maxRange"              , _float               , -1 )
  .add( "mechFrontSway"         , _float               , 0.1    , [ ..._mech ] )
  .add( "mechLandShake"         , _float               , 0      , [ ..._mech ] )
  .add( "mechLegColor"          , _Color               , _Color+".valueof(\"6e7080\")", [ ..._mech ] )
  .add( "mechSideSway"          , _float               , 0.54   , [ ..._mech ] )
  .add( "mechStepParticles"     , _boolean             , _false , [ ..._mech ] )
  .add( "mechStride"            , _float               ,-1      , [ ..._mech ] )
  .add( "mineFloor"             , _boolean             , _true  , [ _mining ] )
  .add( "mineHardnessScaling"   , _boolean             , _true  , [ _mining ] )
  .add( "mineRange"             , _float               , 70     , [ _mining ] )
  .add( "mineSound"             , _Sounds              , _Sounds+".minebeam" , [ _mining ] )
  .add( "mineSoundVolume"       , _float               , 0.6 , [ _mining ] )
  .add( "mineItems"             , _arr( "Seq<Item>" )  , "Seq.with(Items.copper, Items.lead, Items.titanium, Items.thorium)", [ _mining ] )
  .add( "mineSpeed"             , _float               , 1      , [ _mining ] )
  .add( "mineTier"              , _int                 , -1     , [ _mining ] )
  .add( "mineWalls"             , _boolean             , _false , [ _mining ] )
  .add( "missileAccelTime"      , _float               , 0      , [ _missile ] )
  .add( "naval"                 , _boolean             , _false , [ _naval ] )
  .add( "omniMovement"          , _boolean             , _true )
  .add( "outlineColor"          , _Color               , _Color+".valueof(\"6e7080\")" )
  .add( "outlineRadius"         , _int                 , 3 )
  .add( "outlines"              , _boolean             , _true )
  .add( "parts"                 , "DrawPart[]"         , "[]", [ _design ] )
  .add( "payloadCapacity"       ,  _float              , 8 )
  .add( "physics"               , _boolean             , _true )
  .add( "pickupUnits"           , _boolean             , _true )
  .add( "playerControllable"    , _boolean             , _true )
  .add( "range"                 , _float               , -1 )
  .add( "researchCostMultiplier", _float               , 50 )
  .add( "rippleScale"           , _float               , 1  )
  .add( "riseSpeed"             , _float               , 0.08 , [ ..._boost ] )
  .add( "rotateMoveFirst"       , _boolean             , _false, [ _movement ]  )
  .add( "rotateSpeed"           , _float               , 5      , [ _movement ]  )
  .add( "rotateToBuilding"      , _boolean             , _true  , [ _build ] )
  .add( "segmentMag"            , _float               , 2  , [ ..._crawl ] )
  .add( "segmentMaxRot"         , _float               , 30 , [ ..._crawl ] )
  .add( "segmentScl"            , _float               , 4  , [ ..._crawl ] )
  .add( "segments"              , _int                 , 0  , [ ..._crawl ] )
  .add( "segmentPhase"          , _float               , 5  , [ ..._crawl ] )
  .add( "segmentRotSpeed"       , _float               , 1  , [ ..._crawl ] )
  .add( "shadowElevation"       , _float               , -1 )
  .add( "shadowElevationScl"    ,  _float              , 1 )
  .add( "singleTarget"          , _boolean             , _false )
  .add( "speed"                 , _float               , 1.1  , [ _movement ] )
  .add( "stepShake"             , _float               , -1   , [ ..._mech, _legs[1] ] )
  .add( "strafePenalty"         , _float               , 0.5 , [ _movement ] )
  .add( "squareShape"           , _boolean             , _false  )
  .add( "targetable"            , _boolean             , _true )
  .add( "targetAir"             , _boolean             , _true )
  .add( "targetFlags"           , "TargetFlag[]"       , "[null]" )
  .add( "targetGround"          , _boolean             , _false )
  .add( "targetPriority"        , _float               , 0 )
  .add( "trailColor"            , _Color               , _null )
  .add( "trailLength"           , _int                 , 0  )
  .add( "trailScale"            , _float               , 1 )
  .add( "treadPullOffset"       , _int                 , 0    , [ ..._tank ] )
  .add( "treadFrames"           , _int                 , 18   , [ ..._tank ] )
  .add( "treadRects"            , _arr( "Rect" )       , "[]" , [ ..._tank ] )
  .add( "type"                  , _String              , "undefined" )
  .add( "useEngineElevation"    , _boolean             , _false, [ _design ] )
  .add( "useUnitCap"            , _boolean             , _true )
  .add( "vulnerableWithPayloads", _boolean             , _false )
  .add( "waveTrailX"            , _float               , 4 )
  .add( "waveTrailY"            , _float               , -3 )
  .add( "weapons"               , "Weapon[]"           , "[]" )


export default list 