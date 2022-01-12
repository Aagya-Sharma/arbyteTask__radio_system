const container = document.querySelector('.container');

datas.forEach(data=>{
    container.innerHTML += ` <div class="card-group">
    <div class="card mb-3" style="width: 15rem;display:flex">
    <img src="images/music.jpg" style="width:200px; height:100px;" class="card-img-top" alt="${data.name}">
    <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <button class="play btn btn-primary" onlick="play(${data.url})">Play Audio</button>
    <button class="pause btn btn-primary"onlick="pause(${data.url})" >Pause Audio</button>
    </div>
    </div>
    </div>`


});
const sound = new Audio();
const play = url=>{
    sound.src = url;
    sound.play();
}

const pause = url =>{
    sound.src= url;
    sound.pause();
}