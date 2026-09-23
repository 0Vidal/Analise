const profileButton = document.querySelector('#profileButton');
const closeButton = document.querySelector('#closeButton');
const assistantPanel = document.querySelector('#assistantPanel');
const overlay = document.querySelector('#overlay');
const form = document.querySelector('#messageForm');
const input = document.querySelector('#messageInput');
const movieCarousel = document.querySelector('#movieCarousel');
const previousButton = document.querySelector('.carousel-button.previous');
const nextButton = document.querySelector('.carousel-button.next');

const featuredTitle = document.querySelector('#featuredTitle');
const featuredSubtitle = document.querySelector('#featuredSubtitle');
const featuredDescription = document.querySelector('#featuredDescription');
const featuredPoster = document.querySelector('#featuredPoster');

const watchButton = document.querySelector('#watchButton');
const infoButton = document.querySelector('#infoButton');

const resultPoster = document.querySelector('#resultPoster');
const resultTitle = document.querySelector('#resultTitle');
const resultDetails = document.querySelector('#resultDetails');
const resultDescription = document.querySelector('#resultDescription');
const resultWatch = document.querySelector('#resultWatch');

const modal = document.querySelector('#modal');
const modalTitle = document.querySelector('#modalTitle');
const modalBody = document.querySelector('#modalBody');
const modalClose = document.querySelector('#modalClose');

const searchButton = document.querySelector('#searchButton');
const searchBox = document.querySelector('#searchBox');
const searchInput = document.querySelector('#searchInput');
const closeSearch = document.querySelector('#closeSearch');
const searchResults = document.querySelector('#searchResults');

let featured = {
  title: 'O Mentalista',
  subtitle: 'Novos episódios disponíveis',
  description: 'O Mentalista acompanha Patrick Jane, um ex-falso médium que usa observação e dedução para resolver crimes.',
  image: 'poster/mentalista.png',
  type: 'Série',
  year: '2008',
  details: '7 temporadas · 151 episódios',
  platforms: [
    ['Prime Video', 'https://www.primevideo.com/'],
    ['Max', 'https://www.max.com/'],
    ['JustWatch', 'https://www.justwatch.com/br/']
  ],
  info: 'Uma série policial que acompanha Patrick Jane, um consultor que utiliza sua capacidade de observação e dedução para ajudar a solucionar crimes.'
};

