
export class mdlProduct {
  id!: string;
  photo!: string[];
  name!: string;
  price!: string;
  amount!: number;
}

export class mdlUser {
  id!: string;
  username!: string;
  password!: string;
  role!: enmUser;
}

export class productInitialStateType {
  products!: Array<mdlProduct>;
  basket!: Array<mdlProduct>;
  basketAmount!: number;
  totalPrice!: number;
  status!: string;
}

export class usersInitialStateType {
  users!: Array<mdlUser>;
  userLoggedIn!: boolean;
  adminLoggedIn!: boolean;
  registerControl!: boolean;
  activeUser!: mdlUser;
}


export class basketItemType {
  product!: mdlProduct;
}

export class homeItemType {
  item!: mdlProduct;
}

export interface IProtected{
  loggedIn: boolean,
  children: any,
} 


export enum enmUser{
  user,
  admin
}

