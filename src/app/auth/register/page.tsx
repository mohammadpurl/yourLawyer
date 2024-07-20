import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { t } from "i18next";
import type { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { RegisterForm } from "@/components/forms/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/forms/LoginForm";

interface RegisterProps {}
const validationRegisterSchema = yup.object().shape({
  title: yup
    .string()
    .required(t("thisFieldIsRequired"))
    .max(149, t("enterValue150")),
  code: yup.string().optional(),
});

const Page = () => {
  return (
    <div className="">
      <div className="m-auto justify-center w-full sm:w-1/2 items-center min-h-full">
        <main className="align-middle mt-6">
          <div className="mb-12 text-center">
            <h1 className="text-black text-xl font-medium leading-tight tracking-tight">
              وکیل تو
            </h1>
          </div>
          <Tabs defaultValue="login" dir="rtl">
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="register" className="text-blue-500">
                ثبت نام
              </TabsTrigger>
              <TabsTrigger value="login" className="text-blue-500">
                ورود
              </TabsTrigger>
            </TabsList>
            <TabsContent value="register">
              <Card className="p-4 md:p-6 mx-auto max-w-[32rem] ">
                <CardHeader>
                  <CardTitle>ثبت نام</CardTitle>
                  <header className="mb-12">
                    <div
                      className="mt-6 mb-12"
                      data-testid="sign_up-subtitle-container"
                    >
                      <p>امروز شروع کنید!</p>
                    </div>
                  </header>
                </CardHeader>
                <CardContent className="border-none">
                  <RegisterForm />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>ورود</CardTitle>
                  {/* <CardDescription>
                    Change your password here. After saving, yl be logged out.
                  </CardDescription> */}
                </CardHeader>
                <CardContent className="space-y-2">
                  <LoginForm />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Page;
