'use strict'

var gElCanvas
var gCtx

function onInit() {
  renderGallery()
  renderFilterBy()
  InitCanvas()
  resizeCanvas()

  window.addEventListener('resize', () => {
    resizeCanvas()
    renderCanvas()
  })

  renderCanvas()
}

function InitCanvas() {
  gElCanvas = document.querySelector('.main-canvas')
  gCtx = gElCanvas.getContext('2d')
}

function onToggleMenu() {
  document.body.classList.toggle('open-menu')
}

function resizeCanvas() {
  var elContainer = document.querySelector('.canvas-container')
  // Note: changing the canvas dimension this way clears the canvas
  gElCanvas.width = elContainer.offsetWidth
  // Unless needed, better keep height fixed.
  gElCanvas.height = elContainer.offsetHeight
}

function onOpenEditor() {
  document.querySelector('.gallery-container').classList.add('hide')
  document.querySelector('.editor-container').classList.remove('hide')
}

function onOpenGallery() {
  document.querySelector('.gallery-container').classList.remove('hide')
  document.querySelector('.editor-container').classList.add('hide')
}
