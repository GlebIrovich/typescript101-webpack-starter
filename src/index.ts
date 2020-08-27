import "./styles.css";
import * as _ from "lodash";

window.addEventListener("load", () => {
    const header = document.createElement("h1");
    header.innerText = "Webpack❤️TS"

    const body = document.querySelector("body");
    body.appendChild(header);

    const food = [{id: 0, name: "pizza"}, {id: 1, name: "sushi"}]

    const foodElement = document.createElement("h2")
    foodElement.innerText = _.find(food, {id: 0})?.name;

    body.appendChild(foodElement);

    const preloader = document.querySelector("#preloader");
    const imgSrc = "https://www.designtagebuch.de/wp-content/uploads/mediathek//2019/11/microsoft-edge-logo-700x513.jpg"

    const img = document.querySelector("#logo") as HTMLImageElement;
    img.src = imgSrc;


    setTimeout(() => {
        if(preloader) {
            (preloader as HTMLDivElement).classList.add("hidden")
        }
    }, 3000)
})