---
title: Quest
layout: stdlibref
category: _handles
categoryLabel: Handle Wrappers
tags:
  - handles
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Quest.wurst'
generated: true
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/_handles/Quest.wurst)**

## Classes

### Quest

```wurst
public class Quest
```

**Members:**

- `construct(boolean required)`
- `setTitle(string title)`
- `setDescription(string title)`
- `setIcon(string path)`
- `isEnabled() returns boolean`
- `isCompleted() returns boolean`
- `getState() returns QuestState`
- `setState(QuestState state)`
- `addObjective(string text) returns QuestItem`

## Enums

### QuestState

```wurst
public enum QuestState
```

**Values:** `FAILED`, `COMPLETED`, `UNDISCOVERED`, `DISCOVERED`

## Functions

### flashQuestDialogButton

```wurst
public function flashQuestDialogButton()
```

## Extension Functions

### quest.setRequired

```wurst
public function quest.setRequired(boolean req)
```

### quest.setTitle

```wurst
public function quest.setTitle(string title)
```

### quest.setDescription

```wurst
public function quest.setDescription(string text)
```

### quest.setIcon

```wurst
public function quest.setIcon(string path)
```

### quest.completed

```wurst
public function quest.completed(boolean b)
```

### quest.failed

```wurst
public function quest.failed(boolean b)
```

### quest.discovered

```wurst
public function quest.discovered(boolean b)
```

### quest.isEnabled

```wurst
public function quest.isEnabled() returns boolean
```

### quest.isCompleted

```wurst
public function quest.isCompleted() returns boolean
```

### quest.remove

```wurst
public function quest.remove()
```

### quest.setEnabled

```wurst
public function quest.setEnabled(boolean enabled)
```
