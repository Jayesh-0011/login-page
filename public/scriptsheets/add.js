const addform = (btn) => {
  
    const divi = document.createElement("div");
    divi.className = "form";

    divi.innerHTML = `
        <div class="subject">
            <input type="text" name="subject1" placeholder="Enter the subject">
        </div>
        <div class="credit">
            credit:
            <input type="number" class="credit1">
        </div>
        <div class="grade">
            grade:
            <input type="number" class="grade1">
        </div>
        <button type="button" class="minus-button">-</button>
    `;

    btn.before(divi);
};

let btns = document.querySelectorAll(".plus-button");
for (let btn of btns) {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        addform(btn);
        check()
        calcg()
        calsg()   
    });
}
