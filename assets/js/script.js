jQuery(function(){
    $.magicCanvas.draw({
        type:"random-move",
        rgb : function (circlePos) {
            var px = circlePos.x;
            var py = circlePos.y;
            return {
                r:255,
                g:255,
                b:255
            };
        },
        zIndex : 0
    });
});
