'use strict'

function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}

function saveToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item))
}
