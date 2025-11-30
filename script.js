// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// --- Wallpaper Slideshow ---
const wallpapers = [
    'assets/wallpaper (1).jpg',
    'assets/wallpaper (1).jfif',
    'assets/wallpaper (2).jfif',
    'assets/wallpaper (2).jpg',
    'assets/wallpaper (3).jpg'
];

const slideshowContainer = document.getElementById('wallpaper-slideshow');
let currentWallpaperIndex = 0;

function initSlideshow() {
    // Create initial image
    const img = document.createElement('img');
    img.src = wallpapers[0];
    img.className = 'wallpaper-image fade-enter-active';
    slideshowContainer.appendChild(img);

    // Start rotation (60 seconds = 60000ms)
    setInterval(changeWallpaper, 60000);
}

function changeWallpaper() {
    const nextIndex = (currentWallpaperIndex + 1) % wallpapers.length;
    const nextImg = document.createElement('img');
    nextImg.src = wallpapers[nextIndex];
    nextImg.className = 'wallpaper-image fade-enter-from';

    slideshowContainer.appendChild(nextImg);

    // Trigger reflow
    void nextImg.offsetWidth;

    nextImg.className = 'wallpaper-image fade-enter-active';

    // Remove old image after transition
    setTimeout(() => {
        const images = slideshowContainer.querySelectorAll('img');
        if (images.length > 1) {
            slideshowContainer.removeChild(images[0]);
        }
    }, 2000);

    currentWallpaperIndex = nextIndex;
}

// --- Avatar Slideshow (GIF Effect) ---
const avatars = [
    'assets/dance1.gif', // Placeholder: Replace with avatar1.png
    'assets/dance2.gif', // Placeholder: Replace with avatar2.png
    'assets/dance3.gif'  // Placeholder: Replace with avatar3.png
];
let currentAvatarIndex = 0;
const avatarImage = document.getElementById('avatar-image');

function initAvatarSlideshow() {
    if (!avatarImage) return;
    // Change avatar every 60 seconds (60000ms)
    setInterval(() => {
        currentAvatarIndex = (currentAvatarIndex + 1) % avatars.length;
        // Simple src swap. For fade, we'd need more complex CSS/HTML structure like wallpaper
        // But for "GIF" effect, instant swap is often desired or a quick fade.
        // Let's add a quick fade class
        avatarImage.style.opacity = 0;
        setTimeout(() => {
            avatarImage.src = avatars[currentAvatarIndex];
            avatarImage.style.opacity = 1;
        }, 300); // Wait for fade out
    }, 60000);
}

// --- Music Player ---
const songs = [
    {
        title: "NOL4B3L",
        artist: "MCK",
        url: "https://files.catbox.moe/u12bb7.mp3", // Placeholder
        cover: "https://t2.genius.com/unsafe/430x430/https%3A%2F%2Fimages.genius.com%2F8bb86c1d87f988fbe00972fe77b73b14.1000x1000x1.png"
    },
    {
        title: "Truyền Thuyết Đô Thị 2",
        artist: "Yellow Sosa",
        url: "https://files.catbox.moe/pye2ve.mp3", // Placeholder
        cover: "https://i.pinimg.com/736x/2b/ac/41/2bac413c43d341d35f1d72d4f87f9037.jpg"
    },
    {
        title: "Badtrip",
        artist: "MCK",
        url: "https://files.catbox.moe/d7hryu.mp3", // Placeholder
        cover: "https://photo-resize-zmp3.zadn.vn/w360_r1x1_jpeg/cover/9/7/a/2/97a21301630ce3762bd373b6c76d8bec.jpg"
    }
];

// --- Lunar New Year Countdown ---
function updateLunarCountdown() {
    const countdownElement = document.getElementById('lunar-countdown');
    if (!countdownElement) return;

    // Lunar New Year 2026 (Example date: Feb 17, 2026 - Adjust as needed for specific year)
    // For 2025, it's Jan 29, 2025.
    const lunarNewYear = new Date('January 29, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = lunarNewYear - now;

    if (distance < 0) {
        countdownElement.innerHTML = "Happy Lunar New Year!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateLunarCountdown, 1000);

let currentSongIndex = 0;
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const musicTitle = document.getElementById('music-title');
const musicArtist = document.getElementById('music-artist');
const musicCover = document.getElementById('music-cover');
const playIcon = playBtn ? playBtn.querySelector('i') : null;

function initMusicPlayer() {
    if (!audioPlayer) return;

    // Randomize start song
    currentSongIndex = Math.floor(Math.random() * songs.length);
    loadSong(currentSongIndex);

    // Event Listeners
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);

    // Auto play next song when ended
    audioPlayer.addEventListener('ended', nextSong);
}

function loadSong(index) {
    const song = songs[index];
    musicTitle.innerText = song.title;
    musicArtist.innerText = song.artist;
    musicCover.src = song.cover;
    audioPlayer.src = song.url;
}

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        audioPlayer.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
}


// --- Typing Effect ---
new TypeIt("#typing-text", {
    speed: 50,
    startDelay: 900,
    loop: true,
    deleteSpeed: 30
})
    .type("Backend Developer")
    .pause(1000)
    .delete()
    .type("Solo Pentester")
    .pause(1000)
    .delete()
    .type("Anime Lover")
    .pause(1000)
    .delete()
    .type("Lovely Lonely")
    .pause(1000)
    .delete()
    .type("Lonely Stonie")
    .pause(1000)
    .delete()
    .type("GoodBoy")
    .pause(1000)
    .delete()
    .go();

// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- Mobile Menu Toggle ---
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    });
});

// --- Active Link Highlighting (ScrollSpy) ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// --- Projects Carousel ---
const carousel = document.getElementById('projects-carousel');
const carouselPrevBtn = document.querySelector('.carousel-btn.prev');
const carouselNextBtn = document.querySelector('.carousel-btn.next');

if (carousel && carouselPrevBtn && carouselNextBtn) {
    carouselNextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: 350, behavior: 'smooth' });
    });

    carouselPrevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -350, behavior: 'smooth' });
    });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
    initAvatarSlideshow();
    initMusicPlayer();
});
