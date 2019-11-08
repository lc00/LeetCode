// Time complexity : O(N)to swap N/2 element.
// Space complexity : O(1), it's a constant space solution.

// note that it's actually reverse array since the input and output are arrays
const reverseString = function(s) {
    if(s.length < 2) return s
    let index = Math.ceil(s.length/2)
    
    let right = s.slice(index, s.length+ 1)
    let left = s.slice(0, index)

    return reverseString(right).concat(reverseString(left))
    
};

console.log(reverseString(["h","e","l","l","o"]))


/* two-pointer approach

  var reverseString = function(s) {
    /set pointers at start, end initially
    let i = 0;
    let j = s.length-1
    
    while(i < j){
        /modify array in place without use of a temp variable
        [s[i], s[j]] = [s[j], s[i]]
        
        i++
        j--
    }

};
*/