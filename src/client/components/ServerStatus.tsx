import { useEffect, useState } from "react";
import { client } from "../../lib/client";
import type { InferResponseType } from "hono";

type HealthResponse = InferResponseType<typeof client.api.health.$get>;

export function ServerStatus() {
  const [healthStatus, setHealthStatus] = useState<HealthResponse | null>(null);
  useEffect(() => {
    const health = async () => {
      const res = await client.api.health.$get();
      const data = await res.json();
      setHealthStatus(data);
    };
    health();
  }, []);

  return <div>{healthStatus === null ? "..." : healthStatus.status}</div>;
}
