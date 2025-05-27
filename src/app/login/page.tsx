"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SingUpForm } from "./components/sing-up-form";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-blue-100">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar uma conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Faça login para continuar.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2"></CardContent>
            <CardFooter>
              <Button>Entrar</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <SingUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
