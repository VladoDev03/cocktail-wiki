const createVideo = data => {
    let video;

    if (data.strVideo) {
        const videoId = data.strVideo.split('=')[1];
        video = $(`<div><iframe class="info-video" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`);
    } else {
        video = $('<h1 class="info-video no-video">There is no video tutorial for this cocktail.</h1>');
    }

    return video;
};
