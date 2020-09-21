const UInotes = document.querySelector('#notes')

window.addEventListener('keydown', (e) => {
  playNotes(e.key)
})

UInotes.addEventListener('click', (e) => {
  if (e.target.parentElement.id === 'notes') {
    playNotes(e.target.dataset.key)
  }
})

function playNotes(key) {
  const notes = document.querySelector(`audio[data-key="${key.toLowerCase()}"]`)
  if (!notes) return

  notes.currentTime = 0
  notes.play()
}
