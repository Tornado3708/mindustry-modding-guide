import { Ability, Prov, Seq, UnitController, float, toExtend, boolean, tank, Sound, int, Color, itemAmmoType, Items, setArr, UnitCommand, Unit, Func, UnitEngine, Effect, ObjectSet, StatusEffect, Item, DrawPart, Weapon, empty, FxParam, SoundsParam, ColorParam, json, movement, shoot, legs, design, boost, build, ground, support, flying, crawl, missile, hover, mine, naval, mech } from "../bundle/general__vars.js";

const Unittype = {}
Unittype.__proto__.name = "Unittype"


class Info{
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
].forEach( name => Unittype[ name ] = new Info() )


/* type */
Unittype.abilities.type = Seq( Ability )
Unittype.accel.type = float
Unittype.aiController.type = Prov( toExtend( "?" )( UnitController ) )
Unittype.aimDst.type = float
Unittype.allowedInPayloads.type = boolean
Unittype.allowLegStep.type = boolean
Unittype.alwaysCreateOutline.type = boolean
Unittype.alwaysShootWhenMoving.type = boolean
Unittype.ammoCapacity.type = int
Unittype.ammoType.type = itemAmmoType+`( ${ Items }.${ "copper" })`
Unittype.armor.type = float
Unittype.autoFindTarget.type = boolean
Unittype.baseLegStraightness.type = float
Unittype.baseRotateSpeed.type = float
Unittype.boostMultiplier.type = float
Unittype.bounded.type = boolean
Unittype.buildBeamOffset.type = float
Unittype.buildRange.type = float
Unittype.buildSpeed.type = float
Unittype.canAttack.type = float
Unittype.canBoost.type = float
Unittype.canDrown.type = boolean
Unittype.canHeal.type = boolean
Unittype.circleTarget.type = boolean
Unittype.clipSize.type = int
Unittype.commands.type = setArr( UnitCommand )
Unittype.constructor.type = Prov( toExtend ( "?" ) ( Unit ) )
Unittype.controller.type = Func( toExtend( `${ Unit } , ?` )( UnitController ) )
Unittype.coreUnitDock.type = boolean
Unittype.crashDamageMultiplier.type = float
Unittype.crawlSlowdown.type = float
Unittype.crawlSlowdownFrac.type = float
Unittype.createScorch.type = boolean
Unittype.createWreck.type = boolean
Unittype.crushDamage.type = float
Unittype.deathExplosionEffect.type = Effect
Unittype.deathSound.type = Sound
Unittype.defaultCommand.type = UnitCommand
Unittype.dpsEstimate.type = float
Unittype.drag.type = float
Unittype.drawBody.type = boolean
Unittype.drawBuildBeam.type = boolean
Unittype.drawCell.type = boolean
Unittype.drawItems.type = boolean
Unittype.drawMinimap.type = boolean
Unittype.drawShields.type = boolean
Unittype.drownTimeMultiplier.type = float
Unittype.engineColor.type = Color
Unittype.engineColorInner.type = Color 
Unittype.engineLayer.type = float
Unittype.engineOffset.type = float
Unittype.engines.type = Seq( UnitEngine )
Unittype.engineSize.type = float
Unittype.envDisabled.type = int
Unittype.envEnabled.type = int
Unittype.envRequired.type = int
Unittype.faceTarget.type = boolean
Unittype.fallEffect.type = Effect
Unittype.fallEngineEffect.type = Effect
Unittype.fallSpeed.type = float
Unittype.flipBackLegs.type = boolean
Unittype.flipLegSide.type = boolean
Unittype.flying.type = boolean
Unittype.fogRadius.type = float
Unittype.forceMultiTarget.type = boolean
Unittype.groundLayer.type = float
Unittype.healColor.type = Color
Unittype.healFlash.type = boolean
Unittype.health.type = float
Unittype.hidden.type = boolean
Unittype.hitSize.type = float
Unittype.hittable.type = boolean
Unittype.homingDelay.type = float
Unittype.hoverable.type = boolean
Unittype.hovering.type = boolean
Unittype.itemOffsetY.type = float
Unittype.isEnemy.type = boolean
Unittype.immunities.type = ObjectSet( StatusEffect )
Unittype.internal.type = boolean
Unittype.itemCapacity.type = int
Unittype.killable.type = boolean
Unittype.legContinuousMove.type = boolean
Unittype.legCount.type = int
Unittype.legGroupSize.type = int
Unittype.legBaseOffset.type = float
Unittype.legExtension.type = float
Unittype.legForwardScl.type = float
Unittype.legLength.type = float
Unittype.legLengthScl.type = float
Unittype.legMaxLength.type = float
Unittype.legMinLength.type = float
Unittype.legMoveSpace.type = float
Unittype.legPairOffset.type = float
Unittype.legPhysicsLayer.type = boolean
Unittype.legSpeed.type = float
Unittype.legSplashDamage.type = float
Unittype.legSplashRange.type = float
Unittype.legStraightLength.type = float
Unittype.legStraightness.type = float
Unittype.lifetime.type = float
Unittype.lightColor.type = Color
Unittype.lightOpacity.type = float
Unittype.lightRadius.type = float
Unittype.lockLegBase.type = boolean
Unittype.logicControllable.type = boolean
Unittype.loopSound.type = Sound
Unittype.loopSoundVolume.type = float 
Unittype.lowAltitude.type = boolean
Unittype.maxRange.type = float
Unittype.mechFrontSway.type = float
Unittype.mechLandShake.type = float
Unittype.mechLegColor.type = Color
Unittype.mechSideSway.type = float
Unittype.mechStepParticles.type = boolean
Unittype.mechStride.type = float
Unittype.mineFloor.type = boolean
Unittype.mineHardnessScaling.type = boolean 
Unittype.mineItems.type = Seq( Item )
Unittype.mineRange.type = float
Unittype.mineSound.type = Sound
Unittype.mineSoundVolume.type = float 
Unittype.mineSpeed.type = float
Unittype.mineTier.type = int
Unittype.mineWalls.type = boolean
Unittype.missileAccelTime.type = float
Unittype.naval.type = boolean
Unittype.omniMovement.type = boolean
Unittype.outlineColor.type = Color
Unittype.outlineRadius.type = int
Unittype.outlines.type = boolean
Unittype.parts.type = Seq( DrawPart )
Unittype.pathCost.type = "PathCost"
Unittype.payloadCapacity.type = float
Unittype.pickupUnits.type = boolean
Unittype.playerControllable.type = boolean
Unittype.physics.type = boolean
Unittype.range.type = float
Unittype.researchCostMultiplier.type = float
Unittype.rippleScale.type = float
Unittype.riseSpeed.type = float
Unittype.rotateMoveFirst.type = boolean
Unittype.rotateSpeed.type = float
Unittype.rotateToBuilding.type = boolean
Unittype.sample.type = Unit
Unittype.segmentMag.type = float
Unittype.segmentMaxRot.type = float
Unittype.segmentPhase.type = float
Unittype.segmentRotSpeed.type = float
Unittype.segments.type = int
Unittype.segmentScl.type = float 
Unittype.shadowElevation.type = float
Unittype.shadowElevationScl.type = float
Unittype.singleTarget.type = boolean
Unittype.speed.type = float
Unittype.squareShape.type = boolean
Unittype.stepShake.type = boolean
Unittype.strafePenalty.type = float
Unittype.targetable.type = boolean
Unittype.targetAir.type = boolean
Unittype.targetFlags.type = setArr( "BlockFlag" )
Unittype.targetGround.type = boolean
Unittype.targetPriority.type = float
Unittype.trailColor.type = Color
Unittype.trailLength.type = int
Unittype.trailScl.type = float
Unittype.treadEffect.type = Effect 
Unittype.treadFrames.type = int
Unittype.treadPullOffset.type = int
Unittype.treadRects.type = setArr( "Rect" )
Unittype.type.type = "String"
Unittype.useEngineElevation.type = boolean
Unittype.useUnitCap.type = boolean
Unittype.vulnerableWithPayloads.type = boolean 
Unittype.waveTrailX.type = float
Unittype.waveTrailY.type = float
Unittype.weapons.type = Seq( Weapon )



