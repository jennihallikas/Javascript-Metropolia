'use strict';

document.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const query = document.querySelector('#query').value
    try {
        const proxy = 'https://api.allorigins.win/get?url=';
        const search = 'https://api.tvmaze.com/search/shows?q='+ query;
        const web = proxy + encodeURIComponent(search);

        const response = await fetch(web);
        if (!response.ok) throw new Error('Invalid input');
        const APIdata = await response.json();
        console.log(APIdata)
    } catch (e) {
        console.log('error', e);
    }
});
