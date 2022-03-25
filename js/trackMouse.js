window.addEventListener('DOMContentLoaded', () => {

    const containerVideo = document.querySelector('.animationLogo');
    const video = containerVideo.querySelector('video');
    const htmlContent = document.querySelector('.container');
  
    if (video) {
      const controls = containerVideo.querySelector('.controls');
      removeVideoControls(video, controls);
      video.addEventListener('loadeddata', () => {
        startVideo(video);
      });
      video.addEventListener('ended', () => {
        stopVideo(containerVideo, video);
      });
      video.addEventListener('timeupdate', () => {
        onUpdate(containerVideo, video, htmlContent);
      });
      video.addEventListener('error', () => {
        prepareEnd(containerVideo, htmlContent);
        stopVideo(containerVideo, video);
      });
    }
  
    const elements = document.getElementsByClassName('fullHeight');
    if (elements[0].clientHeight > window.innerHeight && window.innerHeight > 350) {
      for (let element of elements) {
        element.style.height = window.innerHeight + 'px';
      }
    }
    if (window.innerHeight > window.innerWidth) {
      updateClientPosition({
        clientX: window.innerWidth / 2,
        clientY: 0
      });
    } else {
      updateClientPosition({
        clientX: window.innerWidth / 2,
        clientY: window.innerHeight / 2
      });
    }
    document.addEventListener('mousemove', updateClientPosition, false);
    document.addEventListener('touchstart', (e) => {
      if (e.target.nodeName !== 'A') {
        e.preventDefault();
      }
      document.removeEventListener('mousemove', updateClientPosition, false);
    }, {
      passive: false
    });
    document.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const lastTouch = e.changedTouches[e.changedTouches.length - 1];
      if (lastTouch) {
        updateClientPosition(lastTouch);
      }
    }, {
      passive: false
    });
  })
  
  function updateClientPosition(e) {
    document.body.style.setProperty('--x', (e.clientX) + 'px');
    document.body.style.setProperty('--y', (e.clientY) + 'px');
  }
  
  function startVideo(video) {
    video.style.opacity = 1;
    video.play();
  }
  
  function removeVideoControls(video, controls) {
    video.removeAttribute('controls');
    if (controls) {
      controls.style.visibility = 'visible';
    }
  }
  
  function stopVideo(containerVideo, video) {
    video.pause();
    containerVideo.style.display = 'none';
  }
  
  function onUpdate(containerVideo, video, htmlContent) {
    if(video.currentTime >= 3.2) {
    htmlContent.classList.add('apparition');
    prepareEnd(containerVideo, htmlContent);
    } else if (video.currentTime >= 3) {
      prepareEnd(containerVideo, htmlContent);
    }
  }
  
  function prepareEnd(containerVideo, htmlContent) {
    containerVideo.style.opacity = 0;
  }