let button = document.querySelectorAll('.btn');
let boxes = document.querySelectorAll('.box');
let searhbox = document.querySelector('#search');


searhbox.addEventListener('keyup',(e)=>{
    searhtext = e.target.value.trim();
    boxes.forEach((box)=>{
        let  data = box.dataset.item;
        if(data.includes(searhtext)){
            box.style.display ='block'
            box.style.width  = '600px ';
            box.style.height = '300px';
            
        }
        else{
            box.style.display = 'none';
        }
    });
    });

