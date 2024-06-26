function changeText(id, changeString) {
    document.getElementById(id).innerHTML = changeString;
}

const button2 = document.querySelector('.btn-2');
function alertButton() {
    alert('You hate javascript too!');
}
// button2.addEventListener("click", () => {
//     alert('you hate javascript');
// });
button2.addEventListener("click", alertButton);
