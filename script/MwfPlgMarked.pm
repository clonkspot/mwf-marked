package MwfPlgMarked;
use strict;
use warnings;

sub htmlHeader {
	my %params = @_;
	my $m = $params{m};
	return unless $m->{env}{script} =~ /_show|forum_overview|_edit|_add/;
	print "<script type='text/javascript' src='$m->{cfg}{dataPath}/mwf-marked.js'></script>\n";
}

1;
