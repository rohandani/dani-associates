(()=>{
 const header=document.querySelector('header');
 if(!header)return;
 const update=()=>document.documentElement.style.setProperty('--header-height',`${Math.ceil(header.getBoundingClientRect().height)}px`);
 update();
 if('ResizeObserver' in window)new ResizeObserver(update).observe(header);
 else window.addEventListener('resize',update);
})();
