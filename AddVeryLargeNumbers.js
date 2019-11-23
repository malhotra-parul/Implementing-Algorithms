//pseudocode
//1. 2 variables - Numbers in the form of Strings - "54" and "58"
//2. Check which number is smaller by checking the length.Keep longer ones on the top. Swap if needed.
//3. convert the rightmost bits to numbers and add them.
//4.  create a sum variable of type string.
//5. Store the sum's right most bit in "sum" variable.
//6. Store the carry(leftmost bit) in "carry" variable.
//7. Repeat for the entire length.
//8. For the last iteration add the carry bit to sum bit only.
//9. Return the value of sum variable.

var first = "893427328497983427893248932498034289324"; 
var second = "234859234879342897893427893274";   

if(first.length>= second.length){
    console.log(findSum(first, second));

}
else{
   findSum(second, first);
}

function findSum(first, second){
    var sum = "";
    var carry= 0;
    var diff = second.length - first.length;
    for(i = first.length -1; i>=0; i--){
        var temp = Number(first.charAt(i))% 10 + Number(second.charAt(i+diff))%10 + carry;
        if(temp >= 10){
            sum = (temp%10) + sum;
            carry = Math.floor(temp/10);
            
        }else{
        sum = temp + sum;
        carry = 0;
    }
    }
    if(carry){
        sum = carry + sum;
    }
    return sum;

}
