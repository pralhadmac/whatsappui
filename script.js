async function sendMessage(){

const phone = document.getElementById("phone").value;
const message = document.getElementById("message").value;

const response = await fetch("https://your-backend-url/send-message",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
phone:phone,
message:message
})
});

const data = await response.text();

document.getElementById("status").innerText=data;

}
