## sound.js

[![Join the chat at https://gitter.im/aleen42/sound.js](https://badges.gitter.im/aleen42/sound.js.svg)](https://gitter.im/aleen42/sound.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Pay](https://img.shields.io/badge/%24-free-%23a10000.svg)](#) [![GitHub issues](https://img.shields.io/github/issues/aleen42/sound.js.svg)](https://github.com/aleen42/sound.js/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/aleen42/sound.js/master/LICENSE) [![Gitter](https://badges.gitter.im/aleen42/gitbook-treeview.svg)](https://gitter.im/aleen42/sound.js?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

A JavaScript project for using Web Audio API to do something awesome. [[**Demo**](http://aleen42.github.io/example/sound/index.html)], this demo has loaded a file with above 8.94 MB, so please wait for its loading.

![](./1.png)

![](./2.png)

![](./3.png)

### Installation

Before installation, you are supposed to install Webpack, which is used to bundle this project:

```bash
sudo npm install webpack -g
```

Because the new version has used [flac.js](https://github.com/audiocogs/flac.js) and [aurora.js](https://github.com/audiocogs/aurora.js) to decode flac files. Therefore, you have to install some libraries to avoid erros when running `npm install`.

If you are using a Debian System like Ubuntu, you have to install `libasound2`

```bash
sudo apt-get install libasound2-dev
```

Or if you are in Windows, to be sure that you have already configured a executable Python(2.7.6).

*Notice that: Python 2.7.6 is supported by node-gyp, but the latest one should not.*

After download and install a executable version of Python(2.7.6), if you're using Git Bash, you also have to tell the application where to find Python(2.7.6):

```bash
# Here I assume you install your python in the path: `C/Python/Python27/`
export PATH="$PATH:/C/Python/Python27/"
```

Besides, due to using C in AV to compile speaker, we have to install a Visual Studio 2013 or other version then set a configurated variable for that:

```bash
npm config set msvs_version 2013 --global
```

After that, just clone and build it locally:

```bash
git clone https://github.com/aleen42/sound.js.git --recursively

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

*Notice that: this project is temporarily supported MP3 files, and any file without a extension name `.mp3/.flac` will not be loaded.*

#### Optional

If you don't want to use `assets/songs`, you can just override the variable `base` array in the file `load.js`, to specify where to scan mp3/flac files recursively.

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

### Referer

- **Oscilloscope visualization** is based on https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API.
- **Wave drawing** is based on https://aleen42.gitbooks.io/personalwiki/content/post/drawing_audio_waveforms/drawing_audio_waveforms.html
- **Beat detection** is based on https://aleen42.gitbooks.io/personalwiki/content/post/bpm_detection_with_javascript/bpm_detection_with_javascript.html

### :fuelpump: How to contribute

Have an idea? Found a bug? See [how to contribute](https://aleen42.gitbooks.io/personalwiki/content/contribution.html).

### :scroll: License

[MIT](https://aleen42.gitbooks.io/personalwiki/content/MIT.html) © aleen42
