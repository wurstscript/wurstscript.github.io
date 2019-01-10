---
title: Bitset
sections:
- Intro
- Usage
---

### Intro

A bitset is a set of smaller integers represented as one big one. Let's remind ourselves how the integer is represented in binary:

![](/assets/images/stdlib/bitset.png){: .img-responsive}

The picture illustrates how the final value is calculated from the powers of two. We can manipulate each bit by itself by adding and subtracting the particular power of two. Therefore the exponents can be respresented as a single bit inside the integer consisting of 32 bits, 31 of which are usable since one is used for the sign (- or +). This means that we can save a set of values 1 to 31 using just a single integer.

### Usage

Instead of saving and retrieving actual values, bitsets are usually used to save a bunch of booleans. In Wacraft III they can be found inside binary data e.g. for channel options. Those channel options are respectively represented as a bitset in the standard library, combined with an enum:

```wurst
public enum Option
	VISIBLE
	TARGETIMAGE
	PHYSICALSPELL
	UNIVERSALSPELL
	UNIQUECAST

public class ChannelAbilityPreset extends AbilityDefinitionIllidanChannel
	private bitset optionSet = bitset(0)

	function presetOption(Option opt, boolean flag)
		let pow = opt castTo int
		if optionSet.contains(pow)
			if not flag
				optionSet = optionSet.remove(pow)
		else if flag
			optionSet = optionSet.add(pow)

		presetOptions(lvl -> optionSet.val)

	function hasOption(Option option) returns boolean
		return optionSet.contains(option castTo int)
```
