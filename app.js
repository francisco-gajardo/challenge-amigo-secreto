let addAmigo = [];

    function agregarAmigo() {
        // Obtener el valor del input
        let nuevoAmigo = document.getElementById("amigo").value;

        // Verificar que no esté vacío
        if (nuevoAmigo.trim() !== "") {
            // Agregar el nuevo elemento al array
            addAmigo.push(nuevoAmigo);

            // Limpiar el input
            document.getElementById("amigo").value = "";

            // Llamar a la función que actualiza la lista en pantalla
            mostrarLista();
        }
            
        else {
            // Agregar el nuevo elemento al array
            addAmigo.push(" ");
            alert ('Por favor, ingresar un nombre valido');
        }
    }

    function mostrarLista() {
        // Obtener la referencia al elemento donde se mostrará la lista
        let listaHTML = document.getElementById("listaAmigos");

        // Limpiar el contenido antes de actualizarlo
        listaHTML.innerHTML = "";

        // Recorrer el array y agregar cada elemento como un <li> en la lista
        addAmigo.forEach(function(elemento) {
            let li = document.createElement("li");
            li.textContent = elemento;
            listaHTML.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (addAmigo.length > 0) {
            // Obtener un índice aleatorio del array
            let indiceAleatorio = Math.floor(Math.random() * addAmigo.length);
            let elementoSeleccionado = addAmigo[indiceAleatorio];

            // Mostrar el resultado en la pantalla
            document.getElementById("resultado").textContent = "El Ganador es: " + elementoSeleccionado;
        } else {
            alert ('Ingrese datos para iniciar');
        }
    }