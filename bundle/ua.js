import list from "../bundle_general.js"

const newTable = (...content ) => `<table>${ content.join( "" ).toString() }</table>`
const newTHead = (...content ) => `<thead>${ content.join( "" ).toString() }</thead>`
const newTBody = (...content ) => `<tbody>${ content.join( "" ).toString() }</tbody>`
const newTH    = content => `<th>${ content }</th>`
const newTD    = content => `<td>${ content }</td>`

const newRowGen = func => ( ...values ) => {
  let content = ""
  values.forEach( value => { content += func( value ) } )
  return `<tr>${ content }</$tr>`
}
const newDesc = newRowGen( newTH ), newRow  = newRowGen( newTD )





const ua = Object.assign( {}, list )
  .abilities             .describe( "Масив зі здібностями (щит наприклад)." )
  .accel                 .describe( "Прискорення як частка від швидкості." )
  .aimDst                .describe( "Мінімальна дістанція, з якої може цілитись юніт ( для уникнення стрільби \"всередину\" юніта )." )
  .allowedInPayloads     .describe( "Чи може юніт переміщатись за допомогою вантажних конвеєрів." )
  .allowLegStep          .describe( "Чи може юніт-павук ходити поверх будівель." )
  .alwaysCreateOutline   .describe( "Чи буде отбводитись ходова база юніта. Зазвичай обводка відключається якщо я якоїсь зброї top = false." )
  .alwaysShootWhenMoving .describe( "Чи буде юніт постійно стріляти поки рухається незалежно від сповільнення." )
  .ammoCapacity          .describe( "Кількість снарядів, яку може мати юніт (якщо правило активне). 0 щоб визначити відносно швидкострільності зброї." )
  .ammoType              .describe( "Що використовує в якості снарядів юніт (якщо це правило активне)." )
  .armor                 .describe( "Отримані збитки будуть менші на цю величину." )
  .autoFindTarget        .describe( "Чи буде юніт в режимі командування самостійно цілитись та стріляти в ворожі цілі." )
  .baseRotateSpeed       .describe( "Швидкість повороту бази (тазу) меха. градус/с." )
  .boostMultiplier       .describe( "Збільшення швидкості в n разів під час прискорення." )
  .bounded               .describe( "Чи буде юніт відштовхуватися від країв карти." )
  .buildBeamOffset       .describe( "Візуальний відступ будівельного променю відносно переднього краю юніта." )
  .buildRange            .describe( "Дистанція для будування." )
  .buildSpeed            .describe( "Швидкість будування. Не будує якщо < 0." )
  .canAttack             .describe( "Чи будуть в юніта бойові гармати." )
  .canBoost              .describe( "Чи може наземний юніт взлітати під час керування гравцем/процесором." )
  .canDrown              .describe( "Чи може юніт втонути." )
  .circleTarget          .describe( "Чи буде літаючий юніт кружляти навколо цілі." )
  .clipSize              .describe( "Розмір обрубки графіки. < 0 для автоматичного обчислення." )
  .crashDamageMultiplier .describe( "Множник для збитку, який завдає цей літаючий юніт при падінні" )
  .createScorch          .describe( "Чи буде \"вигоряння\" (чорний слід) на місці падіння юніта." )
  .createWreck           .describe( "Чи буде падаючий \"труп\" юніта у випадку збиття." )
  .commands              .describe( "Які команди можна подавати юніту." )
  .coreUnitDocking       .describe( "Чи буде з'являтись юніт ядра над цим юнітом при припиненні контролю." )
  .drag                  .describe( "Опір руху у вигляді частки." )
  .deathExplosionEffect  .describe( "Ефект, який відображається коли юніт вибухає." )
  .deathSound            .describe( "Назва звукового файлу, який буде звучати у випадку вибуху юніта." )
  .defaultCommand        .describe( "Команда для юніта за замовчуванням." )
  .drawBody              .describe( "Чи буде візуально відображатися юніт." )
  .drawBuildBeam         .describe( "Чи буде відображуватися будівельний промінь між юнітом та будівлею." )
  .drawCell              .describe( "Чи відображати над юнітом індикатор команди." )
  .drawItems             .describe( "Чи відображати підняті юнітом ресурси." )
  .drawMinimap           .describe( "Чи відображатиметься юніт на мінімапі." )
  .drawShields           .describe( "Чи відображати щити юніта." )
  .drownTimeMultiplier   .describe( "Множник для часу перед затопленням юніта: чим більше число, тим довше тоне." )
  .engineColor           .describe( "Колір всіх двигунів юніта." )
  .engineLayer           .describe( "Шар для відображення двигуна. < 0 за замовчуванням." )

  
