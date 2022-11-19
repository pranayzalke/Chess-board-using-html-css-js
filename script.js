const chessboard = document.querySelector(".board")

let white = true;
for(let i=1;i<=64;i++){
    let box = document.createElement("div")
    box.classList.add("box")
    if(!white){
        box.classList.add("black")
    }
    white=!white
    if(i%8===0){
        white =! white
    }
    chessboard.appendChild(box)
}