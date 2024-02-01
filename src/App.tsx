import { useState } from "react";
import NewsletterCard from "./components/NewsletterCard";
import SubmitSuccess from "./components/SubmitSuccess";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <main className="font-robotoregular text-charcoal-grey bg-dark-slate-grey h-screen flex items-center justify-center">
      {submitted == true ? (
        <SubmitSuccess
          onDismiss={() => {
            setSubmitted(false);
            setEmail("");
          }}
          email={email}
        />
      ) : (
        <NewsletterCard
          onSubmit={(email) => {
            setSubmitted(true);
            setEmail(email);
          }}
        />
      )}
    </main>
  );
}

export default App;
