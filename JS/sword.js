//array ki ginti 0 se chalu hoti hai or ise indexing bolte hai
//high level language fast hoti hai. array me ek hi data type aati hai.
//Let aur var me fark var jo hota hia global type ya functional type 
{
    let a = "umer naaz"
    const b = "50"
    var c = "sword"
}
//console.log(a);
//console.log (b); //let aur const blogscope ke bahar error dete hai except var
//curely barrace blog banante hai use blogscope aur agar function banaty time use function sciope kehte hai
console.log(c);
function emptyfn() {
    var sword = "mo umer"
}
//console.log(sword); //agar koi variable functionblog ke ander declare hai to usko blog ke bahar access nahi kar sakte hai.
//var blog ke bahar access hota hai par function me nahi hota
const arr = [1, "str", true] //3 ka matlab ander kitni value add hai 
//console.log(arr)//array ko access karne ke ke arr aur square bracate.
//console.log(arr[0])//arr access karne ke liye square brackate lagaya hai
//console.log(arr[1])
//console.log(arr[2])//this is called indexing aur off ka matlab square brackate lagana hai
//loop
//1.for loop
for (let i = 0; i <arr.length; i++) {
    console.log()//for loop jab bhi chalega har baar blogscope new banega
    //3 step of for loop intialize condition increamnet
}
console.log(arr[i]) 