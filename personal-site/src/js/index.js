const navLink=()=>{
	const burger=document.querySelector('.burger');
	const nav=document.querySelector('.navi-bar');

	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
	});
}


navLink();