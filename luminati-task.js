//1) Task #1
// Implement function verify(text) which verifies whether parentheses within text are
// correctly nested. You need to consider three kinds: (), [], <> and only these kinds.
//
//     Examples:
//
// verify("---(++++)----") -> 1
// verify("") -> 1
// verify("before ( middle []) after ") -> 1
// verify(") (") -> 0
// verify("<(   >)") -> 0
// verify("(  [  <>  ()  ]  <>  )") -> 1
// verify("   (      [)") -> 0



// Solution Task 1


const verify = (str) => {
    let arrStr = str.split('')
    let resultBrackets = []
    for(let i = 0; i < arrStr.length; i++){
        if(arrStr[i] === '(' || arrStr[i] === '[' || arrStr[i] === '<') resultBrackets.push(arrStr[i])
        else if(arrStr[i] === ')' && resultBrackets.pop() !== '(') return false
        else if(arrStr[i] === ']' && resultBrackets.pop() !== '[') return false
        else if(arrStr[i] === '>' && resultBrackets.pop() !== '<') return false
    }
    return true
}

// 2) Task #2
// Problem
// Simplify the implementation below as much as you can.
//     Even better if you can also improve performance as part of the simplification!
//     FYI: This code is over 35 lines and over 300 tokens, but it can be written in
// 5 lines and in less than 60 tokens.
//     Function on the next page.
//
//
//
//     function func(s, a, b)
// {
//     var match_empty=/^$/ ;
//     if (s.match(match_empty))
//     {
//         return -1;
//     }
//     else
//     {
//         var i=s.length-1;
//         var aIndex=-1;
//         var bIndex=-1;
//
//         while ((aIndex==-1) && (bIndex==-1) && (i>=0))
//         {
//             if (s.substring(i, i+1) == a)
//                 aIndex=i;
//             if (s.substring(i, i+1) == b)
//                 bIndex=i;
//
//             i--;
//         }
//
//         if (aIndex != -1)
//         {
//             if (bIndex == -1)
//                 return aIndex;
//             else
//                 return Math.max(aIndex, bIndex);
//         }
//         else
//         {
//             if (bIndex != -1)
//                 return bIndex;
//             else
//                 return -1;
//         }
//     }
// };
