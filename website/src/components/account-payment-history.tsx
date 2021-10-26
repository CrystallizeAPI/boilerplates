import { Box, Spacer, Typography } from "@/design-system";

interface AccountPaymentHistoryProps {
  orders: any;
}

const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const AccountPaymentHistory = ({
  orders,
}: AccountPaymentHistoryProps) => {
  return (
    <Box as="section">
      <Typography
        as="h2"
        variant="heading"
        size={9}
        css={{ textAlign: "center" }}
      >
        Payment History
      </Typography>

      <Spacer space={16} />

      {orders.data?.edges ? (
        <Box
          css={{
            fontFamily: "$body",
            "& > *": {
              px: "$4",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 200px 150px 150px",
              alignItems: "center",
            },
          }}
        >
          <Box
            css={{
              py: "$3",
              fontWeight: "bold",
              bg: "$accent",
              borderRadius: "$xl",
            }}
          >
            <Box css={{ textAlign: "left" }}>Order ID</Box>
            <Box css={{ textAlign: "left", pl: "$16" }}>Date</Box>
            <Box css={{ textAlign: "center" }}>Status</Box>
            <Box css={{ textAlign: "center" }}>Subscription</Box>
            <Box css={{ textAlign: "right" }}>Total</Box>
          </Box>

          {orders.data.edges?.map(({ node: order }) => {
            return (
              <Box
                key={order.id}
                css={{
                  py: "$3",
                  mt: "$5",
                  border: "1px solid $black",
                  borderRadius: "$lg",
                }}
              >
                <Box css={{ textAlign: "left" }}>{order.id}</Box>
                <Box css={{ textAlign: "left", pl: "$16" }}>
                  {dateTimeFormatter.format(new Date(order.createdAt))}
                </Box>
                <Box css={{ textAlign: "center" }}>
                  <Box
                    css={{
                      bg: "$green",
                      display: "inline-block",
                      px: "$3",
                      py: "$1",
                      borderRadius: "$md",
                    }}
                  >
                    Paid
                  </Box>
                </Box>
                <Box css={{ textAlign: "center" }}>{order.cart[0].name}</Box>
                <Box css={{ textAlign: "right" }}>
                  {new Intl.NumberFormat(undefined, {
                    style: "currency",
                    currency: order.total.currency,
                  }).format(order.total.gross)}
                </Box>
              </Box>
            );
          })}
        </Box>
      ) : (
        <Typography as="p" size={4}>
          No payments :(
        </Typography>
      )}
    </Box>
  );
};
