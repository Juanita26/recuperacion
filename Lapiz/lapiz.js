let canv = document.querySelector ("#myCanvas")
let ctx = canv.getContext("2d")
ctx.fillStyle = "#FFD4D4";
ctx.strokeStyle = "#FEC7C7";
ctx.beginPath()
ctx.arc(100,100,50,1*Math.PI,0*Math.PI)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#CCCCCC";
ctx.strokeStyle = "#B5B5B5";
ctx.beginPath()
ctx.rect (50,100,100,50)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#FFD054";
ctx.strokeStyle = "#FFCD48";
ctx.beginPath()
ctx.rect (50,150,100,300)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#FFDAAB";
ctx.strokeStyle = "#FFD7A5";
ctx.beginPath()
ctx.moveTo (50,450)
ctx.lineTo(100,550)
ctx.lineTo(150,450)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#f5be84";
ctx.strokeStyle = "#f5be84";
ctx.beginPath()
ctx.moveTo (50,450)
ctx.lineTo(100,550)
ctx.lineTo(150,450)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "#75706b";
ctx.strokeStyle = "#75706b";
ctx.beginPath()
ctx.moveTo (85,520)
ctx.lineTo(100,550)
ctx.lineTo(115,520)
ctx.stroke()
ctx.fill()
