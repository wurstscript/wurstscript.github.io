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

- <a id="specialorders-buildmenu"></a> `static constant buildmenu = 851994`
  This is an order with no target that opens up the build menu of a unit that can build structures.
- <a id="specialorders-cancel"></a> `static constant cancel = 851976`
  851976 (cancel): This is an order with no target that is like a click on a cancel button.
  	We used to be able to catch cancel clicks with this id back then but this id doesn't seem to work any more.
- <a id="specialorders-itemdrag00"></a> `static constant itemdrag00 = 852002`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="specialorders-itemdrag01"></a> `static constant itemdrag01 = 852003`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="specialorders-itemdrag02"></a> `static constant itemdrag02 = 852004`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="specialorders-itemdrag03"></a> `static constant itemdrag03 = 852005`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="specialorders-itemdrag04"></a> `static constant itemdrag04 = 852006`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="specialorders-itemdrag05"></a> `static constant itemdrag05 = 852007`
  An item targeted order that move the target item to a certain inventory slot of the ordered hero.
- <a id="specialorders-itemuse00"></a> `static constant itemuse00 = 852008`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="specialorders-itemuse01"></a> `static constant itemuse01 = 852009`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="specialorders-itemuse02"></a> `static constant itemuse02 = 852010`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="specialorders-itemuse03"></a> `static constant itemuse03 = 852011`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="specialorders-itemuse04"></a> `static constant itemuse04 = 852012`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="specialorders-itemuse05"></a> `static constant itemuse05 = 852013`
  An order that will make the ordered hero use the item in a certain inventory slot.
  	If it's an order with no target or object or point targeted depends on the type of item.
- <a id="specialorders-tomeOfAttack"></a> `static constant tomeOfAttack = 852259`
  Order for AIaa ability, which blizzard made for tome of attack, but never used it. But it can actually change caster's base attack!
- <a id="specialorders-smart"></a> `static constant smart = 851971`
  This is a point or object targeted order that is like a right click.
- <a id="specialorders-skillmenu"></a> `static constant skillmenu = 852000`
  This is an order with no target that opens the skill menu of heroes.
  If it is issued for a normal unit with triggers it will black out the command card for this unit, the command card will revert to normal after reselecting the unit.
- <a id="specialorders-stunned"></a> `static constant stunned = 851973`
  This order is issued to units that get stunned by a spell, for example War Stomp (AOws).
  	This is probably a hold position + hold fire order. The ordered unit will be unable to move and attack.
- <a id="specialorders-wandOfIllusion"></a> `static constant wandOfIllusion = 852274`
- <a id="specialorders-rayOfDisruption"></a> `static constant rayOfDisruption = 852615`
- <a id="specialorders-scrollOfRegeneration"></a> `static constant scrollOfRegeneration = 852609`

### OrderIds

```wurst
public class OrderIds extends SpecialOrders
```

Class that contains every known order in game.

**Members:**

