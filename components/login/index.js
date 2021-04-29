import React, { useState } from "react";

import Layout from "components/layout";
import { useIsLoggedIn, loginWithMagicLink } from "components/auth";

import { LoginStyle, Outer, Fields } from "./styles";

function PageLayout({ title, children }) {
  return (
    <Layout title={title}>
      <Outer>{children}</Outer>
    </Layout>
  );
}

export default function Login() {
  const isLoggedIn = useIsLoggedIn();
  const [userData, setUserData] = useState({
    loading: false,
    email: "",
    message: "",
    error: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    setUserData(Object.assign({}, userData, { loading: true, error: "" }));
    const { email } = userData;

    try {
      const { success, error } = await loginWithMagicLink(email);

      setUserData(
        Object.assign({}, userData, {
          loading: false,
          message: success
            ? "Check your mail inbox for a login link"
            : error || "Could not send the login link email =(",
        })
      );
    } catch (error) {
      console.error(error);

      setUserData(
        Object.assign({}, userData, {
          loading: false,
          error: "Could not send a magic link email =(",
        })
      );
    }
  }

  if (isLoggedIn) {
    return (
      <PageLayout title="Logged in">
        <div style={{ padding: 300 }}>
          <h1>Hey {userData.email}, you're logged in!</h1>
          <a href="/api/logout">Logout</a>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Login">
      <Outer>
        <LoginStyle>
          <h1>Login</h1>
          <form onSubmit={handleSubmit} action="/api/login" method="post">
            <Fields>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                onChange={(event) =>
                  setUserData(
                    Object.assign({}, userData, {
                      email: event.target.value,
                    })
                  )
                }
              />
              <button type="submit" value="Submit">
                Send me a login link
              </button>
            </Fields>
          </form>
          {userData.message ? <p>{userData.message}</p> : null}
          {userData.error ? <p>{t("login.emailAddressInvalid")}</p> : null}
        </LoginStyle>
      </Outer>
    </PageLayout>
  );
}
