class VideoPlayer {
    constructor(settings) {
        this._settings = Object.assign(VideoPlayer.DefaultSettings, settings);
    }

    init() {
        if (!this._settings.videoUrl) return console.error('Provide video Url');
        if (!this._settings.videoPlayerContainer) return console.error('Please provide video player container');

        // Создаем разметку для video
        this._addTemplate();
        // Найти все элементы управления
        this._setElements();
        // Установить обработчики событий
        this._setEvents();
    }

    toggle() {
        const method = this._video.paused ? 'play' : 'pause';
        this._toggleBtn.textContent = this._video.paused ? '❚ ❚' :  '►';
        this._video[method]();
    }

    _videoProgressHandler() {
        const percent = (this._video.currentTime / this._video.duration) * 100;
        this._progress.style.flexBasis = `${percent}%`;
    }

    // добавил методы: _volumeChange(),  _playbackRateChange(), _rewindPrev(),
    // _rewindNext(), 
    _volumeChange() {
        const volumeValue = this._volume.value;
        this._volume.setAttribute('value', `${volumeValue}`);
        this._video.volume = this._volume.getAttribute('value');
    }

    _playbackRateChange() {
        const playbackRateValue = this._playbackRate.value;
        this._playbackRate.setAttribute('value', `${playbackRateValue}`);
        this._video.playbackRate = this._playbackRate.getAttribute('value');
    }

    _rewindPrev() {
        this._video.currentTime += parseInt(this._rewindBtnPrev.dataset.skip);
    }

    _rewindNext() {
        this._video.currentTime += parseInt(this._rewindBtnNext.dataset.skip);
    }

    _runBack(event) {
        this._video.currentTime = (event.offsetX / this._progressContainer.offsetWidth) * this._video.duration;
    }

    _addTemplate() {
        const template = this._createVideoTemplate();
        const container = document.querySelector(this._settings.videoPlayerContainer);
        container ? container.insertAdjacentHTML('afterbegin', template) : console.error('Video container was not found');
    }

    // добавил элементы: _volume, _playbackRate, _rewindBtnPrev, _rewindBtnNext
    _setElements() {
        this._videoContainer = document.querySelector(this._settings.videoPlayerContainer);
        this._video = this._videoContainer.querySelector('video');
        this._toggleBtn = this._videoContainer.querySelector('.toggle');
        this._progress = this._videoContainer.querySelector('.progress__filled');
        this._progressContainer = this._videoContainer.querySelector('.progress');
        this._volume = document.getElementsByName('volume')[0];
        this._playbackRate = document.getElementsByName('playbackRate')[0];
        this._rewindBtnPrev = this._videoContainer.querySelectorAll('button')[1];
        this._rewindBtnNext = this._videoContainer.querySelectorAll('button')[2];
    }

    // добавил события: _volume, _playbackRate, _rewindBtnPrev, _rewindBtnNext, 
    // _video(двойное нажатие для перемотки на левой и правой части плеера)
    _setEvents() {
        this._video.addEventListener('click', () => this.toggle());
        this._toggleBtn.addEventListener('click', () => this.toggle());
        this._video.addEventListener('timeupdate', () => this._videoProgressHandler());
        this._progressContainer.addEventListener('click', (e) => this._runBack(e));
        this._volume.addEventListener('input', () => this._volumeChange())
        this._playbackRate.addEventListener('input', () => this._playbackRateChange());
        this._rewindBtnPrev.addEventListener('click', () => this._rewindPrev());
        this._rewindBtnNext.addEventListener('click', () => this._rewindNext());
        this._video.addEventListener('dblclick', (e) => (e.clientX - this._video.getBoundingClientRect().left) < this._video.videoWidth/2 ? this._rewindPrev() : this._rewindNext());
    }

    _createVideoTemplate() {
        return `
        <div class="player">
            <video class="player__video viewer" src="${this._settings.videoUrl}"> </video>
            <div class="player__controls">
              <div class="progress">
              <div class="progress__filled"></div>
              </div>
              <button class="player__button toggle" title="Toggle Play">►</button>
              <input type="range" name="volume" class="player__slider" min=0 max="1" step="0.05" value="${this._settings.volume}">
              <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="${this._settings.playbackRate}">
              <button data-skip="-${this._settings.rewindPrev}" class="player__button">« ${this._settings.rewindPrev}s</button>
              <button data-skip="${this._settings.rewindNext}" class="player__button">${this._settings.rewindNext}s »</button>
            </div>
        </div>
        `;
    }
    
    // добавил св-ва: playbackRate, rewindPrev, rewindNext
    static get DefaultSettings() {
        return {
            videoUrl: '',
            videoPlayerContainer: 'body',
            volume: 1,
            playbackRate: 1,
            rewindPrev: 1,
            rewindNext: 1
        }
    }
}


const playerInstance = new VideoPlayer({
    videoUrl: 'video/mov_bbb.mp4'
});

playerInstance.init();
