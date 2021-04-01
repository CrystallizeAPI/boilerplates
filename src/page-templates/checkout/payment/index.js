/* eslint-disable react/display-name */
import React, { useState } from "react"
import { useLocation, navigate } from "@reach/router"

import styled from "styled-components"
import { useQuery } from "react-query"

import ServiceApi from "lib/service-api"
import { useT } from "lib/i18n"
import { useBasket } from "components/basket"
import { Spinner } from "ui/spinner"
import KlarnaCheckout from "./klarna"
import StripeCheckout from "./stripe"
import MollieCheckout from "./mollie"
import VippsCheckout from "./vipps"

import StripeLogo from "images/stripe-logo.png"
import KlarnaLogo from "images/klarna-logo.png"
import MollieLogo from "images/mollie-vector-logo.png"
import VippsLogo from "images/vipps-logo.png"

import {
  Input,
  InputGroup,
  Label,
  PaymentSelector,
  PaymentProviders,
  PaymentButton,
  PaymentProvider,
  SectionHeader,
  CheckoutFormGroup,
} from "../styles"
import Voucher from "../voucher"

const Row = styled.div`
  display: flex;
  margin-bottom: 10px;
`

const Inner = styled.div``

export default function Payment() {
  const t = useT()
  const location = useLocation()
  const { basketModel, actions } = useBasket()
  const [selectedPaymentProvider, setSelectedPaymentProvider] = useState(null)
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const paymentConfig = useQuery("paymentConfig", () =>
    ServiceApi({
      query: `
      {
        paymentProviders {
          stripe {
            enabled
          }
          klarna {
            enabled
          }
          mollie {
            enabled
          }
          vipps {
            enabled
          }
        }
      }
    `,
    })
  )

  // Handle locale with sub-path routing
  let multilingualUrlPrefix = ""
  if (window.location.pathname.startsWith(`/${location.locale}/`)) {
    multilingualUrlPrefix = "/" + location.locale
  }

  const { firstName, lastName, email } = state

  function getURL(path) {
    return `${location.protocol}//${location.host}${multilingualUrlPrefix}${path}`
  }

  /**
   * The checkout model shared between all the payment providers
   * It contains everything needed to make a purchase and complete
   * an order
   */
  const checkoutModel = {
    basketModel,
    customer: {
      firstName,
      lastName,
      addresses: [
        {
          type: "billing",
          email: email || null,
        },
      ],
    },
    confirmationURL: getURL(`/confirmation/{crystallizeOrderId}?emptyBasket`),
    checkoutURL: getURL(`/checkout`),
    termsURL: getURL(`/terms`),
  }

  const paymentProviders = [
    {
      name: "stripe",
      color: "#6773E6",
      logo: StripeLogo,
      render: () => (
        <PaymentProvider>
          <StripeCheckout
            checkoutModel={checkoutModel}
            onSuccess={(crystallizeOrderId) => {
              navigate(`/confirmation/${crystallizeOrderId}?emptyBasket`, { state: { orderId: crystallizeOrderId } })

              // alert("SUCCESS")
              // scrollTo(0, 0);
            }}
          />
        </PaymentProvider>
      ),
    },
    {
      name: "klarna",
      color: "#F8AEC2",
      logo: KlarnaLogo,
      render: () => (
        <PaymentProvider>
          <KlarnaCheckout
            checkoutModel={checkoutModel}
            basketActions={actions}
            getURL={getURL}
          />
        </PaymentProvider>
      ),
    },
    {
      name: "vipps",
      color: "#fff",
      logo: VippsLogo,
      render: () => (
        <PaymentProvider>
          <VippsCheckout
            checkoutModel={checkoutModel}
            basketActions={actions}
            onSuccess={(url) => {
              if (url) window.location = url
            }}
          />
        </PaymentProvider>
      ),
    },
    {
      name: "mollie",
      color: "#fff",
      logo: MollieLogo,
      render: () => (
        <PaymentProvider>
          <MollieCheckout
            checkoutModel={checkoutModel}
            basketActions={actions}
            onSuccess={(url) => {
              if (url) window.location = url
            }}
          />
        </PaymentProvider>
      ),
    },
  ]

  const enabledPaymentProviders = []
  if (!paymentConfig.loading && paymentConfig.data) {
    const { paymentProviders } = paymentConfig.data.data
    if (paymentProviders.klarna.enabled) {
      enabledPaymentProviders.push("klarna")
    }
    if (paymentProviders.mollie.enabled) {
      enabledPaymentProviders.push("mollie")
    }
    if (paymentProviders.vipps.enabled) {
      enabledPaymentProviders.push("vipps")
    }
    if (paymentProviders.stripe.enabled) {
      enabledPaymentProviders.push("stripe")
    }
  }

  return (
    <Inner>
      <CheckoutFormGroup>
        <SectionHeader>{t("checkout.title")}</SectionHeader>
        <form noValidate>
          <Row>
            <InputGroup>
              <Label htmlFor="firstname">{t("customer.firstName")}</Label>
              <Input
                name="firstname"
                type="text"
                value={firstName}
                onChange={(e) =>
                  setState({ ...state, firstName: e.target.value })
                }
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="lastname">{t("customer.lastName")}</Label>
              <Input
                name="lastname"
                type="text"
                value={lastName}
                onChange={(e) =>
                  setState({ ...state, lastName: e.target.value })
                }
                required
              />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <Label htmlFor="email">{t("customer.email")}</Label>
              <Input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setState({ ...state, email: e.target.value })}
                required
              />
            </InputGroup>
          </Row>
        </form>
      </CheckoutFormGroup>

      <Voucher />

      <CheckoutFormGroup withUpperMargin>
        <div>
          <SectionHeader>{t("checkout.choosePaymentMethod")}</SectionHeader>
          {paymentConfig.loading ? (
            <Spinner />
          ) : (
            <div>
              {enabledPaymentProviders.length === 0 ? (
                <i>{t("checkout.noPaymentProvidersConfigured")}</i>
              ) : (
                <PaymentProviders>
                  <PaymentSelector>
                    {enabledPaymentProviders.map((paymentProviderName) => {
                      const paymentProvider = paymentProviders.find(
                        (p) => p.name === paymentProviderName
                      )
                      if (!paymentProvider) {
                        return (
                          <small>
                            {t("checkout.paymentProviderNotConfigured", {
                              name: paymentProviderName,
                            })}
                          </small>
                        )
                      }

                      return (
                        <PaymentButton
                          key={paymentProvider.name}
                          color={paymentProvider.color}
                          type="button"
                          selected={
                            selectedPaymentProvider === paymentProvider.name
                          }
                          onClick={() =>
                            setSelectedPaymentProvider(paymentProvider.name)
                          }
                        >
                          <img
                            src={paymentProvider.logo}
                            alt={t("checkout.paymentProviderLogoAlt", {
                              name: paymentProvider.name,
                            })}
                          />
                        </PaymentButton>
                      )
                    })}
                  </PaymentSelector>

                  {paymentProviders
                    .find((p) => p.name === selectedPaymentProvider)
                    ?.render()}
                </PaymentProviders>
              )}
            </div>
          )}
        </div>
      </CheckoutFormGroup>
    </Inner>
  )
}
