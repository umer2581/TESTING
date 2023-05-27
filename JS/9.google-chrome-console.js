var a, b;
      a="umer";
      b=50;
      console.time("Testing")//to see how much time taken to process the code
      console.log(a) //here console.log print the value in developer tool
      a+=b;//here the value of a=a+b is printed
      console.log(a) 
      console.log(b) 
      a=50;
      b=a*50;
      console.log(b)
      console.log([1,2,3]);//the array will be displayed
      console.table(["Umer,Salam,Uzair,Ali asgar"]);//here the table of array will be printed.
      console.error("something went wrong")
      console.error("Something has been showing error")//here is the console.error show the error in red color in developer tool
      console.warn("This is just warning")
      console.warn("This is warning to you")//here the warning will be printed with symbol
      //console.clear(); the use of console.clear command is to clear console or developer tool it is clear all over the console
      console.timeEnd("Testing");