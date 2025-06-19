# Sui MCP

![NPM Version](https://img.shields.io/npm/v/@tamago-labs/sui-mcp)

**Sui MCP** is a Model Context Protocol (MCP) server implementation for the Sui blockchain, compatible with MCP clients like Claude Desktop or Cursor.ai. It allows managing wallet operations, DeFi protocols, and smart contract flows through comprehensive tools.

## Features

- **33+ MCP tools** covering account management, DeFi protocols, smart contract development, staking, and market data
- **Scallop lending protocol integration** for lending, borrowing, and position management
- **Advanced transaction management** with detailed analytics and account insights
- **Pyth price oracle integration** for real-time market data 
- **Stake to validators** with insights from AI

## Using with Claude Desktop

1. Install Claude Desktop if you haven't already
2. Open Claude Desktop settings
3. Add the Sui MCP client to your configuration:

```json
{
  "mcpServers": {
    "sui-mcp": {
      "command": "npx",
      "args": [
        "-y",
        "@tamago-labs/sui-mcp",
        "--sui_private_key=YOUR_PRIVATE_KEY", 
        "--sui_network=mainnet"
      ],
      "disabled": false
    }
  }
}
```

This Private Key mode is recommended for advanced users who can securely manage their private keys. The MCP client handles transactions locally without exposing any data to external servers.

## Use Cases

### 1. Advanced DeFi Portfolio Management 
The agent integrates with leading DeFi protocols and price oracles to help you:

- **Monitor and manage lending positions** on Scallop protocol
- **Execute lending and borrowing strategies** with automated risk management
- **Track real-time cryptocurrency prices** across multiple assets
- **Analyze transaction history** and optimize gas usage
- **Monitor health ratios** and liquidation risks

### 2. Professional DeFi Operations
The agent assists DeFi protocol users and managers with:
- **Multi-protocol position management** across lending platforms
- **Risk assessment and monitoring** with real-time health ratios
- **Transaction analysis and optimization** for cost efficiency
- **Automated DeFi strategy execution** with AI insights

## Available Tools (22+ Tools)

### Core Wallet Operations
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_get_wallet_address` | Retrieve your wallet address | "What's my wallet address?" |
| `sui_get_all_token_balances` | Get all token balances | "Show my token balances" |
| `sui_transfer_token` | Transfer tokens to another address | "Transfer 10 SUI to 0x123..." |

### Staking Operations
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_get_validators` | Get all active validators with performance data | "What are good validators to stake with?" |
| `sui_stake` | Stake SUI tokens to a validator | "Stake 100 SUI to validator X" |
| `sui_get_stake` | Get all staked SUI tokens | "Show my staked positions" |
| `sui_unstake` | Unstake SUI tokens | "Unstake my SUI from validator X" |

### Token Management
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_deploy_token` | Deploy a new token on Sui | "Create a token named MyToken with symbol MTK" |

### Scallop DeFi Protocol (6 Tools)
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_scallop_lend` | Lend tokens to earn interest | "Lend 100 SUI to Scallop protocol" |
| `sui_scallop_withdraw` | Withdraw lent tokens | "Withdraw 50 SUI from Scallop" |
| `sui_scallop_get_positions` | Get all lending positions | "Show my lending positions on Scallop" |
| `sui_scallop_borrow` | Borrow tokens using collateral | "Borrow 500 USDC using 100 SUI as collateral" |
| `sui_scallop_repay` | Repay borrowed tokens | "Repay 250 USDC to Scallop" |
| `sui_scallop_get_borrow_positions` | Get borrowing positions with health ratios | "Show my borrowing positions and health ratios" |

### Transaction Management (3 Tools)
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_get_transaction` | Get detailed transaction information | "Show details for transaction 0xabc..." |
| `sui_get_recent_transactions` | Get recent transactions with analytics | "Show my last 20 transactions with gas usage" |
| `sui_get_account_info` | Get comprehensive account information | "Show account summary including balance and activity" |

### SNS Domain Services
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_get_sns_name_record` | Get SNS domain information | "Look up info about domain.sui" |
| `sui_register_sns` | Register a SNS domain | "Register myname.sui for 2 years" |

### Price Data (Pyth) (3 Tools)
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `pyth_search_price_feeds` | Search for price feeds | "Find BTC price feeds on Pyth" |
| `pyth_get_prices` | Get prices by feed IDs | "Get the latest BTC and ETH prices" |
| `pyth_get_common_crypto_prices` | Get common crypto prices | "What are the current prices for BTC, ETH, SOL and SUI?" |

## Advanced DeFi Workflow Examples

### Complete Lending Strategy
```
User: "Help me optimize my DeFi portfolio: check my balances, lend some SUI to Scallop, 
       and monitor the position"

Agent: 
1. Uses sui_get_all_token_balances to check current holdings
2. Uses sui_scallop_lend to lend optimal amount of SUI
3. Uses sui_scallop_get_positions to show lending position and yield
4. Provides ongoing monitoring and optimization recommendations
```

### Risk Management Workflow
```
User: "I want to borrow USDC using my SUI as collateral, but monitor liquidation risk"

Agent:
1. Uses sui_scallop_borrow to deposit SUI and borrow USDC
2. Uses sui_scallop_get_borrow_positions to show health ratio
3. Sets up monitoring alerts for liquidation risk
4. Provides recommendations for position management
```

### Transaction Analysis
```
User: "Analyze my recent DeFi activity and optimize my gas usage"

Agent:
1. Uses sui_get_recent_transactions to fetch detailed history
2. Uses sui_get_transaction for in-depth analysis of each transaction
3. Analyzes gas patterns and provides optimization strategies
4. Shows DeFi protocol usage and efficiency metrics
```

## Background

Model Context Protocol (MCP), introduced by Claude AI in late 2024, solves the challenge of rapidly evolving AI applications in crypto. Unlike traditional agent kits that tightly couple AI models and components, MCP provides standardized interfaces that remain stable as models evolve.

Sui MCP leverages this architecture to provide professional-grade DeFi tools that work seamlessly across different AI interfaces, allowing users to manage complex DeFi strategies through natural language interactions.

## Troubleshooting

If you're using Ubuntu or another Linux environment with NVM, you'll need to manually configure the path. Follow these steps:

1. Install the Sui MCP under your current NVM-managed Node.js version.

```bash
npm install -g @tamago-labs/sui-mcp
```

2. Due to how NVM installs libraries, you may need to use absolute paths in your config. Replace the example values below with your actual username and Node version:

```json
{
  "mcpServers": {
    "sui-mcp": {
      "command": "/home/YOUR_NAME/.nvm/versions/node/YOUR_NODE_VERSION/bin/node",
      "args": [
        "/home/YOUR_NAME/.nvm/versions/node/YOUR_NODE_VERSION/bin/@tamago-labs/sui-mcp",
        "--sui_private_key=YOUR_PRIVATE_KEY",
        "--sui_network=mainnet"
      ]
    }
  }
}
```

3. Restart Claude Desktop and it should work now.

## Work with Local Files

When working with local files especially when using Sui CLI tools for smart contract development to create, build, and test a Move package on your machine—you’ll need to import an additional MCP server library of `filesystem` made by Claude team. Use with:

```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "${workspaceFolder}"
  ],
  "disabled": false
}
```

`workspaceFolder` refers to your working directory. You can provide more than one argument. Subfolders or specific files  can then be referenced in your AI prompt.

If you're using Linux and encounter issues during setup, please refer to the troubleshooting section.
 

## License
This project is licensed under the MIT License.
