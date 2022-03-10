import { FormEvent, useState } from "react";
import { NextPage } from "next";
import {
  Box,
  Button,
  Flex,
  Link,
  Spacer,
  TextField,
  Typography,
} from "@/design-system";
import { LoginDocument } from "@/service-api/login.generated";
import { serviceAPIClient } from "@/clients";
import { useOnlyUnauthenticated } from "@/contexts/auth";

interface LoginPageProps {}

export const LoginPage: NextPage<LoginPageProps> = () => {
  useOnlyUnauthenticated();

  const [email, setEmail] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  async function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setStatus("submitting");
      const response = await serviceAPIClient.request(LoginDocument, {
        email: email,
        redirectURLAfterLogin: `${location.protocol}//${location.host}/account`,
      });
      setResponse(response);
    } catch (e) {
      console.log(e);
    }
    setStatus("idle");
  }

  return (
    <Flex
      as="form"
      direction="column"
      align="center"
      css={{ width: "$full" }}
      onSubmit={login}
    >
      <Typography as="h1" variant="heading" size={{ "@initial": 7, "@bp1": 9 }}>
        Welcome Back!
      </Typography>

      <Spacer space={10} />

      <Flex direction={{ "@initial": "column", "@bp1": "row" }}>
        <Typography size="4">New to Photo Finder?</Typography>

        <Spacer
          direction={{ "@initial": "vertical", "@bp1": "horizontal" }}
          space={2}
        />

        <Link href="/signup" css={{ fontWeight: "bold", fontSize: "$4" }}>
          Create an Account
        </Link>
      </Flex>

      <Spacer space={{ "@initial": 14, "@bp1": 10 }} />

      <Box
        css={{
          width: "$11_12",
          "@bp1": {
            width: "$3_4",
          },
        }}
      >
        <TextField
          placeholder="Email"
          css={{ width: "$full" }}
          value={email}
          type="email"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </Box>

      <Spacer space={5} />

      <Box
        css={{
          width: "$11_12",
          "@bp1": {
            width: "$3_4",
          },
        }}
      >
        <Button
          css={{ width: "$full" }}
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Please wait..." : "Log In"}
        </Button>
      </Box>

      <Spacer space={5} />

      {response && (
        <Box
          css={{
            width: "$11_12",
            "@bp1": {
              width: "$3_4",
            },
          }}
        >
          <Typography
            css={{
              color: response?.user?.sendMagicLink?.success ? "$black" : "red",
            }}
          >
            {response?.user?.sendMagicLink?.success
              ? "Please check your email for magic link."
              : "Error logging in."}
          </Typography>
        </Box>
      )}
    </Flex>
  );
};

export default LoginPage;
