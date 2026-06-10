---
title: ObjEditingCommons
layout: stdlibref
category: objediting
categoryLabel: Object Editing
tags:
  - objediting
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/ObjEditingCommons.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/objediting/ObjEditingCommons.wurst)**

## Enums

### Race

```wurst
public enum Race
```

**Values:** `Commoner`, `Creeps`, `Critters`, `Demon`, `Human`, `Naga`, `Nightelf`, `Orc`, `Other`, `Undead`, `Unknown`

### AttacksEnabled

```wurst
public enum AttacksEnabled
```

**Values:** `None`, `AttackOneOnly`, `AttackTwoOnly`, `Both`

### MovementType

```wurst
public enum MovementType
```

**Values:** `None`, `Foot`, `Horse`, `Fly`, `Hover`, `Float`, `Amphipic`

### ArmorType

```wurst
public enum ArmorType
```

**Values:** `Small`, `Medium`, `Large`, `Fortified`, `Normal`, `Hero`, `Divine`, `Unarmored`

### AttackType

```wurst
public enum AttackType
```

**Values:** `Unknown`, `Normal`, `Pierce`, `Siege`, `Spells`, `Chaos`, `Magic`, `Hero`

### WeaponSound

```wurst
public enum WeaponSound
```

**Values:** `Nothing`, `AxeMediumChop`, `MetalHeavyBash`, `MetalHeavyChop`, `MetalHeavySlice`, `MetalLightChop`, `MetalLightSlice`, `MetalMediumBash`, `MetalMediumChop`, `MetalMediumSlice`, `RockHeavyBash`, `WoodHeavyBash`, `WoodLightBash`, `WoodMediumBash`

### ArmorSoundType

```wurst
public enum ArmorSoundType
```

**Values:** `Ethereal`, `Metal`, `Flesh`, `Stone`, `Wood`

### WeaponType

```wurst
public enum WeaponType
```

**Values:** `None`, `Normal`, `Instant`, `Artillery`, `ArtilleryLine`, `Missile`, `MissileSplash`, `MissileBounce`, `MissileLine`

### UnitTargetType

```wurst
public enum UnitTargetType
```

**Values:** `Air`, `Alive`, `Allies`, `Ancient`, `Dead`, `Debris`, `Decoration`, `Enemies`, `Friend`, `Ground`, `Hero`, `Invulnerable`, `Item`, `Mechanical`, `Neutral`, `NonAncient`, `None`, `NonHero`, `NonSapper`, `NotSelf`, `Organic`, `PlayerUnits`, `Sapper`, `Self`, `Structure`, `Terrain`, `Tree`, `Vulnerable`, `Wall`, `Ward`

## Extension Functions

### Race.toObjectString

```wurst
public function Race.toObjectString() returns string
```

### AttacksEnabled.toObjectInt

```wurst
public function AttacksEnabled.toObjectInt() returns int
```

### UnitTargetType.toObjectString

```wurst
public function UnitTargetType.toObjectString() returns string
```

### WeaponType.toObjectString

```wurst
public function WeaponType.toObjectString() returns string
```

### WeaponSound.toString

```wurst
public function WeaponSound.toString() returns string
```

### ArmorSoundType.toString

```wurst
public function ArmorSoundType.toString() returns string
```

### ArmorType.toObjectString

```wurst
public function ArmorType.toObjectString() returns string
```

### AttackType.toObjectString

```wurst
public function AttackType.toObjectString() returns string
```

### MovementType.toObjectString

```wurst
public function MovementType.toObjectString() returns string
```
