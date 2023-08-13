"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email({ message: "Valid email required" }).min(2),
});

interface NewsletterFormProps {}

const NewsletterForm: React.FC<NewsletterFormProps> = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/success?email=${values.email}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4 my-6"
      >
        <FormField
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Email address</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input
                  placeholder="email@company.com"
                  {...field}
                  className={cn(
                    "p-6",
                    fieldState.error &&
                      "border-red-500 bg-red-100 placeholder:text-red-500 focus:border-red-500 text-red-500"
                  )}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          size="lg"
          variant={
            form.control.getFieldState("email").invalid ? "default" : "edited"
          }
          className="font-semibold"
        >
          Subscribe to monthly newsletter
        </Button>
      </form>
    </Form>
  );
};
export default NewsletterForm;
