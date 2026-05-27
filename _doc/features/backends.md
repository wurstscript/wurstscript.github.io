---
title: Jass and Lua Backends
excerpt: Write once, compile to Jass or Lua with identical runtime behavior.
date: 2026-04-10
icon:
  type: fa
  name: fa-exchange
color: orange
author: Frotty
layout: doc
redirect_from:
  - /tutorials/lua-jass-shim.html
---

WurstScript compiles to either **Jass** or **Lua**. The goal is to write code once and have it behave identically on both backends — no conditional code paths, no per-backend workarounds in user space.

## Choosing a Backend

Set `compilationTarget` in your `wurst.build` file:

```yaml
compilationTarget: lua
```

Jass is the default and requires no configuration. Lua targets Reforged and is required if you want to run on Battle.net with modern clients.

## Why They Differ

Jass and Lua have different runtime semantics in several areas. The most common differences that affect real maps:

**Null handles.** In Jass, calling a native with a `null` argument is valid — the function returns a type-appropriate zero value. In plain Lua, the same call raises a nil error and crashes.

**Handle IDs.** `GetHandleId` in Jass returns stable integers across a session, commonly used as table keys or for comparisons. In Lua, the equivalent is not stable across sessions and is a known cause of desyncs.

**Uninitialized variables.** Jass initializes all variables to zero values (`0`, `0.0`, `false`, `""`, `null`). Lua leaves uninitialized variables as `nil`, causing type errors when first used.

## The Jass Shim Pass

To close these gaps, the compiler applies a dedicated **Jass shim pass** to all generated Lua code. This pass inserts targeted emulation so that Lua behaves like Jass for the cases above — without any changes needed in user code.

### Null-safe natives

Null handle arguments return the same defaults as Jass instead of erroring:

| Expression | Jass | Plain Lua | Shimmed Lua |
|---|---|---|---|
| `GetUnitX(null)` | `0.0` | nil error | `0.0` |
| `GetUnitState(null, UNIT_STATE_LIFE)` | `0.0` | nil error | `0.0` |
| `IsUnitEnemy(null, null)` | `false` | nil error | `false` |
| `GetUnitName(null)` | `""` | nil error | `""` |
| `GetHandleId(null)` | `0` | nil error | `0` |

This applies across the native surface — integer, real, boolean, and string return types all fall back to their Jass defaults when called with null handles.

### Handle ID replacement

All `GetHandleId` usage is replaced by the compiler with a safe alternative that produces consistent, desync-free identifiers. This is transparent — the replacement behaves the same way as the Jass `GetHandleId` for the purposes code actually relies on.

### Uninitialized variable defaults

Wurst's static type system enforces initialization for most cases at compile time. The shim pass handles any remaining gaps at the generated code level so zero-value semantics are consistent between backends.

## Switching an Existing Map

Maps that run correctly on the Jass backend should run correctly on Lua after the shim pass. The typical process:

1. Set `compilationTarget: lua` in `wurst.build`.
2. Build and test.
3. Report any case where Jass and Lua behavior still diverges on the [WurstScript issue tracker](https://github.com/wurstscript/WurstScript/issues).

No changes to user Wurst code should be required for the cases described above.
