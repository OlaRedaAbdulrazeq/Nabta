import { loadNavbar } from './modules/navbar.js';
import { loadFooter } from './modules/footer.js';

document.addEventListener("DOMContentLoaded",async ()=>{
 await loadNavbar();
 await loadFooter();
 const add = document.getElementById("addToCart");
 add.addEventListener("click",()=>window.location.href="cart.html")
})