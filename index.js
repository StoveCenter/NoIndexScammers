var domains = ["stoveandgrillparts.com", "pellet-stove-parts-4less.com"];
if (!domains.includes(window.location.hostname)) {
  var meta = document.createElement('meta');
  meta.name = "robots";
  meta.content = "noindex";
  document.getElementsByTagName('head')[0].appendChild(meta);
}