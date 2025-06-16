import { Agent } from '../agent';
import { getSuiConfig } from '../config';

describe('Sui MCP Migration Test', () => {
  test('should create agent with private key', () => {
    // Mock environment variables
    process.env.SUI_PRIVATE_KEY = '0x' + 'a'.repeat(64); // Mock private key
    process.env.SUI_NETWORK = 'testnet';

    expect(() => {
      const config = getSuiConfig();
      expect(config.privateKey).toBeDefined();
      expect(config.network).toBe('testnet');
      
      const agent = new Agent();
      expect(agent.walletAddress).toBeDefined();
      expect(agent.wallet).toBeDefined();
    }).not.toThrow();
  });

  test('should validate environment correctly', () => {
    // Clear env vars
    delete process.env.SUI_PRIVATE_KEY;
    delete process.env.SUI_NETWORK;

    const { validateEnvironment } = require('../config');
    
    expect(() => {
      validateEnvironment();
    }).toThrow('Missing required environment variable: SUI_PRIVATE_KEY must be provided');
  });
});
