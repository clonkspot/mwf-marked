// Format all posts as markdown.
$('.pst > .ccl:nth-child(2)').each(function() {
  var el, text;

  el = $(this);
  text = el.html();

  // Replace mwforum's <br>s with newlines so that paragraph detection works.
  text = text.replace(/<br>/g, '\n');
  // Remove blockquotes as they confuse marked.
  text = text.replace(/<\/?blockquote>/g, '');

  el.html(marked(text));
});
