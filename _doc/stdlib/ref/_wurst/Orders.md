---
title: Orders
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/assets/Orders.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/assets/Orders.wurst)**

## Classes

### SpecialOrders

```wurst
public class SpecialOrders
```

Class that contains every known order in game that has no string counterpart

**Members:**

- <a id="SpecialOrders-buildmenu"></a> `static constant buildmenu = 851994`
  This is an order with no target that opens up the build menu of a unit that can build structures.
- <a id="SpecialOrders-cancel"></a> `static constant cancel = 851976`
  851976 (cancel): This is an order with no target that is like a click on a cancel button.
  	We used to be able to catch cancel clicks with this id back then but this id doesn't seem to work any more.
- <a id="SpecialOrders-itemdrag00"></a> `static constant itemdrag00 = 852002`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="SpecialOrders-itemdrag01"></a> `static constant itemdrag01 = 852003`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="SpecialOrders-itemdrag02"></a> `static constant itemdrag02 = 852004`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="SpecialOrders-itemdrag03"></a> `static constant itemdrag03 = 852005`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="SpecialOrders-itemdrag04"></a> `static constant itemdrag04 = 852006`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="SpecialOrders-itemdrag05"></a> `static constant itemdrag05 = 852007`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="SpecialOrders-itemuse00"></a> `static constant itemuse00 = 852008`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="SpecialOrders-itemuse01"></a> `static constant itemuse01 = 852009`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="SpecialOrders-itemuse02"></a> `static constant itemuse02 = 852010`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="SpecialOrders-itemuse03"></a> `static constant itemuse03 = 852011`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="SpecialOrders-itemuse04"></a> `static constant itemuse04 = 852012`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="SpecialOrders-itemuse05"></a> `static constant itemuse05 = 852013`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="SpecialOrders-tomeOfAttack"></a> `static constant tomeOfAttack = 852259`
  Order for AIaa ability, which blizzard made for tome of attack, but never used it. But it can actually change caster's base attack!
- <a id="SpecialOrders-smart"></a> `static constant smart = 851971`
  This is a point or object targeted order that is like a right click.
- <a id="SpecialOrders-skillmenu"></a> `static constant skillmenu = 852000`
  This is an order with no target that opens the skill menu of heroes.
  If it is issued for a normal unit with triggers it will black out the command card for this unit, the command card will revert to normal after reselecting the unit.
- <a id="SpecialOrders-stunned"></a> `static constant stunned = 851973`
  This order is issued to units that get stunned by a spell, for example War Stomp (AOws).
  	This is probably a hold position + hold fire order. The ordered unit will be unable to move and attack.
- <a id="SpecialOrders-wandOfIllusion"></a> `static constant wandOfIllusion = 852274`
- <a id="SpecialOrders-rayOfDisruption"></a> `static constant rayOfDisruption = 852615`
- <a id="SpecialOrders-scrollOfRegeneration"></a> `static constant scrollOfRegeneration = 852609`

### OrderIds

```wurst
public class OrderIds extends SpecialOrders
```

Class that contains every known order in game.

**Members:**

