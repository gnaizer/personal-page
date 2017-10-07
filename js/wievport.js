function viewportWidth () {
  if (window.innerWidth) return window.innerWidth;
  var
  doc = document,
  html = doc && doc.documentElement,
  body = doc && (doc.body || doc.getElementsByTagName("body")[0]),
  getWidth = function (elm) {
    if (!elm) return 0;
    var setOverflow = function (style, value) {
      var oldValue = style.overflow;
      style.overflow = value;
      return oldValue || "";
    }, style = elm.style, oldValue = setOverflow(style, "hidden"), width = elm.clientWidth || 0;
    setOverflow(style, oldValue);
    return width;
  };
  return Math.max(
    getWidth(html),
    getWidth(body)
  );
}