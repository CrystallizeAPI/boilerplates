import React, { useState } from "react";

import Layout from "components/layout";
import { useIsLoggedIn, loginWithMagicLink } from "components/auth";
import Illustration from "./illustration";
import { LoginStyle, Outer, Fields, Btn } from "./styles";

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
          <p css={"margin-bottom:30px;"}>
            Don't want to be here? Click the button below and we'll get you out
            of here
          </p>
          <Btn href="/api/logout">Logout</Btn>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Login">
      <Outer>
        <LoginStyle>
          {userData.message ? (
            <>
              <Illustration />
              <p>{userData.message}</p>
            </>
          ) : (
            <>
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
                  <Btn as="button" type="submit" value="Submit">
                    Send me a link
                  </Btn>
                </Fields>
              </form>
            </>
          )}

          {userData.error ? <p>Whoopsy, we made a oppsy :(</p> : null}
        </LoginStyle>
      </Outer>
    </PageLayout>
  );
}
