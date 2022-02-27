import React, {useEffect} from 'react'

const TestJs = () => {

    // useEffect(() => {
    //     // Longest String in an Array
    //     const longestString2 = (arr) => {
    //         let biggest = '';
    //         arr.forEach((item) => {
    //             if (item.length > biggest.length) {
    //                 biggest = item;
    //             }
    //         });
    //         return biggest;
    //     }

    //     const outString = longestString2(['abchd', 'abc', 'abcd']);
    //     console.log(outString);
    // }, []);



    // useEffect(() => {
    //     // Most Commonly Used Character in String
    //     const countingChars = (str) => {
    //         const countObj = {};
    //         let count = 0;
    //         let countChar = '';

    //         for (let i = 0; i < str.length; i++) {
    //             countObj[str[i]] = ++countObj[str[i]] || 1;
    //         }

    //         for (let item in countObj) {
    //             if (countObj[item] >= count) {
    //                 count = countObj[item];
    //                 countChar = item;
    //             }
    //         }
    //         return countChar;
    //     }

    //     const outString = countingChars('strings');
    //     console.log(outString);
    // }, []);



    // useEffect(() => {
    //     // Two Strings Are Anagrams of Each Other
    //     const anagrams = (str1, str2) => {
    //         if (str1.length !== str2.length) 
    //             return false;

    //         const sort1 = str1.split('').sort();
    //         const sort2 = str2.split('').sort();

    //         return sort1.join('') === sort2.join('');
    //     }

    //     const outString = anagrams('stgrens', 'ngtsres');
    //     console.log(outString);
    // }, []);



    // useEffect(() => {
    //     // String Permutation is Palindrome?
    //     const palindrome = (str) => {
    //         let existStr = str;
    //         return existStr === str.split('').reverse().join('');
    //     }

    //     const outString = palindrome('malayalam');
    //     console.log(outString);
    // }, []);



    useEffect(() => {
        // Balanced Brackets
        const balancedbrackets = (str) => {
            const stack = [];
            let openers = ["{", "[", "("];
            let closers = ["}", "]", ")"];
            
            const dict = {
              "{" : "}",
              "[" : "]",
              "(" : ")"
            }
          
            for(let i = 0; i < str.length; i++) {
                  let char = str[i];
                  if(openers.includes(char)) {
                      stack.push(char);
                  }
                  else if(closers.includes(char)) {
                      //is our stack empty? 
          
                      if(!stack.length) {
                          return false;
                      }
                      //does our popped element not match the corresponding element?
                      else if(dict[stack.pop()] !== char) {
                          return false;
                      }
                  }
              }
              
              return stack.length === 0;
          
          }

        const outString = balancedbrackets('{}');
        console.log(outString);
    }, []);








    return (
        <div>
            Testing Javascript
        </div>
    )
}

export default TestJs
