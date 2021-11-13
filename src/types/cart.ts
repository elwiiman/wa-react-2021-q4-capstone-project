import { ResultsEntity } from '../types/productById';

export interface CartProduct extends ResultsEntity {
    quantity: number;
}

export interface Cart {
    products: CartProduct[];
}
