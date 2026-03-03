Prism.languages.wurst = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: true,
      greedy: true
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }
  ],
  annotation: {
    pattern: /@\w+/,
    alias: "atrule"
  },
  string: {
    pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  number: /\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/,
  boolean: /\b(?:true|false)\b/,
  keyword:
    /\b(?:package|import|init|initlater|class|interface|module|enum|tuple|function|construct|ondestroy|return|if|else|elseif|switch|case|default|for|while|from|to|downto|step|in|break|skip|let|var|new|destroy|extends|implements|override|static|abstract|public|private|protected|immutable|native|nativetype|globals|endglobals|constant|array|and|or|not|this|super|it|instanceof|castTo|div|mod|compiletime|begin|end|takes|returns|nothing|local|loop|endloop|exitwhen|set|call|then|endif|endfunction|endpackage)\b/,
  builtin:
    /\b(?:null|integer|int|real|string|boolean|code|handle|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate|fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|image|ubersplat|hashtable)\b/,
  "class-name": [
    {
      pattern:
        /(\b(?:class|interface|module|extends|implements|new|tuple|enum)\s+)[A-Z][A-Za-z0-9_]*/,
      lookbehind: true
    },
    {
      pattern: /(\bnew\s+)[A-Z][A-Za-z0-9_]*(?=\s*(?:<|\())/,
      lookbehind: true
    }
  ],
  function: {
    pattern: /\b[a-z_][A-Za-z0-9_]*(?=\s*\()/,
    greedy: true
  },
  constant: /\b[A-Z_][A-Z0-9_]+\b/,
  operator:
    /\.\.|->|=>|==|!=|<=|>=|[-+*/%]=?|=|\b(?:or|and|not|div|mod)\b/,
  punctuation: /[{}[\](),.:]/
};

Prism.languages.yaml = {
  scalar: {
    pattern:
      /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
    lookbehind: true,
    alias: "string"
  },
  comment: /#.*/,
  key: {
    pattern:
      /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
    lookbehind: true,
    alias: "atrule"
  },
  directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: true, alias: "important" },
  datetime: {
    pattern:
      /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
    lookbehind: true,
    alias: "number"
  },
  boolean: {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: "important"
  },
  null: {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: "important"
  },
  string: {
    pattern:
      /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
    lookbehind: true,
    greedy: true
  },
  number: {
    pattern:
      /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
    lookbehind: true
  },
  tag: /![^\s]+/,
  important: /[&*][\w]+/,
  punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
};

Prism.languages.yml = Prism.languages.yaml;
