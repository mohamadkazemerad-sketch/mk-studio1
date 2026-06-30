import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const Card01 = `

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

`;



document.querySelector("#app").innerHTML = `

${Header()}

${Hero()}

${Card01}

${Projects()}

${About()}

${Services()}

${Skills()}

${Contact()}

${Footer()}

`;

const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:.15

});



sections.forEach(section=>{


section.classList.add("hidden");


observer.observe(section);


});