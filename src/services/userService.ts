import axios from "axios";

import "dotenv/config";

export class UserService {
  private base_url = String(process.env.NEXT_PUBLIC_BASE_URL);

  public async login(username: string, password: string) {
    const response = await fetch(`${this.base_url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: "include",
    });
    const data = await response.json();
    console.log(data);
  }

  public async signin(username: string, password: string) {
    const response = await fetch(`${this.base_url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    console.log(response);
  }

  public logout(username: string, password: string) {
    axios.post(`${this.base_url}/signin`, { username, password });
  }
}
