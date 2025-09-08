const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

function active(pageId){
    pages.forEach(page =>{
        if (!pageId){
            pageId = 'home';
        }
        if (pageId === page.id){
            page.style.display = 'block';
        }
        else page.style.display = 'none';
    })
}

navLinks.forEach(link=>{
    link.addEventListener('click',function(e){
        e.preventDefault();
        const path = this.getAttribute('href');
        const pathName = path.substring(1);
        if (!history.state || history.state.id !== pathName) {
            history.pushState({ id: pathName }, '', path);
        }
        active(pathName);
    })
})

function loadPath(){
    const path = window.location.pathname;
    const pathName = path.substring(1);
    if (!history.state || history.state.id !== pathName) {
        history.replaceState({ id: pathName }, '', path);
    }
    active(pathName);
}

window.addEventListener('popstate',loadPath);

document.addEventListener('DOMContentLoaded',loadPath);