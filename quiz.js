
function separate() {

    // creat some empty list
    let lines = [];
    let words = [];
    let engWords = [];

    // get input text
    let text = document.getElementById("textarea").value;

    // start separate
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
    

    // print result in textarea
    document.getElementById("textarea").value = engWords;
    
    // start copying
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