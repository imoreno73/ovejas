let array = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
]
var oveja=0;
var lobo=0;


 array.forEach(function(array, index) {
    console.log(`${index} : ${array}`);
});

for(var i = 0; i < array.length; ++i){
    if(array[i] == true)
        oveja++; 
    else lobo++;
}

console.log("ovejas:",oveja);
console.log("lobos:",lobo);

