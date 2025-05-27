"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SingUpForm } from "./components/sing-up-form";
import { LoginForm } from "./components/login-form";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar uma conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <SingUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
