// ── PROJECTS — sourced from assets/js/images.js (loaded via script tag before this file) ──
// Fisher-Yates shuffle
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

// Split PROJECTS into per-section arrays — each section loads from its own folder.
// To change what appears in each section, edit assets/js/images.js.
const PORTFOLIO_CATS = ['logos','brand_identity','web_design','event_print','campaign','video'];
const heroSlides     = PROJECTS.filter(p => p.category === 'hero_slideshow');
const showcaseItems  = PROJECTS.filter(p => p.category === 'showcase_strip');
const projects       = shuffle(PROJECTS.filter(p => PORTFOLIO_CATS.includes(p.category)));

// ── HERO GALLERY — single-image slideshow ──
// Images loaded from assets/images/hero-slideshow/ via heroSlides array above
const gw=document.getElementById('galleryWrap');
let slideIdx=0,slideTimer;

// Build one slide per hero image
heroSlides.forEach((item,i)=>{
  const slide=document.createElement('div');
  slide.className='gallery-slide'+(i===0?' active':'');
  const img=document.createElement('img');
  img.src=item.src;img.alt=item.name;img.loading=i===0?'eager':'lazy';
  const ov=document.createElement('div');ov.className='gallery-slide-ov';
  const info=document.createElement('div');info.className='gallery-slide-info';
  info.innerHTML='<div class="gallery-slide-cat">'+item.cat+'</div><div class="gallery-slide-name">'+item.name+'</div>';
  slide.appendChild(img);slide.appendChild(ov);slide.appendChild(info);
  gw.appendChild(slide);
});

// Prev / Next arrow buttons
const prevBtn=document.createElement('button');
prevBtn.className='gallery-btn gallery-prev';
prevBtn.innerHTML='&#8249;';
prevBtn.setAttribute('aria-label','Previous');
const nextBtn=document.createElement('button');
nextBtn.className='gallery-btn gallery-next';
nextBtn.innerHTML='&#8250;';
nextBtn.setAttribute('aria-label','Next');
const counter=document.createElement('div');
counter.className='gallery-counter';
gw.appendChild(prevBtn);gw.appendChild(nextBtn);gw.appendChild(counter);

const slides=gw.querySelectorAll('.gallery-slide');

function goToSlide(n){
  slides[slideIdx].classList.remove('active');
  slideIdx=(n+slides.length)%slides.length;
  slides[slideIdx].classList.add('active');
  counter.textContent=(slideIdx+1)+' / '+slides.length;
}
goToSlide(0);

function startTimer(){
  clearInterval(slideTimer);
  slideTimer=setInterval(()=>goToSlide(slideIdx+1),4500);
}
startTimer();

prevBtn.addEventListener('click',e=>{e.stopPropagation();goToSlide(slideIdx-1);startTimer();});
nextBtn.addEventListener('click',e=>{e.stopPropagation();goToSlide(slideIdx+1);startTimer();});

// ── SHOWCASE STRIP ──
// Images loaded from assets/images/showcase-strip/ via showcaseItems array above
const sw=document.getElementById('sw');
if(sw){
  showcaseItems.forEach(item=>{
    const d=document.createElement('div');d.className='sw-item';
    const img=document.createElement('img');img.src=item.src;img.alt=item.name;
    const ov=document.createElement('div');ov.className='sw-ov';
    const lb=document.createElement('div');lb.className='sw-lbl';lb.textContent=item.name;
    const hint=document.createElement('div');hint.className='sw-click-hint';
    // If showcase item has a case study link, update hint text
    hint.textContent=item.link?'View Case Study':'View Details';
    d.appendChild(img);d.appendChild(ov);d.appendChild(lb);d.appendChild(hint);
    d.addEventListener('click',()=>{
      // If item has a case study link, navigate there
      if(item.link){
        window.location.href=item.link;
        return;
      }
      const pi=projects.findIndex(p=>p.name===item.name);
      if(pi>=0) openModal(pi);
    });
    sw.appendChild(d);
  });
}

// ── PORTFOLIO GRID ──
const wgf=document.getElementById('wgf');
let currentFilter='all';
const PAGE_SIZE=9; // cards shown per load

// Per-category Tabler icon + human-readable label
const CAT_CFG={
  logos:          {icon:'ti-vector',          label:'Logo Design'},
  brand_identity: {icon:'ti-diamond',         label:'Brand Identity'},
  web_design:     {icon:'ti-device-desktop',  label:'Web Design'},
  event_print:    {icon:'ti-calendar-event',  label:'Event + Print'},
  campaign:       {icon:'ti-speakerphone',    label:'Campaign'},
  video:          {icon:'ti-brand-youtube',   label:'Video'},
};

