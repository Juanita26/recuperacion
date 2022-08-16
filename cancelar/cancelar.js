let canv = document.querySelector("#myCanvas");
let ctx = canv.getContext("2d")

class Personaje{
    constructor(x, y, angle, r){
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.r = r;
    }
    dibujarse (){
        ctx.translate (this.x, this.y);
        ctx.rotate (this.angle*Math.PI/180);

        ctx.beginPath();
        ctx.arc (0, 0, this.r, 0, 2*Math.PI);
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc (0, 0, this.r/2, 0.25*Math.PI, 0.75*Math.PI);
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc (-15, -11, this.r/6, 0.25*Math.PI, 2.25*Math.PI);
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc (15, -11, this.r/6, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();

        ctx.beginPath ();
        ctx.arc (-15, -11, this.r/15, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.fill ();

        ctx.beginPath ();
        ctx.arc (15, -11, this.r/15, 0.25*Math.PI, 2.25*Math.PI)
        ctx.stroke ();
        ctx.fill ();

        ctx.beginPath();
        ctx.moveTo(-5,0);
        ctx.lineTo(6,5);
        ctx.lineTo(-5,10);
        ctx.stroke();

        ctx.strokeStyle = "black";
        ctx.rotate (-this.angle*Math.PI/180);
        ctx.translate (-this.x, -this.y);
    }
}

let z = new Personaje (300, 200, 45, 50)
z.dibujarse ()

let contenedor =  document.querySelector("#contenedor")
contenedor.innerHTML = "Haz click en el personaje para que desaparezca"

canv.addEventListener ("click", function(a){
 let XM = a.offsetX
 let YM = a.offsetY
 if ((XM - z.x)**2 + (YM - z.y)**2 <= (z.r)**2){
    ctx.fillStyle = "white"
    ctx.beginPath ()
    ctx.rect (z.x - z.r, z.y - z.r, 2.1*z.r, 2.1*z.r)
    ctx.fill ()
    ctx.fillStyle = "black"
 }
})