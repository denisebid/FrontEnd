    //Va a buscar al html el elemento con la clase formulario
    const $form = document.querySelector(".formulario")
    console.log($formulario)

    //Le agrega al formulario una escucha de eventos y cuando sucede el evento, llama a la funcion handleSubmit 
    $form.addEventListener('submit', handleSubmit)

    //define la funcion handleSubmit con ejecucion asincronica (una cosa a la vez y en paralelo)
    async function handleSubmit(event) {
        event.preventDefault() // Evita que el navegador haga la logica default 
        const form = new FormData(this) //Vuelve a reconstruir el objeto FormData (clave/valor). This=formulario
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        }) // Aca busca la accion y el metodo del html definido en el form, como cuerpo define los datos del formulario y como header pone que la respuesta sea en formato json
        if (response.ok) {
            this.reset()
            alert('Gracias por ser parte de Carta a un Abuelo')
        }// Si se envia el formulario sale la alerta y se limpia el formulario.

    }