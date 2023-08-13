"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface SuccessPageProps {}

const SuccessPage: React.FC<SuccessPageProps> = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const onClick = () => {
    router.push("/");
  };

  return (
    <div className="bg-white p-6 md:p-16 flex flex-col gap-y-8 h-screen md:h-fit w-full md:max-w-lg md:rounded-3xl">
      <Image
        src="/icon-success.svg"
        alt="Imagem"
        width={1052}
        height={1052}
        className="h-16 w-16 mt-20 md:mt-0"
      />

      <h2 className="text-4xl md:text-6xl text-primary font-bold">
        Thanks for subscribing!
      </h2>

      <p className="text-primary flex-1">
        A confirmation email has been sent to{" "}
        <span className="font-bold">{email}</span>. Please open it and click the
        button inside to confirm your subscription
      </p>

      <Button onClick={onClick} size="lg" className="w-full text-base">
        Dismiss message
      </Button>
    </div>
  );
};
export default SuccessPage;
