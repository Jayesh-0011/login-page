const check = () => {
    let grdboxes = document.querySelectorAll(".grade1")
    for (let grdbox of grdboxes) {
        grdbox.addEventListener("input", () => {
            let grad = Number(grdbox.value)
            if (grad > 10 || grad <0) {
                alert("Grades should be between 0 and 10")
                grdbox.value =""
            }
        })

    }
}
check()
