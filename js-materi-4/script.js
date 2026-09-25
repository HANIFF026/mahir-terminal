console.log("===================")
console.log(" JS DOM INTRO")
console.log("===================")
console.log(document);
console.log(document.title);
console.log(document.body)
// console.log(document.body.innerHTML)
// console.log(document.body.innerText)

const pageTitle = document.getElementById("title");
const pageTitleText = pageTitle.innerText;
console.log(pageTitle)
console.log(pageTitleText)
const kylianmbappe = document.querySelector(".kylian");
console.log(kylianmbappe);
const kylianmbappeimgurl = kylianmbappe.src;
console.log(kylianmbappeimgurl);
kylianmbappe.style.border = "4px solid red";
const allparagraph = document.querySelectorAll("p");
console.log(allparagraph);
allparagraph[0].style.borderColor = "blue";
allparagraph[1].style.borderColor = "green";
const clickMebtn = document.getElementById("clickme");
clickMebtn.addEventListener('click',function() {
    alert("hello world");
    kylianmbappe.style.border = "4px solid blue";
    kylianmbappe.style.marginLeft = "100px"
})

