const dino = document.getElementById("dino");
const factus = document.getElementById("factus");

document.addEventListener("keydown", function(event){
    jump();
})

function jump(){
    if(!dino.classList.contains("jump")){
        dino.classList.add("jump")
    }
    setTimeout( function(){
        dino.classList.remove("jump")
    }, 500)
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let factusLeft = parseInt(window.getComputedStyle(factus).getPropertyValue("left"));

    if(factusLeft <50 && factusLeft>0 && dinoTop>= 140) {
  document.getElementById("gameOver").style.display = "flex"; clearInterval(isAlive);factus.style.animationPlayState = "paused";}
    }, 10)


//"MY CODE" ^^^^
//GPT vvv


   // Получаем элементы
// const dino = document.getElementById("dino");
// const factus = document.getElementById("factus");
// const gameOverScreen = document.getElementById("gameOver");
// const restartBtn = document.getElementById("restartBtn");

// let isGameOver = false;
// let isAlive;

// // Обработчик прыжка
// document.addEventListener("keydown", function(event){
//     if (!isGameOver) jump();
// });

// function jump(){
//     if(!dino.classList.contains("jump")){
//         dino.classList.add("jump");
//         setTimeout(function(){
//             dino.classList.remove("jump");
//         }, 500);
//     }
// }

// // Функция проверки столкновения
// function startGame() {
//     // Сбрасываем анимации
//     factus.style.animation = "factusMov 3.4s infinite ease-in";
//     factus.style.animationPlayState = "running";
//     dino.style.animationPlayState = "running";
//     gameOverScreen.style.display = "none";
//     isGameOver = false;

//     // Интервал проверки столкновения
//     isAlive = setInterval(function(){
//         if (isGameOver) return;

//         let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
//         let factusLeft = parseInt(window.getComputedStyle(factus).getPropertyValue("left"));

//         if(factusLeft < 50 && factusLeft > 0 && dinoTop >= 140) {
//             // Столкновение — конец игры
//             isGameOver = true;
//             factus.style.animationPlayState = "paused";
//             dino.style.animationPlayState = "paused";
//             gameOverScreen.style.display = "flex";
//             clearInterval(isAlive);
//         }
//     }, 10);
// }

// // Старт игры при загрузке
// startGame();

// // Кнопка "Сыграть снова" — просто обновляет страницу
// restartBtn.addEventListener("click", function(){
//     location.reload();
// });
