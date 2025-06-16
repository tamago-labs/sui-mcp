# Sui MCP

![NPM Version](https://img.shields.io/npm/v/@tamago-labs/sui-mcp)

**Sui MCP** is a Model Context Protocol (MCP) server implementation for the Sui blockchain, compatible with MCP clients like Claude Desktop or Cursor.ai. It allows managing wallet operations and smart contract flows through the SUI CLI.

## Features

- 20+ MCP tools covering account management, smart contract development, staking, token operations and market data
- Token swaps on Mainnet via the Cetus DEX Aggregator
- Pyth price oracle integration for real-time market data
- Sui CLI integration for smart contract development and testing
- Stake to validators with insights from AI


## Using with Claude Desktop

1. Install Claude Desktop if you haven't already
2. Open Claude Desktop settings
3. Add the Sui MCP client to your configuration:

```
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

### 1. DeFi Portfolio Management 
The agent connects to Pyth price oracles and external sources to help you:

- Monitor real-time cryptocurrency prices across multiple assets
- Compare prices across different platforms for optimal trading opportunities
- Execute token swaps via Cetus Aggregator (removed)

*Example:*

![Screenshot from 2025-05-18 18-08-37](https://github.com/user-attachments/assets/f03ca84a-6d1b-44c0-adad-86dfcebd375b)

![Screenshot from 2025-05-18 18-11-29](https://github.com/user-attachments/assets/c98aa7fe-2be2-417c-ba76-026c26856ce4)

### 2. Smart Contract Development & Testing Assistance
The agent integrates with the Sui CLI to help developers:
- Analyze existing Move code and suggest improvements
- Generate comprehensive test cases for smart contracts
- Publish and upgrade packages directly through AI conversation

*Example:*

![Screenshot from 2025-05-18 18-13-38](https://github.com/user-attachments/assets/a819e29a-ac59-4e3c-a82e-28262e5ba445)

![Screenshot from 2025-05-18 18-14-05](https://github.com/user-attachments/assets/5da84b52-8e4f-4c53-845d-7a32a928844a)

![Screenshot from 2025-05-18 18-14-20](https://github.com/user-attachments/assets/24d91eee-97db-4e90-819f-26a8af5ba2c1)

![Screenshot from 2025-05-18 18-14-34](https://github.com/user-attachments/assets/f667364f-da84-4eb5-a84b-e9854ffeab0d)


### 3. Protocol Governance & Parameter Management
The agent assists DeFi protocol managers with:

- Checking external sources to determine optimal parameters based on current market conditions
- For example, in collateralization protocols, The agent can analyze asset prices to suggest better collateral ratio settings for smart contracts
- Then propose new governance parameters through AI conversations

*Example:*

![Screenshot from 2025-05-22 08-02-10](https://github.com/user-attachments/assets/20366f56-ab0d-4ebf-9e2e-ee3e2c048bbf)


## Background

Today, when building AI applications—especially those focused on crypto, we often rely on agent kits based on Langchain. These kits tightly couple the AI model and components, requiring frequent updates, otherwise, the application risks becoming non-functional within a few months or even weeks.

Model Context Protocol (MCP), introduced by Claude AI in late 2024, has quickly become popular today. It solves this issue by integrating directly with AI interfaces, allowing users to easily switch to the latest models and interact with Web3 through standardized tools. 

## Available Tools

### Wallet Operations
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_get_wallet_address` | Retrieve your wallet address | "What's my wallet address?" |
| `sui_get_all_balances` | Get all token balances | "Show my token balances" |

### Staking Operations
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_get_validators` | Get all active validators | "What are good validator to stake with?" |
| `sui_stake` | Stake SUI tokens to a validator | "Stake 100 SUI to validator X" |
| `sui_get_stake` | Get all staked SUI tokens | "Show my staked positions" |
| `sui_unstake` | Unstake SUI tokens | "Unstake my SUI from validator X" |

### Token Management
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_deploy_token` | Deploy a new token on Sui | "Create a token named MyToken with symbol MTK" |
| `sui_transfer_token` | Transfer tokens to another address | "Transfer 10 SUI to 0x123..." |

### SNS Domain Services
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_get_sns_name_record` | Get SNS domain information | "Look up info about domain.sui" |
| `sui_register_sns` | Register a SNS domain | "Register myname.sui for 2 years" |

### Sui CLI Integration
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `sui_cli_publish` | Deploy a Move package to the network |"Deploy a Move package on provided folder to the network"|
| `sui_cli_move_test` | Run Move unit tests on the folder | "Run tests for my smart contract on provided folder" |
| `sui_cli_move_new` | Create a new Move project | "Help create a new move project name my-project-test" |
| `sui_cli_move_build` | Build a Move package | "Help build the package on the provided folder" |
| `sui_cli_call` | Call a Move function | "Call the package 0x1234 on update_k() with this args [10000]" |
| `sui_cli_active_env` | Get the currently active Sui network environment | "Which network of Sui CLI connected to?" |
| `sui_cli_active_address` | Get the active address on Sui CLI | "Get active address on Sui CLI?" |
| `sui_cli_addresses` | List all wallet addresses, their aliases | "List all wallets on Sui CLI?" |
| `sui_cli_switch_address` | Change the active address | "Change active address on Sui CLI to 0x456" |

### Price Data (Pyth)
| Tool Name | Description | Example Usage |
|-----------|-------------|---------------|
| `pyth_search_price_feeds` | Search for price feeds | "Find BTC price feeds on Pyth" |
| `pyth_get_prices` | Get prices by feed IDs | "Get the latest BTC and ETH prices" |
| `pyth_get_common_crypto_prices` | Get common crypto prices | "What are the current prices for BTC, ETH, SOL and SUI?" |


## Troubleshooting

If you're using Ubuntu or another Linux environment with NVM, you'll need to manually configure the path. Follow these steps:

1. Install the Sui MCP under your current NVM-managed Node.js version.

```
npm install -g @tamago-labs/sui-mcp
```

2. Due to how NVM installs libraries, you may need to use absolute paths in your config. Replace the example values below with your actual username and Node version:

```
{
  "mcpServers": {
    "sui-mcp": {
      "command": "/home/YOUR_NAME/.nvm/versions/node/YOUR_NODE_VERSION/bin/node",
      "args": [
        "/home/YOUR_NAME/.nvm/versions/node/YOUR_NODE_VERSION/bin/@tamago-labs/sui-mcp",
        "--sui_private_key=YOUR_ACCESS_KEY",
        "--sui_network=mainnet"
      ]
    }
  }
}
```

3. Restart Claude Desktop and it should work now.

## Work with Local Files

When working with local files especially when using Sui CLI tools for smart contract development to create, build, and test a Move package on your machine—you’ll need to import an additional MCP server library of `filesystem` made by Claude team. Use with:

```
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

