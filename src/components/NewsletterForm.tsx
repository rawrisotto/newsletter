import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import iconList from "/assets/images/icon-list.svg";

const schema = z.object({
  email: z.string().email({ message: "Valid email required" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (email: string) => void;
}

const NewsletterForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <h1 className="text-[2.5rem] md:text-[4rem] font-robotobold">
        Stay updated!
      </h1>

      <p>Join 60,000+ product managers receiving monthly updates on:</p>

      <ul className="flex flex-col gap-2 mb-6">
        <li className="flex gap-4">
          <img src={iconList} className="h-5" />
          <span>Product discovery and building what matters</span>
        </li>
        <li className="flex gap-4">
          <img src={iconList} className="h-5" />
          <span>Measuring to ensure updates are a success</span>
        </li>
        <li className="flex gap-4">
          <img src={iconList} className="h-5" />
          <span>And much more!</span>
        </li>
      </ul>

      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit((data) => {
          onSubmit(data.email);
        })}
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label className="text-xs font-bold" htmlFor="email">
              Email address
            </label>
            {errors.email && (
              <p className="text-xs text-tomato">{errors.email.message}</p>
            )}
          </div>
          <input
            {...register("email")}
            id="email"
            type="text"
            className={[
              "border p-4 rounded-lg",
              errors.email && "bg-tomato-200 border-tomato text-tomato",
            ].join(" ")}
            placeholder="email@company.com"
          />
        </div>
        <button
          type="submit"
          className="bg-dark-slate-grey text-white p-4 rounded-lg cursor-pointer hover:bg-gradient-to-r from-[#FF527B] to-[#FF6A3A] hover:shadow-lg hover:shadow-[#FF6A3A]"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </>
  );
};

export default NewsletterForm;
