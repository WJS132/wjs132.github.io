let dropdownKategoria = document.querySelectorAll(".dropdown-kategoria");
dropdownKategoria.forEach(el => {
    el.addEventListener("click", function(){
        this.parentElement.classList.toggle("open");
        let rgb = 26;
        let linki = this.parentElement.querySelectorAll("a");
        linki.forEach(element => {
            element.style.backgroundColor = `rgba(${rgb}, ${rgb}, ${rgb}, 0.8)`;
            rgb += 2;
        });
    });
});

let img = document.querySelector(".img");
let spr = 0;
img.addEventListener("click", () => {
    if (spr == 0){
        img.style.backgroundImage = "url('Wjs.png')";
        img.style.margin = "0 5px";
        spr++;
    }else{
        img.style.backgroundImage = "url('Logo.png')";
        img.style.margin = "0";
        spr--;
    }
    
});
