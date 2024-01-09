const  sections = document.querySelectorAll('.section')
const  sectBtns = document.querySelectorAll('.controlls')
const  sectBtn = document.querySelectorAll('.control')
const  allSections = document.querySelector('.main-content')


function pageTransitions() {
  //button click active class
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function (){
      let currentBtn = document.querySelectorAll('.active-btn')
      currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '')
      this.className += 'active-btn'
    }
  )}
  //sections active class
  allSections.addEventListener('click', (e) =>{
    const id = e.target.dataset.id
    if(id){
      //remove selected from the other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      e.target.classList.add('active')
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })
      const element = document.getElementById(id)
      element.classList.add('active')
    }
  })
  //toggle theme and button
  const themeBtn = document.querySelector('.theme-btn')
  themeBtn.addEventListener('click', () =>{
    let element = document.body
    element.classList.toggle('light-mode')
    let themeIcon1 = document.querySelector('.theme-icon1')
    let themeIcon = document.querySelector('.theme-icon')
    themeIcon1.classList.toggle('active-button')
    themeIcon.classList.toggle('active-button')
  })
}

pageTransitions()