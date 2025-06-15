import { useEffect, useRef } from "react";

function RazarPayBtn() {
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.async = true;
    script.dataset.payment_button_id = "pl_QhZ0pqC16znB22"; // replace with your ID
    formRef.current.appendChild(script);
  }, []);

  return <form ref={formRef}></form>;
}

export default RazarPayBtn