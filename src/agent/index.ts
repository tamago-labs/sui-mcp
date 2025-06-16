import { DelegatedStake, getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { NameRecord } from "@mysten/suins/dist/cjs/types";
import { SwapQuote, TokenBalance, TransactionResponse } from "../types";
import { getAllBalances } from "../tools/sui/balance";
import { transferCoin } from "../tools/sui/transfer_coin";
import { ICreateTokenForm } from "../utils/move-template/coin";
import { deployCoin } from "../tools/sui/deploy_coin";
import { stake } from "../tools/sui/stake";
import { unstake } from "../tools/sui/unstake";
import { registerSns } from "../tools/sns/register";
import { getNameRecord } from "../tools/sns/get_name";
import { getStake } from "../tools/sui/get_stake";
import { getSuiConfig } from "../config"; 
import { getValidators, ValidatorInfo } from "../tools/sui/get_validators";

export class Agent {

    public client: SuiClient
    public wallet: Ed25519Keypair
    public walletAddress: string;
    public network: 'testnet' | 'mainnet'

    constructor() {

        const config = getSuiConfig()

        this.client = new SuiClient({
            url: getFullnodeUrl(config.network)
        });

        this.network = config.network;

        // Initialize wallet using private key only
        this.wallet = Ed25519Keypair.fromSecretKey(config.privateKey);
        this.walletAddress = this.wallet.getPublicKey().toSuiAddress();
    }

    async getWalletAddress(): Promise<string> {
        return this.walletAddress;
    }

    async getAllBalances(walletAddress: string | undefined): Promise<TokenBalance[]> {
        return getAllBalances(this, walletAddress || this.walletAddress)
    }

    async transferToken(
        tokenSymbol: string,
        to: string,
        amount: number,
    ): Promise<TransactionResponse> {
        return transferCoin(this, tokenSymbol, to, amount);
    }

    async deployToken(
        form: ICreateTokenForm
    ): Promise<TransactionResponse> {
        return deployCoin(this, form);
    }

    async stake(
        amount: number, poolId: string
    ): Promise<TransactionResponse> {
        return stake(this, amount, poolId);
    }

    async unstake(
        stakedSuiId: string
    ): Promise<TransactionResponse> {
        return unstake(this, stakedSuiId);
    }

    async getStake(): Promise<DelegatedStake[]> {
        return getStake(this, this.walletAddress);
    }

    async getValidators(
        sortBy: 'apy' | 'stake' | 'commission' = 'stake',
        limit?: number
    ): Promise<ValidatorInfo[]> {
        return getValidators(this, sortBy, limit);
    }

    async registerSns(
        name: string,
        years: number,
        payToken: "SUI" | "USDC" | "NS",
    ): Promise<TransactionResponse> {
        return registerSns(this, name, years, payToken);
    }

    async getSnsNameRecord(name: string): Promise<NameRecord | undefined> {
        return getNameRecord(this, name)
    }
 
}
