//Função para alterar o tema - Dark mode - Light mode;
let checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", function(){
    if(this.checked){
        document.documentElement.setAttribute("data-theme", "dark");
    }else{
        document.documentElement.setAttribute("data-theme", "light");
    }
});