'use strict'

function renderGallery() {
  let strHtml = `
   <article class="card-upload-file">
    <input
      type="file"
      onchange="onImgInput(event)"
      accept=".jpg, .jpeg, .png"
    />
  </article>`

  const imgs = getGalleryImgs()

  imgs.forEach(
    (img, idx) =>
      (strHtml += `
         <article onclick="onSelectedImg(this,${img.id})">
           <img src="${img.url ? img.url : img.src}" alt="image" />
         </article>
         `)
  )

  document.querySelector('.gallery-content').innerHTML = strHtml
}

function onSelectedImg(elImg, idx) {
  const img = gImgs.find((img) => img.id === idx)
  setSelectedImg(idx, img.src)
  onOpenEditor()

  renderCanvas()
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
