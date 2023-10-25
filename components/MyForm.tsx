"use client";

import emailJs from "@emailjs/browser";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

export default function MyForm() {
  const [isLoading, setIsLoading] = useState(false)
  interface MyFormValues {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const serviceId: any = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId: any = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicId: any = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const handleSubmit = (values: MyFormValues) => {
    setIsLoading(true)
    emailJs
      .send(
        serviceId,
        templateId,
        {
          user_name: values.name,
          user_email: values.email,
          user_phone: values.phone,
          message: values.message,
        },
        publicId
      )
      .then((res) => {
        toast.success("Successfully sent")
      }).catch(error => {
        toast.warn("Failed to send")
      }).finally(() => {
        formik.resetForm()
        setIsLoading(false)
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      phone: Yup.number().required(),
      message: Yup.string().required(),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <form className="my-4 text-white" onSubmit={formik.handleSubmit}>
      <div className="my-2">
        
        <label htmlFor="name" className="block text-sm pb-1 mr-auto">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter your name"
          className="w-3/4 border-none rounded-md focus:border-b-[#FADBBA] focus:ring-[#FADBBA] bg-[#262121] p-2"
        />
      </div>
      <div className="my-2">
        <label htmlFor="email" className="block text-sm pb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Enter your email"
          className="w-3/4 border-none rounded-md bg-[#262121] focus:border-b-[#FADBBA] focus:ring-[#FADBBA] p-2"
        />
      </div>
      <div className="my-2">
        <label htmlFor="phone" className="block text-sm pb-1">
          Phone
        </label>
        <input
          type="number"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Enter your phone number"
          className="w-3/4 border-none rounded-md focus:border-b-[#FADBBA] bg-[#262121] focus:ring-[#FADBBA] p-2"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm pb-1">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          className="w-3/4 border-none rounded-md focus:border-b-[#FADBBA] focus:ring-[#FADBBA] bg-[#262121] p-2"
          placeholder="Write your message"
          rows={3}
        ></textarea>
        <button
        disabled={isLoading || !!Object.keys(formik.errors).length }
          type="submit"
          className="block text-black w-3/4 bg-[#FADBBA] disabled:bg-gray-700 p-2 my-4 rounded-md font-semibold text-xl capitalize"
        >
          {isLoading ? "loading" : "submit"}
        </button>
      </div>
    </form>
  );
}