- <a id="orderids-absorb"></a> `static constant absorb = 852529`
- <a id="orderids-acidbomb"></a> `static constant acidbomb = 852662`
- <a id="orderids-acolyteharvest"></a> `static constant acolyteharvest = 852185`
- <a id="orderids-ambush"></a> `static constant ambush = 852131`
- <a id="orderids-ancestralspirit"></a> `static constant ancestralspirit = 852490`
- <a id="orderids-ancestralspirittarget"></a> `static constant ancestralspirittarget = 852491`
- <a id="orderids-animatedead"></a> `static constant animatedead = 852217`
- <a id="orderids-antimagicshell"></a> `static constant antimagicshell = 852186`
- <a id="orderids-attack"></a> `static constant attack = 851983`
- <a id="orderids-attackground"></a> `static constant attackground = 851984`
- <a id="orderids-attackonce"></a> `static constant attackonce = 851985`
- <a id="orderids-attributemodskill"></a> `static constant attributemodskill = 852576`
- <a id="orderids-auraunholy"></a> `static constant auraunholy = 852215`
- <a id="orderids-auravampiric"></a> `static constant auravampiric = 852216`
- <a id="orderids-autodispel"></a> `static constant autodispel = 852132`
- <a id="orderids-autodispeloff"></a> `static constant autodispeloff = 852134`
- <a id="orderids-autodispelon"></a> `static constant autodispelon = 852133`
- <a id="orderids-autoentangle"></a> `static constant autoentangle = 852505`
- <a id="orderids-autoentangleinstant"></a> `static constant autoentangleinstant = 852506`
- <a id="orderids-autoharvestgold"></a> `static constant autoharvestgold = 852021`
- <a id="orderids-autoharvestlumber"></a> `static constant autoharvestlumber = 852022`
- <a id="orderids-avatar"></a> `static constant avatar = 852086`
- <a id="orderids-avengerform"></a> `static constant avengerform = 852531`
- <a id="orderids-awaken"></a> `static constant awaken = 852466`
- <a id="orderids-banish"></a> `static constant banish = 852486`
- <a id="orderids-barkskin"></a> `static constant barkskin = 852135`
- <a id="orderids-barkskinoff"></a> `static constant barkskinoff = 852137`
- <a id="orderids-barkskinon"></a> `static constant barkskinon = 852136`
- <a id="orderids-battleroar"></a> `static constant battleroar = 852599`
- <a id="orderids-battlestations"></a> `static constant battlestations = 852099`
- <a id="orderids-bearform"></a> `static constant bearform = 852138`
- <a id="orderids-berserk"></a> `static constant berserk = 852100`
- <a id="orderids-blackarrow"></a> `static constant blackarrow = 852577`
- <a id="orderids-blackarrowoff"></a> `static constant blackarrowoff = 852579`
- <a id="orderids-blackarrowon"></a> `static constant blackarrowon = 852578`
- <a id="orderids-blight"></a> `static constant blight = 852187`
- <a id="orderids-blink"></a> `static constant blink = 852525`
- <a id="orderids-blizzard"></a> `static constant blizzard = 852089`
- <a id="orderids-bloodlust"></a> `static constant bloodlust = 852101`
- <a id="orderids-bloodlustoff"></a> `static constant bloodlustoff = 852103`
- <a id="orderids-bloodluston"></a> `static constant bloodluston = 852102`
- <a id="orderids-board"></a> `static constant board = 852043`
- <a id="orderids-breathoffire"></a> `static constant breathoffire = 852580`
- <a id="orderids-breathoffrost"></a> `static constant breathoffrost = 852560`
- <a id="orderids-build"></a> `static constant build = 851994`
- <a id="orderids-burrow"></a> `static constant burrow = 852533`
- <a id="orderids-cannibalize"></a> `static constant cannibalize = 852188`
- <a id="orderids-carrionscarabs"></a> `static constant carrionscarabs = 852551`
- <a id="orderids-carrionscarabsinstant"></a> `static constant carrionscarabsinstant = 852554`
- <a id="orderids-carrionscarabsoff"></a> `static constant carrionscarabsoff = 852553`
- <a id="orderids-carrionscarabson"></a> `static constant carrionscarabson = 852552`
- <a id="orderids-carrionswarm"></a> `static constant carrionswarm = 852218`
- <a id="orderids-chainlightning"></a> `static constant chainlightning = 852119`
- <a id="orderids-channel"></a> `static constant channel = 852600`
- <a id="orderids-charm"></a> `static constant charm = 852581`
- <a id="orderids-chemicalrage"></a> `static constant chemicalrage = 852663`
- <a id="orderids-cloudoffog"></a> `static constant cloudoffog = 852473`
- <a id="orderids-clusterrockets"></a> `static constant clusterrockets = 852652`
- <a id="orderids-coldarrows"></a> `static constant coldarrows = 852244`
- <a id="orderids-coldarrowstarg"></a> `static constant coldarrowstarg = 852243`
- <a id="orderids-controlmagic"></a> `static constant controlmagic = 852474`
- <a id="orderids-corporealform"></a> `static constant corporealform = 852493`
- <a id="orderids-corrosivebreath"></a> `static constant corrosivebreath = 852140`
- <a id="orderids-coupleinstant"></a> `static constant coupleinstant = 852508`
- <a id="orderids-coupletarget"></a> `static constant coupletarget = 852507`
- <a id="orderids-creepanimatedead"></a> `static constant creepanimatedead = 852246`
- <a id="orderids-creepdevour"></a> `static constant creepdevour = 852247`
- <a id="orderids-creepheal"></a> `static constant creepheal = 852248`
- <a id="orderids-creephealoff"></a> `static constant creephealoff = 852250`
- <a id="orderids-creephealon"></a> `static constant creephealon = 852249`
- <a id="orderids-creepthunderbolt"></a> `static constant creepthunderbolt = 852252`
- <a id="orderids-creepthunderclap"></a> `static constant creepthunderclap = 852253`
- <a id="orderids-cripple"></a> `static constant cripple = 852189`
- <a id="orderids-curse"></a> `static constant curse = 852190`
- <a id="orderids-curseoff"></a> `static constant curseoff = 852192`
- <a id="orderids-curseon"></a> `static constant curseon = 852191`
- <a id="orderids-cyclone"></a> `static constant cyclone = 852144`
- <a id="orderids-darkconversion"></a> `static constant darkconversion = 852228`
- <a id="orderids-darkportal"></a> `static constant darkportal = 852229`
- <a id="orderids-darkritual"></a> `static constant darkritual = 852219`
- <a id="orderids-darksummoning"></a> `static constant darksummoning = 852220`
- <a id="orderids-deathanddecay"></a> `static constant deathanddecay = 852221`
- <a id="orderids-deathcoil"></a> `static constant deathcoil = 852222`
- <a id="orderids-deathpact"></a> `static constant deathpact = 852223`
- <a id="orderids-decouple"></a> `static constant decouple = 852509`
- <a id="orderids-defend"></a> `static constant defend = 852055`
- <a id="orderids-detectaoe"></a> `static constant detectaoe = 852015`
- <a id="orderids-detonate"></a> `static constant detonate = 852145`
- <a id="orderids-devour"></a> `static constant devour = 852104`
- <a id="orderids-devourmagic"></a> `static constant devourmagic = 852536`
- <a id="orderids-disassociate"></a> `static constant disassociate = 852240`
- <a id="orderids-disenchant"></a> `static constant disenchant = 852495`
- <a id="orderids-dismount"></a> `static constant dismount = 852470`
- <a id="orderids-dispel"></a> `static constant dispel = 852057`
- <a id="orderids-divineshield"></a> `static constant divineshield = 852090`
- <a id="orderids-doom"></a> `static constant doom = 852583`
- <a id="orderids-drain"></a> `static constant drain = 852487`
- <a id="orderids-dreadlordinferno"></a> `static constant dreadlordinferno = 852224`
- <a id="orderids-dropitem"></a> `static constant dropitem = 852001`
- <a id="orderids-drunkenhaze"></a> `static constant drunkenhaze = 852585`
- <a id="orderids-earthquake"></a> `static constant earthquake = 852121`
- <a id="orderids-eattree"></a> `static constant eattree = 852146`
- <a id="orderids-elementalfury"></a> `static constant elementalfury = 852586`
- <a id="orderids-ensnare"></a> `static constant ensnare = 852106`
- <a id="orderids-ensnareoff"></a> `static constant ensnareoff = 852108`
- <a id="orderids-ensnareon"></a> `static constant ensnareon = 852107`
- <a id="orderids-entangle"></a> `static constant entangle = 852147`
- <a id="orderids-entangleinstant"></a> `static constant entangleinstant = 852148`
- <a id="orderids-entanglingroots"></a> `static constant entanglingroots = 852171`
- <a id="orderids-etherealform"></a> `static constant etherealform = 852496`
- <a id="orderids-evileye"></a> `static constant evileye = 852105`
- <a id="orderids-faeriefire"></a> `static constant faeriefire = 852149`
- <a id="orderids-faeriefireoff"></a> `static constant faeriefireoff = 852151`
- <a id="orderids-faeriefireon"></a> `static constant faeriefireon = 852150`
- <a id="orderids-fanofknives"></a> `static constant fanofknives = 852526`
- <a id="orderids-farsight"></a> `static constant farsight = 852122`
- <a id="orderids-fingerofdeath"></a> `static constant fingerofdeath = 852230`
- <a id="orderids-firebolt"></a> `static constant firebolt = 852231`
- <a id="orderids-flamestrike"></a> `static constant flamestrike = 852488`
- <a id="orderids-flamingarrows"></a> `static constant flamingarrows = 852174`
- <a id="orderids-flamingarrowstarg"></a> `static constant flamingarrowstarg = 852173`
- <a id="orderids-flamingattack"></a> `static constant flamingattack = 852540`
- <a id="orderids-flamingattacktarg"></a> `static constant flamingattacktarg = 852539`
- <a id="orderids-flare"></a> `static constant flare = 852060`
- <a id="orderids-forceboard"></a> `static constant forceboard = 852044`
- <a id="orderids-forceofnature"></a> `static constant forceofnature = 852176`
- <a id="orderids-forkedlightning"></a> `static constant forkedlightning = 852587`
- <a id="orderids-freezingbreath"></a> `static constant freezingbreath = 852195`
- <a id="orderids-frenzy"></a> `static constant frenzy = 852561`
- <a id="orderids-frenzyoff"></a> `static constant frenzyoff = 852563`
- <a id="orderids-frenzyon"></a> `static constant frenzyon = 852562`
- <a id="orderids-frostarmor"></a> `static constant frostarmor = 852225`
- <a id="orderids-frostarmoroff"></a> `static constant frostarmoroff = 852459`
- <a id="orderids-frostarmoron"></a> `static constant frostarmoron = 852458`
- <a id="orderids-frostnova"></a> `static constant frostnova = 852226`
- <a id="orderids-getitem"></a> `static constant getitem = 851981`
- <a id="orderids-gold2lumber"></a> `static constant gold2lumber = 852233`
- <a id="orderids-grabtree"></a> `static constant grabtree = 852511`
- <a id="orderids-harvest"></a> `static constant harvest = 852018`
- <a id="orderids-heal"></a> `static constant heal = 852063`
- <a id="orderids-healingspray"></a> `static constant healingspray = 852664`
- <a id="orderids-healingward"></a> `static constant healingward = 852109`
- <a id="orderids-healingwave"></a> `static constant healingwave = 852501`
- <a id="orderids-healoff"></a> `static constant healoff = 852065`
- <a id="orderids-healon"></a> `static constant healon = 852064`
- <a id="orderids-hex"></a> `static constant hex = 852502`
- <a id="orderids-holdposition"></a> `static constant holdposition = 851993`
- <a id="orderids-holybolt"></a> `static constant holybolt = 852092`
- <a id="orderids-howlofterror"></a> `static constant howlofterror = 852588`
- <a id="orderids-humanbuild"></a> `static constant humanbuild = 851995`
- <a id="orderids-immolation"></a> `static constant immolation = 852177`
- <a id="orderids-impale"></a> `static constant impale = 852555`
- <a id="orderids-incineratearrow"></a> `static constant incineratearrow = 852670`
- <a id="orderids-incineratearrowoff"></a> `static constant incineratearrowoff = 852672`
- <a id="orderids-incineratearrowon"></a> `static constant incineratearrowon = 852671`
- <a id="orderids-inferno"></a> `static constant inferno = 852232`
- <a id="orderids-innerfire"></a> `static constant innerfire = 852066`
- <a id="orderids-innerfireoff"></a> `static constant innerfireoff = 852068`
- <a id="orderids-innerfireon"></a> `static constant innerfireon = 852067`
- <a id="orderids-instant"></a> `static constant instant = 852200`
- <a id="orderids-invisibility"></a> `static constant invisibility = 852069`
- <a id="orderids-lavamonster"></a> `static constant lavamonster = 852667`
- <a id="orderids-lightningshield"></a> `static constant lightningshield = 852110`
- <a id="orderids-load"></a> `static constant load = 852046`
- <a id="orderids-loadarcher"></a> `static constant loadarcher = 852142`
- <a id="orderids-loadcorpse"></a> `static constant loadcorpse = 852050`
- <a id="orderids-loadcorpseinstant"></a> `static constant loadcorpseinstant = 852053`
- <a id="orderids-locustswarm"></a> `static constant locustswarm = 852556`
- <a id="orderids-lumber2gold"></a> `static constant lumber2gold = 852234`
- <a id="orderids-magicdefense"></a> `static constant magicdefense = 852478`
- <a id="orderids-magicleash"></a> `static constant magicleash = 852480`
- <a id="orderids-magicundefense"></a> `static constant magicundefense = 852479`
- <a id="orderids-manaburn"></a> `static constant manaburn = 852179`
- <a id="orderids-manaflareoff"></a> `static constant manaflareoff = 852513`
- <a id="orderids-manaflareon"></a> `static constant manaflareon = 852512`
- <a id="orderids-manashieldoff"></a> `static constant manashieldoff = 852590`
- <a id="orderids-manashieldon"></a> `static constant manashieldon = 852589`
- <a id="orderids-massteleport"></a> `static constant massteleport = 852093`
- <a id="orderids-mechanicalcritter"></a> `static constant mechanicalcritter = 852564`
- <a id="orderids-metamorphosis"></a> `static constant metamorphosis = 852180`
- <a id="orderids-militia"></a> `static constant militia = 852072`
- <a id="orderids-militiaconvert"></a> `static constant militiaconvert = 852071`
- <a id="orderids-militiaoff"></a> `static constant militiaoff = 852073`
- <a id="orderids-militiaunconvert"></a> `static constant militiaunconvert = 852651`
- <a id="orderids-mindrot"></a> `static constant mindrot = 852565`
- <a id="orderids-mirrorimage"></a> `static constant mirrorimage = 852123`
- <a id="orderids-monsoon"></a> `static constant monsoon = 852591`
- <a id="orderids-mount"></a> `static constant mount = 852469`
- <a id="orderids-mounthippogryph"></a> `static constant mounthippogryph = 852143`
- <a id="orderids-move"></a> `static constant move = 851986`
- <a id="orderids-moveAI"></a> `static constant moveAI = 851988`
- <a id="orderids-nagabuild"></a> `static constant nagabuild = 852467`
- <a id="orderids-neutraldetectaoe"></a> `static constant neutraldetectaoe = 852023`
- <a id="orderids-neutralinteract"></a> `static constant neutralinteract = 852566`
- <a id="orderids-neutralspell"></a> `static constant neutralspell = 852630`
- <a id="orderids-nightelfbuild"></a> `static constant nightelfbuild = 851997`
- <a id="orderids-orcbuild"></a> `static constant orcbuild = 851996`
- <a id="orderids-parasite"></a> `static constant parasite = 852601`
- <a id="orderids-parasiteoff"></a> `static constant parasiteoff = 852603`
- <a id="orderids-parasiteon"></a> `static constant parasiteon = 852602`
- <a id="orderids-patrol"></a> `static constant patrol = 851990`
- <a id="orderids-phaseshift"></a> `static constant phaseshift = 852514`
- <a id="orderids-phaseshiftinstant"></a> `static constant phaseshiftinstant = 852517`
- <a id="orderids-phaseshiftoff"></a> `static constant phaseshiftoff = 852516`
- <a id="orderids-phaseshifton"></a> `static constant phaseshifton = 852515`
- <a id="orderids-phoenixfire"></a> `static constant phoenixfire = 852481`
- <a id="orderids-phoenixmorph"></a> `static constant phoenixmorph = 852482`
- <a id="orderids-poisonarrows"></a> `static constant poisonarrows = 852255`
- <a id="orderids-poisonarrowstarg"></a> `static constant poisonarrowstarg = 852254`
- <a id="orderids-polymorph"></a> `static constant polymorph = 852074`
- <a id="orderids-possession"></a> `static constant possession = 852196`
- <a id="orderids-preservation"></a> `static constant preservation = 852568`
- <a id="orderids-purge"></a> `static constant purge = 852111`
- <a id="orderids-rainofchaos"></a> `static constant rainofchaos = 852237`
- <a id="orderids-rainoffire"></a> `static constant rainoffire = 852238`
- <a id="orderids-raisedead"></a> `static constant raisedead = 852197`
- <a id="orderids-raisedeadoff"></a> `static constant raisedeadoff = 852199`
- <a id="orderids-raisedeadon"></a> `static constant raisedeadon = 852198`
- <a id="orderids-ravenform"></a> `static constant ravenform = 852155`
- <a id="orderids-recharge"></a> `static constant recharge = 852157`
- <a id="orderids-rechargeoff"></a> `static constant rechargeoff = 852159`
- <a id="orderids-rechargeon"></a> `static constant rechargeon = 852158`
- <a id="orderids-rejuvination"></a> `static constant rejuvination = 852160`
- <a id="orderids-renew"></a> `static constant renew = 852161`
- <a id="orderids-renewoff"></a> `static constant renewoff = 852163`
- <a id="orderids-renewon"></a> `static constant renewon = 852162`
- <a id="orderids-repair"></a> `static constant repair = 852024`
- <a id="orderids-repairoff"></a> `static constant repairoff = 852026`
- <a id="orderids-repairon"></a> `static constant repairon = 852025`
- <a id="orderids-replenish"></a> `static constant replenish = 852542`
- <a id="orderids-replenishlife"></a> `static constant replenishlife = 852545`
- <a id="orderids-replenishlifeoff"></a> `static constant replenishlifeoff = 852547`
- <a id="orderids-replenishlifeon"></a> `static constant replenishlifeon = 852546`
- <a id="orderids-replenishmana"></a> `static constant replenishmana = 852548`
- <a id="orderids-replenishmanaoff"></a> `static constant replenishmanaoff = 852550`
- <a id="orderids-replenishmanaon"></a> `static constant replenishmanaon = 852549`
- <a id="orderids-replenishoff"></a> `static constant replenishoff = 852544`
- <a id="orderids-replenishon"></a> `static constant replenishon = 852543`
- <a id="orderids-request_hero"></a> `static constant request_hero = 852239`
- <a id="orderids-requestsacrifice"></a> `static constant requestsacrifice = 852201`
- <a id="orderids-restoration"></a> `static constant restoration = 852202`
- <a id="orderids-restorationoff"></a> `static constant restorationoff = 852204`
- <a id="orderids-restorationon"></a> `static constant restorationon = 852203`
- <a id="orderids-resumebuild"></a> `static constant resumebuild = 851999`
- <a id="orderids-resumeharvesting"></a> `static constant resumeharvesting = 852017`
- <a id="orderids-resurrection"></a> `static constant resurrection = 852094`
- <a id="orderids-returnresources"></a> `static constant returnresources = 852020`
- <a id="orderids-revenge"></a> `static constant revenge = 852241`
- <a id="orderids-revive"></a> `static constant revive = 852039`
- <a id="orderids-roar"></a> `static constant roar = 852164`
- <a id="orderids-robogoblin"></a> `static constant robogoblin = 852656`
- <a id="orderids-root"></a> `static constant root = 852165`
- <a id="orderids-sacrifice"></a> `static constant sacrifice = 852205`
- <a id="orderids-sanctuary"></a> `static constant sanctuary = 852569`
- <a id="orderids-scout"></a> `static constant scout = 852181`
- <a id="orderids-selfdestruct"></a> `static constant selfdestruct = 852040`
- <a id="orderids-selfdestructoff"></a> `static constant selfdestructoff = 852042`
- <a id="orderids-selfdestructon"></a> `static constant selfdestructon = 852041`
- <a id="orderids-sentinel"></a> `static constant sentinel = 852182`
- <a id="orderids-setrally"></a> `static constant setrally = 851980`
- <a id="orderids-shadowsight"></a> `static constant shadowsight = 852570`
- <a id="orderids-shadowstrike"></a> `static constant shadowstrike = 852527`
- <a id="orderids-shockwave"></a> `static constant shockwave = 852125`
- <a id="orderids-silence"></a> `static constant silence = 852592`
- <a id="orderids-sleep"></a> `static constant sleep = 852227`
- <a id="orderids-slow"></a> `static constant slow = 852075`
- <a id="orderids-slowoff"></a> `static constant slowoff = 852077`
- <a id="orderids-slowon"></a> `static constant slowon = 852076`
- <a id="orderids-soulburn"></a> `static constant soulburn = 852668`
- <a id="orderids-soulpreservation"></a> `static constant soulpreservation = 852242`
- <a id="orderids-spellshield"></a> `static constant spellshield = 852571`
- <a id="orderids-spellshieldaoe"></a> `static constant spellshieldaoe = 852572`
- <a id="orderids-spellsteal"></a> `static constant spellsteal = 852483`
- <a id="orderids-spellstealoff"></a> `static constant spellstealoff = 852485`
- <a id="orderids-spellstealon"></a> `static constant spellstealon = 852484`
- <a id="orderids-spies"></a> `static constant spies = 852235`
- <a id="orderids-spiritlink"></a> `static constant spiritlink = 852499`
- <a id="orderids-spiritofvengeance"></a> `static constant spiritofvengeance = 852528`
- <a id="orderids-spirittroll"></a> `static constant spirittroll = 852573`
- <a id="orderids-spiritwolf"></a> `static constant spiritwolf = 852126`
- <a id="orderids-stampede"></a> `static constant stampede = 852593`
- <a id="orderids-standdown"></a> `static constant standdown = 852113`
- <a id="orderids-starfall"></a> `static constant starfall = 852183`
- <a id="orderids-stasistrap"></a> `static constant stasistrap = 852114`
- <a id="orderids-steal"></a> `static constant steal = 852574`
- <a id="orderids-stomp"></a> `static constant stomp = 852127`
- <a id="orderids-stoneform"></a> `static constant stoneform = 852206`
- <a id="orderids-stop"></a> `static constant stop = 851972`
- <a id="orderids-submerge"></a> `static constant submerge = 852604`
- <a id="orderids-summonfactory"></a> `static constant summonfactory = 852658`
- <a id="orderids-summongrizzly"></a> `static constant summongrizzly = 852594`
- <a id="orderids-summonphoenix"></a> `static constant summonphoenix = 852489`
- <a id="orderids-summonquillbeast"></a> `static constant summonquillbeast = 852595`
- <a id="orderids-summonwareagle"></a> `static constant summonwareagle = 852596`
- <a id="orderids-tankdroppilot"></a> `static constant tankdroppilot = 852079`
- <a id="orderids-tankloadpilot"></a> `static constant tankloadpilot = 852080`
- <a id="orderids-tankpilot"></a> `static constant tankpilot = 852081`
- <a id="orderids-taunt"></a> `static constant taunt = 852520`
- <a id="orderids-thunderbolt"></a> `static constant thunderbolt = 852095`
- <a id="orderids-thunderclap"></a> `static constant thunderclap = 852096`
- <a id="orderids-tornado"></a> `static constant tornado = 852597`
- <a id="orderids-townbelloff"></a> `static constant townbelloff = 852083`
- <a id="orderids-townbellon"></a> `static constant townbellon = 852082`
- <a id="orderids-tranquility"></a> `static constant tranquility = 852184`
- <a id="orderids-transmute"></a> `static constant transmute = 852665`
- <a id="orderids-unavatar"></a> `static constant unavatar = 852087`
- <a id="orderids-unavengerform"></a> `static constant unavengerform = 852532`
- <a id="orderids-unbearform"></a> `static constant unbearform = 852139`
- <a id="orderids-unburrow"></a> `static constant unburrow = 852534`
- <a id="orderids-uncoldarrows"></a> `static constant uncoldarrows = 852245`
- <a id="orderids-uncorporealform"></a> `static constant uncorporealform = 852494`
- <a id="orderids-undeadbuild"></a> `static constant undeadbuild = 851998`
- <a id="orderids-undefend"></a> `static constant undefend = 852056`
- <a id="orderids-undivineshield"></a> `static constant undivineshield = 852091`
- <a id="orderids-unetherealform"></a> `static constant unetherealform = 852497`
- <a id="orderids-unflamingarrows"></a> `static constant unflamingarrows = 852175`
- <a id="orderids-unflamingattack"></a> `static constant unflamingattack = 852541`
- <a id="orderids-unholyfrenzy"></a> `static constant unholyfrenzy = 852209`
- <a id="orderids-unimmolation"></a> `static constant unimmolation = 852178`
- <a id="orderids-unload"></a> `static constant unload = 852047`
- <a id="orderids-unloadall"></a> `static constant unloadall = 852048`
- <a id="orderids-unloadallcorpses"></a> `static constant unloadallcorpses = 852054`
- <a id="orderids-unloadallinstant"></a> `static constant unloadallinstant = 852049`
- <a id="orderids-unpoisonarrows"></a> `static constant unpoisonarrows = 852256`
- <a id="orderids-unravenform"></a> `static constant unravenform = 852156`
- <a id="orderids-unrobogoblin"></a> `static constant unrobogoblin = 852657`
- <a id="orderids-unroot"></a> `static constant unroot = 852166`
- <a id="orderids-unstableconcoction"></a> `static constant unstableconcoction = 852500`
- <a id="orderids-unstoneform"></a> `static constant unstoneform = 852207`
- <a id="orderids-unsubmerge"></a> `static constant unsubmerge = 852605`
- <a id="orderids-unsummon"></a> `static constant unsummon = 852210`
- <a id="orderids-unwindwalk"></a> `static constant unwindwalk = 852130`
- <a id="orderids-vengeance"></a> `static constant vengeance = 852521`
- <a id="orderids-vengeanceinstant"></a> `static constant vengeanceinstant = 852524`
- <a id="orderids-vengeanceoff"></a> `static constant vengeanceoff = 852523`
- <a id="orderids-vengeanceon"></a> `static constant vengeanceon = 852522`
- <a id="orderids-volcano"></a> `static constant volcano = 852669`
- <a id="orderids-voodoo"></a> `static constant voodoo = 852503`
- <a id="orderids-ward"></a> `static constant ward = 852504`
- <a id="orderids-waterelemental"></a> `static constant waterelemental = 852097`
- <a id="orderids-wateryminion"></a> `static constant wateryminion = 852598`
- <a id="orderids-web"></a> `static constant web = 852211`
- <a id="orderids-weboff"></a> `static constant weboff = 852213`
- <a id="orderids-webon"></a> `static constant webon = 852212`
- <a id="orderids-whirlwind"></a> `static constant whirlwind = 852128`
- <a id="orderids-windwalk"></a> `static constant windwalk = 852129`
- <a id="orderids-wispharvest"></a> `static constant wispharvest = 852214`

### Orders

```wurst
public class Orders extends OrderIds
```
