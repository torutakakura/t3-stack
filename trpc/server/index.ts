import { router } from "@/trpc/server/trpc"
import { authRouter } from "@/trpc/server/routers/auth"
import { userRouter } from "@/trpc/server/routers/user"
import { postRouter } from "@/trpc/server/routers/post"
import { commentRouter } from "@/trpc/server/routers/comment"
import { subscriptionRouter } from "@/trpc/server/routers/subscription"

// ルーターの作成
export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  post: postRouter,
  comment: commentRouter,
  subscription: subscriptionRouter,
})

// ルーターの型定義
export type AppRouter = typeof appRouter