import { BulletType, Bullets, BulletsParam, Color, DrawPart, Effect, ShootPattern, Sound, StatusEffect, WeaponMount, boolean, float, int, Func, Seq, FxParam, SoundsParam, empty, StatusEffectsParam } from "../bundle/general__vars.js"
import { Info } from "./UnitType.js"

const Weapon = { _name: 'Weapon' }

const names = [
  'aiControllable',
  'alternate',
  'alwaysContinuous',
  'alwaysShooting',
  'autoTarget',
  'baseRotation',
  'bullet',
  'chargeSound',
  'continuous',
  'controllable',
  'cooldownTime',
  'display',
  'ejectEffect',
  'flipSprite',
  'heatColor',
  'ignoreRotation',
  'inaccuracy',
  'layerOffset',
  'linearWarmup',
  'minShootVelocity',
  'minWarmup',
  'mirror',
  'mountType',
  'name',
  'noAmmoSound',
  'noAttack',
  'otherSide',
  'parentizeEffects',
  'parts',
  'predictTarget',
  'recoil',
  'recoilPow',
  'recoils',
  'recoilTime',
  'reload',
  'rotate',
  'rotateSpeed',
  'rotationLimit',
  "shadow",
  'shake',
  "shoot",
  'shootCone',
  'shootOnDeath',
  'shootSound',
  'shootStatus',
  'shootStatusDuration',
  'shootWarmupSpeed',
  'shootX',
  'shootY',
  'showStatSprite',
  'smoothReloadSpeed',
  'soundPitchMax',
  'soundPitchMin',
  'targetInterval',
  'targetSwitchInterval',
  'top',
  'useAmmo',
  'useAttackRange',
  "velocityRnd",
  'x',
  'xRand',
  'y'
].forEach( name => Weapon[ name ] = new Info() )



//type
Weapon.aiControllable.type = boolean
Weapon.alternate.type = boolean
Weapon.alwaysContinuous.type = boolean
Weapon.alwaysShooting.type = boolean
Weapon.autoTarget.type = boolean
Weapon.baseRotation.type = float
Weapon.bullet.type = BulletType
Weapon.chargeSound.type = Sound
Weapon.continuous.type = boolean
Weapon.controllable.type = boolean
Weapon.cooldownTime.type = float
Weapon.display.type = boolean
Weapon.ejectEffect.type = Effect
Weapon.flipSprite.type = boolean
Weapon.heatColor.type = Color
Weapon.ignoreRotation.type = boolean
Weapon.inaccuracy.type = float
Weapon.layerOffset.type = float
Weapon.linearWarmup.type = boolean
Weapon.minShootVelocity.type = float
Weapon.minWarmup.type = float
Weapon.mirror.type = boolean
Weapon.mountType.type = Func( "Weapon , "+WeaponMount )
Weapon.name.type = "String"
Weapon.noAmmoSound.type = Sound
Weapon.noAttack.type = boolean
Weapon.otherSide.type = int
Weapon.parentizeEffects.type = boolean
Weapon.parts.type = Seq(DrawPart)
Weapon.predictTarget.type = boolean
Weapon.recoil.type =
Weapon.recoilPow.type =
Weapon.recoils.type = 
Weapon.recoilTime.type = float
Weapon.reload.type = float
Weapon.rotate.type = boolean
Weapon.rotateSpeed.type = float
Weapon.rotationLimit.type = float
Weapon.shadow.type = float
Weapon.shake.type = float 
Weapon.shoot.type = ShootPattern
Weapon.shootCone.type = float
Weapon.shootOnDeath.type = boolean
Weapon.shootSound.type = Sound
Weapon.shootStatus.type = StatusEffect
Weapon.shootStatusDuration.type = float
Weapon.shootWarmupSpeed.type = 
Weapon.shootX.type = 
Weapon.shootY.type = float
Weapon.showStatSprite.type = boolean
Weapon.smoothReloadSpeed.type =
Weapon.soundPitchMax.type =
Weapon.soundPitchMin.type =
Weapon.targetInterval.type =
Weapon.targetSwitchInterval.type = float
Weapon.top.type = 
Weapon.useAmmo.type =
Weapon.useAttackRange.type = boolean
Weapon.velocityRnd.type =
Weapon.x.type =
Weapon.xRand.type =
Weapon.y.type = float



//value
Weapon.aiControllable.value = 
Weapon.alternate.value = true
Weapon.alwaysContinuous.value = 
Weapon.alwaysShooting.value =
Weapon.autoTarget.value = false
Weapon.baseRotation.value = 0
Weapon.bullet.value = BulletsParam( "placeholder" )
Weapon.chargeSound.value = Sound
Weapon.continuous.value = false
Weapon.controllable.value = true
Weapon.cooldownTime.value = 20
Weapon.display.value = true
Weapon.ejectEffect.value = FxParam( "none" )
Weapon.flipSprite.value = false
Weapon.heatColor.value = "Pal.turretHeat"
Weapon.ignoreRotation.value = false
Weapon.inaccuracy.value = 
Weapon.layerOffset.value = 0
Weapon.linearWarmup.value = false
Weapon.minShootVelocity.value = -1
Weapon.minWarmup.value = 0
Weapon.mirror.value = true
Weapon.mountType.value = WeaponMount+"::new"
Weapon.name.value = ""
Weapon.noAmmoSound.value = SoundsParam( "noammo" )
Weapon.noAttack.value = false
Weapon.otherSide.value = -1
Weapon.parentizeEffects.value = false
Weapon.parts.value = empty.Seq
Weapon.predictTarget.value = true
Weapon.recoil.value = 1.5
Weapon.recoilPow.value = 1.8
Weapon.recoils.value = -1
Weapon.recoilTime.value = 20
Weapon.reload.value = 1
Weapon.rotate.value = false
Weapon.rotateSpeed.value = 20
Weapon.rotationLimit.value = 361
Weapon.shadow.value = -1
Weapon.shake.value = 0 
Weapon.shoot.value = ShootPattern+"()"
Weapon.shootCone.value = 5
Weapon.shootOnDeath.value = false
Weapon.shootSound.value = SoundsParam( "pew" )
Weapon.shootStatus.value = StatusEffectsParam( "none" )
Weapon.shootStatusDuration.value = 300
Weapon.shootWarmupSpeed.value = .1
Weapon.shootX.value = 0
Weapon.shootY.value = 3
Weapon.showStatSprite.value = true
Weapon.smoothReloadSpeed.value = .15
Weapon.soundPitchMax.value = .8
Weapon.soundPitchMin.value = 1
Weapon.targetInterval.value = 40
Weapon.targetSwitchInterval.value = 70
Weapon.top.value =
Weapon.useAmmo.value =
Weapon.useAttackRange.value = true
Weapon.velocityRnd.value =
Weapon.x.value = 
Weapon.xRand.value = 0
Weapon.y.value = 4





export default Weapon