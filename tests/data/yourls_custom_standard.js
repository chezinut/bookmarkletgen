// Custom Standard (prompt for a keyword)

var d = document,
	enc = encodeURIComponent,
	e = window.getSelection,
	k = d.getSelection,
	x = d.selection,
	s = (e ? e() : (k) ? k() : (x ? x.createRange().text : 0)),
	s2 = ((s.toString() == '') ? s : enc(s)),
	f = 'http://sho.rt/admin/index.php',
	l = d.location.href,
	ups = l.match( /^[a-zA-Z0-9\+\.-]+:(\/\/)?/ )[0],
	ur = l.split(new RegExp(ups))[1],
	ups = ups.split(/\:/),
	k = prompt("Custom URL"),
	k2 = (k ? '&k=' + k : ""),
	p = '?up='+enc(ups[0]+':')+'&us='+enc(ups[1])+'&ur='+enc(ur)+'&t='+enc(d.title)+'&s='+s2 + k2,
	u = f + p;
if (k != null) {
	try {
		throw ('ozhismygod');
	} catch (z) {
		a = function () {
			if (!w.open(u)) l = u;
		};
		if (/Firefox/.test(navigator.userAgent)) setTimeout(a, 0);
		else a();
	}
	void(0)
}