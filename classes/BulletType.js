import { Color, DrawPart, Effect, Seq, Sound, StatusEffect, boolean, float, int, UnitType, Liquid } from "../bundle/general__vars.js";
import { Info } from "./UnitType.js";

const BulletType = { _name: "BulletType" }


const names = [
  'absorbable',
  'ammoMultiplier',
  'backMove',
  'buildingDamageMultiplier',
  'bulletInterval',
  'chargeEffect',
  'collidesAir',
  'collideFloor',
  'collideTerrain',
  'collides',
  'collidesTeam',
  'collidesTiles',
  'collidesGround',
  'damage',
  'despawn',
  'despawnEffect',
  'despawnHit',
  'despawnShake',
  'despawnSound',
  'despawnUnit',
  'despawnUnitCount',
  'despawnUnitRadius',
  'displayAmmoMultiplier',
  'drag',
  'drawSize',
  'fragAngle',
  'fragBullet',
  'fragBullets',
  'fragLifeMax',
  'fragLifeMin',
  'fragOnAbsorb',
  'fragOnHit',
  'fragRandomSpread',
  'fragSpread',
  'fragVelocityMax',
  'fragVelocityMin',
  'heal',
  'healAmount',
  'healColor',
  'healEffect',
  'healPercent',
  'hit',
  'hitColor',
  'hitEffect',
  'hitSize',
  'hitShake',
  'hittable',
  'hitSound',
  'hitSoundPitch',
  'hitSoundVolume',
  'homingDelay',
  'homingPower',
  'homingRange',
  'impact',
  'inaccuracy',
  'incendAmount',
  'incendChance',
  'incendSpread',
  'instantDisappear',
  'intervalAngle',
  'intervalBullet',
  'intervalBullets',
  'intervalDelay',
  'intervalRandomSpread',
  'intervalSpread',
  'keepVelocity',
  'killShooter',
  'knockback',
  'layer',
  'laserAbsorb',
  'lifetime',
  'light',
  'lightColor',
  'lightOpacity',
  'lightning',
  'lightRadius',
  'lightningAngle',
  'lightningColor',
  'lightningCone',
  'lightningDamage',
  'lightningLength',
  'lightningLengthRand',
  'lightningType',
  'makeFire',
  'maxRange',
  'optimalLifeFract',
  'parts',
  'pierce',
  'pierceArmor',
  'pierceBuilding',
  'pierceCap',
  'pierceDamageFactor',
  'puddles',
  'puddleAmount',
  'puddleLiquid',
  'puddleRange',
  'range',
  'rangeChange',
  'rangeOverride',
  'recoil',
  'reflectable',
  'reloadMultiplier',
  'removeAfterPierce',
  'scaleLife',
  'scaledSplashDamage',
  'setDefaults',
  'shootEffect',
  'smokeEffect',
  'spawnBullets',
  'spawnUnit',
  'speed',
  'splashDamageRadius',
  'splashDamagePierce',
  'splashDamage',
  'status',
  'statusDuration',
  'suppressionRange',
  'suppressionDuration',
  'suppressionEffectChance',
  'trail',
  'trailChance',
  'trailColor',
  'trailEffect',
  'trailInterval',
  'trailInterp',
  'trailLength',
  'trailParam',
  'trailRotation',
  'trailSinMag',
  'trailSinScl',
  'trailWidth',
  'weaveMag',
  'weaveRandom',
  'weaveScale',

].forEach( val => BulletType[val] = new Info( val ) )



//type
BulletType.absorbable.type = boolean
BulletType.ammoMultiplier.type = float
BulletType.backMove.type = boolean
BulletType.buildingDamageMultiplier.type = float
BulletType.bulletInterval.type = float
BulletType.chargeEffect.type = Effect
BulletType.collides.type = boolean
BulletType.collidesAir.type = boolean
BulletType.collideFloor.type = boolean
BulletType.collidesGround.type = boolean
BulletType.collidesTeam.type = boolean
BulletType.collideTerrain.type = boolean
BulletType.collidesTiles.type = boolean
BulletType.damage.type = float
BulletType.despawnEffect.type = Effect
BulletType.despawnHit.type = boolean
BulletType.despawnUnit.type = UnitType
BulletType.despawnUnitCount.type = int
BulletType.despawnUnitRadius.type = float
BulletType.despawnShake.type = float
BulletType.despawnSound.type = Sound
BulletType.displayAmmoMultiplier.type = boolean
BulletType.drag.type = float
BulletType.drawSize.type = float
BulletType.fragOnAbsorb.type = boolean
BulletType.fragAngle.type = float
BulletType.fragBullet.type = BulletType
BulletType.fragBullets.type = int
BulletType.fragLifeMax.type = float
BulletType.fragLifeMin.type = float
BulletType.fragOnHit.type = boolean
BulletType.fragRandomSpread.type = float
BulletType.fragSpread.type = float
BulletType.fragVelocityMax.type = float
BulletType.fragVelocityMin.type = float
BulletType.healAmount.type = float
BulletType.healColor.type = Color
BulletType.healEffect.type = Effect
BulletType.healPercent.type = float
BulletType.hitColor.type = Color
BulletType.hitEffect.type = Effect
BulletType.hitShake.type = float
BulletType.hitSize.type = float
BulletType.hitSound.type = Sound
BulletType.hitSoundPitch.type = float
BulletType.hitSoundVolume.type = float
BulletType.hittable.type = boolean
BulletType.homingDelay.type = float
BulletType.homingPower.type = float
BulletType.homingRange.type = float
BulletType.impact.type = boolean
BulletType.inaccuracy.type = float
BulletType.incendAmount.type = int
BulletType.incendSpread.type = float
BulletType.incendChance.type = float
BulletType.instantDisappear.type = boolean
BulletType.intervalAngle.type = float
BulletType.intervalBullet.type = "BulletType"
BulletType.intervalBullets.type = int
BulletType.intervalDelay.type = float
BulletType.intervalRandomSpread.type = float
BulletType.intervalSpread.type = float
BulletType.keepVelocity.type = boolean
BulletType.killShooter.type = boolean
BulletType.knockback.type = float
BulletType.laserAbsorb.type = boolean
BulletType.layer.type = float
BulletType.lifetime.type = float
BulletType.lightColor.type = "Pal.powerLight"
BulletType.lightning.type = int
BulletType.lightningAngle.type = float
BulletType.lightningColor.type = "Pal.surge"
BulletType.lightningLength.type = int
BulletType.lightningLengthRand.type = int
BulletType.lightningDamage.type = float
BulletType.lightningCone.type = float
BulletType.lightningType.type = BulletType;
BulletType.lightOpacity.type = float
BulletType.lightRadius.type = float
BulletType.makeFire.type = boolean
BulletType.maxRange.type = float
BulletType.speed.type = float
BulletType.optimalLifeFract.type = float
BulletType.parts.type = Seq( DrawPart )
BulletType.pierce.type = boolean
BulletType.pierceArmor.type = boolean
BulletType.pierceBuilding.type = boolean
BulletType.pierceCap.type = int
BulletType.pierceDamageFactor.type = float
BulletType.puddleAmount.type = float
BulletType.puddleLiquid.type = Liquid
BulletType.puddles.type = int
BulletType.puddleRange.type = float
BulletType.range.type = float
BulletType.rangeChange.type = float
BulletType.rangeOverride.type = float
BulletType.recoil.type = float
BulletType.reflectable.type = boolean
BulletType.reloadMultiplier.type = float
BulletType.removeAfterPierce.type = boolean
BulletType.scaleLife.type = boolean
BulletType.scaledSplashDamage.type = boolean
BulletType.setDefaults.type = boolean
BulletType.shootEffect.type = Effect
BulletType.smokeEffect.type = Effect
BulletType.splashDamage.type = float
BulletType.spawnBullets.type = Seq("BulletType")
BulletType.spawnUnit.type = UnitType
BulletType.status.type = StatusEffect
BulletType.statusDuration.type = float
BulletType.trailChance.type = float
BulletType.trailColor.type = Color
BulletType.trailEffect.type = Effect
BulletType.trailInterp.type = "Interp"
BulletType.trailInterval.type = float
BulletType.trailLength.type = int
BulletType.trailParam.type =  float
BulletType.trailRotation.type = boolean
BulletType.trailSinMag.type = float
BulletType.trailSinScl.type = float
BulletType.trailWidth.type = float
BulletType.splashDamageRadius.type = float
BulletType.splashDamagePierce.type = boolean
BulletType.suppressionRange.type = float
BulletType.suppressionDuration.type = float
BulletType.suppressionEffectChance.type = float
BulletType.weaveScale.type = float
BulletType.weaveMag.type = float
BulletType.weaveRandom.type = boolean





