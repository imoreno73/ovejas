let array = [
    true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true
]
var oveja=0;
var array_counter = new Boolean();

 array.forEach(function(array, index) {
    console.log(`${index} : ${array}`);
});

for(var i = 0; i < array.length; ++i){
    if(array[i] == true)
        oveja++;
}
console.log(oveja);

