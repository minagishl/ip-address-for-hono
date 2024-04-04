import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
	const realIP =
		c.req.raw.headers.get('Cf-Connecting-Ip') ||
		c.req.header('X-Forwarded-For') ||
		c.req.header('x-real-ip') ||
		'unknown';
	return c.text(realIP);
});

export default app;
