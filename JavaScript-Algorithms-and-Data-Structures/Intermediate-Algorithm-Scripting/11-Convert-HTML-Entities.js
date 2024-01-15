function convertHTML(str) {
  var MAP = { '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&apos;'};
  return str.replace(/[&<>"']/g, function(c) {
    return MAP[c];
  });
}

convertHTML("Dolce & Gabbana");