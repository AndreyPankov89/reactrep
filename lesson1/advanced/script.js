
let images = [
    'img/IMG_8128.jpg',
    'img/IMG_8133.JPG',
    'img/IMG_8197.JPG',
    'img/IMG_8398.JPG',
    'img/u.png'
]

function getImage(path){
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = ()=> resolve(path);
        img.onerror = ()=> reject(path);
        img.src=path
    })
}

const imgP = images.map(getImage);
let start = Promice.resolve();

const container = document.getElementById('container');

imgP.forEach(function(curPromise){
    start = start.then(function(){
        return curPromise;
    }).then(function(url){
        var img = document.createElement('img');
        img.src = url;
        
        container.appendChild(img);
    }).catch(function(err){
        console.log('Ошибка при загрузке:', err);
    });
});