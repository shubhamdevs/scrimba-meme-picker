import {catsData} from './data.js'

const emtionRadios = document.getElementByIdJ('emotion-radios')

function getEmotionsArray(cats) {
    const emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            emotionsArray.push(emotion)
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats) {
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions) {
        radioItems += `<p>${emotion}</p>`
    }
    emtionRadios.innerHTML = radioItems
}