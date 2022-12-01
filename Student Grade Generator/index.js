//code to display grades
let mark= prompt("please enter the students marks", mark);
if (mark < 79){
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
      else if (mark<100 && mark<0) {
            console.log("Invalid mark");}
else {
      console.log("try again");
    }
