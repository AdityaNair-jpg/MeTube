import { categoriesRouter } from '@/modules/categories/server/procedures';
import { createTRPCRouter, protectedProcedure } from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
import { z } from 'zod';
import { commentsRouter } from '@/modules/comments/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedures';
import { videoViewsRouter } from '@/modules/video-views/server/procedures';
import { videoReactionsRouter } from '@/modules/video-reactions/server/procedures';
import { subscriptionsRouter } from '@/modules/subscriptions/server/procedures';


export const appRouter = createTRPCRouter({
    categories: categoriesRouter,
    studio: studioRouter,
    videos: videosRouter,
    comments: commentsRouter,
    videoViews: videoViewsRouter,
    videoReactions: videoReactionsRouter,
    subscriptions: subscriptionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
