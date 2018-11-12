export class User {
  name = 'name';
  sex;

  constructor(name = 'name', sex = 'female') {
    this.name = name;
    this.sex = sex;
  }

  updateName(name) {
    this.name = name;
  }

  getName() {
    return `${this.prefix}${this.name}`;
  }

  get prefix() {
    return this.sex === 'female' ? 'Ms.' : 'Mr.';
  }
}
