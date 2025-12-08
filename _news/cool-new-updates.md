---
title: Big Update
excerpt: Improved performance and usability.
date: 2025-11-19
image: /assets/images/news/cool.png
layout: newsarticle
author: Frotty
---

## Performance Improvements

Large Wurst projects have grown far beyond the scale the original compiler was built for. Many dependencies, heavy imports, and massive base-map files pushed compilation times up over the years. To keep WurstScript fast and future-proof, we’ve reworked performance across the entire pipeline.

Map files, imports, and generated object-data files are now cached and only rebuilt when needed. Our MPQ library also gained a new *uncompressed mode*, enabling much faster processing of large maps during development. The overall focus: minimize **warm compile times** to make iterative work feel instant.

---

## VSCode Extension Improvements

The updated VSCode extension reduces setup friction dramatically. It now takes care of installing and updating everything required to use Wurst:

* Downloads the compiler and the CLI tool (grill)
* Runs them with a bundled Java runtime
* Removes nearly all manual steps except adding the grill binary to your PATH

The extension also checks for compiler updates and prompts you directly, keeping your environment fresh without effort.

---

## Many Fixes & New-Generics Improvements

A long list of older issues has been resolved, and the new generics system received major hardening and extensions. For example, you can now define static attributes inside new-generic classes:

```wurst
public class ArrayList<T:>
    private static T array store
```

Each concrete type used for `T` receives its own static store, making it easy to build fully generic collections without the typecasts and size-limit quirks of the old generics system.

We added clear errors when mixing new and old generics, and plan to phase out the old system entirely once proper type-bound definitions are introduced.