let movies = [
  {
    title: 'A Cinco Passos de Você',
    image: 'poster/cinco-passos.png',
    type: 'Filme',
    year: '2019',
    details: '1h 56min · Romance',
    description: 'Dois jovens se apaixonam enquanto enfrentam uma situação que exige distância entre eles.',
    platforms: [
      ['Prime Video', 'https://www.primevideo.com/'],
      ['Apple TV', 'https://tv.apple.com/br/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Um romance dramático sobre dois jovens que desenvolvem uma relação enquanto convivem com limitações que impedem a proximidade física.'
  },
  {
    title: 'Supernatural',
    image: 'poster/supernatural.png',
    type: 'Série',
    year: '2005',
    details: '15 temporadas · 327 episódios',
    description: 'Dois irmãos percorrem o país enfrentando criaturas, mistérios e acontecimentos sobrenaturais.',
    platforms: [
      ['Prime Video', 'https://www.primevideo.com/'],
      ['Max', 'https://www.max.com/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'A série acompanha os irmãos Sam e Dean Winchester em suas viagens enfrentando acontecimentos sobrenaturais.'
  },
  {
    title: 'Ratatouille',
    image: 'poster/ratatouille.png',
    type: 'Filme',
    year: '2007',
    details: '1h 51min · Animação',
    description: 'Um rato apaixonado por culinária tenta realizar seu sonho de se tornar chef em Paris.',
    platforms: [
      ['Disney+', 'https://www.disneyplus.com/'],
      ['Apple TV', 'https://tv.apple.com/br/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Remy é um rato que possui grande talento para cozinhar e sonha em trabalhar em um restaurante de Paris.'
  },
  {
    title: 'Procurando Nemo',
    image: 'poster/procurando-nemo.png',
    type: 'Filme',
    year: '2003',
    details: '1h 44min · Animação',
    description: 'Um pai atravessa o oceano em uma aventura para encontrar seu filho.',
    platforms: [
      ['Disney+', 'https://www.disneyplus.com/'],
      ['Apple TV', 'https://tv.apple.com/br/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Após seu filho desaparecer, Marlin atravessa o oceano em uma jornada para encontrá-lo.'
  },
  {
    title: 'The Office',
    image: 'poster/the-office.png',
    type: 'Série',
    year: '2005',
    details: '9 temporadas · 203 episódios',
    description: 'Uma comédia sobre o cotidiano, os conflitos e as situações absurdas de um escritório.',
    platforms: [
      ['Prime Video', 'https://www.primevideo.com/'],
      ['Peacock', 'https://www.peacocktv.com/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Uma comédia que acompanha funcionários de uma empresa de papel e as situações inusitadas do ambiente de trabalho.'
  },
  {
    title: 'Os Mercenários',
    image: 'poster/mercenarios.png',
    type: 'Filme',
    year: '2010',
    details: '1h 43min · Ação',
    description: 'Um grupo de combatentes de elite aceita uma missão extremamente perigosa.',
    platforms: [
      ['Prime Video', 'https://www.primevideo.com/'],
      ['Apple TV', 'https://tv.apple.com/br/'],
      ['JustWatch', 'https://www.justwatch.com/br/']
    ],
    info: 'Um grupo de mercenários recebe uma missão que envolve enfrentar uma organização militar em uma operação de alto risco.'
  }
];

function renderFeatured() {
  featuredTitle.textContent = featured.title.toUpperCase();
  featuredSubtitle.textContent = `${featured.type} · ${featured.year}`;
  featuredDescription.textContent = featured.description;
  featuredPoster.style.backgroundImage = `url("${featured.image}")`;
  featuredPoster.setAttribute('aria-label', featured.title);
}

function renderMovies() {
  movieCarousel.innerHTML = '';

  movies.forEach((movie, index) => {
    const card = document.createElement('article');

    card.className = 'card';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Colocar ${movie.title} em destaque`);

    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}">
      <div class="card-title">${movie.title}</div>
    `;

    card.addEventListener('click', () => swapFeatured(index));

    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        swapFeatured(index);
      }
    });

    movieCarousel.appendChild(card);
  });

  updateCarouselButtons();
}

function swapFeatured(index) {
  const selectedMovie = movies[index];

  movies[index] = {
    title: featured.title,
    image: featured.image,
    type: featured.type,
    year: featured.year,
    details: featured.details,
    description: featured.description,
    platforms: featured.platforms,
    info: featured.info
  };

  featured = selectedMovie;

  renderFeatured();
  renderMovies();
}

function openModal(title, content) {
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

function showPlatforms(item) {
  const platforms = item.platforms.map(platform => `
    <a href="${platform[1]}" target="_blank" rel="noopener noreferrer">
      ${platform[0]} ↗
    </a>
  `).join('');

  openModal(
    `Onde assistir: ${item.title}`,
    `<div class="platform-list">${platforms}</div>
     <p class="info-text">A disponibilidade pode variar conforme a região e a data.</p>`
  );
}

function showInfo(item) {
  openModal(
    item.title,
    `<p class="info-text"><strong>${item.type} · ${item.year}</strong></p>
     <p class="info-text">${item.info}</p>`
  );
}

watchButton.addEventListener('click', () => showPlatforms(featured));
infoButton.addEventListener('click', () => showInfo(featured));

modalClose.addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();
  closeModal();
});

modal.addEventListener('click', event => {
  if (event.target === modal) closeModal();
});

function openPanel() {
  overlay.hidden = false;
  assistantPanel.classList.add('open');
  assistantPanel.setAttribute('aria-hidden', 'false');
  profileButton.setAttribute('aria-expanded', 'true');
  closeButton.focus();
}

function closePanel() {
  assistantPanel.classList.remove('open');
  assistantPanel.setAttribute('aria-hidden', 'true');
  profileButton.setAttribute('aria-expanded', 'false');

  setTimeout(() => {
    overlay.hidden = true;
  }, 300);

  profileButton.focus();
}

profileButton.addEventListener('click', openPanel);
closeButton.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (assistantPanel.classList.contains('open')) closePanel();
    if (!modal.hidden) closeModal();
  }
});

const recommendations = {
  leve: movies.find(movie => movie.title === 'Procurando Nemo'),
  comedia: movies.find(movie => movie.title === 'The Office'),
  suspense: movies.find(movie => movie.title === 'Supernatural'),
  romance: movies.find(movie => movie.title === 'A Cinco Passos de Você'),
  familia: movies.find(movie => movie.title === 'Ratatouille'),
  acao: movies.find(movie => movie.title === 'Os Mercenários'),
  animacao: movies.find(movie => movie.title === 'Ratatouille'),
  ficcao: movies.find(movie => movie.title === 'Supernatural')
};

function showRecommendation(category) {
  const recommendation = recommendations[category] || recommendations.comedia;

  resultTitle.textContent = recommendation.title;
  resultDetails.textContent = `${recommendation.year} · ${recommendation.details}`;
  resultDescription.textContent = recommendation.description;
  resultPoster.style.backgroundImage = `url("${recommendation.image}")`;
  resultPoster.setAttribute('aria-label', recommendation.title);

  resultWatch.onclick = () => showPlatforms(recommendation);
}

document.querySelectorAll('.suggestions button').forEach(button => {
  button.addEventListener('click', () => {
    input.value = button.dataset.message;
    form.requestSubmit();
  });
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const message = input.value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  let category = 'comedia';

  if (/acao|aventura|luta|heroi|guerra/.test(message)) {
    category = 'acao';
  } else if (/suspense|terror|misterio|investigacao|crime/.test(message)) {
    category = 'suspense';
  } else if (/romance|romantico|amor|casal/.test(message)) {
    category = 'romance';
  } else if (/familia|crianca|criancas|infantil/.test(message)) {
    category = 'familia';
  } else if (/animacao|desenho/.test(message)) {
    category = 'animacao';
  } else if (/ficcao|espaco|futuro|cientifica/.test(message)) {
    category = 'ficcao';
  } else if (/leve|divertido|divertida|comedia|engracado|engracada/.test(message)) {
    category = 'leve';
  }

  showRecommendation(category);
  input.value = '';
});

function moveCarousel(direction) {
  movieCarousel.scrollBy({
    left: movieCarousel.clientWidth * .8 * direction,
    behavior: 'smooth'
  });
}

function updateCarouselButtons() {
  const maxScroll = movieCarousel.scrollWidth - movieCarousel.clientWidth;

  previousButton.disabled = movieCarousel.scrollLeft <= 2;
  nextButton.disabled = movieCarousel.scrollLeft >= maxScroll - 2;
}

previousButton.addEventListener('click', () => moveCarousel(-1));
nextButton.addEventListener('click', () => moveCarousel(1));
movieCarousel.addEventListener('scroll', updateCarouselButtons);
window.addEventListener('resize', updateCarouselButtons);

searchButton.addEventListener('click', () => {
  searchBox.classList.toggle('open');

  if (searchBox.classList.contains('open')) {
    searchInput.focus();
  }
});

closeSearch.addEventListener('click', () => {
  searchBox.classList.remove('open');
  searchInput.value = '';
  searchResults.innerHTML = '';
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    searchResults.innerHTML = '';
    return;
  }

  const results = [featured, ...movies].filter(movie =>
    movie.title.toLowerCase().includes(query)
  );

  if (!results.length) {
    searchResults.innerHTML = '<p>Nenhum título encontrado.</p>';
    return;
  }

  searchResults.innerHTML = results.map(movie => `
    <div class="search-result">${movie.title} · ${movie.type}</div>
  `).join('');

  document.querySelectorAll('.search-result').forEach(result => {
    result.addEventListener('click', () => {
      const title = result.textContent.split(' · ')[0];
      const index = movies.findIndex(movie => movie.title === title);

      if (index !== -1) {
        swapFeatured(index);
      }

      searchBox.classList.remove('open');
      searchInput.value = '';
      searchResults.innerHTML = '';
    });
  });
});

renderFeatured();
renderMovies();