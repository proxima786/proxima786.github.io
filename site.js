
const legacy = {about:'about.html',research:'research.html','code-peek':'code-peek.html',beyond:'beyond-science.html'};
if ((location.pathname === '/' || location.pathname.endsWith('/index.html')) && legacy[location.hash.slice(1)]) {
  location.replace(legacy[location.hash.slice(1)]);
}
document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || url.pathname === location.pathname || !url.pathname.endsWith('.html') || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  event.preventDefault();
  if (document.body.classList.contains('leaving')) return;
  document.body.classList.add('leaving');
  setTimeout(() => location.assign(url.href), 300);
});
window.addEventListener('pageshow', () => document.body.classList.remove('leaving'));
