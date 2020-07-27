import {url,apiKey,options,headers} from './data.js';

import {getDatas,displayDatas} from './functions.js';

// Target Inputs
const inputTitle = document.querySelector('#title')
const inputUrl = document.querySelector('#url');
const form = document.querySelector('#form');
const getUrl = document.querySelector('#getUrl');

//Get Value
const fetchDatas = async (e) => {

    e.preventDefault();

    const urlToShorten = inputUrl.value;
    const title = inputTitle.value;

    const dataSend = {
        title : title,
        slashtag : title.split(' ').join('-'),
        destination : urlToShorten,
    };

        // console.log(dataSend);

    options.body = JSON.stringify(dataSend);

    //Fetch
    try {
        const response = await fetch(url,options);

        if(response.ok){

            const datas = await response.json();

            // console.log(datas);

             //Mix Data
            let mixedDatas = {
                title : title,
                url : datas.shortUrl,
                creator : datas.creator.fullName,
                date : new Date(datas.updatedAt),
                id : datas.id,
            }
            
            debugger

            //Display
            displayDatas(mixedDatas);

            return {datas,mixedDatas};

        }

        throw new Error('Request Invalide');

    } catch (error) {
        console.log(error);
    }

}

// Submit datas
form.addEventListener('submit', fetchDatas);


