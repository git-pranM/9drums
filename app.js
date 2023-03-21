// Keyboard Features
window.addEventListener("keydown", function (e) {
    if (document.getElementById(`${e.key}`)) {
        console.log(`${e.key}`);
        // sound Playing
        let audio = document.getElementById(`aud_${e.key}`);
        audio.play();
        audio.currentTime = 0;
        // button Animation
        document.getElementById(e.key).classList.add(`activeButton`);
        setTimeout(() => {
            document.getElementById(e.key).classList.remove(`activeButton`);
        }, 85);
    } else {
    }

});
// Mouse Features
const aud_key = document.querySelectorAll(".key");
console.log(aud_key);
for (let i = 0; i < aud_key.length; i++) {
    aud_key[i].addEventListener("click", function (e) {
        let audio = document.getElementById(`aud_${e.target.id}`);
        audio.currentTime = 0;
        audio.play();
    });
}