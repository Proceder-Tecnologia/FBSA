const staticPaths = new Set(["/FirstSection/FirstSection.jpg","/Footer/BeauxDeLavie.jpg","/Footer/Daumier.jpg","/Footer/DaumierLawyers.jpg","/Footer/Facebook.svg","/Footer/LesAvocat.jpg","/Footer/Twitter.svg","/Hero/HeroImage.jpg","/LogoBig.svg","/Navigation/Areas-Hover.svg","/Navigation/Areas.svg","/Navigation/Home-Hover.svg","/Navigation/Home.svg","/Navigation/Office-Hover.svg","/Navigation/Office.svg","/Services/Accounting.jpg","/Services/Building.jpg","/Services/Family.jpg","/Services/Innovation.jpg","/Services/Journal.jpg","/Services/People.jpg","/Services/Scenery.jpg","/Services/TradeCenter.jpg","/_headers","/favicon.svg","/manifest.json","/q-manifest.json","/qwik-prefetch-service-worker.js","/robots.txt","/service-worker.js"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };