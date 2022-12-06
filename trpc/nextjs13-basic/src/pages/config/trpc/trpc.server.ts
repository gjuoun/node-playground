import { z, ZodError } from "zod";
import { TRPCError, initTRPC } from "@trpc/server";
import superjson from "superjson";
import { TrpcContext } from "./trpc.server.context";
import { getIronSession } from "iron-session";

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
export const trpcServer = initTRPC.context<TrpcContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zod:
          error.cause instanceof ZodError
            ? error.cause.flatten().fieldErrors
            : null,
      },
    };
  },
});

// Base router and procedure helpers
export const router = trpcServer.router;
export const publicProcedure = trpcServer.procedure;
export const middleware = trpcServer.middleware;

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      if (ctx.type === "server") {
        console.log("server user", ctx.session?.user);
      } else if (ctx.type === "server-component") {
        const session = await ctx.getRscSession!();
        console.log("rsc user", session?.user);
      }

      return {
        greeting: `hello ${input.text}`,
      };
    }),

  login: publicProcedure.input(z.object({})).mutation(async ({ ctx }) => {
    const user = {
      email: "jun@mistplay.com",
      name: "jun",
    };
    ctx.session!.user = {
      email: user.email,
      name: user.name,
    };
    await ctx.session?.save();
    return user;
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
