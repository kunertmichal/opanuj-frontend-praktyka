function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const inputAsNumber = Number(input.value)
    const validationResult = new Validator(inputAsNumber)
      .isNumber()
      .isEven()
      .isGreaterThan(0)
      .isLowerThan(100)
      .isRequired()

    result.innerHTML = validationResult.isValidationSuccessful() ? "Valid" : validationResult.errors.join(' ')
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();

class Validator {
  constructor(input) {
    this.input = input;
    this.errors = []
  }

  isNumber() {
    if (typeof this.input !== 'number') {
      this.errors.push('Input must be a number.');
    }
    return this;
  }

  isEven() {
    if (this.input % 2 !== 0) {
      this.errors.push('Input must be even.');
    }
    return this;
  }

  isGreaterThan(value) {
    if (this.input <= value) {
      this.errors.push(`Input must be greater than ${value}.`);
    }
    return this;
  }

  isLowerThan(value) {
    if (this.input >= value) {
      this.errors.push(`Input must be lower than ${value}.`);
    }
    return this;
  }

  isRequired() {
    if (this.input === null || this.input === undefined || this.input === '') {
      this.errors.push('Input is required.');
    }
    return this;
  }

  isValidationSuccessful() {
    return this.errors.length === 0
  }
}