//value
Unittype.abilities.value = empty.Seq
Unittype.accel.value = 0.5
Unittype.aiController.value = "() -> !flying ? new GroundAI() : new FlyingAI()"
Unittype.aimDst.value = -1
Unittype.allowedInPayloads.value = true
Unittype.allowLegStep.value = false
Unittype.alwaysCreateOutline.value = false
Unittype.alwaysShootWhenMoving.value = false
Unittype.ammoCapacity.value = -1
Unittype.ammoType.value = Items+".copper"
Unittype.armor.value = 0
Unittype.autoFindTarget.value = true
Unittype.baseLegStraightness.value = 0
Unittype.baseRotateSpeed.value = 5
Unittype.boostMultiplier.value = 1
Unittype.bounded.value = true
Unittype.buildBeamOffset.value = 3.8
Unittype.buildRange.value = 220
Unittype.buildSpeed.value = -1
Unittype.canAttack.value = true
Unittype.canBoost.value = false
Unittype.canDrown.value = true
Unittype.canHeal.value = false
Unittype.circleTarget.value = false
Unittype.clipSize.value = -1
Unittype.commands.value = "[]"
Unittype.constructor.value = Unit
Unittype.controller.value = "u -> !playerControllable || (u.team.isAI() && !u.team.rules().rtsAi) ? aiController.get() : new CommandAI()"
Unittype.coreUnitDock.value = false
Unittype.crashDamageMultiplier.value = 1
Unittype.crawlSlowdown.value = .5
Unittype.crawlSlowdownFrac.value = .55
Unittype.createScorch.value = true
Unittype.createWreck.value = true
Unittype.crushDamage.value = 0
Unittype.deathExplosionEffect.value = FxParam( "dynamicExplosion" )
Unittype.deathSound.value = SoundsParam( "bang" )
Unittype.defaultCommand.value = null
Unittype.dpsEstimate.value = -1
Unittype.drag.value = .3
Unittype.drawBody.value = true
Unittype.drawBuildBeam.value = true
Unittype.drawCell.value = true
Unittype.drawItems.value = true
Unittype.drawMinimap.value = true
Unittype.drawShields.value = true
Unittype.drownTimeMultiplier.value = 1
Unittype.engineColor.value = null
Unittype.engineColorInner.value = ColorParam( "white" ) 
Unittype.engineLayer.value = -1
Unittype.engineOffset.value = 5
Unittype.engines.value = empty.Seq
Unittype.engineSize.value = 2.5
Unittype.envDisabled.value = "Env.scorching = 16"
Unittype.envEnabled.value = "Env.terrestrial = 1"
Unittype.envRequired.value = 0
Unittype.faceTarget.value = true
Unittype.fallEffect.value = FxParam( "fallSmoke" )
Unittype.fallEngineEffect.value = FxParam( "fallSmoke" )
Unittype.fallSpeed.value = .018
Unittype.flipBackLegs.value = true
Unittype.flipLegSide.value = false
Unittype.flying.value = false
Unittype.fogRadius.value = -1
Unittype.forceMultiTarget.value = false
Unittype.groundLayer.value = "Layer.groundUnit = 60"
Unittype.healColor.value = ColorParam( 'valueOf("98ffa9")' )
Unittype.healFlash.value = true
Unittype.health.value = 200
Unittype.hidden.value = false
Unittype.hitSize.value = 6
Unittype.hittable.value = true
Unittype.homingDelay.value = 10
Unittype.hoverable.value = true
Unittype.hovering.value = false
Unittype.itemOffsetY.value = 3
Unittype.isEnemy.value = true
Unittype.immunities.value = empty.ObjectSet
Unittype.internal.value = false
Unittype.itemCapacity.value = -1
Unittype.killable.value = true
Unittype.legContinuousMove.value = false
Unittype.legCount.value = 4
Unittype.legGroupSize.value = 2
Unittype.legBaseOffset.value = 0
Unittype.legExtension.value = 0
Unittype.legForwardScl.value = 1
Unittype.legLength.value = 10
Unittype.legLengthScl.value = 1
Unittype.legMaxLength.value = 1.75
Unittype.legMinLength.value = 0
Unittype.legMoveSpace.value = 1
Unittype.legPairOffset.value = 0
Unittype.legPhysicsLayer.value = true
Unittype.legSpeed.value = .1
Unittype.legSplashDamage.value = 0
Unittype.legSplashRange.value = 5
Unittype.legStraightLength.value = 1
Unittype.legStraightness.value = 0
Unittype.lifetime.value = 300
Unittype.lightColor.value = 'Pal.powerLight = "fbd367"'
Unittype.lightOpacity.value = .6
Unittype.lightRadius.value = -1
Unittype.lockLegBase.value = false
Unittype.logicControllable.value = true
Unittype.loopSound.value = SoundsParam( "none" )
Unittype.loopSoundVolume.value = .5 
Unittype.lowAltitude.value = false
Unittype.maxRange.value = -1
Unittype.mechFrontSway.value = .1
Unittype.mechLandShake.value = 0
Unittype.mechLegColor.value = "Pal.darkMetal"
Unittype.mechSideSway.value = .54
Unittype.mechStepParticles.value = false
Unittype.mechStride.value = -1
Unittype.mineFloor.value = true
Unittype.mineHardnessScaling.value = true 
Unittype.mineItems.value = "Seq.with(Items.copper, Items.lead, Items.titanium, Items.thorium)"
Unittype.mineRange.value = 70
Unittype.mineSound.value = SoundsParam( "minebeam" )
Unittype.mineSoundVolume.value = .6 
Unittype.mineSpeed.value = 1
Unittype.mineTier.value = -1
Unittype.mineWalls.value = false
Unittype.missileAccelTime.value = 0
Unittype.naval.value = false
Unittype.omniMovement.value = true
Unittype.outlineColor.value = "Pal.darkMetal"
Unittype.outlineRadius.value = 3
Unittype.outlines.value = true
Unittype.parts.value = empty.Seq
Unittype.pathCost.value = null
Unittype.payloadCapacity.value = 8
Unittype.pickupUnits.value = true
Unittype.playerControllable.value = true
Unittype.physics.value = true
Unittype.range.value = -1
Unittype.researchCostMultiplier.value = 50
Unittype.rippleScale.value = 1
Unittype.riseSpeed.value = .08
Unittype.rotateMoveFirst.value = false
Unittype.rotateSpeed.value = 5
Unittype.rotateToBuilding.value = true
Unittype.sample.value = null
Unittype.segmentMag.value = 2
Unittype.segments.value = 0
Unittype.segmentScl.value = 4 
Unittype.segmentPhase.value = 5
Unittype.segmentRotSpeed.value = 1
Unittype.segmentMaxRot.value = 30
Unittype.shadowElevation.value = -1
Unittype.shadowElevationScl.value = 1
Unittype.singleTarget.value = false
Unittype.speed.value = 1.1
Unittype.squareShape.value = false
Unittype.stepShake.value = -1
Unittype.strafePenalty.value = .5
Unittype.targetable.value = true
Unittype.targetAir.value = true
Unittype.targetFlags.value = "[null]"
Unittype.targetGround.value = true
Unittype.targetPriority.value = 0
Unittype.trailColor.value = null
Unittype.trailLength.value = 0
Unittype.trailScl.value = 1
Unittype.treadEffect.value = null 
Unittype.treadFrames.value = 18
Unittype.treadPullOffset.value = 0
Unittype.treadRects.value = "[]"
Unittype.type.value = ""
Unittype.useEngineElevation.value = true
Unittype.useUnitCap.value = true
Unittype.vulnerableWithPayloads.value = false 
Unittype.waveTrailX.value = 4
Unittype.waveTrailY.value = -4
Unittype.weapons.value = empty.Seq



