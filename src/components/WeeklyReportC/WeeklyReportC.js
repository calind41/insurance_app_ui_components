import React, { useEffect } from 'react'
import './WeeklyReportC.css'

export default function WeeklyReportC() {

    useEffect(() => {
        let nexP, dx2, dy2, Y, p;

        var cv = document.getElementById("myCanvas");
        var ctx = cv.getContext("2d");

        function gradient(a, b) {
            return (b.y - a.y) / (b.x - a.x);
        }

        function bzCurve(points, f, t) {
            //f = 0, will be straight line
            //t suppose to be 1, but changing the value can control the smoothness too
            if (typeof (f) == 'undefined') f = 0.3;
            if (typeof (t) == 'undefined') t = 0.6;

            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);

            var m = 0;
            var dx1 = 0;
            var dy1 = 0;

            var preP = points[0];
            for (var i = 1; i < points.length; i++) {
                var curP = points[i];
                nexP = points[i + 1];
                if (nexP) {
                    m = gradient(preP, nexP);
                    dx2 = (nexP.x - curP.x) * -f;
                    dy2 = dx2 * m * t;
                } else {
                    dx2 = 0;
                    dy2 = 0;
                }
                ctx.bezierCurveTo(preP.x - dx1, preP.y - dy1, curP.x + dx2, curP.y + dy2, curP.x, curP.y);
                dx1 = dx2;
                dy1 = dy2;
                preP = curP;
            }
            ctx.stroke();
        }

        // Generate random data
        var lines = [];
        var X = 10;
        var t = 40; //to control width of X
        for (var i = 0; i < 300; i++) {
            Y = Math.floor((Math.random() * 70) + 50);
            p = { x: X, y: Y };
            lines.push(p);
            X = X + t;
        }
        //draw smooth line
        ctx.setLineDash([0]);
        ctx.lineWidth = 3.2;
        ctx.strokeStyle = "#37F640";
        bzCurve(lines, 0.3, 1);
    }, [])
    return (
        <div className='weekly-r-c'>
            <div className='dropdown'>Weekly <i class="fas fa-chevron-down"></i></div>
            <div className='amount-growth-c'>
                <span className='amount'>$145.32</span>
                <span className='growth'>+12% compared to last week</span>
            </div>
            <div className='graph'>
                <canvas id="myCanvas" width="310" height="200">Your browser does not support the
                HTML5 canvas tag.
                </canvas>
            </div>
            <div className='work-days'>
                <span>22</span>
                <span>23</span>
                <span>24</span>
                <span>25</span>
                <span>26</span>
            </div>

        </div >
    )
}
