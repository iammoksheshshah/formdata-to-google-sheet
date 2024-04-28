const scriptURL = 'https://script.google.com/macros/s/AKfycbx_doSBk1uKKw6aTDRsfFdLvFz8bQbjGMz015lg19mELy8mZXchRN46rkoFFnO2blSBvA/exec'
    const form = document.forms['submit-to-google-sheet']
    const successMessage = document.querySelector('.js-success-message')
    const errorMessage = document.querySelector('.js-error-message')

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => showSuccessMessage(response))
        .catch(error => showErrorMessage(error));
        form.reset();
    })

    function showSuccessMessage (response) {
      console.log('Success!', response)
      setTimeout(() => {
        successMessage.classList.remove('is-hidden')
        loading.classList.add('is-hidden')
      }, 500)
    }

    function showErrorMessage (error) {
      console.error('Error!', error.message)
      setTimeout(() => {
        errorMessage.classList.remove('is-hidden')
        loading.classList.add('is-hidden')
      }, 500)
    }