// array to lower number print

var num = [3,2,0,10,5,56,-21,45];
var sum=num[0];

for(var i=1; i<= num.length; i++){

    if(sum > num[i]){
        var sum= num[i];
    }
}
console.log(sum);



