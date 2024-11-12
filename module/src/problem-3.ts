{
    // problem 3


    function countWordOccurrences (value : string, word : string) : number {
         const values = value.split(" ");
         const totalword = values.filter(words => words === word).length;
         return totalword;
    }
       const value = "I Love typescript";
       const word = "typescript";
    const CountWordOccurrences = countWordOccurrences(value, word);
    console.log(CountWordOccurrences);
}