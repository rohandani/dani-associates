(()=>{
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 if(reduced.matches||!('IntersectionObserver' in window))return;
 const targets=[...document.querySelectorAll('.principal>*,.milestone-heading,.timeline>li,.hero>.eyebrow,.hero-top>*,.hero-photo,.stats,.about>*,.section-head>*,.service,.gallery figure,.process>h2,.step,.contact>*')];
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -25px 0px'});
 targets.forEach(el=>{el.classList.add('reveal');if(el.matches('.about>*,.section-head>*'))el.classList.add('from-side');if(el.matches('.service,.step'))el.style.setProperty('--reveal-delay',`${[...el.parentElement.children].indexOf(el)*85}ms`);observer.observe(el)});
 document.documentElement.classList.add('motion-ready');
 const progress=document.createElement('div');progress.className='scroll-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
 let queued=false;function update(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max>0?Math.min(1,Math.max(0,scrollY/max)):0})`;queued=false}addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});addEventListener('resize',update);update();
 document.addEventListener('focusin',e=>{const el=e.target.closest('.reveal');if(el)el.classList.add('is-visible')});
 reduced.addEventListener('change',e=>{if(e.matches){document.documentElement.classList.remove('motion-ready');observer.disconnect();progress.remove()}});
})();
