'use strict'

var gElCanvas
var gCtx

function onInit() {
  renderGallery()
  renderFilterBy()
  createCanvas()
  resizeCanvas()

  addListeners()

  if (!gMeme) gMeme = createMeme()
  renderCanvas()
}

function addListeners() {
  window.addEventListener('resize', () => {
    resizeCanvas()
    renderCanvas()
  })

  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mouseup', onUp)

  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchend', onUp)
}

function createCanvas() {
  gElCanvas = document.querySelector('.main-canvas')
  gCtx = gElCanvas.getContext('2d')
}

function onToggleMenu() {
  document.body.classList.toggle('open-menu')
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  // Note: changing the canvas dimension this way clears the canvas
  gElCanvas.width = elContainer.offsetWidth
  // Unless needed, better keep height fixed.
  gElCanvas.height = elContainer.offsetHeight
}

function onOpenEditor() {
  document.querySelector('.gallery-container').classList.add('hide')
  document.querySelector('.editor-container').classList.remove('hide')
  document.querySelector('.gallery-meme-container').classList.add('hide')

  renderEmojisEditor()
  renderCanvas()
  onInit()
}

function onOpenGallery() {
  document.querySelector('.gallery-container').classList.remove('hide')
  document.querySelector('.editor-container').classList.add('hide')
  document.querySelector('.gallery-meme-container').classList.add('hide')
}

function onOpenMemeSaved() {
  document.querySelector('.gallery-meme-container').classList.remove('hide')
  document.querySelector('.gallery-container').classList.add('hide')
  document.querySelector('.editor-container').classList.add('hide')

  renderSavedMemes()
}
