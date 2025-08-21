const yearNow = new Date().getFullYear();
document.getElementById('year').textContent = yearNow;
document.getElementById('experienceYear').textContent = (yearNow - new Date(2021, 5).getFullYear());

// Pesquisa de projetos (filtra por título e tags)
const input = document.getElementById('q');
const cards = Array.from(document.querySelectorAll('.project'));
const empty = document.getElementById('empty');

function normalizar(t) { return t.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, ''); }

function filtrar() {
  const termo = normalizar(input.value.trim());
  let visiveis = 0;
  cards.forEach(card => {
    const base = normalizar(card.dataset.title + ' ' + card.dataset.tags);
    const match = termo === '' || base.includes(termo);
    card.style.display = match ? '' : 'none';
    if (match) visiveis++;
  });
  empty.style.display = visiveis ? 'none' : 'block';
}
input.addEventListener('input', filtrar);

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});