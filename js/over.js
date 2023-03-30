function setDescription (datatype) {
    const user = JSON.parse(localStorage.getItem('user'));
    let desc;
    switch (datatype) {
        case 'personal':
            desc = `
            <ul>
                <li><b>Género:</b> ${user.gender == 'male' ? 'masculino' : 'femenino'}</li>
                <li><b>Edad:</b> ${user.dob.age}</li>
                ${ user.id.name != '' ? '<li><b>' + user.id.name +':</b> ' + user.id.value + '</li>' : '' } 
            </ul>
            `;
            break;
        case 'contacto':
            desc = `
            <ul>
                <li><b>Correo Electrónico:</b> ${user.email}</li>
                <li><b>Número Personal:</b> ${user.cell}</li>
            </ul>
            `;
            break;
        case 'nacionalidad':
            desc = `
            <ul>
                <li><b>Localidad:</b> ${user.location.city}, ${user.location.state}</li>
                <li><b>País de Origen:</b> ${user.location.country}</li>
                <li><b>Dirección:</b> ${user.location.street.name} ${user.location.street.number}</li>
            </ul>
            `;
            break;
        default:
            desc = `<h1>Situación no comprendida.</h1>`;
            break;
    }

    document.getElementById('Descripcion').innerHTML = desc;
}

setData();

document.getElementById('Personal').addEventListener('mouseover', (e) => {setDescription('personal')});
document.getElementById('Contacto').addEventListener('mouseover', (e) => {setDescription('contacto')});
document.getElementById('Nacionalidad').addEventListener('mouseover', (e) => {setDescription('nacionalidad')});