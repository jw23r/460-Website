
var gamestate = {
  isPlayer1Turn:true,
    scorePlayer1: 0,
      scorePlayer2: 0,
    board:[
        [3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3],
        [3,3,3,3,3,3,3],
        [0,0,0,0,0,0,0],
        
    ]
};

function buildGrid(){
   const grid = document.getElementById("grid");
    
    for(var y = 0; y < 7;y++){
        for(var x = 0; x <6; x++){
            const d = document.createElement("div");
            grid.appendChild(d);
        }
    }
}
function updateStones(){
    //Todo:remove all stones
   const rows = gamestate.board;
    const discDiv = document.getElementById("discs");
    
    if (gamestate.isPlayer1Turn){ discDiv.innerHTML = "player ones turn";}
     if (!gamestate.isPlayer1Turn){ discDiv.innerHTML = "player twos turn";}
    for(var y = 0; y < gamestate.board.length; y++){
        for(var x = 0; x < gamestate.board[y].length; x++){
            const val = rows[y][x];
            const d = document.createElement("div");
           let className = "disc";
            if(val == 1) className += " red";
             if(val == 2) className += " black";
            if(val == 0 && !gamestate.isPlayer1Turn) className += " opaqueBlack";
              if(val == 0 && gamestate.isPlayer1Turn ) className += " opaqueRed";
            const gridPos = {x: x, y: y};
            if(val==0) d.addEventListener("click", ()=>{
               
                rows[gridPos.y][gridPos.x] = (gamestate.isPlayer1Turn ?1 :2);
             
              
              if(gridPos.y > 0) {
                if(rows[gridPos.y][gridPos.x] > 0 ){ 
                   rows[gridPos.y - 1][gridPos.x] = 0;
                                                      }
              }
                gamestate.isPlayer1Turn = !gamestate.isPlayer1Turn;
               checkforwin(); 
                var winner = checkforwin();
                updateStones();
               
            });
            d.setAttribute("class",className);
            d.style.left=100*(x/8)+"%";
            d.style.top=100*(y/8)+"%";
            discDiv.appendChild(d);
        }
    }
}
function checkforwin(){
    return 0;
}
buildGrid();
updateStones();
