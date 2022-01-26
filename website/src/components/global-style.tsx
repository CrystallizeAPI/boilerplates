import { global } from "@/design-system";

export const globalStyles = global({
  body: {
    margin: 0,
  },
  figure: {
    marginBlock: 0,
    marginInline: 0,
  },
  "*": { margin: 0 },
  ".basket-quantity": {
    position: "absolute",
    fontWeight: "700",
    fontSize: "11px",
    top: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    right: "-6px",
    borderRadius: "50%",
    width: "25px",
    height: "25px",
    background: "$price",
    border: "3px solid #fff",
  },
});
