---
title: Execute
---

# Execute Package

The `Execute` package is designed as an easy way to reset the OP limit. The OP limit in Warcraft 3 JASS is an inherent limit of subsequent operations in a thread. If the limit is reached, execution will stop. This package provides essential tools to handle expensive computations that might otherwise crash a thread due to exceeding the operation limit.

## Basic Usage

Use `execute` to simply start a new thread, bypassing the oplimit. The execution is synchronous, meaning the code after `execute` will be executed after the code inside `execute` has been successfully executed.

```wurst
import Execute

init
  execute() ->
    print("OP limit now reset")
```

## Try Example

`try()` works like `execute()`, but catches errors and returns `false` if the callback fails.

### Return Value

- `true`: If the callback executes successfully.
- `false`: If an error occured.

### Example

```wurst
let result = try() ->
  print("hello")
if not result
	print("Error occured")
```

### executeWhile

```wurst
executeWhile(50, () -> player.hasUnits(), () -> begin
	// Perform action for each iteration
end)
```
