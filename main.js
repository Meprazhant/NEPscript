
function aboutUser(){
    var userr = document.getElementById("userrr")
    var newsrr = document.getElementById("newsrrr")
    newsrr.classList.add('animate__fadeInRight');
    newsrr.classList.remove('animate__fadeOutRight');
    userr.style.display = "flex"
    newsrr.style.display = "block"
    newsrr.style.right = "0"
    newsrr.style.opacity = "1"
}
function hideUser(){
    var newsrr = document.getElementById("newsrrr")
    var userr = document.getElementById("userrr")
    newsrr.classList.remove('animate__fadeInRight');
    newsrr.classList.add('animate__fadeOutRight');
    // userr.style.display = "none"
    setTimeout(function(){
        newsrr.style.display = "none"
    userr.style.display = "none"

    }, 200);
    newsrr.style.right = "1000px"
    newsrr.style.opacity = "000"


}


var codeEditor = document.getElementById('codeEditor');
var lineCounter = document.getElementById('lineCounter');

codeEditor.addEventListener('scroll', () => {
    lineCounter.scrollTop = codeEditor.scrollTop;
    lineCounter.scrollLeft = codeEditor.scrollLeft;
});

codeEditor.addEventListener('keydown', (e) => {
    let { keyCode } = e;
    let { value, selectionStart, selectionEnd } = codeEditor;
if (keyCode === 9) {  // TAB = 9
      e.preventDefault();
      codeEditor.value = value.slice(0, selectionStart) + '\t' + value.slice(selectionEnd);
      codeEditor.setSelectionRange(selectionStart+2, selectionStart+2)
    }
});

var lineCountCache = 0;
function line_counter() {
      var lineCount = codeEditor.value.split('\n').length;
      var outarr = new Array();
      if (lineCountCache != lineCount) {
         for (var x = 0; x < lineCount; x++) {
            outarr[x] = (x + 1) + '.';
         }
         lineCounter.value = outarr.join('\n');
      }
      lineCountCache = lineCount;
}
codeEditor.addEventListener('input', () => {
    line_counter();
});

line_counter();


var editor = document.querySelector(".tarea"),
    visualizer = document.querySelector(".editorr code");


const closeChars = new Map([
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
      ]);
    
    

$("#codeEditor").keyup(function(e) {	
    switch(e.key)
    {
    case "{": //open curly bracket
            this.value += '}';
            this.setSelectionRange(this.selectionStart-1, this.selectionStart-1);
        break;
    case "[": //less than
        this.value = this.value + ']';
        this.setSelectionRange(this.selectionStart-1, this.selectionStart-1);
        break;
    
    case "(": //less than
        this.value = this.value + ')';
        this.setSelectionRange(this.selectionStart-1, this.selectionStart-1);
         break;
}	
update()

var objDiv = document.getElementById("jsval");
objDiv.scrollTop = objDiv.scrollHeight;
})

function update(){
    changeString();
    // visualizer.innerHTML = changeString();
    $("#editorJS").html(`//Javascript Code
<br>`);
    $("#editorJS").append(changeString());
    Prism.highlightAll();



}
update();


$(function() {
    var availableTags = [
      "bhana",
      "bhana<",
      ";>",
      " ;e",
      "suchana",
      "yedi",
      "yata",
      " xa bhane",
      ";q",
      "natra",
      "thik",
      "galat",
      "manau",
      "jaba samma",
      "hudaina",
      "ra",
      "lekha",
      "karya",
      "parinam:"
     
    ];
})
   
  

  


function changeString(){

    

    var getval = document.getElementById("codeEditor").value;

    getval = getval.replace(/bhana /g, "console.log('")
    getval = getval.replace(/bhana< /g, "console.log(");
    getval = getval.replace(/;>/g, ")");
    getval = getval.replace(/ ;e/g, "')");
    getval = getval.replace(/suchana /g, "alert('");
    getval = getval.replace(/yedi /g, "if(");
    getval = getval.replace(/yata /g, "}else if(");
    getval = getval.replace(/ xa bhane/g, "){");
    getval = getval.replace(/;q/g, "}");
    getval = getval.replace(/natra/g, "}else{");
    getval = getval.replace(/thik/g, "true");
    getval = getval.replace(/galat/g, "false");
    getval = getval.replace(/manau/g, "let");
    getval = getval.replace(/jaba samma /g, "for(");
    getval = getval.replace(/ hudaina/g, "){");
    getval = getval.replace(/ ra /g, " + ");
    getval = getval.replace(/ lekha /g, "prompt('");


    getval = getval.replace(/karya /g, "function ");
    getval = getval.replace(/parinam: /g, "return ");




    // console.log(getval);

    return getval;

}

function talaUser(){
    $('html,body').scrollTop(0);
aboutUser()
}



function clezar(){
    document.getElementById("editorOutput").innerText = ""
    // hsedit()

}

function jssh(){
    $("#jsval").toggle();
}

var num = 1

function sheedit(){
        $("#editorOutput").css("display", "block");
}
function hsedit(){
    $("#editorOutput").css("display", "none");
}

