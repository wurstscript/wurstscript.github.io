---
title: StandardTextTags
layout: stdlibref
category: util
categoryLabel: Utilities
tags:
  - util
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/StandardTextTags.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/util/StandardTextTags.wurst)**

## Functions

### standardTextTag

```wurst
public function standardTextTag() returns texttag
```

Creates a text tag with default values matching standard built-in text tags

### standardTextTag

```wurst
public function standardTextTag(vec2 pos, string text) returns texttag
```

### createCriticalStrikeTextTag

```wurst
public function createCriticalStrikeTextTag(unit u, int damage) returns texttag
```

Create a texttag that matches the style of the standard warcraft 3 Critical
	Strike ability.

### createGoldBountyTextTag

```wurst
public function createGoldBountyTextTag(unit u, int bounty, player killer) returns texttag
```

Create a texttag that matches the style of the standard warcraft 3 gold
	bounty.

### createGoldBountyTextTag

```wurst
public function createGoldBountyTextTag(unit u, int bounty) returns texttag
```

Create a texttag that matches the style of the standard warcraft 3 gold
	bounty.

### createLumberBountyTextTag

```wurst
public function createLumberBountyTextTag(unit u, int bounty, player killer) returns texttag
```

Create a texttag that matches the style of the standard warcraft 3 lumber
	bounty.

### createLumberBountyTextTag

```wurst
public function createLumberBountyTextTag(unit u, int bounty) returns texttag
```

Create a texttag that matches the style of the standard warcraft 3 lumber
	bounty.

### createManaBurnTextTag

```wurst
public function createManaBurnTextTag(unit u, int damage) returns texttag
```

Create a texttag that matches the style of the standard warcraft 3 Mana Burn
	ability.

### createMissTextTag

```wurst
public function createMissTextTag(unit u) returns texttag
```

Create a texttag that matches the style of the standard warcraft 3 attack
	miss indication.

### createShadowStrikeTextTag

```wurst
public function createShadowStrikeTextTag(unit u, int damage, bool isInitialDamage) returns texttag
```

Create a texttag that matches the style of the standard warcraft 3 Shadow
	Strike ability.

## Extension Functions

### texttag.setScaledText

```wurst
public function texttag.setScaledText(string text, real scale)
```

Set the text with the standard font size scaled by a factor.

### texttag.setText

```wurst
public function texttag.setText(string text)
```

Set the text with the standard font size.
