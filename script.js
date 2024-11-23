console.log("ticaa");
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let win=false;

//function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check for a win
const checkWin = () => {
    let boxtexts=document.getElementsByClassName("boxtext")
    let Wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    Wins.forEach(e=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&& (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+" Wins"
            win=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="190px"
    }
    });
}


//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn=changeTurn();
      ting.play();
      checkWin();
        if(!win){
            document.getElementsByClassName("info")[0].innerText = "Turn For: " + turn;


        }
    }
  });
});


//logic to reset
let res=document.querySelector(".reset")

res.addEventListener('click',()=>{
    let bt=document.querySelectorAll(".boxtext")
    Array.from(bt).forEach(element=>{
        element.innerText = ''
    })
    turn='X';
    win=false;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px"

})