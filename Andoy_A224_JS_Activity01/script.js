const btnCount = document.getElementById('btnCount');
const txtCounter = document.getElementById('txtCounter');

let count = 0;

// lambda function
btnCount.addEventListener("click", () => {
    count++;
    txtCounter.textContent = count;
    console.log(count)
    console.log("Clicked");
});