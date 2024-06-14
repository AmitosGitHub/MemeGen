'use strict'

var gStartPos
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function onDown(ev) {
  //   Getting the clicked position
  const pos = getEvPos(ev)
  //   { x: 15, y : 15 }
  if (!isShapeClicked(pos)) return
  renderCanvas()
  const shape = isShapeClicked(pos)
  setShapeDrag(shape, true)
  gStartPos = pos
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  const isDrag = gMeme.selectedShapeDrag.isDrag
  if (!isDrag) return

  const pos = getEvPos(ev)

  const dx = pos.x - gStartPos.x
  const dy = pos.y - gStartPos.y
  moveShape(dx, dy)
  gStartPos = pos
  renderCanvas()
}

function onUp() {
  setShapeDrag(gMeme.selectedShapeDrag, false)
  document.body.style.cursor = 'grab'
}

function getEvPos(ev) {
  var pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }
  // const gTouchEvs = ['touchstart', 'touchmove', 'touchend']
  if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault()
    ev = ev.changedTouches[0]
    pos = {
      x: ev.pageX - ev.target.offsetLeft,
      y: ev.pageY - ev.target.offsetTop,
    }
  }
  return pos
}

function isShapeClicked(clickedPos) {
  const line = gMeme.lines.find((line) => {
    const { x, y, width, height } = line.posRect
    if (
      x <= clickedPos.x &&
      clickedPos.x <= width + x &&
      y <= clickedPos.y &&
      clickedPos.y <= height + y
    )
      return line
  })
  if (line) {
    gMeme.selectedLineIdx = line.countLine
    return line
  }

  const emoji = gMeme.emojis.find((emoji) => {
    const { x, y } = emoji.pos
    const distance = Math.sqrt(
      (x - clickedPos.x) ** 2 + (y - clickedPos.y) ** 2
    )
    if (distance <= emoji.radius) return emoji
  })

  if (emoji) return emoji

  return null
}

function setShapeDrag(shape, isDrag) {
  shape.isDrag = isDrag
  if (isDrag) gMeme.selectedShapeDrag = shape
  else gMeme.selectedShapeDrag = ''
}

function moveShape(dx, dy) {
  const shape = gMeme.selectedShapeDrag
  if (shape.type === 'txt') {
    shape.pos.x += dx
    shape.pos.y += dy

    shape.posRect.x += dx
    shape.posRect.y += dy
  }

  if (shape.type === 'emoji') {
    shape.pos.x += dx
    shape.pos.y += dy
  }
}
