const songsList = [{
    name: "Tip Tip Barsa Meme",
    filename: "tipTipBarsaMeme.mp3"
},
{
    name: "This is Business",
    filename: "ThisisBusiness.mp3"
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
},
{
    name: "Jai Shree Ram",
    filename: "JaiShreeRam.mp3"
},
{
    name: "Himal",
    filename: "Himal.mp3"
},
{
    name: "Apna Bana Le",
    filename: "ApnaBanaLe.mp3"
},
{
    name: "Phone Aayo",
    filename: "PhoneAayo.mp3"
},
{
    name: "Himal[V]",
    filename: "Himal[V].mp4"
},
{
    name: "I am Jesus my Son[V]",
    filename: "IamJesusmySon[V].mp4"
},
{
    name: "Sandesh Chettri[V]",
    filename: "SandeshChettri[V].mp4"
},
{
    name: "Subham Reule[V]",
    filename: "SubhamReule[V].mp4"
},
{
    name: "Sagarmatha[V]",
    filename: "Sagarmatha[V].mp4"
},
{
    name: "CH(URAQT).mp3",
    filename: "CH(URAQT).mp3"
},
{
    name: "Kritish[V]",
    filename: "leleramram.mp4"
},
{
    name: "Dikshya(DJ)[V]",
    filename: "DJ.mp4"
},
{
    name: "JJ Badarni",
    filename: "JJBadarni.mp3"
},
{
    name: "Angish[V]",
    filename: "AngishSapkota.mp4"
},
{
    name: "Harpic Shorma",
    filename: "HarpicShorma.mp3"
},
{
    name: "Rahe Na Rahe Hum",
    filename: "rahenarahehum.mp3"
},
{
    name: "Lukka Chuppi",
    filename: "LukaChuppiCover.mp3"
},
{
    name: "Shri Ram Chandra Kripalu",
    filename: "ShriRamChandraKripalu.mp3"
},
{
    name: "Areli Kadai le Malai[V]",
    filename: "areliKadaiLeMalai.mp4"
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
    const video = document.getElementById("video");

    songSource.src = "./audios/" + nameOfSong;
    video.src = "./videos/" + nameOfSong;

    audio.load();
}

