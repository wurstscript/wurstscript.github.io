---
title: Dummy Recycler
sections:
- Intro
- Recycling dummies
---

### Intro

Units in Warcraft III are heavy objects - `CreateUnit` and `SetUnitPosition` are some of the heaviest natives in Jass.
Creating many units at once can create laggs for players with weack machines, and steadily allocating units will make the RAM usage grow more quickly.
Therefore if we want to allocate a dummy unit to cast a spell or attach effects, we don't want that heavy operation, with all the additional events it may cause.

### Recycling dummies

Thus we use a recycler that uses the lowest number of units possible and doesn't remove them. Instead they are hidden and stored until needed again.
Packages like `DummyCaster` and `Fx` internally use `DummyReycler`.
Since turning a unit always has a delay, we store dummies according to their facing angle and retrieve a dummy facing closest to the desired angle.

```wurst
init
	let dummyUnit = DummyRecycler.get(ZERO2, 0 .fromDeg())
	dummyUnit.damageTarget(target, 100)
	DummyReycler.recycle(dummyUnit)
```

Do not remove or kill dummies, always use `DummyRecycler.recycle`. Note that dummies posess locust by default. This is not ment to be a generic unit recycler.
