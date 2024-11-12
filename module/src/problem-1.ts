{
  //problem 1 

  function sumArray(number: number[]) : number{
    let sumarray = 0;
    for(let i=0; i< number.length; i++){
        sumarray += number[i];
    }
    return sumarray;
  }
  const sumofallArray = sumArray([1, 2, 3, 4, 5]);
  console.log(sumofallArray)



}