// 2-char initials — skip stop words, take first letter of first two significant words
const STOP=new Set(['of','the','a','an','and','for','in','to','at','by','on']);
function getInitials(name){
  const w=name.split(/[\s\-–—#&]+/).filter(x=>x&&!STOP.has(x.toLowerCase()));
  if(!w.length) return name.slice(0,2).toUpperCase();
  if(w.length===1) return w[0].slice(0,2).toUpperCase();
  return (w[0][0]+w[1][0]).toUpperCase();
}

// Intersection Observer — staggered scroll-entry animation
const cardIO=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('in-view');cardIO.unobserve(e.target);}
  });
},{threshold:0.1});

function buildGrid(cat){
  wgf.innerHTML='';
  const filtered=cat==='all'?projects:projects.filter(p=>p.category===cat);
  filtered.forEach((item,i)=>{
    const cfg=CAT_CFG[item.category]||{icon:'ti-photo',label:item.cat};
    const mono=getInitials(item.name);
    const origIdx=projects.indexOf(item);
    const hasCaseStudy=!!item.link;

    const card=document.createElement('div');
    card.className='wg-card'+(hasCaseStudy?' has-case-study':'');
    card.dataset.cat=item.category;
    card.dataset.origIdx=origIdx;
    card.style.setProperty('--entry-delay',(i%3)*0.1+'s');

    // Case study badge — shown on cards that link to a case study
    const csBadge=hasCaseStudy
      ? '<div class="wg-card-cs-badge">Case Study ↗</div>'
      : '';

    card.innerHTML=
      '<div class="wg-card-top">'+
        '<img class="wg-card-img" src="'+item.src+'" loading="lazy" alt="'+item.name+'">'+
        '<div class="wg-card-img-ov"></div>'+
        csBadge+
        '<div class="wg-card-monogram">'+
          '<div class="wg-card-initials">'+mono+'</div>'+
          '<div class="wg-card-cat-icon"><i class="ti '+cfg.icon+'"></i></div>'+
        '</div>'+
        '<div class="wg-card-hover-info">'+
          '<div class="wg-card-hover-name">'+item.name+'</div>'+
          '<p class="wg-card-hover-desc">'+item.desc+'</p>'+
          '<button class="wg-card-view-btn" tabindex="-1">'+(hasCaseStudy?'View Case Study':'View Details')+'</button>'+
        '</div>'+
      '</div>'+
      '<div class="wg-card-bottom">'+
        '<div class="wg-card-name">'+item.name+'</div>'+
        '<span class="wg-card-badge">'+cfg.label+'</span>'+
        '<div class="wg-card-snippet">'+item.desc+'</div>'+
      '</div>';

    // Click: case study link navigates to page; otherwise opens modal
    card.addEventListener('click',()=>{
      if(hasCaseStudy){
        if(item.link.startsWith('http')){
          window.open(item.link,'_blank','noopener,noreferrer');
        } else {
          window.location.href=item.link;
        }
      } else {
        openModal(origIdx,cat);
      }
    });

    wgf.appendChild(card);
    // Pagination: hide cards beyond PAGE_SIZE on "all" filter load
    if(cat==='all'&&i>=PAGE_SIZE){
      card.classList.add('hidden-project');
      card.style.display='none';
    } else {
      cardIO.observe(card);
    }
  });
  updateLoadMore(filtered.length,cat);
}

// ── LOAD MORE ──
function updateLoadMore(total,cat){
  const wrap=document.getElementById('portLoadMoreWrap');
  const btn=document.getElementById('portLoadMore');
  if(!wrap||!btn) return;
  if(cat!=='all'){wrap.style.display='none';return;}
  wrap.style.display='block';
  const hiddenCount=wgf.querySelectorAll('.hidden-project').length;
  if(hiddenCount===0){
    btn.textContent='All Work Shown';
    btn.disabled=true;
  } else {
    btn.innerHTML='<i class="ti ti-chevrons-down"></i>Load More Work';
    btn.disabled=false;
  }
}

document.addEventListener('DOMContentLoaded',function(){
  const btn=document.getElementById('portLoadMore');
  if(!btn) return;
  btn.addEventListener('click',function(){
    const hidden=[...wgf.querySelectorAll('.hidden-project')];
    const batch=hidden.slice(0,PAGE_SIZE);
    batch.forEach(function(card,i){
      card.classList.remove('hidden-project');
      card.style.display='';
      card.style.setProperty('--entry-delay',(i*0.07)+'s');
      void card.offsetWidth; // force reflow for transition
      card.classList.add('in-view');
      // Load image now
      const img=card.querySelector('.wg-card-img');
      if(img&&!img.complete) img.loading='eager';
    });
    const stillHidden=wgf.querySelectorAll('.hidden-project').length;
    if(stillHidden===0){
      btn.textContent='All Work Shown';
      btn.disabled=true;
    }
    // Scroll first new card into view
    if(batch.length) batch[0].scrollIntoView({behavior:'smooth',block:'nearest'});
  });
});

buildGrid('all');

