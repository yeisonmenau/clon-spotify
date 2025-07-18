// Spotify Clone JavaScript Functionality

document.addEventListener("DOMContentLoaded", () => {
  // Play/Pause functionality
  const playButton = document.querySelector(".fa-pause").parentElement
  let isPlaying = true

  playButton.addEventListener("click", function () {
    const icon = this.querySelector("i")
    if (isPlaying) {
      icon.classList.remove("fa-pause")
      icon.classList.add("fa-play")
      isPlaying = false
    } else {
      icon.classList.remove("fa-play")
      icon.classList.add("fa-pause")
      isPlaying = true
    }
  })

  // Progress bar interaction
  const progressBars = document.querySelectorAll(".bg-spotify-light-gray")
  progressBars.forEach((bar) => {
    bar.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect()
      const percent = ((e.clientX - rect.left) / rect.width) * 100
      const fill = this.querySelector(".bg-white")
      if (fill) {
        fill.style.width = percent + "%"
      }
    })
  })

  // Hover effects for cards
  const cards = document.querySelectorAll(".group")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const playBtn = this.querySelector(".fa-play")
      if (playBtn) {
        playBtn.parentElement.style.transform = "translateY(-4px)"
      }
    })

    card.addEventListener("mouseleave", function () {
      const playBtn = this.querySelector(".fa-play")
      if (playBtn) {
        playBtn.parentElement.style.transform = "translateY(0)"
      }
    })
  })

  // Search functionality
  const searchInput = document.querySelector('input[placeholder="¿Qué quieres reproducir?"]')
  searchInput.addEventListener("focus", function () {
    this.style.transform = "scale(1.02)"
  })

  searchInput.addEventListener("blur", function () {
    this.style.transform = "scale(1)"
  })

  // Sidebar playlist hover effects
  const playlistItems = document.querySelectorAll("aside p")
  playlistItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Remove active class from all items
      playlistItems.forEach((p) => p.classList.remove("text-white"))
      // Add active class to clicked item
      this.classList.add("text-white")
    })
  })

  // Volume control
  const volumeBar = document.querySelector(".w-20")
  if (volumeBar) {
    volumeBar.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect()
      const percent = ((e.clientX - rect.left) / rect.width) * 100
      const fill = this.querySelector(".bg-white")
      if (fill) {
        fill.style.width = percent + "%"
      }
    })
  }

  // Shuffle and repeat button states
  const shuffleBtn = document.querySelector(".fa-shuffle").parentElement
  const repeatBtn = document.querySelector(".fa-repeat").parentElement

  shuffleBtn.addEventListener("click", function () {
    this.classList.toggle("text-spotify-green")
    this.classList.toggle("text-spotify-light-gray")
  })

  repeatBtn.addEventListener("click", function () {
    this.classList.toggle("text-spotify-green")
    this.classList.toggle("text-spotify-light-gray")
  })

  // Heart button toggle
  const heartButtons = document.querySelectorAll(".fa-heart")
  heartButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("text-spotify-green")
      this.classList.toggle("text-spotify-light-gray")
    })
  })

  // Simulate progress bar movement
  function updateProgress() {
    const progressFill = document.querySelector('.bg-white[style*="width: 35%"]')
    if (progressFill && isPlaying) {
      let currentWidth = Number.parseFloat(progressFill.style.width) || 35
      if (currentWidth < 100) {
        currentWidth += 0.1
        progressFill.style.width = currentWidth + "%"
      }
    }
  }

  // Update progress every second
  setInterval(updateProgress, 1000)

  // Add smooth transitions
  const style = document.createElement("style")
  style.textContent = `
        * {
            transition: all 0.2s ease;
        }
        
        .group:hover {
            transform: translateY(-2px);
        }
        
        button:hover {
            transform: scale(1.05);
        }
        
        .bg-white {
            transition: width 0.3s ease;
        }
    `
  document.head.appendChild(style)
})
