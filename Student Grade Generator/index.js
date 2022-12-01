//code to display grades of marks entered by the users
function mark(){
let mark= prompt("please enter the students marks", mark); //this line prompt the user to enter the students mark
}
if (mark > 79)//condition to check if mark entered is more than 79
{
    console.log("Grade is A");      
    } 
   else if (mark<=79 && mark>60) {
          console.log("Grade is B"); 
            } 
    else if (mark < 59 && mark>=49) 
       {
          console.log("Grade is C"); 
    } else if (mark<=49 && mark>40) {
          console.log("Grade is D"); 
    } else if (mark<40) {
          console.log("Grade is E"); }
      else if (mark<100 && mark<0)////checks if mark entered is within the range of 0 to 100,
       {
            console.log("Invalid mark");}
else {
      console.log("try again"); //displays try again if mark entered is not within the conditions eg. entering string instead of integer
    }
