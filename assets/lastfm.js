fetch(`https://lastfm-last-played.biancarosa.com.br/weiffoa/latest-song`)
    .then(response => response.json())
    .then(data => {
        const trackName = data.track.name;
        const artistName = data.track.artist['#text'];
        document.querySelector('.lastfm').textContent = `last played track: ${trackName} - ${artistName}`;
    })
    .catch(error => {
        console.error('loading err (last track)', error);
        document.querySelector('.lastfm').textContent = 'loading error, pls turn on vpn or api is down';
    });
