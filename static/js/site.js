document.getElementById('year').textContent=new Date().getFullYear();const menu=document.getElementById('menu'),links=document.getElementById('links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.querySelectorAll('[data-package]').forEach(a=>a.addEventListener('click',()=>{sessionStorage.setItem('eventPackage',a.dataset.package);const select=document.getElementById('package');if(select)select.value=a.dataset.package}));

const selectedPackage=sessionStorage.getItem("eventPackage");const packageSelect=document.getElementById("package");if(packageSelect&&selectedPackage){if(![...packageSelect.options].some(option=>option.value===selectedPackage))packageSelect.add(new Option(selectedPackage,selectedPackage));packageSelect.value=selectedPackage;sessionStorage.removeItem("eventPackage");}

// Native disclosure menus support pointer, touch, and keyboard activation.
const navDropdowns = [...document.querySelectorAll('.nav-dropdown')];
function closeNavDropdowns() {
  navDropdowns.forEach(dropdown => { dropdown.open = false; });
}
document.addEventListener('click', event => {
  navDropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) dropdown.open = false;
  });
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  const activeDropdown = navDropdowns.find(dropdown => dropdown.open);
  if (activeDropdown) {
    closeNavDropdowns();
    activeDropdown.querySelector('summary').focus();
  } else if (links.classList.contains('open')) {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
links.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavDropdowns));
menu.addEventListener('click', () => {
  if (!links.classList.contains('open')) closeNavDropdowns();
});
