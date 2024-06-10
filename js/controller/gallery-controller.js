'use strict'

function renderGallery() {
  var strHtml = ''

  gImgs.forEach(
    (img, idx) =>
      (strHtml += `
         <article onclick="onSelectedImg(this,${idx + 1})">
           <img src="${img.url}" alt="image" />
         </article>
         `)
  )

  document.querySelector('.gallery-content').innerHTML = strHtml
}

function onSelectedImg(elImg, idx) {
  setSelectedImg(idx)
  openEditor()

  renderCanvas()
}

function openEditor() {
  document.querySelector('.gallery-container').hidden = true
  document.querySelector('.editor-container').hidden = false
}

function openGallery() {
  document.querySelector('.gallery-container').hidden = false
  document.querySelector('.editor-container').hidden = true
}
