const generateMessage = (username, text) => {

    return {
        username,
        text,
        createdAt: new Date().getTime()
    }

}

const generateLocationMessage = (username, url) => {

    return {
        username,
        url,
        createdAt: new Date().getTime()
    }

}

const generateMediaMessage = (username, imageData) => {
    
    return {
        username,
        imageData,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage,
    generateLocationMessage,
    generateMediaMessage
}