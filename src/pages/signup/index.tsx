import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import { useRouter } from "next/router";
import { Layout } from "@/components/Layout";
import { UserService } from "@/services/userService";
import Link from "next/link";

import styles from "./styles.module.scss";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isValidUsername, setIsValidUsername] = useState<boolean>(true);
  const [isValidPassword, setIsValidPassword] = useState<boolean>(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] =
    useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setIsValidUsername(username.length > 3 && username.length < 20);
  }, [username]);

  useEffect(() => {
    setIsValidPassword(password.length > 5);
    setIsValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  useEffect(() => {
    setIsValid(isValidUsername && isValidPassword && isValidConfirmPassword);
  }, [isValidUsername, isValidPassword, isValidConfirmPassword]);

  const setvice = new UserService();
  return (
    <Layout title="SignUp page">
      <div className={styles.container}>
        <form
          encType="application/x-www-form-urlencoded"
          className={styles.box}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2 className={styles.title}>Sign in</h2>
            {loading && <MoonLoader color="darkblue" size={40} />}
          </div>
          <div className={styles.input_box}>
            <p className={styles.label}>Enter your username</p>
            {!isValidUsername && (
              <p className={styles.error}>
                Username is not valid. It should be 3-20 letters
              </p>
            )}
            <input
              onChange={(ev) => setUsername(ev.target.value)}
              value={username}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className={styles.input_box}>
            <p className={styles.label}>Enter your password</p>
            {!isValidPassword && (
              <p className={styles.error}>
                Password is not valid. It should be minimum 5 letters
              </p>
            )}
            <input
              onChange={(ev) => setPassword(ev.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={styles.input_box}>
            <p className={styles.label}>Confirm your password</p>
            {!isValidConfirmPassword && (
              <p className={styles.error}>Incorrect password!</p>
            )}
            <input
              onChange={(ev) => setConfirmPassword(ev.target.value)}
              value={confirmPassword}
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            disabled={loading}
            onClick={(e) => {
              setLoading(true);
              e.preventDefault();
              setLoading(false);
              isValid && setvice.signin(username, password);
              router.push("/");
            }}
          >
            Submit
          </button>
          <Link className={styles.login} href="/login">
            Already have an account? Log in.
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
