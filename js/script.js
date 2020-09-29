function ChangeImage() {
    element = document.getElementById('myimage');
    if (element.src.match('focoOn')) {
        element.src = 'images/focoOff.png';
        document.getElementById('btnFoco').innerHTML = 'Encender';
    } else {
        element.src = 'images/focoOn.png';
        document.getElementById('btnFoco').innerHTML = 'Apagar';
    }
}