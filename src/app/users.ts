export interface UserAdress {
  city?: string;
  postCode?: string;
  street?: string;
  numberLocal?: string;
}

export interface UserDetails {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export interface User {
  id: number;
  email: string;
  UserAdress?: UserAdress;
  UserDetails?: UserDetails;
}
