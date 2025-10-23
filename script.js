// getAttribute, setAttribute, Dynamic elements creat , Events, window global, objects
"use strict"

const show =  document.querySelector("#show");
const container = document.querySelector("#container")

show.addEventListener('click',()=> {
    container.setAttribute('class',"d-none")
})


//const { createElement } = require("react");

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
       /* if (!/^[A-Za-z]+$/.test(loginValue)) {
            login.value = "" // clear input
            login.placeholder = "Only letters allowed!";
            return;
        }
        //Check name: only numbers allowed !/^[0-9]+$/
        if(!/^[0-9]+$/.test(passwordValue)) {
            password.value = ""
            password.placeholder = "Only passwords"
            password.placeholder.style.cssText = ""
            return
        }*/
          if (!/^[A-Za-z]+$/.test(loginValue) || !/^[0-9]+$/.test(passwordValue)) {
            login.value = "" // clear input
            text.innerHTML = "Unsuccessful"
            text.setAttribute('class',"text-center text-danger")
            return;
        }else {
            password.value = "" // clear input
            text.innerHTML = "Login Successfully"
            text.setAttribute('class', "text-center text-success")
        }
            //alert("Login successfully")
      })

     /* submit.addEventListener('click', ()=> {
        if(login.value.trim().length != 0 && password.value.trim().length !=0) {
          text.innerHTML = "SUCCESSFUL";
          text.setAttribute('class',"text-center text-success")
        }else {
          text.innerHTML = "UNSUCCESSFUL"
          text.setAttribute('class','text-center text-danger')
        }
      })*/


        //static elements


        //dynamic elements create
        //dynamic elements
  let control = document.querySelector("#control")
  let extra = document.querySelector("#extra")

  let div = document.createElement("div") // making dynamic element
  div.setAttribute('class',"card bg-info p-3 text-center text-danger ")
  div.innerHTML = `<h3>SOME TEXT</h3>`

  extra.appendChild(div)

  //console.log(div)

  let input = document.createElement("input")// making dynamic element
 
  input.setAttribute('type',"text")
  input.setAttribute(`class`,"form-control mb-3")// 'mb-3' adds margin-bottom spacing
  input.setAttribute('placeholder', "Enter element name")
  input.style.cssText = "width: 900px; height: 50px;"

  input.addEventListener(`blur`,()=> {
    let inputValue = input.value.trim()
    if (inputValue.length == 0) {
      input.setAttribute('class',"form-control p-3 m-2 error")
    }else {
       input.setAttribute('class',"form-control p-3 m-2 success")
    }
  })

  let btn = document.createElement("button")// making dynamic element
  btn.setAttribute(`class`,"btn btn-primary ")// blue button, full width
  btn.style.cssText =  "width: 200px; height: 50px"
  btn.innerHTML = "Submit"
 


  control.appendChild(input)
  control.appendChild(btn)
  //control.prepend(btn) prepend is similar with appendChild but prepend make your element above

 // control.style.display = "flex";
  control.style.alignItems = "center";
  control.style.gap = "10px";
  control.style.marginTop = "50px";
  
    btn.addEventListener('click',()=> {
      let inputValue = input.value.trim()
      if (inputValue.length !== 0) {

      let div = document.createElement("div") // making dynamic element
      div.setAttribute('class',"card bg-info p-3  text-center text-danger ")
      div.innerHTML = `<h3>SOME TEXT</h3>`

  extra.appendChild(div)


      div.innerHTML =  inputValue
      input.value = ""
      }else {
         input.setAttribute('placeholder',"Please enter some text")
         input.setAttribute('class',"form-control p-3 m-2 error ")
      }
  })


 /* btn.addEventListener('click',()=> {
      let inputValue = input.value.trim()
      if (inputValue.length !== 0) {

      div.innerHTML =  inputValue
      input.value = ""
      }else {
         input.setAttribute('placeholder',"Please enter some text")
         input.setAttribute('class',"form-control p-3 m-2 error ")
      }
  })*/

 