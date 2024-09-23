const tituloCancion =document.querySelector('.reproductor-musica h1');
const nombreArtista =document.querySelector('.reproductor-musica p'); 

const progreso =document.getElementById('progreso');
const cancion =document.getElementById('cancion');

const iconoControl =document.getElementById('iconoControl');
const botonReproducirPausar =document.querySelector('.controles button.boton-reproducir-pausar');

const botonAtras =document.querySelector('.controles button.atras');
const botonAdelante =document.querySelector('.controles button.adelante'); 

const canciones = [
    {titulo:'Woyo Woyo',
    nombre:'Gabiboi feat. Jaze',
    fuente: 'music/gabiboi - woyo woyo feat. Jaze.mp3', 
    },
    {titulo:'Sweet Dreams',
    nombre:'Lost Frequencies',
    fuente:'music/Lost Frequencies - Sweet Dreams.mp3',
    },
    {titulo:'Pinta Nomá',
    nombre:'Jaze',
    fuente:'music/Jaze - Pinta Nomá.mp3',
    },
    {titulo:'M.A.I',
    nombre:'Milo J',
    fuente:'music/MILO J - M.A.I.mp3',
    },
    {titulo:'VOS',
    nombre:'Rusherking',
    fuente:'music/Rusherking - VOS (Ensayo Luna Park).mp3',
    },
    {titulo:'Melón Vino',
    nombre:'Wos',
    fuente:'music/WOS - MELON VINO.mp3',
    },
    {titulo:'Alma Dinamita',
    nombre:'Wos',
    fuente:'music/ALMA DINAMITA.mp3',
    },
    {titulo:'Nadie Más',
    nombre:'Tiago PZK',
    fuente:'music/Tiago PZK - Nadie Más.mp3',
    },
    {titulo:'Only',
    nombre:'Lee Hi',
    fuente:'music/Lee Hi - ONLY.mp3',
    },
    {titulo:'Ojitos Lindos',
    nombre:'Bad Bunny feat. Bomba Estéreo',
    fuente:'music/Bad Bunny (ft. Bomba Estéreo) - Ojitos Lindos.mp3',
    },
    {titulo:'Me Rehuso',
    nombre:'Danny Ocean',
    fuente:'music/Danny Ocean -  Me Rehúso.mp3',
    },
    {titulo:'Báilame',
    nombre:'Danny Ocean',
    fuente:'music/Danny Ocean - Báilame.mp3',
    },
    {titulo:'Desire',
    nombre:'Olly Alexander (Gryffin Remix)',
    fuente:'music/Olly Alexander - Desire (Gryffin Remix).mp3',
    },
    {titulo:'Lunares',
    nombre:'Jaze',
    fuente:'music/Jaze - Lunares.mp3',
    },
    {titulo:'Reloj Vital',
    nombre:'Jaze',
    fuente:'music/Jaze - Reloj Vital.mp3',
    },
    {titulo:'Don´t Forget My Love ',
    nombre:'Diplo & Miguel',
    fuente:'music/Diplo & Miguel - Dont Forget My Love.mp3',
    },
    {titulo:'Need You',
    nombre:'Julian Jordan feat. SMBDY',
    fuente:'music/Julian Jordan - Need You (feat. SMBDY).mp3',
    },
    {titulo:'There Is a Light That Never Goes Out',
    nombre:'The Smiths',
    fuente:'music/The Smiths - There Is a Light That Never Goes Out.mp3',
    },
    {titulo:'Moving Forward',
    nombre:'Julian Calor',
    fuente:'music/Julian Calor - Moving Forward.mp3',
    },
    {titulo:'Let You Go',
    nombre:'Diplo & TSHA feat. Kareen Lomax',
    fuente:'music/Diplo & TSHA - Let You Go (feat. Kareen Lomax).mp3',
    },
];

let indiceCancionActual = 0;

function actualizarInfoCancion (){
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    nombreArtista.textContent = canciones[indiceCancionActual].nombre;
    cancion.src = canciones[indiceCancionActual].fuente;
    cancion.addEventListener('loadeddata',function(){});
};

cancion.addEventListener('loadedmetadata',function(){
    progreso.max = cancion.duration;
    progreso.value = cancion.currentTime;
})

botonReproducirPausar.addEventListener('click', reproducirpausar);

function reproducirpausar(){
    if (cancion.paused){
        reproducirCancion();

    } else {
        pausarCancion();

    }
};

function reproducirCancion (){
    cancion.play();
    iconoControl.classList.add('bi-pause-fill')
    iconoControl.classList.remove('bi-play-fill')
};

function pausarCancion(){
    cancion.pause();
    iconoControl.classList.remove('bi-pause-fill')
    iconoControl.classList.add('bi-play-fill')
};

cancion.addEventListener('timeupdate',function(){
    if (!cancion.paused){
        progreso.value = cancion.currentTime;
    }
});

progreso.addEventListener('input',function(){
    cancion.currentTime = progreso.value;
});

//progreso.addEventListener('change',function(){
//    reproducirCancion();
//});

botonAdelante.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();
});

botonAtras.addEventListener('click', function(){
    indiceCancionActual = (indiceCancionActual - 1 + canciones.length) % canciones.length;
    actualizarInfoCancion();
    reproducirCancion();

    console.log(canciones.length)
});

actualizarInfoCancion();