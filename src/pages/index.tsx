import { useEffect, useState } from "react";
import { NextPageContext } from "next";
import * as cookie from "cookie";
import Cookie from "js-cookie";
import { UserService } from "@/services/userService";
import { Layout } from "@/components/Layout";

import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const General = (data: null | { username: string }) => {
  const [username, setUsername] = useState<string>(
    data === null ? "" : data.username || "Anonym"
  );
  const router = useRouter();
  const user = new UserService();

  useEffect(() => {
    const load = async () => {
      const user = new UserService();
      const sessionId = Cookie.get("sessionId");
      const data = sessionId ? await user.checkUser(sessionId) : null;
      setUsername(data && "username" in data ? data.username || "Anonym" : "");
    };
    if (!username) {
      load();
    }
    load();
  }, []);

  return (
    <Layout>
      <main className={styles.main}>
        <button
          className={styles.logout}
          onClick={async () => {
            await user.logout(username);
            router.push("/login");
          }}
        >
          Log out
        </button>
        {username ? (
          <>
            <h1>Welcome {username}</h1>
          </>
        ) : (
          <h1>Please Log in or Sign in</h1>
        )}
      </main>
    </Layout>
  );
};

export const getServerSideProps = async ({ req }: NextPageContext) => {
  const user = new UserService();
  const { sessionId } = cookie.parse(req?.headers.cookie ?? "");
  const data = sessionId ? await user.checkUser(sessionId) : null;
  return { props: data };
};

export default General;
