'use strict'

var gElCanvas
var gCtx

function onInit() {
  renderGallery()
  renderFilterBy()
  InitCanvas()

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
