import OnekitComponent from '../../../toutiao2weixin/OnekitComponent';
import OnekitPage from '../../../toutiao2weixin/OnekitPage';
import OnekitBehavior from '../../../toutiao2weixin/OnekitBehavior';
import tt from '../../../toutiao2weixin/tt';
global = {};
OnekitPage({
    onLoad:function(res){
    },
    onShow:function(res){
        this.ctx = tt.createCanvasContext('canvas');
        this.r = (300 / 2);
        this.rem = (300 / 200);
        this.interval = setInterval(()=>{this.draw()},1000);
    },
    drawBackground:function(){
        var ctx = this.ctx;
        var r = this.r;
        var rem = this.rem;
        ctx.save();
        ctx.translate(r,r);
        ctx.beginPath();
        ctx.lineWidth = (10 * rem);
        ctx.arc(0,0,(r - ((ctx.lineWidth / 2))),0,(2 * Math.PI),false);
        ctx.stroke();
        var hourNumber = [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        1,
        2
    ];
        ctx.font = (((18 * rem)) + 'px Arial');
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        hourNumber.forEach(function(number,i){
        var rad = (((((2 * Math.PI)) / 12)) * i);
        var x = (Math.cos(rad) * ((r - ((30 * rem)))));
        var y = (Math.sin(rad) * ((r - ((30 * rem)))));
        ctx.fillText(number,x,y);
    });
        for(var i = 0;(i < 60);i++){
        var rad = (((((2 * Math.PI)) / 60)) * i);
        var x = (Math.cos(rad) * ((r - ((18 * rem)))));
        var y = (Math.sin(rad) * ((r - ((18 * rem)))));
        ctx.beginPath();
        if((((i % 5)) === 0)){
            ctx.fillStyle = '#000';
            ctx.arc(x,y,(2 * rem),0,2,(2 * Math.PI),false);
        } else {
            ctx.fillStyle = '#ccc';
            ctx.arc(x,y,(2 * rem),0,2,(2 * Math.PI),false);
        }
        ctx.fill();
    };
    },
    drawHour:function(hour,minute){
        var ctx = this.ctx;
        var r = this.r;
        var rem = this.rem;
        ctx.save();
        ctx.beginPath();
        var rad = (((((2 * Math.PI)) / 12)) * hour);
        var mrad = (((((((2 * Math.PI)) / 12)) / 60)) * minute);
        ctx.rotate((rad + mrad));
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.moveTo(0,(10 * rem));
        ctx.lineTo(0,(-r / 2));
        ctx.stroke();
        ctx.restore();
    },
    drawMinute:function(minute){
        var ctx = this.ctx;
        var r = this.r;
        var rem = this.rem;
        ctx.save();
        ctx.beginPath();
        var rad = (((((2 * Math.PI)) / 60)) * minute);
        ctx.rotate(rad);
        ctx.lineWidth = (3 * rem);
        ctx.lineCap = 'round';
        ctx.moveTo(0,10);
        ctx.lineTo(0,(-r + ((30 * rem))));
        ctx.stroke();
        ctx.restore();
    },
    drawSecond:function(second){
        var ctx = this.ctx;
        var r = this.r;
        var rem = this.rem;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#c14443';
        var rad = (((((2 * Math.PI)) / 60)) * second);
        ctx.rotate(rad);
        ctx.moveTo(-2,(20 * rem));
        ctx.lineTo(2,(20 * rem));
        ctx.lineTo(1,(-r + ((18 * rem))));
        ctx.lineTo(-1,(-r + ((18 * rem))));
        ctx.fill();
        ctx.restore();
    },
    drawDot:function(){
        var ctx = this.ctx;
        var rem = this.rem;
        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(0,0,(3 * rem),0,(2 * Math.PI),false);
        ctx.fill();
    },
    draw:function(){
        var ctx = this.ctx;
        ctx.clearRect(0,0,300,300);
        var now = new Date();
        var hour = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        this.drawBackground();
        this.drawHour(hour,minutes);
        this.drawMinute(minutes);
        this.drawSecond(seconds);
        this.drawDot();
        ctx.restore();
        ctx.draw();
    },
    onUnload:function(){
        clearInterval(this.interval);
    }
});
