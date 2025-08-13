const flashcard = document.getElementById('flashcard');
const front = document.getElementById('card-front');
const back = document.getElementById('card-back');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cardCount = document.getElementById('card-count');

// Sample flashcards
const cards = [
  { term: "HTML", definition: "HyperText Markup Language" },
  { term: "CSS", definition: "Cascading Style Sheets" },
  { term: "JS", definition: "JavaScript – Programming Language" },
];

let currentIndex = 0;
let isFlipped = false;

function updateCard() {
  front.textContent = cards[currentIndex].term;
  back.textContent = cards[currentIndex].definition;
  cardCount.textContent = `${currentIndex + 1} / ${cards.length}`;
  flashcard.classList.remove('flipped');
  isFlipped = false;
}

flashcard.addEventListener('click', () => {
  flashcard.classList.toggle('flipped');
  isFlipped = !isFlipped;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCard();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCard();
});

updateCard(); // Initialize the first card
