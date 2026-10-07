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

**Members:**

- `col(int index) returns string`
  Raw string value at column index. SQL NULL is returned as "" - use
         colIsNull() to distinguish a genuine NULL from an empty string.
- `colIsNull(int index) returns boolean`
  True if the column at index was SQL NULL. This is the only reliable way
         to tell NULL apart from an empty string, since col() returns "" for both.
- `colInt(int index) returns int`
  Column value parsed as int.
- `colReal(int index) returns real`
  Column value parsed as real.
- `colBool(int index) returns boolean`
  Column value as boolean ("1" or "true", case-insensitive → true).
- `size() returns int`
  Number of columns in this row.

### SqliteDb

```wurst
public class SqliteDb
```

Wraps an SQLite database connection with convenience methods.

**Members:**

- `construct(string path)`
  Opens (or creates) the database at the given path. Use ":memory:" for temporary databases.
- `getHandle() returns int`
  Returns the raw connection handle for direct native calls.
- `exec(string query)`
  Executes a statement that returns no rows (DDL, INSERT, UPDATE, DELETE).
- `select(string query) returns ArrayList<SqlResult>`
  Executes a SELECT and returns all result rows. Caller owns the list
         and its SqlResult entries - destroy both when done.
  
         Column count is determined after the first sqlite_step to ensure the
         JDBC ResultSet metadata is available.
- `selectFirst(string query) returns SqlResult`
  Executes a SELECT and returns only the first row, or null if no rows match.
         Caller owns the returned SqlResult - destroy it when done.
- `exists(string query) returns boolean`
  Returns true if the query produces at least one row.
- `count(string query) returns int`
  Runs a "SELECT count(…)" query and returns the first column of the first row as int.
- `execPrepared(string query, ArrayList<string> params)`
  Executes a parameterised statement that returns no rows.
         Example: db.execPrepared("INSERT INTO t VALUES (?, ?)", asList("foo", "42"))
- `selectPrepared(string query, ArrayList<string> params) returns ArrayList<SqlResult>`
  Executes a parameterised SELECT and returns all result rows.
         Caller owns the list and its SqlResult entries - destroy both when done.
- `selectFirstPrepared(string query, ArrayList<string> params) returns SqlResult`
  Executes a parameterised SELECT and returns only the first row, or null.
- `existsPrepared(string query, ArrayList<string> params) returns boolean`
  Returns true if the parameterised query produces at least one row.

### SQL

```wurst
public class SQL
```

Singleton database access. Configure the path via SQL_DATABASE_PATH.

**Members:**

- `static function exec(string query)`
- `static function select(string query) returns ArrayList<SqlResult>`
- `static function selectFirst(string query) returns SqlResult`
- `static function exists(string query) returns boolean`
- `static function count(string query) returns int`
- `static function execPrepared(string query, ArrayList<string> params)`
- `static function selectPrepared(string query, ArrayList<string> params) returns ArrayList<SqlResult>`
- `static function selectFirstPrepared(string query, ArrayList<string> params) returns SqlResult`
- `static function existsPrepared(string query, ArrayList<string> params) returns boolean`
- `static function getDb() returns SqliteDb`
  Returns the underlying SqliteDb instance.
- `static function getHandle() returns int`
  Returns the raw connection handle for direct native calls.
- `static function close()`
  Closes the singleton connection. Next call reopens it.

## Constants

### SQL_DATABASE_PATH

```wurst
public constant SQL_DATABASE_PATH = ":memory:"
```

> 🔧 **Configurable.** Override it in your map's config package.

Override this in your package to point at your project database.
