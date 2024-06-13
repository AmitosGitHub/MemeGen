'use strict'

var gImgs = [
  {
    id: 1,
    url: 'style/img/meme-square/1.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 2,
    url: 'style/img/meme-square/2.jpg',
    keywords: ['funny', 'dog', 'animal'],
  },
  {
    id: 3,
    url: 'style/img/meme-square/3.jpg',
    keywords: ['funny', 'dog', 'baby', 'animal'],
  },
  {
    id: 4,
    url: 'style/img/meme-square/4.jpg',
    keywords: ['funny', 'cat', 'animal'],
  },
  {
    id: 5,
    url: 'style/img/meme-square/5.jpg',
    keywords: ['funny', 'baby', 'human', 'person'],
  },
  {
    id: 6,
    url: 'style/img/meme-square/6.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 7,
    url: 'style/img/meme-square/7.jpg',
    keywords: ['funny', 'kids', 'human', 'person'],
  },
  {
    id: 8,
    url: 'style/img/meme-square/8.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 9,
    url: 'style/img/meme-square/9.jpg',
    keywords: ['funny', 'baby', 'kids', 'human', 'person'],
  },
  {
    id: 10,
    url: 'style/img/meme-square/10.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 11,
    url: 'style/img/meme-square/11.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 12,
    url: 'style/img/meme-square/12.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 13,
    url: 'style/img/meme-square/13.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 14,
    url: 'style/img/meme-square/14.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 15,
    url: 'style/img/meme-square/15.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 16,
    url: 'style/img/meme-square/16.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 17,
    url: 'style/img/meme-square/17.jpg',
    keywords: ['funny', 'human', 'person'],
  },
  {
    id: 18,
    url: 'style/img/meme-square/18.jpg',
    keywords: ['funny', 'toys', 'movie', 'toy'],
  },
]

var gKeywordSearchCountMap = {
  All: 25,
  Funny: 12,
  Dog: 16,
  Animal: 20,
  Movie: 10,
}
var gFilterBy = 'All'
var gSearch = ''

function setSelectedImg(idx, src) {
  gMeme.selectedImgId = idx
  gMeme.imgUpSrc = src
}

function getGalleryImgs() {
  let imgs = []
  //-------- searching--------
  if (gSearch)
    imgs = gImgs.filter((img) =>
      img.keywords.includes(
        gSearch || gSearch.charAt(0).toUpperCase() + gSearch.slice(1)
      )
    )

  if (!imgs || imgs.length === 0 || !gSearch || gFilterBy === 'All') {
    imgs = JSON.parse(JSON.stringify(gImgs))
  }

  if (gFilterBy !== 'All')
    imgs = imgs.filter((img) =>
      img.keywords.includes(
        gFilterBy.charAt(0).toLowerCase() + gFilterBy.slice(1)
      )
    )
  return imgs
}

function setFilterBy(filterBy) {
  gFilterBy = filterBy
  setKeywordSearchCountMap(filterBy)
}

function searchImg(txt) {
  gSearch = txt
}

function setKeywordSearchCountMap(filterBy) {
  gKeywordSearchCountMap[filterBy]++

  if (gKeywordSearchCountMap[filterBy] >= 30) {
    for (const key in gKeywordSearchCountMap) {
      gKeywordSearchCountMap[key] /= 2
    }
  }
}

function getKeywordSearchCountMap() {
  return gKeywordSearchCountMap
}
