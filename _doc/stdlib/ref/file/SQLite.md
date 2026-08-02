---
title: SQLite
layout: stdlibref
category: file
categoryLabel: File & Network
tags:
  - file
source: 'https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/SQLite.wurst'
generated: true
toc: sections
---

**[Source on GitHub](https://github.com/wurstscript/WurstStdlib2/blob/master/wurst/file/SQLite.wurst)**

## Classes

### SqlResult

```wurst
public class SqlResult
```

A row returned from a SELECT query. Access columns by index via col().

### SqliteDb

```wurst
public class SqliteDb
```

Wraps an SQLite database connection with convenience methods.

### SQL

```wurst
public class SQL
```

Singleton database access. Configure the path via SQL_DATABASE_PATH.

## Constants

### SQL_DATABASE_PATH

```wurst
public constant SQL_DATABASE_PATH = ":memory:"
```

> 🔧 **Configurable.** Override it in your map's config package.

Override this in your package to point at your project database.
