export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
  age: number;
  gender: string;
  birthDate: string;
};

export type UserDetailType = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  image: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  phoneNumber: string;
  website: string;
};

//for login with jwt type
export type User = {
  id: number;
  password: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
};
