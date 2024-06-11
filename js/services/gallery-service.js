'use strict'

var gImgs = [
  { id: 1, url: 'style/img/meme-square/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'style/img/meme-square/2.jpg', keywords: ['funny', 'cat'] },
  { id: 3, url: 'style/img/meme-square/3.jpg', keywords: ['funny', 'cat'] },
  { id: 4, url: 'style/img/meme-square/4.jpg', keywords: ['funny', 'cat'] },
  { id: 5, url: 'style/img/meme-square/5.jpg', keywords: ['funny', 'cat'] },
  { id: 6, url: 'style/img/meme-square/6.jpg', keywords: ['funny', 'cat'] },
  { id: 7, url: 'style/img/meme-square/7.jpg', keywords: ['funny', 'cat'] },
  { id: 8, url: 'style/img/meme-square/8.jpg', keywords: ['funny', 'cat'] },
  { id: 9, url: 'style/img/meme-square/9.jpg', keywords: ['funny', 'cat'] },
  { id: 10, url: 'style/img/meme-square/10.jpg', keywords: ['funny', 'cat'] },
  { id: 11, url: 'style/img/meme-square/11.jpg', keywords: ['funny', 'cat'] },
  { id: 12, url: 'style/img/meme-square/12.jpg', keywords: ['funny', 'cat'] },
  { id: 13, url: 'style/img/meme-square/13.jpg', keywords: ['funny', 'cat'] },
  { id: 14, url: 'style/img/meme-square/14.jpg', keywords: ['funny', 'cat'] },
  { id: 15, url: 'style/img/meme-square/15.jpg', keywords: ['funny', 'cat'] },
  { id: 16, url: 'style/img/meme-square/16.jpg', keywords: ['funny', 'cat'] },
  { id: 17, url: 'style/img/meme-square/17.jpg', keywords: ['funny', 'cat'] },
  { id: 18, url: 'style/img/meme-square/18.jpg', keywords: ['funny', 'cat'] },
]

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function setSelectedImg(idx) {
  gMeme.selectedImgId = idx
}

function getGalleryImgs() {
  return gImgs
}
