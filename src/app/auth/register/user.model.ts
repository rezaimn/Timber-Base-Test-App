export class UserModel {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  website: string;
  address: string;

  constructor(data: any = {}) {
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.phone = data.phone || '';
    this.email = data.email || '';
    this.website = data.website || '';
    this.address = data.address || '';

  }

}
