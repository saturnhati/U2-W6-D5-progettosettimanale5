const changeTheme = (event) => {
    if (event.target.checked) {
        document.querySelector('.main').classList.replace('light-mode', 'dark-mode')
        document.querySelector('.hero').classList.replace('light-mode-hero', 'dark-mode-hero')
        document.querySelector('.navbar').classList.replace('light-mode-navfoot', 'dark-mode-navfoot')
        document.querySelector('footer').classList.replace('light-mode-navfoot', 'dark-mode-navfoot')
        document.querySelector('#button-info').classList.replace('light-mode-button', 'dark-mode-button')
    } else {
        document.querySelector('.main').classList.replace('dark-mode', 'light-mode')
        document.querySelector('.hero').classList.replace('dark-mode-hero', 'light-mode-hero')
        document.querySelector('.navbar').classList.replace('dark-mode-navfoot', 'light-mode-navfoot')
        document.querySelector('footer').classList.replace('dark-mode-navfoot', 'light-mode-navfoot')
        document.querySelector('#button-info').classList.replace('dark-mode-button', 'light-mode-button')
    }
}
