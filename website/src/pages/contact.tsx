import React from "react";

import { NextPage } from "next";

import { Spacer, Box } from "@/design-system";

import { ContactHero } from "@/components/contact-hero";
import { ContactBody } from "@/components/contact-body";

interface ContactPageProps {}

export const ContactPage: NextPage<ContactPageProps> = () => {
  return (
    <>
      <Box css={{ backgroundColor: "$accent" }}>
        <ContactHero />
      </Box>

      <Spacer space={20} />

      <ContactBody />

      <Spacer space={{ "@initial": 0, "@bp1": 48 }} />
    </>
  );
};

export default ContactPage;
