import { router } from "@/trpc/server/trpc"
import { authRouter } from "@/trpc/server/routers/auth"
import { userRouter } from "@/trpc/server/routers/user"
import { postRouter } from "@/trpc/server/routers/post"
import { commentRouter } from "@/trpc/server/routers/comment"

// ルーターの作成
export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  post: postRouter,
  comment: commentRouter,
})

// ルーターの型定義
export type AppRouter = typeof appRouter