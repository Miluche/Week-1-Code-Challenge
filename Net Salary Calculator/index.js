
Let basic_salary=window.prompt("enter your basic salary")
let rent_allowance=window.prompt("enter your rent allowance")
gross_salary=basic_salary+rent_allowance
//the below portion of the code calculates the NHIF Deduction based on the gross salary
if(gross_salary<6000)
   {
     NHIF=150
      }
elseif(gross_salary>=6000 && gross_salary<8000)
      {
        NHIF=300
      }
elseif(gross_salary>=8000 && gross_salary<12000)
      {
        NHIF=400
      }
elseif(gross_salary>=12000 && gross_salary<15000)
      {
        NHIF=500
      }
elseif(gross_salary>=15000 && gross_salary<20000)
      {
        NHIF=600
      }
elseif(gross_salary>=20000 && gross_salary<25000)
      {
        NHIF=750
       }
elseif(gross_salary>=25000 && gross_salary<30000)
      {
        NHIF=850
      }
elseif(gross_salary>=30000 && gross_salary<35000)
      {
        NHIF=900
      }
elseif(gross_salary>=35000 && gross_salary<40000)
      {
        NHIF=950
      }
elseif(gross_salary>=40000 && gross_salary<45000)
      {
        NHIF=1000
      }
elseif(gross_salary>=45000 && gross_salary<50000)
      {
        NHIF=1100
      }
elseif(gross_salary>=50000 && gross_salary<60000)
      {
        NHIF=1200
      }
elseif(gross_salary>=60000 && gross_salary<70000)
      {
        NHIF=1300
      }
elseif(gross_salary>=70000 && gross_salary<80000)
      {
        NHIF=1400
      }
elseif(gross_salary>=80000 && gross_salary<90000)
      {
        NHIF=1500
      }
elseif(gross_salary>=90000 && gross_salary<100000)
      {
        NHIF=1600
      }
elseif(gross_salary>=100000)
      {
        NHIF=1700
      }
else()
{console.log("Invalid input")}

