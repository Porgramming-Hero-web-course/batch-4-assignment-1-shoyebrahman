{
  // problem 2

  function removeDublicate (number: number[]) : number[] {
    return number.filter((value, index) => number.indexOf(value) === index);
  }

  const duplicateremove = removeDublicate([1, 2, 2, 3, 4, 4, 5])
  console.log(duplicateremove)



}