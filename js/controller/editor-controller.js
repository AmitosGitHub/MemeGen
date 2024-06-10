'use strict'

function onDrawText() {
  const elTxt = document.querySelector('.inputTxt').value

  setTextMeme(elTxt)
  //   drawText(elTxt)
  renderCanvas()
}

function renderCanvas() {
  clearCanvas()

  drawImg()

  setTimeout(() => {
    drawLineText()
    gMeme.lines.forEach((item, idx) => {
      if (!item.txt) drawText('writing...', gElCanvas.width / 2, idx * 200 + 50)
      else drawText(item.txt, gElCanvas.width / 2, idx * 200 + 40)
    })
  }, 40)
}
