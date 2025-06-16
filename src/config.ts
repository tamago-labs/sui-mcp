#!/usr/bin/env node

import * as dotenv from 'dotenv';
import { SuiConfig } from "./types"

dotenv.config();

const getArgs = () =>
    process.argv.reduce((args: any, arg: any) => {
        // long arg
        if (arg.slice(0, 2) === "--") {
            const longArg = arg.split("=");
            const longArgFlag = longArg[0].slice(2);
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            args[longArgFlag] = longArgValue;
        }
        // flags
        else if (arg[0] === "-") {
            const flags = arg.slice(1).split("");
            flags.forEach((flag: any) => {
                args[flag] = true;
            });
        }
        return args;
    }, {});

export function validateEnvironment(): void {

    const args = getArgs();

    // Check if either private key or access key is provided
    // const hasPrivateKey = !!(args?.sui_private_key || process.env.SUI_PRIVATE_KEY); 

    // // Must have either private key or access key, but not necessarily both
    // if (!hasPrivateKey) {
    //     throw new Error(
    //         'Missing required environment variables: Either SUI_PRIVATE_KEY must be provided'
    //     );
    // }

    // Network is still required in both modes
    const hasSuiNetwork = !!(args?.sui_network || process.env.SUI_NETWORK);
    if (!hasSuiNetwork) {
        throw new Error('Missing required environment variable: SUI_NETWORK');
    }
}

export function getSuiConfig(): SuiConfig {
    validateEnvironment();

    const args = getArgs();

    const currentEnv = {
        SUI_PRIVATE_KEY: args?.sui_private_key || process.env.SUI_PRIVATE_KEY,
        SUI_NETWORK: args?.sui_network || process.env.SUI_NETWORK,
    };

    return {
        privateKey: currentEnv.SUI_PRIVATE_KEY || undefined,
        network: (currentEnv.SUI_NETWORK || 'mainnet') as 'testnet' | 'mainnet'
    };
}