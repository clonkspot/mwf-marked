// Format all posts as markdown.
$(function() {
  // Setup marked.
  var renderer = new marked.Renderer();

  // Use <b> and <i> to match the standard mwf tags.
  renderer.strong = function(text) {
    return '<b>' + text + '</b>';
  };

  renderer.em = function(text) {
    return '<i>' + text + '</i>';
  };

  // Fix double linking generated by mwf.
  renderer.link = function(href, title, text) {
    href = href.replace(/.*href=&quot;(.*)&quot;&gt;.*/, "$1");
    return marked.Renderer.prototype.link.call(this, href, title, text);
  };

  marked.setOptions({
    renderer: renderer,
    breaks: true,
  });

  $('.pst, .msg, body[class$=_add] > .frm, body[class$=_edit] > .frm').find('.ccl:nth-child(2)').each(function() {
    var el, text;

    el = $(this);
    text = el.html();

    // Replace mwforum's <br>s with newlines so that paragraph detection works.
    text = text.replace(/<br>/g, '\n');
    // Remove blockquotes as they confuse marked.
    text = text.replace(/<blockquote><p>/g, '>');
    text = text.replace(/<\/p><\/blockquote>/g, '\n');

    el.html(marked(text));
    el.find('.ava').unwrap();
  });
});
