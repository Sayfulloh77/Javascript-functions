// getAttribute, setAttribute, Dynamic elements creat , Events, window global, objects
"use strict"
/*const text = document.getElementById("text")
const login = document.getElementById("login")
const password = document.getElementById("password")
const span = document.getElementById("eye")*/

const text = document.querySelector("#text"),
      login = document.querySelector("#login"),
      password = document.querySelector("#password"),
      eye = document.querySelector("#eye"),
      submit = document.querySelector("#submit");

      console.log(text.getAttribute('class'))// attribute is calls and id
      console.log(text.getAttribute('id'))// getAttribute shu ozgaruchini id yoki classini olib beradi
      console.log(login.getAttribute('id'))

      // login.setAttribute('type','password')

      login.addEventListener('blur', ()=> {
         if(login.value.trim().length !== 0) {
            login.setAttribute('class','form-control p-3 m-2 success')
         } else {
              login.setAttribute('class','form-control p-3 m-2 error')
         }
      })
      password.addEventListener('blur', ()=> {
        if(password.value.trim().length !== 0) {
            password.setAttribute('class','form-control p-3 m-2 success')
        }else {
            password.setAttribute('class','form-control p-3 m-2 error')
        }
      })

      eye.addEventListener('click', ()=> {
          if (password.getAttribute('type')==='password') {
            password.setAttribute('type','text')
            eye.setAttribute('class',"bg-success px-4 d-flex justify-content-center align-items-center text-light rounded-4")
            eye.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`
          }else {
            password.setAttribute('type','password')
            eye.setAttribute('class',"bg-primary px-4 d-flex justify-content-center align-items-center text-light rounded-4")
            eye.innerHTML = ` <i class="bi bi-eye-fill"></i>`
          }
      })

      submit.addEventListener('click', ()=> {
        let loginValue = login.value.trim()
        let passwordValue = password.value.trim()
         
        // Check name: only letters allowed (A-Z or a-z)
        if (!/^[A-Za-z]+$/.test(loginValue)) {
            login.value = "" // clear input
            login.placeholder = "Only letters allowed!";
            return;
        }
        //Check name: only numbers allowed !/^[0-9]+$/
        if(!/^[0-9]+$/.test(passwordValue)) {
            password.value = ""
            password.placeholder = "Only passwords"
            return
        }
        alert("Login successfully")
      })