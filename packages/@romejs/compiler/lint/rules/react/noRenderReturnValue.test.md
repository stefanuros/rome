# `noRenderReturnValue.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/compiler/lint/rules/react/noRenderReturnValue.test.ts --update-snapshots` to update.

## `react no render return value`

### `0`

```

 unknown:1:12 lint/react/noRenderReturnValue ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not depend on the return value from ReactDOM.render().

    const foo = ReactDOM.render(<div />, document.body);
                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
const foo = ReactDOM.render(<div />, document.body);

```

### `1`

```

 unknown:1:19 lint/react/noRenderReturnValue ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not depend on the return value from ReactDOM.render().

    const foo = bar && ReactDOM.render(<div />, document.body);
                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
const foo = bar && ReactDOM.render(<div />, document.body);

```

### `2`

```

 unknown:1:18 lint/react/noRenderReturnValue ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not depend on the return value from ReactDOM.render().

    const foo = bar ? ReactDOM.render(<div />, document.body) : null
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
const foo = bar ? ReactDOM.render(<div />, document.body) : null;

```

### `3`

```

 unknown:1:18 lint/react/noRenderReturnValue ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not depend on the return value from ReactDOM.render().

    const foo = () => ReactDOM.render(<div />, document.body);
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `3: formatted`

```
function foo() {
	return ReactDOM.render(<div />, document.body);
}

```

### `4`

```

 unknown:3:13 lint/react/noRenderReturnValue ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not depend on the return value from ReactDOM.render().

    2 │      const foo = {
  > 3 │       react: ReactDOM.render(<div />, document.body)
      │              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 │      };

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `4: formatted`

```
const foo = {
	react: ReactDOM.render(<div />, document.body),
};

```

### `5`

```

 unknown:3:11 lint/react/noRenderReturnValue ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not depend on the return value from ReactDOM.render().

    2 │      let foo;
  > 3 │      foo = ReactDOM.render(<div />, document.body);
      │            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 │      

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `5: formatted`

```
let foo;
foo = ReactDOM.render(<div />, document.body);

```

### `6`

```

 unknown:3:13 lint/react/noRenderReturnValue ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not depend on the return value from ReactDOM.render().

    2 │      function render () {
  > 3 │       return ReactDOM.render(<div />, document.body)
      │              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    4 │      }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `6: formatted`

```
function render() {
	return ReactDOM.render(<div />, document.body);
}

```

### `7`

```
✔ No known problems!

```

### `7: formatted`

```
ReactDOM.render(<div />, document.body);

```

### `8`

```
✔ No known problems!

```

### `8: formatted`

```
function render() {
	ReactDOM.render(<div />, document.body);
}

```

### `9`

```
✔ No known problems!

```

### `9: formatted`

```
function render() {
	ReactDOM.render(<div />, document.body);
}

```
