// Format all posts as markdown.
$(function() {
  $('.pst > .ccl:nth-child(2), body[class^=post] > .frm > .ccl').each(function() {
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
