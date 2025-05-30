var components = {
  "core": {
    "meta": {
      "path": "components/prism-core.js",
      "option": "mandatory"
    },
    "core": "Core"
  },
  "themes": {
    "meta": {
      "path": "themes/{id}.css",
      "link": "login.html?theme={id}",
      "exclusive": true
    },
    "prism": {
      "title": "Default",
      "option": "default"
    },
    "prism-dark": "Dark",
    "prism-funky": "Funky",
    "prism-okaidia": {
      "title": "Okaidia",
      "owner": "ocodia"
    },
    "prism-twilight": {
      "title": "Twilight",
      "owner": "remybach"
    },
    "prism-coy": {
      "title": "Coy",
      "owner": "tshedor"
    },
    "prism-solarizedlight": {
      "title": "Solarized Light",
      "owner": "hectormatos2011 "
    },
    "prism-tomorrow": {
      "title": "Tomorrow Night",
      "owner": "Rosey"
    }
  },
  "languages": {
    "meta": {
      "path": "components/prism-{id}",
      "noCSS": true,
      "examplesPath": "examples/prism-{id}",
      "addCheckAll": true
    },
    "markup": {
      "title": "Markup",
      "alias": ["html", "xml", "svg", "mathml"],
      "aliasTitles": {
        "html": "HTML",
        "xml": "XML",
        "svg": "SVG",
        "mathml": "MathML"
      },
      "option": "default"
    },
    "css": {
      "title": "CSS",
      "option": "default",
      "peerDependencies": "markup"
    },
    "clike": {
      "title": "C-like",
      "option": "default",
      "overrideExampleHeader": true
    },
    "javascript": {
      "title": "JavaScript",
      "require": "clike",
      "peerDependencies": "markup",
      "alias": "js",
      "option": "default"
    },
    "abap": {
      "title": "ABAP",
      "owner": "dellagustin"
    },
    "actionscript": {
      "title": "ActionScript",
      "require": "javascript",
      "peerDependencies": "markup",
      "owner": "Golmote"
    },
    "ada": {
      "title": "Ada",
      "owner": "Lucretia"
    },
    "apacheconf": {
      "title": "Apache Configuration",
      "owner": "GuiTeK"
    },
    "apl": {
      "title": "APL",
      "owner": "ngn"
    },
    "applescript": {
      "title": "AppleScript",
      "owner": "Golmote"
    },
    "arduino": {
      "title": "Arduino",
      "require": "cpp",
      "owner": "eisbehr-"
    },
    "arff": {
      "title": "ARFF",
      "owner": "Golmote"
    },
    "asciidoc": {
      "title": "AsciiDoc",
      "owner": "Golmote"
    },
    "asm6502": {
      "title": "6502 Assembly",
      "owner": "kzurawel"
    },
    "aspnet": {
      "title": "ASP.NET (C#)",
      "require": ["markup", "csharp"],
      "owner": "nauzilus"
    },
    "autohotkey": {
      "title": "AutoHotkey",
      "owner": "aviaryan"
    },
    "autoit": {
      "title": "AutoIt",
      "owner": "Golmote"
    },
    "bash": {
      "title": "Bash",
      "owner": "zeitgeist87"
    },
    "basic": {
      "title": "BASIC",
      "owner": "Golmote"
    },
    "batch": {
      "title": "Batch",
      "alias": "shell",
      "owner": "Golmote"
    },
    "bison": {
      "title": "Bison",
      "require": "c",
      "owner": "Golmote"
    },
    "brainfuck": {
      "title": "Brainfuck",
      "owner": "Golmote"
    },
    "bro": {
      "title": "Bro",
      "owner": "wayward710"
    },
    "c": {
      "title": "C",
      "require": "clike",
      "owner": "zeitgeist87"
    },
    "csharp": {
      "title": "C#",
      "require": "clike",
      "alias": "dotnet",
      "owner": "mvalipour"
    },
    "cpp": {
      "title": "C++",
      "require": "c",
      "owner": "zeitgeist87"
    },
    "coffeescript": {
      "title": "CoffeeScript",
      "require": "javascript",
      "owner": "R-osey"
    },
    "clojure": {
      "title": "Clojure",
      "owner": "troglotit"
    },
    "crystal": {
      "title": "Crystal",
      "require": "ruby",
      "owner": "MakeNowJust"
    },
    "csp": {
      "title": "Content-Security-Policy",
      "owner": "ScottHelme"
    },
    "css-extras": {
      "title": "CSS Extras",
      "require": "css",
      "owner": "milesj"
    },
    "d": {
      "title": "D",
      "require": "clike",
      "owner": "Golmote"
    },
    "dart": {
      "title": "Dart",
      "require": "clike",
      "owner": "Golmote"
    },
    "diff": {
      "title": "Diff",
      "owner": "uranusjr"
    },
    "django": {
      "title": "Django/Jinja2",
      "require": "markup",
      "peerDependencies": ["css", "javascript"],
      "alias": "jinja2",
      "owner": "romanvm"
    },
    "docker": {
      "title": "Docker",
      "owner": "JustinBeckwith"
    },
    "eiffel": {
      "title": "Eiffel",
      "owner": "Conaclos"
    },
    "elixir": {
      "title": "Elixir",
      "owner": "Golmote"
    },
    "elm": {
      "title": "Elm",
      "owner": "zwilias"
    },
    "erb": {
      "title": "ERB",
      "require": ["ruby", "markup-templating"],
      "owner": "Golmote"
    },
    "erlang": {
      "title": "Erlang",
      "owner": "Golmote"
    },
    "fsharp": {
      "title": "F#",
      "require": "clike",
      "owner": "simonreynolds7"
    },
    "flow": {
      "title": "Flow",
      "require": "javascript",
      "owner": "Golmote"
    },
    "fortran": {
      "title": "Fortran",
      "owner": "Golmote"
    },
    "gedcom": {
      "title": "GEDCOM",
      "owner": "Golmote"
    },
    "gherkin": {
      "title": "Gherkin",
      "owner": "hason"
    },
    "git": {
      "title": "Git",
      "owner": "lgiraudel"
    },
    "glsl": {
      "title": "GLSL",
      "require": "clike",
      "owner": "Golmote"
    },
    "go": {
      "title": "Go",
      "require": "clike",
      "owner": "arnehormann"
    },
    "graphql": {
      "title": "GraphQL",
      "owner": "Golmote"
    },
    "groovy": {
      "title": "Groovy",
      "require": "clike",
      "owner": "robfletcher"
    },
    "haml": {
      "title": "Haml",
      "require": "ruby",
      "peerDependencies": ["css", "coffeescript", "erb", "javascript", "less", "markdown", "ruby", "scss", "textile"],
      "owner": "Golmote"
    },
    "handlebars": {
      "title": "Handlebars",
      "require": "markup-templating",
      "owner": "Golmote"
    },
    "haskell": {
      "title": "Haskell",
      "owner": "bholst"
    },
    "haxe": {
      "title": "Haxe",
      "require": "clike",
      "owner": "Golmote"
    },
    "http": {
      "title": "HTTP",
      "peerDependencies": ["javascript", "markup"],
      "owner": "danielgtaylor"
    },
    "hpkp": {
      "title": "HTTP Public-Key-Pins",
      "owner": "ScottHelme"
    },
    "hsts": {
      "title": "HTTP Strict-Transport-Security",
      "owner": "ScottHelme"
    },
    "ichigojam": {
      "title": "IchigoJam",
      "owner": "BlueCocoa"
    },
    "icon": {
      "title": "Icon",
      "owner": "Golmote"
    },
    "inform7": {
      "title": "Inform 7",
      "owner": "Golmote"
    },
    "ini": {
      "title": "Ini",
      "owner": "aviaryan"
    },
    "io": {
      "title": "Io",
      "owner": "AlesTsurko"
    },
    "j": {
      "title": "J",
      "owner": "Golmote"
    },
    "java": {
      "title": "Java",
      "require": "clike",
      "owner": "sherblot"
    },
    "jolie": {
      "title": "Jolie",
      "require": "clike",
      "owner": "thesave"
    },
    "json": {
      "title": "JSON",
      "owner": "CupOfTea696"
    },
    "julia": {
      "title": "Julia",
      "owner": "cdagnino"
    },
    "keyman": {
      "title": "Keyman",
      "owner": "mcdurdin"
    },
    "kotlin": {
      "title": "Kotlin",
      "require": "clike",
      "owner": "Golmote"
    },
    "latex": {
      "title": "LaTeX",
      "owner": "japborst"
    },
    "less": {
      "title": "Less",
      "require": "css",
      "owner": "Golmote"
    },
    "liquid": {
      "title": "Liquid",
      "owner": "cinhtau"
    },
    "lisp": {
      "title": "Lisp",
      "owner": "JuanCaicedo",
      "alias": ["emacs", "elisp", "emacs-lisp"]
    },
    "livescript": {
      "title": "LiveScript",
      "owner": "Golmote"
    },
    "lolcode": {
      "title": "LOLCODE",
      "owner": "Golmote"
    },
    "lua": {
      "title": "Lua",
      "owner": "Golmote"
    },
    "makefile": {
      "title": "Makefile",
      "owner": "Golmote"
    },
    "markdown": {
      "title": "Markdown",
      "require": "markup",
      "owner": "Golmote"
    },
    "markup-templating": {
      "title": "Markup templating",
      "require": "markup",
      "owner": "Golmote"
    },
    "matlab": {
      "title": "MATLAB",
      "owner": "Golmote"
    },
    "mel": {
      "title": "MEL",
      "owner": "Golmote"
    },
    "mizar": {
      "title": "Mizar",
      "owner": "Golmote"
    },
    "monkey": {
      "title": "Monkey",
      "owner": "Golmote"
    },
    "n4js": {
      "title": "N4JS",
      "require": "javascript",
      "owner": "bsmith-n4"
    },
    "nasm": {
      "title": "NASM",
      "owner": "rbmj"
    },
    "nginx": {
      "title": "nginx",
      "owner": "westonganger",
      "require": "clike"
    },
    "nim": {
      "title": "Nim",
      "owner": "Golmote"
    },
    "nix": {
      "title": "Nix",
      "owner": "Golmote"
    },
    "nsis": {
      "title": "NSIS",
      "owner": "idleberg"
    },
    "objectivec": {
      "title": "Objective-C",
      "require": "c",
      "owner": "uranusjr"
    },
    "ocaml": {
      "title": "OCaml",
      "owner": "Golmote"
    },
    "opencl": {
      "title": "OpenCL",
      "require": "cpp",
      "peerDependencies": ["c", "cpp"],
      "overrideExampleHeader": true,
      "owner": "Milania1"
    },
    "oz": {
      "title": "Oz",
      "owner": "Golmote"
    },
    "parigp": {
      "title": "PARI/GP",
      "owner": "Golmote"
    },
    "parser": {
      "title": "Parser",
      "require": "markup",
      "owner": "Golmote"
    },
    "pascal": {
      "title": "Pascal",
      "alias": "objectpascal",
      "aliasTitles": {
        "objectpascal": "Object Pascal"
      },
      "owner": "Golmote"
    },
    "perl": {
      "title": "Perl",
      "owner": "Golmote"
    },
    "php": {
      "title": "PHP",
      "require": ["clike", "markup-templating"],
      "owner": "milesj"
    },
    "php-extras": {
      "title": "PHP Extras",
      "require": "php",
      "owner": "milesj"
    },
    "plsql": {
      "title": "PL/SQL",
      "require": "sql",
      "owner": "Golmote"
    },
    "powershell": {
      "title": "PowerShell",
      "owner": "nauzilus"
    },
    "processing": {
      "title": "Processing",
      "require": "clike",
      "owner": "Golmote"
    },
    "prolog": {
      "title": "Prolog",
      "owner": "Golmote"
    },
    "properties": {
      "title": ".properties",
      "owner": "Golmote"
    },
    "protobuf": {
      "title": "Protocol Buffers",
      "require": "clike",
      "owner": "just-boris"
    },
    "pug": {
      "title": "Pug",
      "require": "javascript",
      "peerDependencies": ["coffeescript", "ejs", "handlebars", "hogan", "less", "livescript", "markdown", "mustache", "plates", "scss", "stylus", "swig"],
      "owner": "Golmote"
    },
    "puppet": {
      "title": "Puppet",
      "owner": "Golmote"
    },
    "pure": {
      "title": "Pure",
      "peerDependencies": ["c", "cpp", "fortran", "ats", "dsp"],
      "owner": "Golmote"
    },
    "python": {
      "title": "Python",
      "owner": "multipetros"
    },
    "q": {
      "title": "Q (kdb+ database)",
      "owner": "Golmote"
    },
    "qore": {
      "title": "Qore",
      "require": "clike",
      "owner": "temnroegg"
    },
    "r": {
      "title": "R",
      "owner": "Golmote"
    },
    "jsx": {
      "title": "React JSX",
      "require": ["markup", "javascript"],
      "owner": "vkbansal"
    },
    "tsx": {
      "title": "React TSX",
      "require": ["jsx", "typescript"]
    },
    "renpy": {
      "title": "Ren'py",
      "owner": "HyuchiaDiego"
    },
    "reason": {
      "title": "Reason",
      "require": "clike",
      "owner": "Golmote"
    },
    "rest": {
      "title": "reST (reStructuredText)",
      "owner": "Golmote"
    },
    "rip": {
      "title": "Rip",
      "owner": "ravinggenius"
    },
    "roboconf": {
      "title": "Roboconf",
      "owner": "Golmote"
    },
    "ruby": {
      "title": "Ruby",
      "require": "clike",
      "owner": "samflores"
    },
    "rust": {
      "title": "Rust",
      "owner": "Golmote"
    },
    "sas": {
      "title": "SAS",
      "owner": "Golmote"
    },
    "sass": {
      "title": "Sass (Sass)",
      "require": "css",
      "owner": "Golmote"
    },
    "scss": {
      "title": "Sass (Scss)",
      "require": "css",
      "owner": "MoOx"
    },
    "scala": {
      "title": "Scala",
      "require": "java",
      "owner": "jozic"
    },
    "scheme": {
      "title": "Scheme",
      "owner": "bacchus123"
    },
    "smalltalk": {
      "title": "Smalltalk",
      "owner": "Golmote"
    },
    "smarty": {
      "title": "Smarty",
      "require": "markup-templating",
      "owner": "Golmote"
    },
    "sql": {
      "title": "SQL",
      "owner": "multipetros"
    },
    "soy": {
      "title": "Soy (Closure Template)",
      "require": "markup-templating",
      "owner": "Golmote"
    },
    "stylus": {
      "title": "Stylus",
      "owner": "vkbansal"
    },
    "swift": {
      "title": "Swift",
      "require": "clike",
      "owner": "chrischares"
    },
    "tap": {
      "title": "TAP",
      "owner": "isaacs",
      "require": "yaml"
    },
    "tcl": {
      "title": "Tcl",
      "owner": "PeterChaplin"
    },
    "textile": {
      "title": "Textile",
      "require": "markup",
      "peerDependencies": "css",
      "owner": "Golmote"
    },
    "tt2": {
      "title": "Template Toolkit 2",
      "require": ["clike", "markup-templating"],
      "owner": "gflohr"
    },
    "twig": {
      "title": "Twig",
      "require": "markup",
      "owner": "brandonkelly"
    },
    "typescript": {
      "title": "TypeScript",
      "require": "javascript",
      "alias": "ts",
      "owner": "vkbansal"
    },
    "vbnet": {
      "title": "VB.Net",
      "require": "basic",
      "owner": "Bigsby"
    },
    "velocity": {
      "title": "Velocity",
      "require": "markup",
      "owner": "Golmote"
    },
    "verilog": {
      "title": "Verilog",
      "owner": "a-rey"
    },
    "vhdl": {
      "title": "VHDL",
      "owner": "a-rey"
    },
    "vim": {
      "title": "vim",
      "owner": "westonganger"
    },
    "visual-basic": {
      "title": "Visual Basic",
      "owner": "Golmote",
      "alias": "vb"
    },
    "wasm": {
      "title": "WebAssembly",
      "owner": "Golmote"
    },
    "wiki": {
      "title": "Wiki markup",
      "require": "markup",
      "owner": "Golmote"
    },
    "xeora": {
      "title": "Xeora",
      "require": "markup",
      "owner": "freakmaxi"
    },
    "xojo": {
      "title": "Xojo (REALbasic)",
      "owner": "Golmote"
    },
    "xquery": {
      "title": "XQuery",
      "require": "markup",
      "owner": "Golmote"
    },
    "yaml": {
      "title": "YAML",
      "owner": "hason"
    }
  },
  "plugins": {
    "meta": {
      "path": "plugins/{id}/prism-{id}",
      "link": "plugins/{id}/"
    },
    "line-highlight": "Line Highlight",
    "line-numbers": {
      "title": "Line Numbers",
      "owner": "kuba-kubula"
    },
    "show-invisibles": "Show Invisibles",
    "autolinker": "Autolinker",
    "wpd": "WebPlatform Docs",
    "custom-class": {
      "title": "Custom Class",
      "owner": "dvkndn",
      "noCSS": true
    },
    "file-highlight": {
      "title": "File Highlight",
      "noCSS": true
    },
    "show-language": {
      "title": "Show Language",
      "owner": "nauzilus",
      "noCSS": true,
      "require": "toolbar"
    },
    "jsonp-highlight": {
      "title": "JSONP Highlight",
      "noCSS": true,
      "owner": "nauzilus"
    },
    "highlight-keywords": {
      "title": "Highlight Keywords",
      "owner": "vkbansal",
      "noCSS": true
    },
    "remove-initial-line-feed": {
      "title": "Remove initial line feed",
      "owner": "Golmote",
      "noCSS": true
    },
    "previewers": {
      "title": "Previewers",
      "owner": "Golmote"
    },
    "autoloader": {
      "title": "Autoloader",
      "owner": "Golmote",
      "noCSS": true
    },
    "keep-markup": {
      "title": "Keep Markup",
      "owner": "Golmote",
      "after": "normalize-whitespace",
      "noCSS": true
    },
    "command-line": {
      "title": "Command Line",
      "owner": "chriswells0"
    },
    "unescaped-markup": "Unescaped Markup",
    "normalize-whitespace": {
      "title": "Normalize Whitespace",
      "owner": "zeitgeist87",
      "after": "unescaped-markup",
      "noCSS": true
    },
    "data-uri-highlight": {
      "title": "Data-URI Highlight",
      "owner": "Golmote",
      "noCSS": true
    },
    "toolbar": {
      "title": "Toolbar",
      "owner": "mAAdhaTTah"
    },
    "copy-to-clipboard": {
      "title": "Copy to Clipboard Button",
      "owner": "mAAdhaTTah",
      "require": "toolbar",
      "noCSS": true
    }
  }
};
if (typeof module !== 'undefined' && module.exports) {
  module.exports = components;
}