"use strict";

document.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    const query = document.querySelector('#query').value;
    try {
        const proxy = 'https://api.allorigins.win/get?url=';
        const search = 'https://api.tvmaze.com/search/shows?q='+ query;
        const web = proxy + encodeURIComponent(search);

        const response = await fetch(web);
        if (!response.ok) throw new Error('Invalid input');
        const APIdata = await response.json();
        console.log(APIdata)

        const container = document.getElementById('show');
        const a = document.createElement('a');
        a.innerHTML = APIdata[0]['show']['name'];
        container.appendChild(a);

        const img = document.createElement('img');
        img.src = APIdata[0]['show']['image']['medium'];
        img.alt = APIdata[0]['show']['name'];
        container.appendChild(img);

        const des = document.createElement('p');
        des.innerHTML = APIdata[0]['show']['summary'];
        container.appendChild(des);

        const link = document.createElement('a');
        link.href = APIdata[0]['show']['url'];
        link.target = "_blank";
        link.innerHTML = APIdata[0]['show']['url'];
        container.appendChild(link);

    } catch (error) {
        console.log('error', error);
    }
});
