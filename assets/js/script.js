let article_menu = document.querySelector(".share-menu")   
let article_btn = document.querySelector(".share-btn")   
let article_iconbtn = document.querySelector(".share-btn i")   

article_btn.addEventListener("click", () => {
    let hidden = document.querySelector(".hidden")
    if (!hidden) {
        article_menu.classList.add("hidden")
        article_btn.classList.remove("click")
        article_iconbtn.style.color = "black";

        return;
    }

    article_menu.classList.remove("hidden")
    article_btn.classList.add("click")
    article_iconbtn.style.color = "white";
})