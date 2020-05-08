// move to top
const topBtnDiv = document.getElementById("topBtnDiv");
topBtnDiv.style.display = "none";
window.addEventListener("scroll", function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset > 400) {
        topBtnDiv.style.display = "flex";
    }
    else {
        topBtnDiv.style.display = "none";
    }
})

// counter
// const counters = document.querySelectorAll(".auto-number");
// const speed = 800;

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute("data-target"); // + converts the string to number
//         // console.log(target);
//         const count = +counter.innerText;
//         const increment = target / speed;
//         if (count < target) {
//             counter.innerText = Math.trunc(count + increment);
//             setTimeout(updateCount, 1);
//         }
//         else {
//             count.innerText = target;
//         }
//     }

//     updateCount();
// });