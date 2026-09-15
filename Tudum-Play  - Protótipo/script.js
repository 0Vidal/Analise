const profileButton = document.querySelector('#profileButton');
const closeButton = document.querySelector('#closeButton');
const assistantPanel = document.querySelector('#assistantPanel');
const overlay = document.querySelector('#overlay');
const form = document.querySelector('#messageForm');
const input = document.querySelector('#messageInput');
const movieCarousel = document.querySelector('#movieCarousel');
const previousButton = document.querySelector('.carousel-button.previous');
const nextButton = document.querySelector('.carousel-button.next');
const resultPoster = document.querySelector('#resultPoster');
const resultTitle = document.querySelector('#resultTitle');
const resultDetails = document.querySelector('#resultDetails');
const resultDescription = document.querySelector('#resultDescription');

const recommendations = {
  default: {
    title: 'The Office',
    details: '2005 &nbsp; 9 temporadas &nbsp; 203 episódios',
    description: 'Uma comédia sobre o cotidiano, os conflitos e as situações absurdas de um escritório.',
    image: 'assets/the-office.png'
  },
  leve: {
    title: 'Procurando Nemo',
    details: '2003 &nbsp; Livre &nbsp; 1h 44min',
    description: 'Um pai atravessa o oceano em uma aventura inesquecível para encontrar seu filho.',
    image: 'assets/procurando-nemo.png'
  },
  suspense: {
    title: 'Supernatural',
    details: '2005 &nbsp; 15 temporadas &nbsp; 327 episódios',
    description: 'Dois irmãos percorrem o país enfrentando criaturas, mistérios e forças sobrenaturais.',
    image: 'assets/supernatural.png'
  },
  romance: {
    title: 'A Cinco Passos de Você',
    details: '2019 &nbsp; 12 &nbsp; 1h 56min',
    description: 'Dois jovens se apaixonam, mas precisam manter uma distância que desafia seus sentimentos.',
    image: 'assets/cinco-passos.png'
  },
  familia: {
    title: 'Ratatouille',
    details: '2007 &nbsp; Livre &nbsp; 1h 51min',
    description: 'Um rato apaixonado por culinária tenta realizar o sonho de se tornar chef em Paris.',
    image: 'assets/ratatouille.png'
  },
  acao: {
    title: 'Os Mercenários',
    details: '2010 &nbsp; 16 &nbsp; 1h 43min',
    description: 'Um grupo de combatentes de elite aceita uma missão explosiva e extremamente perigosa.',
    image: 'assets/mercenarios.png'
  }
};

// Abre o menu.
function openPanel() {
  overlay.hidden = false;
  assistantPanel.classList.add('open');
  assistantPanel.setAttribute('aria-hidden', 'false');
  profileButton.setAttribute('aria-expanded', 'true');
  closeButton.focus();
}

// Fecha o menu.
function closePanel() {
  assistantPanel.classList.remove('open');
  assistantPanel.setAttribute('aria-hidden', 'true');
  profileButton.setAttribute('aria-expanded', 'false');
  setTimeout(() => { overlay.hidden = true; }, 280);
  profileButton.focus();
}

// Eventos para abrir e fechar.
profileButton.addEventListener('click', openPanel);
closeButton.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && assistantPanel.classList.contains('open')) closePanel();
});

// Atualiza o card mostrado na área de sugestões.
function showRecommendation(category) {
  const recommendation = recommendations[category] || recommendations.default;

  resultTitle.textContent = recommendation.title;
  resultDetails.innerHTML = recommendation.details;
  resultDescription.textContent = recommendation.description;
  resultPoster.style.backgroundImage = `url("${recommendation.image}")`;
  resultPoster.setAttribute('aria-label', recommendation.title);
}

// Coloca o comando escolhido no campo; a busca acontece somente ao enviar.
document.querySelectorAll('.suggestions button').forEach(button => {
  button.addEventListener('click', () => {
    input.value = button.textContent.replace('›', '').trim();
    input.focus();
  });
});

// Reconhece o pedido digitado e mostra uma recomendação programada.
form.addEventListener('submit', event => {
  event.preventDefault();

  const message = input.value.toLowerCase();
  let category = 'default';

  if (message.includes('leve') || message.includes('comédia') || message.includes('comedia')) category = 'leve';
  else if (message.includes('suspense')) category = 'suspense';
  else if (message.includes('romântico') || message.includes('romantico') || message.includes('romance')) category = 'romance';
  else if (message.includes('família') || message.includes('familia')) category = 'familia';
  else if (message.includes('ação') || message.includes('acao')) category = 'acao';

  showRecommendation(category);
  input.value = '';
});

// Movimenta a lista de filmes para os lados.
function moveCarousel(direction) {
  movieCarousel.scrollBy({
    left: movieCarousel.clientWidth * .8 * direction,
    behavior: 'smooth'
  });
}

function updateCarouselButtons() {
  const maximumScroll = movieCarousel.scrollWidth - movieCarousel.clientWidth;

  previousButton.disabled = movieCarousel.scrollLeft <= 2;
  nextButton.disabled = movieCarousel.scrollLeft >= maximumScroll - 2;
}

previousButton.addEventListener('click', () => moveCarousel(-1));
nextButton.addEventListener('click', () => moveCarousel(1));
movieCarousel.addEventListener('scroll', updateCarouselButtons);
window.addEventListener('resize', updateCarouselButtons);

updateCarouselButtons();
