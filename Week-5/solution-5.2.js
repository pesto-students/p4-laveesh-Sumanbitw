// vowel count

const isVowel = (char) => {
  return "aeiou".includes(char);
}

const vowelCount = (str) => {
  //returns a map where keys are number and the values are count of the vowels in the string
  const map = new Map();
  for(let char of str){
    let charToLowerCase = char.toLowerCase();
    if(isVowel(charToLowerCase)){
      if(map.has(charToLowerCase)){
        map.set(charToLowerCase, map.get(charToLowerCase) + 1)
      }else{
        map.set(charToLowerCase, 1)
      }
    }
  }
}

vowelCount("aiyhliaihxzm")