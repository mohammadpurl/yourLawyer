"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
// import { createUser } from "@/lib/actions/patient.actions";
import { UserFormValidation } from "@/lib/validators/RegisterValidator";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import Link from "next/link";

export const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // حذف کاراکترهای غیرعددی
    let numericInput = input.replace(/^(\+98|0)?9\d{11}$/g, "");
    if (numericInput.length > 11) {
      numericInput = numericInput.slice(0, 11);
    }
    setPhone(numericInput);
  };
  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);

    try {
      const user = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      //   const newUser = await createUser(user);

      //   if (newUser) {
      //     router.push(`/patients/${newUser.$id}/register`);
      //   }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="firstName"
          label="نام"
          placeholder=""
          //   iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="lastName"
          label="نام خانوادگی"
          placeholder=""
          //   iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        {/* <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="شماره تماس"
            placeholder="(555) 123-4567"
          className="rounded-md border border-dark-500 "
        /> */}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="phone"
          label="شماره تماس"
          // placeholder="(555) 123-4567"
          // className="rounded-md border border-dark-500 "
          onChange={handlePhoneChange}
          value={phone}
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="ایمیل"
          placeholder="johndoe@gmail.com"
          //   iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <SubmitButton isLoading={isLoading}>ثبت نام</SubmitButton>
        <div className="flex gap-2">
          <p className="">قبلا در وکیل تو ثبت نام کرده اید؟ </p>
          <Link href={`/auth/login`} className="text-blue-500">
            وارد شوید
          </Link>
        </div>
      </form>
    </Form>
  );
};
