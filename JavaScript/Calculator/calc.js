window.onload = function()
{
    console.log("App started");
    calculator.init();
};

let calculator = {
    buttons: undefined,
    input: undefined,
    init: function()
    {
        this.buttons = document.querySelectorAll(".numbers button, .operators button");
        //console.log(this.buttons); //Pokazujemy swoje przyciski przez query
        this.input = document.getElementById("input");

        for(let i = 0; i < this.buttons.length; i++)
        {
            let el = this.buttons[i]; // robimy sobie dostęp do każdego przycisku
            el.addEventListener("click", this.buttonClick);
        }
    },
    buttonClick: function(e){ //e to jest event przesyłany przez przeglądarkę do nas
        let divHtmlText = e.target.innerHTML;
        console.log("klik " + divHtmlText);
        
        switch(divHtmlText)
        {
            case "=":
                calculator.evaluate();
                break;
            case "C":
                calculator.clear();
                break;
        }
        if(divHtmlText!="=" && divHtmlText!="C")
        {
        calculator.AddToInput(divHtmlText); //Nie this a calculator! Button click należy już do obiektu kalkulator, więc błedem jest używanie this.
        }
    },

    AddToInput: function(str)
    {
        this.input.value += str;
    },

    evaluate: function(){
       let result = math.evaluate(calculator.input.value);
       calculator.setInput(result);
    },
    clear: function()
    {
        calculator.setInput("");
    },

    setInput: function(str)
    {
        calculator.input.value = str;
    }
}