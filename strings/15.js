	
//Check occurrence of a character using a Regex/
function countString(str, letter)
{
    const re = new RegExp(letter, 'g');
    const count = str.match(re).length;
    return count;
}

const result = countString("Saravana", 'a');
console.log(result);


/*const re = new RegExp(letter, 'g'); creates a regular expression.
g- represents that the operation is carried out for all in instances of the string.
The match() method returns an array containing all the matches. Here, str.match(re);gives ["o", "o"].
The length property gives the length of an array element.*/
