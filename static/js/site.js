
// Set this to your real booking email before publishing to enable direct email inquiries.
const BOOKING_EMAIL = window.PRO_EVENT_BOOKING_EMAIL || "";
document.getElementById('year').textContent=new Date().getFullYear();const menu=document.getElementById('menu'),links=document.getElementById('links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.querySelectorAll('[data-package]').forEach(a=>a.addEventListener('click',()=>{sessionStorage.setItem('eventPackage',a.dataset.package);const select=document.getElementById('package');if(select)select.value=a.dataset.package}));document.getElementById('inquiry')?.addEventListener('submit',async e=>{e.preventDefault();const f=e.currentTarget; if(!f.reportValidity())return;const d=new FormData(f);const body=[...d.entries()].map(([k,v])=>`${k.toUpperCase()}: ${v}`).join('\n');const subject='Event Inquiry - Pro Event Bartenders';const status=document.getElementById('formStatus');if(BOOKING_EMAIL){window.location.href=`mailto:${BOOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;status.textContent='Your email app should open with the inquiry ready to send. Please send it to complete your request.'}else{try{await navigator.clipboard.writeText(`${subject}\n\n${body}`);status.textContent='Inquiry copied! The business booking email must be connected before the website can receive submissions.'}catch{status.textContent='The booking email has not been connected yet. Please contact the business directly once contact details are published.'}}});

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
