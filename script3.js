// How to get/set Contents via DOM Using Javascript.

// - innerText --> work only Elements
// - innerHTML
// - testContent --> work Elements,Nodes

const alertMsg = document.querySelector(".alert .alert-msg");
console.log(alertMsg.innerText);
console.log(alertMsg.innerHTML);
console.log(alertMsg.textContent);

//Set Content

// alertMsg.innerHTML = "<strong>✔️ Successully Updated!! </strong>  Thankyou";

alertMsg.innerHTML = "<strong>✔️ Successully Updated!! </strong>  Thankyou";

// alertMsg.textContent="<strong>✔️ Successully Updated!! </strong>  Thankyou";
