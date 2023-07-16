import { Ability, Prov, Seq, UnitController, float, toExtend, boolean, tank, Sound, int, Color, itemAmmoType, Items, setArr, UnitCommand, Unit, Func, UnitEngine, Effect, ObjectSet, StatusEffect, Item, DrawPart, Weapon, empty, FxParam, SoundsParam, ColorParam, json, movement, shoot, legs, design, boost, build, ground, support, flying, crawl, missile, hover, mine, naval, mech } from "../bundle/general__vars.js";

const UnitType = { _name: "UnitType" }


export class Info{
  type;
  value;
  description;
  category=[];
}

const names = [
  "abilities",
  "accel",
  "aiController",
  "aimDst",
  "allowedInPayloads",
  "allowLegStep",
  "alwaysCreateOutline",
  "alwaysShootWhenMoving",
  "ammoCapacity",
  "ammoType",
  "armor",
  "autoFindTarget",
  "baseLegStraightness",
  "baseRotateSpeed",
  "boostMultiplier",
  "bounded",
  "buildBeamOffset",
  "buildRange",
  "buildSpeed",
  "canAttack",
  "canBoost",
  "canDrown",
  "canHeal",
  "circleTarget",
  "clipSize",
  "commands",
  "constructor",
  "controller",
  "coreUnitDock",
  "crashDamageMultiplier",
  "crawlSlowdown",
  "crawlSlowdownFrac",
  "createScorch",
  "createWreck",
  "crushDamage",
  "deathExplosionEffect",
  "deathSound",
  "defaultCommand",
  "dpsEstimate",
  "drag",
  "drawBody",
  "drawBuildBeam",
  'drawCell',
  'drawItems',
  'drawMinimap',
  'drawShields',
  'drownTimeMultiplier',
  'engineColor',
  'engineColorInner',
  'engineLayer',
  'engineOffset',
  'engines',
  'engineSize',
  'envEnabled',
  'envDisabled',
  'envRequired',
  'faceTarget',
  'fallEffect',
  'fallEngineEffect',
  'fallSpeed',
  "flipBackLegs",
  "flipLegSide", 
  "flying", 
  "fogRadius", 
  "forceMultiTarget", 
  'groundLayer',
  'healColor',
  'healFlash',
  'health',
  'hidden',
  'hitSize',
  'hittable',
  'homingDelay',
  'hoverable',
  'hovering',
  'itemOffsetY',
  'isEnemy',
  'immunities',
  'internal',
  'itemCapacity',
  'killable',
  'legContinuousMove',
  'legCount',
  'legGroupSize',
  'legBaseOffset',
  'legExtension',
  'legForwardScl',
  'legLength',
  'legLengthScl',
  'legMaxLength',
  'legMinLength',
  'legMoveSpace',
  'legPairOffset',
  'legPhysicsLayer',
  'legSpeed',
  'legSplashDamage',
  'legSplashRange',
  'legStraightLength',
  'legStraightness',
  'lifetime',
  'lightColor',
  'lightOpacity',
  'lightRadius',
  'lockLegBase',
  'logicControllable',
  'loopSound',
  'loopSoundVolume',
  'lowAltitude',
  'maxRange',
  'mechFrontSway',
  'mechLandShake',
  'mechLegColor',
  'mechSideSway',
  'mechStepParticles',
  'mechStride',
  'mineFloor',
  'mineHardnessScaling',
  'mineItems',
  'mineRange',
  'mineSound',
  'mineSoundVolume',
  'mineSpeed',
  'mineTier',
  'mineWalls',
  'missileAccelTime',
  'naval',
  'omniMovement',
  'outlineColor',
  'outlineRadius',
  'outlines',
  'parts',
  'pathCost',
  'payloadCapacity',
  'pickupUnits',
  'playerControllable',
  'physics',
  'range',
  'researchCostMultiplier',
  'rippleScale',
  'riseSpeed',
  'rotateMoveFirst',
  'rotateSpeed',
  'rotateToBuilding',
  'sample',
  'segmentMag',
  'segments',
  'segmentScl',
  'segmentPhase',
  'segmentRotSpeed',
  'segmentMaxRot',
  'shadowElevation',
  'shadowElevationScl',
  'singleTarget',
  'speed',
  'squareShape',
  'stepShake',
  'strafePenalty',
  'targetable',
  'targetAir',
  'targetFlags',
  'targetGround',
  'targetPriority',
  'trailColor',
  'trailLength',
  'trailScl',
  'treadEffect',
  'treadFrames',
  'treadPullOffset',
  'treadRects',
  'type',
  'useEngineElevation',
  'useUnitCap',
  'vulnerableWithPayloads',
  'waveTrailX',
  'waveTrailY',
  'weapons'
].forEach( name => UnitType[ name ] = new Info() )


