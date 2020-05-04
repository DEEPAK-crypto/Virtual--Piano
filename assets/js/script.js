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

var q = document.getElementById("c3s");
var w = document.getElementById("d3s");
var e = document.getElementById("f3s");
var r = document.getElementById("g3s");
var t = document.getElementById("a3s");
var y = document.getElementById("c4s");
var u = document.getElementById("d4s");
var i = document.getElementById("f4s");
var o = document.getElementById("g4s");
var p = document.getElementById("a4s");


document.addEventListener("keydown", function(key) {
    if (key.which == 72) {
        document.querySelector(".a3").classList.toggle("border");
        if (a.paused)
            a.play();
        else {
            a.currentTime = 0;
        }
    } else if (key.which == 67) {
        document.querySelector(".a4").classList.toggle("border");
        if (s.paused)
            s.play();
        else {
            s.currentTime = 0;
        }
    } else if (key.which == 74) {
        document.querySelector(".b3").classList.toggle("border");
        if (d.paused)
            d.play();
        else {
            d.currentTime = 0;
        }
    } else if (key.which == 86) {
        document.querySelector(".b4").classList.toggle("border");
        if (f.paused)
            f.play();
        else {
            f.currentTime = 0;
        }
    } else if (key.which == 65) {
        document.querySelector(".c3").classList.toggle("border");
        if (g.paused)
            g.play();
        else {
            g.currentTime = 0;
        }
    } else if (key.which == 75) {
        document.querySelector(".c4").classList.toggle("border");
        if (h.paused)
            h.play();
        else {
            h.currentTime = 0;
        }
    } else if (key.which == 83) {
        document.querySelector(".d3").classList.toggle("border");
        if (j.paused)
            j.play();
        else {
            j.currentTime = 0;
        }
    } else if (key.which == 76) {
        document.querySelector(".d4").classList.toggle("border");
        if (k.paused)
            k.play();
        else {
            k.currentTime = 0;
        }
    } else if (key.which == 68) {
        document.querySelector(".e3").classList.toggle("border");
        if (l.paused)
            l.play();
        else {
            l.currentTime = 0;
        }
    } else if (key.which == 186) {
        document.querySelector(".e4").classList.toggle("border");
        if (g4.paused)
            g4.play();
        else {
            g4.currentTime = 0;
        }
    } else if (key.which == 70) {
        document.querySelector(".f3").classList.toggle("border");
        if (z.paused)
            z.play();
        else {
            z.currentTime = 0;
        }
    } else if (key.which == 90) {
        document.querySelector(".f4").classList.toggle("border");
        if (x.paused)
            x.play();
        else {
            x.currentTime = 0;
        }
    } else if (key.which == 71) {
        document.querySelector(".g3").classList.toggle("border");
        if (c.paused)
            c.play();
        else {
            c.currentTime = 0;
        }
    } else if (key.which == 88) {
        document.querySelector(".g4").classList.toggle("border");
        if (v.paused)
            v.play();
        else {
            v.currentTime = 0;
        }
    } else if (key.which == 81) {
        document.querySelector(".c3s").classList.toggle("borderr");
        if (q.paused)
            q.play();
        else {
            q.currentTime = 0;
        }
    } else if (key.which == 87) {
        document.querySelector(".d3s").classList.toggle("borderr");
        if (w.paused)
            w.play();
        else {
            w.currentTime = 0;
        }
    } else if (key.which == 69) {
        document.querySelector(".f3s").classList.toggle("borderr");
        if (e.paused)
            e.play();
        else {
            e.currentTime = 0;
        }
    } else if (key.which == 82) {
        document.querySelector(".g3s").classList.toggle("borderr");
        if (r.paused)
            r.play();
        else {
            r.currentTime = 0;
        }
    } else if (key.which == 84) {
        document.querySelector(".a3s").classList.toggle("borderr");
        if (t.paused)
            t.play();
        else {
            t.currentTime = 0;
        }
    } else if (key.which == 89) {
        document.querySelector(".c4s").classList.toggle("borderr");
        if (y.paused)
            y.play();
        else {
            y.currentTime = 0;
        }
    } else if (key.which == 85) {
        document.querySelector(".d4s").classList.toggle("borderr");
        if (u.paused)
            u.play();
        else {
            u.currentTime = 0;
        }
    } else if (key.which == 73) {
        document.querySelector(".f4s").classList.toggle("borderr");
        if (i.paused)
            i.play();
        else {
            i.currentTime = 0;
        }
    } else if (key.which == 79) {
        document.querySelector(".g4s").classList.toggle("borderr");
        if (o.paused)
            o.play();
        else {
            o.currentTime = 0;
        }
    } else if (key.which == 80) {
        document.querySelector(".a4s").classList.toggle("borderr");
        if (p.paused)
            p.play();
        else {
            p.currentTime = 0;
        }
    }


});
document.addEventListener("keyup", function(key) {
    if (key.which == 72)
        document.querySelector(".a3").classList.toggle("border");
    else if (key.which == 88)
        document.querySelector(".g4").classList.toggle("border");
    else if (key.which == 71)
        document.querySelector(".g3").classList.toggle("border");
    else if (key.which == 90)
        document.querySelector(".f4").classList.toggle("border");
    else if (key.which == 70)
        document.querySelector(".f3").classList.toggle("border");
    else if (key.which == 186)
        document.querySelector(".e4").classList.toggle("border");
    else if (key.which == 68)
        document.querySelector(".e3").classList.toggle("border");
    else if (key.which == 76)
        document.querySelector(".d4").classList.toggle("border");
    else if (key.which == 83)
        document.querySelector(".d3").classList.toggle("border");
    else if (key.which == 75)
        document.querySelector(".c4").classList.toggle("border");
    else if (key.which == 86)
        document.querySelector(".b4").classList.toggle("border");
    else if (key.which == 67)
        document.querySelector(".a4").classList.toggle("border");
    else if (key.which == 74)
        document.querySelector(".b3").classList.toggle("border");
    else if (key.which == 65)
        document.querySelector(".c3").classList.toggle("border");

    else if (key.which == 81)
        document.querySelector(".c3s").classList.toggle("borderr");
    else if (key.which == 87)
        document.querySelector(".d3s").classList.toggle("borderr");
    else if (key.which == 69)
        document.querySelector(".f3s").classList.toggle("borderr");
    else if (key.which == 82)
        document.querySelector(".g3s").classList.toggle("borderr");
    else if (key.which == 84)
        document.querySelector(".a3s").classList.toggle("borderr");
    else if (key.which == 89)
        document.querySelector(".c4s").classList.toggle("borderr");
    else if (key.which == 85)
        document.querySelector(".d4s").classList.toggle("borderr");
    else if (key.which == 73)
        document.querySelector(".f4s").classList.toggle("borderr");
    else if (key.which == 79)
        document.querySelector(".g4s").classList.toggle("borderr");
    else if (key.which == 80)
        document.querySelector(".a4s").classList.toggle("borderr");
})