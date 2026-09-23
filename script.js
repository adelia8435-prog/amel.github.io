const intro=document.getElementById('intro'),site=document.getElementById('site'),bar=document.getElementById('loadbar');
let p=0;
const timer=setInterval(()=>{p++;bar.style.width=p+'%';if(p>=100){clearInterval(timer);setTimeout(()=>{intro.classList.add('fade-out');setTimeout(()=>{intro.remove();site.classList.remove('hidden')},550)},300)}},28);

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
 const id=a.getAttribute('href').slice(1), target=document.getElementById(id); if(!target)return;
 e.preventDefault();target.scrollIntoView({behavior:'smooth'});
}));
