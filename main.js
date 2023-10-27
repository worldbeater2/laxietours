


window.addEventListener('load', function () {
    document.getElementById('play-button').addEventListener('click', function () {
      this.style.display = 'none';
      document.getElementById('thumbnail-container').style.display = 'none';
      document.getElementById('video-iframe').style.display = 'block';
    });
  });