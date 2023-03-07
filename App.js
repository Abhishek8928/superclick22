console.log("App.js is connected");

// let slideImg = document.getElementsByClassName('reSize-img');
// console.log(slideImg);
// // for loading the image
// setInterval(() => {
//     let slideImg = document.getElementsByClassName('reSize-img');
//     slideImg[1].src='./super.assest/asset 13.jpeg'
// }, 2000)
// setInterval(() => {
//     let slideImg = document.getElementsByClassName('reSize-img');
//     slideImg[1].src='./super.assest/asset 14.jpeg'
// }, 4000)
// setInterval(() => {
//     let slideImg = document.getElementsByClassName('reSize-img');
//     slideImg[1].src='./super.assest/asset 15.jpeg'
// }, 6000)
// setInterval(() => {
//     let slideImg = document.getElementsByClassName('reSize-img');
//     slideImg[1].src='./super.assest/asset 12.jpeg'
// }, 8000)
// setInterval(() => {
//     let slideImg = document.getElementsByClassName('reSize-img');
//     slideImg[1].src='./super.assest/AIR.jpg'
// }, 10000)


setTimeout(gifHandler = () => {
    let loader = document.getElementsByClassName('loading')[0];
    let allContent = document.getElementById('hide-all');
    loader.classList.add('d-none');
    allContent.classList.remove('d-none');

}, 3000)



userNameHandler = () => {
    var userNameValue = document.getElementById('input-field');
    userNameValue.classList.remove('is-invalid');
    userNameValue.classList.remove('is-valid');
    if (userNameValue.value.length > 6)
    {
        userNameValue.classList.add('is-valid');
    }
    else {
        userNameValue.classList.add('is-invalid');
    }
}
let userArray=[]
enrollHandler = () => {
    let displayMsg = document.getElementById('display-tag');
    let userNameValue = document.getElementById('input-field');
    let userEmailValue = document.getElementById('input-field2');

    let user = {
        username: userNameValue,
        useremail: userEmailValue
    }
    userArray.push(user);
    userNameValue.value = '';
    userEmailValue.value = '';
    userNameValue.classList.remove('is-valid');

    displayMsg.classList.remove('d-none');
    setInterval(() => {
        displayMsg.classList.add('d-none')
    },6000)
}