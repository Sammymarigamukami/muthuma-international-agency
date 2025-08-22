"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { authClient } from "@/lib/auth-client";
import { useAppContext } from "@/contexts/AppContext";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

interface ForgotPasswordFormProps extends React.ComponentProps<"div"> {}

export default function ForgotPasswordForm({ className, ...props }: ForgotPasswordFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { setShowUserResetPassword, setShowUserSignup, setShowUserLogin } = useAppContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsLoading(true);

  const { error } = await authClient.forgetPassword({
    email: values.email,
    redirectTo: "/reset-password",
  });

  if (error) {
    toast.error(error.message);
  } else {
    toast.success("Password reset email sent");
    setShowUserResetPassword(false);
  }

  setIsLoading(false);
}



  return (
    <div onClick={() => setShowUserResetPassword(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Forgot Password</CardTitle>
          <CardDescription>Enter your email to reset your password</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="size-4 animate-spin" /> : "Send Reset Link"}
              </Button>
            </form>
          </Form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              className="underline text-blue-600 hover:text-blue-800"
              onClick={() => {
                setShowUserSignup(true);
                setShowUserResetPassword(false);
                setShowUserLogin(true);
              }}
            >
              Sign up
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
