---
title: API Reference
layout: doc
permalink: /stdlib/ref/
---

Auto-generated reference for every package in the [Wurst standard library](https://github.com/wurstscript/WurstStdlib2). For orientation and guidance on _which_ package to use, see the [standard library overview](/stdlib.html).

## Object Editing

- [AbilityObjEditing](/stdlib/ref/objediting/AbilityObjEditing.html)
- [BuffObjEditing](/stdlib/ref/objediting/BuffObjEditing.html): You should use 'createBuffObject' inside compiletime expressions
- [ChannelAbilityPreset](/stdlib/ref/objediting/ChannelAbilityPreset.html)
- [DestructableObjEditing](/stdlib/ref/objediting/DestructableObjEditing.html)
- [DoodadObjEditing](/stdlib/ref/objediting/DoodadObjEditing.html)
- [HeroPreset](/stdlib/ref/objediting/HeroPreset.html)
- [ItemObjEditing](/stdlib/ref/objediting/ItemObjEditing.html)
- [ObjectIdGenerator](/stdlib/ref/objediting/ObjectIdGenerator.html)
- [ObjectIds](/stdlib/ref/objediting/ObjectIds.html)
- [ObjEditingCommons](/stdlib/ref/objediting/ObjEditingCommons.html)
- [ObjEditingNatives](/stdlib/ref/objediting/ObjEditingNatives.html)
- [OrderStringFactory](/stdlib/ref/objediting/OrderStringFactory.html)
- [TargetsAllowed](/stdlib/ref/objediting/TargetsAllowed.html)
- [UnitObjEditing](/stdlib/ref/objediting/UnitObjEditing.html)
- [UpgradeObjEditing](/stdlib/ref/objediting/UpgradeObjEditing.html): Use this class to create upgrade definitions.

## Data Structures

- [ArrayList](/stdlib/ref/data/ArrayList.html): High-performance array-based list using static shared storage per type.
- [BitSet](/stdlib/ref/data/BitSet.html)
- [HashList](/stdlib/ref/data/HashList.html): HashLists are used if you require quick contains operations
- [HashMap](/stdlib/ref/data/HashMap.html): Generic Table Wrapper
- [HashSet](/stdlib/ref/data/HashSet.html): Generic set implementation
- [LinkedList](/stdlib/ref/data/LinkedList.html): Doubly-linked list implementation that implements all common list, stack and queue operations.
- [LinkedListModule](/stdlib/ref/data/LinkedListModule.html): Turns a class into a linked list where each instance knows it's previous
- [Table](/stdlib/ref/data/Table.html): Wraps a hashtable to provide single key tables

## Closures

- [ClosureEvents](/stdlib/ref/closures/ClosureEvents.html): This package is a comfort wrapper around wc3 events,
- [ClosureForGroups](/stdlib/ref/closures/ClosureForGroups.html): Executes the given closure for every unit in this group,
- [ClosureFrames](/stdlib/ref/closures/ClosureFrames.html)
- [ClosureKeyPresses](/stdlib/ref/closures/ClosureKeyPresses.html)
- [ClosureTimers](/stdlib/ref/closures/ClosureTimers.html): Execute an action after a certain time.
- [Execute](/stdlib/ref/closures/Execute.html): This package exposes a single function execute(),

## Events

- [DamageEvent](/stdlib/ref/event/DamageEvent.html): This package provides a light-weight damage detection system with priority-ordered listeners.
- [EventHelper](/stdlib/ref/event/EventHelper.html): This class exposes all Getters and Setters for trigger events.
- [LastOrder](/stdlib/ref/event/LastOrder.html): If you import this package in any of your packages, each order
- [OnUnitEnterLeave](/stdlib/ref/event/OnUnitEnterLeave.html)
- [RegisterEvents](/stdlib/ref/event/RegisterEvents.html)

## Dummies

- [DummyCaster](/stdlib/ref/dummy/DummyCaster.html): Dummy casters are commonly used in custom spells to cast abilities dynamically onto targets or points.
- [DummyDamage](/stdlib/ref/dummy/DummyDamage.html): DummyDamage is used when you want to inflict damage from a certain player,
- [DummyRecycler](/stdlib/ref/dummy/DummyRecycler.html): Id of the root ability
- [Fx](/stdlib/ref/dummy/Fx.html): *
- [Fx2](/stdlib/ref/dummy/Fx2.html)
- [InstantDummyCaster](/stdlib/ref/dummy/InstantDummyCaster.html): Dummy caster for casting instant spells.

## Math

- [Angle](/stdlib/ref/math/Angle.html)
- [BigNum](/stdlib/ref/math/BigNum.html)
- [Bitwise](/stdlib/ref/math/Bitwise.html): A tuple containing 4 bytes comprising a 4-byte integer.
- [BitwiseInit](/stdlib/ref/math/BitwiseInit.html)
- [Interpolation](/stdlib/ref/math/Interpolation.html): Linear Interpolation
- [Maths](/stdlib/ref/math/Maths.html): Returns the length of the hypotenuse of a right-angle triangle with the
- [Matrices](/stdlib/ref/math/Matrices.html): Matrix 2x2
- [Quaternion](/stdlib/ref/math/Quaternion.html): Linear interpolation.
- [Raycast](/stdlib/ref/math/Raycast.html): An infinite 2D ray
- [Vectors](/stdlib/ref/math/Vectors.html): A vector is a geometric object that has a length and direction.

## File & Network

- [Base64](/stdlib/ref/file/Base64.html): Specifies how many characters to encode per a single `execute()` call.
- [ByteBuffer](/stdlib/ref/file/ByteBuffer.html)
- [ChunkedString](/stdlib/ref/file/ChunkedString.html)
- [FileIO](/stdlib/ref/file/FileIO.html)
- [GameStatus](/stdlib/ref/file/GameStatus.html)
- [MultibyteDiagnostics](/stdlib/ref/file/MultibyteDiagnostics.html)
- [SaveLoadData](/stdlib/ref/file/SaveLoadData.html): Asynchronously loads the data from the file of the given player
- [Serializable](/stdlib/ref/file/Serializable.html)
- [SyncSimple](/stdlib/ref/file/SyncSimple.html)

## Utilities

- [Board](/stdlib/ref/util/Board.html): This Board library allows you to create a simple multi board with dynamic cell values.
- [Cinematic](/stdlib/ref/util/Cinematic.html): Create a cinematic by composing cinematic sequences
- [Colors](/stdlib/ref/util/Colors.html): Mixes two colors, s would be a number 0<=s<=1 that determines
- [DialogBox](/stdlib/ref/util/DialogBox.html): DialogBox lets you create dialogs more easily and associate its buttons with closures.
- [EffectUtils](/stdlib/ref/util/EffectUtils.html)
- [GameTimer](/stdlib/ref/util/GameTimer.html)
- [GroupUtils](/stdlib/ref/util/GroupUtils.html): The max number of recyclable groups.
- [Knockback3](/stdlib/ref/util/Knockback3.html): Use the `Knockback3.add(..)` functions to apply 3D knockback to units.
- [MapBounds](/stdlib/ref/util/MapBounds.html)
- [Preloader](/stdlib/ref/util/Preloader.html)
- [Printing](/stdlib/ref/util/Printing.html)
- [SafetyChecks](/stdlib/ref/util/SafetyChecks.html): Enables or disables various safety checks in miscellaneous libraries in Wurst.
- [Simulate3dSound](/stdlib/ref/util/Simulate3dSound.html)
- [SoundUtils](/stdlib/ref/util/SoundUtils.html)
- [StandardTextTags](/stdlib/ref/util/StandardTextTags.html)
- [StringUtils](/stdlib/ref/util/StringUtils.html): Custom Function which can split strings and runs callback for each string.
- [TerrainUtils](/stdlib/ref/util/TerrainUtils.html)
- [Time](/stdlib/ref/util/Time.html): Type-safe wrappers to distinguish durations (an amount of time) from instants (a point in time), and the valid ways
- [TimerUtils](/stdlib/ref/util/TimerUtils.html): Get a new timer.
- [UnitIndexer](/stdlib/ref/util/UnitIndexer.html): Returns the int index of this unit.

## Handle Wrappers

- [_Handles](/stdlib/ref/_handles/_Handles.html)
- [_Primitives](/stdlib/ref/_handles/_Primitives.html)
- [Ability](/stdlib/ref/_handles/Ability.html)
- [Boolean](/stdlib/ref/_handles/Boolean.html)
- [Boolexpr](/stdlib/ref/_handles/Boolexpr.html)
- [Camera](/stdlib/ref/_handles/Camera.html): Pans the camera to pos.x, pos.y and absolute height pos.z
- [CommonNativeExtensions](/stdlib/ref/_handles/CommonNativeExtensions.html)
- [Destructable](/stdlib/ref/_handles/Destructable.html)
- [Dialog](/stdlib/ref/_handles/Dialog.html): Dialogs are big dialog boxes at the center of the screen.
- [Effect](/stdlib/ref/_handles/Effect.html): Change the orientation of the special effect.
- [Fogmodifier](/stdlib/ref/_handles/Fogmodifier.html)
- [Force](/stdlib/ref/_handles/Force.html)
- [Framehandle](/stdlib/ref/_handles/Framehandle.html): Returns the origin frame of the given type.
- [GameCache](/stdlib/ref/_handles/GameCache.html)
- [Group](/stdlib/ref/_handles/Group.html): Use this group for your non-nested group enum calls
- [Hashtable](/stdlib/ref/_handles/Hashtable.html)
- [Image](/stdlib/ref/_handles/Image.html): ImageLayer influences the order in which the images are drawn above one another
- [Integer](/stdlib/ref/_handles/Integer.html)
- [Item](/stdlib/ref/_handles/Item.html): Updates the item's name, tooltip, extendedtooltip, description or icon for the specific player.
- [Lightning](/stdlib/ref/_handles/Lightning.html)
- [Multiboard](/stdlib/ref/_handles/Multiboard.html)
- [Player](/stdlib/ref/_handles/Player.html)
- [Playercolor](/stdlib/ref/_handles/Playercolor.html)
- [Quest](/stdlib/ref/_handles/Quest.html)
- [QuestItem](/stdlib/ref/_handles/QuestItem.html)
- [Real](/stdlib/ref/_handles/Real.html): The arctangent function with two arguments.
- [Rect](/stdlib/ref/_handles/Rect.html)
- [Reference](/stdlib/ref/_handles/Reference.html): A simple wrapper class which contains a reference to a value of the given type.
- [Region](/stdlib/ref/_handles/Region.html)
- [Sound](/stdlib/ref/_handles/Sound.html): Returns sound length in milliseconds.
- [String](/stdlib/ref/_handles/String.html): A SubString slice that cuts a multibyte (non-latin) character in half does not
- [Texttag](/stdlib/ref/_handles/Texttag.html)
- [Timer](/stdlib/ref/_handles/Timer.html)
- [TimerDialog](/stdlib/ref/_handles/TimerDialog.html): Multiplies the timer's tick rate and remaining time, so that the overall elapsed time stays the same.
- [Trigger](/stdlib/ref/_handles/Trigger.html): Metakey is an integer based native parameter which is used as a bitfield.
- [Unit](/stdlib/ref/_handles/Unit.html): Sets the unit's position using the SetUnitPosition native.
- [Weather](/stdlib/ref/_handles/Weather.html)
- [Widget](/stdlib/ref/_handles/Widget.html)

## Core Language

- [Abilities](/stdlib/ref/_wurst/Abilities.html)
- [AbilityIds](/stdlib/ref/_wurst/AbilityIds.html)
- [Annotations](/stdlib/ref/_wurst/Annotations.html)
- [Assets](/stdlib/ref/_wurst/Assets.html)
- [AttachmentPoints](/stdlib/ref/_wurst/AttachmentPoints.html): Class that contains every known attachmentpoint in game
- [Basics](/stdlib/ref/_wurst/Basics.html)
- [BuffIds](/stdlib/ref/_wurst/BuffIds.html)
- [Buildings](/stdlib/ref/_wurst/Buildings.html)
- [Doodads](/stdlib/ref/_wurst/Doodads.html)
- [Environment](/stdlib/ref/_wurst/Environment.html)
- [ErrorHandling](/stdlib/ref/_wurst/ErrorHandling.html): error handing function.
- [FramehandleNames](/stdlib/ref/_wurst/FramehandleNames.html): These default frames templates can be created with createFrame(..) [BlzCreateFrame]
- [Icons](/stdlib/ref/_wurst/Icons.html)
- [ItemIds](/stdlib/ref/_wurst/ItemIds.html)
- [MagicFunctions](/stdlib/ref/_wurst/MagicFunctions.html): builtin magic function.
- [Objects](/stdlib/ref/_wurst/Objects.html)
- [OrderIds](/stdlib/ref/_wurst/OrderIds.html)
- [Orders](/stdlib/ref/_wurst/Orders.html)
- [PathingMaps](/stdlib/ref/_wurst/PathingMaps.html)
- [Reflection](/stdlib/ref/_wurst/Reflection.html): This package is designed for debugging.
- [Sounds](/stdlib/ref/_wurst/Sounds.html)
- [Soundsets](/stdlib/ref/_wurst/Soundsets.html)
- [Textures](/stdlib/ref/_wurst/Textures.html)
- [Tiles](/stdlib/ref/_wurst/Tiles.html)
- [TypeCasting](/stdlib/ref/_wurst/TypeCasting.html)
- [UI](/stdlib/ref/_wurst/UI.html)
- [UnitAnimations](/stdlib/ref/_wurst/UnitAnimations.html)
- [UnitIds](/stdlib/ref/_wurst/UnitIds.html)
- [Units](/stdlib/ref/_wurst/Units.html)
- [WeatherEffects](/stdlib/ref/_wurst/WeatherEffects.html)
- [Wurstunit](/stdlib/ref/_wurst/Wurstunit.html)

## Root

- [Wurst](/stdlib/ref/root/Wurst.html)
