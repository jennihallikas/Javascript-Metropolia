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

        for (let item of APIdata) {
            const container = document.createElement('show');
            const a = document.createElement('a');
            a.innerHTML = item['show']['name'];
            container.appendChild(a);

            const img = document.createElement('img');
            img.src = item['show']['image'] ?
                item['show']['image']['medium'] :
                'https://via.placeholder.com/243x342?text=image'
            img.alt = item['show']['name'];
            container.appendChild(img);

            const gnr = document.createElement('ul');
            for (let i = 0; i <= item['show']['genres'].length-1; i++){
                gnr.innerHTML += `<li> ${item['show']['genres'][i]} </li>`
                }
            container.appendChild(gnr)

            const des = document.createElement('p');
            des.innerHTML = item['show']['summary'];
            container.appendChild(des);

            const link = document.createElement('a');
            link.href = item['show']['url'];
            link.target = "_blank";
            link.innerHTML = item['show']['url'];
            container.appendChild(link);
            document.body.appendChild(container)
        }

    } catch (error) {
        console.log('error', error);
    }
});
