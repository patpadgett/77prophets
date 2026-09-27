/* 77Prophets — site behaviour. No dependencies. */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------ the player dock (Suno) */
  const dock = $('#dock'), dockFrame = $('#dock-frame'), dockTitle = $('#dock-title'), dockNote = $('#dock-note');
  let activeBtn = null;

  function openPlayer(btn) {
    const id = btn.dataset.suno, title = btn.dataset.title, url = btn.dataset.sunoUrl;
    if (activeBtn) setPressed(activeBtn, false);
    activeBtn = btn; setPressed(btn, true);
    dockTitle.textContent = title;
    dockNote.textContent = 'Press play in the player · ';
    const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener'; a.textContent = 'open on Suno';
    dockNote.appendChild(a);
    dockFrame.replaceChildren();
    const f = document.createElement('iframe');
    f.src = `https://suno.com/embed/${id}`;
    f.title = `Suno player: ${title}`;
    f.loading = 'eager';
    f.allow = 'autoplay; encrypted-media';
    f.referrerPolicy = 'strict-origin-when-cross-origin';
    dockFrame.appendChild(f);
    dock.hidden = false;
    document.body.classList.add('has-dock');
    $('#dock-close').focus({ preventScroll: true });
  }
  function setPressed(btn, on) {
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    const label = $('span', btn);
    if (label) label.textContent = on ? 'In player' : (btn.dataset.label || 'Play');
  }
  function closePlayer() {
    dockFrame.replaceChildren();        // removing the iframe stops playback
    dock.hidden = true;
    document.body.classList.remove('has-dock');
    if (activeBtn) { setPressed(activeBtn, false); activeBtn.focus({ preventScroll: true }); activeBtn = null; }
  }
  document.addEventListener('click', e => {
    const b = e.target.closest('.act-play');
    if (!b) return;
    if (activeBtn === b) closePlayer(); else openPlayer(b);
  });
  $('#dock-close').addEventListener('click', closePlayer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !dock.hidden) closePlayer(); });

  /* ------------------------------------------------------------ the film plate */
  const film = $('#film'), plate = $('#plate'), filmPlay = $('#film-play'), filmClose = $('#film-close');
  if (film) {
    filmPlay.addEventListener('click', () => {
      plate.classList.add('is-playing');
      film.controls = true;
      film.play().catch(() => { film.controls = true; });
      filmClose.focus({ preventScroll: true });
    });
    filmClose.addEventListener('click', () => {
      film.pause(); film.currentTime = 0; film.controls = false;
      plate.classList.remove('is-playing');
      filmPlay.focus({ preventScroll: true });
    });
    film.addEventListener('ended', () => { film.controls = false; plate.classList.remove('is-playing'); });
    film.addEventListener('click', () => { if (!plate.classList.contains('is-playing')) filmPlay.click(); });
  }

  /* ------------------------------------------------------------ moving pictures: load YouTube on press */
  $$('.vposter').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.yt, title = btn.dataset.title;
      const f = document.createElement('iframe');
      f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
      f.title = `YouTube: ${title}`;
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.allowFullscreen = true;
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      btn.replaceChildren(f);
      btn.setAttribute('aria-label', `${title}: playing`);
      btn.style.cursor = 'default';
    }, { once: true });
  });

  /* ------------------------------------------------------------ the legend aligns to the plate's edges */
  const legend = $('.legend'), hero = $('.hero'), plateEl = $('.plate-video');
  function alignLegend() {
    if (!legend || !hero || !plateEl) return;
    if (innerWidth <= 900) { legend.style.removeProperty('--legend-top'); legend.style.removeProperty('--legend-bottom'); return; }
    legend.style.setProperty('--legend-top', '0px'); legend.style.setProperty('--legend-bottom', '0px');
    const l = legend.getBoundingClientRect(), p = plateEl.getBoundingClientRect();
    const content = legend.scrollHeight;                       // the three blocks, unpadded
    if (content <= p.height) {                                 // lock to the plate's edges
      legend.style.setProperty('--legend-top', (p.top - l.top) + 'px');
      legend.style.setProperty('--legend-bottom', Math.max(0, l.bottom - p.bottom) + 'px');
    } else {                                                   // otherwise centre on the plate
      legend.style.setProperty('--legend-top', Math.max(0, (p.top + p.height / 2) - content / 2 - l.top) + 'px');
    }
  }
  addEventListener('resize', alignLegend, { passive: true });
  alignLegend();

  /* ------------------------------------------------------------ reveals: one moment per section */
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(entries => {
      for (const en of entries) if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    $$('.sect, .plates .plate').forEach(el => io.observe(el));
  } else {
    $$('.sect, .plates .plate').forEach(el => el.classList.add('in'));
  }

  /* ------------------------------------------------------------ the dome turns a few degrees with scroll */
  const rot = $('.d-rot');
  if (rot && !reduce) {
    let last = -1;
    const tick = () => {
      const y = Math.min(scrollY, innerHeight * 1.2);
      const deg = (y / (innerHeight * 1.2)) * 6;   // 0 → 6°
      if (Math.abs(deg - last) > 0.02) { rot.style.setProperty('--turn', deg.toFixed(2) + 'deg'); last = deg; }
    };
    addEventListener('scroll', () => requestAnimationFrame(tick), { passive: true });
    tick();
  }

  /* ------------------------------------------------------------ contact form */
  const form = $('#form'), status = $('#f-status');
  if (form) {
    const fields = ['name', 'email', 'reason', 'message'].map(n => form.elements[n]);
    const problems = {
      name: 'Add your name so he knows who is writing.',
      email: 'Add an email address he can answer.',
      emailFormat: 'That email address is missing an @ or a domain.',
      reason: 'Choose what this is about.',
      message: 'Write the message itself.',
    };
    function mark(el, msg) {
      const label = el.closest('label');
      label.classList.toggle('is-bad', !!msg);
      let err = $('.f-err', label);
      if (msg) { if (!err) { err = document.createElement('span'); err.className = 'f-err'; label.appendChild(err); } err.textContent = msg; el.setAttribute('aria-invalid', 'true'); }
      else { if (err) err.remove(); el.removeAttribute('aria-invalid'); }
    }
    function validate() {
      let first = null;
      for (const el of fields) {
        let msg = '';
        const v = el.value.trim();
        if (!v) msg = problems[el.name];
        else if (el.name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) msg = problems.emailFormat;
        mark(el, msg);
        if (msg && !first) first = el;
      }
      return first;
    }
    fields.forEach(el => el.addEventListener('input', () => { if (el.closest('label').classList.contains('is-bad')) validate(); }));
    const sel = form.elements.reason;
    sel.addEventListener('change', () => sel.classList.toggle('is-empty', !sel.value));
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const bad = validate();
      if (bad) { status.className = 'f-status bad'; status.textContent = 'Fix the marked field and send again.'; bad.focus(); return; }
      const btn = $('.act-submit', form);
      btn.disabled = true; status.className = 'f-status'; status.textContent = 'Sending…';
      try {
        const res = await fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) });
        if (!res.ok) throw new Error(String(res.status));
        status.className = 'f-status ok'; status.textContent = 'Sent. He reads every message.';
        form.reset(); fields.forEach(el => mark(el, ''));
      } catch (err) {
        status.className = 'f-status bad';
        const subject = encodeURIComponent('77Prophets site: new message');
        const body = encodeURIComponent(`From: ${form.elements.name.value} <${form.elements.email.value}>\nReason: ${form.elements.reason.value}\n\n${form.elements.message.value}`);
        status.innerHTML = `The form could not send. <a href="mailto:agroman@gmail.com?subject=${subject}&body=${body}">Send it by email instead</a>.`;
      } finally { btn.disabled = false; }
    });
  }
})();