// Filter — click, filter, scroll to top of portfolio
document.querySelectorAll('.port-filter').forEach(btn=>{
  btn.addEventListener('click',function(){
    document.querySelectorAll('.port-filter').forEach(b=>b.classList.remove('active'));
    this.classList.add('active');
    currentFilter=this.dataset.cat;
    buildGrid(currentFilter);
    document.getElementById('portfolio').scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// ── MODAL ──
let modalOpenProjects=[],modalIdx=0;

function openModal(idx,filterCat){
  // Build the list of projects this modal should navigate through
  const cat=filterCat||currentFilter;
  modalOpenProjects=cat==='all'?projects:projects.filter(p=>p.category===cat);
  // Find position within that filtered list
  const targetSrc=projects[idx]?projects[idx].src:'';
  const pos=modalOpenProjects.findIndex(p=>p.src===targetSrc);
  modalIdx=pos>=0?pos:0;
  renderModal();
  document.getElementById('modalBg').classList.add('open');
  document.body.style.overflow='hidden';
}

function renderModal(){
  const item=modalOpenProjects[modalIdx];
  if(!item) return;
  document.getElementById('modalImg').src=item.src;
  document.getElementById('modalImg').alt=item.name;
  document.getElementById('modalCat').textContent=item.cat;
  document.getElementById('modalTitle').textContent=item.name;
  document.getElementById('modalDesc').textContent=item.desc;
  document.getElementById('modalCounter').textContent=(modalIdx+1)+' / '+modalOpenProjects.length;
}

function closeModal(){
  document.getElementById('modalBg').classList.remove('open');
  document.body.style.overflow='';
}

document.getElementById('modalClose').addEventListener('click',closeModal);
document.getElementById('modalBg').addEventListener('click',function(e){
  if(e.target===this) closeModal();
});
document.getElementById('modalPrev').addEventListener('click',()=>{
  modalIdx=(modalIdx-1+modalOpenProjects.length)%modalOpenProjects.length;
  renderModal();
});
document.getElementById('modalNext').addEventListener('click',()=>{
  modalIdx=(modalIdx+1)%modalOpenProjects.length;
  renderModal();
});
document.addEventListener('keydown',e=>{
  if(!document.getElementById('modalBg').classList.contains('open')) return;
  if(e.key==='Escape') closeModal();
  if(e.key==='ArrowLeft'){modalIdx=(modalIdx-1+modalOpenProjects.length)%modalOpenProjects.length;renderModal();}
  if(e.key==='ArrowRight'){modalIdx=(modalIdx+1)%modalOpenProjects.length;renderModal();}
});

// ── YOUTUBE CLICK-TO-PLAY (works locally + hosted) ──
function setupYT(el){
  if(!el) return;
  const vid=el.dataset.id;
  el.addEventListener('click',function(){
    this.classList.add('playing');
    const iframeWrap=this.querySelector('.yt-iframe-wrap');
    const iframe=iframeWrap.querySelector('iframe');
    iframe.src=`https://www.youtube-nocookie.com/embed/${vid}?autoplay=1&rel=0`;
  });
}
setupYT(document.getElementById('ytMain'));

// VIDEO GRID
const videoData=[
  {id:"HW4kxzqvTJY",label:"Brand Reel"},{id:"hSABN8sDrB0",label:"Design Process"},{id:"vj0MPw26avg",label:"Client Work Showcase"},{id:"HH-CeLEeXZg",label:"Logo Animation"},{id:"Y6vqct_uFi4",label:"Cultural Design"},{id:"w2BNKA8od8s",label:"AI + Design"}
];
const vg=document.getElementById('videoGrid');
videoData.forEach(v=>{
  const el=document.createElement('div');
  el.className='yt-player';
  el.dataset.id=v.id;
  el.innerHTML=`
    <img class="yt-thumb" src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${v.label}">
    <div class="yt-overlay"></div>
    <div class="yt-play-btn"><div class="yt-play-triangle"></div></div>
    <div class="yt-label">${v.label}</div>
    <div class="yt-iframe-wrap"><iframe src="" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe></div>`;
  vg.appendChild(el);
  setupYT(el);
});

// SHORTS GRID
const shortsData=[
  {id:"V_KPnvbQI_M",label:"Behind the Brand"},{id:"6802KCAsa-s",label:"Design Tips"},{id:"W07akSTDYyE",label:"Cultural Alchemy"}
];
const sg=document.getElementById('shortsGrid');
shortsData.forEach(v=>{
  const el=document.createElement('div');
  el.className='short-player yt-player';
  el.dataset.id=v.id;
  el.innerHTML=`
    <img class="yt-thumb" src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" alt="${v.label}" style="object-fit:cover;width:100%;height:100%">
    <div class="yt-overlay"></div>
    <div class="yt-play-btn"><div class="yt-play-triangle"></div></div>
    <div class="yt-label">${v.label}</div>
    <div class="yt-iframe-wrap"><iframe src="" frameborder="0" allow="autoplay;encrypted-media" allowfullscreen></iframe></div>`;
  sg.appendChild(el);
  setupYT(el);
});
