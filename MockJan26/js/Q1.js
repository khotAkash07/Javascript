function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")?"your string is a palindrome string..":"your string is not a palindrome string..");


