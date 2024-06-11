'use strict'

function renderGallery() {
  var strHtml = ''

  const imgs = getGalleryImgs()

  imgs.forEach(
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
  document.querySelector('.gallery-container').classList.add('hide')
  document.querySelector('.editor-container').classList.remove('hide')
}

function openGallery() {
  document.querySelector('.gallery-container').classList.remove('hide')
  document.querySelector('.editor-container').classList.add('hide')
}
