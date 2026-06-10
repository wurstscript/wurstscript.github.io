---
title: LastOrder
layout: stdlibref
category: event
categoryLabel: Events
tags:
  - event
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/LastOrder.wurst'
generated: true
---

If you import this package in any of your packages, each order
any unit makes will be recorded and up to ORDERS_TO_HOLD will be saved.
You can access these old orders and reissue them using .getLastOrder()

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/event/LastOrder.wurst)**

## Classes

### Order

```wurst
public class Order
```

**Members:**

- `construct(unit ordered, int orderId, OrderType ordtype, widget target, vec2 targetPos)`
- `issue() returns boolean`
  Reissues this order on the unit that originally received the order.
  		If you want the reissued order to be recorded as well,
  		in a response to another order, i.e. chained, you need to wrap
  		it inside using a nulltimer:
  
  			let ordr = caster.getLastOrder().prev
  			nullTimer() ->
  				ordr.issue()
- `copy() returns Order`
  Use this to copy this order to apply it to another unit.
  		The copy must be destroyed manually.

## Enums

### OrderType

```wurst
public enum OrderType
```

**Values:** `TARGET`, `POINT`, `IMMEDIATE`

## Extension Functions

### unit.clearLastOrders

```wurst
public function unit.clearLastOrders()
```

Clears all recorded orders for this unit

### unit.getLastOrder

```wurst
public function unit.getLastOrder() returns Order
```

Returns the lasz recorded order for this unit.
	To access further back orders, use .prev

### unit.abortOrder

```wurst
public function unit.abortOrder() returns boolean
```

## Constants

### ORDERS_TO_HOLD

```wurst
constant ORDERS_TO_HOLD = 3
```

> 🔧 **Configurable.** Override it in your map's config package.

How many past orders to hold.
	Should be at least 2
