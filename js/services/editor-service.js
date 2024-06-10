'use strict'

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'writing...',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
}

function setTextMeme(txt) {
  gMeme.lines[0].txt = txt
}

function drawText(txt, x = gElCanvas.width / 2, y = gElCanvas.height / 2) {
  gCtx.beginPath()
  gCtx.textBaseline = 'middle'
  gCtx.textAlign = 'center'
  gCtx.lineWidth = 1
  gCtx.font = '40px david'
  gCtx.fillStyle = 'white'
  gCtx.fillText(txt, x, y)
  gCtx.strokeStyle = 'black'
  gCtx.strokeText(txt, x, y)
  gCtx.closePath()
}

function drawLineText() {
  drawRect(20, 10)
}

function drawRect(x, y) {
  gCtx.beginPath()
  gCtx.rect(x, y, gElCanvas.width - 50, 60)
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.stroke()
  gCtx.closePath()
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function drawImg() {
  const img = new Image()
  img.src = `style/img/meme-square/${gMeme.selectedImgId}.jpg`
  // gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}
