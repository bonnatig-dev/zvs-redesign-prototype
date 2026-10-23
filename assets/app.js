const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$$('.burger').forEach(b=>b.addEventListener('click',()=>{const m=$('.mnav'),o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){const m=$('.mnav.open');if(m){m.classList.remove('open');$('.burger').setAttribute('aria-expanded','false')}}});
$$('[data-req]').forEach(b=>b.addEventListener('click',()=>{const s=$('#product');if(s)s.value=b.dataset.req}));
$$('.tab').forEach(t=>t.addEventListener('click',()=>{$$('.tab').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-selected','false')});$$('.pane').forEach(x=>x.classList.remove('on'));t.classList.add('on');t.setAttribute('aria-selected','true');document.getElementById(t.dataset.p).classList.add('on')}));
const st={g:'all',a:'all'};
function ap(){let n=0;$$('.pc[data-g]').forEach(c=>{const ok=(st.g=='all'||c.dataset.g==st.g)&&(st.a=='all'||(c.dataset.a||'').includes(st.a));c.style.display=ok?'':'none';if(ok)n++});const o=$('#cnt');if(o)o.textContent=n?('Показано: '+n):'Нет препаратов с подтверждённым атрибутом — данные возьмём из атрибута «Вид животного» на сайте (уточнить)'}
$$('.chip').forEach(c=>c.addEventListener('click',()=>{$$('.chip[data-k='+c.dataset.k+']').forEach(x=>{x.classList.remove('on');x.setAttribute('aria-pressed','false')});c.classList.add('on');c.setAttribute('aria-pressed','true');st[c.dataset.k]=c.dataset.v;ap()}));
const q=new URLSearchParams(location.search);if(q.get('a')){const c=$('.chip[data-k=a][data-v="'+q.get('a')+'"]');c&&c.click()}if(q.get('g')){const c=$('.chip[data-k=g][data-v="'+q.get('g')+'"]');c&&c.click()}
$$('form.proto-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const er=$('.err',f),E=f.elements;let m=[];
['org','tel'].forEach(n=>E[n]&&E[n].removeAttribute('aria-invalid'));
if(E.org&&E.org.value.trim().length<2){m.push('укажите организацию');E.org.setAttribute('aria-invalid','true')}
if(!/^\+?[\d\s()-]{9,18}$/.test(E.tel.value.trim())){m.push('укажите телефон, например +375 29 123-45-67');E.tel.setAttribute('aria-invalid','true')}
if(!E.agree.checked)m.push('нужно согласие на обработку персональных данных');
er.textContent=m.length?'Пожалуйста, '+m.join('; ')+'.':'';if(m.length){(f.querySelector('[aria-invalid=true]')||E.agree).focus();return}
const ok=$('.ok',f);ok.hidden=false;ok.focus();$('button',f).disabled=true}));
