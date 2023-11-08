import axios from "axios";

import "dotenv/config";

export class UserService {
  private base_url = String(process.env.NEXT_PUBLIC_BASE_URL);

  public async login(username: string, password: string) {
    await fetch(`${this.base_url}/login`, {
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
  }

  public async checkUser(sessionId: string): Promise<{ username: string }> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/${sessionId}`
    );
    const data = await response.json();
    return data;
  }

  public async signin(username: string, password: string) {
    await fetch(`${this.base_url}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  }

  public async logout(username: string) {
    await axios.post(`${this.base_url}/logout`, { username });
  }
}
