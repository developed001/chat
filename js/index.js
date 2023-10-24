const chat = document.querySelector('.chat')
const form = document.querySelector('.form')
const formInput1 = form.querySelector('.form__input-1')
const formBtn1 = form.querySelector('.form__btn-1')
const formInput2 = form.querySelector('.form__input-2')
const formBtn2 = form.querySelector('.form__btn-2')


form.addEventListener('click', e => {
  e.preventDefault()
  
  if(formInput1.value !=""){
    chat.innerHTML = chat.innerHTML + `<h3> <b> ${formInput1.value} </b> </h3>`
  }else if(formInput2.value !=""){
    chat.innerHTML = chat.innerHTML + `<h3 align="right"> <b> ${formInput2.value} </b> </h3>`
  } else {

  }

  formInput1.value = null
  formInput2.value = null
})