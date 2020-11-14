// Store the theme
let lightTheme = localStorage.getItem('lightTheme');
const themeToggle = document.querySelector('#themeButton');


const enableLight = () => {
    document.body.classList.add('lighttheme');
    localStorage.setItem('lightTheme', 'enabled');
    themeToggle.innerHTML = `<i id="bicon" data-feather="sun"></i>`;
    feather.replace();
};


const disableLight = () => {
    document.body.classList.remove('lighttheme');
    localStorage.setItem('lightTheme', null);
    themeToggle.innerHTML = `<i id="bicon" data-feather="moon"></i>`;
    feather.replace();
};

if (lightTheme === 'enabled') {
    enableLight();
} else {
    disableLight();
}

themeToggle.addEventListener('click', () => {
    lightTheme = localStorage.getItem('lightTheme');
    if (lightTheme !== 'enabled') {
        enableLight();
    } else {
        disableLight();
    }
});
// Change the theme with the time

 // const today = new Date();
 //const Hr = today.getHours();

/*
if (Hr >= 19 || Hr < 5) {
    enableDark();
} else {
    disableDark();
}*/
