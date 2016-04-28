/*
	Taken from https://bgrins.github.io/TinyColor/docs/tinycolor.html
*/

const bound01 = function (n, max) {
	if (isOnePointZero(n)) {
		n = "100%";
	}

	var processPercent = isPercentage(n);
	n = Math.min(max, Math.max(0, parseFloat(n)));

	if (processPercent) {
			n = parseInt(n * max, 10) / 100;
	}

	if ((Math.abs(n - max) < 0.000001)) {
			return 1;
	}

	return (n % max) / parseFloat(max);
}

const isOnePointZero = function (n) {
	return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
};

const isPercentage = function (n) {
	return typeof n === "string" && n.indexOf('%') != -1;
};

export function rgbToHsl (r, g, b) {
	r = bound01(r, 255);
	g = bound01(g, 255);
	b = bound01(b, 255);

	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max === min) {
			h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}

		h /= 6;
	}

	return { h: h, s: s, l: l };
};

export function hslToRgb (h, s, l) {
	var r, g, b;

	h = bound01(h, 360);
	s = bound01(s, 100);
	l = bound01(l, 100);

	function hue2rgb(p, q, t) {
		if(t < 0) t += 1;
		if(t > 1) t -= 1;
		if(t < 1/6) return p + (q - p) * 6 * t;
		if(t < 1/2) return q;
		if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
		return p;
	}

	if(s === 0) {
		r = g = b = l; // achromatic
	} else {
		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1/3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1/3);
	}

	return { r: r * 255, g: g * 255, b: b * 255 };
};
