/**
 * Created by Matt on 12/30/2016.
 */
var draw = require ("draw.js")
var drawer = {
    canvas: null,
    makeDrawer: function (canvas) {
        this.canvas = canvas;
        /**
         * This function will also be used to begin callbacks with window.requestAnimationFrame()
         */
    },
        /**
         * interface drawCommand
         * var drawCommand = {startX:String, startY:String, endX:String, endY:String, drawType:String};
         *
         * drawType will  be able to accept: "Line" and "arc"
         */

    addDrawing: function([drawCommand]) {

    },
    eraseDrawing: function([drawCommand]) {

    }
};
