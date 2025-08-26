import AboutUsPage from "@/pages/about-us-page/indext";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about-us")({
  component: AboutUsPage,
});
