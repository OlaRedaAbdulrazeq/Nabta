import { loadNavbar } from "./modules/navbar.js";
import { loadFooter } from "./modules/footer.js";

document.addEventListener("DOMContentLoaded", () => {
const viewBtn = document.getElementById("viewMoreBtn");

  loadNavbar();
  loadFooter();

  viewBtn.addEventListener("click",()=>{
        document.getElementById("viewMore").classList.toggle("d-none");
        if (viewBtn.textContent==="View More") {
             viewBtn.textContent="View Less";
        }else {
            viewBtn.textContent="View More";
        }
});  

});
