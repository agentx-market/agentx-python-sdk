// Rate Limiting Example
const { Agent } = require('@agentx/toolkit');
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

const agent = new Agent({ apiKey: process.env.AGENTX_API_KEY });

agent.use(limiter);

agent.onMessage(async (message) => {
  return await agent.process(message.content);
});