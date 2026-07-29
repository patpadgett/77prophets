
const stage = document.getElementById('stage');
const tweakWrap = document.getElementById('tweaks');
const toggle = document.getElementById('tweaksToggle');
const layoutBtn = document.getElementById('layoutBtn');
const layouts = ['cathedral', 'noir', 'field'];

const safeStore = (() => {
  try {
    const k = '__77p_probe__';
    localStorage.setItem(k, '1');
    localStorage.removeItem(k);
    return localStorage;
  } catch {
    return { getItem(){ return null; }, setItem(){}, removeItem(){} };
  }
})();

function setLayout(layout) {
  stage.dataset.layout = layout;
  safeStore.setItem('77p-layout', layout);
  layoutBtn.textContent = `Reframe: ${layout}`;
}

function cycleLayout() {
  const current = stage.dataset.layout || layouts[0];
  const next = layouts[(layouts.indexOf(current) + 1) % layouts.length];
  setLayout(next);
}

setLayout(safeStore.getItem('77p-layout') || 'cathedral');
layoutBtn.addEventListener('click', cycleLayout);

toggle.addEventListener('click', () => {
  const open = tweakWrap.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.dataset.theme = btn.dataset.theme;
    safeStore.setItem('77p-theme', btn.dataset.theme);
    document.querySelectorAll('[data-theme]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  });
});

document.querySelectorAll('[data-density]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.documentElement.dataset.density = btn.dataset.density;
    safeStore.setItem('77p-density', btn.dataset.density);
    document.querySelectorAll('[data-density]').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
  });
});

const savedTheme = safeStore.getItem('77p-theme') || 'night';
const savedDensity = safeStore.getItem('77p-density') || 'open';
document.documentElement.dataset.theme = savedTheme;
document.documentElement.dataset.density = savedDensity;
document.querySelectorAll('[data-theme]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.theme === savedTheme)));
document.querySelectorAll('[data-density]').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.density === savedDensity)));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    tweakWrap.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
