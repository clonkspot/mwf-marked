# Copyright © 2014, Lukas Werling
#
# Permission to use, copy, modify, and/or distribute this software for any
# purpose with or without fee is hereby granted, provided that the above
# copyright notice and this permission notice appear in all copies.
# 
# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
# WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
# ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
# WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
# ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
# OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
package MwfPlgMarked;
use strict;
use warnings;

sub htmlHeader {
	my %params = @_;
	my $m = $params{m};
	return unless $m->{env}{script} =~ /_show|forum_overview|_edit|_add/;
	my $min = $m->{user}{admin} ? '' : '.min';
	print "<script type='text/javascript' src='$m->{cfg}{dataPath}/mwf-marked$min.js'></script>\n";
}

1;
