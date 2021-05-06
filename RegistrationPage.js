class RegistrationPage {
  constructor (fields, result) {
    this.fields = fields
    this.result = result
    this.items = []
  }

  clearAllValues(focusFirst = true) {
    this.result.innerHTML = ''

    for (let field of this.fields) {
      field.value = ''
    }

    if (focusFirst) field[0].focus()
  }

  clearAllClasses() {
    this.result.className = ''

    for (let field of this.fields) {
      field.className = ''
    }
  }

  isValid() {
    this.clearAllClasses()

    for (let field of this.fields) {
      if (!field.value) {
        let fieldName = field.getAttribute('placeholder')
        this.result.innerHTML = `<p class="negative">É obrigatório informar o campo "${fieldName}"!</p>`
        field.className = 'negative'
        field.focus()
        return false
      }
    }

    return true
  }
}

export default RegistrationPage
