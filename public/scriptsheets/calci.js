let calcu = document.querySelector(".cal")
const calcg = () => {
    let netcred = 0
    let netgrad = 0

    let cs = document.querySelectorAll(".credit1")
    let gs = document.querySelectorAll(".grade1")
    let len = cs.length
    for (let i = 0; i < len; i++) {
        let c = Number(cs[i].value)
        let g = Number(gs[i].value)
        netcred += c
        netgrad += g * c
    }

    let cg = netgrad / netcred
    cg = cg.toFixed(2)
    let cgpa = document.querySelector("#cg")
    if (isNaN(cg)) {
       cgpa.innerHTML = `CGPA:` 
    }
    else {
    cgpa.innerHTML = `CGPA: ${cg}`
    console.log(len)
    }
}

let calsg = () => {
    let calsems = document.querySelectorAll(".se")
    for (const calsem of calsems) {
        let netcred = 0
        let netgrad = 0
        let cs = calsem.querySelectorAll(".credit1")
        let gs = calsem.querySelectorAll(".grade1")
        let len = cs.length
        for (let i = 0; i < len; i++) {
            let c = Number(cs[i].value)
            let g = Number(gs[i].value)
            netcred += c
            netgrad += g * c
        }

        let sg = netgrad / netcred
        sg = sg.toFixed(2)
        let sgpa = calsem.querySelector(".sg")
        if (isNaN(sg)) {
            sgpa.innerHTML = `SGPA:`;
        }
        else {
        sgpa.innerHTML = `SGPA: ${sg}`
        }
    }
}
calcu.addEventListener("click", () => {
    check()
    calcg()
    calsg()
})
