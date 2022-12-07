"use client";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

export const TestQuery = () => {
  const res = useQuery(["hello"], () => fetch("/api/hello"));

  useEffect(() => {
    console.log("client", res);
  }, [res]);

  return <div>test</div>;
};
