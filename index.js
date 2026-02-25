// FOR HEADER BACKGROUND 
 const header = document.getElementById("header");

            window.addEventListener("scroll", () => {
                if (window.scrollY > 50) {
                    header.classList.add("bg-black", "shadow-lg");
                } else {
                    header.classList.remove("bg-black", "shadow-lg");
                }
            });




//FOR CLOSE BTNS AND PASSWORD
const btns = document.getElementById("loginbtns");
const modulas = document.querySelector(".modula");
const close = document.getElementById("closebtns");

btns.addEventListener("click", () => {
    modulas.classList.toggle("hidden");
});

close.addEventListener("click", () => {
modulas.classList.toggle("hidden");
});

function checkPassword() {

  let password = document.getElementById("password").value;

  let main = "Johnpaul1";

  if (main === password) {

    window.location.href = "./userpage.html";

  } 
  
  else {

    document.getElementById("result").textContent = "Not approved";
    document.getElementById("result").style.color = "red";


  }

}

