function myFunction() {
    numbers.sort(function (a, b){return a-b});
    return numbers;
}

function countDuplicates(numbers){
  var duplicatenr=0;
  var i,j;
  while (j<= numbers.length){
      var count=1;
      for (i=j+1; i<= numbers.length; i++){
          if (numbers[j] == numbers[i]){
            count++;
          }
          else{
            duplicatenr++;
            j=count;
            break;
          }
       }
       j=count;
    }
    return count;
}

var j=0;
var numbers= [1, 70, 21, 1, 3, 15, 70, 3, 1];
myFunction(numbers);
countDuplicates(numbers);