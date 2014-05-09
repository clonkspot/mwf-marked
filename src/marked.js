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

  marked.setOptions({
    renderer: renderer,
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
  });
});
