
let images = [
    'img/IMG_8128.jpg',
    'img/IMG_8133.JPG',
    'img/IMG_8197.JPG',
    'img/IMG_8398.JPG',
    'img/u.png'
]

function loadImage(url)
{
	return new Promise(function(resolve, reject)
	{
		var img = new Image();
		img.onload = function()
		{
			return resolve(url);
		}
		img.onerror = function()
		{
			return reject(url);
		}
		img.src = url;
	});
}



function displayImages(images)
{
	var imgSrc = images.shift(); 
	if (!imgSrc) return; 

	return loadImage(imgSrc)
	.then(function(url)
	{
        let container = document.getElementById('container');
        let img = document.createElement('img');
        img.src = url;
		container.appendChild(img);
		return displayImages(images); 
	})
	.catch(function(url)
	{
		console.error('не удалось загрузить изображение по указанному пути: ', url);
		return displayImages(images); 
	});
}

displayImages(images);