- <a id="OrderIds-absorb"></a> `static constant absorb = 852529`
- <a id="OrderIds-acidbomb"></a> `static constant acidbomb = 852662`
- <a id="OrderIds-acolyteharvest"></a> `static constant acolyteharvest = 852185`
- <a id="OrderIds-ambush"></a> `static constant ambush = 852131`
- <a id="OrderIds-ancestralspirit"></a> `static constant ancestralspirit = 852490`
- <a id="OrderIds-ancestralspirittarget"></a> `static constant ancestralspirittarget = 852491`
- <a id="OrderIds-animatedead"></a> `static constant animatedead = 852217`
- <a id="OrderIds-antimagicshell"></a> `static constant antimagicshell = 852186`
- <a id="OrderIds-attack"></a> `static constant attack = 851983`
- <a id="OrderIds-attackground"></a> `static constant attackground = 851984`
- <a id="OrderIds-attackonce"></a> `static constant attackonce = 851985`
- <a id="OrderIds-attributemodskill"></a> `static constant attributemodskill = 852576`
- <a id="OrderIds-auraunholy"></a> `static constant auraunholy = 852215`
- <a id="OrderIds-auravampiric"></a> `static constant auravampiric = 852216`
- <a id="OrderIds-autodispel"></a> `static constant autodispel = 852132`
- <a id="OrderIds-autodispeloff"></a> `static constant autodispeloff = 852134`
- <a id="OrderIds-autodispelon"></a> `static constant autodispelon = 852133`
- <a id="OrderIds-autoentangle"></a> `static constant autoentangle = 852505`
- <a id="OrderIds-autoentangleinstant"></a> `static constant autoentangleinstant = 852506`
- <a id="OrderIds-autoharvestgold"></a> `static constant autoharvestgold = 852021`
- <a id="OrderIds-autoharvestlumber"></a> `static constant autoharvestlumber = 852022`
- <a id="OrderIds-avatar"></a> `static constant avatar = 852086`
- <a id="OrderIds-avengerform"></a> `static constant avengerform = 852531`
- <a id="OrderIds-awaken"></a> `static constant awaken = 852466`
- <a id="OrderIds-banish"></a> `static constant banish = 852486`
- <a id="OrderIds-barkskin"></a> `static constant barkskin = 852135`
- <a id="OrderIds-barkskinoff"></a> `static constant barkskinoff = 852137`
- <a id="OrderIds-barkskinon"></a> `static constant barkskinon = 852136`
- <a id="OrderIds-battleroar"></a> `static constant battleroar = 852599`
- <a id="OrderIds-battlestations"></a> `static constant battlestations = 852099`
- <a id="OrderIds-bearform"></a> `static constant bearform = 852138`
- <a id="OrderIds-berserk"></a> `static constant berserk = 852100`
- <a id="OrderIds-blackarrow"></a> `static constant blackarrow = 852577`
- <a id="OrderIds-blackarrowoff"></a> `static constant blackarrowoff = 852579`
- <a id="OrderIds-blackarrowon"></a> `static constant blackarrowon = 852578`
- <a id="OrderIds-blight"></a> `static constant blight = 852187`
- <a id="OrderIds-blink"></a> `static constant blink = 852525`
- <a id="OrderIds-blizzard"></a> `static constant blizzard = 852089`
- <a id="OrderIds-bloodlust"></a> `static constant bloodlust = 852101`
- <a id="OrderIds-bloodlustoff"></a> `static constant bloodlustoff = 852103`
- <a id="OrderIds-bloodluston"></a> `static constant bloodluston = 852102`
- <a id="OrderIds-board"></a> `static constant board = 852043`
- <a id="OrderIds-breathoffire"></a> `static constant breathoffire = 852580`
- <a id="OrderIds-breathoffrost"></a> `static constant breathoffrost = 852560`
- <a id="OrderIds-build"></a> `static constant build = 851994`
- <a id="OrderIds-burrow"></a> `static constant burrow = 852533`
- <a id="OrderIds-cannibalize"></a> `static constant cannibalize = 852188`
- <a id="OrderIds-carrionscarabs"></a> `static constant carrionscarabs = 852551`
- <a id="OrderIds-carrionscarabsinstant"></a> `static constant carrionscarabsinstant = 852554`
- <a id="OrderIds-carrionscarabsoff"></a> `static constant carrionscarabsoff = 852553`
- <a id="OrderIds-carrionscarabson"></a> `static constant carrionscarabson = 852552`
- <a id="OrderIds-carrionswarm"></a> `static constant carrionswarm = 852218`
- <a id="OrderIds-chainlightning"></a> `static constant chainlightning = 852119`
- <a id="OrderIds-channel"></a> `static constant channel = 852600`
- <a id="OrderIds-charm"></a> `static constant charm = 852581`
- <a id="OrderIds-chemicalrage"></a> `static constant chemicalrage = 852663`
- <a id="OrderIds-cloudoffog"></a> `static constant cloudoffog = 852473`
- <a id="OrderIds-clusterrockets"></a> `static constant clusterrockets = 852652`
- <a id="OrderIds-coldarrows"></a> `static constant coldarrows = 852244`
- <a id="OrderIds-coldarrowstarg"></a> `static constant coldarrowstarg = 852243`
- <a id="OrderIds-controlmagic"></a> `static constant controlmagic = 852474`
- <a id="OrderIds-corporealform"></a> `static constant corporealform = 852493`
- <a id="OrderIds-corrosivebreath"></a> `static constant corrosivebreath = 852140`
- <a id="OrderIds-coupleinstant"></a> `static constant coupleinstant = 852508`
- <a id="OrderIds-coupletarget"></a> `static constant coupletarget = 852507`
- <a id="OrderIds-creepanimatedead"></a> `static constant creepanimatedead = 852246`
- <a id="OrderIds-creepdevour"></a> `static constant creepdevour = 852247`
- <a id="OrderIds-creepheal"></a> `static constant creepheal = 852248`
- <a id="OrderIds-creephealoff"></a> `static constant creephealoff = 852250`
- <a id="OrderIds-creephealon"></a> `static constant creephealon = 852249`
- <a id="OrderIds-creepthunderbolt"></a> `static constant creepthunderbolt = 852252`
- <a id="OrderIds-creepthunderclap"></a> `static constant creepthunderclap = 852253`
- <a id="OrderIds-cripple"></a> `static constant cripple = 852189`
- <a id="OrderIds-curse"></a> `static constant curse = 852190`
- <a id="OrderIds-curseoff"></a> `static constant curseoff = 852192`
- <a id="OrderIds-curseon"></a> `static constant curseon = 852191`
- <a id="OrderIds-cyclone"></a> `static constant cyclone = 852144`
- <a id="OrderIds-darkconversion"></a> `static constant darkconversion = 852228`
- <a id="OrderIds-darkportal"></a> `static constant darkportal = 852229`
- <a id="OrderIds-darkritual"></a> `static constant darkritual = 852219`
- <a id="OrderIds-darksummoning"></a> `static constant darksummoning = 852220`
- <a id="OrderIds-deathanddecay"></a> `static constant deathanddecay = 852221`
- <a id="OrderIds-deathcoil"></a> `static constant deathcoil = 852222`
- <a id="OrderIds-deathpact"></a> `static constant deathpact = 852223`
- <a id="OrderIds-decouple"></a> `static constant decouple = 852509`
- <a id="OrderIds-defend"></a> `static constant defend = 852055`
- <a id="OrderIds-detectaoe"></a> `static constant detectaoe = 852015`
- <a id="OrderIds-detonate"></a> `static constant detonate = 852145`
- <a id="OrderIds-devour"></a> `static constant devour = 852104`
- <a id="OrderIds-devourmagic"></a> `static constant devourmagic = 852536`
- <a id="OrderIds-disassociate"></a> `static constant disassociate = 852240`
- <a id="OrderIds-disenchant"></a> `static constant disenchant = 852495`
- <a id="OrderIds-dismount"></a> `static constant dismount = 852470`
- <a id="OrderIds-dispel"></a> `static constant dispel = 852057`
- <a id="OrderIds-divineshield"></a> `static constant divineshield = 852090`
- <a id="OrderIds-doom"></a> `static constant doom = 852583`
- <a id="OrderIds-drain"></a> `static constant drain = 852487`
- <a id="OrderIds-dreadlordinferno"></a> `static constant dreadlordinferno = 852224`
- <a id="OrderIds-dropitem"></a> `static constant dropitem = 852001`
- <a id="OrderIds-drunkenhaze"></a> `static constant drunkenhaze = 852585`
- <a id="OrderIds-earthquake"></a> `static constant earthquake = 852121`
- <a id="OrderIds-eattree"></a> `static constant eattree = 852146`
- <a id="OrderIds-elementalfury"></a> `static constant elementalfury = 852586`
- <a id="OrderIds-ensnare"></a> `static constant ensnare = 852106`
- <a id="OrderIds-ensnareoff"></a> `static constant ensnareoff = 852108`
- <a id="OrderIds-ensnareon"></a> `static constant ensnareon = 852107`
- <a id="OrderIds-entangle"></a> `static constant entangle = 852147`
- <a id="OrderIds-entangleinstant"></a> `static constant entangleinstant = 852148`
- <a id="OrderIds-entanglingroots"></a> `static constant entanglingroots = 852171`
- <a id="OrderIds-etherealform"></a> `static constant etherealform = 852496`
- <a id="OrderIds-evileye"></a> `static constant evileye = 852105`
- <a id="OrderIds-faeriefire"></a> `static constant faeriefire = 852149`
- <a id="OrderIds-faeriefireoff"></a> `static constant faeriefireoff = 852151`
- <a id="OrderIds-faeriefireon"></a> `static constant faeriefireon = 852150`
- <a id="OrderIds-fanofknives"></a> `static constant fanofknives = 852526`
- <a id="OrderIds-farsight"></a> `static constant farsight = 852122`
- <a id="OrderIds-fingerofdeath"></a> `static constant fingerofdeath = 852230`
- <a id="OrderIds-firebolt"></a> `static constant firebolt = 852231`
- <a id="OrderIds-flamestrike"></a> `static constant flamestrike = 852488`
- <a id="OrderIds-flamingarrows"></a> `static constant flamingarrows = 852174`
- <a id="OrderIds-flamingarrowstarg"></a> `static constant flamingarrowstarg = 852173`
- <a id="OrderIds-flamingattack"></a> `static constant flamingattack = 852540`
- <a id="OrderIds-flamingattacktarg"></a> `static constant flamingattacktarg = 852539`
- <a id="OrderIds-flare"></a> `static constant flare = 852060`
- <a id="OrderIds-forceboard"></a> `static constant forceboard = 852044`
- <a id="OrderIds-forceofnature"></a> `static constant forceofnature = 852176`
- <a id="OrderIds-forkedlightning"></a> `static constant forkedlightning = 852587`
- <a id="OrderIds-freezingbreath"></a> `static constant freezingbreath = 852195`
- <a id="OrderIds-frenzy"></a> `static constant frenzy = 852561`
- <a id="OrderIds-frenzyoff"></a> `static constant frenzyoff = 852563`
- <a id="OrderIds-frenzyon"></a> `static constant frenzyon = 852562`
- <a id="OrderIds-frostarmor"></a> `static constant frostarmor = 852225`
- <a id="OrderIds-frostarmoroff"></a> `static constant frostarmoroff = 852459`
- <a id="OrderIds-frostarmoron"></a> `static constant frostarmoron = 852458`
- <a id="OrderIds-frostnova"></a> `static constant frostnova = 852226`
- <a id="OrderIds-getitem"></a> `static constant getitem = 851981`
- <a id="OrderIds-gold2lumber"></a> `static constant gold2lumber = 852233`
- <a id="OrderIds-grabtree"></a> `static constant grabtree = 852511`
- <a id="OrderIds-harvest"></a> `static constant harvest = 852018`
- <a id="OrderIds-heal"></a> `static constant heal = 852063`
- <a id="OrderIds-healingspray"></a> `static constant healingspray = 852664`
- <a id="OrderIds-healingward"></a> `static constant healingward = 852109`
- <a id="OrderIds-healingwave"></a> `static constant healingwave = 852501`
- <a id="OrderIds-healoff"></a> `static constant healoff = 852065`
- <a id="OrderIds-healon"></a> `static constant healon = 852064`
- <a id="OrderIds-hex"></a> `static constant hex = 852502`
- <a id="OrderIds-holdposition"></a> `static constant holdposition = 851993`
- <a id="OrderIds-holybolt"></a> `static constant holybolt = 852092`
- <a id="OrderIds-howlofterror"></a> `static constant howlofterror = 852588`
- <a id="OrderIds-humanbuild"></a> `static constant humanbuild = 851995`
- <a id="OrderIds-immolation"></a> `static constant immolation = 852177`
- <a id="OrderIds-impale"></a> `static constant impale = 852555`
- <a id="OrderIds-incineratearrow"></a> `static constant incineratearrow = 852670`
- <a id="OrderIds-incineratearrowoff"></a> `static constant incineratearrowoff = 852672`
- <a id="OrderIds-incineratearrowon"></a> `static constant incineratearrowon = 852671`
- <a id="OrderIds-inferno"></a> `static constant inferno = 852232`
- <a id="OrderIds-innerfire"></a> `static constant innerfire = 852066`
- <a id="OrderIds-innerfireoff"></a> `static constant innerfireoff = 852068`
- <a id="OrderIds-innerfireon"></a> `static constant innerfireon = 852067`
- <a id="OrderIds-instant"></a> `static constant instant = 852200`
- <a id="OrderIds-invisibility"></a> `static constant invisibility = 852069`
- <a id="OrderIds-lavamonster"></a> `static constant lavamonster = 852667`
- <a id="OrderIds-lightningshield"></a> `static constant lightningshield = 852110`
- <a id="OrderIds-load"></a> `static constant load = 852046`
- <a id="OrderIds-loadarcher"></a> `static constant loadarcher = 852142`
- <a id="OrderIds-loadcorpse"></a> `static constant loadcorpse = 852050`
- <a id="OrderIds-loadcorpseinstant"></a> `static constant loadcorpseinstant = 852053`
- <a id="OrderIds-locustswarm"></a> `static constant locustswarm = 852556`
- <a id="OrderIds-lumber2gold"></a> `static constant lumber2gold = 852234`
- <a id="OrderIds-magicdefense"></a> `static constant magicdefense = 852478`
- <a id="OrderIds-magicleash"></a> `static constant magicleash = 852480`
- <a id="OrderIds-magicundefense"></a> `static constant magicundefense = 852479`
- <a id="OrderIds-manaburn"></a> `static constant manaburn = 852179`
- <a id="OrderIds-manaflareoff"></a> `static constant manaflareoff = 852513`
- <a id="OrderIds-manaflareon"></a> `static constant manaflareon = 852512`
- <a id="OrderIds-manashieldoff"></a> `static constant manashieldoff = 852590`
- <a id="OrderIds-manashieldon"></a> `static constant manashieldon = 852589`
- <a id="OrderIds-massteleport"></a> `static constant massteleport = 852093`
- <a id="OrderIds-mechanicalcritter"></a> `static constant mechanicalcritter = 852564`
- <a id="OrderIds-metamorphosis"></a> `static constant metamorphosis = 852180`
- <a id="OrderIds-militia"></a> `static constant militia = 852072`
- <a id="OrderIds-militiaconvert"></a> `static constant militiaconvert = 852071`
- <a id="OrderIds-militiaoff"></a> `static constant militiaoff = 852073`
- <a id="OrderIds-militiaunconvert"></a> `static constant militiaunconvert = 852651`
- <a id="OrderIds-mindrot"></a> `static constant mindrot = 852565`
- <a id="OrderIds-mirrorimage"></a> `static constant mirrorimage = 852123`
- <a id="OrderIds-monsoon"></a> `static constant monsoon = 852591`
- <a id="OrderIds-mount"></a> `static constant mount = 852469`
- <a id="OrderIds-mounthippogryph"></a> `static constant mounthippogryph = 852143`
- <a id="OrderIds-move"></a> `static constant move = 851986`
- <a id="OrderIds-moveAI"></a> `static constant moveAI = 851988`
- <a id="OrderIds-nagabuild"></a> `static constant nagabuild = 852467`
- <a id="OrderIds-neutraldetectaoe"></a> `static constant neutraldetectaoe = 852023`
- <a id="OrderIds-neutralinteract"></a> `static constant neutralinteract = 852566`
- <a id="OrderIds-neutralspell"></a> `static constant neutralspell = 852630`
- <a id="OrderIds-nightelfbuild"></a> `static constant nightelfbuild = 851997`
- <a id="OrderIds-orcbuild"></a> `static constant orcbuild = 851996`
- <a id="OrderIds-parasite"></a> `static constant parasite = 852601`
- <a id="OrderIds-parasiteoff"></a> `static constant parasiteoff = 852603`
- <a id="OrderIds-parasiteon"></a> `static constant parasiteon = 852602`
- <a id="OrderIds-patrol"></a> `static constant patrol = 851990`
- <a id="OrderIds-phaseshift"></a> `static constant phaseshift = 852514`
- <a id="OrderIds-phaseshiftinstant"></a> `static constant phaseshiftinstant = 852517`
- <a id="OrderIds-phaseshiftoff"></a> `static constant phaseshiftoff = 852516`
- <a id="OrderIds-phaseshifton"></a> `static constant phaseshifton = 852515`
- <a id="OrderIds-phoenixfire"></a> `static constant phoenixfire = 852481`
- <a id="OrderIds-phoenixmorph"></a> `static constant phoenixmorph = 852482`
- <a id="OrderIds-poisonarrows"></a> `static constant poisonarrows = 852255`
- <a id="OrderIds-poisonarrowstarg"></a> `static constant poisonarrowstarg = 852254`
- <a id="OrderIds-polymorph"></a> `static constant polymorph = 852074`
- <a id="OrderIds-possession"></a> `static constant possession = 852196`
- <a id="OrderIds-preservation"></a> `static constant preservation = 852568`
- <a id="OrderIds-purge"></a> `static constant purge = 852111`
- <a id="OrderIds-rainofchaos"></a> `static constant rainofchaos = 852237`
- <a id="OrderIds-rainoffire"></a> `static constant rainoffire = 852238`
- <a id="OrderIds-raisedead"></a> `static constant raisedead = 852197`
- <a id="OrderIds-raisedeadoff"></a> `static constant raisedeadoff = 852199`
- <a id="OrderIds-raisedeadon"></a> `static constant raisedeadon = 852198`
- <a id="OrderIds-ravenform"></a> `static constant ravenform = 852155`
- <a id="OrderIds-recharge"></a> `static constant recharge = 852157`
- <a id="OrderIds-rechargeoff"></a> `static constant rechargeoff = 852159`
- <a id="OrderIds-rechargeon"></a> `static constant rechargeon = 852158`
- <a id="OrderIds-rejuvination"></a> `static constant rejuvination = 852160`
- <a id="OrderIds-renew"></a> `static constant renew = 852161`
- <a id="OrderIds-renewoff"></a> `static constant renewoff = 852163`
- <a id="OrderIds-renewon"></a> `static constant renewon = 852162`
- <a id="OrderIds-repair"></a> `static constant repair = 852024`
- <a id="OrderIds-repairoff"></a> `static constant repairoff = 852026`
- <a id="OrderIds-repairon"></a> `static constant repairon = 852025`
- <a id="OrderIds-replenish"></a> `static constant replenish = 852542`
- <a id="OrderIds-replenishlife"></a> `static constant replenishlife = 852545`
- <a id="OrderIds-replenishlifeoff"></a> `static constant replenishlifeoff = 852547`
- <a id="OrderIds-replenishlifeon"></a> `static constant replenishlifeon = 852546`
- <a id="OrderIds-replenishmana"></a> `static constant replenishmana = 852548`
- <a id="OrderIds-replenishmanaoff"></a> `static constant replenishmanaoff = 852550`
- <a id="OrderIds-replenishmanaon"></a> `static constant replenishmanaon = 852549`
- <a id="OrderIds-replenishoff"></a> `static constant replenishoff = 852544`
- <a id="OrderIds-replenishon"></a> `static constant replenishon = 852543`
- <a id="OrderIds-request_hero"></a> `static constant request_hero = 852239`
- <a id="OrderIds-requestsacrifice"></a> `static constant requestsacrifice = 852201`
- <a id="OrderIds-restoration"></a> `static constant restoration = 852202`
- <a id="OrderIds-restorationoff"></a> `static constant restorationoff = 852204`
- <a id="OrderIds-restorationon"></a> `static constant restorationon = 852203`
- <a id="OrderIds-resumebuild"></a> `static constant resumebuild = 851999`
- <a id="OrderIds-resumeharvesting"></a> `static constant resumeharvesting = 852017`
- <a id="OrderIds-resurrection"></a> `static constant resurrection = 852094`
- <a id="OrderIds-returnresources"></a> `static constant returnresources = 852020`
- <a id="OrderIds-revenge"></a> `static constant revenge = 852241`
- <a id="OrderIds-revive"></a> `static constant revive = 852039`
- <a id="OrderIds-roar"></a> `static constant roar = 852164`
- <a id="OrderIds-robogoblin"></a> `static constant robogoblin = 852656`
- <a id="OrderIds-root"></a> `static constant root = 852165`
- <a id="OrderIds-sacrifice"></a> `static constant sacrifice = 852205`
- <a id="OrderIds-sanctuary"></a> `static constant sanctuary = 852569`
- <a id="OrderIds-scout"></a> `static constant scout = 852181`
- <a id="OrderIds-selfdestruct"></a> `static constant selfdestruct = 852040`
- <a id="OrderIds-selfdestructoff"></a> `static constant selfdestructoff = 852042`
- <a id="OrderIds-selfdestructon"></a> `static constant selfdestructon = 852041`
- <a id="OrderIds-sentinel"></a> `static constant sentinel = 852182`
- <a id="OrderIds-setrally"></a> `static constant setrally = 851980`
- <a id="OrderIds-shadowsight"></a> `static constant shadowsight = 852570`
- <a id="OrderIds-shadowstrike"></a> `static constant shadowstrike = 852527`
- <a id="OrderIds-shockwave"></a> `static constant shockwave = 852125`
- <a id="OrderIds-silence"></a> `static constant silence = 852592`
- <a id="OrderIds-sleep"></a> `static constant sleep = 852227`
- <a id="OrderIds-slow"></a> `static constant slow = 852075`
- <a id="OrderIds-slowoff"></a> `static constant slowoff = 852077`
- <a id="OrderIds-slowon"></a> `static constant slowon = 852076`
- <a id="OrderIds-soulburn"></a> `static constant soulburn = 852668`
- <a id="OrderIds-soulpreservation"></a> `static constant soulpreservation = 852242`
- <a id="OrderIds-spellshield"></a> `static constant spellshield = 852571`
- <a id="OrderIds-spellshieldaoe"></a> `static constant spellshieldaoe = 852572`
- <a id="OrderIds-spellsteal"></a> `static constant spellsteal = 852483`
- <a id="OrderIds-spellstealoff"></a> `static constant spellstealoff = 852485`
- <a id="OrderIds-spellstealon"></a> `static constant spellstealon = 852484`
- <a id="OrderIds-spies"></a> `static constant spies = 852235`
- <a id="OrderIds-spiritlink"></a> `static constant spiritlink = 852499`
- <a id="OrderIds-spiritofvengeance"></a> `static constant spiritofvengeance = 852528`
- <a id="OrderIds-spirittroll"></a> `static constant spirittroll = 852573`
- <a id="OrderIds-spiritwolf"></a> `static constant spiritwolf = 852126`
- <a id="OrderIds-stampede"></a> `static constant stampede = 852593`
- <a id="OrderIds-standdown"></a> `static constant standdown = 852113`
- <a id="OrderIds-starfall"></a> `static constant starfall = 852183`
- <a id="OrderIds-stasistrap"></a> `static constant stasistrap = 852114`
- <a id="OrderIds-steal"></a> `static constant steal = 852574`
- <a id="OrderIds-stomp"></a> `static constant stomp = 852127`
- <a id="OrderIds-stoneform"></a> `static constant stoneform = 852206`
- <a id="OrderIds-stop"></a> `static constant stop = 851972`
- <a id="OrderIds-submerge"></a> `static constant submerge = 852604`
- <a id="OrderIds-summonfactory"></a> `static constant summonfactory = 852658`
- <a id="OrderIds-summongrizzly"></a> `static constant summongrizzly = 852594`
- <a id="OrderIds-summonphoenix"></a> `static constant summonphoenix = 852489`
- <a id="OrderIds-summonquillbeast"></a> `static constant summonquillbeast = 852595`
- <a id="OrderIds-summonwareagle"></a> `static constant summonwareagle = 852596`
- <a id="OrderIds-tankdroppilot"></a> `static constant tankdroppilot = 852079`
- <a id="OrderIds-tankloadpilot"></a> `static constant tankloadpilot = 852080`
- <a id="OrderIds-tankpilot"></a> `static constant tankpilot = 852081`
- <a id="OrderIds-taunt"></a> `static constant taunt = 852520`
- <a id="OrderIds-thunderbolt"></a> `static constant thunderbolt = 852095`
- <a id="OrderIds-thunderclap"></a> `static constant thunderclap = 852096`
- <a id="OrderIds-tornado"></a> `static constant tornado = 852597`
- <a id="OrderIds-townbelloff"></a> `static constant townbelloff = 852083`
- <a id="OrderIds-townbellon"></a> `static constant townbellon = 852082`
- <a id="OrderIds-tranquility"></a> `static constant tranquility = 852184`
- <a id="OrderIds-transmute"></a> `static constant transmute = 852665`
- <a id="OrderIds-unavatar"></a> `static constant unavatar = 852087`
- <a id="OrderIds-unavengerform"></a> `static constant unavengerform = 852532`
- <a id="OrderIds-unbearform"></a> `static constant unbearform = 852139`
- <a id="OrderIds-unburrow"></a> `static constant unburrow = 852534`
- <a id="OrderIds-uncoldarrows"></a> `static constant uncoldarrows = 852245`
- <a id="OrderIds-uncorporealform"></a> `static constant uncorporealform = 852494`
- <a id="OrderIds-undeadbuild"></a> `static constant undeadbuild = 851998`
- <a id="OrderIds-undefend"></a> `static constant undefend = 852056`
- <a id="OrderIds-undivineshield"></a> `static constant undivineshield = 852091`
- <a id="OrderIds-unetherealform"></a> `static constant unetherealform = 852497`
- <a id="OrderIds-unflamingarrows"></a> `static constant unflamingarrows = 852175`
- <a id="OrderIds-unflamingattack"></a> `static constant unflamingattack = 852541`
- <a id="OrderIds-unholyfrenzy"></a> `static constant unholyfrenzy = 852209`
- <a id="OrderIds-unimmolation"></a> `static constant unimmolation = 852178`
- <a id="OrderIds-unload"></a> `static constant unload = 852047`
- <a id="OrderIds-unloadall"></a> `static constant unloadall = 852048`
- <a id="OrderIds-unloadallcorpses"></a> `static constant unloadallcorpses = 852054`
- <a id="OrderIds-unloadallinstant"></a> `static constant unloadallinstant = 852049`
- <a id="OrderIds-unpoisonarrows"></a> `static constant unpoisonarrows = 852256`
- <a id="OrderIds-unravenform"></a> `static constant unravenform = 852156`
- <a id="OrderIds-unrobogoblin"></a> `static constant unrobogoblin = 852657`
- <a id="OrderIds-unroot"></a> `static constant unroot = 852166`
- <a id="OrderIds-unstableconcoction"></a> `static constant unstableconcoction = 852500`
- <a id="OrderIds-unstoneform"></a> `static constant unstoneform = 852207`
- <a id="OrderIds-unsubmerge"></a> `static constant unsubmerge = 852605`
- <a id="OrderIds-unsummon"></a> `static constant unsummon = 852210`
- <a id="OrderIds-unwindwalk"></a> `static constant unwindwalk = 852130`
- <a id="OrderIds-vengeance"></a> `static constant vengeance = 852521`
- <a id="OrderIds-vengeanceinstant"></a> `static constant vengeanceinstant = 852524`
- <a id="OrderIds-vengeanceoff"></a> `static constant vengeanceoff = 852523`
- <a id="OrderIds-vengeanceon"></a> `static constant vengeanceon = 852522`
- <a id="OrderIds-volcano"></a> `static constant volcano = 852669`
- <a id="OrderIds-voodoo"></a> `static constant voodoo = 852503`
- <a id="OrderIds-ward"></a> `static constant ward = 852504`
- <a id="OrderIds-waterelemental"></a> `static constant waterelemental = 852097`
- <a id="OrderIds-wateryminion"></a> `static constant wateryminion = 852598`
- <a id="OrderIds-web"></a> `static constant web = 852211`
- <a id="OrderIds-weboff"></a> `static constant weboff = 852213`
- <a id="OrderIds-webon"></a> `static constant webon = 852212`
- <a id="OrderIds-whirlwind"></a> `static constant whirlwind = 852128`
- <a id="OrderIds-windwalk"></a> `static constant windwalk = 852129`
- <a id="OrderIds-wispharvest"></a> `static constant wispharvest = 852214`

### Orders

```wurst
public class Orders extends OrderIds
```
