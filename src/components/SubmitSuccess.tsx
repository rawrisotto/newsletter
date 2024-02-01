import iconSuccess from "/assets/images/icon-success.svg";

interface Props {
  onDismiss: () => void;
  email: string;
}

const SubmitSuccess = ({ onDismiss, email }: Props) => {
  return (
    <div className="bg-white h-fit max-w-96 p-10 rounded-3xl flex flex-col gap-4">
      <img className="h-11 mr-auto mb-2" src={iconSuccess} alt="Icon Success" />
      <h1 className="text-[2.5rem] font-robotobold font-bold leading-none">
        Thanks for subscribing!
      </h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it
        and click the button inside to confirm your subscription.
      </p>
      <button
        onClick={onDismiss}
        type="button"
        className="bg-dark-slate-grey text-white p-4 rounded-lg cursor-pointer hover:bg-gradient-to-r from-[#FF527B] to-[#FF6A3A] hover:shadow-lg hover:shadow-[#FF6A3A]"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default SubmitSuccess;
