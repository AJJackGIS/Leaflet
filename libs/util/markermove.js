/**
 * 扩展Marker
 */

L.Marker.include({
    move: function () {

        var marker = this;
        var icon = this._icon;

        var count = 0;
        var timer1, timer2;

        function add() {
            count++;
            setStyle();
            if (count >= 10) {
                clearInterval(timer1);
                timer2 = setInterval(sub, 100);
            }
        }

        function sub() {
            count--;
            setStyle();
            if (count <= -10) {
                clearInterval(timer2);
                timer1 = setInterval(add, 100);
            }
        }

        function setStyle() {
            icon.style.left = count + 'px';
        }

        timer1 = setInterval(add, 100);
    }

});