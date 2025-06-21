import { categoriesRouter } from '@/modules/categories/server/procedures';
import { createTRPCRouter, protectedProcedure } from '../init';
import { studioRouter } from '@/modules/studio/server/procedures';
import { z } from 'zod';
import { videosRouter } from '@/modules/videos/server/procedures';


export const appRouter = createTRPCRouter({
    categories: categoriesRouter,
    studio: studioRouter,
    videos: videosRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
