<route lang="yaml">
meta:
  layout: empty
</route>

[[toc]]

<details>

<summary><h3 class="inline">Markdown</h3></summary>

``` json
"bold": {
  "prefix": "$b",
  "body": [
    "**$1**$2"
  ], 
  "description": "bold block"
},
```

``` json
"italic": {
  "prefix": "$i",
  "body": [
    "__$1__$2"
  ],
  "description": "italic block"
},
```

``` json
"bold-italic": {
  "prefix": "$bi",
  "body": [
    "__**$1**__$2"
  ], 
  "description": "bold italic block"
},
```

``` json
"code": {
  "prefix": "$code",
  "body": [
    "``` $1",
    "$2",
    "```",
    "$3"
  ],
  "description": "code block"
},
```

``` json
"detail": {
  "prefix": "$detail",
  "body": [
    "<detail>",
    "<summary>$1</summary>",
    "$2",
    "</detail>",
    "$3"
  ]
},
```

</details>