const $$$ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const link = $$('.collapse .navbar-top-2 .nav-item .nav-link');
const point = $$('.carousel-indicators .point');
// const dot = $$('.container .row .dot');

link.forEach((link, index) => {
    link.onclick = function () {
        $$$('.nav-link.active').classList.remove('active')
        this.classList.add('active');
    }
});

// const toggle = $$$(".toggle");
// toggle.addEventListener("click", () => {
//     toggle.classList.toggle("change");
// });

// point.forEach((active) => {
//     active.onclick = function () {
//         $$$('.point.active').classList.remove('active');
//         this.classList.add('active');
//     }
// });

$(document).ready(function () {
    var btn = $('#go-to-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    $("#slick").ddslick({
        width: "60px",
        background: "white",
        imagePosition: "left",
        selectText: "Select your favorite social network",
        // onSelected: function (data) {
        //     $("#slick").html(data.selectedData.value);
        // },
    });
    $("#slick2").ddslick({
        width: "60px",
        background: "white",
        imagePosition: "left",
        selectText: "Select your favorite social network",
    });
});

function openNav() {
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("body").style.overflowY = "hidden";
}

function closeNav() {
    document.getElementById("mySidenav").style.right = "-70%";
    document.getElementById("body").style.overflowY = "scroll";
}

