'use strict'

function renderCanvas() {
  const meme = getMeme()
  const img = getImgMeme()

  img.onload = () => {
    resizeCanvas()
    setRatioImgToCanvas()
    clearCanvas()
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawLineRect()

    if (meme.lines.length > 0) {
      meme.lines.forEach((line, idx) => {
        const currLine = getLineTxt(idx)
        drawText(currLine)
      })
    }

    if (meme.emojis.length > 0) {
      meme.emojis.forEach((emoji) => drawEmoji(emoji))
    }
  }

  setInputTxt()
}

function onChangeColor(clr) {
  setChangeColor(clr)

  renderCanvas()
}

function onDrawText(ev) {
  ev.preventDefault()

  let elTxt = document.querySelector('.inputTxt').value

  setTextMeme(elTxt)

  renderCanvas()
}

function onChangeFontSize(size) {
  setChangeFontSize(size)

  renderCanvas()
}

function onAddLineTxt() {
  addLineTxt()

  renderCanvas()
}

function onSwitchLineTxt() {
  switchLineTxt()

  renderCanvas()
}

function onDeleteLineTxt() {
  deleteLineTxt()

  renderCanvas()
}

function onSelectedFont(font) {
  setSelectedFont(font)

  renderCanvas()
}

function onSelectedEmoji(emoji) {
  setSelectedEmoji(emoji)

  renderCanvas()
}

function setInputTxt() {
  let elTxt = document.querySelector('.inputTxt')
  const lineTxt = getLineTxt()
  if (lineTxt.txt === 'New Line') elTxt.value = ''
  else elTxt.value = lineTxt.txt
}

function renderEmojisEditor() {
  const emojis = getEmojis()
  const strHTML = emojis
    .map((emoji) => ` <li onclick="onSelectedEmoji('${emoji}')">${emoji}</li>`)
    .join('')

  document.querySelector('.nav-emoji-tools ul').innerHTML = strHTML
}

function onCreateFlexibleMeme() {
  createFlexibleMeme()

  renderCanvas()
}

function onSaveMeme() {
  saveMeme()

  renderSavedMemes()
}

function onDownloadCanvas(ev, memeId) {
  ev.stopPropagation()
  console.log(memeId)
}

function onEditMemeSaved(ev, memeId) {
  ev.stopPropagation()

  editMemeSaved(memeId)
  onOpenEditor()

  renderCanvas()
}

function onDeleteMemeSaved(ev, memeId) {
  ev.stopPropagation()
  console.log(memeId)
  deleteMemeSaved(memeId)

  renderSavedMemes()
}
