const searchSongs = async() =>{
    const searchBar = document.getElementById('search-bar').value ;
    //console.log(searchBar);
    const url = `https://api.lyrics.ovh/suggest/:${searchBar}` ;
    //console.log(url);

    try{
        const res = await fetch(url);
        const data = await res.json();
        displaySongs(data.data);

    }

    catch{
        console.log(error);
    }

    

}


const displaySongs = songs =>{
    
    const songContainer = document.getElementById('song-container');
    songContainer.innerHTML = '';
    songs.forEach(song => {
        // console.log(song);
        const songDiv = document.createElement('div');
        songDiv.className ='single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${song.title}</h3>
                        <p class="author lead">Album by <span>${song.artist.name}</span></p>
                        <audio controls>
                            <source src="${song.preview}" type="audio/ogg">
                            
                        </audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button oncLick = " getLiric('${song.artist.name}' , '${song.title}')" class="btn btn-success">Get Lyrics</button>
                    </div>
        `
        songContainer.appendChild(songDiv);
    })
}


// async await

// const getLiric = async (artist , title) =>{
//    const url = `https://api.lyrics.ovh/v1/:${artist}/:${title}`
//    const res = await fetch(url);
//    const data =  await res.json();
//    getsongLyrics(data.lyrics);
// }



// fetch api 

const getLiric =(artist , title) =>{
   const url = `https://api.lyrics.ovh/v1/:${artist}/:${title}`
   fetch(url)
   .then(res => res.json())
   .then(data => {

    
       getsongLyrics(data.lyrics);
   })

   .catch(error => displayError("SOmething willbe wrong ! try ageain letter!"));




  
}

const getsongLyrics = lirics =>{
    const LiricsDiv = document.getElementById('songLyrics');
    LiricsDiv.innerText = lirics ;

}



const displayError =(error) => {
    const errorTag = document.getElementById('errorMsg');
    errorTag.innerText = error ;
}
