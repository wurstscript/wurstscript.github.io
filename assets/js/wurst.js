Prism.languages.wurst= {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
			lookbehind: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true
		}
	],
	'string': {
		pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/,
		greedy: true
	},
	'keyword' : /\b(?:class|return|if|else|while|for|in|break|new|package|endpackage|function|returns|public|private|protected|import|initlater|native|nativetype|extends|interface|implements|module|use|abstract|static|thistype|override|immutable|it|array|and|or|not|this|construct|ondestroy|destroy|type|globals|endglobals|constant|endfunction|nothing|takes|local|loop|endloop|exitwhen|set|call|then|elseif|endif|init|castTo|tuple|div|mod|let|var|from|to|downto|step|endpackage|switch|case|default|super|skip|instanceof|enum|begin|end)\b|[^@]compiletime/,
	'boolean' : /\b(?:true|false)\b/,
	'builtin':  /\b(?:null|hashtable|nothing|integer|int|real|string|boolean|handle|event|player|widget|unit|destructable|item|ability|buff|force|group|trigger|triggercondition|triggeraction|timer|location|region|rect|boolexpr|sound|conditionfunc|filterfunc|unitpool|itempool|race|alliancetype|racepreference|gamestate|igamestate |fgamestate|playerstate|playerscore|playergameresult|unitstate|aidifficulty|eventid|gameevent|playerevent|playerunitevent|unitevent|limitop|widgetevent|dialogevent|unittype|gamespeed|gamedifficulty|gametype|mapflag|mapvisibility|mapsetting|mapdensity|mapcontrol|playerslotstate|volumegroup|camerafield|camerasetup|playercolor|placement|startlocprio|raritycontrol|blendmode|texmapflags|effect|effecttype|weathereffect|terraindeformation|fogstate|fogmodifier|dialog|button|quest|questitem|defeatcondition|timerdialog|leaderboard|multiboard|multiboarditem|trackable|gamecache|version|itemtype|texttag|attacktype|damagetype|weapontype|soundtype|lightning|pathingtype|image|ubersplat|code)\b/,
	'number' : /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
	'operator' : /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
	'punctuation' : /(\.|[..]|->)/,
	'annotation' : /@\w+(\s|[(])/
};
(Prism.languages.yaml = {
	scalar: {
		pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
		lookbehind: !0,
		alias: "string"
	},
	comment: /#.*/,
	key: {
		pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
		lookbehind: !0,
		alias: "atrule"
	},
	directive: { pattern: /(^[ \t]*)%.+/m, lookbehind: !0, alias: "important" },
	datetime: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
		lookbehind: !0,
		alias: "number"
	},
	boolean: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
		lookbehind: !0,
		alias: "important"
	},
	null: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
		lookbehind: !0,
		alias: "important"
	},
	string: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
		lookbehind: !0,
		greedy: !0
	},
	number: {
		pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
		lookbehind: !0
	},
	tag: /![^\s]+/,
	important: /[&*][\w]+/,
	punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
}),
	(Prism.languages.yml = Prism.languages.yaml);
