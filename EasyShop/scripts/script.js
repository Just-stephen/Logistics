const mainContainer = document.querySelector('.main-container')
const wrapper = document.querySelector('.wrapper')
const regBtn = document.querySelector('.regBtn')
const logBtn = document.querySelector('.logBtn')
const login = document.querySelector('.Log')
const registration = document.querySelector('.reg')
const signUp= document.querySelector('.signUp')

regBtn.addEventListener('click',()=>{
mainContainer.removeChild(wrapper)

signUp.classList.add('active')
mainContainer.append(signUp)  
})


logBtn.addEventListener('click',()=>{

mainContainer.removeChild(signUp)

mainContainer.append(wrapper)  
})
 
