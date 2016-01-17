var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 6;
var DOT_RADIUS = Math.round(RADIUS/5);
var MARGIN_TOP = 100;
var MARGIN_LEFT = 200;
var endTime = new Date();
endTime.setTime(endTime.getTime() + 3600*1000);
var currentShowTimeSeconds=0;

var balls = [];
//var colors = ["#008000","#00ffff","#FF7F50","#DC143","#00008B","#DC143C","#FF8C00","#E9967A","#008000","##9ACD32"];
var colors = ["#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","##000000"];

window.onload = function(){

    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT=document.body.clientHeight;
    MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
    MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);
    RADIUS = Math.round(WINDOW_WIDTH*3/5/108)-1;
    DOT_RADIUS = Math.round(RADIUS/5);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;

    currentShowTimeSeconds = getCurrentShowTimeSeconds();
    setInterval(function(){
        render(context);
        update();
    },50);
}

function render(cxt){
    cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT);

    var hour = parseInt(currentShowTimeSeconds/3600);
    var minite = parseInt((currentShowTimeSeconds-hour*3600)/60);
    var second = currentShowTimeSeconds%60;

    renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hour/10),cxt);//位置，数字，cxt  parseInt(minite/10)
    renderDigit(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(hour%10),cxt);
    renderDigit(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(minite/10),cxt);
    renderDigit(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(minite%10),cxt);
    renderDigit(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
    renderDigit(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(second/10),cxt);
    renderDigit(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(second%10),cxt);

    for (var i = 0; i < balls.length; i++) {
        cxt.fillStyle=balls[i].color;
        cxt.beginPath();
        cxt.arc(balls[i].x,balls[i].y,balls[i].r,0,2*Math.PI);
        cxt.closePath;
        cxt.fill();
    };
}

function renderDigit(x, y, num, cxt){       //centerX=x+j*2(R+1)+(R+1)      centerY = y+i*2(R+1)+(R+1)

    cxt.fillStyle = "rgb(0,0,0)";

    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j]==1) {
                for (var k = 0; k < 5; k++) {
                    for (var l = 0; l < 5; l++) {
                        cxt.beginPath();
                        cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1)+l*2*(DOT_RADIUS+1)+(DOT_RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1)+k*2*(DOT_RADIUS+1)+(DOT_RADIUS+1),DOT_RADIUS,0,2*Math.PI);
                        cxt.closePath();
                        cxt.fill();
                    };
                };
                // cxt.beginPath();
                // cxt.arc(x+j*2*(RADIUS+1)+(RADIUS+1),y+i*2*(RADIUS+1)+(RADIUS+1),RADIUS,0,2*Math.PI);
                // cxt.closePath();
                // cxt.fill();
            };
        };
    };

}

function getCurrentShowTimeSeconds(){
    var currTime = new Date();
    //倒计时
    // var ret = endTime.getTime() - currTime.getTime();
    // ret = Math.round(ret/1000);
    // return ret>=0 ? ret : 0;

    //时钟
    var ret = currTime.getHours()*3600+currTime.getMinutes()*60+currTime.getSeconds();
    return ret;
}

function update(){
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();

    var nextHour = parseInt(nextShowTimeSeconds/3600);
    var nextMinite = parseInt((nextShowTimeSeconds-nextHour*3600)/60);
    var nextSecond = nextShowTimeSeconds%60;

    var curHour = parseInt(currentShowTimeSeconds/3600);
    var curMinite = parseInt((currentShowTimeSeconds-curHour*3600)/60);
    var curSecond = currentShowTimeSeconds%60;

    if (nextSecond != curSecond) {

        if (parseInt(curHour/10) != parseInt(nextHour/10)) {
            addBalls(MARGIN_LEFT,MARGIN_TOP,parseInt(curHour/10));
        };
        if (parseInt(curHour%10) != parseInt(nextHour%10)) {
            addBalls(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(curHour%10));
        };
        if (parseInt(curMinite/10) != parseInt(nextMinite/10)) {
            addBalls(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(curMinite/10));
        };
        if (parseInt(curMinite%10) != parseInt(nextMinite%10)) {
            addBalls(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(curMinite%10));
        };
        if (parseInt(curSecond/10) != parseInt(nextSecond/10)) {
            addBalls(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(curSecond/10));
        };
        if (parseInt(curSecond%10) != parseInt(nextSecond%10)) {
            addBalls(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(curSecond%10));
        };
        currentShowTimeSeconds = nextShowTimeSeconds;
    };
    updateBalls();
}

function addBalls(x,y,num){
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j]==1) {
                for (var k = 0; k < 10; k++) {
                    var aBall={
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+i*2*(RADIUS+1)+(RADIUS+1),
                    g:1.5+Math.random(),
                    vx:Math.pow(-1,Math.ceil(Math.random()*1000))*Math.floor(Math.random()*30),
                    vy:Math.pow(-1,Math.ceil(Math.random()*1000))*Math.floor(Math.random()*30),
                    r:DOT_RADIUS,
                    color: colors[Math.floor(Math.random()*colors.length)]
                    };
                    balls.push(aBall);
                };
            };
        };
    };
}

function updateBalls(){
    console.log(balls.length);

    for (var i = 0; i < balls.length; i++) {
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if (balls[i].y >= WINDOW_HEIGHT-RADIUS) {
            balls[i].y=WINDOW_HEIGHT-RADIUS;
           // balls[i].vy = -balls[i].vy*0.75;
        };
        if (balls[i].vx==0) {
            balls[i].vx -= 5;
        };
    };

    //删掉不在画面中的小球，提高性能
    var cnt=0;
    for (var i = 0; i < balls.length; i++) {
        if(balls[i].x+RADIUS > 0 && balls[i].x-RADIUS<WINDOW_WIDTH){
            balls[cnt++] = balls[i];
        }
    };

    while(balls.length > cnt){ //|| balls.length>300){//Math.min(300,cnt)
        balls.pop();
    }
}