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

        const result = document.createElement('h1');
        result.innerHTML = 'Results'
        document.body.appendChild(result)

      for (let item of APIdata) {
            const container = document.createElement('div');
            const h2 = document.createElement('h2');
            h2.innerHTML = item['show']['name'];
            container.appendChild(h2);

            const img = document.createElement('img');
            img.src = item['show']['image'] ?
                item['show']['image']['medium'] :
                'https://via.placeholder.com/243x342?text=image'
            img.alt = item['show']['name'];
            container.appendChild(img);

            const genres = document.createElement('h3');
            genres.innerHTML = item['movie']['show']['genres'].join(' | ');
            container.appendChild(genres);

            const des = document.createElement('p');
            des.innerHTML = item['show']['summary'] ?
                `${item['show']['summary'].slice(0, 800)}...` :
                item['show']['summary']
            container.appendChild(des);

            const link = document.createElement('a');
            link.href = item['show']['url'];
            link.target = "_blank";
            link.innerHTML = 'Learn more';
            container.appendChild(link);
            document.body.appendChild(container)
        }

    } catch (error) {
        console.log(error.message);
    }
});
