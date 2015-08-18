//test suite
function assert(input, output, testFunction) {
    return output === testFunction(input);
}
//
function first(array){
    return array[0];
}

//first test
console.log(assert(["monday", "tuesday", "wednesday"], "monday", first));

function last(array){
    return array[array.length -1];
}

//last test
console.log(assert(["monday", "tuesday", "wednesday"], "wednesday", last));

function min(arry){
    var smallest = arry[0];
    for(i = 1; i < arry.length; i++){
        if(arry[i] < smallest){
            smallest = arry[i];
        }
    }
    return smallest;
}

//min test
console.log(assert([144, 12, 81, 9], 9, min));
 
function max(arry){
    var largest = arry[0];
    for(i = 1; i < arry.length; i++){
        if(arry[i] > largest){
            largest = arry[i];
        }
    }
    return largest;
}

//max test
console.log(assert([2, 4, 8, 16, 32, 64, 10], 64, max));

var o_o = {};
o_o.first = first;
o_o.last = last;
o_o.min = min;
o_o.max = max;