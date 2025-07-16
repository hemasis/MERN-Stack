document.addEventListener("DOMContentLoaded", () => {
    const bulb = document.getElementById("bulb");

    const button = document.getElementById("togglebtn");

    let isOn = false;
    button.addEventListener("click", () => {
        if(isOn == false) {
            bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
            button.innerHTML = "Turn Off";
            isOn = true;
        } else {
            bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
            button.innerHTML = "Turn On";
            isOn = false;
        }
    });
});