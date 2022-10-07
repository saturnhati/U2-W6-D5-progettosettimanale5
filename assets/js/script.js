const changeTheme = (event) => {
    if (event.target.checked) {
        document.querySelector('.main').classList.replace('light-mode', 'dark-mode')
    } else {
        document.querySelector('.main').classList.replace('dark-mode', 'light-mode')
    }
}
