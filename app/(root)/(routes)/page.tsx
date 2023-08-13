"use client";

import Image from "next/image";

import NewsletterForm from "@/components/newsletter-form";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const rawData = [
    { text: "Product discovery and building what matters" },
    { text: "Measuring to ensure updates are a success" },
    { text: "And much more!" },
  ];

  return (
    <div className="md:p-6 max-w-4xl w-full overflow-hidden h-screen md:h-fit bg-white flex items-center flex-col md:flex-row md:rounded-3xl">
      <div className="md:hidden relative w-full">
        <Image
          src="/bg-mobile.svg"
          alt="Image"
          width={1052}
          height={1052}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col flex-1 max-w-[512px] p-4 py-12 md:p-12">
        <h2 className="text-4xl md:text-[50px] leading-[1] font-bold text-primary">
          Stay updated!
        </h2>
        <p className="text-primary my-6">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className="flex flex-col space-y-2">
          {rawData.map((data) => (
            <div
              key={data.text}
              className="flex items-center gap-x-4 font-medium"
            >
              <Image
                src="/icon-success.svg"
                alt="Imagem"
                width={1052}
                height={1052}
                className="h-5 w-5"
              />
              <span className="text-primary">{data.text}</span>
            </div>
          ))}
        </div>

        <NewsletterForm />
      </div>
      <div className="hidden md:flex relative flex-1">
        <Image
          src="/bg-web.svg"
          alt="Image"
          width={1052}
          height={1052}
          className="w-full"
        />
      </div>
    </div>
  );
};
export default HomePage;
