const songsList = [{
        name: "Tip Tip Barsa Meme",
        filename: "tipTipBarsaMeme.mp3"
    }, 
    {
        name: "Food Songs",
        filename: "foodSongs.mp3"
    
    }
];

let songOptions = "<option selected>Select Song</option>";

for (let songIndex = 0; songIndex < songsList.length; songIndex++) {
    songOptions += `<option value=${songsList[songIndex].filename}>${songsList[songIndex].name}</option>`;
}

document.getElementById("songSelector").innerHTML = songOptions;

function loadSong(){
    const nameOfSong = document.getElementById("songSelector").value;
    const audio = document.getElementById("audio");
    const songSource = document.getElementById("songSource");

    songSource.src = "./audios/" + nameOfSong;

    audio.load();
}

