'use strict'

var gElCanvas
var gCtx

function onInit() {
  renderGallery()
  InitCanvas()
}

function InitCanvas() {
  gElCanvas = document.querySelector('.main-canvas')
  gCtx = gElCanvas.getContext('2d')

  renderCanvas()
}
