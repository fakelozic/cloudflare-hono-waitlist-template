import { useEffect, useState } from "react";
import { client } from "../../lib/client";
import { useQuery } from "@tanstack/react-query";

async function getHealth() {
  const res = await client.api.health.$get();
  return await res.json();
}

export function ServerStatus() {
  const { data, isPending, error } = useQuery({
    queryKey: ["status"],
    queryFn: getHealth,
  });

  return <div>{error ? "error" : isPending ? "..." : data.status}</div>;
}