//     newRow( _float        , -1         , "engineLayer"             ,  ),
//     newRow( _float        , 5          , "engineOffset"            , "Змішення двигуна назад від центру юніта." ),
//     newRow( "UnitEngine[]", []         , "engines"                 , "Масив з двигунами(реактивними турбінами)." ),
//     newRow( _float        , 2.5        , "engineSize"              , "Основий радіус двигуна." ),
//     newRow( _float        , 0.018      , "fallSpeed"               , "Швидкість падіння наземного юніту після вимкнення режиму польоту." ),
//     newRow( _String       , "fallSmoke", "fallEffect"              , "Назва ефекту, який буде відображатись біля юніта під час падіння." ),
//     newRow( _String       , "fallSmoke", "fallEngineEffect"        , "Назва ефекту, який буде відображатись біля двигуна юніта під час падіння." ),
//     newRow( _boolean      , _true      , "faceTarget"              , "Чи повертатиметься корпус юніта в сторону ворога під час прицілювання/стрільби." ),
//     newRow( _boolean      , _false     , "flying"                  , "Чи є юніт авіацією." ),
//     newRow( _float        , -1         , "fogRadius"               , "Радіус огляду в тумані в блоках. < 0 за замовчуванням." ),
//     newRow( _boolean      , _false     , "forceMultiTarget"        , "Чи може юніт цілитись гарматами в різні цілі (гармата з параметром mirror теж)."),
//     newRow( _float        , 60         , "groundLayer"             , "Шар, на якому відображається юніт. Чим більше число, тим \"вище\" юніт." ),
//     newRow( _String       , "98ffa9"   , "healColor"               , "Яким кольором буде блимати юніт під час \"лікування\"." ),
//     newRow( _boolean      , _true      , "healFlash"               , "Чт буде югіт блтмати під час \"лікування\"." ),
//     newRow( _float        , 200        , "health"                  , "Здоров'я юніту." ),
//     newRow( _boolean      , _false     , "hidden"                  , "Чи буде приховано юніт від бази даних." ),
//     newRow( _boolean      , _true      , "hittable"                , "Чи можуть юніта пробити кулі та вибухи." ),
//     newRow( _float        , 6          , "hitSize"                 , "Розмір сторони квадратного хітбоксу." ),
//     newRow( _boolean      , _false     , "hovering"                , "Чи може наземний юніт літати над рідинами." ),
//     newRow( _boolean      , _true      , "hoverable"               , "Чи будуть відображатись дані про юніта при наведенні: здоров'я, щит тощо." ),
//     newRow( _String       , "white"    , "innerEngineColor"        , "Колір внутрішнього кола двигуна." ),
//     newRow( _boolean      , _false     , "internal"                , "Чи призначений юніт для внітрішнього користування та не має згенерованого спрайту." ),
//     newRow( _boolean      , _true      , "isEnemy"                 , "Чи буде вважатись юніт за бойову одиницю і потрапляти в лічильник ворогів в хвилі."),
//     newRow( _int          , -1         , "itemCapacity"            , "Кількість ресурсу, яку може переносити юніт. < 0 задля того щоб вирахувати відносно розміру хітбокса." ),
//     newRow( _float        , 3          , "itemOffsetY"             , "Візуальний відступ підібраних ресурсів назад." ),
//     newRow( _String+"[]"  , []         , "immunities"              , "Масив з назвами ефектів, що будуть ігноруватися юнітом." ),
//     newRow( _boolean      , _true      , "killable"                , "Чи є юніт смертним." ),
//     newRow( _boolean      , _true      , "legPhysicsLayer"         , "Чи буде юніт-павук взаємодіяти на окремому рівні висоти: інакше він взаємодіє на рівні groundLayer." ),
//     newRow( _String       , "fbd367"   , "lightColor"              , "Колір світла, який випромінює юніт при відсутності світла." ),
//     newRow( _float        , 0.6        , "lightOpacity"            , "Прозорість випромінюваного світла." ),
//     newRow( _float        , -1         , "lightRadius"             , "Радіус випромінюваного світла. Для значення за замовчуванням < 0." ),
//     newRow( _boolean      , _true      , "logicControllable"       , "Чи можна керувати юнітом за допомогою процесора." ),
//     newRow( _String       , "none"     , "loopSound"               , "Який звук буде постійно лунати біля юніта." ),
//     newRow( _float        , 0.5        , "loopSoundVolume"         , "Гучність звуку, що лунає від юніта." ),
//     newRow( _boolean      , _false     , "lowAltitude"             , "Чи буде юніт відображатись на висоті, нижче ніж снаряди чи ефекти. Лише візуальний параметр." ),
//     newRow( _float        , -1         , "maxRange"                , "Максимальний діапазон гармат." ),
//     newRow( _boolean      , _true      , "mineFloor"               , "Чи може юніт добувати руду на рівні підлоги." ),
//     newRow( _boolean      , _true      , "mineHardnessScaling"     , "---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------" ),
//     newRow( _float        , 70         , "mineRange"               , "Радіус для добування ресурсів." ),
//     newRow( _float        , 1          , "mineSpeed"               , "Швидкість видобутку руд." ),
//     newRow( _int          , -1         , "mineTier"                , "Руду якої твердості може копати юніт. < 0 щоб не було змоги." ),
//     newRow( _boolean      , _false     , "mineWalls"               , "Чи може юніт добувати руди зі стін." ),
//     newRow( _float        , 0          , "missileAccelTime"        , "Кількість ігрових тіків, впродовж яких цей юніт-ракета досягне максимальноъ швидкості руху." ),
//     newRow( _boolean      , _false     , "naval"                   , "Чи є юнітом-кораблем." ),
//     newRow( _boolean      , _true      , "omniMovement"            , "Чи може юніт змінювати напрямок руху без повороту корпусу." ),
//     newRow( _String       , "6e7080"   , "outlineColor"            , "Колір обводки, що генерується навколо спрайтів." ),
//     newRow( _int          , 3          , "outlineRadius"           , "Ширина обводки спрайтів юніта." ),
//     newRow( _boolean      , _true      , "outlines"                , "Чи треба генерувати обводку деталей юніта." ),
//     newRow( "DrawPart[]"  , "[]"       , "parts"                   , "Додаткові (в основному анімовані) візуальні деталі юніта."),
//     newRow( _float        , 8          , "payloadCapacity"         , "Як багато блоків/юнітів юніт може підібрати (в блоках<sup>2</sup>)." ),
//     newRow( _boolean      , _true      , "physics"                 , "Чи буде юніт штовхатись з іншими юнітами." ),
//     newRow( _boolean      , _true      , "pickupUnits"             , "Чи може цей юніт переносити предмети/юнітів." ),
//     newRow( _boolean      , _true      , "playerControllable"      , "Чи може гравець власноруч контролювати юніта." ),
//     newRow( _float        , -1         , "range"                   , "Мінімальний діапазон, з якого починає вести стрільбу зброя. Можна змінювати за значення > 0." ),
//     newRow( _float        , 50         , "researchCostMultiplier"  , "Множник вартості дослідження в дереві технологій." ),
//     newRow( _float        , 1          , "rippleScale"             , "Розмір бризг/хмар пилу від кожного кроку." ),
//     newRow( _float        , 0.08       , "riseSpeed"               , "Ріст швидкості під час взлету у вигляді частки." ),
//     newRow( _boolean      , _false     , "rotateMoveFirst"         , "Чи буде юніт спершу розвертатись, а потім починати рух." ),
//     newRow( _float        , 5          , "rotateSpeed"             , "Швидкість повороту корпусу в градусах/с." ),
//     newRow( _boolean      , _true      , "rotateToBuilding"        , "Чи повертається юніт передом до будівлі, яку будує." ),
//     newRow( _float        , -1         , "shadowElevation"         , "Висота тіні наземного юніта. Візуальна характеристика." ),
//     newRow( _float        , 1          , "shadowElevationScl"      , "Масштабування висоти тіні юніта." ) ,
//     newRow( _boolean      , _false     , "singleTarget"            , "Чи будуть всі гармати юніта цілитись в одну ціль." ),
//     newRow( _float        , 1.1        , "speed"                   , "Швидкість юніта в блоках/с." ),
//     newRow( _float        , -1         , "stepShake"               , "Тряска від кожного кроку павука/меха." ),
//     newRow( _float        , 0.5        , "strafePenalty"           , "Штраф для швидкості юніта у вигляді частки, якщо він змінив напрямок руху на притилежний." ),
//     newRow( _boolean      , _false     , "squareShape"             , "Чи буде юніт мати квадратну тінь." ),
//     newRow( _boolean      , _true      , "targetable"              , "Чи будуть вороги цілитись в юніта." ),
//     newRow( _boolean      , _true      , "targetAir"               , "Чи може юніт стріляти по авіації." ),
//     newRow( _String+"[]"  , "[]"       , "targetFlags"             , "Список типів будівель, які є пріорітетними для цього юніта."),
//     newRow( _boolean      , _false     , "targetGround"            , "Чи може юніт стріляти по наземним цілям." ),
//     newRow( _float        , 0          , "targetPriority"          , "(WIP) Юніти нижчого пріоритету будуть ігноруватись за наявності юнітів з більшим пріорітетом, не зважаючи на відстань." ),
//     newRow( _String       , "unknown"  , "trailColor"              , "Колір сліду від двигуна." ),
//     newRow( _int          , 0          , "trailLength"             , "Довжина сліду двигуна (авіація) або бризг (флот)."),
//     newRow( _float        , 1          , "trailScale"              , "Масштаб всіх слідів (працює і з морськими юнітами). "),
//     newRow( _String       , "unknown"  , "type"                , 
//       newTable(
//         newTHead( newDesc( "Значення", "Опис" ) ),
//         newTBody(
//           newRow( "legs", "Юніт-павук." ),
//           newRow( "mech", "Юніт-мех." ),
//           newRow( "missile", "Юніт-ракета." )
//         )
//       )
//     ),
//     newRow( _boolean   , _false    , "useEngineElevation"     , "Чи будуть двигуни відображатися різного розміру, залежно від висоти." ),
//     newRow( _boolean   , _true     , "useUnitCap"             , "Чи буде обмежено кількість юнітів цього типу." ),
//     newRow( _boolean   , _false    , "vulnerableWithPayloads" , "if true, this unit can be hit/targeted when it has payloads (assuming hittable/targetable is false)" ),
//     newRow( _float     , 4         , "waveTrailX"             , "Горизонтальний відступ водяного сліду водного юніта." ),
//     newRow( _float     , -3        , "waveTrailY"             , "Вертикальний відступ водяного сліду водного юніта." ),
//     newRow( "Weapon[]" , "[]"      , "weapons"                , "Масив з об'єктами з параметрами для гармат (Таблиця Weapons)." )
//   ) 
// )



export default ua