"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useState } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }).max(50),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone must be at least 10 digits" }).max(15),
  prescriptionFile: z.string().min(1, { message: "Prescription file is required" }),
  additionalInfo: z.string().min(10, { message: "Additional info must be at least 10 characters" }).max(1000).optional(),
});

export default function SubmitPrescriptionPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      prescriptionFile: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Submit Prescription</h1>

      {submitted ? (
        <p className="text-green-700 font-medium">
          Your prescription has been submitted successfully!
        </p>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div className="grid flex-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700 font-medium mb-1">First Name</label>
                <input
                {...form.register("firstName")}
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {form.formState.errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                )}
            </div>

            {/* Last Name */}
            <div>
                <label className="block text-gray-700 font-medium mb-1">Last Name</label>
                <input
                {...form.register("lastName")}
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {form.formState.errors.lastName && (
                <p className="text-red-600 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              {...form.register("email")}
              type="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {form.formState.errors.email && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              {...form.register("phone")}
              type="tel"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {form.formState.errors.phone && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.phone.message}</p>
            )}
          </div>

          {/* Prescription File */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Prescription File</label>
            <input
              {...form.register("prescriptionFile")}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              className="w-full"
            />
            {form.formState.errors.prescriptionFile && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.prescriptionFile.message}</p>
            )}
          </div>

          {/* Additional Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Additional Information (Optional)</label>
            <textarea
              {...form.register("additionalInfo")}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
            />
            {form.formState.errors.additionalInfo && (
              <p className="text-red-600 text-sm mt-1">{form.formState.errors.additionalInfo.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
          >
            Submit Prescription
          </button>
        </form>
      )}
    </div>
  );
}
