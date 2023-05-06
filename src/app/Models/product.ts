import { Categoryproduct } from "./categoryproduct";

export class Produit {
    Id_produit!: number;
    nom!: string;
    description!: string;
    image!: string;
    prix!: number;
    quantity!: number;
    datedecreation!: Date;
    produitCategory!: Categoryproduct;
   
  
}
