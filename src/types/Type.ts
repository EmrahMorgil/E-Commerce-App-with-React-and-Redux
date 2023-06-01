
export class mdlProduct {
  id!: string;
  photo!: string[];
  name!: string;
  price!: string;
  amount!: number;
}


export class productInitialStateType {
  products!: Array<mdlProduct>;
  basket!: Array<mdlProduct>;
  basketAmount!: number;
  totalPrice!: number;
  status!: string;
}



export class basketItemType {
  product!: mdlProduct;
}

export class homeItemType {
  item!: mdlProduct;
}



//Product--------------------------

export class productsSetBasketPayloadActionType {
  id!: number;
  amount!: number;
}




//User---------------------
export class usersInitialStateType {
  users!: Array<UserType>;
  userLoggedIn?: boolean;
  adminLoggedIn?: boolean;
  registerControl?: boolean;
  welcomeUser?: string;
}


export class UserType {
  id!: string;
  username!: string;
  password!: string;
}

