export class Categorie {
  success?: boolean;
  id?: string;
  name?: string;
  description?: string;

  constructor(success?:boolean ,id?: string, name?: string, description?: string) {
    this.success = success;
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
