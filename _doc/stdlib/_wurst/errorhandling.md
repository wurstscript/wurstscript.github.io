---
title: Error Handling
sections:
- Intro
- Repeating Errors
- Custom Errors
---

### Intro

As you should know, Wurst comes with the ability to inject stacktraces into your code, meaning you can see an execution trace of what happened before an error occured.
These errors happen on wurst intrinsic issues, such as out of memory or null pointer dereferences.
Stacktraces are controlled by the runarg `-stacktraces` which is the default.

![](/assets/images/blog/bestof9/stacktrace.png){: .img-responsive}

### Repeating Errors

The only additional logic in the `ErrorHandling` package is to prevent the same repeating error from spamming text messages for all players.
Error and stacktrace are only displayed upon the first occurance and any repeating errors with the same message will be ignored for the next `MUTE_ERROR_DURATION` seconds (default 60).

### Custom Errors

Emitting errors isn't exclusive to the compiler - it actually references the function `error` from this standard library package.
You can produce such errors yourself by calling the  `error` function in your code with an appropriate message.

```wurst
public function myAPI(unit target)
	if target == null
		error("Target may not be null")
```
