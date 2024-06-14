'use strict'

var gMeme = {
  imgUpSrc: '',
  selectedImgId: 8,
  selectedLineIdx: 0,
  selectedShapeDrag: '',
  isDownloadImg: false,
  lines: [
    {
      id: makeId(),
      type: 'txt',
      txt: 'New Line',
      size: 50,
      align: 'center',
      color: 'white',
      font: 'david',
      pos: {
        x: 200,
        y: 60,
      },
      posRect: {
        x: 20,
        y: 20,
        width: 400,
        height: 60,
      },
      isDrag: false,
      countLine: 0,
    },
  ],
  emojis: [],
}

function setTextMeme(txt) {
  if (!txt) txt = 'New Line'
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function getMeme() {
  return gMeme
}

function getLineTxt(idx = gMeme.selectedLineIdx) {
  return gMeme.lines[idx]
}

function setSelectedLineIdx(idx) {
  gMeme.selectedLineIdx = idx
}

function drawText(currLine = getLineTxt()) {
  const x = currLine.pos.x
  const y = currLine.pos.y

  gCtx.beginPath()
  gCtx.textBaseline = 'middle'
  gCtx.textAlign = `${currLine.align}`
  gCtx.lineWidth = 1
  gCtx.font = `${currLine.size}px ${currLine.font}`
  gCtx.fillStyle = `${currLine.color}`
  gCtx.fillText(currLine.txt, x, y)
  gCtx.strokeStyle = 'black'
  gCtx.strokeText(currLine.txt, x, y)
  gCtx.closePath()
}

function drawLineRect() {
  const currLine = getLineTxt()
  const width = gCtx.measureText(currLine.txt).width * 5 + currLine.size
  // const height = currLine.posRect.height
  const height = currLine.size + 10
  const startX = currLine.pos.x - width / 2
  const startY = currLine.pos.y - 35
  drawRect(startX, startY, width, height)
}

function drawRect(x, y, width, height) {
  gCtx.beginPath()
  gCtx.rect(x, y, width, height)
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'grey'
  gCtx.stroke()
  gCtx.closePath()
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function drawImg() {
  // const img = new Image()
  // img.src = `style/img/meme-square/${gMeme.selectedImgId}.jpg`
  const img = getImgMeme()

  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
  }
}

function getImgMeme() {
  const img = new Image()
  if (!gMeme.imgUpSrc)
    img.src = `style/img/meme-imgs/${gMeme.selectedImgId}.jpg`
  else img.src = gMeme.imgUpSrc
  return img
}

function setChangeColor(clr) {
  getLineTxt().color = clr
}

function setChangeFontSize(size) {
  if (getLineTxt().size <= 15 && size < 0) return
  getLineTxt().size += size
}

function addLineTxt() {
  const newLine = createDefaultTxtLine()

  gMeme.lines.push(newLine)

  const idx = !gMeme.lines.length ? 0 : gMeme.lines.length - 1
  setSelectedLineIdx(idx)
}

function createDefaultTxtLine() {
  const posY = !gMeme.lines.length ? 60 : gMeme.lines.length * 100 + 60

  return {
    id: makeId(),
    type: 'txt',
    txt: 'New Line',
    size: 50,
    align: 'center',
    color: 'white',
    font: 'david',
    pos: {
      x: 200,
      y: posY,
    },
    posRect: {
      x: 20,
      y: posY - 30,
      width: 400,
      height: 60,
    },
    isDrag: false,
    countLine: gMeme.lines.length,
  }
}

function switchLineTxt() {
  let idx = gMeme.selectedLineIdx + 1
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) idx = 0

  setSelectedLineIdx(idx)
}

function deleteLineTxt() {
  if (!gMeme.lines) return

  const idx = gMeme.selectedLineIdx

  gMeme.lines.splice(idx, 1)

  gMeme.selectedLineIdx = idx > 0 ? idx - 1 : idx
}

function setSelectedFont(font) {
  gMeme.lines[gMeme.selectedLineIdx].font = font
}

function setSelectedEmoji(emoji) {
  gMeme.emojis.push({
    type: 'emoji',
    txt: emoji,
    size: 100,
    radius: 30,
    pos: { x: gElCanvas.width / 2, y: gElCanvas.height / 2 },
    isDrag: false,
  })
}

function drawEmoji(emoji) {
  gCtx.beginPath()
  gCtx.font = `${emoji.size}px`
  gCtx.fillText(emoji.txt, emoji.pos.x, emoji.pos.y)
  gCtx.closePath()
}

function setRatioImgToCanvas() {
  const img = getImgMeme()
  //The formula for calculating the height of the canvas (if the width of the canvas is predetermined)
  // CH=(IH*CW)/IW ----> I=image ,C=canvas ,H=height ,W=width
  const elContainer = document.querySelector('.canvas-container')

  const height = (img.height * gElCanvas.width) / img.width
  elContainer.style.height = height + 'px'
}
