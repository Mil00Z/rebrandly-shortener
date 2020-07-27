
export {getDatas,displayDatas} ;

function getDatas(e) {

    e.preventDefault();

}

function displayDatas(mixedDatas, elementTag = '#result') {

    const target = document.querySelector(`${elementTag}`);

    if (!target){
        return ;
    }

    let link = document.createElement('a');
    link.setAttribute('href',`${mixedDatas.url}`);
    link.innerText = `${mixedDatas.title}`;
    link.dataset.id = `${mixedDatas.id}`;
    link.classList.add('shorten-link');

    let author = document.createElement('p');
    author.classList.add('author');
    author.innerText = `Updated by ${mixedDatas.creator}`;

    target.append(link,author);

}