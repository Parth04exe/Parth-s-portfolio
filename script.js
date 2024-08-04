function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var typed = new Typed('#element', {
    strings: ['WEB DEVELOPER', 'WEB DESIGNER', 'GRAPHIC DESIGNER', 'VIDEO EDITOR'],
    typeSpeed: 90,
});
