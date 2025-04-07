let dropdownKategoria = document.querySelectorAll(".dropdown-kategoria");
dropdownKategoria.forEach(el => {
    el.addEventListener("click", function () {
        this.parentElement.classList.toggle("open");
        let rgb = 16;
        let linki = this.parentElement.querySelectorAll("a");
        linki.forEach(element => {
            element.style.backgroundColor = `rgba(${rgb}, ${rgb}, ${rgb * 2}, 0.8)`;
            rgb += 3;
        });
    });
});

let img = document.querySelector(".img");
let spr = 0;
let telImg = document.querySelector(".tel-img");
img.addEventListener("click", (e) => {
    e.preventDefault();
    if (spr == 0) {
        img.style.backgroundImage = "url('Wjs-nieb.png')";
        img.style.margin = "0 5px";
        img.style.width = "12vh";
        img.style.height = "12vh";
        spr++;
    } else {
        img.style.backgroundImage = "url('Logo-nieb.png')";
        img.style.margin = "0";
        img.style.width = "9vh";
        img.style.height = "9vh";
        spr--;
    }
});
telImg.addEventListener("click", (e) => {
    e.preventDefault();
    if (spr == 0) {
        telImg.style.backgroundImage = "url('Wjs-nieb.png')";
        spr++;
    } else {
        telImg.style.backgroundImage = "url('Logo-nieb.png')";
        spr--;
    }
});


let telButton = document.querySelector(".tel-button");
let overlay = document.querySelector(".overlay");
let telMenu = document.querySelector(".tel-menu")

telButton.addEventListener("click", function () {
    telMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", function () {
    telMenu.classList.toggle("active");
    overlay.classList.toggle("active");
});

let beta = document.querySelector("span");
let betaCheck = 0;
beta.addEventListener("click", function () {
    if (betaCheck == 0){
        for (let k = 0; k < 20; k++) {
        let testowy_element = document.createElement('div');
        testowy_element.classList.add('dropdown');
        testowy_element.innerHTML = `
        <div class="dropdown-kategoria">Narzędzia</div>
        <div class="dropdown-content">
            <ul>
                <li><a href="/Konwerter">Konwenter tekstu na kod Morse'a lub alfabet z minecraft</a></li>
                <li><a href="/Morse">Konwenter tekstu na kod Morse'a</a></li>
                <li><a href="/Todo">Lista rzeczy do zrobienia</a></li>
                <li><a href="/QR-generator">Generator kodów QR (beta – brak css)</a></li>
            </ul>
        </div>
`;
        document.querySelector('.container').appendChild(testowy_element);
    }
    betaCheck++;
    }
    
    
})