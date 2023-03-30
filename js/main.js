async function setData() {
    const jsonData = await fetch('https://randomuser.me/api/');
    const { results } = await jsonData.json();
    const user = results[0];

    document.getElementById('FotoPerfil').setAttribute('src', user.picture.large);
    document.getElementById('Titulo').innerHTML = user.name.last + ', ' + user.name.first;

    const desc = `
        <ul>
            <li><b>Género:</b> ${user.gender == 'male' ? 'masculino' : 'femenino'}</li>
            <li><b>Edad:</b> ${user.dob.age}</li>
            ${ user.id.name != '' ? '<li><b>' + user.id.name +':</b> ' + user.id.value + '</li>' : '' } 
        </ul>
    `;

    document.getElementById('Descripcion').innerHTML = desc; 
    localStorage.setItem('user', JSON.stringify(user));
}

setData();