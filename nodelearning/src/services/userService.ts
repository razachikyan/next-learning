import axios from "axios";

import "dotenv/config";

export class UserService {
  private base_url = String(process.env.NEXT_PUBLIC_BASE_URL);

  public login(username: string, password: string) {
    axios.post(`${this.base_url}/login`, {
      user_name: username,
      user_password: password,
    });
  }

  public signin(username: string, password: string) {
    axios.post(`${this.base_url}/signin`, { username, password });
  }

  public logout(username: string, password: string) {
    axios.post(`${this.base_url}/signin`, { username, password });
  }
}
