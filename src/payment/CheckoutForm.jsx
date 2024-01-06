import { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { axiosBase } from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuthInfo from "../hooks/useAuthInfo";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [transitionId, setTransitionId] = useState("");
  const { user, setPremiumUser, setPremiumExpiration, setAccessPremium } =
    useAuthInfo();

  const { price, duration } = location.state;

  // implement worker functionality
  useEffect(() => {
    setTimeout(() => {
      setPremiumExpiration(0);
      setAccessPremium(false);
    }, duration * 60000);
  }, [transitionId, setAccessPremium, setPremiumExpiration, duration]);

  useEffect(() => {
    if (price > 0) {
      axiosBase.post("/payment", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, duration]);

  if (!location?.state) {
    return <Navigate to="/"></Navigate>;
  }

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!stripe || !elements) {
      return setLoading(false);
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return setLoading(false);
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setLoading(false);
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: confirmError.message,
      });
    } else {
      setTransitionId(paymentIntent.id);
      if (paymentIntent.status === "succeeded") {
        axiosBase
          .patch("/users/make-premium", { email: user?.email, duration })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              setLoading(false);
              setPremiumUser(true);
              const currentTime = new Date();
              const expirationTime = new Date(
                currentTime.getTime() + duration * 60000
              );
              setPremiumExpiration(expirationTime);
              Swal.fire({
                icon: "success",
                title: "Payment successfully completed",
                text: "Thank you for subscription",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
          });
      }
    }
  };
  return (
    <div className="py-16 px-2 bg-primary border-b">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl rounded mx-auto bg-neutral shadow px-4 py-16"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="small-btn bg-primary mt-4"
          type="submit"
          disabled={!stripe}
        >
          {loading ? (
            <span className="loading loading-spinner text-accent"></span>
          ) : (
            "Pay"
          )}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
