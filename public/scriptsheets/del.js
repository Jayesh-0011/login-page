const delform=(del)=> {
    let divi=del.parentElement
    console.log(divi)
}
let dels=document.querySelectorAll(".minus-button")
for (let del of dels) {
    del.addEventListener("click", () => {
        delform(del)
    })
}
const cont=document.querySelector(".sem")
cont.addEventListener("click", (e)=> {
    if(e.target.classList.contains("minus-button")){
        const form= e.target.closest(".form")
        if (form)
        {
            form.remove();
            check()
            calcg()
            calsg()
        }
    }
})