/* category */
Unittype.abilities.category = [ json ]
Unittype.accel.category = [ json, movement ]
Unittype.aiController.category = []
Unittype.aimDst.category = [ json, shoot ]
Unittype.allowedInPayloads.category = [ json ]
Unittype.allowLegStep.category = [ json, ...legs ]
Unittype.alwaysCreateOutline.category = [ json, design ]
Unittype.alwaysShootWhenMoving.category = [ json, shoot ]
Unittype.ammoCapacity.category = [ json, shoot ]
Unittype.ammoType.category = [ json, shoot ]
Unittype.armor.category = [ json ]
Unittype.autoFindTarget.category = [ json, shoot ]
Unittype.baseLegStraightness.category = [ json, ...legs, design ]
Unittype.baseRotateSpeed.category = [ json, movement, design ]
Unittype.boostMultiplier.category = [ json, ground, boost ]
Unittype.bounded.category = [ json ]
Unittype.buildBeamOffset.category = [ json, ...build ]
Unittype.buildRange.category = [ json, ...build ]
Unittype.buildSpeed.category = [ json, ...build ]
Unittype.canAttack.category = [ json ]
Unittype.canBoost.category = [ json, ground, boost ]
Unittype.canDrown.category = [ json, ground ]
Unittype.canHeal.category = [ json, support ]
Unittype.circleTarget.category = [ json, flying ]
Unittype.clipSize.category = [ json ]
Unittype.commands.category = [ json ]
Unittype.constructor.category = []
Unittype.controller.category = []
Unittype.coreUnitDock.category = [ json ]
Unittype.crashDamageMultiplier.category = [ json, flying ]
Unittype.crawlSlowdown.category = [ json, ...crawl ]
Unittype.crawlSlowdownFrac.category = [ json, ...crawl ]
Unittype.createScorch.category = [ json ]
Unittype.createWreck.category = [ json, flying ]
Unittype.crushDamage.category = [ json, ...tank, crawl[ 1 ] ]
Unittype.deathExplosionEffect.category = [ json, design ]
Unittype.deathSound.category = [ json, design ]
Unittype.defaultCommand.category = [ json ]
Unittype.dpsEstimate.category = []
Unittype.drag.category = [ json, movement ]
Unittype.drawBody.category = [ json, design ]
Unittype.drawBuildBeam.category = [ json, ...build ]
Unittype.drawCell.category = [ json, design ]
Unittype.drawItems.category = [ json, design ]
Unittype.drawMinimap.category = [ json, design ]
Unittype.drawShields.category = [ json, design ]
Unittype.drownTimeMultiplier.category = [ json ]
Unittype.engineColor.category = [ json, design, flying, boost ]
Unittype.engineColorInner.category = [ json, design, flying, boost ] 
Unittype.engineLayer.category = [ json, design, flying, boost ] 
Unittype.engineOffset.category= [ json, design, flying, boost ] 
Unittype.engines.category = [ json, design, flying, boost ] 
Unittype.engineSize.category = [ json, design, flying, boost ] 
Unittype.envDisabled.category = [ json ]
Unittype.envEnabled.category = [ json ]
Unittype.envRequired.category = [ json ]
Unittype.faceTarget.category = [ json, shoot, design ]
Unittype.fallEffect.category = [ json, design, flying, boost ]
Unittype.fallEngineEffect.category = [ json, design, flying, boost ]
Unittype.fallSpeed.category = [ json, boost ]
Unittype.flipBackLegs.category = [ json, legs[1]  ]
Unittype.flipLegSide.category = [ json, legs[1]  ]
Unittype.flying.category = [ json, flying ]
Unittype.fogRadius.category = [ json ]
Unittype.forceMultiTarget.category = [ json, shoot ]
Unittype.groundLayer.category = [ json, design ]
Unittype.healColor.category = [ json, support, design ]
Unittype.healFlash.category = [ json, support, design ]
Unittype.health.category = [ json ]
Unittype.hidden.category = [ json ]
Unittype.hitSize.category = [ json ]
Unittype.hittable.category = [ json ]
Unittype.homingDelay.category = [ json, missile ]
Unittype.hoverable.category = [ json, "inteface" ]
Unittype.hovering.category = [ json, ...hover ]
Unittype.itemOffsetY.category = [ json, design ]
Unittype.isEnemy.category = [ json, support ]
Unittype.immunities.category = [ json ]
Unittype.internal.category = [ json ]
Unittype.itemCapacity.category = [ json ]
Unittype.killable.category = [ json ]
Unittype.legContinuousMove.category = [ json, legs[ 1 ] ]
Unittype.legCount.category = [ json, legs[ 1 ] ]
Unittype.legGroupSize.category = [ json, legs[ 1 ] ]
Unittype.legBaseOffset.category = [ json, legs[ 1 ], design ]
Unittype.legExtension.category = [ json, legs[ 1 ], design ]
Unittype.legForwardScl.category = [ json, legs[ 1 ], design ]
Unittype.legLength.category = [ json, legs[ 1 ], design ]
Unittype.legLengthScl.category = [ json, legs[ 1 ], design ]
Unittype.legMaxLength.category = [ json, legs[ 1 ], design ]
Unittype.legMinLength.category = [ json, legs[ 1 ], design ]
Unittype.legMoveSpace.category = [ json, legs[ 1 ], design ]
Unittype.legPairOffset.category = [ json, legs[ 1 ], design ]
Unittype.legPhysicsLayer.category = [ json, legs[ 1 ], design ]
Unittype.legSpeed.category = [ json, legs[ 1 ] ]
Unittype.legSplashDamage.category = [ json, legs[ 1 ] ]
Unittype.legSplashRange.category = [ json, legs[ 1 ] ]
Unittype.legStraightLength.category = [ json, legs[ 1 ], design ]
Unittype.legStraightness.category = [ json, legs[ 1 ], design ]
Unittype.lifetime.category = [ json, missile ]
Unittype.lightColor.category = [ json, design ]
Unittype.lightOpacity.category = [ json, design ]
Unittype.lightRadius.category = [ json, design ]
Unittype.lockLegBase.category = [ json, legs[1], design ]
Unittype.logicControllable.category = [ json ]
Unittype.loopSound.category = [ json ]
Unittype.loopSoundVolume.category = [ json ] 
Unittype.lowAltitude.category = [ json, design ]
Unittype.maxRange.category = [ json, shoot ]
Unittype.mechFrontSway.category = [ json, mech[1] ]
Unittype.mechLandShake.category = [ json, mech[1] ]
Unittype.mechLegColor.category = [ json, mech[1] ]
Unittype.mechSideSway.category = [ json, mech[1] ]
Unittype.mechStepParticles.category = [ json, mech[1] ]
Unittype.mechStride.category = [ json, mech[1] ]
Unittype.mineFloor.category = [ json, mine ]
Unittype.mineHardnessScaling.category = [ json, mine ] 
Unittype.mineItems.category = [ json, mine ] 
Unittype.mineRange.category = [ json, mine ] 
Unittype.mineSound.category = [ json, mine, design ] 
Unittype.mineSoundVolume.category = [ json, mine, design ]  
Unittype.mineSpeed.category = [ json, mine ] 
Unittype.mineTier.category = [ json, mine ] 
Unittype.mineWalls.category = [ json, mine ] 
Unittype.missileAccelTime.category = [ json, movement, missile ]
Unittype.naval.category = [ json, naval ]
Unittype.omniMovement.category = [ json, movement ]
Unittype.outlineColor.category = [ json, design ]
Unittype.outlineRadius.category = [ json, design ]
Unittype.outlines.category = [ json, design ]
Unittype.parts.category = [ json, design ]
Unittype.pathCost.category = []
Unittype.payloadCapacity.category = [ json ]
Unittype.pickupUnits.category = [ json ]
Unittype.playerControllable.category = [ json ]
Unittype.physics.category = [ json ]
Unittype.range.category = [ json, shoot ]
Unittype.researchCostMultiplier.category = [ json ]
Unittype.rippleScale.category = [ json, legs[1] ]
Unittype.riseSpeed.category = [ json, boost ]
Unittype.rotateMoveFirst.category = [ json, movement, design ]
Unittype.rotateSpeed.category = [ json, movement ]
Unittype.rotateToBuilding.category = [ json, build ]
Unittype.sample.category = []
Unittype.segmentMag.category = [ json, crawl, design ]
Unittype.segmentMaxRot.category = [ json, crawl, design ]
Unittype.segmentPhase.category = [ json, crawl, design ]
Unittype.segmentRotSpeed.category = [ json, crawl, design ]
Unittype.segments.category = [ json, crawl ]
Unittype.segmentScl.category = [ json, crawl, design ] 
Unittype.shadowElevation.category = [ json, ground, design ]
Unittype.shadowElevationScl.category = [ json, ground, design ]
Unittype.singleTarget.category = [ json, shoot ]
Unittype.speed.category = [ json, movement ]
Unittype.squareShape.category = [ json, design ]
Unittype.stepShake.category = [ json, ground, mech[1], legs[1], design ]
Unittype.strafePenalty.category = [ json, movement ]
Unittype.targetable.category = [ json ]
Unittype.targetAir.category = [ json, shoot ]
Unittype.targetFlags.category = [ json, shoot ]
Unittype.targetGround.category = [ json, shoot ]
Unittype.targetPriority.category = [ json, shoot ]
Unittype.trailColor.category = [ json, design, naval ]
Unittype.trailLength.category = [ json, design, naval ]
Unittype.trailScl.category = [ json, design, naval, boost, flying ]
Unittype.treadEffect.category = [ json, design, tank[1] ]
Unittype.treadFrames.category = [ json, design, tank[1] ]
Unittype.treadPullOffset.category = [ json, design, tank[1] ]
Unittype.treadRects.category = [ json, design, tank[1] ]
Unittype.type.category = [ json ]
Unittype.useEngineElevation.category = [ json, design, boost, flying ]
Unittype.useUnitCap.category = [ json ]
Unittype.vulnerableWithPayloads.category = [ json ] 
Unittype.waveTrailX.category = [ json, design, naval ]
Unittype.waveTrailY.category = [ json, design, naval ]
Unittype.weapons.category = [ json, shoot ]




export default Unittype