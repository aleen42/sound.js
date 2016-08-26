## sound.js

[![Join the chat at https://gitter.im/aleen42/sound.js](https://badges.gitter.im/aleen42/sound.js.svg)](https://gitter.im/aleen42/sound.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Pay](https://img.shields.io/badge/%24-free-%23a10000.svg)](#) [![GitHub issues](https://img.shields.io/github/issues/aleen42/sound.js.svg)](https://github.com/aleen42/sound.js/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/sound.js/master/LICENSE) [![Gitter](https://badges.gitter.im/aleen42/gitbook-treeview.svg)](https://gitter.im/aleen42/sound.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

A JavaScript project for using Web Audio API to do something awesome.

![](./1.png)

### Installation

Before installation, you are supposed to install Webpack, which is used to bundle this project:

```bash
sudo npm install webpack -g
```

After that, just clone and build it locally:

```bash
git clone https://github.com/aleen42/sound.js.git

cd sound.js

# install needed dependencies
npm install

# this command is used to load songs of the path: assets/songs/,
# and you can see that a songlist.json will be created at the assets folder.
npm run load

# build up the project
npm run build

# build up a local server to run this project, which is going to listen at
# http://localhost:9000
npm run server 9000
```

### Usage

If you want to load songs locally, you can just paste files with a `.mp3` format into the folder: `assets/songs/`. After that, remember to run `npm run build` again to build this project.

*Notice that: this project is temporarily supported MP3 files, and any file without a extension name `.mp3` will not be loaded.*

#### Optional

If you don't want to use `assets/songs`, you can just override the variable `base` array in the file `load.js`:

```js
const base = [
	'./assets/songs/',
	
	/** wrong pointer which will cause resources missing error */
	'./../music',

	/** make a soft link like using `ln -s ./../music ./assets/music` */
    './assets/music/'
];
```

*Notice that: because a resource outside a server root is invisible, so if you are using Linux/Mac OS, remember to make a soft link to a path, which is under the root of this project, or this project will have broken down with a relative path like `./../music/`. If you are using Windows OS, I'm very sorry to say that, you have to copy your directory into this project, so that it can be loaded.*

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42
