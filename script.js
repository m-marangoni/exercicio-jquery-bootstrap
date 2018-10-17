

$("#btn-submit").click(function(e) {
    e.preventDefault();
    console.log($("#xuxu").val("xis"));
    insereTweet();

});

function insereTweet(){    
    let divInserir = document.querySelector("tuites");
    divInserir.innerHTML = `
    <p id="pezinho">${$("#xuxu").val("xis")}</p>
    `
}

//btnSubmit.addEventListener("click", function (e) {
//    e.preventDefault()
//});
