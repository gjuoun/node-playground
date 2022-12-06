// import { trpcRSC } from "../pages/config/trpc/trpc.server";
import { ClientComponent } from "./component.c";
import { cookies, headers } from "next/headers";
import { getSessionRSC, trpcRSC } from "../pages/config/trpc/trpc.rsc";

const IndexPage = async () => {
  // console.log("server received", res);
  // console.log("rsc cookie", headers().get("cookie"));
  const res = await trpcRSC.hello({ text: "guo" });
  
  return (
    <div>
      index {res.greeting}
      <div>
        <ClientComponent />
      </div>
    </div>
  );
};

export default IndexPage;
