

function wallpaperSlider (listaImg, className) {
    const box = document.querySelector(className);

    listaImg.forEach(item  => {
        let img = document.createElement('img')
        img.src = item;
        img.className = 'img_slider'
        img.alt = 'image'
        box.appendChild(img)
    })

    let contador = 0;

    function slider() {
        contador ++;
        
        if(contador > listaImg.length - 1) {
            contador = 0;
        }
        console.log(listaImg.length)
        box.style.transform = `translateX(${- contador * 100}vw)`;
    }

    setInterval(slider, 2000)
}

let images = ['/img2/sala_reuniao01.jpg', '/img2/sala_reuniao02.jpg', '/img2/sala_reuniao03.jpg', '/img2/sala_reuniao04.jpg', '/img2/sala_reuniao05.jpg', '/img2/sala_reuniao06.jpg', '/img2/sala_reuniao07.jpg', '/img2/sala_reuniao08.jpg', '/img2/sala_reuniao09.jpg', '/img2/sala_reuniao10.jpg' ]
wallpaperSlider(images, '.container')