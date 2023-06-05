const songsList = [{
    name: "Tip Tip Barsa Meme",
    filename: "tipTipBarsaMeme.mp3"
},
{
    name: "Food Songs",
    filename: "foodSongs.mp3"

},
{
    name: "2080 ko Khasi",
    filename: "2080koKhasi.mp3"
},
{
    name: "Baby Shark",
    filename: "BabySharkAgain.mp3"
},
{
    name: "Electronic Arts (Ea hus)",
    filename: "ElectronicArts(Ea_hus).mp3"
},
{
    name: "Ganga putra ho toh bejawo",
    filename: "Gangaputrahotohbejawo.mp3"
},
{
    name: "My bad remix of The Godfather Theme",
    filename: "MybadremixofTheGodfathertheme.mp3"
},
{
    name: "NahNah",
    filename: "NahNah.mp3"
},
{
    name: "Nepal Telecom Tone",
    filename: "NepalTelecomTone.mp3"
},
{
    name: "Nirbachan(2078_2022)",
    filename: "Nirbachan(2078_2022).mp3"
},
{
    name: "Padhe paxi aauxa disa",
    filename: "Padhepaxiaauxadisa.mp3"
},
{
    name: "Quadratic Formula",
    filename: "QuadraticFormula.mp3"
},
{
    name: "Shayad Remix",
    filename: "ShayadRemix.mp3"
},
{
    name: "THANKOT",
    filename: "THANKOT.mp3"
}
];

let songOptions = "<option selected>Select Song</option>";

for (let songIndex = 0; songIndex < songsList.length; songIndex++) {
    songOptions += `<option value=${songsList[songIndex].filename}>${songsList[songIndex].name}</option>`;
}

document.getElementById("songSelector").innerHTML = songOptions;

function loadSong() {
    const nameOfSong = document.getElementById("songSelector").value;
    const audio = document.getElementById("audio");
    const songSource = document.getElementById("songSource");

    songSource.src = "./audios/" + nameOfSong;

    audio.load();
}

