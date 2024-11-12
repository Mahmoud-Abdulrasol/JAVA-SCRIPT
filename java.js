
function random() {
    var list = [
        {
            talk: '― Oscar Wilde',
            text: '“Be yourself; everyone else is already taken.”'
        },
        {
            talk: '― Marilyn Monroe',
            text: '“Im selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle.But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.'
        },
        {
            talk: '― Frank Zappa',
            text: '“So many books, so little time.”'
        },
        {
            talk: '― Albert Einstein',
            text: '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”'
        },
        {
            talk: '― Mahatma Gandhi',
            text: '“Be the change that you wish to see in the world.”'
        },

    ]
    var num = Math.floor(Math.random() * list.length );
    for (var i = 0; i < list.length; i++) {
        document.getElementById("output-talk").innerHTML = list[num].talk
        document.getElementById("output").innerHTML = list[num].text
    }



}

// function arr() {
//     var Name = ['― Mahatma Gandhi', '― Albert Einstein', '― Frank Zappa']
//     var text = ['“Be the change that you wish to see in the world.”', '“So many books, so little time.”', '“Be yourself; everyone else is already taken.”']
//     var num = Math.floor(Math.random() * Name.length)

//     document.getElementById("output-talk").innerHTML = text[num]
//     document.getElementById("output").innerHTML = Name[num]
//}
