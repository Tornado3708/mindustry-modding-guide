const addClass = addClass => value => `<span class=${ addClass }>${ value }</span>`
const addAttr = addClass( "attrName" )
const addValue = addClass( "value" )
const addLi = string => `<li>${ string }</li>`

const ua = 
  "Unit <br>" + 
  "<ul>"      +
    addLi( addAttr( "abilities" ) + " - масив ... ") +
    addLi( addAttr( "accel" ) + " - прискорення як частка від швидкості." ) +
    addLi( addAttr( "aimDst" ) + " - мінімальна діистанція, з якої починає стріляти юніт (для уникнення стрільби \"всередину\" юніта.") +
    addLi( addAttr( "armor" ) + " - броня юніту." ) +
    addLi( addAttr( "baseRotateSpeed" ) + " - швидкість повороту бази меха градус/с." ) +
    addLi( addAttr( "boostMultiplier" ) + " - збільшення швидкості в n разів під час прискорення." ) +
    addLi( addAttr( "buildBeamOffset" ) + " - візуальний відступ будівельного променю від переду юніта." ) +
    addLi( addAttr( "buildRange" ) + " - дистанція для будування." ) +
    addLi( addAttr( "buildSpeed" ) + " - швидкість будування. Не будує якщо < 0." ) +
    addLi( addAttr( "clipSize" ) + " - ......................................................................................................" ) + 
    addLi( addAttr( "crashDamageMultiplier" ) + " - збиток, який завдає цей літаючий юніт, якщо впаде на ворожі предмети." ) +
    addLi( addAttr( "drag" ) + " - опір руху у вигляді частки." ) + 
    addLi( addAttr( "drownTimeMultiplier" ) + " - множник для часу втоплення юніту: чим більше число, тим повільніше тоне." ) + 
    addLi( addAttr( "engineLayer" ) + " - шар для відображення двигуна. < 0 за замовчуванням." ) +
    addLi( addAttr( "engineOffset" ) + " - зміщення двигуна назад від центру юніта." ) + 
    addLi( addAttr( "engineSize" ) + " - основний радіус двигуна" ) + 
    addLi( addAttr( "fallSpeed" ) + " - наскільки швидко падає юніт після вимкнення прискорення." ) +
    addLi( addAttr( "fogRadius" ) + " - радіус туману. < 0 щоб був зв замовчуванням.") +
    addLi( addAttr( "groundLayer" ) + " - шар відображення юніту: якщо малюється раніше, то він \"під\" юнітами та навпаки." ) + 
    addLi( addAttr( "health" ) + " - здоров'я юніту." ) + 
    addLi( addAttr( "hitSize" ) + " - розмір сторони квадратного хіт-боксу." ) +
    addLi( addAttr( "itemOffsetY" ) + " - візуальний відступ предметів назад.") + 
    addLi( addAttr( "lightColorOpacity") + " - прозорість випромінюваного світла." ) + 
    addLi( addAttr( "lightRadius" ) + " - радіус випромінюваного світла. < 0 за замовчуванням." ) + 
    addLi( addAttr( "maxRange" ) + " - максимальний радіус зброї." ) + 
    addLi( addAttr( "mineRange" ) + " - радіус добування ресурсів." ) +
    addLi( addAttr( "missileAccelTime" ) + " - кількість тіків, впродовж яких ракета-юніт розганяється до максимальної швидкості." ) +
    addLi( addAttr( "payloadCapacity" ) + "......................................................................................................" ) +
    addLi( addAttr( "range" ) + " - мінімальний радіус зброї." ) +
    addLi( addAttr( "researchCostMultiplier" ) + " - множник вартості дослідження в дереві технологій." ) +
    addLi( addAttr( "rippleScale" ) + " - розмір бризг/хмар пилу від кожного кроку." ) +
    addLi( addAttr( "riseSpeed" ) + " - ріст швидкості прискорення як частки." ) +
    addLi( addAttr( "rotateSpeed" ) + " - швидкість повороту корпусу градус/с." ) + 
    addLi( addAttr( "shadowElevation" ) + " - візуальна висота тіні (наземного) юніту." ) +
    addLi( addAttr( "shadowElevationScl" ) + " - масштаб довжини тіні під юнітом." ) +
    addLi( addAttr( "speed" ) + " - швидкість юніту блок/с." ) +
    addLi( addAttr( "stepShake" ) + " - тряска від кроку павука/меха." ) + 
    addLi( addAttr( "strafePenalty" ) + " - штраф для швидкості юніта у випадку початку напрямку руху в протилежний бік." ) + 
    addLi( addAttr( "targetPriority" ) + " - (недопрацьовано) юніти нижчого пріорітету будуть проігноровані при наявності юнітів з вищим пріорітетом, незалежно від відстані." ) +
    `<li>${ addAttr( "type" ) } - тип юніту.
      <ul>
        <li> ${ addValue( "legs" ) } - юніт типу павук.</li>
        <li> ${ addValue( "mech" ) } - юніт типу мех.</li>
      </ul>
    </li>` +
    addLi( addAttr( "waveTrailX" ) + "\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ toDo")

export default ua