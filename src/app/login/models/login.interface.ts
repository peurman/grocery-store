export interface LoginRequestInterface {
  data: { email: string; password: string };
}

export interface LoginResponseInterface {
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      name: string;
    };
  };
}
