import { createTRPCReact } from "@trpc/react-query";

import type { AppRouter } from "@canvydocs/api";

export const api = createTRPCReact<AppRouter>();

export { type RouterInputs, type RouterOutputs } from "@canvydocs/api";