//value
BulletType.absorbable.value = boolean
BulletType.ammoMultiplier.value = float
BulletType.backMove.value = boolean
BulletType.buildingDamageMultiplier.value = float
BulletType.bulletInterval.value = float
BulletType.chargeEffect.value = Effect
BulletType.collides.value = boolean
BulletType.collidesAir.value = boolean
BulletType.collideFloor.value = boolean
BulletType.collidesGround.value = boolean
BulletType.collidesTeam.value = boolean
BulletType.collideTerrain.value = boolean
BulletType.collidesTiles.value = boolean
BulletType.damage.value = float
BulletType.despawnEffect.value = Effect
BulletType.despawnHit.value = boolean
BulletType.despawnUnit.value = UnitType
BulletType.despawnUnitCount.value = int
BulletType.despawnUnitRadius.value = float
BulletType.despawnShake.value = float
BulletType.despawnSound.value = Sound
BulletType.displayAmmoMultiplier.value = boolean
BulletType.drag.value = float
BulletType.drawSize.value = float
BulletType.fragOnAbsorb.value = boolean
BulletType.fragAngle.value = float
BulletType.fragBullet.value = 'BulletType'
BulletType.fragBullets.value = int
BulletType.fragLifeMax.value = float
BulletType.fragLifeMin.value = float
BulletType.fragOnHit.value = boolean
BulletType.fragRandomSpread.value = float
BulletType.fragSpread.value = float
BulletType.fragVelocityMax.value = float
BulletType.fragVelocityMin.value = float
BulletType.healAmount.value = float
BulletType.healColor.value = Color
BulletType.healEffect.value = Effect
BulletType.healPercent.value = float
BulletType.hitColor.value = Color
BulletType.hitEffect.value = Effect
BulletType.hitShake.value = float
BulletType.hitSize.value = float
BulletType.hitSound.value = Sound
BulletType.hitSoundPitch.value = float
BulletType.hitSoundVolume.value = float
BulletType.hittable.value = boolean
BulletType.homingDelay.value = float
BulletType.homingPower.value = float
BulletType.homingRange.value = float
BulletType.impact.value = boolean
BulletType.inaccuracy.value = float
BulletType.incendAmount.value = int
BulletType.incendSpread.value = float
BulletType.incendChance.value = float
BulletType.instantDisappear.value = boolean
BulletType.intervalAngle.value = float
BulletType.intervalBullet.value = "BulletType"
BulletType.intervalBullets.value = int
BulletType.intervalDelay.value = float
BulletType.intervalRandomSpread.value = float
BulletType.intervalSpread.value = float
BulletType.keepVelocity.value = boolean
BulletType.killShooter.value = boolean
BulletType.knockback.value = float
BulletType.laserAbsorb.value = boolean
BulletType.layer.value = float
BulletType.lifetime.value = float
BulletType.lightColor.value = "Pal.powerLight"
BulletType.lightning.value = int
BulletType.lightningAngle.value = float
BulletType.lightningColor.value = "Pal.surge"
BulletType.lightningLength.value = int
BulletType.lightningLengthRand.value = int
BulletType.lightningDamage.value = float
BulletType.lightningCone.value = float
BulletType.lightningType.value = 'BulletType';
BulletType.lightOpacity.value = float
BulletType.lightRadius.value = float
BulletType.makeFire.value = boolean
BulletType.maxRange.value = float
BulletType.speed.value = float
BulletType.optimalLifeFract.value = float
BulletType.parts.value = Seq( DrawPart )
BulletType.pierce.value = boolean
BulletType.pierceArmor.value = boolean
BulletType.pierceBuilding.value = boolean
BulletType.pierceCap.value = int
BulletType.pierceDamageFactor.value = float
BulletType.puddleAmount.value = float
BulletType.puddleLiquid.value = Liquid
BulletType.puddles.value = int
BulletType.puddleRange.value = float
BulletType.range.value = float
BulletType.rangeChange.value = float
BulletType.rangeOverride.value = float
BulletType.recoil.value = float
BulletType.reflectable.value = boolean
BulletType.reloadMultiplier.value = float
BulletType.removeAfterPierce.value = boolean
BulletType.scaleLife.value = boolean
BulletType.scaledSplashDamage.value = boolean
BulletType.setDefaults.value = boolean
BulletType.shootEffect.value = Effect
BulletType.smokeEffect.value = Effect
BulletType.splashDamage.value = float
BulletType.spawnBullets.value = Seq("BulletType")
BulletType.spawnUnit.value = UnitType
BulletType.status.value = StatusEffect
BulletType.statusDuration.value = float
BulletType.trailChance.value = float
BulletType.trailColor.value = Color
BulletType.trailEffect.value = Effect
BulletType.trailInterp.value = "Interp"
BulletType.trailInterval.value = float
BulletType.trailLength.value = int
BulletType.trailParam.value =  float
BulletType.trailRotation.value = boolean
BulletType.trailSinMag.value = float
BulletType.trailSinScl.value = float
BulletType.trailWidth.value = float
BulletType.splashDamageRadius.value = float
BulletType.splashDamagePierce.value = boolean
BulletType.suppressionRange.value = float
BulletType.suppressionDuration.value = float
BulletType.suppressionEffectChance.value = float
BulletType.weaveScale.value = float
BulletType.weaveMag.value = float
BulletType.weaveRandom.value = boolean