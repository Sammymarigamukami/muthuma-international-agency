"use client";


import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppContext } from "@/contexts/AppContext";


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "@/server/user";
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react";
 
const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(8),
});


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login, showUserResetPassword, setShowUserResetPassword, setShowUserLogin, showUserLogin, redirectPath, setShowUserSignup } = useAppContext();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  if (!showUserLogin) return null;
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const { success, message } = await login(values.email, values.password);
 
    if (success) {
      toast.success(message as string);
      router.push(redirectPath || "/checkout");
      setShowUserLogin(false)
      console.log("Signed in")
    } else {
      toast.error(message as string)
      console.log("Invalid email or password")
    }
    setIsLoading(false);


  }




  return (
    <div onClick={() => setShowUserLogin(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div  
    onClick={(e) => e.stopPropagation()}
    className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
          <form
           onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-6">
              {/** <div className="flex flex-col gap-4">
                <Button
                variant="outline"
                className="w-full"
                type="button"
                onClick={signInWithGoogle}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
              </div> **/}
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                {/*<span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>**/}
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="m@example.com" {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                   />
                </div>
                <div className="grid gap-3">
                  <div className="flex flex-col gap-2">
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                        <Input placeholder="********" {...field} type="password" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                    />
                    <button
                      type="button"
                      className="ml-auto text-sm underline-offset-4 hover:underline text-blue-600"
                      onClick={() => {
                      setShowUserLogin(false);           
                      setShowUserResetPassword(true);
                      }}
                    >Forgot your password?</button>
                  </div>
                </div>
                <Button className="w-full" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : ("Login")}
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <button
                 type="button"
                 onClick={() =>
                  setShowUserSignup(true)}
                 className="underline underline-offset-4 text-blue-600 hover:text-blue-800"
                >
                 Sign up
                 </button>
              </div>
            </div>
          </form>
          </Form>
        </CardContent>
      </Card>
    </div>
    </div>
  )
}


export default LoginForm;