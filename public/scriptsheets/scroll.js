let sembtns = document.querySelectorAll(".semester")
for (const sembtn of sembtns) {
    sembtn.addEventListener("click", () => {
        let btnid = sembtn.id
        scrollToTarget(btnid)
    })

}

function scrollToTarget(btnid) {

    const element = document.getElementById(`sem${btnid}`);
    element.scrollIntoView({
        behavior: "smooth",
        block: "start",    // center item inside scroll box
        inline: "center"

    }); // or { behavior: "auto" }
}