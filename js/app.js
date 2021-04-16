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

const toggle = $$$(".toggle");
toggle.addEventListener("click", () => {
    toggle.classList.toggle("change");
});

point.forEach((active) => {
    active.onclick = function () {
        $$$('.point.active').classList.remove('active');
        this.classList.add('active');
    }
});

const search = document.getElementById('search');
const btnSearch = document.getElementById('btn-search');

btnSearch.onclick = function (e) {
    if (!search.classList.contains('hide')) {
        if (isNaN(search.value)) {
            if (btnSearch.type == "button") {
                btnSearch.type = 'submit';
            } else {
                btnSearch.type = 'button';
            }
        }
    }
    search.classList.toggle('hide');
}




