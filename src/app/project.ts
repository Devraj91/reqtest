export class Project {

  id: number;
  title = '';
  owner = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
