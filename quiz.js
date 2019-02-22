
function validation() {
    /* 
        get the form input and set config value
    */ 

    let input = document.getElementById("textarea").value;
    var separator = document.forms["separator-form"]["separator"].value;
    
    if ( separator === "") {
       separator = document.forms["separator-form"]["custom-separator"].value;
    };

    separate(input, separator);
}

function separate(text, separator) {
    /*
        args:
            text: the user's input strgin 
            separator: separator
    */

    let lines = [];
    let words = [];
    let eng_words = [];

    lines = text.split("\n");
    
    for (let i=0; i<lines.length; i++) {
        let temp = lines[i].split('\t');

        temp.forEach( word => {
            words.push(word + '\t')
        });
    };

    for (let i=0; i<words.length; i+=2) {
        eng_words.push( words[i]);
    };

    show_result(eng_words);
}

function show_result(eng_words) {

    document.getElementById("textarea").value = eng_words;
    document.getElementsByTagName("button")[0].setAttribute();
}