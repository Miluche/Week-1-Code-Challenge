function speed(){
let speed=prompt("please the driver's speed", speed) //This line takes the speed input from the user
if(speed<70){
   console.log("Ok");
}
else
{
console.log("Points:"+((speed-70)/5));
if(((speed-70)/5)>12)
{
console.log("License suspended");
}
}
}
