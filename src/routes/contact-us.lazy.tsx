import ContactUsPage from "@/pages/contact-us";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/contact-us")({
  component: ContactUsPage,
});
