
function separate() {

    let lines = [];
    let words = [];
    let engWords = [];
    let text = document.getElementById("textarea").value;

    lines = text.split("\n");
    
    for (let i=0; i<lines.length; i++) {
        let temp = lines[i].split('\t');

        temp.forEach( word => {
            words.push(word + '\t')
        });
    };

    for (let i=0; i<words.length; i+=2) {
        engWords.push( words[i] );
    };

    show_result(engWords);
}

function show_result(engWords) {

    document.getElementById("textarea").value = engWords;
    copy();
}

function copy() {
    //  Select the text field
    document.getElementById("textarea").select();

    // Copy the text inside the text field
    document.execCommand("copy");

    // Hide "submit" button and show "copy" button
    document.getElementById("submit").style.display = "none";
    document.getElementById("copy").style.display = "block";
    document.getElementById("copy-again").style.display = "block";

    // beta
    // swal
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });
      
      Toast.fire({
        type: 'success',
        title: 'Copied',
        text: 'you can now go to vocabulary.com'
      })
}