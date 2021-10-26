import { CheckoutModelInput } from "@/service-api/types.generated";

export interface PaymentProps {
  checkoutModel: CheckoutModelInput;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}
