---
title: Wurstunit
layout: stdlibref
category: _wurst
categoryLabel: Core Language
tags:
  - wurst
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/Wurstunit.wurst'
generated: true
curated: /stdlib/wurstunit
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_wurst/Wurstunit.wurst)**

> 📖 Read the **[detailed guide](/stdlib/wurstunit)** for hand-written examples and background.

## Functions

### test

```wurst
public function test()
```

Functions annotated with @Test can be executed as unit tests.

### println

```wurst
public function println(string msg)
```

### testFail

```wurst
public function testFail(string msg)
```

### testSuccess

```wurst
public function testSuccess()
```

### assertTrue

```wurst
public function assertTrue(boolean b)
```

Asserts that this booleans is true. If it is not, an error is thrown.

### assertTrue

```wurst
public function assertTrue(boolean b, string msg)
```

Asserts that this booleans is true. If it is not, an error is thrown with the supplied message.

### assertNotNull

```wurst
public function assertNotNull<T>(T t)
```

Asserts that the reference t is not null

## Extension Functions

### int.assertEquals

```wurst
public function int.assertEquals(int expected)
```

Asserts that two ints are equal. If they are not, an error is thrown with a message.

### int.assertGreaterThan

```wurst
public function int.assertGreaterThan(int less)
```

Asserts that the passed int is greater than the parameter. If they are not, an error is thrown with a message.

### int.assertGreaterThanOrEqual

```wurst
public function int.assertGreaterThanOrEqual(int less)
```

Asserts that the passed int is greater than the parameter. If they are not, an error is thrown with a message.

### int.assertLessThan

```wurst
public function int.assertLessThan(int greater)
```

Asserts that the passed int is greater than the parameter. If they are not, an error is thrown with a message.

### int.assertLessThanOrEqual

```wurst
public function int.assertLessThanOrEqual(int greater)
```

Asserts that the passed int is greater than the parameter. If they are not, an error is thrown with a message.

### string.assertEquals

```wurst
public function string.assertEquals(string expected)
```

Asserts that two strings are equal. If they are not, an error is thrown with a message.

### real.assertEquals

```wurst
public function real.assertEquals(real expected)
```

Asserts that two reals are equal. If they are not, an error is thrown with a message.

### real.assertGreaterThan

```wurst
public function real.assertGreaterThan(real less)
```

Asserts that the passed real is greater than the parameter. If they are not, an error is thrown with a message.

### real.assertGreaterThanOrEqual

```wurst
public function real.assertGreaterThanOrEqual(real less)
```

Asserts that the passed real is greater than the parameter. If they are not, an error is thrown with a message.

### real.assertLessThan

```wurst
public function real.assertLessThan(real greater)
```

Asserts that the passed real is greater than the parameter. If they are not, an error is thrown with a message.

### real.assertLessThanOrEqual

```wurst
public function real.assertLessThanOrEqual(real greater)
```

Asserts that the passed real is greater than the parameter. If they are not, an error is thrown with a message.

### real.assertEquals

```wurst
public function real.assertEquals(real expected, real delta)
```

Asserts that two reals are equal to within a positive delta. If they are not, an error is thrown
with a message.

### boolean.assertEquals

```wurst
public function boolean.assertEquals(boolean expected)
```

Asserts that two booleans are equal. If they are not, an error is thrown with a message.

### boolean.assertTrue

```wurst
public function boolean.assertTrue()
```

Asserts that this booleans is true. If it is not, an error is thrown with a message.

### boolean.assertFalse

```wurst
public function boolean.assertFalse()
```

Asserts that this booleans is false. If it is not, an error is thrown with a message.
