var consoles = {};
console.log = function () {
    var args = [];
    sheedit();
    $('#editorOutput').append( "<span class='codx'>oPT &gt; </span>");
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    $('#editorOutput').append( args + "<br />");
};
var editorSource = $('#editorJS');
function compileJS(input) {
    var source = input.text();
    //source = source.replace(/(for)/g, `<span class="conditional">for</span>`);
    try {
        eval(source);  
        document.getElementById("editorOutput").style.color = "green"

             
    } catch (error) {
        document.getElementById("editorOutput").style.color = "red"
        var bla =  error.toString();
        var gla = error.stack.toString()
        if(bla.includes("ReferenceError:")){
            var asd = bla.substring(
                bla.indexOf(":") + 1, 
                bla.lastIndexOf("is not defined")
                );
                line = gla.split(',').pop().split(')')[0]
                console.log(`Samasya Aailagyo:<span class="cody"> Line${line} ma <span class="strerr">"${asd}"</span> banakai xainau yrr. Variable banauna => (manau ${asd} = 25 ;e) lekhna parxa </span> `);
        }else if(bla.includes("TypeError:")){
            var asd = bla.substring(
                  bla.indexOf(":") + 1, 
                  bla.lastIndexOf("is not")
            );
            line = gla.split(',').pop().split(')')[0]
            line = line.split(':')[1]-1

            console.log(`TYPE-ERROR Aailagyo:<span class="cody"> Line ${line} ma <span class="strerr">"${asd}"</span> Function Define garya Xainau Yrr. Function banauna => (karya ${asd}(){<span class="com">//Codeyesbhitra</span>}) lekhna parxa </span> `);
         }else if(bla.includes("SyntaxError:")){
            console.log(`Syntax ma Error Bho Brooo: <span class="cody"> Brole ka nira <span class="strerr"> ;e </span> ya <span class="strerr"> ;q </span> ya <span class="strerr"> ;> </span> xutayo tait </span> `);
        }
        // console.log(gla)

        }
    
}
$(document).keydown(function (e) {
    var key = e.keyCode || e.which;
    //console.log(key, EventTarget.ctrlKey);
    if (key)
        if (key === 13 && e.ctrlKey){
            $('#editorOutput').html("")
            compileJS(editorSource);
        }

});
$('#compile').click(function () { return(
    $('#editorOutput').html(""),
    compileJS(editorSource)
)
});

