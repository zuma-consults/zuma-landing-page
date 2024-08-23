import React from "react";
import styles from "../style";
import { sendMsg } from "../assets";
import { toast } from "react-toastify";
import Loader from "./Loader";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("manwlevq");
  if (state.succeeded) {
    toast.success("Message Successfully sent! we will speak with you soon");
  }

  if (state.errors) {
    toast.error(`Error: ${state.errors.formErrors[0].message}`);
  }

  if (state.submitting) {
    return <Loader />;
  }


  return (
    <section
      id="contact"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col gap-3 w-full`}
    >
      <div className={`${styles.heading2}`}>Contact Us</div>
      <div className="w-full grid md:grid-cols-2 gap-3">
        <img src={sendMsg} alt="sendmsg" height={80}  data-aos="fade-right"/>
        <form className="grid w-full gap-3" onSubmit={handleSubmit}  data-aos="fade-left">
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            className="rounded p-1"
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            className="rounded p-1"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            className="rounded p-1"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="text-white w-full font-bold text-xl bg-blue-gradient rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
