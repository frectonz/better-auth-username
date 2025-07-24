import { env } from '$env/dynamic/private';

import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from './server/db';
import { username } from 'better-auth/plugins';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite'
	}),
	socialProviders: {
		linkedin: {
			clientId: env.LINKEDIN_CLIENT_ID,
			clientSecret: env.LINKEDIN_CLIENT_SECRET
		}
	},
	plugins: [username()]
});