/* type */
UnitType.abilities.type = Seq( Ability )
UnitType.accel.type = float
UnitType.aiController.type = Prov( toExtend( "?" )( UnitController ) )
UnitType.aimDst.type = float
UnitType.allowedInPayloads.type = boolean
UnitType.allowLegStep.type = boolean
UnitType.alwaysCreateOutline.type = boolean
UnitType.alwaysShootWhenMoving.type = boolean
UnitType.ammoCapacity.type = int
UnitType.ammoType.type = itemAmmoType+`( ${ Items }.${ "copper" })`
UnitType.armor.type = float
UnitType.autoFindTarget.type = boolean
UnitType.baseLegStraightness.type = float
UnitType.baseRotateSpeed.type = float
UnitType.boostMultiplier.type = float
UnitType.bounded.type = boolean
UnitType.buildBeamOffset.type = float
UnitType.buildRange.type = float
UnitType.buildSpeed.type = float
UnitType.canAttack.type = float
UnitType.canBoost.type = float
UnitType.canDrown.type = boolean
UnitType.canHeal.type = boolean
UnitType.circleTarget.type = boolean
UnitType.clipSize.type = int
UnitType.commands.type = setArr( UnitCommand )
UnitType.constructor.type = Prov( toExtend ( "?" ) ( Unit ) )
UnitType.controller.type = Func( toExtend( `${ Unit } , ?` )( UnitController ) )
UnitType.coreUnitDock.type = boolean
UnitType.crashDamageMultiplier.type = float
UnitType.crawlSlowdown.type = float
UnitType.crawlSlowdownFrac.type = float
UnitType.createScorch.type = boolean
UnitType.createWreck.type = boolean
UnitType.crushDamage.type = float
UnitType.deathExplosionEffect.type = Effect
UnitType.deathSound.type = Sound
UnitType.defaultCommand.type = UnitCommand
UnitType.dpsEstimate.type = float
UnitType.drag.type = float
UnitType.drawBody.type = boolean
UnitType.drawBuildBeam.type = boolean
UnitType.drawCell.type = boolean
UnitType.drawItems.type = boolean
UnitType.drawMinimap.type = boolean
UnitType.drawShields.type = boolean
UnitType.drownTimeMultiplier.type = float
UnitType.engineColor.type = Color
UnitType.engineColorInner.type = Color 
UnitType.engineLayer.type = float
UnitType.engineOffset.type = float
UnitType.engines.type = Seq( UnitEngine )
UnitType.engineSize.type = float
UnitType.envDisabled.type = int
UnitType.envEnabled.type = int
UnitType.envRequired.type = int
UnitType.faceTarget.type = boolean
UnitType.fallEffect.type = Effect
UnitType.fallEngineEffect.type = Effect
UnitType.fallSpeed.type = float
UnitType.flipBackLegs.type = boolean
UnitType.flipLegSide.type = boolean
UnitType.flying.type = boolean
UnitType.fogRadius.type = float
UnitType.forceMultiTarget.type = boolean
UnitType.groundLayer.type = float
UnitType.healColor.type = Color
UnitType.healFlash.type = boolean
UnitType.health.type = float
UnitType.hidden.type = boolean
UnitType.hitSize.type = float
UnitType.hittable.type = boolean
UnitType.homingDelay.type = float
UnitType.hoverable.type = boolean
UnitType.hovering.type = boolean
UnitType.itemOffsetY.type = float
UnitType.isEnemy.type = boolean
UnitType.immunities.type = ObjectSet( StatusEffect )
UnitType.internal.type = boolean
UnitType.itemCapacity.type = int
UnitType.killable.type = boolean
UnitType.legContinuousMove.type = boolean
UnitType.legCount.type = int
UnitType.legGroupSize.type = int
UnitType.legBaseOffset.type = float
UnitType.legExtension.type = float
UnitType.legForwardScl.type = float
UnitType.legLength.type = float
UnitType.legLengthScl.type = float
UnitType.legMaxLength.type = float
UnitType.legMinLength.type = float
UnitType.legMoveSpace.type = float
UnitType.legPairOffset.type = float
UnitType.legPhysicsLayer.type = boolean
UnitType.legSpeed.type = float
UnitType.legSplashDamage.type = float
UnitType.legSplashRange.type = float
UnitType.legStraightLength.type = float
UnitType.legStraightness.type = float
UnitType.lifetime.type = float
UnitType.lightColor.type = Color
UnitType.lightOpacity.type = float
UnitType.lightRadius.type = float
UnitType.lockLegBase.type = boolean
UnitType.logicControllable.type = boolean
UnitType.loopSound.type = Sound
UnitType.loopSoundVolume.type = float 
UnitType.lowAltitude.type = boolean
UnitType.maxRange.type = float
UnitType.mechFrontSway.type = float
UnitType.mechLandShake.type = float
UnitType.mechLegColor.type = Color
UnitType.mechSideSway.type = float
UnitType.mechStepParticles.type = boolean
UnitType.mechStride.type = float
UnitType.mineFloor.type = boolean
UnitType.mineHardnessScaling.type = boolean 
UnitType.mineItems.type = Seq( Item )
UnitType.mineRange.type = float
UnitType.mineSound.type = Sound
UnitType.mineSoundVolume.type = float 
UnitType.mineSpeed.type = float
UnitType.mineTier.type = int
UnitType.mineWalls.type = boolean
UnitType.missileAccelTime.type = float
UnitType.naval.type = boolean
UnitType.omniMovement.type = boolean
UnitType.outlineColor.type = Color
UnitType.outlineRadius.type = int
UnitType.outlines.type = boolean
UnitType.parts.type = Seq( DrawPart )
UnitType.pathCost.type = "PathCost"
UnitType.payloadCapacity.type = float
UnitType.pickupUnits.type = boolean
UnitType.playerControllable.type = boolean
UnitType.physics.type = boolean
UnitType.range.type = float
UnitType.researchCostMultiplier.type = float
UnitType.rippleScale.type = float
UnitType.riseSpeed.type = float
UnitType.rotateMoveFirst.type = boolean
UnitType.rotateSpeed.type = float
UnitType.rotateToBuilding.type = boolean
UnitType.sample.type = Unit
UnitType.segmentMag.type = float
UnitType.segmentMaxRot.type = float
UnitType.segmentPhase.type = float
UnitType.segmentRotSpeed.type = float
UnitType.segments.type = int
UnitType.segmentScl.type = float 
UnitType.shadowElevation.type = float
UnitType.shadowElevationScl.type = float
UnitType.singleTarget.type = boolean
UnitType.speed.type = float
UnitType.squareShape.type = boolean
UnitType.stepShake.type = boolean
UnitType.strafePenalty.type = float
UnitType.targetable.type = boolean
UnitType.targetAir.type = boolean
UnitType.targetFlags.type = setArr( "BlockFlag" )
UnitType.targetGround.type = boolean
UnitType.targetPriority.type = float
UnitType.trailColor.type = Color
UnitType.trailLength.type = int
UnitType.trailScl.type = float
UnitType.treadEffect.type = Effect 
UnitType.treadFrames.type = int
UnitType.treadPullOffset.type = int
UnitType.treadRects.type = setArr( "Rect" )
UnitType.type.type = "String"
UnitType.useEngineElevation.type = boolean
UnitType.useUnitCap.type = boolean
UnitType.vulnerableWithPayloads.type = boolean 
UnitType.waveTrailX.type = float
UnitType.waveTrailY.type = float
UnitType.weapons.type = Seq( Weapon )



