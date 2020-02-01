var game=new Array();
game['纸牌游戏']=['斗地主','扎金花','拖拉机','三打哈'];
game['棋类游戏']=['五子棋','军旗','中国象棋','围棋'];
game['其他游戏']=['LOL','魔兽世界','阴阳师','王者荣耀'];
function submit_click() {
    alert(document.getElementById('gameType').value+"-->"+document.getElementById('gameList').value);
}
function changeGame() {
    //20190607-3
    var gameType=document.getElementById('gameType').value;
    var gameList=document.getElementById('gameList');
    gameList.options.length=0;
    for(var i in game){
        if(i==gameType){
            for(var j in game[i]){
                gameList.add(new Option(game[i][j],game[i][j]),null);
            }
        }
    }
}
function allGame() {
    var gameType=document.getElementById('gameType');
    for(var i in game){
        gameType.add(new Option(i,i),null);
    }
}
window.onload=allGame();
