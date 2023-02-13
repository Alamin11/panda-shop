console.log("Connected");
// task 2: Selecting all h2 tag and making the text lightblue
const h2s = document.getElementsByTagName('h2');
// console.log(h2s);
for (const h2 of h2s) {
    h2.style.color = 'lightblue';
}
// task3:giving tomato background for backpack section
const backpack = document.getElementById('backpack');
// console.log(backpack);
backpack.style.backgroundColor = 'tomato';
// task4: giving a border radius to all the card
const cards = document.getElementsByClassName('card');
// console.log(cards);
for (const card of cards) {
    // console.log(card);
    card.style.borderRadius = '30px';
}
// task5: writting function to console something as click handler to a button
function btnHandler() {
    console.log('Button handler clicked');
}

// task6: adding a eventhandler to the buy now button to remove the card
const buyNowBtns = document.getElementsByClassName('panda-btn-buy-now');
for (const buyNowBtn of buyNowBtns) {
    buyNowBtn.addEventListener('click', function (event) {
        // console.log(event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode));
        event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
    })
}

// task7: making stay in touch button enabled according to input string
const inputField = document.getElementById('exampleInputEmail1');
inputField.addEventListener('keyup', function (event) {
    const inputValue = event.target.value;
    // console.log(inputValue);
    let submitBtn = document.getElementById('btn-submit');
    // console.log(submitBtn);
    if (inputValue.toLowerCase() === 'email') {
        // submitBtn.setAttribute('disabled', false);
        submitBtn.disabled = false;
        submitBtn.addEventListener('click', function () { inputValue = '' });
    } else {
        submitBtn.setAttribute('disabled', true);
    }
});
// task8: optional task - image change on mouseenter
const images = document.getElementsByTagName('img');
// console.log(images);
for (const image of images) {
    // console.log(image);
    let oldSrc = image.src;
    image.addEventListener('mouseenter', function (event) {
        // console.log(image.src);
        image.src = 'images/ariz.jpeg';
    });
    image.addEventListener('mouseleave', function () {
        image.src = oldSrc;
    })

}
// task9: change color on doubleclick
const stayInTouch = document.getElementById('subscribe');
stayInTouch.addEventListener('dblclick', function () {
    stayInTouch.style.backgroundColor = 'lightpink';
})