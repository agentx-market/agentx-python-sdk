const { Agent } = require('@agentx/toolkit');

const agent = new Agent({
  apiKey: process.env.AGENTX_API_KEY
});

agent.onMessage(async (message) => {
  console.log('Received:', message);
  return 'Hello from AgentX!';
});

agent.start();