# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > interface > new-line-error`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "input.ts"
		end: Object {
			column: 0
			index: 15
			line: 3
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Expected a semicolon or a line terminator"}
			}
			location: Object {
				filename: "input.ts"
				mtime: undefined
				sourceType: "module"
				end: Object {
					column: 1
					index: 11
					line: 2
				}
				start: Object {
					column: 2
					index: 12
					line: 2
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 9
					index: 9
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSReferenceIdentifier {
				name: "interface"
				loc: Object {
					filename: "input.ts"
					identifierName: "interface"
					end: Object {
						column: 9
						index: 9
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 1
					index: 11
					line: 2
				}
				start: Object {
					column: 0
					index: 10
					line: 2
				}
			}
			expression: JSReferenceIdentifier {
				name: "F"
				loc: Object {
					filename: "input.ts"
					identifierName: "F"
					end: Object {
						column: 1
						index: 11
						line: 2
					}
					start: Object {
						column: 0
						index: 10
						line: 2
					}
				}
			}
		}
		JSBlockStatement {
			body: Array []
			directives: Array []
			loc: Object {
				filename: "input.ts"
				end: Object {
					column: 4
					index: 14
					line: 2
				}
				start: Object {
					column: 2
					index: 12
					line: 2
				}
			}
		}
	]
}
```
