export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  phone: string;
  zipCode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
}

export interface AllPatient {
  id: string;
  name: string;
}