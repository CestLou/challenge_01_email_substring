var findEmailSubstring = function(input){
    // All commented out code was my journey to the solution. I'm leaving this to reference later.
    // var input = JSON.stringify(input)
    // function splitString(stringToSplit, separator) {
    //   var arrayOfStrings = stringToSplit.split(separator);

    //   console.log('The original string is: "' + stringToSplit + '"');
    //   console.log('The separator is: "' + separator + '"');
    //   console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
    // }
   //  var space = ' ';
  	// };

  	// function isTheWord(element) {
  	//   return element = 'hello';
  	//   console.log(element)
  	// }


  	// var output = input.split(' ').filter(isTheWord)

    // i = case-insensitive matches. For example, /aB/i means matching to 'ab', 'aB', 'Ab' and 'AB'.
    // g =  global matches. For example, /ab/g means matching all occurrences of the 'ab' text while /ab/ means matching the first occurrence of the 'ab' text

    var input = input.split('\n');
    var search = input.shift().trim();

    var count = 0
    var winner = "";

    input.forEach(function(line) {
      for (var i = 0; i < input.length; i++) {
        var m = line.match(new RegExp(search, "ig"));
        var a = m ? m.length : 0;
        if (a > count) {
          count = m.length;
          winner = line;
        }
      }
    });




    return winner;
};


module.exports=findEmailSubstring;