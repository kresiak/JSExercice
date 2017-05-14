var text = 'the panel change event fired right before the panel toggle happens'
var numberOfChar = 20
var lengthText = text.length
var space = text.substring(20)

if (lengthText > numberOfChar + 3) {
    var addNumberOfChar = space.indexOf(' ')
    var firstSpace = numberOfChar + addNumberOfChar
    var wholeWords = text.substring(0, firstSpace)+'...'
        console.log(wholeWords)

}
        

