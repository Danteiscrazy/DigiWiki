document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    const headerHeight = document.querySelector('.digi-header').offsetHeight;
    canvas.width = window.innerWidth;
    canvas.height = headerHeight;

    const symbols = 'デジモンDIGI|01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#00FF99';
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, index) => {
            const text = symbols[Math.floor(Math.random() * symbols.length)];
            const x = index * fontSize;
            ctx.fillText(text, x, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[index] = 0;
            }
            drops[index]++;
        });
    }

    setInterval(drawMatrix, 65);

    // Digimon del día
    const digimons = [
        //Adventure
        { name: 'Agumon', description: 'Un Digimon reptil valiente que digievoluciona a Greymon.', link: 'digimons.html#adventure', image: '../images/Digimons/Agumon.png' },
        { name: 'Gabumon', description: 'Un Digimon con piel de lobo que digievoluciona a Garurumon.', link: 'digimons.html#adventure', image: '../images/Digimons/Gabumon.png' },
        { name: 'Biyomon', description: 'Un Digimon ave rosada con un corazón cálido.', link: 'digimons.html#adventure', image: '../images/Digimons/Biyomon.png' },
        { name: 'Tentomon', description: 'Un Digimon insecto con gran inteligencia.', link: 'digimons.html#adventure', image: '../images/Digimons/Tentomon.png' },
        { name: 'Palmon', description: 'Un Digimon planta con un carácter fuerte.', link: 'digimons.html#adventure', image: '../images/Digimons/Palmon.png' },
        { name: 'Gomamon', description: 'Un Digimon acuático juguetón.', link: 'digimons.html#adventure', image: '../images/Digimons/Gomamon.png' },
        { name: 'Patamon', description: 'Un Digimon volador con un corazón puro.', link: 'digimons.html#adventure', image: '../images/Digimons/Patamon.png' },
        { name: 'Gatomon', description: 'Un Digimon felino con gran agilidad.', link: 'digimons.html#adventure', image: '../images/Digimons/Gatomon.png' },
        { name: 'Botamon', description: 'La forma Fresh de Agumon, un pequeño Digimon recién nacido.', link: 'digimons.html#adventure', image: '../images/Digimons/Botamon.png' },
        { name: 'Greymon', description: 'La digievolución de Agumon, un dinosaurio poderoso.', link: 'digimons.html#adventure', image: '../images/Digimons/Greymon.png' },
        { name: 'Garurumon', description: 'La digievolución de Gabumon, un lobo feroz.', link: 'digimons.html#adventure', image: '../images/Digimons/Garurumon.png' },
        { name: 'Birdramon', description: 'La digievolución de Biyomon, un ave de fuego.', link: 'digimons.html#adventure', image: '../images/Digimons/Birdramon.png' },
        { name: 'Kabuterimon', description: 'La digievolución de Tentomon, un insecto blindado.', link: 'digimons.html#adventure', image: '../images/Digimons/Kabuterimon.png' },
        { name: 'Togemon', description: 'La digievolución de Palmon, un cactus boxeador.', link: 'digimons.html#adventure', image: '../images/Digimons/Togemon.png' },
        { name: 'Ikkakumon', description: 'La digievolución de Gomamon, una bestia marina.', link: 'digimons.html#adventure', image: '../images/Digimons/Ikkakumon.png' },
        { name: 'Angemon', description: 'La digievolución de Patamon, un ángel guerrero.', link: 'digimons.html#adventure', image: '../images/Digimons/Angemon.png' },
        { name: 'Angewomon', description: 'La digievolución de Gatomon, un ángel celestial.', link: 'digimons.html#adventure', image: '../images/Digimons/Angewomon.png' },
        { name: 'LadyDevimon', description: 'Un Digimon demoníaco con un aura oscura.', link: 'digimons.html#adventure', image: '../images/Digimons/LadyDevimon.png' },
        { name: 'MetalSeadramon', description: 'Un Digimon marino gigante, villano en el Mundo Digital.', link: 'digimons.html#adventure', image: '../images/Digimons/MetalSeadramon.png' },
        { name: 'WereGarurumon', description: 'La digievolución avanzada de Gabumon, un lobo bípedo feroz.', link: 'digimons.html#adventure', image: '../images/Digimons/WereGarurumon.png' },
        { name: 'MetalGreymon', description: 'La digievolución avanzada de Agumon, un dinosaurio cyborg.', link: 'digimons.html#adventure', image: '../images/Digimons/MetalGreymon.png' },
        { name: 'WarGreymon', description: 'La digievolución definitiva de Agumon, un guerrero dragón.', link: 'digimons.html#adventure', image: '../images/Digimons/WarGreymon.png' },
        { name: 'MetalGarurumon', description: 'La digievolución definitiva de Gabumon, un lobo cyborg.', link: 'digimons.html#adventure', image: '../images/Digimons/MetalGarurumon.png' },
        { name: 'Devimon', description: 'Un Digimon maligno que controla las sombras.', link: 'digimons.html#adventure', image: '../images/Digimons/Devimon.png' },
        { name: 'Sukamon', description: 'Un Digimon hecho de desechos, con una personalidad cómica (Culo con caca).', link: 'digimons.html#adventure', image: '../images/Digimons/Sukamon.png' },
        //Adventure02
        { name: 'Veemon', description: 'Un Digimon dragón pequeño con gran corazón.', link: 'digimons.html#adventure02', image: '../images/Digimons/Veemon.png' },
        { name: 'Hawkmon', description: 'Un Digimon ave elegante y leal.', link: 'digimons.html#adventure02', image: '../images/Digimons/Hawkmon.png' },
        { name: 'Armadillomon', description: 'Un Digimon acorazado con un carácter relajado.', link: 'digimons.html#adventure02', image: '../images/Digimons/Armadillomon.png' },
        { name: 'Wormmon', description: 'Un Digimon insecto tímido pero valiente.', link: 'digimons.html#adventure02', image: '../images/Digimons/Wormmon.png' },
        { name: 'Flamedramon', description: 'La digievolución armada de Veemon con el Digi-Egg del Valor.', link: 'digimons.html#adventure02', image: '../images/Digimons/Flamedramon.png' },
        { name: 'Raidramon', description: 'La digievolución armada de Veemon con el Digi-Egg de la Amistad.', link: 'digimons.html#adventure02', image: '../images/Digimons/Raidramon.png' },
        { name: 'Aquilamon', description: 'La digievolución de Hawkmon, un águila majestuosa.', link: 'digimons.html#adventure02', image: '../images/Digimons/Aquilamon.png' },
        { name: 'Ankylomon', description: 'La digievolución de Armadillomon, un dinosaurio acorazado.', link: 'digimons.html#adventure02', image: '../images/Digimons/Ankylomon.png' },
        { name: 'Stingmon', description: 'La digievolución de Wormmon, un insecto guerrero.', link: 'digimons.html#adventure02', image: '../images/Digimons/Stingmon.png' },
        { name: 'ExVeemon', description: 'La digievolución natural de Veemon, un dragón fuerte.', link: 'digimons.html#adventure02', image: '../images/Digimons/ExVeemon.png' },
        { name: 'Paildramon', description: 'La digievolución DNA de ExVeemon y Stingmon.', link: 'digimons.html#adventure02', image: '../images/Digimons/Paildramon.png' },
        { name: 'Silphymon', description: 'La digievolución DNA de Aquilamon y Gatomon.', link: 'digimons.html#adventure02', image: '../images/Digimons/Silphymon.png' },
        //Tamers
        { name: 'Guilmon', description: 'Un Digimon creado por Takato, con instintos salvajes.', link: 'digimons.html#tamers', image: '../images/Digimons/Guilmon.png' },
        { name: 'Terriermon', description: 'Un Digimon conejo pequeño pero valiente.', link: 'digimons.html#tamers', image: '../images/Digimons/Terriermon.png' },
        { name: 'Renamon', description: 'Un Digimon zorro ágil y misterioso.', link: 'digimons.html#tamers', image: '../images/Digimons/Renamon.png' },
        { name: 'Growlmon', description: 'La digievolución de Guilmon, un dragón feroz.', link: 'digimons.html#tamers', image: '../images/Digimons/Growlmon.png' },
        { name: 'Gargomon', description: 'La digievolución de Terriermon, un cazador armado.', link: 'digimons.html#tamers', image: '../images/Digimons/Gargomon.png' },
        { name: 'Kyubimon', description: 'La digievolución de Renamon, un zorro de nueve colas.', link: 'digimons.html#tamers', image: '../images/Digimons/Kyubimon.png' },
        { name: 'WarGrowlmon', description: 'La digievolución avanzada de Guilmon, un cyborg dragón.', link: 'digimons.html#tamers', image: '../images/Digimons/WarGrowlmon.png' },
        { name: 'Rapidmon', description: 'La digievolución avanzada de Terriermon, un guerrero veloz.', link: 'digimons.html#tamers', image: '../images/Digimons/Rapidmon.png' },
        { name: 'Taomon', description: 'La digievolución avanzada de Renamon, un mago místico.', link: 'digimons.html#tamers', image: '../images/Digimons/Taomon.png' },
        { name: 'Impmon', description: 'Un Digimon travieso con un lado oscuro.', link: 'digimons.html#tamers', image: '../images/Digimons/Impmon.png' },
        { name: 'Beelzemon', description: 'La digievolución de Impmon, un demonio motociclista.', link: 'digimons.html#tamers', image: '../images/Digimons/Beelzemon.png' },
        { name: 'Calumon', description: 'Un Digimon pequeño que facilita la digievolución.', link: 'digimons.html#tamers', image: '../images/Digimons/Calumon.png' },
        { name: 'Agunimon', description: 'La forma Digimon de Takuya con el Espíritu Humano del Fuego.', link: 'digimons.html#frontier', image: '../images/Digimons/Agunimon.png' },
        { name: 'Lobomon', description: 'La forma Digimon de Koji con el Espíritu Humano de la Luz.', link: 'digimons.html#frontier', image: '../images/Digimons/Lobomon.png' },
        { name: 'Kazemon', description: 'La forma Digimon de Zoe con el Espíritu Humano del Viento.', link: 'digimons.html#frontier', image: '../images/Digimons/Kazemon.png' },
        { name: 'Beetlemon', description: 'La forma Digimon de J.P. con el Espíritu Humano del Trueno.', link: 'digimons.html#frontier', image: '../images/Digimons/Beetlemon.png' },
        { name: 'Kumamon', description: 'La forma Digimon de Tommy con el Espíritu Humano del Hielo.', link: 'digimons.html#frontier', image: '../images/Digimons/Kumamon.png' },
        { name: 'BurningGreymon', description: 'La forma Bestia de Takuya con el Espíritu Bestia del Fuego.', link: 'digimons.html#frontier', image: '../images/Digimons/BurningGreymon.png' },
        { name: 'KendoGarurumon', description: 'La forma Bestia de Koji con el Espíritu Bestia de la Luz.', link: 'digimons.html#frontier', image: '../images/Digimons/KendoGarurumon.png' },
        { name: 'Zephyrmon', description: 'La forma Bestia de Zoe con el Espíritu Bestia del Viento.', link: 'digimons.html#frontier', image: '../images/Digimons/Zephyrmon.png' },
        { name: 'MetalKabuterimon', description: 'La forma Bestia de J.P. con el Espíritu Bestia del Trueno.', link: 'digimons.html#frontier', image: '../images/Digimons/MetalKabuterimon.png' },
        { name: 'Korikakumon', description: 'La forma Bestia de Tommy con el Espíritu Bestia del Hielo.', link: 'digimons.html#frontier', image: '../images/Digimons/Korikakumon.png' },
        { name: 'Bokomon', description: 'Un Digimon sabio que guía a los niños.', link: 'digimons.html#frontier', image: '../images/Digimons/Bokomon.png' },
        { name: 'Lucemon', description: 'Un ángel caído y villano principal, con un poder inmenso.', link: 'digimons.html#frontier', image: '../images/Digimons/Lucemon.png' },
        { name: 'Leomon', description: 'Un Digimon león noble y valiente, conocido por su sacrificio.', link: 'digimons.html#frontier', image: '../images/Digimons/Leomon.png' },
        { name: 'Sakuyamon', description: 'La forma Mega de Renamon, una sacerdotisa mística y poderosa.', link: 'digimons.html#tamers', image: '../images/Digimons/Sakuyamon.png' },
        //Otros Digimon
        { name: 'Gaogamon', description: 'Un Digimon lobo poderoso, compañero de combate.', link: 'digimons.html#otros', image: '../images/Digimons/Gaogamon.png' }
    ];

    const today = new Date().toDateString();
    const digimonIndex = new Date().getDate() % digimons.length;
    const digimonDelDia = digimons[digimonIndex];

    const digimonInfo = document.getElementById('digimon-info');
    if (digimonInfo) {
        digimonInfo.innerHTML = `
            <img src="${digimonDelDia.image}" alt="${digimonDelDia.name}" class="digimon-dia-img">
            <h3>${digimonDelDia.name}</h3>
            <p>${digimonDelDia.description}</p>
            <a href="${digimonDelDia.link}">Ver más</a>
        `;
    }

    // Smooth scrolling para el índice de series
    document.querySelectorAll('.series-index a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Reproductor de audio personalizado (Gramolamon)
    document.querySelectorAll('.audio-player').forEach(player => {
        const audio = new Audio(player.dataset.src);
        const playPauseBtn = player.querySelector('.play-pause-btn');
        const progressBar = player.querySelector('.progress-bar');
        const progressContainer = player.querySelector('.progress-container');
        const currentTime = player.querySelector('.current-time');
        const duration = player.querySelector('.duration');
        const volumeSlider = player.querySelector('.volume-slider');

        // Inicializar volumen
        audio.volume = volumeSlider.value;

        // Actualizar duración cuando se carguen los metadatos
        audio.addEventListener('loadedmetadata', () => {
            duration.textContent = formatTime(audio.duration);
        });

        // Play/Pause
        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseBtn.textContent = '⏸️';
            } else {
                audio.pause();
                playPauseBtn.textContent = '▶️';
            }
        });

        // Actualizar barra de progreso
        audio.addEventListener('timeupdate', () => {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${progress}%`;
            currentTime.textContent = formatTime(audio.currentTime);
        });

        // Seek al hacer clic en la barra de progreso
        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const offsetX = e.clientX - rect.left;
            const percentage = offsetX / rect.width;
            audio.currentTime = percentage * audio.duration;
        });

        // Control de volumen
        volumeSlider.addEventListener('input', () => {
            audio.volume = volumeSlider.value;
        });

        // Formatear tiempo (mm:ss)
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            seconds = Math.floor(seconds % 60);
            return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    });
});