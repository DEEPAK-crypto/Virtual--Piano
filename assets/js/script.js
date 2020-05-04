var a = document.getElementById("a3");
var s = document.getElementById("a4");
var d = document.getElementById("b3");
var f = document.getElementById("b4");
var g = document.getElementById("c3");
var h = document.getElementById("c4");
var j = document.getElementById("d3");
var k = document.getElementById("d4");
var l = document.getElementById("e3");
var g4 = document.getElementById("e4");
var z = document.getElementById("f3");
var x = document.getElementById("f4");
var c = document.getElementById("g3");
var v = document.getElementById("g4");

document.addEventListener("keydown", function(key) {
    if (key.which == 65) {
        if (a.paused)
            a.play();
        else {
            a.currentTime = 0;
        }
    } else if (key.which == 83) {
        if (s.paused)
            s.play();
        else {
            s.currentTime = 0;
        }
    } else if (key.which == 68) {
        if (d.paused)
            d.play();
        else {
            d.currentTime = 0;
        }
    } else if (key.which == 70) {
        if (f.paused)
            f.play();
        else {
            f.currentTime = 0;
        }
    } else if (key.which == 71) {
        if (g.paused)
            g.play();
        else {
            g.currentTime = 0;
        }
    } else if (key.which == 72) {
        if (h.paused)
            h.play();
        else {
            h.currentTime = 0;
        }
    } else if (key.which == 74) {
        if (j.paused)
            j.play();
        else {
            j.currentTime = 0;
        }
    } else if (key.which == 75) {
        if (k.paused)
            k.play();
        else {
            k.currentTime = 0;
        }
    } else if (key.which == 76) {
        if (l.paused)
            l.play();
        else {
            l.currentTime = 0;
        }
    } else if (key.which == 186) {
        if (g4.paused)
            g4.play();
        else {
            g4.currentTime = 0;
        }
    } else if (key.which == 90) {
        if (z.paused)
            z.play();
        else {
            z.currentTime = 0;
        }
    } else if (key.which == 88) {
        if (x.paused)
            x.play();
        else {
            x.currentTime = 0;
        }
    } else if (key.which == 67) {
        if (c.paused)
            c.play();
        else {
            c.currentTime = 0;
        }
    } else if (key.which == 86) {
        if (v.paused)
            v.play();
        else {
            v.currentTime = 0;
        }
    }
});