'use strict'

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'I sometimes eat Falafel',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
}

function drawText(txt, x = gElCanvas.width / 2, y = gElCanvas.height / 2) {
  clearCanvas()
  gCtx.beginPath()
  gCtx.textBaseline = 'middle'
  gCtx.textAlign = 'center'
  gCtx.lineWidth = 1
  gCtx.font = '40px david'
  gCtx.fillStyle = 'yellow'
  gCtx.fillText(txt, x, y)
  gCtx.strokeStyle = 'green'
  gCtx.strokeText(txt, x, y)
  gCtx.closePath()
}

function drawRect(x, y) {
  gCtx.beginPath()
  gCtx.rect(x, y, 200, 200)
  //   gCtx.fillStyle = gClrFill
  //   gCtx.fillRect(x, y, 200, 200)
  gCtx.strokeStyle = 'black'
  gCtx.stroke()
  gCtx.closePath()
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function drawImg() {
  const img = new Image()
  img.src = 'img/img01.jpg'
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}
