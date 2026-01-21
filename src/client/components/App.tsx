import { QueryClientProvider } from "@tanstack/react-query";
import { ServerStatus } from "./ServerStatus";
import { sharedQueryClient } from "../../lib/queryClient";

export function App() {
  return (
    <QueryClientProvider client={sharedQueryClient}>
      <ServerStatus />
    </QueryClientProvider>
  );
}
