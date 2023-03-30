function mostrarDiv (divSuperior) {
    const hiddenDiv = document.getElementById(divSuperior);
    hiddenDiv.style.display = hiddenDiv.style.display === 'none' ? 'block' : 'none';
}