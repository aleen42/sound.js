import Common from './common';

const BufferLoader = module.exports = function (context, urlList, callback, firstLoadCallback, waitIndex) {
    this.context = context;
    this.urlList = urlList;
    this.onload = callback;
    this.onfirstload = firstLoadCallback;
    this.waitIndex = waitIndex;
    this.bufferList = new Array();
    this.loadCount = 0;
}

BufferLoader.prototype.loadBuffer = function(url, index) {
    // Load buffer asynchronously
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    var loader = this;

    request.onload = function() {
        // Asynchronously decode the audio file data in request.response
        loader.context.decodeAudioData(
            request.response,
            function(buffer) {
                if (!buffer) {
                    alert('error decoding file data: ' + url);
                    return;
                }
                
                loader.bufferList[index] = {
                    title: Common.extractTitle(url),
                    buffer: buffer
                };

                if (index === loader.waitIndex) {
                    loader.onfirstload(loader.bufferList);
                }

                if (++loader.loadCount === loader.urlList.length) {
                    loader.onload(loader.bufferList);
                }
            },
            function(error) {
                console.error('decodeAudioData error', error);
            }
        );
    }

    request.onerror = function() {
        alert('BufferLoader: XHR error');
    }

    request.send();
}

BufferLoader.prototype.load = function() {
    for (var i = 0; i < this.urlList.length; ++i) {
        this.loadBuffer(this.urlList[i], i);
    }
}
