'use strict'

function onDrawText(ev) {
  ev.preventDefault()

  let elTxt = document.querySelector('.inputTxt').value

  setTextMeme(elTxt)

  renderCanvas()
}

function renderCanvas() {
  clearCanvas()

  const img = getImgMeme()

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    drawLineRect()

    gMeme.lines.forEach((line, idx) => {
      // setSelectedLineIdx(idx)
      const currLine = getLineTxt(idx)
      drawText(currLine)
    })
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
