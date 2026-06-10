---
title: BigNum
layout: stdlibref
category: math
categoryLabel: Math
tags:
  - math
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/BigNum.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/math/BigNum.wurst)**

## Classes

### BigNum_l

```wurst
public class BigNum_l
```

**Members:**

- `construct()`
- `clean() returns boolean`
- `divSmall (int base, int denom) returns int`

### BigNum

```wurst
public class BigNum
```

**Members:**

- `construct(int base)`
- `isZero() returns boolean`
- `clean()`
- `addSmall(int pcarry)`
- `mulSmall(int x)`
- `divSmall(int denom) returns int`
- `lastDigit() returns int`
- `dump() returns string`

## Functions

### log

```wurst
public function log(real py, real pbase) returns real
```
