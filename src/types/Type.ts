export class basketItemType {
  product!: mdlProduct;
}

export class homeItemType {
  item?: mdlProduct;
}

export class mdlProduct {
  id!: number;
  photo!: string[];
  name!: string;
  price!: string;
  amount!: number;
}

//Product--------------------------
export class productInitialStateType {
  items: Array<mdlProduct>;
  basket: Array<mdlProduct>;
  basketAmount: number;
  totalPrice: number;
  status: string;

  constructor(
    pItems: Array<mdlProduct>,
    pBasket: Array<mdlProduct>,
    pBasketAmount: number,
    pTotalPrice: number,
    pStatus: string
  ) {
    this.items = pItems;
    this.basket = pBasket;
    this.basketAmount = pBasketAmount;
    this.totalPrice = pTotalPrice;
    this.status = pStatus;
  }
}

export class productsAddBasketActionType {
  type?: string;
  payload!: mdlProduct;
}

export class productsSetBasketActionType {
  type?: string;
  payload!: productsSetBasketPayloadActionType;
}
export class productsSetBasketPayloadActionType {
  id?: number;
  amount!: number;
}

export class productsDeleteBasketActionType {
  type?: string;
  payload!: Array<mdlProduct>;
}
export class productsBasketAmountType {
  type?: string;
  payload!: number;
}
export class productsSetTotalPrice {
  type?: string;
  payload!: number;
}
export class extraReducersFullFilledType {
  type?: string;
  payload!: Array<mdlProduct>;
  meta?: extraReducersFullFilledMetaType;
}

export class extraReducersFullFilledMetaType {
  requestId?: string;
  requestStatus?: string;
}

//Theme-------------------------
export class themeInitialStateType {
  theme?: boolean;
}

export class setThemeActionType {
  type?: string;
  payload!: boolean;
}

//User---------------------
export class usersInitialStateType {
  users!: Array<UserType>;
  userLoggedIn?: boolean;
  registerControl?: boolean;
  welcomeUser?: string;
}
export class setWelcomeUserActionType{
  type?: string;
  payload!: string;
}

export class usersExtraReducerFullFilledType{
  type?: string;
  meta?: usersExtraReducersMetaType;
  payload!: UserType[];
}
export class usersExtraReducersMetaType{
  requestId?: string;
  requestStatus?: string;
}

export class UserType {
  username?: string;
  password?: string;
  id?: number;
}

export class addUsersActionType {
  type?: string;
  payload!: UserType;
}

export class setUserLoggedInActionType {
  type?: string;
  payload!: boolean;
}

export class setRegisterControlActionType {
  type?: string;
  payload!: boolean;
}
