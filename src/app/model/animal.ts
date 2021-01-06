import {Age} from './age';
/*export interface Animal{
  _id_legal: string;
  date_birth?: string;
  genus?: string;
  sex?: string;
  name: string ;
  createdAt?: string;
  updatedAt?: string;
  ege?: Age;
}*/
export class Animal{
  constructor(
    public idLegal: string, public dateBirth: string,
    public genus: string,
    public sex: string,
    public name: string,
    public createdAt: string,
    public updatedAt: string,
    public ege: Age){}
}

