'use strict'

function onDrawText(ev) {
  ev.preventDefault()

  let elTxt = document.querySelector('.inputTxt').value

  setTextMeme(elTxt)

  renderCanvas()
}

function renderCanvas() {
  const meme = getMeme()

  clearCanvas()

  const img = getImgMeme()

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    drawLineRect()

    meme.lines.forEach((line, idx) => {
      const currLine = getLineTxt(idx)
      drawText(currLine)
    })

    if (meme.emojis.length > 0) {
      meme.emojis.forEach((emoji) => drawEmoji(emoji))
    }
  }

  let elTxt = document.querySelector('.inputTxt')
  const lineTxt = getLineTxt()
  if (lineTxt.txt === 'New Line') elTxt.value = ''
  else elTxt.value = lineTxt.txt
}

function onChangeColor(clr) {
  setChangeColor(clr)

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
