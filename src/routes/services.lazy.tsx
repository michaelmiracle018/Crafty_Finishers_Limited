import Services from "@/pages/services";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/services")({
  component: Services,
});
