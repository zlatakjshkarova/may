



const Theme = localStorage.getItem('theme')

if (Theme) {
    document.body.className = Theme;

}
function togglee() {
    const curTheme = document.body.className;
    const themenew = curTheme === 'tema' ? 'dack' : 'tema';

    document.body.className = themenew;
    localStorage.setItem('theme', themenew)
}





