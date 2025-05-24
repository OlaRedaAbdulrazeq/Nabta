
export async function loadNavbar() {
  const res = await fetch('components/navbar.html');
  const html = await res.text();
  document.getElementById("navbar-placeholder").innerHTML = html;
}



