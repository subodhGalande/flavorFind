import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Subscribe = () => {
  const emailForm = useRef();

  const serviceKey = import.meta.env.VITE_EMAIL_SERVICE_KEY;
  const templateKey = import.meta.env.VITE_EMAIL_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const [email, setEmail] = useState("");
  const [isSent, setisSent] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceKey, templateKey, emailForm.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setisSent("Email sent successfully!");
          setTimeout(() => {
            setisSent(null);
          }, 3000);
        },
        (error) => {
          setisSent("OOPS! error sending email");
          setTimeout(() => {
            setisSent(null);
          }, 3000);
        },
      );
  };

  return (
    <div className="relative mx-auto mt-20 flex h-72 w-11/12 flex-col justify-center gap-y-6 overflow-clip rounded-3xl bg-primary px-5 font-inter sm:h-96 sm:w-8/12 sm:justify-center sm:gap-y-10">
      <img
        src="/assets/plate.png"
        height="50px"
        width="200px"
        className="absolute -left-20 -top-14 rotate-180 sm:hidden"
      />
      <img
        src="/assets/plate.png"
        height="50px"
        width="300px"
        className="absolute -bottom-24 -right-20 hidden sm:block"
      />
      <img
        src="/assets/salad.png"
        height="50px"
        width="400px"
        className="absolute -bottom-40 -left-20 hidden sm:block"
      />
      <div className="space-y-4">
        <h1 className="px-10 text-center text-3xl font-bold sm:text-4xl">
          Deliciousness to your Inbox
        </h1>
        <p className="mx-auto px-2 text-center text-xs text-black/70 sm:w-1/2 sm:text-sm">
          Get the tastiest recipes delivered straight to your inbox. Savor the
          flavor with every email!
        </p>
      </div>
      <form
        ref={emailForm}
        className="relative mx-auto w-full rounded-xl border bg-white px-4 py-2 sm:h-14 sm:w-3/5"
        onSubmit={sendEmail}
      >
        <input
          type="email"
          value={email}
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
          className="h-full w-[80%] text-xs outline-none placeholder:text-sm placeholder:font-light sm:text-base"
          placeholder="enter email"
          required
        />
        <button
          type="submit"
          className="absolute bottom-1 right-1 z-20 rounded-lg bg-black px-3 py-2 text-xs text-white sm:bottom-[0.4rem] sm:right-2 sm:h-3/4 sm:px-4 sm:text-base"
        >
          Subscribe
        </button>
      </form>
      {isSent && (
        <div className="-mt-6 flex w-full justify-center py-4 text-xs text-black/50 sm:-mt-10 sm:text-sm">
          <p>{isSent}</p>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
