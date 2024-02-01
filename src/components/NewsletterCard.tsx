import imgMobile from "/assets/images/illustration-sign-up-mobile.svg";
import imgDesktop from "/assets/images/illustration-sign-up-desktop.svg";
import NewsletterForm from "./NewsletterForm";

interface Props {
  onSubmit: (email: string) => void;
}

const NewsletterCard = ({ onSubmit }: Props) => {
  return (
    <div className="flex flex-col md:flex-row bg-white items-center md:p-4 rounded-3xl">
      <img className="md:hidden w-full" src={imgMobile} alt="Image Mobile" />
      <img
        className="hidden md:block md:flex-1 md:order-2"
        src={imgDesktop}
        alt="Image Desktop"
      />
      <div className="p-8 flex flex-col gap-5 md:flex-1 md:order-1">
        <NewsletterForm onSubmit={onSubmit}/>
      </div>
    </div>
  );
};

export default NewsletterCard;
