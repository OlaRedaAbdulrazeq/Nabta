export async function loadFooter() {
  const res = await fetch('components/footer.html');
  const html = await res.text();
  document.getElementById("footer-placeholder").innerHTML = html;
}
