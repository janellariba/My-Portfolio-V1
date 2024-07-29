
let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        }
    })
}



// Nav Bar
function sidebarMenu(){
    let sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
}

function hidebar(){
    let sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'

}


//Btn Resume
document.getElementById('btn_knowMe').addEventListener('click', function() {
    
    const pdfUrl = 'resumeFolder/LARIBA_RESUME.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    
  
    link.download = 'resumeFolder/LARIBA_RESUME.pdf';
    
   
    document.body.appendChild(link);
    
    link.click();
    
   
    document.body.removeChild(link);
});
