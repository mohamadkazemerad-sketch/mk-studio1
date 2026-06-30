(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){return`


<header class="header">


<div class="logo">
MK<span>.</span>
</div>



<nav>

<a href="#">
خانه
</a>


<a href="#">
پروژه‌ها
</a>


<a href="#">
درباره من
</a>


<a href="#">
خدمات
</a>


<a href="#">
ارتباط
</a>


</nav>




<div class="header-right">

<button>
شروع پروژه
</button>

</div>



</header>


`}function t(){return`


<section class="hero">


<div class="hero-content">


<span>
01 — MK DIGITAL STUDIO
</span>


<h1>

طراحی
<br>

تجربه های
<span>
دیجیتال لوکس
</span>

</h1>


<p>

طراحی سایت های مدرن با تمرکز روی تجربه کاربر و کد نویسی تمیز

</p>


<button>
مشاهده پروژه
</button>


</div>



<div class="sphere">

</div>


</section>


`}function n(){return`


<section class="projects">


<div class="project-header">


<span>
02 — Portfolio
</span>


<h2>
پروژه‌هایی که ساخته‌ام
</h2>


</div>




<div class="project-grid">



<div class="project-card">


<img src="/images/project1.jpg" alt="Luxury Fashion Website">



<div class="project-info">


<h3>
Luxury Fashion Website
</h3>


<p>
طراحی سایت فروشگاهی لوکس و مدرن
</p>


<a href="https://mohamadkazemerad-sketch.github.io/luxury-store/" target="_blank">
مشاهده پروژه
</a>


</div>


</div>







<div class="project-card">


<img src="/images/project2.jpg" alt="Business Website">



<div class="project-info">


<h3>
Business Website
</h3>


<p>
طراحی سایت حرفه‌ای برای کسب‌وکار
</p>


<a href="https://mohamadkazemerad-sketch.github.io/abolfazl-site" target="_blank">
مشاهده پروژه
</a>


</div>


</div>







<div class="project-card">


<img src="/images/project3.jpg" alt="Creative Landing Page">



<div class="project-info">


<h3>
Creative Landing Page
</h3>


<p>
صفحه فرود مدرن با تجربه کاربری جذاب
</p>


<a href="https://mohamadkazemerad-sketch.github.io/nexora-saas/" target="_blank">
مشاهده پروژه
</a>


</div>


</div>



</div>


</section>


`}function r(){return`


<section class="about">


<span>
03 — MK Studio درباره
</span>


<h2>
ساخت تجربه های دیجیتال با طراحی دقیق و کد نویسی تمیز
</h2>


<p>

من طراحی سایت‌های مدرن و لوکس انجام میدم؛
تمرکز روی رابط کاربری، تجربه کاربر و کدنویسی تمیز.

</p>


</section>


`}function i(){return`


<section class="services">


<span>
04 — خدمات
</span>


<h2>
پروژه هایی که ساخته ام
</h2>



<div class="service-box">


<div>
طراحی رابط کاربری
</div>


<div>
توسعه فرانت اند
</div>


<div>
UI/UX طراحی
</div>



</div>


</section>


`}function a(){return`


<section class="skills">


<span>
05 — مهارت ها
</span>


<h2>
ابزارهای کاری من
</h2>



<div class="skills-grid">


<div>
HTML / CSS
</div>


<div>
JavaScript
</div>


<div>
UI Design
</div>


<div>
Responsive Design
</div>



</div>


</section>


`}function o(){return`


<section class="contact">


<span>
06 — Contact
</span>


<h2>
بیایید یک پروژه فوق العاده بسازیم
</h2>



<p>

یک ایده دارید؟ با هم آن را به یک تجربه دیجیتال تبدیل کنیم

</p>


<button>
ارتباط با من
</button>



</section>


`}function s(){return`


<footer class="footer">


<div class="footer-logo">

MK Studio.

</div>



<p>

Designing digital experiences.

</p>



<div class="footer-line"></div>



<span>

© 2026 MK Studio

</span>



</footer>


`}var c=`

<section class="card01">


<div>

<h3>
تجربه دیجیتال لوکس
</h3>


<p>
طراحی سایت‌های مدرن و حرفه‌ای
</p>


</div>


</section>

`;document.querySelector(`#app`).innerHTML=`

${e()}

${t()}

${c}

${n()}

${r()}

${i()}

${a()}

${o()}

${s()}

`;var l=document.querySelectorAll(`section`),u=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`show`)})},{threshold:.15});l.forEach(e=>{e.classList.add(`hidden`),u.observe(e)});