import { useState } from "react";
import styles from "./styles.module.scss";
import { Layout } from "@/components/Layout";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  return (
    <Layout title="Login page">
      <div className={styles.container}>
        <form className={styles.box}>
          <h2 className={styles.title}>Log in/Sign in</h2>
          <div className={styles.input_box}>
            <p className={styles.label}>Enter your username</p>
            <input
              onChange={(ev) => setUsername(ev.target.value)}
              value={username}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className={styles.input_box}>
            <p className={styles.label}>Enter your password</p>
            <input
              onChange={(ev) => setPassword(ev.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.input_box}>
            <p className={styles.label}>Confirm your password</p>
            <input
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              value={confirmPassword}
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
