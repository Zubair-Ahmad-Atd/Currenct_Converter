 import inquirer from "inquirer";

 let ans = await inquirer.prompt({ 
    type:"list",
    name:"selectCurrency",
    message:"Enter the currency want to convert",
    choices:["dollar","riyal"]
 }) 

//  console.log(ans);  
// dollar conversion
if(ans.selectCurrency === "dollar"){
    let rupees = await inquirer.prompt({ 
        type:"number",
        name:"enterAmount",
        message:"Enter amount in Rupees to convert",
    }) 
    if(rupees.enterAmount > 277){ 
      // 1 dollar = 277 rupees 
      // 230 r = 1 d
      // 1 r = 1/230 d 

      let dollar = rupees.enterAmount/277;
      console.log(`${dollar} Dollar`);
      
    }
    else{ 
        console.log("enter amount more than 277");
        
    }
} 

// Riyal convertion
if(ans.selectCurrency === "riyal"){ 
    let rupees = await inquirer.prompt({ 
        type:"number",
        name:"enterAmount",
        message:"Enter amount in Rupees to convert",
    })  
    if(rupees.enterAmount > 75){ 
       
       let riyal = rupees.enterAmount/75;
        console.log(`${riyal} Riyal`);
        
      } 
      else{ 
        console.log("Enter amount more than 75");
        
    }
}

else{}
 