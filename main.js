const navExpand = document.getElementById("nav-expand"),
navExpandList = document.getElementById("nav-expand-list"),
navExpandIcon = document.getElementById("nav-expand-icon")

navExpand.addEventListener("click" , ()=>{
    navExpandList.classList.toggle("show-list");
    navExpandIcon.classList.toggle("rotate-icon");
})


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
