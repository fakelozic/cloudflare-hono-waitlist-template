import { QueryClient } from "@tanstack/react-query";

// Create the client instance ONCE here and export it
export const sharedQueryClient = new QueryClient();
