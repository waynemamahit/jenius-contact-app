import { SubmitHandler } from "react-hook-form";
import { ContactData } from "./Contact";
import { ContactForm } from "@/models/Contact";

export type ApiResponse<Data = ContactData> = {
  message: string;
  data?: Data;
};

export type OnSubmitType = SubmitHandler<ContactForm>;
