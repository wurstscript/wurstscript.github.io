---
title: Legacy Map Guide
excerpt: How to use Jass alongside Wurst
date: 2018-01-03
icon:
  type: fa
  name: fa-puzzle-piece
color: blue
author: Frotty
layout: doc
---

{: .answer}
*&nbsp;*{: .fa .fa-exclamation-circle} This guide expects the reader to know map development with Jass.

## Welcome

This guide will explain how to use regular Jass (or GUI, which is translated to Jass) and vJass resources next to Wurst.
This guide will **not** explain how to convert (v)Jass to Wurst.

## Motivation

There are many different cases in which users might want to use legacy resources in Wurst projects, for example:
- Using existing (v)Jass resources without converting them to Wurst
- Using Wurst on an existing legacy map without hassle nor losing existing code
- Making adjustments to maps to which the source does not exist
- Maintaining legacy maps with Jurst instead of performing a complete re-write

{: .answer}
*&nbsp;*{: .fa .fa-exclamation-circle} However, it is strongly advised to only do this for legacy maps. New projects should be developed in Wurst only.

## Compiling with legacy code

### Jass

If you use GUI or vanilla Jass in your map using the trigger editor, the integration should be seamless.
Saving your map using the WorldEditor will output your GUI or Jass code into the map itself.
The compiler then extracts that script when performing the **runmap** command and merges it with the generated Wurst code.

### vJass and others

To prevent any confusion: __Wurst does not support vJass directly!__ and it never will.
You are required to run JassHelper (or any other preprocessor) yourself and then pass the generated Jass to wurst.
Either by saving inside an Editor with Jasshelper (JNGP, WEX) or manually including JassHelper into your buildchain.
Your only other solution is to convert your vJass to Jurst, which will require some manual code adjustments.

If you use such a tool like JNGP or WEX that automatically injects the modified script into the map, wurst will extract the generated jass code from the map and use it.
This is the same as with using regular Jass explained above, however it prohibits saving in the vanilla WorldEditor,
since it will overwrite the map's script.

## Using legacy code within wurst

In rare cases it might be desirable to use legacy code from within wurst code without errors while also receiving benefits like autocomplete
and jumping to declarations.
To do this you must extract the war3map.j file from your legacy map and place it into the **wurst/** folder inside your project.

![](/assets/images/legacy/war3map.j.png){: .img-responsive .img-rounded}

This file as __all .j files will not be autmatically reconciled__. This means wurst will use a cached version and not detect errors nor take changes into account unless you clean your workspace via `F1 -> clean`.
Also, if you make changes to the war3map.j and want them applied to the map, you have to add the RunArg **-noExtractMapScript**
to your wurst_run.args file, which will prevent the script extraction from the map and use the provided war3map.j inside the wurst folder instead.

![](/assets/images/legacy/uselegacycode.png){: .img-responsive .img-rounded}

## Jurst dialect

Jurst is a dialect of Wurst, which has the same features as Wurst, but with a Syntax similar to vJass. You can use Jurst to adapt vJass code, but there are still a few manual steps involved, because of the difference in supported features.
Jurst also allows for parsing of regular Jass code, making it a less strict mix of Jass and Wurst.
Take a look at these following examples, which all compile:

```wurst
library LooksLikeVjass initializer ini
    private function ini takes nothing returns nothing
        local trigger t = CreateTrigger()
        t = null
    endfunction
endlibrary
```
and

```wurst
package NearlyTheSameAsWurst
    function act()
        print(GetTriggerUnit().getName() + " died.")
    end

    init
        CreateTrigger()..registerAnyUnitEvent(EVENT_PLAYER_UNIT_DEATH)
                       ..addAction(function act)
    end

// Note: "end" intentionally not present here.
```

As you can see, Jurst is able to access wurst code including packages from the wurst standard library, such as print. However, you should not try to access Jurst (or jass/vjass) code from Wurst packages.


