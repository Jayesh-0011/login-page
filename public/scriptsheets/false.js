const addform = () => {
    let divi = document.createElement("div")
    // let subdiv1=document.createElement("div")
    // let subdiv2=document.createElement("div")
    // let subdiv3=document.createElement("div")

    divi.setAttribute("class", "form")
    // subdiv1.setAttribute("class", `subject`)
    // subdiv2.setAttribute("class", `credit`)
    // subdiv3.setAttribute("class", `grade`)

    let form = document.querySelector(".plus-button")
    form.before(divi)
    divi.innerHTML = `
    <div class="subject"><input type="text" name="subject${count}" placeholder="Enter the subject"></div>
            <div class="credit">
                credit:
                <input type="number" name="credits${count}" >
            </div>
            <div class="grade">
                grade:
                <input type="number" name="grades${count}"></div>`
}
let count = 2
let btn = document.querySelector(".plus-button")
btn.addEventListener("click", (e) => {
    e.preventDefault();
    addform()
    count++
})
let cal = document.querySelector(".cal")
cal.addEventListener("click", () => {
    let netcred = 0
    let netgrad = 0
    for (let i = 1; i < count ; i++) {
        let c = document.getElementsByName(`credits${i}`)[0].value
        let g = document.getElementsByName(`grades${i}`)[0].value
        c=Number(c)
        g=Number(g)
        netcred += c
        netgrad += g*c
    }
    cg=netgrad/netcred
    console.log(cg)
})