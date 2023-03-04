export interface Company {
  idCompany: number;
  name: string;
  idCity: number;
  description?: string;
  image: {
    idImage: number,
    idCompany: number,
    path: string,
    fileName: string
  };
  phone: string;
}