//value
UnitType.abilities.value = empty.Seq
UnitType.accel.value = 0.5
UnitType.aiController.value = "() -> !flying ? new GroundAI() : new FlyingAI()"
UnitType.aimDst.value = -1
UnitType.allowedInPayloads.value = true
UnitType.allowLegStep.value = false
UnitType.alwaysCreateOutline.value = false
UnitType.alwaysShootWhenMoving.value = false
UnitType.ammoCapacity.value = -1
UnitType.ammoType.value = Items+".copper"
UnitType.armor.value = 0
UnitType.autoFindTarget.value = true
UnitType.baseLegStraightness.value = 0
UnitType.baseRotateSpeed.value = 5
UnitType.boostMultiplier.value = 1
UnitType.bounded.value = true
UnitType.buildBeamOffset.value = 3.8
UnitType.buildRange.value = 220
UnitType.buildSpeed.value = -1
UnitType.canAttack.value = true
UnitType.canBoost.value = false
UnitType.canDrown.value = true
UnitType.canHeal.value = false
UnitType.circleTarget.value = false
UnitType.clipSize.value = -1
UnitType.commands.value = "[]"
UnitType.constructor.value = Unit
UnitType.controller.value = "u -> !playerControllable || (u.team.isAI() && !u.team.rules().rtsAi) ? aiController.get() : new CommandAI()"
UnitType.coreUnitDock.value = false
UnitType.crashDamageMultiplier.value = 1
UnitType.crawlSlowdown.value = .5
UnitType.crawlSlowdownFrac.value = .55
UnitType.createScorch.value = true
UnitType.createWreck.value = true
UnitType.crushDamage.value = 0
UnitType.deathExplosionEffect.value = FxParam( "dynamicExplosion" )
UnitType.deathSound.value = SoundsParam( "bang" )
UnitType.defaultCommand.value = null
UnitType.dpsEstimate.value = -1
UnitType.drag.value = .3
UnitType.drawBody.value = true
UnitType.drawBuildBeam.value = true
UnitType.drawCell.value = true
UnitType.drawItems.value = true
UnitType.drawMinimap.value = true
UnitType.drawShields.value = true
UnitType.drownTimeMultiplier.value = 1
UnitType.engineColor.value = null
UnitType.engineColorInner.value = ColorParam( "white" ) 
UnitType.engineLayer.value = -1
UnitType.engineOffset.value = 5
UnitType.engines.value = empty.Seq
UnitType.engineSize.value = 2.5
UnitType.envDisabled.value = "Env.scorching = 16"
UnitType.envEnabled.value = "Env.terrestrial = 1"
UnitType.envRequired.value = 0
UnitType.faceTarget.value = true
UnitType.fallEffect.value = FxParam( "fallSmoke" )
UnitType.fallEngineEffect.value = FxParam( "fallSmoke" )
UnitType.fallSpeed.value = .018
UnitType.flipBackLegs.value = true
UnitType.flipLegSide.value = false
UnitType.flying.value = false
UnitType.fogRadius.value = -1
UnitType.forceMultiTarget.value = false
UnitType.groundLayer.value = "Layer.groundUnit = 60"
UnitType.healColor.value = ColorParam( 'valueOf("98ffa9")' )
UnitType.healFlash.value = true
UnitType.health.value = 200
UnitType.hidden.value = false
UnitType.hitSize.value = 6
UnitType.hittable.value = true
UnitType.homingDelay.value = 10
UnitType.hoverable.value = true
UnitType.hovering.value = false
UnitType.itemOffsetY.value = 3
UnitType.isEnemy.value = true
UnitType.immunities.value = empty.ObjectSet
UnitType.internal.value = false
UnitType.itemCapacity.value = -1
UnitType.killable.value = true
UnitType.legContinuousMove.value = false
UnitType.legCount.value = 4
UnitType.legGroupSize.value = 2
UnitType.legBaseOffset.value = 0
UnitType.legExtension.value = 0
UnitType.legForwardScl.value = 1
UnitType.legLength.value = 10
UnitType.legLengthScl.value = 1
UnitType.legMaxLength.value = 1.75
UnitType.legMinLength.value = 0
UnitType.legMoveSpace.value = 1
UnitType.legPairOffset.value = 0
UnitType.legPhysicsLayer.value = true
UnitType.legSpeed.value = .1
UnitType.legSplashDamage.value = 0
UnitType.legSplashRange.value = 5
UnitType.legStraightLength.value = 1
UnitType.legStraightness.value = 0
UnitType.lifetime.value = 300
UnitType.lightColor.value = 'Pal.powerLight = "fbd367"'
UnitType.lightOpacity.value = .6
UnitType.lightRadius.value = -1
UnitType.lockLegBase.value = false
UnitType.logicControllable.value = true
UnitType.loopSound.value = SoundsParam( "none" )
UnitType.loopSoundVolume.value = .5 
UnitType.lowAltitude.value = false
UnitType.maxRange.value = -1
UnitType.mechFrontSway.value = .1
UnitType.mechLandShake.value = 0
UnitType.mechLegColor.value = "Pal.darkMetal"
UnitType.mechSideSway.value = .54
UnitType.mechStepParticles.value = false
UnitType.mechStride.value = -1
UnitType.mineFloor.value = true
UnitType.mineHardnessScaling.value = true 
UnitType.mineItems.value = "Seq.with(Items.copper, Items.lead, Items.titanium, Items.thorium)"
UnitType.mineRange.value = 70
UnitType.mineSound.value = SoundsParam( "minebeam" )
UnitType.mineSoundVolume.value = .6 
UnitType.mineSpeed.value = 1
UnitType.mineTier.value = -1
UnitType.mineWalls.value = false
UnitType.missileAccelTime.value = 0
UnitType.naval.value = false
UnitType.omniMovement.value = true
UnitType.outlineColor.value = "Pal.darkMetal"
UnitType.outlineRadius.value = 3
UnitType.outlines.value = true
UnitType.parts.value = empty.Seq
UnitType.pathCost.value = null
UnitType.payloadCapacity.value = 8
UnitType.pickupUnits.value = true
UnitType.playerControllable.value = true
UnitType.physics.value = true
UnitType.range.value = -1
UnitType.researchCostMultiplier.value = 50
UnitType.rippleScale.value = 1
UnitType.riseSpeed.value = .08
UnitType.rotateMoveFirst.value = false
UnitType.rotateSpeed.value = 5
UnitType.rotateToBuilding.value = true
UnitType.sample.value = null
UnitType.segmentMag.value = 2
UnitType.segments.value = 0
UnitType.segmentScl.value = 4 
UnitType.segmentPhase.value = 5
UnitType.segmentRotSpeed.value = 1
UnitType.segmentMaxRot.value = 30
UnitType.shadowElevation.value = -1
UnitType.shadowElevationScl.value = 1
UnitType.singleTarget.value = false
UnitType.speed.value = 1.1
UnitType.squareShape.value = false
UnitType.stepShake.value = -1
UnitType.strafePenalty.value = .5
UnitType.targetable.value = true
UnitType.targetAir.value = true
UnitType.targetFlags.value = "[null]"
UnitType.targetGround.value = true
UnitType.targetPriority.value = 0
UnitType.trailColor.value = null
UnitType.trailLength.value = 0
UnitType.trailScl.value = 1
UnitType.treadEffect.value = null 
UnitType.treadFrames.value = 18
UnitType.treadPullOffset.value = 0
UnitType.treadRects.value = "[]"
UnitType.type.value = ""
UnitType.useEngineElevation.value = true
UnitType.useUnitCap.value = true
UnitType.vulnerableWithPayloads.value = false 
UnitType.waveTrailX.value = 4
UnitType.waveTrailY.value = -4
UnitType.weapons.value = empty.Seq



