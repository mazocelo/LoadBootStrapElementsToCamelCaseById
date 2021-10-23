function getCamelCase(text) {

    let div = document.createElement('div');
    div.innerHTML = `<div data-${text}="id" ></div>`
    return Object.keys(div.firstChild.dataset)[0];
};

function loadElements() {
    //elthis.el = {};
    document.querySelectorAll('[id]').forEach(element => {
        //this.el[Format.getCamelCase(element.id)] = element;
        el[Format.getCamelCase(element.id)] = element;

    })
};

var readline = require('readline');
var resp = "";

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Como fica em Came Case a expressão:\n", function(answer) {
    resp = getCamelCase(answer)
    console.log(resp)
    leitor.close();
});