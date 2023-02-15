interface Address {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export interface ICreateUserRequest {
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
  password: string;
  is_buyer: boolean;
  address: Address;
}