/* category */
UnitType.abilities.category = [ json ]
UnitType.accel.category = [ json, movement ]
UnitType.aiController.category = []
UnitType.aimDst.category = [ json, shoot ]
UnitType.allowedInPayloads.category = [ json ]
UnitType.allowLegStep.category = [ json, ...legs ]
UnitType.alwaysCreateOutline.category = [ json, design ]
UnitType.alwaysShootWhenMoving.category = [ json, shoot ]
UnitType.ammoCapacity.category = [ json, shoot ]
UnitType.ammoType.category = [ json, shoot ]
UnitType.armor.category = [ json ]
UnitType.autoFindTarget.category = [ json, shoot ]
UnitType.baseLegStraightness.category = [ json, ...legs, design ]
UnitType.baseRotateSpeed.category = [ json, movement, design ]
UnitType.boostMultiplier.category = [ json, ground, boost ]
UnitType.bounded.category = [ json ]
UnitType.buildBeamOffset.category = [ json, ...build ]
UnitType.buildRange.category = [ json, ...build ]
UnitType.buildSpeed.category = [ json, ...build ]
UnitType.canAttack.category = [ json ]
UnitType.canBoost.category = [ json, ground, boost ]
UnitType.canDrown.category = [ json, ground ]
UnitType.canHeal.category = [ json, support ]
UnitType.circleTarget.category = [ json, flying ]
UnitType.clipSize.category = [ json ]
UnitType.commands.category = [ json ]
UnitType.constructor.category = []
UnitType.controller.category = []
UnitType.coreUnitDock.category = [ json ]
UnitType.crashDamageMultiplier.category = [ json, flying ]
UnitType.crawlSlowdown.category = [ json, ...crawl ]
UnitType.crawlSlowdownFrac.category = [ json, ...crawl ]
UnitType.createScorch.category = [ json ]
UnitType.createWreck.category = [ json, flying ]
UnitType.crushDamage.category = [ json, ...tank, crawl[ 1 ] ]
UnitType.deathExplosionEffect.category = [ json, design ]
UnitType.deathSound.category = [ json, design ]
UnitType.defaultCommand.category = [ json ]
UnitType.dpsEstimate.category = []
UnitType.drag.category = [ json, movement ]
UnitType.drawBody.category = [ json, design ]
UnitType.drawBuildBeam.category = [ json, ...build ]
UnitType.drawCell.category = [ json, design ]
UnitType.drawItems.category = [ json, design ]
UnitType.drawMinimap.category = [ json, design ]
UnitType.drawShields.category = [ json, design ]
UnitType.drownTimeMultiplier.category = [ json ]
UnitType.engineColor.category = [ json, design, flying, boost ]
UnitType.engineColorInner.category = [ json, design, flying, boost ] 
UnitType.engineLayer.category = [ json, design, flying, boost ] 
UnitType.engineOffset.category= [ json, design, flying, boost ] 
UnitType.engines.category = [ json, design, flying, boost ] 
UnitType.engineSize.category = [ json, design, flying, boost ] 
UnitType.envDisabled.category = [ json ]
UnitType.envEnabled.category = [ json ]
UnitType.envRequired.category = [ json ]
UnitType.faceTarget.category = [ json, shoot, design ]
UnitType.fallEffect.category = [ json, design, flying, boost ]
UnitType.fallEngineEffect.category = [ json, design, flying, boost ]
UnitType.fallSpeed.category = [ json, boost ]
UnitType.flipBackLegs.category = [ json, legs[1]  ]
UnitType.flipLegSide.category = [ json, legs[1]  ]
UnitType.flying.category = [ json, flying ]
UnitType.fogRadius.category = [ json ]
UnitType.forceMultiTarget.category = [ json, shoot ]
UnitType.groundLayer.category = [ json, design ]
UnitType.healColor.category = [ json, support, design ]
UnitType.healFlash.category = [ json, support, design ]
UnitType.health.category = [ json ]
UnitType.hidden.category = [ json ]
UnitType.hitSize.category = [ json ]
UnitType.hittable.category = [ json ]
UnitType.homingDelay.category = [ json, missile ]
UnitType.hoverable.category = [ json, "inteface" ]
UnitType.hovering.category = [ json, ...hover ]
UnitType.itemOffsetY.category = [ json, design ]
UnitType.isEnemy.category = [ json, support ]
UnitType.immunities.category = [ json ]
UnitType.internal.category = [ json ]
UnitType.itemCapacity.category = [ json ]
UnitType.killable.category = [ json ]
UnitType.legContinuousMove.category = [ json, legs[ 1 ] ]
UnitType.legCount.category = [ json, legs[ 1 ] ]
UnitType.legGroupSize.category = [ json, legs[ 1 ] ]
UnitType.legBaseOffset.category = [ json, legs[ 1 ], design ]
UnitType.legExtension.category = [ json, legs[ 1 ], design ]
UnitType.legForwardScl.category = [ json, legs[ 1 ], design ]
UnitType.legLength.category = [ json, legs[ 1 ], design ]
UnitType.legLengthScl.category = [ json, legs[ 1 ], design ]
UnitType.legMaxLength.category = [ json, legs[ 1 ], design ]
UnitType.legMinLength.category = [ json, legs[ 1 ], design ]
UnitType.legMoveSpace.category = [ json, legs[ 1 ], design ]
UnitType.legPairOffset.category = [ json, legs[ 1 ], design ]
UnitType.legPhysicsLayer.category = [ json, legs[ 1 ], design ]
UnitType.legSpeed.category = [ json, legs[ 1 ] ]
UnitType.legSplashDamage.category = [ json, legs[ 1 ] ]
UnitType.legSplashRange.category = [ json, legs[ 1 ] ]
UnitType.legStraightLength.category = [ json, legs[ 1 ], design ]
UnitType.legStraightness.category = [ json, legs[ 1 ], design ]
UnitType.lifetime.category = [ json, missile ]
UnitType.lightColor.category = [ json, design ]
UnitType.lightOpacity.category = [ json, design ]
UnitType.lightRadius.category = [ json, design ]
UnitType.lockLegBase.category = [ json, legs[1], design ]
UnitType.logicControllable.category = [ json ]
UnitType.loopSound.category = [ json ]
UnitType.loopSoundVolume.category = [ json ] 
UnitType.lowAltitude.category = [ json, design ]
UnitType.maxRange.category = [ json, shoot ]
UnitType.mechFrontSway.category = [ json, mech[1] ]
UnitType.mechLandShake.category = [ json, mech[1] ]
UnitType.mechLegColor.category = [ json, mech[1] ]
UnitType.mechSideSway.category = [ json, mech[1] ]
UnitType.mechStepParticles.category = [ json, mech[1] ]
UnitType.mechStride.category = [ json, mech[1] ]
UnitType.mineFloor.category = [ json, mine ]
UnitType.mineHardnessScaling.category = [ json, mine ] 
UnitType.mineItems.category = [ json, mine ] 
UnitType.mineRange.category = [ json, mine ] 
UnitType.mineSound.category = [ json, mine, design ] 
UnitType.mineSoundVolume.category = [ json, mine, design ]  
UnitType.mineSpeed.category = [ json, mine ] 
UnitType.mineTier.category = [ json, mine ] 
UnitType.mineWalls.category = [ json, mine ] 
UnitType.missileAccelTime.category = [ json, movement, missile ]
UnitType.naval.category = [ json, naval ]
UnitType.omniMovement.category = [ json, movement ]
UnitType.outlineColor.category = [ json, design ]
UnitType.outlineRadius.category = [ json, design ]
UnitType.outlines.category = [ json, design ]
UnitType.parts.category = [ json, design ]
UnitType.pathCost.category = []
UnitType.payloadCapacity.category = [ json ]
UnitType.pickupUnits.category = [ json ]
UnitType.playerControllable.category = [ json ]
UnitType.physics.category = [ json ]
UnitType.range.category = [ json, shoot ]
UnitType.researchCostMultiplier.category = [ json ]
UnitType.rippleScale.category = [ json, legs[1] ]
UnitType.riseSpeed.category = [ json, boost ]
UnitType.rotateMoveFirst.category = [ json, movement, design ]
UnitType.rotateSpeed.category = [ json, movement ]
UnitType.rotateToBuilding.category = [ json, build ]
UnitType.sample.category = []
UnitType.segmentMag.category = [ json, crawl, design ]
UnitType.segmentMaxRot.category = [ json, crawl, design ]
UnitType.segmentPhase.category = [ json, crawl, design ]
UnitType.segmentRotSpeed.category = [ json, crawl, design ]
UnitType.segments.category = [ json, crawl ]
UnitType.segmentScl.category = [ json, crawl, design ] 
UnitType.shadowElevation.category = [ json, ground, design ]
UnitType.shadowElevationScl.category = [ json, ground, design ]
UnitType.singleTarget.category = [ json, shoot ]
UnitType.speed.category = [ json, movement ]
UnitType.squareShape.category = [ json, design ]
UnitType.stepShake.category = [ json, ground, mech[1], legs[1], design ]
UnitType.strafePenalty.category = [ json, movement ]
UnitType.targetable.category = [ json ]
UnitType.targetAir.category = [ json, shoot ]
UnitType.targetFlags.category = [ json, shoot ]
UnitType.targetGround.category = [ json, shoot ]
UnitType.targetPriority.category = [ json, shoot ]
UnitType.trailColor.category = [ json, design, naval ]
UnitType.trailLength.category = [ json, design, naval ]
UnitType.trailScl.category = [ json, design, naval, boost, flying ]
UnitType.treadEffect.category = [ json, design, tank[1] ]
UnitType.treadFrames.category = [ json, design, tank[1] ]
UnitType.treadPullOffset.category = [ json, design, tank[1] ]
UnitType.treadRects.category = [ json, design, tank[1] ]
UnitType.type.category = [ json ]
UnitType.useEngineElevation.category = [ json, design, boost, flying ]
UnitType.useUnitCap.category = [ json ]
UnitType.vulnerableWithPayloads.category = [ json ] 
UnitType.waveTrailX.category = [ json, design, naval ]
UnitType.waveTrailY.category = [ json, design, naval ]
UnitType.weapons.category = [ json, shoot ]




export default UnitType