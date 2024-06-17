export class User {
    id_user: number;
    name: string;
    last_name: string;
    email: string;
    photo: string;
    password: string;
  
    constructor(
      id_user: number,
      name: string,
      last_name: string,
      email: string,
      photo: string,
      password: string
    ) {
      this.id_user = id_user;
      this.name = name;
      this.last_name = last_name;
      this.email = email;
      this.photo = photo;
      this.password = password;
    }
}

export class Photo {
  url: string;

  constructor(url: string) {
    this.url = url;
  }
}

