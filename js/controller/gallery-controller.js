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
  onOpenEditor()

  renderCanvas()
}

function onOpenEditor() {
  document.querySelector('.gallery-container').classList.add('hide')
  document.querySelector('.editor-container').classList.remove('hide')
}

function onOpenGallery() {
  document.querySelector('.gallery-container').classList.remove('hide')
  document.querySelector('.editor-container').classList.add('hide')
}

function onFilterBy(elFilterBy) {
  console.log(elFilterBy)
  filterBy(elFilterBy)

  renderGallery()
}

function onSearchImg(elInput, isFocus = true) {
  searchImg(elInput.value)
  if (!isFocus) elInput.value = ''

  renderGallery()
}
