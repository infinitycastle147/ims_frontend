import React from "react";
import Swal from 'sweetalert2';
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormMessage } from "../components/ui/form";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { Login } from "../Services/AuthService";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../src/App";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string({
    message: "Please enter a valid password.",
  }),
  role: z.enum(["DeliveryMan", "Supplier", "WManager", "Customer"]).optional(),
});

export function LoginForm() {

  const { setIsLoggedIn } = React.useContext(AppContext);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      role: "DeliveryMan", // Default role value
    },
  });

  const navigate = useNavigate();

  const time = new Date().getHours() < 12 ? "Morning" : "Afternoon";

  async function onSubmit(values) {
    try {
        const response = await Login({
            username: values?.email,
            password: values?.password,
        });
        
        if (response?.success && response?.message?.token) {
            localStorage.setItem('username', response?.message?.username);
            localStorage.setItem('role', response?.message?.role);
            localStorage.setItem('id', response?.message?.id);

            if ((response?.message?.role || '').toLowerCase() === (values?.role || '').toLowerCase()) {
                // Display a SweetAlert for successful login
                setIsLoggedIn(true);
                Swal.fire({
                    title: "Login successful",
                    icon: "success",
                }).then(() => {
                    // Navigate based on the user's role
                    switch (values?.role) {
                        case 'DeliveryMan':
                            window.location.href = "/Delivery_man/Dashboard";
                            break;
                        case 'Supplier':
                            window.location.href = "/Supplier/Home";
                            break;
                        case 'WManager':
                            window.location.href = "/Manager/Home";
                            break;
                        case 'Customer':
                            window.location.href = "/Customer"; // Assuming Customer has its own home page
                            break;
                        default:
                            // Redirect to a default dashboard or homepage if the role is not recognized
                            window.location.href = "/";
                    }
                });
            } else {
                Swal.fire({
                    title: "Login failed",
                    text: "Invalid role.",
                    icon: "error",
                });
            }
        } else {
            Swal.fire({
                title: "Login failed",
                text: response?.message || "Invalid email or password.",
                icon: "error",
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Error",
            text: "An error occurred while logging in.",
            icon: "error",
        });
    }
}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Good {time}, User! Ready to log in?
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col space-y-1.5">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="demo@gmail.com" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col space-y-1.5">
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col space-y-1.5">
                      <FormLabel htmlFor="role">Role</FormLabel>
                      <FormControl>
                        <select {...field} className="input-field">
                          <option value="DeliveryMan">DeliveryMan</option>
                          <option value="Supplier">Supplier</option>
                          <option value="WManager">WManager</option>
                          <option value="Customer">Customer</option> // Added Customer role
                        </select>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            {form.formState.isLoading || form.formState.isSubmitting ? (
              <Button disabled className="w-full">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Submit
              </Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
