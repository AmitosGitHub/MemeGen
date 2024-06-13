'use strict'

// The next 2 functions handle IMAGE UPLOADING to img tag from file system:
function onImgInput(ev) {
  loadImageFromInput(ev, addNewImgGallery)
  // loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
  //   document.querySelector('.share-container').innerHTML = ''

  var reader = new FileReader()

  reader.onload = (event) => {
    var img = new Image()
    img.src = event.target.result
    // img.onload = () => addNewImgGallery(src)
    img.onload = onImageReady.bind(null, img)
  }
  reader.readAsDataURL(ev.target.files[0])
}

function addNewImgGallery(img) {
  gImgs.unshift({
    id: gImgs.length + 1,
    url: '',
    src: img.src,
    keywords: ['my', 'upload'],
  })
  renderGallery()
}

function downloadCanvas(elLink) {
  const data = gElCanvas.toDataURL()
  elLink.href = data
  elLink.download = 'canvas'
}
