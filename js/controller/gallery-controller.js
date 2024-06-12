'use strict'

function renderGallery() {
  let strHtml = ''

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
  setFilterBy(elFilterBy)

  renderGallery()
  renderFilterBy()
  markSelectFilter(elFilterBy)
}

function onSearchImg(elInput, isFocus = true) {
  searchImg(elInput.value)
  if (!isFocus) elInput.value = ''

  renderGallery()
}

function renderFilterBy() {
  const keyWordMap = getKeywordSearchCountMap()
  let strHTML = ''

  for (const key in keyWordMap) {
    const count = keyWordMap[key]

    strHTML += `<li class="${key}" onclick="onFilterBy('${key}')" style="font-size: ${
      count / 10
    }rem;">${key}</li>`
  }

  document.querySelector('.filterList').innerHTML = strHTML
}

function markSelectFilter(elFilterBy) {
  const elLists = document.querySelectorAll('.filterList li')

  elLists.forEach((li) => {
    if (li.classList.value.includes(elFilterBy)) li.classList.add('active')
    if (
      li.classList.value.includes('active') &&
      !li.classList.value.includes(elFilterBy)
    )
      li.classList.remove('active')
  })
}
