[![Install size](https://packagephobia.com/badge?p=bare-spinner)](https://packagephobia.com/result?p=bare-spinner)
![npm package minzipped size](https://img.shields.io/bundlejs/size/bare-spinner)
<!-- [![Downloads](https://img.shields.io/npm/dm/bare-spinner.svg)](https://npmjs.com/bare-spinner) -->
<!-- ![Dependents](https://img.shields.io/librariesio/dependents/npm/bare-spinner) -->

> Tiny terminal spinner

## Features

- Works with Bare and Pear
- Tiny and fast
- Customizable text and color options
- Customizable spinner animations
- Only one tiny dependency
- Supports both Unicode and non-Unicode environments
- Gracefully handles process signals (e.g., `SIGINT`, `SIGTERM`)
- Can display different status symbols (info, success, warning, error)
- Works well in CI environments

## Install

```sh
npm install bare-spinner
```

## Usage

```js
import bareSpinner from 'bare-spinner';

const spinner = bareSpinner({text: 'Loading…'}).start();

setTimeout(() => {
	spinner.success('Success!');
}, 2000);
```

## API

### bareSpinner(options?)

Creates a new spinner instance.

#### options

Type: `object`

##### text

Type: `string`\
Default: `''`

The text to display next to the spinner.

##### spinner

Type: `object`\
Default: <img src="https://github.com/sindresorhus/ora/blob/main/screenshot-spinner.gif?raw=true" width="14">

Customize the spinner animation with a custom set of frames and interval.

```js
{
	frames: ['-', '\\', '|', '/'],
	interval: 100,
}
```

Pass in any spinner from [`cli-spinners`](https://github.com/sindresorhus/cli-spinners).

##### color

Type: `string`\
Default: `'cyan'`\
Values: `'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray'`

The color of the spinner.

##### stream

Type: `stream.Writable`\
Default: `process.stderr`

The stream to which the spinner is written.

### Instance methods

#### .start(text?)

Starts the spinner.

Returns the instance.

Optionally, updates the text:

```js
spinner.start('Loading…');
```

#### .stop(finalText?)

Stops the spinner.

Returns the instance.

Optionally displays a final message.

```js
spinner.stop('Stopped.');
```

#### .success(text?)

Stops the spinner and displays a success symbol with the message.

Returns the instance.

```js
spinner.success('Success!');
```

#### .error(text?)

Stops the spinner and displays an error symbol with the message.

Returns the instance.

```js
spinner.error('Error!');
```

#### .warning(text?)

Stops the spinner and displays a warning symbol with the message.

Returns the instance.

```js
spinner.warning('Warning!');
```

#### .clear()

Clears the spinner.

Returns the instance.

#### .info(text?)

Stops the spinner and displays an info symbol with the message.

Returns the instance.

```js
spinner.info('Info.');
```

#### .text <sup>get/set</sup>

Change the text displayed next to the spinner.

```js
spinner.text = 'New text';
```

#### .color <sup>get/set</sup>

Change the spinner color.

#### .isSpinning <sup>get</sup>

Returns whether the spinner is currently spinning.

## FAQ

### How do I change the color of the text?

Use [`yoctocolors`](https://github.com/sindresorhus/yoctocolors):

```js
import bareSpinner from 'bare-spinner';
import {red} from 'yoctocolors';

const spinner = bareSpinner({text: `Loading ${red('unicorns')}`}).start();
```

### Why does the spinner freeze?

JavaScript is single-threaded, so any synchronous operations will block the spinner's animation. To avoid this, prefer using asynchronous operations.

## Related

- [ora](https://github.com/sindresorhus/ora) - Comprehensive terminal spinner
- [yoctocolors](https://github.com/sindresorhus/yoctocolors) - Tiny terminal coloring
- [nano-spawn](https://github.com/sindresorhus/nano-spawn) - Tiny process execution for humans
