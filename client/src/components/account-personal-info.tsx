import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { serviceAPIClient } from "@/clients";
import {
  UpdateUserDocument,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from "@/service-api/update-user.generated";
import { AccountQuery } from "@/service-api/account.generated";
import {
  Box,
  Flex,
  Spacer,
  Button,
  TextField,
  Typography,
} from "@/design-system";

interface AccountPersonalInfoProps {
  customer: AccountQuery["user"];
}

export function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation(
    (input: UpdateUserMutationVariables["input"]) =>
      serviceAPIClient.request<UpdateUserMutation, UpdateUserMutationVariables>(
        UpdateUserDocument,
        { input }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("account");
      },
    }
  );
}

export const AccountPersonalInfo = ({ customer }: AccountPersonalInfoProps) => {
  const updateUser = useUpdateUser();

  const [firstName, setFirstName] = useState(customer.firstName);
  const [lastName, setLastName] = useState(customer.lastName);
  const [phone, setPhone] = useState(customer.phone);

  function handleSave() {
    updateUser.mutate({ firstName, lastName, phone });
  }

  return (
    <Box css={{ p: "$12", borderRadius: "$3xl", boxShadow: "$card" }}>
      <Typography as="h3" variant="heading" size={6}>
        Personal Info
      </Typography>

      <Spacer space={10} />

      <Flex>
        <Box css={{ flex: 1 }}>
          <Typography as="label" size={3} htmlFor="firstName">
            First Name
          </Typography>
          <Spacer space={2} />
          <TextField
            cssForWrapper={{ width: "$full" }}
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
        </Box>
        <Spacer direction="horizontal" space={16} />
        <Box css={{ flex: 1 }}>
          <Typography as="label" size={3} htmlFor="lastName">
            Last Name
          </Typography>
          <Spacer space={2} />
          <TextField
            cssForWrapper={{ width: "$full" }}
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
        </Box>
      </Flex>

      <Spacer space={8} />

      <Flex>
        <Box css={{ flex: 1 }}>
          <Typography as="label" size={3} htmlFor="email">
            Email
          </Typography>
          <Spacer space={2} />
          <TextField
            cssForWrapper={{ width: "$full" }}
            id="email"
            defaultValue={customer.email}
            disabled
          />
        </Box>
        <Spacer direction="horizontal" space={16} />
        <Box css={{ flex: 1 }}>
          <Typography as="label" size={3} htmlFor="phone">
            Phone Number
          </Typography>
          <Spacer space={2} />
          <TextField
            cssForWrapper={{ width: "$full" }}
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
        </Box>
      </Flex>

      <Spacer space={8} />

      <Flex justify="end">
        {/* <Button variant="secondary">Cancel</Button>
          <Spacer direction="horizontal" space={4} /> */}
        <Button onClick={handleSave}>
          {updateUser.isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </Flex>
    </Box>
  );
};
