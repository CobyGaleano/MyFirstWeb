let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');  
            
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header navBar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky',window.scrollY > 100);

}

function redirection(tipe)
{
    switch(tipe){
        case "GranCerdo":
            
            window.open("https://github.com/CobyGaleano/GranCerdo","_blank");
            break;
        
        case "Portfolio":
            window.open("https://cobygaleano.github.io/MyFirstWeb/","_blank");
            break;

        case "GestionArticulos":
            window.open("https://github.com/CobyGaleano/Prog3-TP2","_blank");
            break;

        case "BomberMan":
            window.open("https://github.com/CobyGaleano/Okay-Listo-Boom","_blank");
            break;
    }
}