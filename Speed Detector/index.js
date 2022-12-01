let speed=prompt("please the driver's speed", speed)
if(speed<70){
   console.log("Ok");
}
else
{
console.log("Points:"+((speed-70)/5));
if(((speed-70)/5)>12)
{
sonsole.log("License suspended");
}
}
