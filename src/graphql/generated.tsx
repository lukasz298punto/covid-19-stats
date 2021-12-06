import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: any;
  /**
   * Represents fractional signed whole numeric values.
   * Since the value may exceed the size of a 32-bit integer, it's encoded as a string.
   */
  DecimalNumber: any;
  /**
   * Represents fractional signed whole numeric values.
   * Since the value may exceed the size of a 32-bit integer, it's encoded as a string.
   */
  DecimalNumberAsDiv: any;
  /** An ISO 8601-encoded date */
  ISO8601Date: any;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

/** Account */
export type Account = {
  __typename?: 'Account';
  /** Account ID */
  id: Scalars['String'];
  /** Account number, the equivalent of a human-friendly public key */
  num: Scalars['Int'];
  /** Realm number  */
  realmId: Scalars['Int'];
  /** Shard number */
  shardId: Scalars['Int'];
};

/** Solana Action */
export type Action = {
  __typename?: 'Action';
  name: Scalars['String'];
  type: Scalars['String'];
};

/** Blockchain address */
export type Address = {
  __typename?: 'Address';
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
};

/** Address selector */
export type AddressSelector = {
  /** In the list of Addresses */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Equal to Address */
  is?: InputMaybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: InputMaybe<Scalars['String']>;
  /** Not in the list of Addresses */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Address selector */
export type AddressSelectorIn = {
  /** In the list of Addresses */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Equal to Address */
  is?: InputMaybe<Scalars['String']>;
};

/** Blockchain account with address and type */
export type AddressWithAccount = {
  __typename?: 'AddressWithAccount';
  /** Account ID */
  account: Scalars['String'];
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Account type */
  type: Scalars['String'];
};

/** Algorand Blockchain */
export type Algorand = {
  __typename?: 'Algorand';
  /** Basic information about address ( or smart contract ) */
  address: Array<AlgorandAddressInfo>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<AlgorandArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<AlgorandBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<AlgorandCoinpath>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<AlgorandSmartContractCalls>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<AlgorandTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<AlgorandTransfers>>;
};


/** Algorand Blockchain */
export type AlgorandaddressArgs = {
  address: Array<AddressSelectorIn>;
};


/** Algorand Blockchain */
export type AlgorandargumentsArgs = {
  any?: InputMaybe<Array<AlgorandArgumentFilter>>;
  argindex?: InputMaybe<ArgumentIndexSelector>;
  argument?: InputMaybe<Array<ArgumentSelector>>;
  caller?: InputMaybe<Array<AddressSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  reference?: InputMaybe<Array<AddressSelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<AddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txType?: InputMaybe<TxTypeSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Algorand Blockchain */
export type AlgorandblocksArgs = {
  any?: InputMaybe<Array<AlgorandBlockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  currentProtocol?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  nextProtocol?: InputMaybe<StringIdSelector>;
  options?: InputMaybe<QueryOptions>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Algorand Blockchain */
export type AlgorandcoinpathArgs = {
  currency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Algorand Blockchain */
export type AlgorandsmartContractCallsArgs = {
  any?: InputMaybe<Array<AlgorandSmartContractCallFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
};


/** Algorand Blockchain */
export type AlgorandtransactionsArgs = {
  any?: InputMaybe<Array<AlgorandTransactionFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  txCurrency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txSubtype?: InputMaybe<TxSubtypeSelector>;
  txType?: InputMaybe<TxTypeSelector>;
};


/** Algorand Blockchain */
export type AlgorandtransfersArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<AlgorandTransferFilter>>;
  currency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<Array<AddressSelector>>;
  sender?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<AlgorandTransferTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
};

/** Address detailed information for Algorand network */
export type AlgorandAddressInfo = {
  __typename?: 'AlgorandAddressInfo';
  /** Address */
  address?: Maybe<Address>;
  /** Current address balance */
  balance?: Maybe<Scalars['Float']>;
  /** Current pending rewards */
  pendingRewards?: Maybe<Scalars['Float']>;
  /** Current rewards */
  rewards?: Maybe<Scalars['Float']>;
  /** Current round */
  round?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<AlgorandSmartContract>;
  /** Current status */
  status?: Maybe<Scalars['String']>;
};

export type AlgorandArgumentFilter = {
  argindex?: InputMaybe<ArgumentIndexSelector>;
  argument?: InputMaybe<Array<ArgumentSelector>>;
  caller?: InputMaybe<Array<AddressSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  reference?: InputMaybe<Array<AddressSelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<AddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txType?: InputMaybe<TxTypeSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};

/** Arguments of Smart Contract Calls */
export type AlgorandArguments = {
  __typename?: 'AlgorandArguments';
  any?: Maybe<Scalars['String']>;
  /** Sequential index of value in array ( multi-dimensional) */
  argindex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash64?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<AlgorandSmartContract>;
  /** Transaction where call happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>;
  /** The Value of argument */
  value?: Maybe<Scalars['String']>;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsanyArgs = {
  of: AlgorandArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentscountArgs = {
  argindex?: InputMaybe<ArgumentIndexSelector>;
  argument?: InputMaybe<Array<ArgumentSelector>>;
  caller?: InputMaybe<Array<AddressSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  reference?: InputMaybe<Array<AddressSelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<AddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txType?: InputMaybe<TxTypeSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentscountBigIntArgs = {
  argindex?: InputMaybe<ArgumentIndexSelector>;
  argument?: InputMaybe<Array<ArgumentSelector>>;
  caller?: InputMaybe<Array<AddressSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  reference?: InputMaybe<Array<AddressSelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<AddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txType?: InputMaybe<TxTypeSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsmaximumArgs = {
  get?: InputMaybe<AlgorandArgumentsMeasureable>;
  of: AlgorandArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsminimumArgs = {
  get?: InputMaybe<AlgorandArgumentsMeasureable>;
  of: AlgorandArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentssmartContractArgs = {
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentstransactionArgs = {
  txFrom?: InputMaybe<Array<AddressSelector>>;
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentstxSenderArgs = {
  txSender?: InputMaybe<Array<AddressSelector>>;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentstxTypeArgs = {
  txType?: InputMaybe<Array<AlgorandTxType>>;
};


/** Arguments of Smart Contract Calls */
export type AlgorandArgumentsvalueArgs = {
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};

export enum AlgorandArgumentsMeasureable {
  /** Argument index */
  argument_index = 'argument_index',
  /** Argument value */
  argument_value = 'argument_value',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction Sender */
  tx_sender = 'tx_sender',
  /** Transaction type */
  tx_type = 'tx_type'
}

export type AlgorandBlockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  currentProtocol?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  nextProtocol?: InputMaybe<StringIdSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};

/** Blocks in Algorand blockchain */
export type AlgorandBlocks = {
  __typename?: 'AlgorandBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  currentProtocol?: Maybe<Scalars['String']>;
  /** Calendar date */
  date?: Maybe<Date>;
  frac: Scalars['BigInt'];
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  nextProtocol?: Maybe<Scalars['String']>;
  nextProtocolApprovals?: Maybe<Scalars['BigInt']>;
  nextProtocolSwitchOn?: Maybe<Scalars['BigInt']>;
  nextProtocolVoteBefore?: Maybe<Scalars['BigInt']>;
  /** Previous block hash */
  previousBlockHash: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Address>;
  rate?: Maybe<Scalars['Float']>;
  reward?: Maybe<Scalars['Float']>;
  seed?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  txnRoot: Scalars['String'];
  upgradeApprove?: Maybe<Scalars['Int']>;
  upgradePropose?: Maybe<Scalars['String']>;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlocksanyArgs = {
  of: AlgorandBlocksMeasureable;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlockscountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  currentProtocol?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  nextProtocol?: InputMaybe<StringIdSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<AlgorandBlocksUniq>;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlockscountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  currentProtocol?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  nextProtocol?: InputMaybe<StringIdSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<AlgorandBlocksUniq>;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlockshashArgs = {
  blockHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlocksheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlocksmaximumArgs = {
  get?: InputMaybe<AlgorandBlocksMeasureable>;
  of: AlgorandBlocksMeasureable;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlocksminimumArgs = {
  get?: InputMaybe<AlgorandBlocksMeasureable>;
  of: AlgorandBlocksMeasureable;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlocksproposerArgs = {
  proposer?: InputMaybe<Array<AddressSelector>>;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlocksrateArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currentProtocol?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  nextProtocol?: InputMaybe<StringIdSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlocksrewardArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currentProtocol?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nextProtocol?: InputMaybe<StringIdSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Algorand blockchain */
export type AlgorandBlockstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};

export enum AlgorandBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Block Reward */
  block_reward = 'block_reward',
  /** Date */
  date = 'date',
  /** Next protocol approvals */
  next_protocol_approvals = 'next_protocol_approvals',
  /** Block Proposer */
  proposer = 'proposer',
  /** Time */
  time = 'time'
}

export enum AlgorandBlocksUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique proposer count */
  proposers = 'proposers'
}

export enum AlgorandCallsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction Sender */
  tx_sender = 'tx_sender',
  /** Transaction type */
  tx_type = 'tx_type'
}

/** Coinpath */
export type AlgorandCoinpath = {
  __typename?: 'AlgorandCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
};


/** Coinpath */
export type AlgorandCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type AlgorandCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type AlgorandCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type AlgorandCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

/**
 * Currency selector in Algorand blockchain.
 *   Currency is selected by asset ID. To select ALGO use ID=0
 */
export type AlgorandCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['Int']>;
  /** Currency not */
  not?: InputMaybe<Scalars['Int']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export enum AlgorandNetwork {
  /** Algorand Mainnet (ALGO) */
  algorand = 'algorand',
  /** Algorand Betanet */
  algorand_betanet = 'algorand_betanet',
  /** Algorand Testnet */
  algorand_testnet = 'algorand_testnet'
}

/** Algorand smart contract */
export type AlgorandSmartContract = {
  __typename?: 'AlgorandSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract byte code */
  bytecode?: Maybe<Scalars['String']>;
  /** Smart Contract Deassembled source code */
  source?: Maybe<Scalars['String']>;
};

export type AlgorandSmartContractCallFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
};

/** Smart Contract Calls */
export type AlgorandSmartContractCalls = {
  __typename?: 'AlgorandSmartContractCalls';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Fee used in transaction call */
  fee?: Maybe<Scalars['Float']>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash64?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<AlgorandSmartContract>;
  /** Transaction where call happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Transaction type in which the transfer happened */
  txType?: Maybe<AlgorandTxType>;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallsanyArgs = {
  of: AlgorandCallsMeasureable;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallscountArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallsfeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallsmaximumArgs = {
  get?: InputMaybe<AlgorandCallsMeasureable>;
  of: AlgorandCallsMeasureable;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallsminimumArgs = {
  get?: InputMaybe<AlgorandCallsMeasureable>;
  of: AlgorandCallsMeasureable;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallssmartContractArgs = {
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallstransactionArgs = {
  txFrom?: InputMaybe<Array<AddressSelector>>;
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallstxSenderArgs = {
  txSender?: InputMaybe<Array<AddressSelector>>;
};


/** Smart Contract Calls */
export type AlgorandSmartContractCallstxTypeArgs = {
  txType?: InputMaybe<Array<AlgorandTxType>>;
};

export type AlgorandTransactionFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCurrency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txSubtype?: InputMaybe<TxSubtypeSelector>;
  txType?: InputMaybe<TxTypeSelector>;
};

/** Algorand transaction with attributes */
export type AlgorandTransactionWithAttributes = {
  __typename?: 'AlgorandTransactionWithAttributes';
  /** Block of the Output Transaction for this input */
  block?: Maybe<Scalars['Int']>;
  /** Transaction fee */
  fee?: Maybe<Scalars['Float']>;
  firstRound?: Maybe<Scalars['Int']>;
  /** Transaction rewards ( from )  */
  fromrewards?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  lastRound?: Maybe<Scalars['Int']>;
  lease?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Transfer transaction sender */
  sender?: Maybe<Address>;
  /** Transaction sub type */
  subtype?: Maybe<AlgorandTxSubType>;
  /** Transaction type in which the transfer happened */
  type?: Maybe<AlgorandTxType>;
};

/** Transactions in Algorand blockchain */
export type AlgorandTransactions = {
  __typename?: 'AlgorandTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Asset related to transaction */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  fee?: Maybe<Scalars['Float']>;
  firstRound?: Maybe<Scalars['Int']>;
  genesisHash?: Maybe<Scalars['String']>;
  genesisId?: Maybe<Scalars['String']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  poolerror?: Maybe<Scalars['String']>;
  /** Transaction sender */
  sender?: Maybe<Address>;
  /** Transaction sub type */
  subtype?: Maybe<AlgorandTxSubType>;
  /** Transaction type */
  type?: Maybe<AlgorandTxType>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionsanyArgs = {
  of: AlgorandTransactionsMeasureable;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionscountArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCurrency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txSubtype?: InputMaybe<TxSubtypeSelector>;
  txType?: InputMaybe<TxTypeSelector>;
  uniq?: InputMaybe<AlgorandTransactionsUniq>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCurrency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txSubtype?: InputMaybe<TxSubtypeSelector>;
  txType?: InputMaybe<TxTypeSelector>;
  uniq?: InputMaybe<AlgorandTransactionsUniq>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionscurrencyArgs = {
  txCurrency?: InputMaybe<Array<AlgorandCurrencySelector>>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionsfeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  time?: InputMaybe<DateTimeSelector>;
  txCurrency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txSubtype?: InputMaybe<TxSubtypeSelector>;
  txType?: InputMaybe<TxTypeSelector>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionshashArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionsindexArgs = {
  txIndex?: InputMaybe<Array<TxIndexSelector>>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionsmaximumArgs = {
  get?: InputMaybe<AlgorandTransactionsMeasureable>;
  of: AlgorandTransactionsMeasureable;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionsminimumArgs = {
  get?: InputMaybe<AlgorandTransactionsMeasureable>;
  of: AlgorandTransactionsMeasureable;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionssenderArgs = {
  txSender?: InputMaybe<Array<AddressSelector>>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionssubtypeArgs = {
  txType?: InputMaybe<TxSubtypeSelector>;
};


/** Transactions in Algorand blockchain */
export type AlgorandTransactionstypeArgs = {
  txType?: InputMaybe<TxTypeSelector>;
};

export enum AlgorandTransactionsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Fee value */
  fee = 'fee',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction Sender */
  tx_sender = 'tx_sender'
}

export enum AlgorandTransactionsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique currencies */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique TX senders count */
  senders = 'senders'
}

export type AlgorandTransferFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<Array<AddressSelector>>;
  sender?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<AlgorandTransferTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
};

export enum AlgorandTransferType {
  /** Close */
  close = 'close',
  /** Create Asset */
  create = 'create',
  /** Asset Freeze */
  freeze = 'freeze',
  /** Genesis Block */
  genesis = 'genesis',
  /** Reward */
  reward = 'reward',
  /** Send */
  send = 'send',
  /** Asset Unfreeze */
  unfreeze = 'unfreeze'
}

/** Select transfers by type */
export type AlgorandTransferTypeSelector = {
  /** Transfer Type in the list */
  in?: InputMaybe<Array<AlgorandTransferType>>;
  /** Transfer Type is */
  is?: InputMaybe<AlgorandTransferType>;
  /** Transfer Type not */
  not?: InputMaybe<AlgorandTransferType>;
  /** Transfer Type not in the list */
  notIn?: InputMaybe<Array<AlgorandTransferType>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfers = {
  __typename?: 'AlgorandTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  firstRound?: Maybe<Scalars['Int']>;
  lastRound?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transaction where transfer happened */
  transaction?: Maybe<AlgorandTransactionWithAttributes>;
  /** Transfer Type */
  transferType?: Maybe<AlgorandTransferType>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  receiver?: InputMaybe<Array<AddressSelector>>;
  sender?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<AlgorandTransferTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersanyArgs = {
  of: AlgorandTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransferscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<Array<AddressSelector>>;
  sender?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<AlgorandTransferTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransferscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<AlgorandCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<Array<AddressSelector>>;
  sender?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<AlgorandTransferTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<AddressSelector>>;
  txType?: InputMaybe<TxTypeSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransferscurrencyArgs = {
  currency?: InputMaybe<Array<AlgorandCurrencySelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersmaximumArgs = {
  get?: InputMaybe<AlgorandTransfersMeasureable>;
  of: AlgorandTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersminimumArgs = {
  get?: InputMaybe<AlgorandTransfersMeasureable>;
  of: AlgorandTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransfersreceiverArgs = {
  receiver?: InputMaybe<Array<AddressSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransferssenderArgs = {
  sender?: InputMaybe<Array<AddressSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransferstransactionArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type AlgorandTransferstransferTypeArgs = {
  transferType?: InputMaybe<Array<AlgorandTransferType>>;
};

export enum AlgorandTransfersMeasureable {
  /** Amount */
  amount = 'amount',
  /** Currency Asset ID */
  asset_id = 'asset_id',
  /** Block */
  block = 'block',
  /** Currency symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transfer type */
  transfer_type = 'transfer_type',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** TX Sender */
  tx_sender = 'tx_sender',
  /** Transaction type */
  tx_type = 'tx_type'
}

export enum AlgorandTxSubType {
  /** Close */
  close = 'close',
  /** Asset Configuration */
  configure = 'configure',
  /** Create */
  create = 'create',
  /** Asset Freeze */
  freeze = 'freeze',
  /** Key Reg */
  keyreg = 'keyreg',
  /** None */
  none = 'none',
  /** Send */
  send = 'send',
  /** Asset Unfreeze */
  unfreeze = 'unfreeze'
}

export enum AlgorandTxType {
  /** Asset Configuration */
  acfg = 'acfg',
  /** Asset Freeze or Unfreeze */
  afrz = 'afrz',
  /** Application Call */
  appl = 'appl',
  /** Asset Transfer */
  axfer = 'axfer',
  /** Genesis Block */
  genesis = 'genesis',
  /** Key Reg */
  keyreg = 'keyreg',
  /** Pay */
  pay = 'pay'
}

export enum AmountAggregateFunction {
  /** Any value */
  any = 'any',
  /** Last value */
  anyLast = 'anyLast',
  /** Average */
  average = 'average',
  /** Maximum */
  maximum = 'maximum',
  /** Median */
  median = 'median',
  /** Minimum */
  minimum = 'minimum',
  /** Sum (total) */
  sum = 'sum',
  /** Unique estimate fast */
  unique = 'unique',
  /** Unique exact */
  uniqueExact = 'uniqueExact'
}

/** Select by amount */
export type AmountSelector = {
  /** Amount in range */
  between?: InputMaybe<Array<Scalars['Float']>>;
  /** Amount greater than */
  gt?: InputMaybe<Scalars['Float']>;
  /** Amount greater or equal than */
  gteq?: InputMaybe<Scalars['Float']>;
  /** Amount in the list */
  in?: InputMaybe<Array<Scalars['Float']>>;
  /** Amount is */
  is?: InputMaybe<Scalars['Float']>;
  /** Amount less than */
  lt?: InputMaybe<Scalars['Float']>;
  /** Amount less or equal than */
  lteq?: InputMaybe<Scalars['Float']>;
  /** Amount not */
  not?: InputMaybe<Scalars['Float']>;
  /** Amount not in the list */
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

/** Selector of index of argument in call */
export type ArgumentIndexSelector = {
  /** Tx index in the list */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Tx index is */
  is?: InputMaybe<Scalars['Int']>;
  /** Tx index not */
  not?: InputMaybe<Scalars['Int']>;
  /** Tx index not in the list */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** Argument of Smart contract method or event */
export type ArgumentName = {
  __typename?: 'ArgumentName';
  /** Name */
  name: Scalars['String'];
  /** Type */
  type: Scalars['String'];
};

/** Argument name and value of smart contract call or event */
export type ArgumentNameValue = {
  __typename?: 'ArgumentNameValue';
  /** Argument name */
  argument: Scalars['String'];
  /** Argument data type */
  argumentType: Scalars['String'];
  /** Sequential index of value in array ( multi-dimensional) */
  index: Scalars['String'];
  /** Value as String */
  value: Scalars['String'];
};

/** Selector of argument for smart contract method or event */
export type ArgumentSelector = {
  /** Argument in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Argument is */
  is?: InputMaybe<Scalars['String']>;
  /** Argument not */
  not?: InputMaybe<Scalars['String']>;
  /** Argument not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Selector of argument type for smart contract method or event */
export type ArgumentTypeSelector = {
  /** Argument type in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Argument type is */
  is?: InputMaybe<Scalars['String']>;
  /** Argument type not */
  not?: InputMaybe<Scalars['String']>;
  /** Argument type not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Argument value of smart contract call or event */
export type ArgumentValue = {
  __typename?: 'ArgumentValue';
  /** Value as Address */
  address?: Maybe<EthereumAddressInfo>;
  /** Value as String */
  value: Scalars['String'];
};

/** Selector of value of argument for smart contract method or event */
export type ArgumentValueSelector = {
  /** Value in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Value is */
  is?: InputMaybe<Scalars['String']>;
  /** Value not */
  not?: InputMaybe<Scalars['String']>;
  /** Value not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export enum BaseCurrencyEnum {
  /** Bitcoin */
  BTC = 'BTC',
  /** Ethereum */
  ETH = 'ETH',
  /** Dollar */
  USD = 'USD',
  /** Tether USDT */
  USDT = 'USDT'
}

/** Select by ID with BigInt datatype */
export type BigIntIdSelector = {
  /** ID in range */
  between?: InputMaybe<Array<Scalars['BigInt']>>;
  /** ID greater than */
  gt?: InputMaybe<Scalars['BigInt']>;
  /** ID greater or equal than */
  gteq?: InputMaybe<Scalars['BigInt']>;
  /** ID in the list */
  in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** ID is */
  is?: InputMaybe<Scalars['BigInt']>;
  /** ID less than */
  lt?: InputMaybe<Scalars['BigInt']>;
  /** ID less or equal than */
  lteq?: InputMaybe<Scalars['BigInt']>;
  /** ID not */
  not?: InputMaybe<Scalars['BigInt']>;
  /** ID not in the list */
  notIn?: InputMaybe<Array<Scalars['BigInt']>>;
};

/** Binance DEX */
export type Binance = {
  __typename?: 'Binance';
  /** Binance DEX Network Blocks */
  blocks?: Maybe<Array<BinanceBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<BinanceCoinpath>>;
  /** Binance DEX Network Exchange Orders */
  orders?: Maybe<Array<BinanceOrders>>;
  /** Binance DEX Network Trades between currencies */
  trades?: Maybe<Array<BinanceTrades>>;
  /** Binance DEX Network Transactions */
  transactions?: Maybe<Array<BinanceTransactions>>;
  /** Binance DEX Network Currency Transfers */
  transfers?: Maybe<Array<BinanceTransfers>>;
};


/** Binance DEX */
export type BinanceblocksArgs = {
  any?: InputMaybe<Array<BinanceBlockFilter>>;
  blockId?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  validatorFeeAddr?: InputMaybe<BinanceAddressSelector>;
  validatorMoniker?: InputMaybe<StringIdSelector>;
  validatorOperahraddress?: InputMaybe<BinanceAddressSelector>;
  validatorOperatorAddress?: InputMaybe<BinanceAddressSelector>;
};


/** Binance DEX */
export type BinancecoinpathArgs = {
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<BinanceAddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<BinanceAddressSelector>;
  sender?: InputMaybe<BinanceAddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Binance DEX */
export type BinanceordersArgs = {
  any?: InputMaybe<Array<BinanceOrderFilter>>;
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  orderOwner?: InputMaybe<Array<BinanceAddressSelector>>;
  orderSide?: InputMaybe<Array<OrderSideSelector>>;
  orderStatus?: InputMaybe<Array<OrderStatusSelector>>;
  orderTimeInForce?: InputMaybe<Array<OrderTimeInForceSelector>>;
  orderType?: InputMaybe<Array<OrderTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Binance DEX */
export type BinancetradesArgs = {
  any?: InputMaybe<Array<BinanceTradeFilter>>;
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  buyOrderId?: InputMaybe<Array<OrderIdSelector>>;
  buyer?: InputMaybe<Array<BinanceAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  sellOrderId?: InputMaybe<Array<OrderIdSelector>>;
  seller?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Binance DEX */
export type BinancetransactionsArgs = {
  any?: InputMaybe<Array<BinanceTransactionFilter>>;
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  deposit?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  proposalId?: InputMaybe<StringIdSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCode?: InputMaybe<IntIdSelector>;
  transactionSource?: InputMaybe<IntIdSelector>;
  transactionType?: InputMaybe<BinanceTransactionTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Binance DEX */
export type BinancetransfersArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<BinanceTransferFilter>>;
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  outputIndex?: InputMaybe<Array<OutputIndexSelector>>;
  receiver?: InputMaybe<Array<BinanceAddressSelector>>;
  sender?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  transferType?: InputMaybe<Array<BinanceTransferTypeSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

/** Binance Address should start with bnb and contain 42 chars. */
export type BinanceAddressSelector = {
  /** In the list of Addresses */
  in?: InputMaybe<Scalars['String']>;
  /** Equal to Address */
  is?: InputMaybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: InputMaybe<Scalars['String']>;
  /** Not in the list of Addresses */
  notIn?: InputMaybe<Scalars['String']>;
};

/** Block */
export type BinanceBlock = {
  __typename?: 'BinanceBlock';
  any?: Maybe<Scalars['String']>;
  /** Block ID */
  blockId?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Validator consensus pubkey */
  validatorConsensusPubkey?: Maybe<Scalars['String']>;
  /** Validator fee address */
  validatorFeeAddr?: Maybe<Address>;
  /** Validator moniker */
  validatorMoniker?: Maybe<Scalars['String']>;
  /** Validator operator HR address */
  validatorOperaHrAddress?: Maybe<Address>;
  /** Validator operator address */
  validatorOperatorAddress?: Maybe<Address>;
};


/** Block */
export type BinanceBlockanyArgs = {
  of: BinanceBlocksMeasureable;
};


/** Block */
export type BinanceBlockblockIdArgs = {
  blockId?: InputMaybe<StringIdSelector>;
};


/** Block */
export type BinanceBlockcountArgs = {
  blockId?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<BinanceBlockUniq>;
  validatorFeeAddr?: InputMaybe<BinanceAddressSelector>;
  validatorMoniker?: InputMaybe<StringIdSelector>;
  validatorOperahraddress?: InputMaybe<BinanceAddressSelector>;
  validatorOperatorAddress?: InputMaybe<BinanceAddressSelector>;
};


/** Block */
export type BinanceBlockcountBigIntArgs = {
  blockId?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<BinanceBlockUniq>;
  validatorFeeAddr?: InputMaybe<BinanceAddressSelector>;
  validatorMoniker?: InputMaybe<StringIdSelector>;
  validatorOperahraddress?: InputMaybe<BinanceAddressSelector>;
  validatorOperatorAddress?: InputMaybe<BinanceAddressSelector>;
};


/** Block */
export type BinanceBlockheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Block */
export type BinanceBlockmaximumArgs = {
  get?: InputMaybe<BinanceBlocksMeasureable>;
  of: BinanceBlocksMeasureable;
};


/** Block */
export type BinanceBlockminimumArgs = {
  get?: InputMaybe<BinanceBlocksMeasureable>;
  of: BinanceBlocksMeasureable;
};


/** Block */
export type BinanceBlocktimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type BinanceBlockvalidatorConsensusPubkeyArgs = {
  validatorConsensusPubkey?: InputMaybe<StringIdSelector>;
};


/** Block */
export type BinanceBlockvalidatorFeeAddrArgs = {
  validatorFeeAddr?: InputMaybe<BinanceAddressSelector>;
};


/** Block */
export type BinanceBlockvalidatorMonikerArgs = {
  validatorMoniker?: InputMaybe<StringIdSelector>;
};


/** Block */
export type BinanceBlockvalidatorOperaHrAddressArgs = {
  validatorOperaHrAddress?: InputMaybe<BinanceAddressSelector>;
};


/** Block */
export type BinanceBlockvalidatorOperatorAddressArgs = {
  validatorOperatorAddress?: InputMaybe<BinanceAddressSelector>;
};

export type BinanceBlockFilter = {
  blockId?: InputMaybe<StringIdSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  validatorFeeAddr?: InputMaybe<BinanceAddressSelector>;
  validatorMoniker?: InputMaybe<StringIdSelector>;
  validatorOperahraddress?: InputMaybe<BinanceAddressSelector>;
  validatorOperatorAddress?: InputMaybe<BinanceAddressSelector>;
};

export enum BinanceBlockUniq {
  /** Unique date count */
  dates = 'dates',
  /** Validator fee addresses */
  validator_fee_addresses = 'validator_fee_addresses',
  /** Validator operators */
  validator_operator_addresses = 'validator_operator_addresses'
}

export enum BinanceBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Validator moniker */
  validator_moniker = 'validator_moniker'
}

/** Coinpath */
export type BinanceCoinpath = {
  __typename?: 'BinanceCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
};


/** Coinpath */
export type BinanceCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type BinanceCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type BinanceCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type BinanceCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

/**
 * Binance token selector by tokenId.
 *     Native binance token has BNB symbol.
 *     Note that most Binance symbols has two dash separated parts, for example: 'TROY-9B8_BNB'
 */
export type BinanceCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type BinanceOrderFilter = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  orderOwner?: InputMaybe<Array<BinanceAddressSelector>>;
  orderSide?: InputMaybe<Array<OrderSideSelector>>;
  orderStatus?: InputMaybe<Array<OrderStatusSelector>>;
  orderTimeInForce?: InputMaybe<Array<OrderTimeInForceSelector>>;
  orderType?: InputMaybe<Array<OrderTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};

export enum BinanceOrderSide {
  /** Buy Side */
  buy = 'buy',
  /** Sell Side */
  sell = 'sell'
}

export enum BinanceOrderStatus {
  /** Ack */
  Ack = 'Ack',
  /** Canceled */
  Canceled = 'Canceled',
  /** Expired */
  Expired = 'Expired',
  /** Failed Blocking */
  FailedBlocking = 'FailedBlocking',
  /** Fully Fill */
  FullyFill = 'FullyFill',
  /** Ioc Expire */
  IocExpire = 'IocExpire',
  /** Ioc No Fill */
  IocNoFill = 'IocNoFill',
  /** Partial Fill */
  PartialFill = 'PartialFill'
}

export enum BinanceOrderTimeInForce {
  /** Good Till Expiry */
  GTE = 'GTE',
  /** Immediate Or Cancel */
  IOC = 'IOC'
}

export enum BinanceOrderType {
  /** Limit Order */
  LimitOrder = 'LimitOrder'
}

/** Binance DEX Order */
export type BinanceOrders = {
  __typename?: 'BinanceOrders';
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  baseCurrency?: Maybe<Currency>;
  /** Block where order transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Order ID */
  orderId?: Maybe<Scalars['String']>;
  /** Order owner address */
  orderOwner?: Maybe<Address>;
  /** Order Side */
  orderSide?: Maybe<BinanceOrderSide>;
  /** Order Status */
  orderStatus?: Maybe<BinanceOrderStatus>;
  /** Order Time In Force */
  orderTimeInForce?: Maybe<BinanceOrderTimeInForce>;
  /** Order Type */
  orderType?: Maybe<BinanceOrderType>;
  price?: Maybe<Scalars['Float']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  quoteCurrency?: Maybe<Currency>;
  /** Transaction where order created */
  transaction?: Maybe<TransactionHash>;
};


/** Binance DEX Order */
export type BinanceOrdersanyArgs = {
  of: BinanceOrdersMeasureable;
};


/** Binance DEX Order */
export type BinanceOrdersbaseAmountArgs = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  orderOwner?: InputMaybe<Array<BinanceAddressSelector>>;
  orderSide?: InputMaybe<Array<OrderSideSelector>>;
  orderStatus?: InputMaybe<Array<OrderStatusSelector>>;
  orderTimeInForce?: InputMaybe<Array<OrderTimeInForceSelector>>;
  orderType?: InputMaybe<Array<OrderTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Binance DEX Order */
export type BinanceOrdersbaseCurrencyArgs = {
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
};


/** Binance DEX Order */
export type BinanceOrdersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Binance DEX Order */
export type BinanceOrderscountArgs = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  orderOwner?: InputMaybe<Array<BinanceAddressSelector>>;
  orderSide?: InputMaybe<Array<OrderSideSelector>>;
  orderStatus?: InputMaybe<Array<OrderStatusSelector>>;
  orderTimeInForce?: InputMaybe<Array<OrderTimeInForceSelector>>;
  orderType?: InputMaybe<Array<OrderTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<BinanceOrdersUniq>;
};


/** Binance DEX Order */
export type BinanceOrderscountBigIntArgs = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  orderOwner?: InputMaybe<Array<BinanceAddressSelector>>;
  orderSide?: InputMaybe<Array<OrderSideSelector>>;
  orderStatus?: InputMaybe<Array<OrderStatusSelector>>;
  orderTimeInForce?: InputMaybe<Array<OrderTimeInForceSelector>>;
  orderType?: InputMaybe<Array<OrderTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<BinanceOrdersUniq>;
};


/** Binance DEX Order */
export type BinanceOrdersmaximumArgs = {
  get?: InputMaybe<BinanceOrdersMeasureable>;
  of: BinanceOrdersMeasureable;
};


/** Binance DEX Order */
export type BinanceOrdersminimumArgs = {
  get?: InputMaybe<BinanceOrdersMeasureable>;
  of: BinanceOrdersMeasureable;
};


/** Binance DEX Order */
export type BinanceOrdersorderIdArgs = {
  orderId?: InputMaybe<Array<OrderIdSelector>>;
};


/** Binance DEX Order */
export type BinanceOrdersorderOwnerArgs = {
  owner?: InputMaybe<Array<BinanceAddressSelector>>;
};


/** Binance DEX Order */
export type BinanceOrdersorderSideArgs = {
  orderSide?: InputMaybe<Array<OrderSideSelector>>;
};


/** Binance DEX Order */
export type BinanceOrdersorderStatusArgs = {
  orderStatus?: InputMaybe<Array<OrderStatusSelector>>;
};


/** Binance DEX Order */
export type BinanceOrdersorderTimeInForceArgs = {
  orderTimeInForce?: InputMaybe<Array<OrderTimeInForceSelector>>;
};


/** Binance DEX Order */
export type BinanceOrdersorderTypeArgs = {
  orderType?: InputMaybe<Array<OrderTypeSelector>>;
};


/** Binance DEX Order */
export type BinanceOrdersquoteAmountArgs = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  orderOwner?: InputMaybe<Array<BinanceAddressSelector>>;
  orderSide?: InputMaybe<Array<OrderSideSelector>>;
  orderStatus?: InputMaybe<Array<OrderStatusSelector>>;
  orderTimeInForce?: InputMaybe<Array<OrderTimeInForceSelector>>;
  orderType?: InputMaybe<Array<OrderTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Binance DEX Order */
export type BinanceOrdersquoteCurrencyArgs = {
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
};


/** Binance DEX Order */
export type BinanceOrderstransactionArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};

export enum BinanceOrdersMeasureable {
  /** Base Amount */
  base_amount = 'base_amount',
  /** Base currency */
  base_currency = 'base_currency',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Order ID */
  order_id = 'order_id',
  /** Order owner */
  order_owner = 'order_owner',
  /** Order side */
  order_side = 'order_side',
  /** Order status */
  order_status = 'order_status',
  /** Price */
  price = 'price',
  /** Quote Amount */
  quote_amount = 'quote_amount',
  /** Quote currency */
  quote_currency = 'quote_currency',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum BinanceOrdersUniq {
  /** Unique base currencies */
  base_currencies = 'base_currencies',
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique order ID count */
  orders = 'orders',
  /** Unique order owners */
  owners = 'owners',
  /** Unique quote currencies */
  quote_currencies = 'quote_currencies',
  /** Unique Transactions */
  txs = 'txs'
}

export type BinanceTradeFilter = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  buyOrderId?: InputMaybe<Array<OrderIdSelector>>;
  buyer?: InputMaybe<Array<BinanceAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  sellOrderId?: InputMaybe<Array<OrderIdSelector>>;
  seller?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

/** Binance DEX Trades */
export type BinanceTrades = {
  __typename?: 'BinanceTrades';
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  baseCurrency?: Maybe<Currency>;
  /** Block where trade transaction is included */
  block?: Maybe<Block>;
  /** Buy Order ID */
  buyOrderId?: Maybe<Scalars['String']>;
  /** Trade buyer address */
  buyer?: Maybe<Address>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  quoteCurrency?: Maybe<Currency>;
  /** Sell Order ID */
  sellOrderId?: Maybe<Scalars['String']>;
  /** Trade seller address */
  seller?: Maybe<Address>;
  /** Trade ID */
  tradeId?: Maybe<Scalars['String']>;
  /** Transaction where trade happened */
  transaction?: Maybe<TransactionHashIndex>;
};


/** Binance DEX Trades */
export type BinanceTradesanyArgs = {
  of: BinanceTradesMeasureable;
};


/** Binance DEX Trades */
export type BinanceTradesbaseAmountArgs = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  buyOrderId?: InputMaybe<Array<OrderIdSelector>>;
  buyer?: InputMaybe<Array<BinanceAddressSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  sellOrderId?: InputMaybe<Array<OrderIdSelector>>;
  seller?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Binance DEX Trades */
export type BinanceTradesbaseCurrencyArgs = {
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
};


/** Binance DEX Trades */
export type BinanceTradesblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Binance DEX Trades */
export type BinanceTradesbuyOrderIdArgs = {
  buyOrderId?: InputMaybe<Array<OrderIdSelector>>;
};


/** Binance DEX Trades */
export type BinanceTradesbuyerArgs = {
  buyer?: InputMaybe<Array<BinanceAddressSelector>>;
};


/** Binance DEX Trades */
export type BinanceTradescountArgs = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  buyOrderId?: InputMaybe<Array<OrderIdSelector>>;
  buyer?: InputMaybe<Array<BinanceAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  sellOrderId?: InputMaybe<Array<OrderIdSelector>>;
  seller?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<BinanceTradesUniq>;
};


/** Binance DEX Trades */
export type BinanceTradescountBigIntArgs = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  buyOrderId?: InputMaybe<Array<OrderIdSelector>>;
  buyer?: InputMaybe<Array<BinanceAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  sellOrderId?: InputMaybe<Array<OrderIdSelector>>;
  seller?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<BinanceTradesUniq>;
};


/** Binance DEX Trades */
export type BinanceTradesmaximumArgs = {
  get?: InputMaybe<BinanceTradesMeasureable>;
  of: BinanceTradesMeasureable;
};


/** Binance DEX Trades */
export type BinanceTradesminimumArgs = {
  get?: InputMaybe<BinanceTradesMeasureable>;
  of: BinanceTradesMeasureable;
};


/** Binance DEX Trades */
export type BinanceTradesquoteAmountArgs = {
  baseAmount?: InputMaybe<Array<AmountSelector>>;
  baseCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  buyOrderId?: InputMaybe<Array<OrderIdSelector>>;
  buyer?: InputMaybe<Array<BinanceAddressSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  price?: InputMaybe<Array<AmountSelector>>;
  quoteAmount?: InputMaybe<Array<AmountSelector>>;
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
  sellOrderId?: InputMaybe<Array<OrderIdSelector>>;
  seller?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Binance DEX Trades */
export type BinanceTradesquoteCurrencyArgs = {
  quoteCurrency?: InputMaybe<Array<BinanceCurrencySelector>>;
};


/** Binance DEX Trades */
export type BinanceTradessellOrderIdArgs = {
  sellOrderId?: InputMaybe<Array<OrderIdSelector>>;
};


/** Binance DEX Trades */
export type BinanceTradessellerArgs = {
  seller?: InputMaybe<Array<BinanceAddressSelector>>;
};


/** Binance DEX Trades */
export type BinanceTradestradeIdArgs = {
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
};


/** Binance DEX Trades */
export type BinanceTradestransactionArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};

export enum BinanceTradesMeasureable {
  /** Base Amount */
  base_amount = 'base_amount',
  /** Base currency */
  base_currency = 'base_currency',
  /** Block */
  block = 'block',
  /** Buy Order ID */
  buy_order_id = 'buy_order_id',
  /** Buyer */
  buyer = 'buyer',
  /** Date */
  date = 'date',
  /** Price */
  price = 'price',
  /** Quote Amount */
  quote_amount = 'quote_amount',
  /** Quote currency */
  quote_currency = 'quote_currency',
  /** Sell Order ID */
  sell_order_id = 'sell_order_id',
  /** Seller */
  seller = 'seller',
  /** Time */
  time = 'time',
  /** Trade ID */
  trade_id = 'trade_id',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum BinanceTradesUniq {
  /** Unique base currencies */
  base_currencies = 'base_currencies',
  /** Unique blocks */
  blocks = 'blocks',
  /** Buy Orders */
  buy_orders = 'buy_orders',
  /** Unique buyers count */
  buyers = 'buyers',
  /** Unique date count */
  dates = 'dates',
  /** Unique quote currencies */
  quote_currencies = 'quote_currencies',
  /** Sell Orders */
  sell_orders = 'sell_orders',
  /** Unique sellers count */
  sellers = 'sellers',
  /** Trades */
  trades = 'trades',
  /** Unique Transactions */
  txs = 'txs'
}

export type BinanceTransactionFilter = {
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  deposit?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  proposalId?: InputMaybe<StringIdSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCode?: InputMaybe<IntIdSelector>;
  transactionSource?: InputMaybe<IntIdSelector>;
  transactionType?: InputMaybe<BinanceTransactionTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
};

export enum BinanceTransactionType {
  /** Bind */
  BIND = 'BIND',
  /** Submit evidence */
  BSC_SUBMIT_EVIDENCE = 'BSC_SUBMIT_EVIDENCE',
  /** Burn */
  BURN = 'BURN',
  /** Cancel Order */
  CANCEL_ORDER = 'CANCEL_ORDER',
  /** Cross chain claim */
  CLAIM = 'CLAIM',
  /** Hash Timer Locked Claim */
  CLAIM_HTL = 'CLAIM_HTL',
  /** Create sidechain validator */
  CREATE_SIDECHAIN_VALIDATOR = 'CREATE_SIDECHAIN_VALIDATOR',
  /** Deposit */
  DEPOSIT = 'DEPOSIT',
  /** Hash Timer Locked Deposit */
  DEPOSIT_HTL = 'DEPOSIT_HTL',
  /** Edit sidechain validator */
  EDIT_SIDECHAIN_VALIDATOR = 'EDIT_SIDECHAIN_VALIDATOR',
  /** Freeze Token */
  FREEZE_TOKEN = 'FREEZE_TOKEN',
  /** Hash Timer Locked Transfer */
  HTL_TRANSFER = 'HTL_TRANSFER',
  /** Issue */
  ISSUE = 'ISSUE',
  /** Listing */
  LISTING = 'LISTING',
  /** Mini Token Issue */
  MINI_TOKEN_ISSUE = 'MINI_TOKEN_ISSUE',
  /** Mini Token Listing */
  MINI_TOKEN_LIST = 'MINI_TOKEN_LIST',
  /** Mini Token Set URI */
  MINI_TOKEN_SET_URI = 'MINI_TOKEN_SET_URI',
  /** Mint */
  MINT = 'MINT',
  /** New Order */
  NEW_ORDER = 'NEW_ORDER',
  /** Hash Timer Locked  Refund */
  REFUND_HTL = 'REFUND_HTL',
  /** Delegate for sidechain */
  SIDECHAIN_DELEGATE = 'SIDECHAIN_DELEGATE',
  /** ReDelegate for sidechain */
  SIDECHAIN_REDELEGATE = 'SIDECHAIN_REDELEGATE',
  /** Unbond from sidechain */
  SIDECHAIN_UNBOND = 'SIDECHAIN_UNBOND',
  /** Unjail from sidechain */
  SIDECHAIN_UNJAIL = 'SIDECHAIN_UNJAIL',
  /** Side chain deposit */
  SIDE_DEPOSIT = 'SIDE_DEPOSIT',
  /** Side chain submit poroposal */
  SIDE_SUBMIT_PROPOSAL = 'SIDE_SUBMIT_PROPOSAL',
  /** Side chain vote */
  SIDE_VOTE = 'SIDE_VOTE',
  /** Submit Proposal */
  SUBMIT_PROPOSAL = 'SUBMIT_PROPOSAL',
  /** Set Account Flag */
  SetAccountFlag = 'SetAccountFlag',
  /** Tiny Token Issue */
  TINY_TOKEN_ISSUE = 'TINY_TOKEN_ISSUE',
  /** Tiny Token Listing */
  TINY_TOKEN_LIST = 'TINY_TOKEN_LIST',
  /** Tiny Token Set URI */
  TINY_TOKEN_SET_URI = 'TINY_TOKEN_SET_URI',
  /** Transfer */
  TRANSFER = 'TRANSFER',
  /** Cross chain transfer */
  TRANSFER_OUT = 'TRANSFER_OUT',
  /** Time Lock */
  TimeLock = 'TimeLock',
  /** Time Relock */
  TimeRelock = 'TimeRelock',
  /** Time Unlock */
  TimeUnlock = 'TimeUnlock',
  /** UnBind */
  UNBIND = 'UNBIND',
  /** Unfreeze Token */
  UNFREEZE_TOKEN = 'UNFREEZE_TOKEN',
  /** Vote */
  VOTE = 'VOTE'
}

/** Select by transaction type */
export type BinanceTransactionTypeSelector = {
  /** Transaction Type in the list */
  in?: InputMaybe<Array<BinanceTransactionType>>;
  /** Transaction Type is */
  is?: InputMaybe<BinanceTransactionType>;
  /** Transaction Type not */
  not?: InputMaybe<BinanceTransactionType>;
  /** Transaction Type not in the list */
  notIn?: InputMaybe<Array<BinanceTransactionType>>;
};

/** Transaction */
export type BinanceTransactions = {
  __typename?: 'BinanceTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency issued in transaction */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Deposit amount in transaction */
  deposit?: Maybe<Scalars['Float']>;
  /** Transaction Description */
  description?: Maybe<Scalars['String']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** TX index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  /** Transaction Log */
  log?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Transaction Memo */
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Proposal ID */
  proposalId?: Maybe<Scalars['Int']>;
  /** Transaction Type */
  transactionCode?: Maybe<Scalars['Int']>;
  /** Transaction Source */
  transactionSource?: Maybe<TransactionSource>;
  /** Transaction Type */
  transactionType?: Maybe<BinanceTransactionType>;
};


/** Transaction */
export type BinanceTransactionsanyArgs = {
  of: BinanceTransactionsMeasureable;
};


/** Transaction */
export type BinanceTransactionsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction */
export type BinanceTransactionscountArgs = {
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  deposit?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  proposalId?: InputMaybe<StringIdSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCode?: InputMaybe<IntIdSelector>;
  transactionSource?: InputMaybe<IntIdSelector>;
  transactionType?: InputMaybe<BinanceTransactionTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<BinanceTransactionsUniq>;
};


/** Transaction */
export type BinanceTransactionscountBigIntArgs = {
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  deposit?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  proposalId?: InputMaybe<StringIdSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCode?: InputMaybe<IntIdSelector>;
  transactionSource?: InputMaybe<IntIdSelector>;
  transactionType?: InputMaybe<BinanceTransactionTypeSelector>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<BinanceTransactionsUniq>;
};


/** Transaction */
export type BinanceTransactionscurrencyArgs = {
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
};


/** Transaction */
export type BinanceTransactionsdepositArgs = {
  deposit?: InputMaybe<Array<AmountSelector>>;
};


/** Transaction */
export type BinanceTransactionshashArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Transaction */
export type BinanceTransactionsmaximumArgs = {
  get?: InputMaybe<BinanceTransactionsMeasureable>;
  of: BinanceTransactionsMeasureable;
};


/** Transaction */
export type BinanceTransactionsminimumArgs = {
  get?: InputMaybe<BinanceTransactionsMeasureable>;
  of: BinanceTransactionsMeasureable;
};


/** Transaction */
export type BinanceTransactionsproposalIdArgs = {
  proposalId?: InputMaybe<Array<IntIdSelector>>;
};


/** Transaction */
export type BinanceTransactionstransactionCodeArgs = {
  transactionCode?: InputMaybe<IntIdSelector>;
};


/** Transaction */
export type BinanceTransactionstransactionSourceArgs = {
  transactionSource?: InputMaybe<IntIdSelector>;
};


/** Transaction */
export type BinanceTransactionstransactionTypeArgs = {
  transactionType?: InputMaybe<Array<BinanceTransactionTypeSelector>>;
};

export enum BinanceTransactionsMeasureable {
  /** Block */
  block = 'block',
  /** Currency */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Transaction Code */
  transaction_code = 'transaction_code',
  /** Transaction Memo */
  transaction_memo = 'transaction_memo',
  /** Transaction Source Code */
  transaction_source_code = 'transaction_source_code',
  /** Transaction Source Name */
  transaction_source_name = 'transaction_source_name',
  /** Transaction Type */
  transaction_type = 'transaction_type',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum BinanceTransactionsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique transaction source count */
  transaction_sources = 'transaction_sources'
}

export type BinanceTransferFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  outputIndex?: InputMaybe<Array<OutputIndexSelector>>;
  receiver?: InputMaybe<Array<BinanceAddressSelector>>;
  sender?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  transferType?: InputMaybe<Array<BinanceTransferTypeSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

export enum BinanceTransferType {
  /** Bind */
  BIND = 'BIND',
  /** Reward for block */
  BLOCK_REWARD = 'BLOCK_REWARD',
  /** Submit evidence */
  BSC_SUBMIT_EVIDENCE = 'BSC_SUBMIT_EVIDENCE',
  /** Burning amount */
  BURN = 'BURN',
  /** Cross chain claim */
  CLAIM = 'CLAIM',
  /** Claiming Hash Timer Locked Transfer */
  CLAIM_HTL = 'CLAIM_HTL',
  /** Create sidechain validator */
  CREATE_SIDECHAIN_VALIDATOR = 'CREATE_SIDECHAIN_VALIDATOR',
  /** Deposit for Hash Timer Locked Transfer */
  DEPOSIT_HTL = 'DEPOSIT_HTL',
  /** Fee for DEX orders */
  DEX_FEE = 'DEX_FEE',
  /** Edit sidechain validator */
  EDIT_SIDECHAIN_VALIDATOR = 'EDIT_SIDECHAIN_VALIDATOR',
  /** Genesis declaration */
  GENESIS_DELEGATION = 'GENESIS_DELEGATION',
  /** Genesis supply declaration */
  GENESIS_SUPPLY = 'GENESIS_SUPPLY',
  /** Hash Timer Locked Transfer */
  HTL_TRANSFER = 'HTL_TRANSFER',
  /** Issue token */
  ISSUE = 'ISSUE',
  /** Mini Token Issue */
  MINI_TOKEN_ISSUE = 'MINI_TOKEN_ISSUE',
  /** Mint token */
  MINT = 'MINT',
  /** Delegate for sidechain */
  SIDECHAIN_DELEGATE = 'SIDECHAIN_DELEGATE',
  /** ReDelegate for sidechain */
  SIDECHAIN_REDELEGATE = 'SIDECHAIN_REDELEGATE',
  /** Unbond from sidechain */
  SIDECHAIN_UNBOND = 'SIDECHAIN_UNBOND',
  /** Side chain deposit */
  SIDE_DEPOSIT = 'SIDE_DEPOSIT',
  /** Side chain submit poroposal */
  SIDE_SUBMIT_PROPOSAL = 'SIDE_SUBMIT_PROPOSAL',
  /** Side chain vote */
  SIDE_VOTE = 'SIDE_VOTE',
  /** Tiny Token Issue */
  TINY_TOKEN_ISSUE = 'TINY_TOKEN_ISSUE',
  /** Trade buy side */
  TRADE_BUY = 'TRADE_BUY',
  /** Trade sell side */
  TRADE_SELL = 'TRADE_SELL',
  /** Transfer */
  TRANSFER = 'TRANSFER',
  /** Cross chain transfer */
  TRANSFER_OUT = 'TRANSFER_OUT',
  /** Transaction fee */
  TX_FEE = 'TX_FEE',
  /** UnBind */
  UNBIND = 'UNBIND'
}

/** Select transfer type(s) */
export type BinanceTransferTypeSelector = {
  /** Transfer type in the list */
  in?: InputMaybe<Array<BinanceTransferType>>;
  /** Transfer type is */
  is?: InputMaybe<BinanceTransferType>;
  /** Transfer type not */
  not?: InputMaybe<BinanceTransferType>;
  /** Transfer type not in the list */
  notIn?: InputMaybe<Array<BinanceTransferType>>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfers = {
  __typename?: 'BinanceTransfers';
  /** Transfer amount */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Transfer count */
  count?: Maybe<Scalars['Int']>;
  /** Transfer count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Order Id of trade where transfer happened */
  orderId?: Maybe<Scalars['String']>;
  /** Index of the output for the transfer, 0-based */
  outputIndex?: Maybe<Scalars['Int']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Id of trade where transfer happened */
  tradeId?: Maybe<Scalars['String']>;
  /** Transaction where transfer happened */
  transaction?: Maybe<TransactionHashIndex>;
  /** Transfer type */
  transferType?: Maybe<BinanceTransferType>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  outputIndex?: InputMaybe<Array<OutputIndexSelector>>;
  receiver?: InputMaybe<Array<BinanceAddressSelector>>;
  sender?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  transferType?: InputMaybe<Array<BinanceTransferTypeSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersanyArgs = {
  of: BinanceTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransferscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  outputIndex?: InputMaybe<Array<OutputIndexSelector>>;
  receiver?: InputMaybe<Array<BinanceAddressSelector>>;
  sender?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  transferType?: InputMaybe<Array<BinanceTransferTypeSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransferscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  orderId?: InputMaybe<Array<OrderIdSelector>>;
  outputIndex?: InputMaybe<Array<OutputIndexSelector>>;
  receiver?: InputMaybe<Array<BinanceAddressSelector>>;
  sender?: InputMaybe<Array<BinanceAddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
  transferType?: InputMaybe<Array<BinanceTransferTypeSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransferscurrencyArgs = {
  currency?: InputMaybe<Array<BinanceCurrencySelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersmaximumArgs = {
  get?: InputMaybe<BinanceTransfersMeasureable>;
  of: BinanceTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersminimumArgs = {
  get?: InputMaybe<BinanceTransfersMeasureable>;
  of: BinanceTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersorderIdArgs = {
  orderId?: InputMaybe<Array<OrderIdSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersoutputIndexArgs = {
  outputIndex?: InputMaybe<Array<OutputIndexSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransfersreceiverArgs = {
  receiver?: InputMaybe<Array<BinanceAddressSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransferssenderArgs = {
  sender?: InputMaybe<Array<BinanceAddressSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransferstradeIdArgs = {
  tradeId?: InputMaybe<Array<TradeIdSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransferstransactionArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type BinanceTransferstransferTypeArgs = {
  transferType?: InputMaybe<Array<BinanceTransferTypeSelector>>;
};

export enum BinanceTransfersMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Currency symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

/** Bitcoin and other UTXO type blockchains */
export type Bitcoin = {
  __typename?: 'Bitcoin';
  /** Blockchain Blocks */
  blocks?: Maybe<Array<BitcoinBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<BitcoinCoinpath>>;
  /** Blockchain Transaction Inputs */
  inputs?: Maybe<Array<BitcoinTransactionInput>>;
  /** Blockchain Transaction OmniTransactions */
  omniTransactions?: Maybe<Array<BitcoinOmniTransactiosn>>;
  /** Blockchain Transaction OmniTransfers */
  omniTransfers?: Maybe<Array<BitcoinOmniTransfers>>;
  /** Blockchain Transaction Outputs */
  outputs?: Maybe<Array<BitcoinTransactionOutput>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<BitcoinTransaction>>;
};


/** Bitcoin and other UTXO type blockchains */
export type BitcoinblocksArgs = {
  any?: InputMaybe<Array<BitcoinBlockFilter>>;
  blockHash?: InputMaybe<StringIdSelector>;
  blockSize?: InputMaybe<IntegerSelector>;
  blockStrippedSize?: InputMaybe<IntegerSelector>;
  blockVersion?: InputMaybe<IntegerSelector>;
  blockWeight?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  difficulty?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Bitcoin and other UTXO type blockchains */
export type BitcoincoinpathArgs = {
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<BitcoinCoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Bitcoin and other UTXO type blockchains */
export type BitcoininputsArgs = {
  any?: InputMaybe<Array<BitcoinInputFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputScriptType?: InputMaybe<BitcoinInputScriptTypeSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Bitcoin and other UTXO type blockchains */
export type BitcoinomniTransactionsArgs = {
  any?: InputMaybe<Array<BitcoinOmniTransactionsFilter>>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  invalidReason?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Bitcoin and other UTXO type blockchains */
export type BitcoinomniTransfersArgs = {
  any?: InputMaybe<Array<BitcoinOmniTransfersFilter>>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  invalidReason?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Bitcoin and other UTXO type blockchains */
export type BitcoinoutputsArgs = {
  any?: InputMaybe<Array<BitcoinOutputFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<BitcoinOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputScriptType?: InputMaybe<BitcoinOutputScriptTypeSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Bitcoin and other UTXO type blockchains */
export type BitcointransactionsArgs = {
  any?: InputMaybe<Array<BitcoinTransactionFilter>>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  options?: InputMaybe<QueryOptions>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};

/** Block */
export type BitcoinBlock = {
  __typename?: 'BitcoinBlock';
  any?: Maybe<Scalars['String']>;
  /** Block Hash */
  blockHash?: Maybe<Scalars['String']>;
  /** Block size */
  blockSize?: Maybe<Scalars['Int']>;
  /** Block stripped size */
  blockStrippedSize?: Maybe<Scalars['Int']>;
  /** Block version */
  blockVersion?: Maybe<Scalars['Int']>;
  /** Block weight */
  blockWeight?: Maybe<Scalars['Int']>;
  /** Block chainwork */
  chainwork?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Difficulty */
  difficulty?: Maybe<Scalars['Float']>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block median timestamp */
  medianTime?: Maybe<DateTime>;
  minimum?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Transaction count in block */
  transactionCount?: Maybe<Scalars['Int']>;
};


/** Block */
export type BitcoinBlockanyArgs = {
  of: BitcoinBlocksMeasureable;
};


/** Block */
export type BitcoinBlockblockHashArgs = {
  blockHash?: InputMaybe<StringIdSelector>;
};


/** Block */
export type BitcoinBlockblockSizeArgs = {
  blockSize?: InputMaybe<IntegerSelector>;
};


/** Block */
export type BitcoinBlockblockStrippedSizeArgs = {
  blockStrippedSize?: InputMaybe<IntegerSelector>;
};


/** Block */
export type BitcoinBlockblockVersionArgs = {
  blockVersion?: InputMaybe<IntegerSelector>;
};


/** Block */
export type BitcoinBlockblockWeightArgs = {
  blockWeight?: InputMaybe<IntegerSelector>;
};


/** Block */
export type BitcoinBlockcountArgs = {
  blockHash?: InputMaybe<StringIdSelector>;
  blockSize?: InputMaybe<IntegerSelector>;
  blockStrippedSize?: InputMaybe<IntegerSelector>;
  blockVersion?: InputMaybe<IntegerSelector>;
  blockWeight?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  difficulty?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCount?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinBlockUniq>;
};


/** Block */
export type BitcoinBlockcountBigIntArgs = {
  blockHash?: InputMaybe<StringIdSelector>;
  blockSize?: InputMaybe<IntegerSelector>;
  blockStrippedSize?: InputMaybe<IntegerSelector>;
  blockVersion?: InputMaybe<IntegerSelector>;
  blockWeight?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  difficulty?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCount?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinBlockUniq>;
};


/** Block */
export type BitcoinBlockdifficultyArgs = {
  difficulty?: InputMaybe<FloatSelector>;
};


/** Block */
export type BitcoinBlockheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Block */
export type BitcoinBlockmaximumArgs = {
  get?: InputMaybe<BitcoinBlocksMeasureable>;
  of: BitcoinBlocksMeasureable;
};


/** Block */
export type BitcoinBlockminimumArgs = {
  get?: InputMaybe<BitcoinBlocksMeasureable>;
  of: BitcoinBlocksMeasureable;
};


/** Block */
export type BitcoinBlocktimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type BitcoinBlocktransactionCountArgs = {
  transactionCount?: InputMaybe<IntegerSelector>;
};

export type BitcoinBlockFilter = {
  blockHash?: InputMaybe<StringIdSelector>;
  blockSize?: InputMaybe<IntegerSelector>;
  blockStrippedSize?: InputMaybe<IntegerSelector>;
  blockVersion?: InputMaybe<IntegerSelector>;
  blockWeight?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  difficulty?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};

export enum BitcoinBlockUniq {
  /** Unique date count */
  dates = 'dates'
}

export enum BitcoinBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Tx Count */
  transaction_count = 'transaction_count'
}

/** Coinpath */
export type BitcoinCoinpath = {
  __typename?: 'BitcoinCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<BitcoinTransactionHashIndexValues>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
};


/** Coinpath */
export type BitcoinCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type BitcoinCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type BitcoinCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type BitcoinCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

export enum BitcoinCoinpathMethod {
  /** Tracking money flow by amounts, ignoring coins (default) */
  moneyflow = 'moneyflow',
  /** Tracking coins by UTXO transactions */
  utxo = 'utxo'
}

/** Limits, Ordering, Constraints, Coinpath Options */
export type BitcoinCoinpathOptions = {
  /** Ordering field(s) for ascending */
  asc?: InputMaybe<Array<Scalars['String']>>;
  /** Method to use coinpath */
  coinpathMethod?: InputMaybe<BitcoinCoinpathMethod>;
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: InputMaybe<Scalars['Int']>;
  /** Ordering field(s) for descending */
  desc?: InputMaybe<Array<Scalars['String']>>;
  /** Flow direction */
  direction?: InputMaybe<FlowDirection>;
  /** Limit number of results */
  limit?: InputMaybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: InputMaybe<LimitByOption>;
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: InputMaybe<Scalars['Int']>;
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: InputMaybe<Scalars['Int']>;
  /** Do not include transactions below this amount */
  minimumTxAmount?: InputMaybe<Scalars['Float']>;
  /** Offset of results, starting from 0 */
  offset?: InputMaybe<Scalars['Int']>;
  /** Invalidating cache seed */
  seed?: InputMaybe<Scalars['Int']>;
};

export type BitcoinInputFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputScriptType?: InputMaybe<BitcoinInputScriptTypeSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};

export enum BitcoinInputScriptType {
  /** Input Script Coinbase Script */
  coinbase = 'coinbase',
  /** Input Script Signature */
  scriptSig = 'scriptSig',
  /** Input Script TX Witness Script */
  txinwitness = 'txinwitness'
}

/** Selector of input script type */
export type BitcoinInputScriptTypeSelector = {
  /** In the list of Script Type */
  in?: InputMaybe<Array<BitcoinInputScriptType>>;
  /** Equal to Script Type */
  is?: InputMaybe<BitcoinInputScriptType>;
  /** Not Equal to Script Type */
  not?: InputMaybe<BitcoinInputScriptType>;
  /** Not in the list of Script Type */
  notIn?: InputMaybe<Array<BitcoinInputScriptType>>;
};

export enum BitcoinInputUniq {
  /** Unique addresses count */
  addresses = 'addresses',
  /** Unique block count */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique transactions count */
  transactions = 'transactions'
}

export enum BitcoinInputsMeasureable {
  /** Address */
  address = 'address',
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Input index */
  input_index = 'input_index',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction index */
  tx_index = 'tx_index'
}

export enum BitcoinNetwork {
  /** Bitcoin Cash ( BCH ) */
  bitcash = 'bitcash',
  /** Bitcoin ( BTC ) */
  bitcoin = 'bitcoin',
  /** Bitcoin SV ( BSV ) */
  bitcoinsv = 'bitcoinsv',
  /** Dash ( DASH ) */
  dash = 'dash',
  /** Dogecoin ( DOGE ) */
  dogecoin = 'dogecoin',
  /** Litecoin ( LTC ) */
  litecoin = 'litecoin',
  /** ZCash ( ZCASH ) */
  zcash = 'zcash'
}

export type BitcoinOmniTransactionsFilter = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  invalidReason?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};

export enum BitcoinOmniTransactionsMeasureablse {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Transactions hash */
  tx_hash = 'tx_hash',
  /** Transactions index */
  tx_index = 'tx_index'
}

export enum BitcoinOmniTransactionsUniq {
  /** Unique block count */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique transaction sender */
  tx_sender = 'tx_sender'
}

/** OmniTransactions */
export type BitcoinOmniTransactiosn = {
  __typename?: 'BitcoinOmniTransactiosn';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Hash of the block */
  blockHash: Scalars['String'];
  /** OmniTransaction s count */
  count?: Maybe<Scalars['Int']>;
  /** OmniTransaction s count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Transactions total fee value */
  feeValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** OmniTransactions index in block, 0-based */
  index: Scalars['String'];
  /** Invalid Reason */
  invalidReason: Scalars['String'];
  /** Invalid Reason */
  json: Scalars['String'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction Sender */
  txSender: Scalars['String'];
  /** Type */
  type: Scalars['String'];
  /** Type Int */
  typeInt: Scalars['Int'];
  /** Version */
  valid: Scalars['Int'];
  /** Version */
  version: Scalars['Int'];
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnanyArgs = {
  of: BitcoinOmniTransactionsMeasureablse;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnblockHashArgs = {
  blockHash?: InputMaybe<HashSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosncountArgs = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  invalidReason?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinOmniTransactionsUniq>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosncountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  invalidReason?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinOmniTransactionsUniq>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnfeeValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  invalidReason?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnhashArgs = {
  txHash?: InputMaybe<StringIdSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnindexArgs = {
  txIndex?: InputMaybe<IntegerSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosninvalidReasonArgs = {
  invalidReason?: InputMaybe<StringSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnjsonArgs = {
  json?: InputMaybe<StringSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnmaximumArgs = {
  get?: InputMaybe<BitcoinOmniTransactionsMeasureablse>;
  of: BitcoinOmniTransactionsMeasureablse;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnminimumArgs = {
  get?: InputMaybe<BitcoinOmniTransactionsMeasureablse>;
  of: BitcoinOmniTransactionsMeasureablse;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosntxSenderArgs = {
  txSender?: InputMaybe<HashSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosntypeArgs = {
  type?: InputMaybe<StringSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosntypeIntArgs = {
  typeInt?: InputMaybe<IntegerSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnvalidArgs = {
  valid?: InputMaybe<IntegerSelector>;
};


/** OmniTransactions */
export type BitcoinOmniTransactiosnversionArgs = {
  version?: InputMaybe<IntegerSelector>;
};

/** OmniTransfers */
export type BitcoinOmniTransfers = {
  __typename?: 'BitcoinOmniTransfers';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Hash of the block */
  blockHash: Scalars['String'];
  /** Transaction s count */
  count?: Maybe<Scalars['Int']>;
  /** Transaction s count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Direction */
  direction?: Maybe<Scalars['String']>;
  /** Divisible */
  divisible?: Maybe<Scalars['Int']>;
  /** Transactions total fee value */
  feeValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transactions index in block, 0-based */
  index: Scalars['String'];
  /** Ismine */
  ismine?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer From */
  transferFrom: Scalars['String'];
  /** Transfer From */
  transferTo: Scalars['String'];
  /** Transaction Sender */
  txSender: Scalars['String'];
  /** Type */
  type: Scalars['String'];
  /** Type Int */
  typeInt: Scalars['Int'];
  /** value */
  value?: Maybe<Scalars['Float']>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersanyArgs = {
  of: BitcoinOmniTransfersMeasureablse;
};


/** OmniTransfers */
export type BitcoinOmniTransfersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersblockHashArgs = {
  blockHash?: InputMaybe<HashSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransferscountArgs = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  invalidReason?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinOmniTransfersUniq>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransferscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  invalidReason?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinOmniTransfersUniq>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersdirectionArgs = {
  direction?: InputMaybe<StringSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersdivisibleArgs = {
  divisible?: InputMaybe<IntegerSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersfeeValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  invalidReason?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfershashArgs = {
  txHash?: InputMaybe<StringIdSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersindexArgs = {
  txIndex?: InputMaybe<IntegerSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersismineArgs = {
  ismine?: InputMaybe<IntegerSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersmaximumArgs = {
  get?: InputMaybe<BitcoinOmniTransfersMeasureablse>;
  of: BitcoinOmniTransfersMeasureablse;
};


/** OmniTransfers */
export type BitcoinOmniTransfersminimumArgs = {
  get?: InputMaybe<BitcoinOmniTransfersMeasureablse>;
  of: BitcoinOmniTransfersMeasureablse;
};


/** OmniTransfers */
export type BitcoinOmniTransferstransferFromArgs = {
  transferFrom?: InputMaybe<HashSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransferstransferToArgs = {
  transferTo?: InputMaybe<HashSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransferstxSenderArgs = {
  txSender?: InputMaybe<HashSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransferstypeArgs = {
  type?: InputMaybe<StringSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransferstypeIntArgs = {
  typeInt?: InputMaybe<IntegerSelector>;
};


/** OmniTransfers */
export type BitcoinOmniTransfersvalueArgs = {
  value?: InputMaybe<FloatSelector>;
};

export type BitcoinOmniTransfersFilter = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  invalidReason?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSender?: InputMaybe<HashSelector>;
  type?: InputMaybe<StringSelector>;
  typeId?: InputMaybe<IntegerSelector>;
  valid?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<IntegerSelector>;
};

export enum BitcoinOmniTransfersMeasureablse {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Transactions hash */
  tx_hash = 'tx_hash',
  /** Transactions index */
  tx_index = 'tx_index'
}

export enum BitcoinOmniTransfersUniq {
  /** Unique block count */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique transaction sender */
  tx_sender = 'tx_sender'
}

export enum BitcoinOutputDirection {
  /** Change return */
  change = 'change',
  /** Fee */
  fee = 'fee',
  /** Genesis */
  genesis = 'genesis',
  /** Likely Change return */
  likely_change = 'likely_change',
  /** Likely Not a change return */
  likely_not_change = 'likely_not_change',
  /** Mining */
  mining = 'mining',
  /** Minting */
  minting = 'minting',
  /** Not a change return */
  not_change = 'not_change',
  /** Not defined */
  unknown = 'unknown'
}

/** A guessed direction of output */
export type BitcoinOutputDirectionSelector = {
  /** In the list of direction */
  in?: InputMaybe<Array<BitcoinOutputDirection>>;
  /** Equal to direction */
  is?: InputMaybe<BitcoinOutputDirection>;
  /** Not Equal to direction */
  not?: InputMaybe<BitcoinOutputDirection>;
  /** Not in the list of direction */
  notIn?: InputMaybe<Array<BitcoinOutputDirection>>;
};

export type BitcoinOutputFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<BitcoinOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputScriptType?: InputMaybe<BitcoinOutputScriptTypeSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};

export enum BitcoinOutputScriptType {
  /** Output Multisignature Wallet */
  multisig = 'multisig',
  /** Non standard output script */
  nonstandard = 'nonstandard',
  /** Output nulldata */
  nulldata = 'nulldata',
  /** Output PubKey */
  pubkey = 'pubkey',
  /** Output PubKey Hash */
  pubkeyhash = 'pubkeyhash',
  /** Output Script Hash */
  scripthash = 'scripthash',
  /** Output Witness Other */
  witness_unknown = 'witness_unknown',
  /** Output Witness Key Hash */
  witness_v0_keyhash = 'witness_v0_keyhash',
  /** Output Witness Script Hash */
  witness_v0_scripthash = 'witness_v0_scripthash'
}

/** Selector of output script type */
export type BitcoinOutputScriptTypeSelector = {
  /** In the list of Script Type */
  in?: InputMaybe<Array<BitcoinOutputScriptType>>;
  /** Equal to Script Type */
  is?: InputMaybe<BitcoinOutputScriptType>;
  /** Not Equal to Script Type */
  not?: InputMaybe<BitcoinOutputScriptType>;
  /** Not in the list of Script Type */
  notIn?: InputMaybe<Array<BitcoinOutputScriptType>>;
};

export enum BitcoinOutputUniq {
  /** Unique input addresses count */
  addresses = 'addresses',
  /** Unique block count */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique transactions count */
  transactions = 'transactions'
}

export enum BitcoinOutputsMeasureable {
  /** Address */
  address = 'address',
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Output index */
  output_index = 'output_index',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction index */
  tx_index = 'tx_index'
}

/** Transaction */
export type BitcoinTransaction = {
  __typename?: 'BitcoinTransaction';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Transaction  count */
  count?: Maybe<Scalars['Int']>;
  /** Transaction  count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Transaction total fee value */
  feeValue?: Maybe<Scalars['Float']>;
  /** Transaction total fee value */
  feeValueDecimal?: Maybe<Scalars['DecimalNumber']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  /** Transaction total input count */
  inputCount?: Maybe<Scalars['Int']>;
  /** Transaction total input count */
  inputCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Transaction total input value */
  inputValue?: Maybe<Scalars['Float']>;
  /** Transaction total input value as decimal */
  inputValueDecimal?: Maybe<Scalars['DecimalNumber']>;
  maximum?: Maybe<Scalars['String']>;
  /** Transaction total mined value */
  minedValue?: Maybe<Scalars['Float']>;
  /** Transaction total mined value */
  minedValueDecimal?: Maybe<Scalars['DecimalNumber']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction total output count */
  outputCount?: Maybe<Scalars['Int']>;
  /** Transaction total output count */
  outputCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Transaction total output value */
  outputValue?: Maybe<Scalars['Float']>;
  /** Transaction total output value */
  outputValueDecimal?: Maybe<Scalars['DecimalNumber']>;
  /** Transaction is coinbase */
  txCoinbase?: Maybe<Scalars['Boolean']>;
  /** Transaction locktime */
  txLocktime?: Maybe<Scalars['BigInt']>;
  /** Transaction size */
  txSize?: Maybe<Scalars['Int']>;
  /** Transaction version */
  txVersion?: Maybe<Scalars['Int']>;
  /** Transaction vsize */
  txVsize?: Maybe<Scalars['Int']>;
  /** Transaction weight */
  txWeight?: Maybe<Scalars['Int']>;
};


/** Transaction */
export type BitcoinTransactionanyArgs = {
  of: BitcoinTransactionsMeasureable;
};


/** Transaction */
export type BitcoinTransactionblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction */
export type BitcoinTransactioncountArgs = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinTransactionUniq>;
};


/** Transaction */
export type BitcoinTransactioncountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinTransactionUniq>;
};


/** Transaction */
export type BitcoinTransactionfeeValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactionfeeValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactionhashArgs = {
  txHash?: InputMaybe<StringIdSelector>;
};


/** Transaction */
export type BitcoinTransactionindexArgs = {
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactioninputCountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactioninputCountBigIntArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactioninputValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactioninputValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactionmaximumArgs = {
  get?: InputMaybe<BitcoinTransactionsMeasureable>;
  of: BitcoinTransactionsMeasureable;
};


/** Transaction */
export type BitcoinTransactionminedValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactionminedValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactionminimumArgs = {
  get?: InputMaybe<BitcoinTransactionsMeasureable>;
  of: BitcoinTransactionsMeasureable;
};


/** Transaction */
export type BitcoinTransactionoutputCountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactionoutputCountBigIntArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactionoutputValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactionoutputValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactiontxCoinbaseArgs = {
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
};


/** Transaction */
export type BitcoinTransactiontxLocktimeArgs = {
  txLocktime?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactiontxSizeArgs = {
  txSize?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactiontxVersionArgs = {
  txVersion?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactiontxVsizeArgs = {
  txVsize?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type BitcoinTransactiontxWeightArgs = {
  txWeight?: InputMaybe<IntegerSelector>;
};

export type BitcoinTransactionFilter = {
  date?: InputMaybe<DateSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  minedValue?: InputMaybe<FloatSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCoinbase?: InputMaybe<Scalars['Boolean']>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txLocktime?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  txVersion?: InputMaybe<IntegerSelector>;
  txVsize?: InputMaybe<IntegerSelector>;
  txWeight?: InputMaybe<IntegerSelector>;
};

/** Blockchain transaction */
export type BitcoinTransactionHashIndexValues = {
  __typename?: 'BitcoinTransactionHashIndexValues';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  /** Transaction value in input */
  valueIn: Scalars['Float'];
  /** Transaction value in input */
  valueInDecimal: Scalars['DecimalNumber'];
  /** Transaction value in output */
  valueOut: Scalars['Float'];
  /** Transaction value in output */
  valueOutDecimal: Scalars['DecimalNumber'];
};

/** Transaction Input */
export type BitcoinTransactionInput = {
  __typename?: 'BitcoinTransactionInput';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Input count */
  count?: Maybe<Scalars['Int']>;
  /** Input count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Input address */
  inputAddress?: Maybe<Address>;
  /** Input index */
  inputIndex?: Maybe<Scalars['Int']>;
  /** Input script */
  inputScript?: Maybe<Scalars['String']>;
  /** Input script type and attributes */
  inputScriptType?: Maybe<InputScript>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Output Transaction for this input */
  outputTransaction?: Maybe<TransactionHashIndex>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Input value */
  value?: Maybe<Scalars['Float']>;
  /** Input value as decimal */
  valueDecimal?: Maybe<Scalars['DecimalNumber']>;
};


/** Transaction Input */
export type BitcoinTransactionInputanyArgs = {
  of: BitcoinInputsMeasureable;
};


/** Transaction Input */
export type BitcoinTransactionInputblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction Input */
export type BitcoinTransactionInputcountArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputScriptType?: InputMaybe<BitcoinInputScriptTypeSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinInputUniq>;
};


/** Transaction Input */
export type BitcoinTransactionInputcountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputScriptType?: InputMaybe<BitcoinInputScriptTypeSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinInputUniq>;
};


/** Transaction Input */
export type BitcoinTransactionInputinputAddressArgs = {
  inputAddress?: InputMaybe<AddressSelector>;
};


/** Transaction Input */
export type BitcoinTransactionInputinputIndexArgs = {
  inputIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Input */
export type BitcoinTransactionInputinputScriptTypeArgs = {
  inputScriptType?: InputMaybe<BitcoinInputScriptTypeSelector>;
};


/** Transaction Input */
export type BitcoinTransactionInputmaximumArgs = {
  get?: InputMaybe<BitcoinInputsMeasureable>;
  of: BitcoinInputsMeasureable;
};


/** Transaction Input */
export type BitcoinTransactionInputminimumArgs = {
  get?: InputMaybe<BitcoinInputsMeasureable>;
  of: BitcoinInputsMeasureable;
};


/** Transaction Input */
export type BitcoinTransactionInputoutputTransactionArgs = {
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<StringIdSelector>;
};


/** Transaction Input */
export type BitcoinTransactionInputtransactionArgs = {
  txId?: InputMaybe<StringIdSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Input */
export type BitcoinTransactionInputvalueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputScriptType?: InputMaybe<BitcoinInputScriptTypeSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Input */
export type BitcoinTransactionInputvalueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputScriptType?: InputMaybe<BitcoinInputScriptTypeSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};

/** Transaction Output */
export type BitcoinTransactionOutput = {
  __typename?: 'BitcoinTransactionOutput';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Output count */
  count?: Maybe<Scalars['Int']>;
  /** Output count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Output address */
  outputAddress?: Maybe<Address>;
  /** Output guessed direction */
  outputDirection?: Maybe<BitcoinOutputDirection>;
  /** Output index */
  outputIndex?: Maybe<Scalars['Int']>;
  /** Output script */
  outputScript?: Maybe<Scalars['String']>;
  /** Output script type and attributes */
  outputScriptType?: Maybe<OutputScript>;
  reqSigs?: Maybe<Scalars['Int']>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Output value */
  value?: Maybe<Scalars['Float']>;
  /** Output value as decimal */
  valueDecimal?: Maybe<Scalars['DecimalNumber']>;
};


/** Transaction Output */
export type BitcoinTransactionOutputanyArgs = {
  of: BitcoinOutputsMeasureable;
};


/** Transaction Output */
export type BitcoinTransactionOutputblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction Output */
export type BitcoinTransactionOutputcountArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<BitcoinOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputScriptType?: InputMaybe<BitcoinOutputScriptTypeSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinOutputUniq>;
};


/** Transaction Output */
export type BitcoinTransactionOutputcountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<BitcoinOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputScriptType?: InputMaybe<BitcoinOutputScriptTypeSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<BitcoinOutputUniq>;
};


/** Transaction Output */
export type BitcoinTransactionOutputmaximumArgs = {
  get?: InputMaybe<BitcoinOutputsMeasureable>;
  of: BitcoinOutputsMeasureable;
};


/** Transaction Output */
export type BitcoinTransactionOutputminimumArgs = {
  get?: InputMaybe<BitcoinOutputsMeasureable>;
  of: BitcoinOutputsMeasureable;
};


/** Transaction Output */
export type BitcoinTransactionOutputoutputAddressArgs = {
  outputAddress?: InputMaybe<AddressSelector>;
};


/** Transaction Output */
export type BitcoinTransactionOutputoutputDirectionArgs = {
  outputDirection?: InputMaybe<BitcoinOutputDirectionSelector>;
};


/** Transaction Output */
export type BitcoinTransactionOutputoutputIndexArgs = {
  outputIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Output */
export type BitcoinTransactionOutputoutputScriptTypeArgs = {
  inputScriptType?: InputMaybe<BitcoinOutputScriptTypeSelector>;
};


/** Transaction Output */
export type BitcoinTransactionOutputtransactionArgs = {
  txId?: InputMaybe<StringIdSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Output */
export type BitcoinTransactionOutputvalueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<BitcoinOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputScriptType?: InputMaybe<BitcoinOutputScriptTypeSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Output */
export type BitcoinTransactionOutputvalueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputScriptType?: InputMaybe<BitcoinInputScriptTypeSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};

export enum BitcoinTransactionUniq {
  /** Unique block count */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates'
}

export enum BitcoinTransactionsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Input count */
  input_count = 'input_count',
  /** Transaction input value */
  input_value = 'input_value',
  /** Output count */
  output_count = 'output_count',
  /** Transaction output value */
  output_value = 'output_value',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction index */
  tx_index = 'tx_index',
  /** Transaction size */
  tx_size = 'tx_size'
}

/** Block */
export type Block = {
  __typename?: 'Block';
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};

/** BlockExtended */
export type BlockExtended = {
  __typename?: 'BlockExtended';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};

/** ConfluxBlock */
export type BlockInfo = {
  __typename?: 'BlockInfo';
  /** Block hash */
  hash?: Maybe<Scalars['String']>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};

/** Select block by height ( sequence number) */
export type BlockSelector = {
  /** Block height in range */
  between?: InputMaybe<Array<Scalars['Int']>>;
  /** Block height greater than */
  gt?: InputMaybe<Scalars['Int']>;
  /** Block height greater or equal than */
  gteq?: InputMaybe<Scalars['Int']>;
  /** Block height in the list */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Block height is */
  is?: InputMaybe<Scalars['Int']>;
  /** Block height less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** Block height less or equal than */
  lteq?: InputMaybe<Scalars['Int']>;
  /** Block height not */
  not?: InputMaybe<Scalars['Int']>;
  /** Block height not in the list */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** Select block by height ( sequence number) */
export type BlockSelectorRange = {
  /** Block height in range */
  between?: InputMaybe<Array<Scalars['Int']>>;
  /** Block height greater or equal than */
  gteq?: InputMaybe<Scalars['Int']>;
  /** Block height less or equal than */
  lteq?: InputMaybe<Scalars['Int']>;
};

/** Blockchain network */
export type BlockchainNetwork = {
  __typename?: 'BlockchainNetwork';
  /** Network name */
  network: Network;
  /** Network protocol type */
  protocol: Protocol;
};

/** Select by boolean (sequence number) */
export type BooleanSelector = {
  /** Is */
  is?: InputMaybe<Scalars['Boolean']>;
  /** Is not */
  not?: InputMaybe<Scalars['Boolean']>;
};

/** Information about call */
export type CallElrond = {
  __typename?: 'CallElrond';
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Contract method invoked */
  smartContractAddress?: Maybe<Scalars['String']>;
  /** Smart contract name */
  smartContractName?: Maybe<Scalars['String']>;
  /** Smart contract signature */
  smartContractSignature?: Maybe<Scalars['String']>;
  /** Signature Hash */
  smartContractSignatureHash?: Maybe<Scalars['String']>;
};


/** Information about call */
export type CallElrondsmartContractAddressArgs = {
  smartContractAddress?: InputMaybe<HashSelector>;
};


/** Information about call */
export type CallElrondsmartContractNameArgs = {
  smartContractName?: InputMaybe<StringSelector>;
};


/** Information about call */
export type CallElrondsmartContractSignatureArgs = {
  smartContractSignature?: InputMaybe<StringSelector>;
};


/** Information about call */
export type CallElrondsmartContractSignatureHashArgs = {
  smartContractSignatureHash?: InputMaybe<HashSelector>;
};

/** Cardano */
export type Cardano = {
  __typename?: 'Cardano';
  /** Information about address */
  address: Array<CardanoAddressInfo>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<CardanoBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<CardanoCoinpath>>;
  /** Blockchain Transaction Inputs */
  inputs?: Maybe<Array<CardanoTransactionInput>>;
  /** Blockchain Tokens Mints */
  mints?: Maybe<Array<CardanoTransactionMint>>;
  /** Blockchain Transaction Outputs */
  outputs?: Maybe<Array<CardanoTransactionOutput>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<CardanoTransaction>>;
};


/** Cardano */
export type CardanoaddressArgs = {
  address: Array<AddressSelectorIn>;
};


/** Cardano */
export type CardanoblocksArgs = {
  any?: InputMaybe<Array<CardanoBlockFilter>>;
  blockHash?: InputMaybe<StringIdSelector>;
  blockSize?: InputMaybe<IntegerSelector>;
  blockVersion?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  opCert?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  slot?: InputMaybe<IntegerSelector>;
  slotInEpoch?: InputMaybe<IntegerSelector>;
  slotLeaderHash?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<StringSelector>;
  vrfKey?: InputMaybe<StringSelector>;
};


/** Cardano */
export type CardanocoinpathArgs = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CardanoCoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Cardano */
export type CardanoinputsArgs = {
  any?: InputMaybe<Array<CardanoInputFilter>>;
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Cardano */
export type CardanomintsArgs = {
  any?: InputMaybe<Array<CardanoMintFilter>>;
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  value?: InputMaybe<FloatSelector>;
};


/** Cardano */
export type CardanooutputsArgs = {
  any?: InputMaybe<Array<CardanoOutputFilter>>;
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<CardanoOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Cardano */
export type CardanotransactionsArgs = {
  any?: InputMaybe<Array<CardanoTransactionFilter>>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};

/** Address balance information for Cardano network */
export type CardanoAddressBalance = {
  __typename?: 'CardanoAddressBalance';
  /** Currency */
  currency?: Maybe<Currency>;
  /** Currency value */
  value?: Maybe<Scalars['Float']>;
};

/** Address detailed information for Cardano network */
export type CardanoAddressInfo = {
  __typename?: 'CardanoAddressInfo';
  /** Address */
  address?: Maybe<Address>;
  /** Current address balances */
  balance?: Maybe<Array<CardanoAddressBalance>>;
  /** Current staking addressese info */
  staking?: Maybe<Array<CardanoStakingAddress>>;
};

/** Block */
export type CardanoBlock = {
  __typename?: 'CardanoBlock';
  any?: Maybe<Scalars['String']>;
  /** Block Hash */
  blockHash?: Maybe<Scalars['String']>;
  /** Block size */
  blockSize?: Maybe<Scalars['Int']>;
  /** Block version */
  blockVersion?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Epoch number */
  epoch?: Maybe<Scalars['Int']>;
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Op cert */
  opCert?: Maybe<Scalars['String']>;
  /** Slot number */
  slot?: Maybe<Scalars['Int']>;
  /** Slot in epoch number */
  slotInEpoch?: Maybe<Scalars['Int']>;
  /** Slot leader description */
  slotLeaderDescription?: Maybe<Scalars['String']>;
  /** Slot leader hash */
  slotLeaderHash?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Transaction count in block */
  transactionCount?: Maybe<Scalars['Int']>;
  /** VRF Key */
  vrfKey?: Maybe<Scalars['String']>;
};


/** Block */
export type CardanoBlockanyArgs = {
  of: CardanoBlocksMeasureable;
};


/** Block */
export type CardanoBlockblockHashArgs = {
  blockHash?: InputMaybe<StringIdSelector>;
};


/** Block */
export type CardanoBlockblockSizeArgs = {
  blockSize?: InputMaybe<IntegerSelector>;
};


/** Block */
export type CardanoBlockblockVersionArgs = {
  blockVersion?: InputMaybe<IntegerSelector>;
};


/** Block */
export type CardanoBlockcountArgs = {
  blockHash?: InputMaybe<StringIdSelector>;
  blockSize?: InputMaybe<IntegerSelector>;
  blockStrippedSize?: InputMaybe<IntegerSelector>;
  blockVersion?: InputMaybe<IntegerSelector>;
  blockWeight?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  difficulty?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCount?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoBlockUniq>;
};


/** Block */
export type CardanoBlockcountBigIntArgs = {
  blockHash?: InputMaybe<StringIdSelector>;
  blockSize?: InputMaybe<IntegerSelector>;
  blockStrippedSize?: InputMaybe<IntegerSelector>;
  blockVersion?: InputMaybe<IntegerSelector>;
  blockWeight?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  difficulty?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txCount?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoBlockUniq>;
};


/** Block */
export type CardanoBlockheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Block */
export type CardanoBlockmaximumArgs = {
  get?: InputMaybe<CardanoBlocksMeasureable>;
  of: CardanoBlocksMeasureable;
};


/** Block */
export type CardanoBlockminimumArgs = {
  get?: InputMaybe<CardanoBlocksMeasureable>;
  of: CardanoBlocksMeasureable;
};


/** Block */
export type CardanoBlocktimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type CardanoBlocktransactionCountArgs = {
  transactionCount?: InputMaybe<IntegerSelector>;
};

export type CardanoBlockFilter = {
  blockHash?: InputMaybe<StringIdSelector>;
  blockSize?: InputMaybe<IntegerSelector>;
  blockVersion?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  opCert?: InputMaybe<StringSelector>;
  slot?: InputMaybe<IntegerSelector>;
  slotInEpoch?: InputMaybe<IntegerSelector>;
  slotLeaderHash?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  version?: InputMaybe<StringSelector>;
  vrfKey?: InputMaybe<StringSelector>;
};

export enum CardanoBlockUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique epoch */
  epoch = 'epoch',
  /** Unique slot */
  slot = 'slot',
  /** Unique slot leader */
  slot_leader = 'slot_leader',
  /** Unique version */
  version = 'version'
}

export enum CardanoBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Tx Count */
  transaction_count = 'transaction_count'
}

/** Coinpath */
export type CardanoCoinpath = {
  __typename?: 'CardanoCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<CardanoTransactionHashIndexValues>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
};


/** Coinpath */
export type CardanoCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type CardanoCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type CardanoCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type CardanoCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

export enum CardanoCoinpathMethod {
  /** Tracking money flow by amounts, ignoring coins (default) */
  moneyflow = 'moneyflow',
  /** Tracking coins by UTXO transactions */
  utxo = 'utxo'
}

/** Limits, Ordering, Constraints, Coinpath Options */
export type CardanoCoinpathOptions = {
  /** Ordering field(s) for ascending */
  asc?: InputMaybe<Array<Scalars['String']>>;
  /** Method to use coinpath */
  coinpathMethod?: InputMaybe<CardanoCoinpathMethod>;
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: InputMaybe<Scalars['Int']>;
  /** Ordering field(s) for descending */
  desc?: InputMaybe<Array<Scalars['String']>>;
  /** Flow direction */
  direction?: InputMaybe<FlowDirection>;
  /** Limit number of results */
  limit?: InputMaybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: InputMaybe<LimitByOption>;
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: InputMaybe<Scalars['Int']>;
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: InputMaybe<Scalars['Int']>;
  /** Do not include transactions below this amount */
  minimumTxAmount?: InputMaybe<Scalars['Float']>;
  /** Offset of results, starting from 0 */
  offset?: InputMaybe<Scalars['Int']>;
  /** Invalidating cache seed */
  seed?: InputMaybe<Scalars['Int']>;
};

/**
 * Cardano token selector by tokenId.
 *     Native binance token has ADA symbol, pass it as argument.
 *     Otherwise pass asset fingerprint, starting from asset...
 */
export type CardanoCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type CardanoInputFilter = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};

export enum CardanoInputSource {
  /** Input */
  input = 'input',
  /** Withdrawal */
  withdrawal = 'withdrawal'
}

export enum CardanoInputUniq {
  /** Unique addresses count */
  addresses = 'addresses',
  /** Unique block count */
  blocks = 'blocks',
  /** Unique currencies count */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique transactions count */
  transactions = 'transactions'
}

export enum CardanoInputsMeasureable {
  /** Address */
  address = 'address',
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Input index */
  input_index = 'input_index',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction index */
  tx_index = 'tx_index'
}

export type CardanoMintFilter = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  value?: InputMaybe<FloatSelector>;
};

export enum CardanoMintUniq {
  /** Unique block count */
  blocks = 'blocks',
  /** Unique currencies count */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique transactions count */
  transactions = 'transactions'
}

export enum CardanoMintsMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction index */
  tx_index = 'tx_index'
}

export enum CardanoNetwork {
  /** Cardano ( ADA ) */
  cardano = 'cardano'
}

export enum CardanoOutputDirection {
  /** Change return */
  change = 'change',
  /** Fee */
  fee = 'fee',
  /** Genesis */
  genesis = 'genesis',
  /** Likely Change return */
  likely_change = 'likely_change',
  /** Likely Not a change return */
  likely_not_change = 'likely_not_change',
  /** Mining */
  mining = 'mining',
  /** Minting */
  minting = 'minting',
  /** Not a change return */
  not_change = 'not_change',
  /** Not defined */
  unknown = 'unknown'
}

/** A guessed direction of output */
export type CardanoOutputDirectionSelector = {
  /** In the list of direction */
  in?: InputMaybe<Array<CardanoOutputDirection>>;
  /** Equal to direction */
  is?: InputMaybe<CardanoOutputDirection>;
  /** Not Equal to direction */
  not?: InputMaybe<CardanoOutputDirection>;
  /** Not in the list of direction */
  notIn?: InputMaybe<Array<CardanoOutputDirection>>;
};

export type CardanoOutputFilter = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<CardanoOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};

export enum CardanoOutputUniq {
  /** Unique input addresses count */
  addresses = 'addresses',
  /** Unique block count */
  blocks = 'blocks',
  /** Unique currencies count */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique transactions count */
  transactions = 'transactions'
}

export enum CardanoOutputsMeasureable {
  /** Address */
  address = 'address',
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Output index */
  output_index = 'output_index',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction index */
  tx_index = 'tx_index'
}

/** Address staking information for Cardano network */
export type CardanoStakingAddress = {
  __typename?: 'CardanoStakingAddress';
  /** Staking Address */
  address?: Maybe<Address>;
  /** Rewards value */
  rewardsAmount?: Maybe<Scalars['Float']>;
  /** Staked value */
  stakedAmount?: Maybe<Scalars['Float']>;
  /** Staked value including rewards */
  stakedAmountWithRewards?: Maybe<Scalars['Float']>;
  /** Withdrawn value */
  withdrawnAmount?: Maybe<Scalars['Float']>;
};

/** Transaction */
export type CardanoTransaction = {
  __typename?: 'CardanoTransaction';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Transaction  count */
  count?: Maybe<Scalars['Int']>;
  /** Transaction  count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Transaction total deposit value */
  depositValue?: Maybe<Scalars['Float']>;
  /** Transaction total fee value */
  depositValueDecimal?: Maybe<Scalars['DecimalNumberAsDiv']>;
  /** Transaction total fee value */
  feeValue?: Maybe<Scalars['Float']>;
  /** Transaction total fee value */
  feeValueDecimal?: Maybe<Scalars['DecimalNumberAsDiv']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Included at timestamp */
  includedAt?: Maybe<DateTime>;
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  /** Transaction total input count */
  inputCount?: Maybe<Scalars['Int']>;
  /** Transaction total input count */
  inputCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Transaction total input value */
  inputValue?: Maybe<Scalars['Float']>;
  /** Transaction total input value as decimal */
  inputValueDecimal?: Maybe<Scalars['DecimalNumberAsDiv']>;
  /** Invalid before */
  invalidBefore?: Maybe<Scalars['String']>;
  /** Invalid hereafter */
  invalidHereafter?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Metadata */
  metadata?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction total mint count */
  mintCount?: Maybe<Scalars['Int']>;
  /** Transaction total mint count */
  mintCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Transaction total output count */
  outputCount?: Maybe<Scalars['Int']>;
  /** Transaction total output count */
  outputCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Transaction total output value */
  outputValue?: Maybe<Scalars['Float']>;
  /** Transaction total output value */
  outputValueDecimal?: Maybe<Scalars['DecimalNumberAsDiv']>;
  /** Transaction size */
  txSize?: Maybe<Scalars['Int']>;
  /** Transaction total withdrawal count */
  withdrawalCount?: Maybe<Scalars['Int']>;
  /** Transaction total withdrawal count */
  withdrawalCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Transaction total withdrawal value */
  withdrawalValue?: Maybe<Scalars['Float']>;
  /** Transaction total fee value */
  withdrawalValueDecimal?: Maybe<Scalars['DecimalNumberAsDiv']>;
};


/** Transaction */
export type CardanoTransactionanyArgs = {
  of: CardanoTransactionsMeasureable;
};


/** Transaction */
export type CardanoTransactionblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction */
export type CardanoTransactioncountArgs = {
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoTransactionUniq>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactioncountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoTransactionUniq>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactiondepositValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactiondepositValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionfeeValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionfeeValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionhashArgs = {
  txHash?: InputMaybe<StringIdSelector>;
};


/** Transaction */
export type CardanoTransactionindexArgs = {
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type CardanoTransactioninputCountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactioninputCountBigIntArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactioninputValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactioninputValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionmaximumArgs = {
  get?: InputMaybe<CardanoTransactionsMeasureable>;
  of: CardanoTransactionsMeasureable;
};


/** Transaction */
export type CardanoTransactionminimumArgs = {
  get?: InputMaybe<CardanoTransactionsMeasureable>;
  of: CardanoTransactionsMeasureable;
};


/** Transaction */
export type CardanoTransactionmintCountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionmintCountBigIntArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionoutputCountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionoutputCountBigIntArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionoutputValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionoutputValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactiontxSizeArgs = {
  txSize?: InputMaybe<IntegerSelector>;
};


/** Transaction */
export type CardanoTransactionwithdrawalCountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionwithdrawalCountBigIntArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionwithdrawalValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};


/** Transaction */
export type CardanoTransactionwithdrawalValueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};

export type CardanoTransactionFilter = {
  date?: InputMaybe<DateSelector>;
  depositValue?: InputMaybe<FloatSelector>;
  feeValue?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  inputAddress?: InputMaybe<AddressSelectorIn>;
  inputCount?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  mintCount?: InputMaybe<IntegerSelector>;
  outputAddress?: InputMaybe<AddressSelectorIn>;
  outputCount?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txSize?: InputMaybe<IntegerSelector>;
  withdrawalCount?: InputMaybe<IntegerSelector>;
  withdrawalValue?: InputMaybe<FloatSelector>;
};

/** Blockchain transaction */
export type CardanoTransactionHashIndexValues = {
  __typename?: 'CardanoTransactionHashIndexValues';
  depositValue: Scalars['Float'];
  /** Transaction deposit value as decimal */
  depositValueDecimal: Scalars['DecimalNumberAsDiv'];
  feeValue: Scalars['Float'];
  /** Transaction fee value as decimal */
  feeValueDecimal: Scalars['DecimalNumberAsDiv'];
  /** Hash hex representation */
  hash: Scalars['String'];
  includedAt: DateTime;
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
  invalidBefore: Scalars['String'];
  invalidHereafter: Scalars['String'];
  metadata: Scalars['String'];
  txSize: Scalars['Int'];
  /** Transaction value in input */
  valueIn: Scalars['Float'];
  /** Transaction value in input as decimal */
  valueInDecimal: Scalars['DecimalNumberAsDiv'];
  /** Transaction value in output */
  valueOut: Scalars['Float'];
  /** Transaction value in output as decimal */
  valueOutDecimal: Scalars['DecimalNumberAsDiv'];
  withdrawalValue: Scalars['Float'];
  /** Transaction withdraw value as decimal */
  withdrawalValueDecimal: Scalars['DecimalNumberAsDiv'];
};

/** Transaction Input */
export type CardanoTransactionInput = {
  __typename?: 'CardanoTransactionInput';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Input count */
  count?: Maybe<Scalars['Int']>;
  /** Input count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of the input */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Input address */
  inputAddress?: Maybe<Address>;
  /** Input index */
  inputIndex?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Output Transaction for this input */
  outputTransaction?: Maybe<TransactionHashIndex>;
  /** Source of the input */
  source?: Maybe<CardanoInputSource>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Input value */
  value?: Maybe<Scalars['Float']>;
  /** Input value as decimal */
  valueDecimal?: Maybe<Scalars['DecimalNumberAsDiv']>;
};


/** Transaction Input */
export type CardanoTransactionInputanyArgs = {
  of: CardanoInputsMeasureable;
};


/** Transaction Input */
export type CardanoTransactionInputblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction Input */
export type CardanoTransactionInputcountArgs = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoInputUniq>;
};


/** Transaction Input */
export type CardanoTransactionInputcountBigIntArgs = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoInputUniq>;
};


/** Transaction Input */
export type CardanoTransactionInputinputAddressArgs = {
  inputAddress?: InputMaybe<AddressSelector>;
};


/** Transaction Input */
export type CardanoTransactionInputinputIndexArgs = {
  inputIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Input */
export type CardanoTransactionInputmaximumArgs = {
  get?: InputMaybe<CardanoInputsMeasureable>;
  of: CardanoInputsMeasureable;
};


/** Transaction Input */
export type CardanoTransactionInputminimumArgs = {
  get?: InputMaybe<CardanoInputsMeasureable>;
  of: CardanoInputsMeasureable;
};


/** Transaction Input */
export type CardanoTransactionInputoutputTransactionArgs = {
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<StringIdSelector>;
};


/** Transaction Input */
export type CardanoTransactionInputtransactionArgs = {
  txId?: InputMaybe<StringIdSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Input */
export type CardanoTransactionInputvalueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Input */
export type CardanoTransactionInputvalueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};

/** Transaction Mint */
export type CardanoTransactionMint = {
  __typename?: 'CardanoTransactionMint';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Mint count */
  count?: Maybe<Scalars['Int']>;
  /** Mint count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of the mint */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Mint value */
  value?: Maybe<Scalars['Float']>;
};


/** Transaction Mint */
export type CardanoTransactionMintanyArgs = {
  of: CardanoMintsMeasureable;
};


/** Transaction Mint */
export type CardanoTransactionMintblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction Mint */
export type CardanoTransactionMintcountArgs = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoMintUniq>;
  value?: InputMaybe<FloatSelector>;
};


/** Transaction Mint */
export type CardanoTransactionMintcountBigIntArgs = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoMintUniq>;
  value?: InputMaybe<FloatSelector>;
};


/** Transaction Mint */
export type CardanoTransactionMintmaximumArgs = {
  get?: InputMaybe<CardanoMintsMeasureable>;
  of: CardanoMintsMeasureable;
};


/** Transaction Mint */
export type CardanoTransactionMintminimumArgs = {
  get?: InputMaybe<CardanoMintsMeasureable>;
  of: CardanoMintsMeasureable;
};


/** Transaction Mint */
export type CardanoTransactionMinttransactionArgs = {
  txId?: InputMaybe<StringIdSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Mint */
export type CardanoTransactionMintvalueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  value?: InputMaybe<FloatSelector>;
};

/** Transaction Output */
export type CardanoTransactionOutput = {
  __typename?: 'CardanoTransactionOutput';
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Output count */
  count?: Maybe<Scalars['Int']>;
  /** Output count */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of the output */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Output address */
  outputAddress?: Maybe<Address>;
  /** Output guessed direction */
  outputDirection?: Maybe<CardanoOutputDirection>;
  /** Output index */
  outputIndex?: Maybe<Scalars['Int']>;
  /** Transaction ID Hash */
  transaction?: Maybe<TransactionHashIndex>;
  /** Output value */
  value?: Maybe<Scalars['Float']>;
  /** Input value as decimal */
  valueDecimal?: Maybe<Scalars['DecimalNumberAsDiv']>;
};


/** Transaction Output */
export type CardanoTransactionOutputanyArgs = {
  of: CardanoOutputsMeasureable;
};


/** Transaction Output */
export type CardanoTransactionOutputblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction Output */
export type CardanoTransactionOutputcountArgs = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<CardanoOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoOutputUniq>;
};


/** Transaction Output */
export type CardanoTransactionOutputcountBigIntArgs = {
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<CardanoOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  uniq?: InputMaybe<CardanoOutputUniq>;
};


/** Transaction Output */
export type CardanoTransactionOutputmaximumArgs = {
  get?: InputMaybe<CardanoOutputsMeasureable>;
  of: CardanoOutputsMeasureable;
};


/** Transaction Output */
export type CardanoTransactionOutputminimumArgs = {
  get?: InputMaybe<CardanoOutputsMeasureable>;
  of: CardanoOutputsMeasureable;
};


/** Transaction Output */
export type CardanoTransactionOutputoutputAddressArgs = {
  outputAddress?: InputMaybe<AddressSelector>;
};


/** Transaction Output */
export type CardanoTransactionOutputoutputDirectionArgs = {
  outputDirection?: InputMaybe<CardanoOutputDirectionSelector>;
};


/** Transaction Output */
export type CardanoTransactionOutputoutputIndexArgs = {
  outputIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Output */
export type CardanoTransactionOutputtransactionArgs = {
  txId?: InputMaybe<StringIdSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Output */
export type CardanoTransactionOutputvalueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  outputAddress?: InputMaybe<AddressSelector>;
  outputDirection?: InputMaybe<CardanoOutputDirectionSelector>;
  outputIndex?: InputMaybe<IntegerSelector>;
  outputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction Output */
export type CardanoTransactionOutputvalueDecimalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<CardanoCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  inOutputIndex?: InputMaybe<IntegerSelector>;
  inOutputTxId?: InputMaybe<HashSelector>;
  inputAddress?: InputMaybe<AddressSelector>;
  inputIndex?: InputMaybe<IntegerSelector>;
  inputValue?: InputMaybe<FloatSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
};

export enum CardanoTransactionUniq {
  /** Unique block count */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates'
}

export enum CardanoTransactionsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Transaction deposit value */
  deposit_value = 'deposit_value',
  /** Input count */
  input_count = 'input_count',
  /** Transaction input value */
  input_value = 'input_value',
  /** Transaction mint count */
  mint_count = 'mint_count',
  /** Output count */
  output_count = 'output_count',
  /** Transaction output value */
  output_value = 'output_value',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction index */
  tx_index = 'tx_index',
  /** Transaction size */
  tx_size = 'tx_size',
  /** Transaction withdrawal count */
  withdrawal_count = 'withdrawal_count',
  /** Transaction withdrawal value */
  withdrawal_value = 'withdrawal_value'
}

/** Transaction attributes in coinpath */
export type CoinpathEntry = {
  __typename?: 'CoinpathEntry';
  /** Amount involved in the flow */
  amount: Scalars['Float'];
  /** Block of transaction */
  height: Scalars['Int'];
  /** Time of transaction in ISO 8601 format */
  timestamp: Scalars['ISO8601DateTime'];
  /** Hash of transaction */
  txHash: Scalars['String'];
  /** Amount transfered in transaction */
  txValue: Scalars['Float'];
};

export enum CoinpathMeasureable {
  /** Block */
  block = 'block',
  /** Depth */
  depth = 'depth',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

/** Limits, Ordering, Constraints, Coinpath Options */
export type CoinpathOptions = {
  /** Ordering field(s) for ascending */
  asc?: InputMaybe<Array<Scalars['String']>>;
  /** Raise error if complexity ( currently measured in transaction count ) is higher than this option */
  complexityLimit?: InputMaybe<Scalars['Int']>;
  /** Ordering field(s) for descending */
  desc?: InputMaybe<Array<Scalars['String']>>;
  /** Flow direction */
  direction?: InputMaybe<FlowDirection>;
  /** Limit number of results */
  limit?: InputMaybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: InputMaybe<LimitByOption>;
  /** Do not expand addresses having count transactions more than this */
  maximumAddressTxCount?: InputMaybe<Scalars['Int']>;
  /** Maximum total transaction count returned */
  maximumTotalTxCount?: InputMaybe<Scalars['Int']>;
  /** Do not include transactions below this amount */
  minimumTxAmount?: InputMaybe<Scalars['Float']>;
  /** Offset of results, starting from 0 */
  offset?: InputMaybe<Scalars['Int']>;
  /** Invalidating cache seed */
  seed?: InputMaybe<Scalars['Int']>;
};

/** Conflux Chain */
export type Conflux = {
  __typename?: 'Conflux';
  /** Basic information about address ( or smart contract ) */
  address: Array<EthereumAddressInfoWithBalance>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<EthereumArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<ConfluxBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EthereumCoinpath>>;
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<EthereumDexTrades>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EthereumSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<EthereumSmartContractEvent>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<ConfluxTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EthereumTransfers>>;
};


/** Conflux Chain */
export type ConfluxaddressArgs = {
  address: Array<EthereumAddressSelectorIn>;
};


/** Conflux Chain */
export type ConfluxargumentsArgs = {
  any?: InputMaybe<Array<EthereumArgumentFilter>>;
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Conflux Chain */
export type ConfluxblocksArgs = {
  any?: InputMaybe<Array<ConfluxBlockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  options?: InputMaybe<QueryOptions>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Conflux Chain */
export type ConfluxcoinpathArgs = {
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<EthereumAddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<EthereumAddressSelector>;
  sender?: InputMaybe<EthereumAddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Conflux Chain */
export type ConfluxdexTradesArgs = {
  any?: InputMaybe<Array<EthereumDexTradeFilter>>;
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  options?: InputMaybe<QueryOptions>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Conflux Chain */
export type ConfluxsmartContractCallsArgs = {
  any?: InputMaybe<Array<EthereumSmartContractCallFilter>>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  success?: InputMaybe<Array<Scalars['Boolean']>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Conflux Chain */
export type ConfluxsmartContractEventsArgs = {
  any?: InputMaybe<Array<EthereumSmartContractEventFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Conflux Chain */
export type ConfluxtransactionsArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<ConfluxTransactionFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Conflux Chain */
export type ConfluxtransfersArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<EthereumTransferFilter>>;
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<Array<EthereumAddressSelector>>;
  sender?: InputMaybe<Array<EthereumAddressSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

export type ConfluxBlockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};

/** Blocks in Conflux blockchain */
export type ConfluxBlocks = {
  __typename?: 'ConfluxBlocks';
  /** Block is adaptive */
  adaptive: Scalars['Boolean'];
  any?: Maybe<Scalars['String']>;
  /** Blame */
  blame: Scalars['Int'];
  /** Block index in epoch */
  blockPosition: Scalars['Int'];
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Epoch in blockchain */
  epoch: Scalars['Int'];
  /** Block hash */
  hash: Scalars['String'];
  /** Block height in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block miner */
  miner?: Maybe<EthereumAddressInfo>;
  minimum?: Maybe<Scalars['String']>;
  /** Block nonce */
  nonce: Scalars['Int'];
  /** Parent block hash */
  parentHash: Scalars['String'];
  /** Block is pivot */
  pivot: Scalars['Boolean'];
  /** Power Quality */
  powerQuality: Scalars['BigInt'];
  refereeCount?: Maybe<Scalars['Int']>;
  refereeCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Reference Block hash */
  referenceBlockHash: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  transactionCount?: Maybe<Scalars['Int']>;
  transactionCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Hash of Transaction included in block */
  txHash: Scalars['String'];
  uncleCount?: Maybe<Scalars['Int']>;
  uncleCountBigInt?: Maybe<Scalars['BigInt']>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksanyArgs = {
  of: ConfluxBlocksMeasureable;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockscountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
  uniq?: InputMaybe<EthereumBlocksUniq>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockscountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
  uniq?: InputMaybe<EthereumBlocksUniq>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksepochArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockshashArgs = {
  blockHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksmaximumArgs = {
  get?: InputMaybe<ConfluxBlocksMeasureable>;
  of: ConfluxBlocksMeasureable;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksminerArgs = {
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksminimumArgs = {
  get?: InputMaybe<ConfluxBlocksMeasureable>;
  of: ConfluxBlocksMeasureable;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksrefereeCountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksrefereeCountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksreferenceBlockHashArgs = {
  referenceBlockHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockssizeArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockstotalDifficultyArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockstransactionCountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockstransactionCountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlockstxHashArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksuncleCountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Conflux blockchain */
export type ConfluxBlocksuncleCountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<BlockSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  pivot?: InputMaybe<Scalars['Boolean']>;
  refereeCount?: InputMaybe<Array<IntegerSelector>>;
  referenceBlockHash?: InputMaybe<HashSelector>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};

export enum ConfluxBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Block Miner */
  miner = 'miner',
  /** Block Referee Count */
  referee_count = 'referee_count',
  /** Time */
  time = 'time',
  /** Block TX Count */
  transaction_count = 'transaction_count'
}

export enum ConfluxNetwork {
  /** Conflux Oceanus */
  conflux_oceanus = 'conflux_oceanus',
  /** Conflux Tethys */
  conflux_tethys = 'conflux_tethys'
}

export type ConfluxTransactionFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};

/** Transactions in Conflux blockchain */
export type ConfluxTransactions = {
  __typename?: 'ConfluxTransactions';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<BlockInfo>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Created smart contract */
  creates?: Maybe<EthereumAddressInfo>;
  /** Currency of amount */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error message if any */
  error?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsanyArgs = {
  of: ConfluxTransactionsMeasureable;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsblockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
  uniq?: InputMaybe<EthereumTransactionsUniq>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
  uniq?: InputMaybe<EthereumTransactionsUniq>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionscreatesArgs = {
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsgasArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsgasCurrencyArgs = {
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsgasPriceArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsgasValueArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionshashArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsindexArgs = {
  txIndex?: InputMaybe<Array<TxIndexSelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsmaximumArgs = {
  get?: InputMaybe<ConfluxTransactionsMeasureable>;
  of: ConfluxTransactionsMeasureable;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionsminimumArgs = {
  get?: InputMaybe<ConfluxTransactionsMeasureable>;
  of: ConfluxTransactionsMeasureable;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionssenderArgs = {
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Transactions in Conflux blockchain */
export type ConfluxTransactionstoArgs = {
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};

export enum ConfluxTransactionsMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Gas used */
  gas = 'gas',
  /** Gas price */
  gas_price = 'gas_price',
  /** Gas value */
  gas_value = 'gas_value',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction Sender */
  tx_sender = 'tx_sender'
}

export enum Continent {
  /** Africa */
  Africa = 'Africa',
  /** Antarctica */
  Antarctica = 'Antarctica',
  /** Asia */
  Asia = 'Asia',
  /** Europe */
  Europe = 'Europe',
  /** North America */
  North_America = 'North_America',
  /** Oceania */
  Oceania = 'Oceania',
  /** South America */
  South_America = 'South_America'
}

/** Continent selector */
export type ContinentSelector = {
  /** Country code in the list */
  in?: InputMaybe<Array<Continent>>;
  /** Country code is */
  is?: InputMaybe<Continent>;
  /** Country code not */
  not?: InputMaybe<Continent>;
  /** Country code not in the list */
  notIn?: InputMaybe<Array<Continent>>;
};

export enum CountryCode {
  /** Andorra */
  AD = 'AD',
  /** United Arab Emirates */
  AE = 'AE',
  /** Afghanistan */
  AF = 'AF',
  /** Antigua and Barbuda */
  AG = 'AG',
  /** Anguilla */
  AI = 'AI',
  /** Albania */
  AL = 'AL',
  /** Armenia */
  AM = 'AM',
  /** Netherlands Antilles */
  AN = 'AN',
  /** Angola */
  AO = 'AO',
  /** Antarctica */
  AQ = 'AQ',
  /** Argentina */
  AR = 'AR',
  /** American Samoa */
  AS = 'AS',
  /** Austria */
  AT = 'AT',
  /** Australia */
  AU = 'AU',
  /** Aruba */
  AW = 'AW',
  /** Azerbaijan */
  AZ = 'AZ',
  /** Bosnia and Herzegovina */
  BA = 'BA',
  /** Barbados */
  BB = 'BB',
  /** Bangladesh */
  BD = 'BD',
  /** Belgium */
  BE = 'BE',
  /** Burkina Faso */
  BF = 'BF',
  /** Bulgaria */
  BG = 'BG',
  /** Bahrain */
  BH = 'BH',
  /** Burundi */
  BI = 'BI',
  /** Benin */
  BJ = 'BJ',
  /** Saint Barthelemy */
  BL = 'BL',
  /** Bermuda */
  BM = 'BM',
  /** Brunei */
  BN = 'BN',
  /** Bolivia */
  BO = 'BO',
  /** Brazil */
  BR = 'BR',
  /** Bahamas */
  BS = 'BS',
  /** Bhutan */
  BT = 'BT',
  /** Botswana */
  BW = 'BW',
  /** Belarus */
  BY = 'BY',
  /** Belize */
  BZ = 'BZ',
  /** Canada */
  CA = 'CA',
  /** Cocos Islands */
  CC = 'CC',
  /** Democratic Republic of the Congo */
  CD = 'CD',
  /** Central African Republic */
  CF = 'CF',
  /** Republic of the Congo */
  CG = 'CG',
  /** Switzerland */
  CH = 'CH',
  /** Ivory Coast */
  CI = 'CI',
  /** Cook Islands */
  CK = 'CK',
  /** Chile */
  CL = 'CL',
  /** Cameroon */
  CM = 'CM',
  /** China */
  CN = 'CN',
  /** Colombia */
  CO = 'CO',
  /** Costa Rica */
  CR = 'CR',
  /** Cuba */
  CU = 'CU',
  /** Cape Verde */
  CV = 'CV',
  /** Curacao */
  CW = 'CW',
  /** Christmas Island */
  CX = 'CX',
  /** Cyprus */
  CY = 'CY',
  /** Czech Republic */
  CZ = 'CZ',
  /** Germany */
  DE = 'DE',
  /** Djibouti */
  DJ = 'DJ',
  /** Denmark */
  DK = 'DK',
  /** Dominica */
  DM = 'DM',
  /** Dominican Republic */
  DO = 'DO',
  /** Algeria */
  DZ = 'DZ',
  /** Ecuador */
  EC = 'EC',
  /** Estonia */
  EE = 'EE',
  /** Egypt */
  EG = 'EG',
  /** Western Sahara */
  EH = 'EH',
  /** Eritrea */
  ER = 'ER',
  /** Spain */
  ES = 'ES',
  /** Ethiopia */
  ET = 'ET',
  /** Finland */
  FI = 'FI',
  /** Fiji */
  FJ = 'FJ',
  /** Falkland Islands */
  FK = 'FK',
  /** Micronesia */
  FM = 'FM',
  /** Faroe Islands */
  FO = 'FO',
  /** France */
  FR = 'FR',
  /** Gabon */
  GA = 'GA',
  /** United Kingdom */
  GB = 'GB',
  /** Grenada */
  GD = 'GD',
  /** Georgia */
  GE = 'GE',
  /** Guernsey */
  GG = 'GG',
  /** Ghana */
  GH = 'GH',
  /** Gibraltar */
  GI = 'GI',
  /** Greenland */
  GL = 'GL',
  /** Gambia */
  GM = 'GM',
  /** Guinea */
  GN = 'GN',
  /** Equatorial Guinea */
  GQ = 'GQ',
  /** Greece */
  GR = 'GR',
  /** Guatemala */
  GT = 'GT',
  /** Guam */
  GU = 'GU',
  /** Guinea-Bissau */
  GW = 'GW',
  /** Guyana */
  GY = 'GY',
  /** Hong Kong */
  HK = 'HK',
  /** Honduras */
  HN = 'HN',
  /** Croatia */
  HR = 'HR',
  /** Haiti */
  HT = 'HT',
  /** Hungary */
  HU = 'HU',
  /** Indonesia */
  ID = 'ID',
  /** Ireland */
  IE = 'IE',
  /** Israel */
  IL = 'IL',
  /** Isle of Man */
  IM = 'IM',
  /** India */
  IN = 'IN',
  /** British Indian Ocean Territory */
  IO = 'IO',
  /** Iraq */
  IQ = 'IQ',
  /** Iran */
  IR = 'IR',
  /** Iceland */
  IS = 'IS',
  /** Italy */
  IT = 'IT',
  /** Jersey */
  JE = 'JE',
  /** Jamaica */
  JM = 'JM',
  /** Jordan */
  JO = 'JO',
  /** Japan */
  JP = 'JP',
  /** Kenya */
  KE = 'KE',
  /** Kyrgyzstan */
  KG = 'KG',
  /** Cambodia */
  KH = 'KH',
  /** Kiribati */
  KI = 'KI',
  /** Comoros */
  KM = 'KM',
  /** Saint Kitts and Nevis */
  KN = 'KN',
  /** North Korea */
  KP = 'KP',
  /** South Korea */
  KR = 'KR',
  /** Kuwait */
  KW = 'KW',
  /** Cayman Islands */
  KY = 'KY',
  /** Kazakhstan */
  KZ = 'KZ',
  /** Laos */
  LA = 'LA',
  /** Lebanon */
  LB = 'LB',
  /** Saint Lucia */
  LC = 'LC',
  /** Liechtenstein */
  LI = 'LI',
  /** Sri Lanka */
  LK = 'LK',
  /** Liberia */
  LR = 'LR',
  /** Lesotho */
  LS = 'LS',
  /** Lithuania */
  LT = 'LT',
  /** Luxembourg */
  LU = 'LU',
  /** Latvia */
  LV = 'LV',
  /** Libya */
  LY = 'LY',
  /** Morocco */
  MA = 'MA',
  /** Monaco */
  MC = 'MC',
  /** Moldova */
  MD = 'MD',
  /** Montenegro */
  ME = 'ME',
  /** Saint Martin */
  MF = 'MF',
  /** Madagascar */
  MG = 'MG',
  /** Marshall Islands */
  MH = 'MH',
  /** Macedonia */
  MK = 'MK',
  /** Mali */
  ML = 'ML',
  /** Myanmar */
  MM = 'MM',
  /** Mongolia */
  MN = 'MN',
  /** Macau */
  MO = 'MO',
  /** Northern Mariana Islands */
  MP = 'MP',
  /** Mauritania */
  MR = 'MR',
  /** Montserrat */
  MS = 'MS',
  /** Malta */
  MT = 'MT',
  /** Mauritius */
  MU = 'MU',
  /** Maldives */
  MV = 'MV',
  /** Malawi */
  MW = 'MW',
  /** Mexico */
  MX = 'MX',
  /** Malaysia */
  MY = 'MY',
  /** Mozambique */
  MZ = 'MZ',
  /** Namibia */
  NA = 'NA',
  /** New Caledonia */
  NC = 'NC',
  /** Niger */
  NE = 'NE',
  /** Nigeria */
  NG = 'NG',
  /** Nicaragua */
  NI = 'NI',
  /** Netherlands */
  NL = 'NL',
  /** Norway */
  NO = 'NO',
  /** Nepal */
  NP = 'NP',
  /** Nauru */
  NR = 'NR',
  /** Niue */
  NU = 'NU',
  /** New Zealand */
  NZ = 'NZ',
  /** Oman */
  OM = 'OM',
  /** Panama */
  PA = 'PA',
  /** Peru */
  PE = 'PE',
  /** French Polynesia */
  PF = 'PF',
  /** Papua New Guinea */
  PG = 'PG',
  /** Philippines */
  PH = 'PH',
  /** Pakistan */
  PK = 'PK',
  /** Poland */
  PL = 'PL',
  /** Saint Pierre and Miquelon */
  PM = 'PM',
  /** Pitcairn */
  PN = 'PN',
  /** Puerto Rico */
  PR = 'PR',
  /** Palestine */
  PS = 'PS',
  /** Portugal */
  PT = 'PT',
  /** Palau */
  PW = 'PW',
  /** Paraguay */
  PY = 'PY',
  /** Qatar */
  QA = 'QA',
  /** Reunion */
  RE = 'RE',
  /** Romania */
  RO = 'RO',
  /** Serbia */
  RS = 'RS',
  /** Russia */
  RU = 'RU',
  /** Rwanda */
  RW = 'RW',
  /** Saudi Arabia */
  SA = 'SA',
  /** Solomon Islands */
  SB = 'SB',
  /** Seychelles */
  SC = 'SC',
  /** Sudan */
  SD = 'SD',
  /** Sweden */
  SE = 'SE',
  /** Singapore */
  SG = 'SG',
  /** Saint Helena */
  SH = 'SH',
  /** Slovenia */
  SI = 'SI',
  /** Svalbard and Jan Mayen */
  SJ = 'SJ',
  /** Slovakia */
  SK = 'SK',
  /** Sierra Leone */
  SL = 'SL',
  /** San Marino */
  SM = 'SM',
  /** Senegal */
  SN = 'SN',
  /** Somalia */
  SO = 'SO',
  /** Suriname */
  SR = 'SR',
  /** South Sudan */
  SS = 'SS',
  /** Sao Tome and Principe */
  ST = 'ST',
  /** El Salvador */
  SV = 'SV',
  /** Sint Maarten */
  SX = 'SX',
  /** Syria */
  SY = 'SY',
  /** Swaziland */
  SZ = 'SZ',
  /** Turks and Caicos Islands */
  TC = 'TC',
  /** Chad */
  TD = 'TD',
  /** Togo */
  TG = 'TG',
  /** Thailand */
  TH = 'TH',
  /** Tajikistan */
  TJ = 'TJ',
  /** Tokelau */
  TK = 'TK',
  /** East Timor */
  TL = 'TL',
  /** Turkmenistan */
  TM = 'TM',
  /** Tunisia */
  TN = 'TN',
  /** Tonga */
  TO = 'TO',
  /** Turkey */
  TR = 'TR',
  /** Trinidad and Tobago */
  TT = 'TT',
  /** Tuvalu */
  TV = 'TV',
  /** Taiwan */
  TW = 'TW',
  /** Tanzania */
  TZ = 'TZ',
  /** Ukraine */
  UA = 'UA',
  /** Uganda */
  UG = 'UG',
  /** United States */
  US = 'US',
  /** Uruguay */
  UY = 'UY',
  /** Uzbekistan */
  UZ = 'UZ',
  /** Vatican */
  VA = 'VA',
  /** Saint Vincent and the Grenadines */
  VC = 'VC',
  /** Venezuela */
  VE = 'VE',
  /** British Virgin Islands */
  VG = 'VG',
  /** U.S. Virgin Islands */
  VI = 'VI',
  /** Vietnam */
  VN = 'VN',
  /** Vanuatu */
  VU = 'VU',
  /** Wallis and Futuna */
  WF = 'WF',
  /** Samoa */
  WS = 'WS',
  /** Kosovo */
  XK = 'XK',
  /** Yemen */
  YE = 'YE',
  /** Mayotte */
  YT = 'YT',
  /** South Africa */
  ZA = 'ZA',
  /** Zambia */
  ZM = 'ZM',
  /** Zimbabwe */
  ZW = 'ZW'
}

/** Country selector by 3 digit ISO code */
export type CountrySelector = {
  /** Country code in the list */
  in?: InputMaybe<Array<CountryCode>>;
  /** Country code is */
  is?: InputMaybe<CountryCode>;
  /** Country code not */
  not?: InputMaybe<CountryCode>;
  /** Country code not in the list */
  notIn?: InputMaybe<Array<CountryCode>>;
};

/** Country */
export type CovidCountry = {
  __typename?: 'CovidCountry';
  /** Area, km2 */
  areaKm2?: Maybe<Scalars['Float']>;
  /** Continent name */
  continent?: Maybe<Continent>;
  /** Gross Domestic Product */
  gdp?: Maybe<Scalars['Float']>;
  /** ISO 2 letter code */
  iso2?: Maybe<CountryCode>;
  /** ISO 3 letter code */
  iso3?: Maybe<Scalars['String']>;
  /** ISO numeric code */
  isoNumeric?: Maybe<Scalars['Int']>;
  /** Location latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Location longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Country name */
  name?: Maybe<Scalars['String']>;
  /** Population density in thousands per km2 */
  populationPerKm2?: Maybe<Scalars['Float']>;
  /** Population total in thousands */
  populationTotal?: Maybe<Scalars['Float']>;
};

/** Facts of Covid virus development */
export type CovidFact = {
  __typename?: 'CovidFact';
  /** Count of confirmed cases */
  confirmed?: Maybe<Scalars['Int']>;
  /** Country */
  country?: Maybe<CovidCountry>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Count of death cases */
  deaths?: Maybe<Scalars['Int']>;
  /** Location */
  location?: Maybe<CovidLocation>;
  /** Count of recovered cases */
  recovered?: Maybe<Scalars['Int']>;
};


/** Facts of Covid virus development */
export type CovidFactconfirmedArgs = {
  continent?: InputMaybe<ContinentSelector>;
  country?: InputMaybe<CountrySelector>;
  date?: InputMaybe<DateSelector>;
};


/** Facts of Covid virus development */
export type CovidFactcountryArgs = {
  continent?: InputMaybe<ContinentSelector>;
  country?: InputMaybe<CountrySelector>;
};


/** Facts of Covid virus development */
export type CovidFactdeathsArgs = {
  continent?: InputMaybe<ContinentSelector>;
  country?: InputMaybe<CountrySelector>;
  date?: InputMaybe<DateSelector>;
};


/** Facts of Covid virus development */
export type CovidFactrecoveredArgs = {
  continent?: InputMaybe<ContinentSelector>;
  country?: InputMaybe<CountrySelector>;
  date?: InputMaybe<DateSelector>;
};

/** Covid History */
export type CovidHistory = {
  __typename?: 'CovidHistory';
  /** COVID daily facts */
  facts?: Maybe<Array<CovidFact>>;
};


/** Covid History */
export type CovidHistoryfactsArgs = {
  continent?: InputMaybe<ContinentSelector>;
  country?: InputMaybe<CountrySelector>;
  date?: InputMaybe<DateSelector>;
  options?: InputMaybe<QueryOptions>;
};

/** Geo Location */
export type CovidLocation = {
  __typename?: 'CovidLocation';
  /** Admin center name */
  adminCenter?: Maybe<Scalars['String']>;
  /** FIPS code for USA */
  fipsCode?: Maybe<Scalars['Int']>;
  /** Location latitude */
  latitude?: Maybe<Scalars['Float']>;
  /** Location longitude */
  longitude?: Maybe<Scalars['Float']>;
  /** Location Country name */
  name?: Maybe<Scalars['String']>;
  /** Location Province / State name */
  province?: Maybe<Scalars['String']>;
};

/** Crypto currency ( token, coin, currency ) */
export type Currency = {
  __typename?: 'Currency';
  /** Token Smart Contract Address */
  address?: Maybe<Scalars['String']>;
  /** Decimals */
  decimals: Scalars['Int'];
  /** Currency name */
  name?: Maybe<Scalars['String']>;
  /** Currency symbol */
  symbol: Scalars['String'];
  /** Token ID */
  tokenId?: Maybe<Scalars['String']>;
  /** Token Type */
  tokenType?: Maybe<Scalars['String']>;
};

/** Currency selector */
export type CurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Instruction Data */
export type Data = {
  __typename?: 'Data';
  base58: Scalars['String'];
  hex: Scalars['String'];
};

/** Date */
export type Date = {
  __typename?: 'Date';
  /** String date representation with default format as YYYY-MM-DD */
  date: Scalars['String'];
  /** Day of month (1-31) */
  dayOfMonth: Scalars['Int'];
  /** Day of week  (Monday is 1, and Sunday is 7) */
  dayOfWeek: Scalars['Int'];
  /** Month number (1-12) */
  month: Scalars['Int'];
  /**
   * Returns start of date interval ,
   *     date representation with default format as YYYY-MM-DD. Example is start of interval for 3 weeks each,
   *   starting on wednesdays will read as: 'startOfInterval(unit: week, interval: 3, offset: 2)'
   */
  startOfInterval: Scalars['String'];
  /** Year number */
  year: Scalars['Int'];
};


/** Date */
export type DatedateArgs = {
  format?: InputMaybe<Scalars['String']>;
};


/** Date */
export type DatestartOfIntervalArgs = {
  format?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  unit: DateInterval;
};

export enum DateInterval {
  /** Day */
  day = 'day',
  /** Month */
  month = 'month',
  /** Week */
  week = 'week',
  /** Year */
  year = 'year'
}

/** Selecting the date in a range, list or just date */
export type DateSelector = {
  /** After date */
  after?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Before date */
  before?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Range of dates */
  between?: InputMaybe<Array<Scalars['ISO8601DateTime']>>;
  /** In dates */
  in?: InputMaybe<Array<Scalars['ISO8601DateTime']>>;
  /** Date equals */
  is?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Date not equals */
  not?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Not in dates */
  notIn?: InputMaybe<Array<Scalars['ISO8601DateTime']>>;
  /** Since date */
  since?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Till date */
  till?: InputMaybe<Scalars['ISO8601DateTime']>;
};

/** Date and Time */
export type DateTime = {
  __typename?: 'DateTime';
  /** Day of month (1-31) */
  dayOfMonth: Scalars['Int'];
  /** Day of week  (Monday is 1, and Sunday is 7) */
  dayOfWeek: Scalars['Int'];
  /** Hour (0-23) */
  hour: Scalars['Int'];
  /** ISO8601 date time such as '2020-03-02T13:30:41+00:00' */
  iso8601: Scalars['ISO8601DateTime'];
  /** Minute (0-59) */
  minute: Scalars['Int'];
  /** Month number (1-12) */
  month: Scalars['Int'];
  /** Second (0-59) */
  second: Scalars['Int'];
  /** String date representation with default format as YYYY-MM-DD */
  time: Scalars['String'];
  /** Unix timestamp */
  unixtime: Scalars['Int'];
  /** Year number */
  year: Scalars['Int'];
};


/** Date and Time */
export type DateTimetimeArgs = {
  format?: InputMaybe<Scalars['String']>;
};

/** Selecting the time in a range, list or just time */
export type DateTimeSelector = {
  /** After time */
  after?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Before time */
  before?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Range of time */
  between?: InputMaybe<Array<Scalars['ISO8601DateTime']>>;
  /** In times */
  in?: InputMaybe<Array<Scalars['ISO8601DateTime']>>;
  /** Time equals */
  is?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Time not equals */
  not?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Not in times */
  notIn?: InputMaybe<Array<Scalars['ISO8601DateTime']>>;
  /** Since time */
  since?: InputMaybe<Scalars['ISO8601DateTime']>;
  /** Till time */
  till?: InputMaybe<Scalars['ISO8601DateTime']>;
};

export enum DiemNetwork {
  /** Diem Testnet */
  diem_testnet = 'diem_testnet',
  /** Libra Testnet */
  libra_testnet = 'libra_testnet'
}

/** Elrond Chain */
export type Elrond = {
  __typename?: 'Elrond';
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<ElrondArgument>>;
  /** Information about validators of the block */
  blockValidators?: Maybe<Array<ElrondBlockValidator>>;
  /** Information about blocks */
  blocks?: Maybe<Array<ElrondBlock>>;
  /** Information about calls */
  callResults?: Maybe<Array<ElrondCallResult>>;
  /** Information about calls */
  calls?: Maybe<Array<ElrondCall>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<ElrondCoinpath>>;
  /** Information about miniblocks */
  miniblocks?: Maybe<Array<ElrondMiniblock>>;
  /** Information about notarized block */
  notarizedBlock?: Maybe<Array<ElrondNotarizedBlock>>;
  /** Information about transactions */
  transactions?: Maybe<Array<ElrondTransaction>>;
  /** Information about transactions */
  transfers?: Maybe<Array<ElrondTransfer>>;
};


/** Elrond Chain */
export type ElrondargumentsArgs = {
  any?: InputMaybe<Array<ElrondArgumentFilter>>;
  argumentIndex?: InputMaybe<IntegerSelector>;
  argumentValue?: InputMaybe<IntIdSelector>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  callDepth?: InputMaybe<IntegerSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  smartContractAddress?: InputMaybe<HashSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Elrond Chain */
export type ElrondblockValidatorsArgs = {
  any?: InputMaybe<Array<ElrondBlockValidatorFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  validator?: InputMaybe<HashSelector>;
};


/** Elrond Chain */
export type ElrondblocksArgs = {
  any?: InputMaybe<Array<ElrondBlockFilter>>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<IntegerSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Elrond Chain */
export type ElrondcallResultsArgs = {
  any?: InputMaybe<Array<ElrondCallResultFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  callResultData?: InputMaybe<StringSelector>;
  callResultDataOperation?: InputMaybe<StringSelector>;
  callResultGasLimit?: InputMaybe<FloatSelector>;
  callResultGasPrice?: InputMaybe<FloatSelector>;
  callResultHash?: InputMaybe<HashSelector>;
  callResultIndex?: InputMaybe<IntegerSelector>;
  callResultNonce?: InputMaybe<IntegerSelector>;
  callResultReceiver?: InputMaybe<HashSelector>;
  callResultRelayedValue?: InputMaybe<FloatSelector>;
  callResultSender?: InputMaybe<HashSelector>;
  callResultType?: InputMaybe<StringSelector>;
  callResultValue?: InputMaybe<FloatSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  originTxHash?: InputMaybe<HashSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  previousTxHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  relayed?: InputMaybe<StringSelector>;
  returnMessage?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Elrond Chain */
export type ElrondcallsArgs = {
  any?: InputMaybe<Array<ElrondCallFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  callDepth?: InputMaybe<StringSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  smartContractAddress?: InputMaybe<HashSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Elrond Chain */
export type ElrondcoinpathArgs = {
  currency?: InputMaybe<CurrencySelector>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Elrond Chain */
export type ElrondminiblocksArgs = {
  any?: InputMaybe<Array<ElrondMiniblockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  options?: InputMaybe<QueryOptions>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  receiverBlockHash?: InputMaybe<HashSelector>;
  receiverShard?: InputMaybe<BigIntIdSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Elrond Chain */
export type ElrondnotarizedBlockArgs = {
  any?: InputMaybe<Array<ElrondNotarizedBlockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  notarizedBlockHash?: InputMaybe<HashSelector>;
  options?: InputMaybe<QueryOptions>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Elrond Chain */
export type ElrondtransactionsArgs = {
  any?: InputMaybe<Array<ElrondTransactionFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  fee?: InputMaybe<FloatSelector>;
  gasLimit?: InputMaybe<FloatSelector>;
  gasPrice?: InputMaybe<FloatSelector>;
  gasUsed?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  options?: InputMaybe<QueryOptions>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txNonce?: InputMaybe<IntegerSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  txValue?: InputMaybe<FloatSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Elrond Chain */
export type ElrondtransfersArgs = {
  any?: InputMaybe<Array<ElrondTransferFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  currency?: InputMaybe<CurrencySelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  metadata?: InputMaybe<StringSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nftNonce?: InputMaybe<IntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  transferReason?: InputMaybe<TransferReasonSelector>;
  transferReceiver?: InputMaybe<AddressSelector>;
  transferSender?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};

/** Blockchain address hash */
export type ElrondAddressHash = {
  __typename?: 'ElrondAddressHash';
  /** String hex address representation */
  hex: Scalars['String'];
};

/** Arguments of Smart Contract Calls and Events */
export type ElrondArgument = {
  __typename?: 'ElrondArgument';
  any?: Maybe<Scalars['String']>;
  /** Information about arguments call */
  call?: Maybe<CallElrond>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Index of the argument */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  /** Information about arguments miniblock */
  miniblock?: Maybe<MiniblockElrond>;
  minimum?: Maybe<Scalars['String']>;
  /** Information about arguments block */
  senderBlock?: Maybe<ElrondBlockDimension>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Information about arguments transaction */
  transaction?: Maybe<TransactionElrond>;
  /** Value of the argument */
  value?: Maybe<Scalars['String']>;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentanyArgs = {
  of: ElrondArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentcallArgs = {
  callDepth?: InputMaybe<IntegerSelector>;
  smartContractAddress?: InputMaybe<HashSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentcountArgs = {
  uniq?: InputMaybe<ElrondArgumentUniq>;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentcountBigIntArgs = {
  uniq?: InputMaybe<ElrondArgumentUniq>;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentindexArgs = {
  argumentIndex?: InputMaybe<IntIdSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentmaximumArgs = {
  get?: InputMaybe<ElrondArgumentsMeasureable>;
  of: ElrondArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentminiblockArgs = {
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentminimumArgs = {
  get?: InputMaybe<ElrondArgumentsMeasureable>;
  of: ElrondArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentsenderBlockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumenttransactionArgs = {
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  index?: InputMaybe<IntegerSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  signature?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type ElrondArgumentvalueArgs = {
  argumentValue?: InputMaybe<StringSelector>;
};

export type ElrondArgumentFilter = {
  argumentIndex?: InputMaybe<IntegerSelector>;
  argumentValue?: InputMaybe<IntIdSelector>;
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  callDepth?: InputMaybe<IntegerSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  smartContractAddress?: InputMaybe<HashSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};

export enum ElrondArgumentUniq {
  /** Unique number of arguments */
  argument_index = 'argument_index',
  /** Unique Number of block in the blockchains */
  block_height = 'block_height',
  /** Unique date count */
  dates = 'dates',
  /** Unique Transaction Hash */
  signature = 'signature',
  /** Unique time */
  times = 'times'
}

export enum ElrondArgumentsMeasureable {
  /** Argument Index */
  argument_index = 'argument_index',
  /** Argument Value */
  argument_value = 'argument_value',
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Smart Contract call path */
  call_depth = 'call_depth',
  /** Data */
  data = 'data',
  /** Date */
  date = 'date',
  /** Gas Limit */
  gas_limit = 'gas_limit',
  /** Gas Price */
  gas_price = 'gas_price',
  /** Gas Used */
  gas_used = 'gas_used',
  /** Number of block in the blockhains */
  height = 'height',
  /** Hash of the miniblock */
  miniblock_hash = 'miniblock_hash',
  /** Hash of the miniblocks receiver block */
  miniblock_receiver_block_hash = 'miniblock_receiver_block_hash',
  /** Miniblock receiver shard */
  miniblock_receiver_shard = 'miniblock_receiver_shard',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Smart Contract Address */
  smart_contract_address = 'smart_contract_address',
  /** Time */
  time = 'time',
  /** The block hash of this block`s parent */
  transaction_count = 'transaction_count',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Receiver hash */
  tx_receiver = 'tx_receiver',
  /** Shard number of the receiver */
  tx_receiver_shard = 'tx_receiver_shard',
  /** Sender hash */
  tx_sender = 'tx_sender',
  /** Shard number of the sender */
  tx_sender_shard = 'tx_sender_shard',
  /** Transaction Signature */
  tx_signature = 'tx_signature',
  /** Value */
  tx_value = 'tx_value',
  /** Type of miniblock */
  type = 'type'
}

/** Blocks in Elrond  blockchain */
export type ElrondBlock = {
  __typename?: 'ElrondBlock';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Epoch */
  epoch?: Maybe<Scalars['Int']>;
  /** Hash of the the block */
  hash?: Maybe<Scalars['String']>;
  /** Number of block in the blockchains */
  height?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block Height */
  nonce?: Maybe<Scalars['BigInt']>;
  /** The block hash of this block`s parent */
  previousBlockHash?: Maybe<Scalars['String']>;
  /** Proposer block hash */
  proposer?: Maybe<ElrondAddressHash>;
  /** Public Key Bitmap */
  publicKeyBitmap?: Maybe<Scalars['String']>;
  /** Round */
  round?: Maybe<Scalars['BigInt']>;
  /** Shard number of block */
  shard?: Maybe<Scalars['String']>;
  /** Size */
  size?: Maybe<Scalars['Int']>;
  /** Size Tx */
  sizeTxs?: Maybe<Scalars['Int']>;
  /** State root hash */
  stateRootHash?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Count of transactions in this block */
  transactionCount?: Maybe<Scalars['BigInt']>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockanyArgs = {
  of: ElrondBlocksMeasureable;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockcountArgs = {
  uniq?: InputMaybe<ElrondBlockUniq>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockcountBigIntArgs = {
  uniq?: InputMaybe<ElrondBlockUniq>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockepochArgs = {
  epoch?: InputMaybe<IntegerSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockhashArgs = {
  hash?: InputMaybe<HashSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockmaximumArgs = {
  get?: InputMaybe<ElrondBlocksMeasureable>;
  of: ElrondBlocksMeasureable;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockminimumArgs = {
  get?: InputMaybe<ElrondBlocksMeasureable>;
  of: ElrondBlocksMeasureable;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlocknonceArgs = {
  nonce?: InputMaybe<IntegerSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockpreviousBlockHashArgs = {
  previousBlockHash?: InputMaybe<HashSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockproposerArgs = {
  proposer?: InputMaybe<HashSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockpublicKeyBitmapArgs = {
  publicKeyBitmap?: InputMaybe<StringSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockroundArgs = {
  round?: InputMaybe<IntegerSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockshardArgs = {
  shard?: InputMaybe<BigIntIdSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlocksizeArgs = {
  size?: InputMaybe<IntegerSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlocksizeTxsArgs = {
  sizeTxs?: InputMaybe<IntegerSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlockstateRootHashArgs = {
  stateRootHash?: InputMaybe<HashSelector>;
};


/** Blocks in Elrond  blockchain */
export type ElrondBlocktransactionCountArgs = {
  transactionCount?: InputMaybe<IntegerSelector>;
};

/** Information about block */
export type ElrondBlockDimension = {
  __typename?: 'ElrondBlockDimension';
  /** Epoch */
  epoch?: Maybe<Scalars['Int']>;
  /** Hash of the block */
  hash?: Maybe<Scalars['String']>;
  /** Number of block in the blockchains */
  height?: Maybe<Scalars['BigInt']>;
  /** Block Height */
  nonce?: Maybe<Scalars['BigInt']>;
  /** The block hash of this block`s parent */
  previousBlockHash?: Maybe<Scalars['String']>;
  /** Proposer block hash */
  proposer?: Maybe<ElrondAddressHash>;
  /** Public Key Bitmap */
  publicKeyBitmap?: Maybe<Scalars['String']>;
  /** Round */
  round?: Maybe<Scalars['BigInt']>;
  /** Shard number of block */
  shard?: Maybe<Scalars['String']>;
  /** Size */
  size?: Maybe<Scalars['Int']>;
  /** Size Tx */
  sizeTxs?: Maybe<Scalars['Int']>;
  /** State root hash */
  stateRootHash?: Maybe<Scalars['String']>;
  /** Count of transactions in this block */
  transactionCount?: Maybe<Scalars['BigInt']>;
};


/** Information about block */
export type ElrondBlockDimensionepochArgs = {
  epoch?: InputMaybe<IntegerSelector>;
};


/** Information about block */
export type ElrondBlockDimensionhashArgs = {
  blockHash?: InputMaybe<HashSelector>;
};


/** Information about block */
export type ElrondBlockDimensionheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Information about block */
export type ElrondBlockDimensionnonceArgs = {
  blockNonce?: InputMaybe<IntegerSelector>;
};


/** Information about block */
export type ElrondBlockDimensionpreviousBlockHashArgs = {
  previousBlockHash?: InputMaybe<HashSelector>;
};


/** Information about block */
export type ElrondBlockDimensionproposerArgs = {
  proposer?: InputMaybe<HashSelector>;
};


/** Information about block */
export type ElrondBlockDimensionpublicKeyBitmapArgs = {
  publicKeyBitmap?: InputMaybe<StringSelector>;
};


/** Information about block */
export type ElrondBlockDimensionroundArgs = {
  round?: InputMaybe<IntegerSelector>;
};


/** Information about block */
export type ElrondBlockDimensionshardArgs = {
  shard?: InputMaybe<IntIdSelector>;
};


/** Information about block */
export type ElrondBlockDimensionsizeArgs = {
  size?: InputMaybe<IntegerSelector>;
};


/** Information about block */
export type ElrondBlockDimensionsizeTxsArgs = {
  sizeTxs?: InputMaybe<IntegerSelector>;
};


/** Information about block */
export type ElrondBlockDimensionstateRootHashArgs = {
  stateRootHash?: InputMaybe<HashSelector>;
};


/** Information about block */
export type ElrondBlockDimensiontransactionCountArgs = {
  transactionCount?: InputMaybe<IntegerSelector>;
};

export type ElrondBlockFilter = {
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<IntegerSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};

export enum ElrondBlockUniq {
  /** Unique Number of Shards in the blockchains */
  block_shard = 'block_shard',
  /** Unique date count */
  dates = 'dates',
  /** Unique Number of block in the blockchains */
  height = 'height',
  /** Unique time */
  times = 'times'
}

/** BlockValidators in Elrond  blockchain */
export type ElrondBlockValidator = {
  __typename?: 'ElrondBlockValidator';
  any?: Maybe<Scalars['String']>;
  /** Information about blocks notarized block */
  block?: Maybe<ElrondBlockDimension>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Hash of validator */
  validator?: Maybe<ElrondAddressHash>;
};


/** BlockValidators in Elrond  blockchain */
export type ElrondBlockValidatoranyArgs = {
  of: ElrondBlockValidatorsMeasureable;
};


/** BlockValidators in Elrond  blockchain */
export type ElrondBlockValidatorblockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** BlockValidators in Elrond  blockchain */
export type ElrondBlockValidatorcountArgs = {
  uniq?: InputMaybe<ElrondBlockValidatorUniq>;
};


/** BlockValidators in Elrond  blockchain */
export type ElrondBlockValidatorcountBigIntArgs = {
  uniq?: InputMaybe<ElrondBlockValidatorUniq>;
};


/** BlockValidators in Elrond  blockchain */
export type ElrondBlockValidatormaximumArgs = {
  get?: InputMaybe<ElrondBlockValidatorsMeasureable>;
  of: ElrondBlockValidatorsMeasureable;
};


/** BlockValidators in Elrond  blockchain */
export type ElrondBlockValidatorminimumArgs = {
  get?: InputMaybe<ElrondBlockValidatorsMeasureable>;
  of: ElrondBlockValidatorsMeasureable;
};


/** BlockValidators in Elrond  blockchain */
export type ElrondBlockValidatorvalidatorArgs = {
  validator?: InputMaybe<HashSelector>;
};

export type ElrondBlockValidatorFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  validator?: InputMaybe<HashSelector>;
};

export enum ElrondBlockValidatorUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique Number of block in the blockchains */
  height = 'height',
  /** Unique time */
  times = 'times',
  /** Unique number of validators */
  validators = 'validators'
}

export enum ElrondBlockValidatorsMeasureable {
  /** Date */
  date = 'date',
  /** Block epoch */
  epoch = 'epoch',
  /** Hash of the the block */
  hash = 'hash',
  /** Number of block in the blockhains */
  height = 'height',
  /** Block nonce */
  nonce = 'nonce',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Block proposer */
  proposer = 'proposer',
  /** Block public key bitmap */
  public_key_bitmap = 'public_key_bitmap',
  /** Block round */
  round = 'round',
  /** Shard number of block */
  shard = 'shard',
  /** Block size */
  size = 'size',
  /** Block size txs */
  size_txs = 'size_txs',
  /** State root hash */
  state_root_hash = 'state_root_hash',
  /** Time */
  time = 'time',
  /** Count of transactions in this block */
  transaction_count = 'transaction_count',
  /** Hash of the validator */
  validator = 'validator'
}

export enum ElrondBlocksMeasureable {
  /** Date */
  date = 'date',
  /** Block epoch */
  epoch = 'epoch',
  /** Hash of the the block */
  hash = 'hash',
  /** Number of block in the blockhains */
  height = 'height',
  /** Block nonce */
  nonce = 'nonce',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Block proposer */
  proposer = 'proposer',
  /** Block public key bitmap */
  public_key_bitmap = 'public_key_bitmap',
  /** Block round */
  round = 'round',
  /** Shard number of block */
  shard = 'shard',
  /** Block size */
  size = 'size',
  /** Block size txs */
  size_txs = 'size_txs',
  /** State root hash */
  state_root_hash = 'state_root_hash',
  /** Time */
  time = 'time',
  /** Count of transactions in this block */
  transaction_count = 'transaction_count'
}

/** Calls in Elrond blockchain */
export type ElrondCall = {
  __typename?: 'ElrondCall';
  any?: Maybe<Scalars['String']>;
  /**
   * Depth of the call. Empty string for external call, then counted
   *         as 0...N, and the next layer is added through '-'. For example 0-3-9.
   */
  callDepth?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  /** Information about calls miniblock */
  miniblock?: Maybe<MiniblockElrond>;
  minimum?: Maybe<Scalars['String']>;
  /** Information about calls block */
  senderBlock?: Maybe<ElrondBlockDimension>;
  /** Contract method invoked */
  smartContractAddress?: Maybe<Address>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Information about calls transaction */
  transaction?: Maybe<TransactionElrond>;
};


/** Calls in Elrond blockchain */
export type ElrondCallanyArgs = {
  of: ElrondCallsMeasureable;
};


/** Calls in Elrond blockchain */
export type ElrondCallcallDepthArgs = {
  callDepth?: InputMaybe<StringSelector>;
};


/** Calls in Elrond blockchain */
export type ElrondCallcountArgs = {
  uniq?: InputMaybe<ElrondCallsUni>;
};


/** Calls in Elrond blockchain */
export type ElrondCallcountBigIntArgs = {
  uniq?: InputMaybe<ElrondCallsUni>;
};


/** Calls in Elrond blockchain */
export type ElrondCallmaximumArgs = {
  get?: InputMaybe<ElrondCallsMeasureable>;
  of: ElrondCallsMeasureable;
};


/** Calls in Elrond blockchain */
export type ElrondCallminiblockArgs = {
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Calls in Elrond blockchain */
export type ElrondCallminimumArgs = {
  get?: InputMaybe<ElrondCallsMeasureable>;
  of: ElrondCallsMeasureable;
};


/** Calls in Elrond blockchain */
export type ElrondCallsenderBlockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Calls in Elrond blockchain */
export type ElrondCallsmartContractAddressArgs = {
  smartContractAddress?: InputMaybe<HashSelector>;
};


/** Calls in Elrond blockchain */
export type ElrondCallsmartContractMethodArgs = {
  smartContractMethod?: InputMaybe<MethodSelector>;
};


/** Calls in Elrond blockchain */
export type ElrondCalltransactionArgs = {
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  index?: InputMaybe<IntegerSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  signature?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
};

export type ElrondCallFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  callDepth?: InputMaybe<StringSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  smartContractAddress?: InputMaybe<HashSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};

/** CallResults in Elrond blockchain */
export type ElrondCallResult = {
  __typename?: 'ElrondCallResult';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Call result data */
  data?: Maybe<Scalars['String']>;
  /** Call result data operation */
  dataOperation?: Maybe<Scalars['String']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Call result gas limit */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /** Call result gas price */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /** Hash of the call result */
  hash?: Maybe<Scalars['String']>;
  /** Call result index */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  /** Information about calls miniblock */
  miniblock?: Maybe<MiniblockElrond>;
  minimum?: Maybe<Scalars['String']>;
  /** Nonce of the call result */
  nonce?: Maybe<Scalars['BigInt']>;
  /** Hash of the origin transaction */
  originTxHash?: Maybe<Scalars['String']>;
  /** Hash of the previous transaction */
  previousTxHash?: Maybe<Scalars['String']>;
  /** Call result receiver */
  receiver?: Maybe<Address>;
  /** Call result relayed */
  relayed?: Maybe<Scalars['String']>;
  relayedValue?: Maybe<Scalars['Float']>;
  /** Call result return message */
  returnMessage?: Maybe<Scalars['String']>;
  /** Call result sender */
  sender?: Maybe<Address>;
  /** Information about calls block */
  senderBlock?: Maybe<ElrondBlockDimension>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Information about calls transaction */
  transaction?: Maybe<TransactionElrond>;
  /** Call result type */
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultanyArgs = {
  of: ElrondCallResultsMeasureable;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultcountArgs = {
  uniq?: InputMaybe<ElrondCallResultUniq>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultcountBigIntArgs = {
  uniq?: InputMaybe<ElrondCallResultUniq>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultdataArgs = {
  callResultData?: InputMaybe<StringSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultdataOperationArgs = {
  callResultDataOperation?: InputMaybe<StringSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultgasLimitArgs = {
  callResultGasLimit?: InputMaybe<IntegerSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultgasPriceArgs = {
  callResultGasPrice?: InputMaybe<IntegerSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResulthashArgs = {
  callResultHash?: InputMaybe<HashSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultindexArgs = {
  callResultIndex?: InputMaybe<IntegerSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultmaximumArgs = {
  get?: InputMaybe<ElrondCallResultsMeasureable>;
  of: ElrondCallResultsMeasureable;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultminiblockArgs = {
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultminimumArgs = {
  get?: InputMaybe<ElrondCallResultsMeasureable>;
  of: ElrondCallResultsMeasureable;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultnonceArgs = {
  callResultNonce?: InputMaybe<IntegerSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultoriginTxHashArgs = {
  originTxHash?: InputMaybe<HashSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultpreviousTxHashArgs = {
  previousTxHash?: InputMaybe<HashSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultreceiverArgs = {
  callResultReceiver?: InputMaybe<HashSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultrelayedArgs = {
  relayed?: InputMaybe<StringSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultrelayedValueArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  callResultData?: InputMaybe<StringSelector>;
  callResultDataOperation?: InputMaybe<StringSelector>;
  callResultGasLimit?: InputMaybe<FloatSelector>;
  callResultGasPrice?: InputMaybe<FloatSelector>;
  callResultHash?: InputMaybe<HashSelector>;
  callResultIndex?: InputMaybe<IntegerSelector>;
  callResultNonce?: InputMaybe<IntegerSelector>;
  callResultReceiver?: InputMaybe<HashSelector>;
  callResultRelayedValue?: InputMaybe<FloatSelector>;
  callResultSender?: InputMaybe<HashSelector>;
  callResultType?: InputMaybe<StringSelector>;
  callResultValue?: InputMaybe<FloatSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  originTxHash?: InputMaybe<HashSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  previousTxHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  relayed?: InputMaybe<StringSelector>;
  returnMessage?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultreturnMessageArgs = {
  returnMessage?: InputMaybe<StringSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultsenderArgs = {
  callResultSender?: InputMaybe<HashSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultsenderBlockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResulttransactionArgs = {
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  index?: InputMaybe<IntegerSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  signature?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResulttypeArgs = {
  callResultType?: InputMaybe<StringSelector>;
};


/** CallResults in Elrond blockchain */
export type ElrondCallResultvalueArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  callResultData?: InputMaybe<StringSelector>;
  callResultDataOperation?: InputMaybe<StringSelector>;
  callResultGasLimit?: InputMaybe<FloatSelector>;
  callResultGasPrice?: InputMaybe<FloatSelector>;
  callResultHash?: InputMaybe<HashSelector>;
  callResultIndex?: InputMaybe<IntegerSelector>;
  callResultNonce?: InputMaybe<IntegerSelector>;
  callResultReceiver?: InputMaybe<HashSelector>;
  callResultRelayedValue?: InputMaybe<FloatSelector>;
  callResultSender?: InputMaybe<HashSelector>;
  callResultType?: InputMaybe<StringSelector>;
  callResultValue?: InputMaybe<FloatSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  originTxHash?: InputMaybe<HashSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  previousTxHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  relayed?: InputMaybe<StringSelector>;
  returnMessage?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};

export type ElrondCallResultFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  callResultData?: InputMaybe<StringSelector>;
  callResultDataOperation?: InputMaybe<StringSelector>;
  callResultGasLimit?: InputMaybe<FloatSelector>;
  callResultGasPrice?: InputMaybe<FloatSelector>;
  callResultHash?: InputMaybe<HashSelector>;
  callResultIndex?: InputMaybe<IntegerSelector>;
  callResultNonce?: InputMaybe<IntegerSelector>;
  callResultReceiver?: InputMaybe<HashSelector>;
  callResultRelayedValue?: InputMaybe<FloatSelector>;
  callResultSender?: InputMaybe<HashSelector>;
  callResultType?: InputMaybe<StringSelector>;
  callResultValue?: InputMaybe<FloatSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  originTxHash?: InputMaybe<HashSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  previousTxHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  relayed?: InputMaybe<StringSelector>;
  returnMessage?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};

export enum ElrondCallResultUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique Number of block in the blockchains */
  height = 'height',
  /** Unique Number of call results */
  index = 'index',
  /** Unique time */
  times = 'times'
}

export enum ElrondCallResultsMeasureable {
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Data of the call result */
  call_result_data = 'call_result_data',
  /** Hash of the call result */
  call_result_hash = 'call_result_hash',
  /** Index of the call result */
  call_result_index = 'call_result_index',
  /** Receiver of the call result */
  call_result_receiver = 'call_result_receiver',
  /** Sender of the call result */
  call_result_sender = 'call_result_sender',
  /** Data */
  data = 'data',
  /** Date */
  date = 'date',
  /** Gas Limit */
  gas_limit = 'gas_limit',
  /** Gas Price */
  gas_price = 'gas_price',
  /** Gas Used */
  gas_used = 'gas_used',
  /** Number of block in the blockhains */
  height = 'height',
  /** Hash of the miniblock */
  miniblock_hash = 'miniblock_hash',
  /** Hash of the miniblocks receiver block */
  miniblock_receiver_block_hash = 'miniblock_receiver_block_hash',
  /** Miniblock receiver shard */
  miniblock_receiver_shard = 'miniblock_receiver_shard',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Previous transaction hash of the call result */
  previous_tx_hash = 'previous_tx_hash',
  /** Time */
  time = 'time',
  /** The block hash of this block`s parent */
  transaction_count = 'transaction_count',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Receiver hash */
  tx_receiver = 'tx_receiver',
  /** Shard number of the receiver */
  tx_receiver_shard = 'tx_receiver_shard',
  /** Sender hash */
  tx_sender = 'tx_sender',
  /** Shard number of the sender */
  tx_sender_shard = 'tx_sender_shard',
  /** Value */
  tx_value = 'tx_value',
  /** Type of miniblock */
  type = 'type'
}

export enum ElrondCallsMeasureable {
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Call depth */
  call_depth = 'call_depth',
  /** Data */
  data = 'data',
  /** Date */
  date = 'date',
  /** Gas Limit */
  gas_limit = 'gas_limit',
  /** Gas Price */
  gas_price = 'gas_price',
  /** Gas Used */
  gas_used = 'gas_used',
  /** Number of block in the blockhains */
  height = 'height',
  /** Hash of the miniblock */
  miniblock_hash = 'miniblock_hash',
  /** Hash of the miniblocks receiver block */
  miniblock_receiver_block_hash = 'miniblock_receiver_block_hash',
  /** Miniblock receiver shard */
  miniblock_receiver_shard = 'miniblock_receiver_shard',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Smart Contract Method Signature */
  signature = 'signature',
  /** Smart Contract Method Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Method Name */
  signature_name = 'signature_name',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** The block hash of this block`s parent */
  transaction_count = 'transaction_count',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Receiver hash */
  tx_receiver = 'tx_receiver',
  /** Shard number of the receiver */
  tx_receiver_shard = 'tx_receiver_shard',
  /** Sender hash */
  tx_sender = 'tx_sender',
  /** Shard number of the sender */
  tx_sender_shard = 'tx_sender_shard',
  /** Value */
  tx_value = 'tx_value',
  /** Type of miniblock */
  type = 'type'
}

export enum ElrondCallsUni {
  /** Unique date count */
  dates = 'dates',
  /** Unique Number of block in the blockchains */
  height = 'height',
  /** Unique Number of smart contract methods */
  smart_contract_methods = 'smart_contract_methods',
  /** Unique Number of smart contract */
  smart_contracts = 'smart_contracts',
  /** Unique time */
  times = 'times'
}

/** Elrond Coinpath */
export type ElrondCoinpath = {
  __typename?: 'ElrondCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<ElrondTransactionValueDimension>;
};


/** Elrond Coinpath */
export type ElrondCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Elrond Coinpath */
export type ElrondCoinpathanyArgs = {
  of: ElrondCoinpathMeasureable;
};


/** Elrond Coinpath */
export type ElrondCoinpathmaximumArgs = {
  get?: InputMaybe<ElrondCoinpathMeasureable>;
  of: ElrondCoinpathMeasureable;
};


/** Elrond Coinpath */
export type ElrondCoinpathminimumArgs = {
  get?: InputMaybe<ElrondCoinpathMeasureable>;
  of: ElrondCoinpathMeasureable;
};

export enum ElrondCoinpathMeasureable {
  /** Block */
  block = 'block',
  /** Depth */
  depth = 'depth',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Version */
  tx_hash = 'tx_hash'
}

/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblock = {
  __typename?: 'ElrondMiniblock';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Miniblock hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Hash of the receiver block */
  receiverBlockHash?: Maybe<Scalars['String']>;
  /** Number of the receiver shard */
  receiverShard?: Maybe<Scalars['String']>;
  /** Information about miniblocks block */
  senderBlock?: Maybe<ElrondBlockDimension>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Miniblock type */
  type?: Maybe<Scalars['String']>;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblockanyArgs = {
  of: ElrondMiniblocksMeasureable;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblockcountArgs = {
  uniq?: InputMaybe<ElrondMiniblockUniq>;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblockcountBigIntArgs = {
  uniq?: InputMaybe<ElrondMiniblockUniq>;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblockhashArgs = {
  miniblockHash?: InputMaybe<HashSelector>;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblockmaximumArgs = {
  get?: InputMaybe<ElrondMiniblocksMeasureable>;
  of: ElrondMiniblocksMeasureable;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblockminimumArgs = {
  get?: InputMaybe<ElrondMiniblocksMeasureable>;
  of: ElrondMiniblocksMeasureable;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblockreceiverBlockHashArgs = {
  receiverBlockHash?: InputMaybe<HashSelector>;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblockreceiverShardArgs = {
  receiverShard?: InputMaybe<BigIntIdSelector>;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblocksenderBlockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Miniblocks in Elrond  blockchain */
export type ElrondMiniblocktypeArgs = {
  type?: InputMaybe<StringSelector>;
};

export type ElrondMiniblockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  receiverBlockHash?: InputMaybe<HashSelector>;
  receiverShard?: InputMaybe<BigIntIdSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  type?: InputMaybe<StringSelector>;
};

export enum ElrondMiniblockUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique Number of block in the blockchains */
  height = 'height',
  /** Unique time */
  times = 'times'
}

export enum ElrondMiniblocksMeasureable {
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Hash of the miniblock */
  hash = 'hash',
  /** Number of block in the blockhains */
  height = 'height',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Hash of the miniblocks receiver block */
  receiver_block_hash = 'receiver_block_hash',
  /** Miniblock receiver shard */
  receiver_shard = 'receiver_shard',
  /** Time */
  time = 'time',
  /** Count of transactions */
  transaction_count = 'transaction_count',
  /** Type of miniblock */
  type = 'type'
}

export enum ElrondNetwork {
  /** Elrond mainnet */
  elrond = 'elrond'
}

/** NotarizedBlocks in Elrond blockchain */
export type ElrondNotarizedBlock = {
  __typename?: 'ElrondNotarizedBlock';
  any?: Maybe<Scalars['String']>;
  /** Information about blocks notarized block */
  block?: Maybe<ElrondBlockDimension>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Hash of the notarized block */
  notarizedBlockHash?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
};


/** NotarizedBlocks in Elrond blockchain */
export type ElrondNotarizedBlockanyArgs = {
  of: ElrondNotarizedBlocksMeasureable;
};


/** NotarizedBlocks in Elrond blockchain */
export type ElrondNotarizedBlockblockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** NotarizedBlocks in Elrond blockchain */
export type ElrondNotarizedBlockcountArgs = {
  uniq?: InputMaybe<ElrondNotarizedBlockUniq>;
};


/** NotarizedBlocks in Elrond blockchain */
export type ElrondNotarizedBlockcountBigIntArgs = {
  uniq?: InputMaybe<ElrondNotarizedBlockUniq>;
};


/** NotarizedBlocks in Elrond blockchain */
export type ElrondNotarizedBlockmaximumArgs = {
  get?: InputMaybe<ElrondNotarizedBlocksMeasureable>;
  of: ElrondNotarizedBlocksMeasureable;
};


/** NotarizedBlocks in Elrond blockchain */
export type ElrondNotarizedBlockminimumArgs = {
  get?: InputMaybe<ElrondNotarizedBlocksMeasureable>;
  of: ElrondNotarizedBlocksMeasureable;
};


/** NotarizedBlocks in Elrond blockchain */
export type ElrondNotarizedBlocknotarizedBlockHashArgs = {
  notarizedBlockHash?: InputMaybe<HashSelector>;
};

export type ElrondNotarizedBlockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  notarizedBlockHash?: InputMaybe<HashSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};

export enum ElrondNotarizedBlockUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique Number of block in the blockchains */
  height = 'height',
  /** Unique hash of notarized block */
  notarized_block_hash = 'notarized_block_hash',
  /** Unique time */
  times = 'times'
}

export enum ElrondNotarizedBlocksMeasureable {
  /** Date */
  date = 'date',
  /** Block epoch */
  epoch = 'epoch',
  /** Hash of the the block */
  hash = 'hash',
  /** Number of block in the blockhains */
  height = 'height',
  /** Block nonce */
  nonce = 'nonce',
  /** Notarized block hash */
  notarized_block_hash = 'notarized_block_hash',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Block proposer */
  proposer = 'proposer',
  /** Block public key bitmap */
  public_key_bitmap = 'public_key_bitmap',
  /** Block round */
  round = 'round',
  /** Shard number of block */
  shard = 'shard',
  /** Block size */
  size = 'size',
  /** Block size txs */
  size_txs = 'size_txs',
  /** State root hash */
  state_root_hash = 'state_root_hash',
  /** Time */
  time = 'time',
  /** Count of transactions in this block */
  transaction_count = 'transaction_count'
}

/** Transactions in Elrond blockchain */
export type ElrondTransaction = {
  __typename?: 'ElrondTransaction';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Data */
  data?: Maybe<Scalars['String']>;
  /** Data operation */
  dataOperation?: Maybe<Scalars['String']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  fee?: Maybe<Scalars['Float']>;
  /** Number of gas limit */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /** Number of gas price */
  gasPrice?: Maybe<Scalars['BigInt']>;
  /** Number of gas used */
  gasUsed?: Maybe<Scalars['BigInt']>;
  /** Transaction hash */
  hash?: Maybe<Scalars['String']>;
  /** Transaction index */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  /** Information about transactions miniblock */
  miniblock?: Maybe<MiniblockElrond>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** TX  receiver */
  receiver?: Maybe<Address>;
  /** Shard number of receiver */
  receiverShard?: Maybe<Scalars['BigInt']>;
  /** Hash of the sender */
  sender?: Maybe<Address>;
  /** Information about transactions block */
  senderBlock?: Maybe<ElrondBlockDimension>;
  /** Shard number of sender */
  senderShard?: Maybe<Scalars['BigInt']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Tx Status */
  status?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  value?: Maybe<Scalars['Float']>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionanyArgs = {
  of: ElrondTransactionsMeasureable;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactioncountArgs = {
  uniq?: InputMaybe<ElrondTransactionUniq>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactioncountBigIntArgs = {
  uniq?: InputMaybe<ElrondTransactionUniq>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactiondataArgs = {
  data?: InputMaybe<StringSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactiondataOperationArgs = {
  dataOperation?: InputMaybe<StringSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionfeeArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  fee?: InputMaybe<FloatSelector>;
  gasLimit?: InputMaybe<FloatSelector>;
  gasPrice?: InputMaybe<FloatSelector>;
  gasUsed?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txNonce?: InputMaybe<IntegerSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  txValue?: InputMaybe<FloatSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactiongasLimitArgs = {
  gasLimit?: InputMaybe<IntegerSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactiongasPriceArgs = {
  gasPrice?: InputMaybe<IntegerSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactiongasUsedArgs = {
  gasUsed?: InputMaybe<IntegerSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionhashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionindexArgs = {
  txIndex?: InputMaybe<IntegerSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionmaximumArgs = {
  get?: InputMaybe<ElrondTransactionsMeasureable>;
  of: ElrondTransactionsMeasureable;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionminiblockArgs = {
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionminimumArgs = {
  get?: InputMaybe<ElrondTransactionsMeasureable>;
  of: ElrondTransactionsMeasureable;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionnonceArgs = {
  txNonce?: InputMaybe<IntegerSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionreceiverArgs = {
  txReceiver?: InputMaybe<HashSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionreceiverShardArgs = {
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionsenderArgs = {
  txSender?: InputMaybe<HashSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionsenderBlockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionsenderShardArgs = {
  txSenderShard?: InputMaybe<BigIntIdSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionsignatureArgs = {
  signature?: InputMaybe<HashSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionstatusArgs = {
  status?: InputMaybe<StringSelector>;
};


/** Transactions in Elrond blockchain */
export type ElrondTransactionvalueArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  fee?: InputMaybe<FloatSelector>;
  gasLimit?: InputMaybe<FloatSelector>;
  gasPrice?: InputMaybe<FloatSelector>;
  gasUsed?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txNonce?: InputMaybe<IntegerSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  txValue?: InputMaybe<FloatSelector>;
  type?: InputMaybe<StringSelector>;
};

export type ElrondTransactionFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  fee?: InputMaybe<FloatSelector>;
  gasLimit?: InputMaybe<FloatSelector>;
  gasPrice?: InputMaybe<FloatSelector>;
  gasUsed?: InputMaybe<FloatSelector>;
  height?: InputMaybe<BlockSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<IntegerSelector>;
  txNonce?: InputMaybe<IntegerSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  txValue?: InputMaybe<FloatSelector>;
  type?: InputMaybe<StringSelector>;
};

export enum ElrondTransactionUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique Number of block in the blockchains */
  height = 'height',
  /** Unique time */
  times = 'times'
}

/** Blockchain transaction with value */
export type ElrondTransactionValueDimension = {
  __typename?: 'ElrondTransactionValueDimension';
  /** Transaction hash */
  hash: Scalars['String'];
  /** Transaction value */
  value: Scalars['Float'];
};

export enum ElrondTransactionsMeasureable {
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Data */
  data = 'data',
  /** Date */
  date = 'date',
  /** Gas Limit */
  gas_limit = 'gas_limit',
  /** Gas Price */
  gas_price = 'gas_price',
  /** Gas Used */
  gas_used = 'gas_used',
  /** Transaction hash */
  hash = 'hash',
  /** Number of block in the blockhains */
  height = 'height',
  /** Hash of the miniblock */
  miniblock_hash = 'miniblock_hash',
  /** Hash of the miniblocks receiver block */
  miniblock_receiver_block_hash = 'miniblock_receiver_block_hash',
  /** Miniblock receiver shard */
  miniblock_receiver_shard = 'miniblock_receiver_shard',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Time */
  time = 'time',
  /** The block hash of this block`s parent */
  transaction_count = 'transaction_count',
  /** Receiver hash */
  tx_receiver = 'tx_receiver',
  /** Shard number of the receiver */
  tx_receiver_shard = 'tx_receiver_shard',
  /** Sender hash */
  tx_sender = 'tx_sender',
  /** Shard number of the sender */
  tx_sender_shard = 'tx_sender_shard',
  /** Type of miniblock */
  type = 'type',
  /** Value */
  value = 'value'
}

/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfer = {
  __typename?: 'ElrondTransfer';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  /** Metadata */
  metadata?: Maybe<Scalars['String']>;
  /** Information about arguments miniblock */
  miniblock?: Maybe<MiniblockElrond>;
  minimum?: Maybe<Scalars['String']>;
  /** NFT nonce */
  nftNonce?: Maybe<Scalars['String']>;
  /** How the money was transferred */
  reason?: Maybe<Scalars['String']>;
  /** Receiver account address */
  receiver?: Maybe<Address>;
  /** Sender account address */
  sender?: Maybe<Address>;
  /** Information about arguments block */
  senderBlock?: Maybe<ElrondBlockDimension>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Information about arguments transaction */
  transaction?: Maybe<TransactionElrond>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransferamountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<CurrencySelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  metadata?: InputMaybe<StringSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nftNonce?: InputMaybe<IntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  transferReason?: InputMaybe<TransferReasonSelector>;
  transferReceiver?: InputMaybe<AddressSelector>;
  transferSender?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransferanyArgs = {
  of: ElrondTransfersMeasureable;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfercountArgs = {
  uniq?: InputMaybe<ElrondTransferUniq>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfercountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  currency?: InputMaybe<CurrencySelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  metadata?: InputMaybe<StringSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nftNonce?: InputMaybe<IntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  transferReason?: InputMaybe<TransferReasonSelector>;
  transferReceiver?: InputMaybe<AddressSelector>;
  transferSender?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
  uniq?: InputMaybe<ElrondTransferUniq>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfercurrencyArgs = {
  currency?: InputMaybe<CurrencySelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfermaximumArgs = {
  get?: InputMaybe<ElrondTransfersMeasureable>;
  of: ElrondTransfersMeasureable;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfermetadataArgs = {
  metadata?: InputMaybe<StringSelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransferminiblockArgs = {
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransferminimumArgs = {
  get?: InputMaybe<ElrondTransfersMeasureable>;
  of: ElrondTransfersMeasureable;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfernftNonceArgs = {
  nftNonce?: InputMaybe<IntIdSelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransferreasonArgs = {
  transferReason?: InputMaybe<TransferReasonSelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransferreceiverArgs = {
  transferReceiver?: InputMaybe<AddressSelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfersenderArgs = {
  transferSender?: InputMaybe<AddressSelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfersenderBlockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Transfers of Smart Contract Calls and Events */
export type ElrondTransfertransactionArgs = {
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  index?: InputMaybe<IntegerSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  signature?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
};

export type ElrondTransferFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockNonce?: InputMaybe<IntegerSelector>;
  currency?: InputMaybe<CurrencySelector>;
  data?: InputMaybe<StringSelector>;
  dataOperation?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  epoch?: InputMaybe<IntegerSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  metadata?: InputMaybe<StringSelector>;
  miniblockHash?: InputMaybe<HashSelector>;
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
  miniblockReceiverShard?: InputMaybe<BigIntIdSelector>;
  nftNonce?: InputMaybe<IntIdSelector>;
  nonce?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  proposer?: InputMaybe<HashSelector>;
  publicKeyBitmap?: InputMaybe<StringSelector>;
  round?: InputMaybe<IntegerSelector>;
  shard?: InputMaybe<BigIntIdSelector>;
  signature?: InputMaybe<HashSelector>;
  size?: InputMaybe<IntegerSelector>;
  sizeTxs?: InputMaybe<IntegerSelector>;
  stateRootHash?: InputMaybe<HashSelector>;
  status?: InputMaybe<StringSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
  transferReason?: InputMaybe<TransferReasonSelector>;
  transferReceiver?: InputMaybe<AddressSelector>;
  transferSender?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txReceiver?: InputMaybe<HashSelector>;
  txReceiverShard?: InputMaybe<BigIntIdSelector>;
  txSender?: InputMaybe<HashSelector>;
  txSenderShard?: InputMaybe<BigIntIdSelector>;
  type?: InputMaybe<StringSelector>;
};

export enum ElrondTransferUniq {
  /** Unique Number of block in the blockchains */
  block_height = 'block_height',
  /** Unique date count */
  dates = 'dates',
  /** Unique Transaction Hash */
  signature = 'signature',
  /** Unique time */
  times = 'times'
}

export enum ElrondTransfersMeasureable {
  /** Transfer Amount */
  amount = 'amount',
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Data */
  data = 'data',
  /** Date */
  date = 'date',
  /** Gas Limit */
  gas_limit = 'gas_limit',
  /** Gas Price */
  gas_price = 'gas_price',
  /** Gas Used */
  gas_used = 'gas_used',
  /** Number of block in the blockhains */
  height = 'height',
  /** Hash of the miniblock */
  miniblock_hash = 'miniblock_hash',
  /** Hash of the miniblocks receiver block */
  miniblock_receiver_block_hash = 'miniblock_receiver_block_hash',
  /** Miniblock receiver shard */
  miniblock_receiver_shard = 'miniblock_receiver_shard',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** The block hash of this block`s parent */
  transaction_count = 'transaction_count',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Receiver hash */
  tx_receiver = 'tx_receiver',
  /** Shard number of the receiver */
  tx_receiver_shard = 'tx_receiver_shard',
  /** Sender hash */
  tx_sender = 'tx_sender',
  /** Shard number of the sender */
  tx_sender_shard = 'tx_sender_shard',
  /** Value */
  tx_value = 'tx_value',
  /** Type of miniblock */
  type = 'type'
}

/** Entity */
export type Entity = {
  __typename?: 'Entity';
  /** Entity ID */
  id: Scalars['String'];
  /** Entity number */
  num: Scalars['Int'];
  /** Entity realm ID */
  realmId: Scalars['Int'];
  /** Entity shard ID */
  shardId: Scalars['Int'];
  /** Entity Type */
  type: Scalars['String'];
};


/** Entity */
export type EntityidArgs = {
  entityId?: InputMaybe<Scalars['String']>;
};

/** Selector of entity ID for NFT  tokens */
export type EntitySelector = {
  /** EntityID in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** EntityID is */
  is?: InputMaybe<Scalars['String']>;
  /** EntityID not */
  not?: InputMaybe<Scalars['String']>;
  /** EntityID not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export enum EntityTypeEnum {
  /** account */
  account = 'account',
  /** contract */
  contract = 'contract',
  /** file */
  file = 'file',
  /** schedule */
  schedule = 'schedule',
  /** token */
  token = 'token',
  /** topic */
  topic = 'topic'
}

/** Select by entity type */
export type EntityTypeSelector = {
  /** Type in the list */
  in?: InputMaybe<Array<EntityTypeEnum>>;
  /** Type is */
  is?: InputMaybe<EntityTypeEnum>;
  /** Type not */
  not?: InputMaybe<EntityTypeEnum>;
  /** Type not in the list */
  notIn?: InputMaybe<Array<EntityTypeEnum>>;
};

/** EOS Chain */
export type Eos = {
  __typename?: 'Eos';
  /** Basic information about address ( or smart contract ) */
  address: Array<EosAddressInfo>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<EosBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EosCoinpath>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EosSmartContractCalls>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<EosTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EosTransfers>>;
};


/** EOS Chain */
export type EosaddressArgs = {
  address: Array<AddressSelectorIn>;
};


/** EOS Chain */
export type EosblocksArgs = {
  any?: InputMaybe<Array<EosBlockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  proposer?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** EOS Chain */
export type EoscoinpathArgs = {
  currency?: InputMaybe<EosCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** EOS Chain */
export type EossmartContractCallsArgs = {
  any?: InputMaybe<Array<EosSmartContractCallFilter>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** EOS Chain */
export type EostransactionsArgs = {
  any?: InputMaybe<Array<EosTransactionFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** EOS Chain */
export type EostransfersArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<EosTransferFilter>>;
  currency?: InputMaybe<EosCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

/** Address detailed information for EOS network */
export type EosAddressInfo = {
  __typename?: 'EosAddressInfo';
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EosSmartContractInfo>;
};

export type EosBlockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  proposer?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};

/** Blocks in EOS blockchain */
export type EosBlocks = {
  __typename?: 'EosBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block producer */
  producer?: Maybe<Address>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};


/** Blocks in EOS blockchain */
export type EosBlocksanyArgs = {
  of: EosBlocksMeasureable;
};


/** Blocks in EOS blockchain */
export type EosBlockscountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  proposer?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<EosBlocksUniq>;
};


/** Blocks in EOS blockchain */
export type EosBlockscountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  proposer?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<EosBlocksUniq>;
};


/** Blocks in EOS blockchain */
export type EosBlockshashArgs = {
  blockHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in EOS blockchain */
export type EosBlocksheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Blocks in EOS blockchain */
export type EosBlocksmaximumArgs = {
  get?: InputMaybe<EosBlocksMeasureable>;
  of: EosBlocksMeasureable;
};


/** Blocks in EOS blockchain */
export type EosBlocksminimumArgs = {
  get?: InputMaybe<EosBlocksMeasureable>;
  of: EosBlocksMeasureable;
};


/** Blocks in EOS blockchain */
export type EosBlocksproducerArgs = {
  producer?: InputMaybe<AddressSelector>;
};


/** Blocks in EOS blockchain */
export type EosBlockstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};

export enum EosBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Block Proposer */
  proposer = 'proposer',
  /** Time */
  time = 'time'
}

export enum EosBlocksUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique proposer count */
  proposers = 'proposers'
}

export enum EosCallsMeasureable {
  /** Block */
  block = 'block',
  /** Call depth */
  call_depth = 'call_depth',
  /** Date */
  date = 'date',
  /** Smart Contract Method Signature */
  signature = 'signature',
  /** Smart Contract Method Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Method Name */
  signature_name = 'signature_name',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Action From */
  tx_from = 'tx_from',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Sender */
  tx_sender = 'tx_sender',
  /** Action To */
  tx_to = 'tx_to'
}

/** Coinpath */
export type EosCoinpath = {
  __typename?: 'EosCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<EosAddressInfo>;
  /** Sender address */
  sender?: Maybe<EosAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
};


/** Coinpath */
export type EosCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type EosCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type EosCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type EosCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

/**
 * Currency selector in EOS blockchain.
 * Token identified by address of contract ( eosio.token for main EOS token )
 */
export type EosCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export enum EosNetwork {
  /** EOS mainnet */
  eos = 'eos'
}

/** Eos smart contract */
export type EosSmartContract = {
  __typename?: 'EosSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type EosSmartContractCallFilter = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

/** Smart Contract Calls */
export type EosSmartContractCalls = {
  __typename?: 'EosSmartContractCalls';
  /** Actors */
  actors?: Maybe<Scalars['String']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Console */
  console?: Maybe<Scalars['String']>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error Code */
  errorCode?: Maybe<Scalars['Int']>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Permissions */
  permissions?: Maybe<Scalars['String']>;
  /** Receivers */
  receivers?: Maybe<Scalars['String']>;
  /** True if call scheduled */
  scheduled?: Maybe<Scalars['Boolean']>;
  /** Smart contract being called */
  smartContract?: Maybe<EosSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};


/** Smart Contract Calls */
export type EosSmartContractCallsanyArgs = {
  of: EosCallsMeasureable;
};


/** Smart Contract Calls */
export type EosSmartContractCallsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Smart Contract Calls */
export type EosSmartContractCallscountArgs = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type EosSmartContractCallscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type EosSmartContractCallserrorCodeArgs = {
  errorCode?: InputMaybe<IntIdSelector>;
};


/** Smart Contract Calls */
export type EosSmartContractCallsexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Smart Contract Calls */
export type EosSmartContractCallsmaximumArgs = {
  get?: InputMaybe<EosCallsMeasureable>;
  of: EosCallsMeasureable;
};


/** Smart Contract Calls */
export type EosSmartContractCallsminimumArgs = {
  get?: InputMaybe<EosCallsMeasureable>;
  of: EosCallsMeasureable;
};


/** Smart Contract Calls */
export type EosSmartContractCallsscheduledArgs = {
  scheduled?: InputMaybe<Array<Scalars['Boolean']>>;
};


/** Smart Contract Calls */
export type EosSmartContractCallssmartContractArgs = {
  smartContractAddress?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type EosSmartContractCallssmartContractMethodArgs = {
  smartContractMethod?: InputMaybe<MethodSelector>;
};


/** Smart Contract Calls */
export type EosSmartContractCallssuccessArgs = {
  success?: InputMaybe<Array<Scalars['Boolean']>>;
};


/** Smart Contract Calls */
export type EosSmartContractCallstxFromArgs = {
  txFrom?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type EosSmartContractCallstxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Smart Contract Calls */
export type EosSmartContractCallstxToArgs = {
  txTo?: InputMaybe<AddressSelector>;
};

/** Blockchain smart contract */
export type EosSmartContractInfo = {
  __typename?: 'EosSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type EosTransactionFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};

/** Transactions in EOS blockchain */
export type EosTransactions = {
  __typename?: 'EosTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  cpuUsageUs?: Maybe<Scalars['Int']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsageWords?: Maybe<Scalars['Int']>;
  /** Success */
  scheduled?: Maybe<Scalars['Boolean']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
};


/** Transactions in EOS blockchain */
export type EosTransactionsanyArgs = {
  of: EosTransactionsMeasureable;
};


/** Transactions in EOS blockchain */
export type EosTransactionsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transactions in EOS blockchain */
export type EosTransactionscountArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  uniq?: InputMaybe<EosTransactionsUniq>;
};


/** Transactions in EOS blockchain */
export type EosTransactionscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  uniq?: InputMaybe<EosTransactionsUniq>;
};


/** Transactions in EOS blockchain */
export type EosTransactionscpuUsageUsArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in EOS blockchain */
export type EosTransactionshashArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Transactions in EOS blockchain */
export type EosTransactionsindexArgs = {
  txIndex?: InputMaybe<Array<TxIndexSelector>>;
};


/** Transactions in EOS blockchain */
export type EosTransactionsmaximumArgs = {
  get?: InputMaybe<EosTransactionsMeasureable>;
  of: EosTransactionsMeasureable;
};


/** Transactions in EOS blockchain */
export type EosTransactionsminimumArgs = {
  get?: InputMaybe<EosTransactionsMeasureable>;
  of: EosTransactionsMeasureable;
};


/** Transactions in EOS blockchain */
export type EosTransactionsnetUsageWordsArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  scheduled?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in EOS blockchain */
export type EosTransactionsscheduledArgs = {
  scheduled?: InputMaybe<Scalars['Boolean']>;
};


/** Transactions in EOS blockchain */
export type EosTransactionssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};

export enum EosTransactionsMeasureable {
  /** Block */
  block = 'block',
  /** CPU Usage */
  cpu_usage_us = 'cpu_usage_us',
  /** Date */
  date = 'date',
  /** Net Usage */
  net_usage_words = 'net_usage_words',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum EosTransactionsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates'
}

export type EosTransferFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<EosCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfers = {
  __typename?: 'EosTransfers';
  /** Actors */
  actors?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  maximum?: Maybe<Scalars['String']>;
  /** Memo */
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<EosCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersanyArgs = {
  of: EosTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransferscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<EosCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransferscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<EosCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransferscurrencyArgs = {
  currency?: InputMaybe<EosCurrencySelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersentityIdArgs = {
  entityId?: InputMaybe<EntitySelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersmaximumArgs = {
  get?: InputMaybe<EosTransfersMeasureable>;
  of: EosTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersminimumArgs = {
  get?: InputMaybe<EosTransfersMeasureable>;
  of: EosTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransfersreceiverArgs = {
  receiver?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransferssenderArgs = {
  sender?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransferssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransferstxFromArgs = {
  txFrom?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransferstxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EosTransferstxToArgs = {
  txTo?: InputMaybe<AddressSelector>;
};

export enum EosTransfersMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Token address */
  currency_address = 'currency_address',
  /** Currency symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

/** Ethereum Chain */
export type Ethereum = {
  __typename?: 'Ethereum';
  /** Basic information about address ( or smart contract ) */
  address: Array<EthereumAddressInfoWithBalance>;
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<EthereumArguments>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<EthereumBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<EthereumCoinpath>>;
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<EthereumDexTrades>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<EthereumSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<EthereumSmartContractEvent>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<EthereumTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<EthereumTransfers>>;
};


/** Ethereum Chain */
export type EthereumaddressArgs = {
  address: Array<EthereumAddressSelectorIn>;
};


/** Ethereum Chain */
export type EthereumargumentsArgs = {
  any?: InputMaybe<Array<EthereumArgumentFilter>>;
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Ethereum Chain */
export type EthereumblocksArgs = {
  any?: InputMaybe<Array<EthereumBlockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  options?: InputMaybe<QueryOptions>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Ethereum Chain */
export type EthereumcoinpathArgs = {
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<EthereumAddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<EthereumAddressSelector>;
  sender?: InputMaybe<EthereumAddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Ethereum Chain */
export type EthereumdexTradesArgs = {
  any?: InputMaybe<Array<EthereumDexTradeFilter>>;
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  options?: InputMaybe<QueryOptions>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Ethereum Chain */
export type EthereumsmartContractCallsArgs = {
  any?: InputMaybe<Array<EthereumSmartContractCallFilter>>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  success?: InputMaybe<Array<Scalars['Boolean']>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Ethereum Chain */
export type EthereumsmartContractEventsArgs = {
  any?: InputMaybe<Array<EthereumSmartContractEventFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Ethereum Chain */
export type EthereumtransactionsArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<EthereumTransactionFilter>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  gasValue?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Ethereum Chain */
export type EthereumtransfersArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<EthereumTransferFilter>>;
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<Array<EthereumAddressSelector>>;
  sender?: InputMaybe<Array<EthereumAddressSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2 = {
  __typename?: 'Ethereum2';
  /** Attestations in block */
  attestations?: Maybe<Array<Ethereum2Attestation>>;
  /** Attester Slashings */
  attesterSlashings?: Maybe<Array<Ethereum2AttesterSlashing>>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<Ethereum2Blocks>>;
  /** Attestations of blocks */
  deposits?: Maybe<Array<Ethereum2Deposit>>;
  /** Proposer Slashings */
  proposerSlashings?: Maybe<Array<Ethereum2ProposerSlashing>>;
  /** Voluntary Exits */
  voluntaryExits?: Maybe<Array<Ethereum2VoluntaryExit>>;
};


/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2attestationsArgs = {
  any?: InputMaybe<Array<Ethereum2Filter>>;
  attestationEpoch?: InputMaybe<Array<IntegerSelector>>;
  attestationSlot?: InputMaybe<Array<IntegerSelector>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  committeeIndex?: InputMaybe<Array<IntegerSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2attesterSlashingsArgs = {
  any?: InputMaybe<Array<Ethereum2Filter>>;
  attestationEpoch?: InputMaybe<Array<IntegerSelector>>;
  attestationSlot?: InputMaybe<Array<IntegerSelector>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2blocksArgs = {
  any?: InputMaybe<Array<Ethereum2Filter>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2depositsArgs = {
  any?: InputMaybe<Array<Ethereum2Filter>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2proposerSlashingsArgs = {
  any?: InputMaybe<Array<Ethereum2Filter>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  slashingEpoch?: InputMaybe<Array<IntegerSelector>>;
  slashingProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  slashingSlot?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Ethereum v 2.0 Baecon Chain */
export type Ethereum2voluntaryExitsArgs = {
  any?: InputMaybe<Array<Ethereum2Filter>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
  voluntaryExitEpoch?: InputMaybe<Array<IntegerSelector>>;
};

/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2Attestation = {
  __typename?: 'Ethereum2Attestation';
  aggregationBits: Scalars['String'];
  any?: Maybe<Scalars['String']>;
  attestation: Ethereum2AttestationInfo;
  /** Attestation Index (0 based ) in block */
  attestationIndex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  /** Committee index for attestation */
  committeeIndex: Scalars['Int'];
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  /** Sequential index of validator in committee ( 0-based) */
  validatorInCommitteeIndex: Scalars['Int'];
};


/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationanyArgs = {
  of: Ethereum2AttestationsMeasureable;
};


/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationblockRootArgs = {
  blockRootHash?: InputMaybe<Array<HashSelector>>;
};


/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationcountArgs = {
  attestationEpoch?: InputMaybe<Array<IntegerSelector>>;
  attestationSlot?: InputMaybe<Array<IntegerSelector>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  committeeIndex?: InputMaybe<Array<IntegerSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2AttestationsUniq>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationcountBigIntArgs = {
  attestationEpoch?: InputMaybe<Array<IntegerSelector>>;
  attestationSlot?: InputMaybe<Array<IntegerSelector>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  committeeIndex?: InputMaybe<Array<IntegerSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2AttestationsUniq>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationmaximumArgs = {
  get?: InputMaybe<Ethereum2AttestationsMeasureable>;
  of: Ethereum2AttestationsMeasureable;
};


/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationminimumArgs = {
  get?: InputMaybe<Ethereum2AttestationsMeasureable>;
  of: Ethereum2AttestationsMeasureable;
};


/** Attestations in Ethereum v2.0 blockchain */
export type Ethereum2AttestationproposerArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
};

/** AttestationFieldInfo for Ethereum v 2.0 network */
export type Ethereum2AttestationFieldInfo = {
  __typename?: 'Ethereum2AttestationFieldInfo';
  epoch: Scalars['Int'];
  /** Root Hash */
  root: Scalars['String'];
};

/** AttestationInfo for Ethereum v 2.0 network */
export type Ethereum2AttestationInfo = {
  __typename?: 'Ethereum2AttestationInfo';
  beaconBlockRoot: Scalars['String'];
  epoch: Scalars['Int'];
  signature: Scalars['String'];
  slot: Scalars['Int'];
  source: Ethereum2AttestationFieldInfo;
  target: Ethereum2AttestationFieldInfo;
};

export enum Ethereum2AttestationsMeasureable {
  /** Block */
  block = 'block',
  /** Block Proposer */
  block_proposer = 'block_proposer',
  /** Block hash */
  block_root_hash = 'block_root_hash',
  /** Committee Index */
  committee = 'committee',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Validator index */
  validator = 'validator'
}

export enum Ethereum2AttestationsUniq {
  /** Unique attestation epochs */
  attestation_epochs = 'attestation_epochs',
  /** Unique attestation slots */
  attestation_slots = 'attestation_slots',
  /** Unique attestations */
  attestations = 'attestations',
  /** Unique block proposers */
  block_proposers = 'block_proposers',
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique commitees */
  committees = 'committees',
  /** Unique date count */
  dates = 'dates',
  /** Unique validators */
  validators = 'validators'
}

/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashing = {
  __typename?: 'Ethereum2AttesterSlashing';
  any?: Maybe<Scalars['String']>;
  attestation: Ethereum2AttestationInfo;
  /** Attestation slashing sequential number */
  attestationOrder: Scalars['Int'];
  /** Attester Slashing Index (0 based ) in block */
  attesterSlashingIndex: Scalars['Int'];
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  /** Validator index in slashing sequential numbern */
  validatorInAttestationIndex: Scalars['Int'];
};


/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashinganyArgs = {
  of: Ethereum2AttesterSlashingMeasureable;
};


/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingblockRootArgs = {
  blockRootHash?: InputMaybe<Array<HashSelector>>;
};


/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingcountArgs = {
  attestationEpoch?: InputMaybe<Array<IntegerSelector>>;
  attestationSlot?: InputMaybe<Array<IntegerSelector>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2AttesterSlashingsUniq>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingcountBigIntArgs = {
  attestationEpoch?: InputMaybe<Array<IntegerSelector>>;
  attestationSlot?: InputMaybe<Array<IntegerSelector>>;
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2AttesterSlashingsUniq>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingmaximumArgs = {
  get?: InputMaybe<Ethereum2AttesterSlashingMeasureable>;
  of: Ethereum2AttesterSlashingMeasureable;
};


/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingminimumArgs = {
  get?: InputMaybe<Ethereum2AttesterSlashingMeasureable>;
  of: Ethereum2AttesterSlashingMeasureable;
};


/** Attester Slashing in Ethereum v2.0 blockchain */
export type Ethereum2AttesterSlashingproposerArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
};

export enum Ethereum2AttesterSlashingMeasureable {
  /** Block */
  block = 'block',
  /** Block Proposer */
  block_proposer = 'block_proposer',
  /** Block hash */
  block_root_hash = 'block_root_hash',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Validator index */
  validator = 'validator'
}

export enum Ethereum2AttesterSlashingsUniq {
  /** Unique slashing epochs */
  attestation_epochs = 'attestation_epochs',
  /** Unique slashing slots */
  attestation_slots = 'attestation_slots',
  /** Unique block proposers */
  block_proposers = 'block_proposers',
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique validators */
  validators = 'validators'
}

/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2Blocks = {
  __typename?: 'Ethereum2Blocks';
  any?: Maybe<Scalars['String']>;
  attestationsCount?: Maybe<Scalars['Int']>;
  attestationsCountBigInt?: Maybe<Scalars['BigInt']>;
  attesterSlashingsCount?: Maybe<Scalars['Int']>;
  attesterSlashingsCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  depositsCount?: Maybe<Scalars['Int']>;
  depositsCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  /** Graffiti */
  graffiti: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  proposerSlashingsCount?: Maybe<Scalars['Int']>;
  proposerSlashingsCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Randao Reveal */
  randaoReveal: Scalars['String'];
  /** Block signature */
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  voluntaryExitsCount?: Maybe<Scalars['Int']>;
  voluntaryExitsCountBigInt?: Maybe<Scalars['BigInt']>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksanyArgs = {
  of: Ethereum2BlocksMeasureable;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksattestationsCountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksattestationsCountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksattesterSlashingsCountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksattesterSlashingsCountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksblockRootArgs = {
  blockRootHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlockscountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2BlocksUniq>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlockscountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2BlocksUniq>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksdepositsCountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksdepositsCountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksmaximumArgs = {
  get?: InputMaybe<Ethereum2BlocksMeasureable>;
  of: Ethereum2BlocksMeasureable;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksminimumArgs = {
  get?: InputMaybe<Ethereum2BlocksMeasureable>;
  of: Ethereum2BlocksMeasureable;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksproposerArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksproposerSlashingsCountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksproposerSlashingsCountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlockstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksvoluntaryExitsCountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum v2.0 blockchain */
export type Ethereum2BlocksvoluntaryExitsCountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};

export enum Ethereum2BlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block Miner */
  block_proposer = 'block_proposer',
  /** Block hash */
  block_root_hash = 'block_root_hash',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time'
}

export enum Ethereum2BlocksUniq {
  /** Unique proposers */
  block_proposers = 'block_proposers',
  /** Unique date count */
  dates = 'dates'
}

/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2Deposit = {
  __typename?: 'Ethereum2Deposit';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Deposit Index (0 based ) in block */
  depositIndex: Scalars['Int'];
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  proof: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositamountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositanyArgs = {
  of: Ethereum2DepositsMeasureable;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositblockRootArgs = {
  blockRootHash?: InputMaybe<Array<HashSelector>>;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositcountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2DepositsUniq>;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositcountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2DepositsUniq>;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositmaximumArgs = {
  get?: InputMaybe<Ethereum2DepositsMeasureable>;
  of: Ethereum2DepositsMeasureable;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositminimumArgs = {
  get?: InputMaybe<Ethereum2DepositsMeasureable>;
  of: Ethereum2DepositsMeasureable;
};


/** Deposit in Ethereum v2.0 blockchain */
export type Ethereum2DepositproposerArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
};

export enum Ethereum2DepositsMeasureable {
  /** Block */
  block = 'block',
  /** Block Proposer */
  block_proposer = 'block_proposer',
  /** Block hash */
  block_root_hash = 'block_root_hash',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Validator index */
  validator = 'validator'
}

export enum Ethereum2DepositsUniq {
  /** Unique block proposers */
  block_proposers = 'block_proposers',
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique validators */
  validators = 'validators'
}

/** Eth1 attributes for Ethereum v 2.0 network */
export type Ethereum2Eth1Info = {
  __typename?: 'Ethereum2Eth1Info';
  /** Block Eth1 block hash */
  blockHash: Scalars['String'];
  /** Block Eth1 deposit count */
  depositCount: Scalars['Int'];
  /** Block Eth1 deposit root hash */
  depositRoot: Scalars['String'];
};

export type Ethereum2Filter = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};

export enum Ethereum2Network {
  /** Beacon Chain Ethereum 2.0 */
  eth2 = 'eth2',
  /** Medalla Ethereum 2.0 Beacon Testnet */
  medalla = 'medalla'
}

/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashing = {
  __typename?: 'Ethereum2ProposerSlashing';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  /** Header slashing sequential numbern */
  headerOrder: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Proposer Slashing Index (0 based ) in block */
  proposerSlashingIndex: Scalars['Int'];
  slashing: Ethereum2SlashingInfo;
  /** Block state root hash */
  stateRoot: Scalars['String'];
};


/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashinganyArgs = {
  of: Ethereum2ProposerSlashingMeasureable;
};


/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingblockRootArgs = {
  blockRootHash?: InputMaybe<Array<HashSelector>>;
};


/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingcountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  slashingEpoch?: InputMaybe<Array<IntegerSelector>>;
  slashingProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  slashingSlot?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2ProposerSlashingsUniq>;
};


/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingcountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  slashingEpoch?: InputMaybe<Array<IntegerSelector>>;
  slashingProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  slashingSlot?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2ProposerSlashingsUniq>;
};


/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingmaximumArgs = {
  get?: InputMaybe<Ethereum2ProposerSlashingMeasureable>;
  of: Ethereum2ProposerSlashingMeasureable;
};


/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingminimumArgs = {
  get?: InputMaybe<Ethereum2ProposerSlashingMeasureable>;
  of: Ethereum2ProposerSlashingMeasureable;
};


/** Proposer Slashing in Ethereum v2.0 blockchain */
export type Ethereum2ProposerSlashingproposerArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
};

export enum Ethereum2ProposerSlashingMeasureable {
  /** Block */
  block = 'block',
  /** Block Proposer */
  block_proposer = 'block_proposer',
  /** Block hash */
  block_root_hash = 'block_root_hash',
  /** Date */
  date = 'date',
  /** Slashed Proposer */
  proposer = 'proposer',
  /** Time */
  time = 'time'
}

export enum Ethereum2ProposerSlashingsUniq {
  /** Unique block proposers */
  block_proposers = 'block_proposers',
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique slashing epochs */
  slashing_epochs = 'slashing_epochs',
  /** Unique slashing proposers */
  slashing_proposers = 'slashing_proposers',
  /** Unique slashing slots */
  slashing_slots = 'slashing_slots'
}

/** SlashingInfo for Ethereum v 2.0 network */
export type Ethereum2SlashingInfo = {
  __typename?: 'Ethereum2SlashingInfo';
  /** Block body hash */
  bodyRoot: Scalars['String'];
  epoch: Scalars['Int'];
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  signature: Scalars['String'];
  slot: Scalars['Int'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
};

/** Validator attributes for Ethereum v 2.0 network */
export type Ethereum2ValidatorInfo = {
  __typename?: 'Ethereum2ValidatorInfo';
  /** Validator Index as Integer */
  index: Scalars['Int'];
  /** Validator Pub Key */
  pubkey: Scalars['String'];
  /** Validator Withdrawal */
  withdrawalCredentials: Scalars['String'];
};

/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExit = {
  __typename?: 'Ethereum2VoluntaryExit';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Block root hash */
  blockRoot: Scalars['String'];
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block Eth1 information */
  eth1: Ethereum2Eth1Info;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Block parent hash */
  parentRoot: Scalars['String'];
  /** Block proposer */
  proposer?: Maybe<Ethereum2ValidatorInfo>;
  /** Signature */
  signature: Scalars['String'];
  /** Block state root hash */
  stateRoot: Scalars['String'];
  /** Validator */
  validator: Ethereum2ValidatorInfo;
  voluntaryExitEpoch: Scalars['Int'];
  /** Voluntary Exit Index (0 based ) in block */
  voluntaryExitIndex: Scalars['Int'];
};


/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitanyArgs = {
  of: Ethereum2VoluntaryExitsMeasureable;
};


/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitblockRootArgs = {
  blockRootHash?: InputMaybe<Array<HashSelector>>;
};


/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitcountArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2VoluntaryExitsUniq>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
  voluntaryExitEpoch?: InputMaybe<Array<IntegerSelector>>;
};


/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitcountBigIntArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
  blockRootHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<Ethereum2VoluntaryExitsUniq>;
  validatorIndex?: InputMaybe<Array<IntegerSelector>>;
  voluntaryExitEpoch?: InputMaybe<Array<IntegerSelector>>;
};


/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitmaximumArgs = {
  get?: InputMaybe<Ethereum2VoluntaryExitsMeasureable>;
  of: Ethereum2VoluntaryExitsMeasureable;
};


/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitminimumArgs = {
  get?: InputMaybe<Ethereum2VoluntaryExitsMeasureable>;
  of: Ethereum2VoluntaryExitsMeasureable;
};


/** Voluntary Exit in Ethereum v2.0 blockchain */
export type Ethereum2VoluntaryExitproposerArgs = {
  blockProposerIndex?: InputMaybe<Array<IntegerSelector>>;
};

export enum Ethereum2VoluntaryExitsMeasureable {
  /** Block */
  block = 'block',
  /** Block Proposer */
  block_proposer = 'block_proposer',
  /** Block hash */
  block_root_hash = 'block_root_hash',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Validator index */
  validator = 'validator'
}

export enum Ethereum2VoluntaryExitsUniq {
  /** Unique block proposers */
  block_proposers = 'block_proposers',
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique validators */
  validators = 'validators'
}

/** Address detailed information for Ethereum network */
export type EthereumAddressInfo = {
  __typename?: 'EthereumAddressInfo';
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EthereumSmartContractInfo>;
};

/** Blockchain address */
export type EthereumAddressInfoWithBalance = {
  __typename?: 'EthereumAddressInfoWithBalance';
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** DEPRECATED Current address balance */
  balance?: Maybe<Scalars['Float']>;
  /** DEPRECATED Balances by currencies for the address */
  balances?: Maybe<Array<EthereumBalance>>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<EthereumSmartContractInfoWithAttributes>;
};


/** Blockchain address */
export type EthereumAddressInfoWithBalancebalancesArgs = {
  currency?: InputMaybe<EthereumCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelectorRange>;
  time?: InputMaybe<DateTimeSelector>;
};

/**
 * Address should start from 0x and contain hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumAddressSelector = {
  /** In the list of Addresses */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Equal to Address */
  is?: InputMaybe<Scalars['String']>;
  /** Not Equal to Address */
  not?: InputMaybe<Scalars['String']>;
  /** Not in the list of Addresses */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/**
 * Address should start from 0x and contain hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumAddressSelectorIn = {
  /** In the list of Addresses */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Equal to Address */
  is?: InputMaybe<Scalars['String']>;
};

export type EthereumArgumentFilter = {
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};

/** Arguments of Smart Contract Calls and Events */
export type EthereumArguments = {
  __typename?: 'EthereumArguments';
  any?: Maybe<Scalars['String']>;
  /** Method or event argument */
  argument?: Maybe<ArgumentName>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Caller of the method invocation ( tx sender or another smart contract ) */
  caller?: Maybe<EthereumAddressInfo>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  /** Sequential index of value in array ( multi-dimensional) */
  index: Scalars['String'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Float']>;
  /** Address value of method or event argument */
  reference?: Maybe<EthereumAddressInfo>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract method or event */
  smartContractSignature?: Maybe<Signature>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction where call happened */
  transaction?: Maybe<EthereumTransactionInfo>;
  /** The Value of method or event argument */
  value?: Maybe<ArgumentValue>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsanyArgs = {
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  as?: InputMaybe<EthereumArgumentsConvertable>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  of: EthereumArgumentsMeasureable;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsargumentArgs = {
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Scalars['String']>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentscallerArgs = {
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentscountArgs = {
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<SmartContractArgumentsUniq>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentscountBigIntArgs = {
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<SmartContractArgumentsUniq>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsmaximumArgs = {
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  as?: InputMaybe<EthereumArgumentsConvertable>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<EthereumArgumentsMeasureable>;
  height?: InputMaybe<BlockSelector>;
  of: EthereumArgumentsMeasureable;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsminimumArgs = {
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  as?: InputMaybe<EthereumArgumentsConvertable>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  get?: InputMaybe<EthereumArgumentsMeasureable>;
  height?: InputMaybe<BlockSelector>;
  of: EthereumArgumentsMeasureable;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsnumberArgs = {
  argument?: InputMaybe<Array<ArgumentSelector>>;
  argumentType?: InputMaybe<Array<ArgumentTypeSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsreferenceArgs = {
  reference?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentssmartContractArgs = {
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentssmartContractSignatureArgs = {
  signatureType?: InputMaybe<SignatureTypeSelector>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentssuccessArgs = {
  success?: InputMaybe<Array<Scalars['Boolean']>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentstransactionArgs = {
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Arguments of Smart Contract Calls and Events */
export type EthereumArgumentsvalueArgs = {
  value?: InputMaybe<Array<ArgumentValueSelector>>;
};

export enum EthereumArgumentsConvertable {
  /** Token name */
  token_name = 'token_name',
  /** Token symbol */
  token_symbol = 'token_symbol'
}

export enum EthereumArgumentsMeasureable {
  /** Argument */
  argument = 'argument',
  /** Argument index */
  argument_index = 'argument_index',
  /** Argument type */
  argument_type = 'argument_type',
  /** Argument value */
  argument_value = 'argument_value',
  /** Block */
  block = 'block',
  /** Call depth */
  call_depth = 'call_depth',
  /** Caller */
  caller = 'caller',
  /** Date */
  date = 'date',
  /** Smart Contract Method Signature */
  signature = 'signature',
  /** Smart Contract Method Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Method Name */
  signature_name = 'signature_name',
  /** Smart Contract Method Signature */
  signature_type = 'signature_type',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

/** Balance in a currency */
export type EthereumBalance = {
  __typename?: 'EthereumBalance';
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** History of balance changes by currencies for the address */
  history?: Maybe<Array<EthereumBalanceChange>>;
  value?: Maybe<Scalars['Float']>;
};


/** Balance in a currency */
export type EthereumBalancehistoryArgs = {
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  height?: InputMaybe<BlockSelectorRange>;
};

/** Change of balance in a currency */
export type EthereumBalanceChange = {
  __typename?: 'EthereumBalanceChange';
  /** Block number (height) in blockchain */
  block: Scalars['Int'];
  /** Block timestamp */
  timestamp?: Maybe<Scalars['ISO8601DateTime']>;
  /** Transfer amount ( positive inbound, negative outbound) */
  transferAmount?: Maybe<Scalars['Float']>;
  value?: Maybe<Scalars['Float']>;
};

export type EthereumBlockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};

/** Blocks in Ethereum blockchain */
export type EthereumBlocks = {
  __typename?: 'EthereumBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  difficulty?: Maybe<Scalars['Float']>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  /** Block miner */
  miner?: Maybe<EthereumAddressInfo>;
  minimum?: Maybe<Scalars['String']>;
  /** Block nonce */
  nonce: Scalars['Int'];
  /** Parent block hash */
  parentHash: Scalars['String'];
  reward?: Maybe<Scalars['Float']>;
  /** Currency of reward */
  rewardCurrency?: Maybe<Currency>;
  size?: Maybe<Scalars['Int']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalDifficulty?: Maybe<Scalars['Float']>;
  transactionCount?: Maybe<Scalars['Int']>;
  transactionCountBigInt?: Maybe<Scalars['BigInt']>;
  uncleCount?: Maybe<Scalars['Int']>;
  uncleCountBigInt?: Maybe<Scalars['BigInt']>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksanyArgs = {
  of: EthereumBlocksMeasureable;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlockscountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
  uniq?: InputMaybe<EthereumBlocksUniq>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlockscountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
  uniq?: InputMaybe<EthereumBlocksUniq>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksdifficultyArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlockshashArgs = {
  blockHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksmaximumArgs = {
  get?: InputMaybe<EthereumBlocksMeasureable>;
  of: EthereumBlocksMeasureable;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksminerArgs = {
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksminimumArgs = {
  get?: InputMaybe<EthereumBlocksMeasureable>;
  of: EthereumBlocksMeasureable;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksrewardArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlockssizeArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlockstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlockstotalDifficultyArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlockstransactionCountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlockstransactionCountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksuncleCountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};


/** Blocks in Ethereum blockchain */
export type EthereumBlocksuncleCountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockReward?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<EthereumAddressSelector>>;
  size?: InputMaybe<Array<IntegerSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  transactionCount?: InputMaybe<Array<IntegerSelector>>;
  uncleCount?: InputMaybe<Array<IntegerSelector>>;
};

export enum EthereumBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Block Reward */
  block_reward = 'block_reward',
  /** Date */
  date = 'date',
  /** Block Miner */
  miner = 'miner',
  /** Time */
  time = 'time'
}

export enum EthereumBlocksUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique miner count */
  miners = 'miners'
}

export enum EthereumCallsMeasureable {
  /** Block */
  block = 'block',
  /** Call depth */
  call_depth = 'call_depth',
  /** Caller */
  caller = 'caller',
  /** Date */
  date = 'date',
  /** Smart Contract Method Signature */
  signature = 'signature',
  /** Smart Contract Method Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Method Name */
  signature_name = 'signature_name',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

/** Coinpath */
export type EthereumCoinpath = {
  __typename?: 'EthereumCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<EthereumAddressInfo>;
  /** Sender address */
  sender?: Maybe<EthereumAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
};


/** Coinpath */
export type EthereumCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type EthereumCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type EthereumCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type EthereumCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

/**
 * Currency selector in Ethereum blockchain.
 *   Currencies supported are native ( ETH / ETC ), ERC20, ERC721 tokens.
 *   You can specify currency symbol or smart contract address. Symbols ETH/ETC are reserved for native currencies in Ethereum mainnet and classic.
 *   Ethereum Smart contract address should start from 0x and contain 40 hex digits.
 *   If digits are case sensitive, address is checked against checksum according to EIP-55.
 */
export type EthereumCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Ethereum DEX attributes */
export type EthereumDex = {
  __typename?: 'EthereumDex';
  /** Address for DEX exchange identification */
  address: Address;
  /** Full name ( name for known, Protocol for unknown ) */
  fullName: Scalars['String'];
  /** Full name ( name for known, Protocol / address for unknown ) */
  fullNameWithId: Scalars['String'];
  /** Name for known exchanges */
  name?: Maybe<Scalars['String']>;
};

export type EthereumDexTradeFilter = {
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};

/** Trades on DEX smart contracts */
export type EthereumDexTrades = {
  __typename?: 'EthereumDexTrades';
  /** Trader (maker or taker) */
  address?: Maybe<EthereumAddressInfo>;
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  /** Base currency */
  baseCurrency?: Maybe<Currency>;
  /** Block in the blockchain */
  block?: Maybe<BlockExtended>;
  buyAmount?: Maybe<Scalars['Float']>;
  /** Maker buys this currency */
  buyCurrency?: Maybe<Currency>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Identification of admin / manager / factory of smart contract, executing trades */
  exchange?: Maybe<EthereumDex>;
  gas?: Maybe<Scalars['Float']>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Trade 'maker' side */
  maker?: Maybe<EthereumAddressInfo>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  /** Protocol name of the smart contract */
  protocol?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  /** Quote currency */
  quoteCurrency?: Maybe<Currency>;
  quotePrice?: Maybe<Scalars['Float']>;
  sellAmount?: Maybe<Scalars['Float']>;
  /** Maker sells this currency */
  sellCurrency?: Maybe<Currency>;
  /** Side of trade ( SELL / BUY ) */
  side?: Maybe<TradeSide>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Trade 'taker' side */
  taker?: Maybe<EthereumAddressInfo>;
  /** Time interval */
  timeInterval?: Maybe<TimeInterval>;
  tradeAmount?: Maybe<Scalars['Float']>;
  /** Index of trade in transaction, used to separate trades in transaction */
  tradeIndex?: Maybe<Scalars['String']>;
  /** Transaction of DexTrade */
  transaction?: Maybe<EthereumTransactionInfoExtended>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesaddressArgs = {
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesanyArgs = {
  of: EthereumDexTradesMeasureable;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesbaseAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesbaseCurrencyArgs = {
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesbuyAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesbuyCurrencyArgs = {
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradescountArgs = {
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
  uniq?: InputMaybe<EthereumDexTradesUniq>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradescountBigIntArgs = {
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
  uniq?: InputMaybe<EthereumDexTradesUniq>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesexchangeArgs = {
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesgasArgs = {
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesgasPriceArgs = {
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesgasValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesmakerArgs = {
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesmaximumArgs = {
  get?: InputMaybe<EthereumDexTradesMeasureable>;
  of: EthereumDexTradesMeasureable;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesminimumArgs = {
  get?: InputMaybe<EthereumDexTradesMeasureable>;
  of: EthereumDexTradesMeasureable;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradespriceArgs = {
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  calculate?: InputMaybe<PriceAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesprotocolArgs = {
  protocol?: InputMaybe<Array<StringSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesquoteAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesquoteCurrencyArgs = {
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradesquotePriceArgs = {
  baseCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  calculate?: InputMaybe<PriceAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerOrTaker?: InputMaybe<Array<EthereumAddressSelector>>;
  makerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
  takerSmartContractType?: InputMaybe<Array<SmartContractTypeSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradessellAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradessellCurrencyArgs = {
  sellCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradessmartContractArgs = {
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradestakerArgs = {
  taker?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradestradeAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in: BaseCurrencyEnum;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradestradeIndexArgs = {
  tradeIndex?: InputMaybe<Array<StringSelector>>;
};


/** Trades on DEX smart contracts */
export type EthereumDexTradestransactionArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
};

export enum EthereumDexTradesMeasureable {
  /** Block */
  block = 'block',
  /** Buy Amount */
  buy_amount = 'buy_amount',
  /** Buy Token address */
  buy_currency_address = 'buy_currency_address',
  /** Buy Currency symbol */
  buy_currency_symbol = 'buy_currency_symbol',
  /** Date */
  date = 'date',
  /** Maker */
  maker = 'maker',
  /** Price */
  price = 'price',
  /** Quote Price */
  quote_price = 'quote_price',
  /** Sell Amount */
  sell_amount = 'sell_amount',
  /** Sell Token address */
  sell_currency_address = 'sell_currency_address',
  /** Sell Currency symbol */
  sell_currency_symbol = 'sell_currency_symbol',
  /** Taker */
  taker = 'taker',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum EthereumDexTradesUniq {
  /** Unique makers & takers count */
  address = 'address',
  /** Base currencies count */
  base_currency = 'base_currency',
  /** Unique blocks */
  blocks = 'blocks',
  /** Buy currencies count */
  buy_currency = 'buy_currency',
  /** Unique date count */
  dates = 'dates',
  /** Unique makers count */
  makers = 'makers',
  /** Unique protocols count */
  protocols = 'protocols',
  /** Quote currencies count */
  quote_currency = 'quote_currency',
  /** Sell currencies count */
  sell_currency = 'sell_currency',
  /** Unique TX senders count */
  senders = 'senders',
  /** Unique smart contract count */
  smart_contracts = 'smart_contracts',
  /** Unique makers count */
  takers = 'takers',
  /** Unique transactions count */
  txs = 'txs'
}

export enum EthereumEventsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Smart Contract Event Signature */
  signature = 'signature',
  /** Smart Contract Event Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Event Name */
  signature_name = 'signature_name',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum EthereumNetwork {
  /** Binance Smart Chain Mainnet */
  bsc = 'bsc',
  /** Binance Smart Chain Testnet */
  bsc_testnet = 'bsc_testnet',
  /** Celo Alfajores Testnet */
  celo_alfajores = 'celo_alfajores',
  /** Celo Baklava Testnet */
  celo_baklava = 'celo_baklava',
  /** Celo RC1 */
  celo_rc1 = 'celo_rc1',
  /** Ethereum Classic */
  ethclassic = 'ethclassic',
  /** Ethereum Classic ( no reorg from block 10904146) */
  ethclassic_reorg = 'ethclassic_reorg',
  /** Ethereum Mainnet */
  ethereum = 'ethereum',
  /** Goerli Ethereum Testnet */
  goerli = 'goerli',
  /** Klaytn Mainnet */
  klaytn = 'klaytn',
  /** Matic (Polygon) Mainnet */
  matic = 'matic',
  /** Velas Mainnet */
  velas = 'velas',
  /** Velas Testnet */
  velas_testnet = 'velas_testnet'
}

/** Ethereum smart contract */
export type EthereumSmartContract = {
  __typename?: 'EthereumSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type EthereumSmartContractCallFilter = {
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  success?: InputMaybe<Array<Scalars['Boolean']>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

/** Smart Contract Calls */
export type EthereumSmartContractCalls = {
  __typename?: 'EthereumSmartContractCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Call arguments */
  arguments?: Maybe<Array<ArgumentNameValue>>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Caller of the method invocation ( tx sender or another smart contract ) */
  caller?: Maybe<EthereumAddressInfo>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** External call executed explicitly by tx sender. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  /** Gas used for transaction in external call, or by methd in internal call */
  gasValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction where call happened */
  transaction?: Maybe<EthereumTransactionInfo>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallsamountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  success?: InputMaybe<Array<Scalars['Boolean']>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallsanyArgs = {
  of: EthereumCallsMeasureable;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallscallerArgs = {
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallscountArgs = {
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  success?: InputMaybe<Array<Scalars['Boolean']>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallscountBigIntArgs = {
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  success?: InputMaybe<Array<Scalars['Boolean']>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallsexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallsgasValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  caller?: InputMaybe<Array<EthereumAddressSelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  success?: InputMaybe<Array<Scalars['Boolean']>>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallsmaximumArgs = {
  get?: InputMaybe<EthereumCallsMeasureable>;
  of: EthereumCallsMeasureable;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallsminimumArgs = {
  get?: InputMaybe<EthereumCallsMeasureable>;
  of: EthereumCallsMeasureable;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallssmartContractArgs = {
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallssmartContractMethodArgs = {
  smartContractMethod?: InputMaybe<MethodSelector>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallssuccessArgs = {
  success?: InputMaybe<Array<Scalars['Boolean']>>;
};


/** Smart Contract Calls */
export type EthereumSmartContractCallstransactionArgs = {
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<Array<HashSelector>>;
};

/** Smart Contract Events */
export type EthereumSmartContractEvent = {
  __typename?: 'EthereumSmartContractEvent';
  any?: Maybe<Scalars['String']>;
  /** Event arguments */
  arguments?: Maybe<Array<ArgumentNameValue>>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Event index */
  eventIndex?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being called */
  smartContract?: Maybe<EthereumSmartContract>;
  /** Contract event logged */
  smartContractEvent?: Maybe<Event>;
  /** Transaction where event happened */
  transaction?: Maybe<EthereumTransactionInfo>;
};


/** Smart Contract Events */
export type EthereumSmartContractEventanyArgs = {
  of: EthereumEventsMeasureable;
};


/** Smart Contract Events */
export type EthereumSmartContractEventblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Smart Contract Events */
export type EthereumSmartContractEventcountArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Events */
export type EthereumSmartContractEventcountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Events */
export type EthereumSmartContractEventmaximumArgs = {
  get?: InputMaybe<EthereumEventsMeasureable>;
  of: EthereumEventsMeasureable;
};


/** Smart Contract Events */
export type EthereumSmartContractEventminimumArgs = {
  get?: InputMaybe<EthereumEventsMeasureable>;
  of: EthereumEventsMeasureable;
};


/** Smart Contract Events */
export type EthereumSmartContractEventsmartContractArgs = {
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Smart Contract Events */
export type EthereumSmartContractEventsmartContractEventArgs = {
  smartContractEvent?: InputMaybe<EventSelector>;
};


/** Smart Contract Events */
export type EthereumSmartContractEventtransactionArgs = {
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<Array<HashSelector>>;
};

export type EthereumSmartContractEventFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<Array<EthereumAddressSelector>>;
  smartContractEvent?: InputMaybe<EventSelector>;
  smartContractType?: InputMaybe<SmartContractTypeSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

/** Blockchain smart contract */
export type EthereumSmartContractInfo = {
  __typename?: 'EthereumSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

/** Blockchain smart contract */
export type EthereumSmartContractInfoWithAttributes = {
  __typename?: 'EthereumSmartContractInfoWithAttributes';
  /** Attributes from readonly methods */
  attributes?: Maybe<Array<SmartContractReadonlyAttribute>>;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type EthereumTransactionFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  gasValue?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};

/** Blockchain transaction info */
export type EthereumTransactionInfo = {
  __typename?: 'EthereumTransactionInfo';
  /** Gas consumed */
  gas: Scalars['Int'];
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  /** Gas value cost */
  gasValue: Scalars['Float'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction from address */
  txFrom: EthereumAddressInfo;
};

/** Blockchain Transaction Extended info */
export type EthereumTransactionInfoExtended = {
  __typename?: 'EthereumTransactionInfoExtended';
  /** Gas consumed */
  gas: Scalars['Int'];
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  /** Gas value cost */
  gasValue: Scalars['Float'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
  /** Transaction from address */
  txFrom: EthereumAddressInfo;
};

/** Transactions in Ethereum blockchain */
export type EthereumTransactions = {
  __typename?: 'EthereumTransactions';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Created smart contract */
  creates?: Maybe<EthereumAddressInfo>;
  /** Currency of amount */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Error message if any */
  error?: Maybe<Scalars['String']>;
  gas?: Maybe<Scalars['Float']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price in Gwei */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Transaction sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction receiver */
  to?: Maybe<EthereumAddressInfo>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  gasValue?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsanyArgs = {
  of: EthereumTransactionsMeasureable;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  gasValue?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
  uniq?: InputMaybe<EthereumTransactionsUniq>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  gasValue?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
  uniq?: InputMaybe<EthereumTransactionsUniq>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionscreatesArgs = {
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsgasArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  gasValue?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsgasCurrencyArgs = {
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsgasPriceArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  gasValue?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsgasValueArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<EthereumCurrencySelector>>;
  gasValue?: InputMaybe<Array<AmountSelector>>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txCreates?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionshashArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsindexArgs = {
  txIndex?: InputMaybe<Array<TxIndexSelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsmaximumArgs = {
  get?: InputMaybe<EthereumTransactionsMeasureable>;
  of: EthereumTransactionsMeasureable;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionsminimumArgs = {
  get?: InputMaybe<EthereumTransactionsMeasureable>;
  of: EthereumTransactionsMeasureable;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionssenderArgs = {
  txSender?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Transactions in Ethereum blockchain */
export type EthereumTransactionstoArgs = {
  txTo?: InputMaybe<Array<EthereumAddressSelector>>;
};

export enum EthereumTransactionsMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Gas used */
  gas = 'gas',
  /** Gas price */
  gas_price = 'gas_price',
  /** Gas value */
  gas_value = 'gas_value',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction Sender */
  tx_sender = 'tx_sender'
}

export enum EthereumTransactionsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique TX receivers count */
  receivers = 'receivers',
  /** Unique TX senders count */
  senders = 'senders'
}

export type EthereumTransferFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<Array<EthereumAddressSelector>>;
  sender?: InputMaybe<Array<EthereumAddressSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfers = {
  __typename?: 'EthereumTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  gasValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<EthereumAddressInfo>;
  /** Transfer sender */
  sender?: Maybe<EthereumAddressInfo>;
  /** Success flag */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction where transfer happened */
  transaction?: Maybe<EthereumTransactionInfo>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  receiver?: InputMaybe<Array<EthereumAddressSelector>>;
  sender?: InputMaybe<Array<EthereumAddressSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersanyArgs = {
  of: EthereumTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransferscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<Array<EthereumAddressSelector>>;
  sender?: InputMaybe<Array<EthereumAddressSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransferscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<Array<EthereumAddressSelector>>;
  sender?: InputMaybe<Array<EthereumAddressSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransferscurrencyArgs = {
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersentityIdArgs = {
  entityId?: InputMaybe<EntitySelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersgasValueArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<EthereumCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  receiver?: InputMaybe<Array<EthereumAddressSelector>>;
  sender?: InputMaybe<Array<EthereumAddressSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersmaximumArgs = {
  get?: InputMaybe<EthereumTransfersMeasureable>;
  of: EthereumTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersminimumArgs = {
  get?: InputMaybe<EthereumTransfersMeasureable>;
  of: EthereumTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransfersreceiverArgs = {
  receiver?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransferssenderArgs = {
  sender?: InputMaybe<Array<EthereumAddressSelector>>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransferssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type EthereumTransferstransactionArgs = {
  txFrom?: InputMaybe<Array<EthereumAddressSelector>>;
  txHash?: InputMaybe<Array<HashSelector>>;
};

export enum EthereumTransfersMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Token address */
  currency_address = 'currency_address',
  /** Currency symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** Entity ID */
  entity_id = 'entity_id',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

/** Smart contract event */
export type Event = {
  __typename?: 'Event';
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature Hash */
  signatureHash: Scalars['String'];
};

/** Smart contract event. In selector you can use the name, signature or hex hash */
export type EventSelector = {
  /** Event signature in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Event signature is */
  is?: InputMaybe<Scalars['String']>;
  /** Event signature not */
  not?: InputMaybe<Scalars['String']>;
  /** Event signature not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Filecoin */
export type Filecoin = {
  __typename?: 'Filecoin';
  /** Filecoin Network Blocks */
  blocks?: Maybe<Array<FilecoinBlock>>;
  /** Filecoin Network Calls */
  calls?: Maybe<Array<FilecoinCalls>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<FilecoinCoinpath>>;
  /** Filecoin Network Messages ( blocks, transfers, ... ) */
  messages?: Maybe<Array<FilecoinMessages>>;
  /** Filecoin Network Currency Transfers */
  transfers?: Maybe<Array<FilecoinTransfers>>;
};


/** Filecoin */
export type FilecoinblocksArgs = {
  any?: InputMaybe<Array<FilecoinBlockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<AddressSelector>>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Filecoin */
export type FilecoincallsArgs = {
  amount?: InputMaybe<AmountSelector>;
  any?: InputMaybe<Array<FilecoinCallFilter>>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Filecoin */
export type FilecoincoinpathArgs = {
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Filecoin */
export type FilecoinmessagesArgs = {
  amount?: InputMaybe<AmountSelector>;
  any?: InputMaybe<Array<FilecoinMessageFilter>>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Filecoin */
export type FilecointransfersArgs = {
  amount?: InputMaybe<AmountSelector>;
  any?: InputMaybe<Array<FilecoinTransferFilter>>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<TransferTypeSelector>;
};

/** Block */
export type FilecoinBlock = {
  __typename?: 'FilecoinBlock';
  any?: Maybe<Scalars['String']>;
  blockSig?: Maybe<NameWithId>;
  blsAggregate?: Maybe<NameWithId>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  electionProof?: Maybe<Scalars['String']>;
  forkSignalling?: Maybe<Scalars['BigInt']>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block round in blockchain */
  height: Scalars['Int'];
  /** Block index on height */
  index?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  messageCount?: Maybe<Scalars['Int']>;
  messageCountBigInt?: Maybe<Scalars['BigInt']>;
  messages?: Maybe<Scalars['String']>;
  /** Miner */
  miner?: Maybe<Address>;
  minerTips?: Maybe<Scalars['Float']>;
  minimum?: Maybe<Scalars['String']>;
  parentMessageReceipts?: Maybe<Scalars['String']>;
  parentStateRoot?: Maybe<Scalars['String']>;
  parentWeight?: Maybe<Scalars['BigInt']>;
  reward?: Maybe<Scalars['Float']>;
  ticket?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  totalReward?: Maybe<Scalars['Float']>;
  winCount?: Maybe<Scalars['Int']>;
  winCountBigInt?: Maybe<Scalars['BigInt']>;
  wincount?: Maybe<Scalars['Int']>;
};


/** Block */
export type FilecoinBlockanyArgs = {
  of: FilecoinBlocksMeasureable;
};


/** Block */
export type FilecoinBlockcountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<FilecoinBlockUniq>;
};


/** Block */
export type FilecoinBlockcountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<FilecoinBlockUniq>;
};


/** Block */
export type FilecoinBlockhashArgs = {
  blockHash?: InputMaybe<Array<HashSelector>>;
};


/** Block */
export type FilecoinBlockheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Block */
export type FilecoinBlockindexArgs = {
  blockIndex?: InputMaybe<IntegerSelector>;
};


/** Block */
export type FilecoinBlockmaximumArgs = {
  get?: InputMaybe<FilecoinBlocksMeasureable>;
  of: FilecoinBlocksMeasureable;
};


/** Block */
export type FilecoinBlockmessageCountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type FilecoinBlockmessageCountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type FilecoinBlockminerArgs = {
  miner?: InputMaybe<AddressSelector>;
};


/** Block */
export type FilecoinBlockminerTipsArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type FilecoinBlockminimumArgs = {
  get?: InputMaybe<FilecoinBlocksMeasureable>;
  of: FilecoinBlocksMeasureable;
};


/** Block */
export type FilecoinBlockrewardArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type FilecoinBlocktimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type FilecoinBlocktotalRewardArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type FilecoinBlockwinCountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type FilecoinBlockwinCountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};

export type FilecoinBlockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  blockIndex?: InputMaybe<IntegerSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
};

export enum FilecoinBlockUniq {
  /** Unique block count */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique block height count */
  heights = 'heights',
  /** Miner */
  miners = 'miners'
}

export enum FilecoinBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Block Miner */
  miner = 'miner',
  /** Time */
  time = 'time'
}

export type FilecoinCallFilter = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};

/** Calls in Filecoin blockchain */
export type FilecoinCalls = {
  __typename?: 'FilecoinCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer Message is included */
  block?: Maybe<Block>;
  /** Call hash */
  callHash?: Maybe<Scalars['String']>;
  /** Call hash */
  callPath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  exitCode?: Maybe<Scalars['BigInt']>;
  gas?: Maybe<Scalars['Int']>;
  gasFeeCap?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  gasPremium?: Maybe<Scalars['Float']>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message Method */
  messageMethod?: Maybe<NameWithId>;
  /** Method */
  method?: Maybe<NameWithId>;
  minedBlock?: Maybe<FilecoinMinedBlock>;
  minimum?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['BigInt']>;
  /** Message receiver */
  receiver?: Maybe<AddressWithAccount>;
  returnValue?: Maybe<Scalars['String']>;
  /** Message sender */
  sender?: Maybe<AddressWithAccount>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsamountArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsanyArgs = {
  of: FilecoinCallsMeasureable;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallscountArgs = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<FilecoinMessagesUniq>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallscountBigIntArgs = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<FilecoinMessagesUniq>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsgasArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallshashArgs = {
  hash?: InputMaybe<HashSelector>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsmaximumArgs = {
  get?: InputMaybe<FilecoinCallsMeasureable>;
  of: FilecoinCallsMeasureable;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsmessageMethodArgs = {
  messageMethod?: InputMaybe<IntegerSelector>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsmethodArgs = {
  method?: InputMaybe<IntegerSelector>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsminimumArgs = {
  get?: InputMaybe<FilecoinCallsMeasureable>;
  of: FilecoinCallsMeasureable;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallsreceiverArgs = {
  receiver?: InputMaybe<AddressSelector>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallssenderArgs = {
  sender?: InputMaybe<AddressSelector>;
};


/** Calls in Filecoin blockchain */
export type FilecoinCallssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};

export enum FilecoinCallsMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Gas used */
  gas = 'gas',
  /** Gas limit */
  gas_limit = 'gas_limit',
  /** Gas value */
  gas_value = 'gas_value',
  /** Message hash */
  message_hash = 'message_hash',
  /** Time */
  time = 'time'
}

/** Coinpath */
export type FilecoinCoinpath = {
  __typename?: 'FilecoinCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message of transfer happened */
  message?: Maybe<TransactionHashValue>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
};


/** Coinpath */
export type FilecoinCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type FilecoinCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type FilecoinCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type FilecoinCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

export type FilecoinMessageFilter = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};

/** Messages in Filecoin blockchain */
export type FilecoinMessages = {
  __typename?: 'FilecoinMessages';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  baseFeeBurn?: Maybe<Scalars['Float']>;
  /** Block where transfer Message is included */
  block?: Maybe<Block>;
  burned?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  exitCode?: Maybe<Scalars['BigInt']>;
  gas?: Maybe<Scalars['Int']>;
  gasFeeCap?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  gasPremium?: Maybe<Scalars['Float']>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Method */
  method?: Maybe<NameWithId>;
  minedBlock?: Maybe<FilecoinMinedBlock>;
  minerPenalty?: Maybe<Scalars['Float']>;
  minerTip?: Maybe<Scalars['Float']>;
  minimum?: Maybe<Scalars['String']>;
  nonce?: Maybe<Scalars['BigInt']>;
  overEstimationBurn?: Maybe<Scalars['Float']>;
  /** Message receiver */
  receiver?: Maybe<AddressWithAccount>;
  refund?: Maybe<Scalars['Float']>;
  returnValue?: Maybe<Scalars['String']>;
  /** Message sender */
  sender?: Maybe<AddressWithAccount>;
  signature?: Maybe<Scalars['String']>;
  signatureType?: Maybe<Scalars['String']>;
  /** Signed Message hash */
  signedHash?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  totalCost?: Maybe<Scalars['Float']>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesamountArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesanyArgs = {
  of: FilecoinMessagesMeasureable;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesbaseFeeBurnArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesburnedArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagescountArgs = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<FilecoinMessagesUniq>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagescountBigIntArgs = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<FilecoinMessagesUniq>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesgasArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessageshashArgs = {
  hash?: InputMaybe<HashSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesmaximumArgs = {
  get?: InputMaybe<FilecoinMessagesMeasureable>;
  of: FilecoinMessagesMeasureable;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesmethodArgs = {
  method?: InputMaybe<IntegerSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesminerPenaltyArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesminerTipArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesminimumArgs = {
  get?: InputMaybe<FilecoinMessagesMeasureable>;
  of: FilecoinMessagesMeasureable;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesoverEstimationBurnArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesreceiverArgs = {
  receiver?: InputMaybe<AddressSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagesrefundArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagessenderArgs = {
  sender?: InputMaybe<AddressSelector>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagessuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Messages in Filecoin blockchain */
export type FilecoinMessagestotalCostArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  index?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
};

export enum FilecoinMessagesMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Gas used */
  gas = 'gas',
  /** Gas limit */
  gas_limit = 'gas_limit',
  /** Gas value */
  gas_value = 'gas_value',
  /** Message hash */
  message_hash = 'message_hash',
  /** Time */
  time = 'time'
}

export enum FilecoinMessagesUniq {
  /** Unique block heights */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique Message receivers */
  receivers = 'receivers',
  /** Unique Message senders */
  senders = 'senders'
}

/** Filecoin Mined Block */
export type FilecoinMinedBlock = {
  __typename?: 'FilecoinMinedBlock';
  /** Hash */
  hash?: Maybe<Scalars['String']>;
  /** Index on height */
  index?: Maybe<Scalars['Int']>;
  /** Miner */
  miner?: Maybe<Address>;
};

export enum FilecoinNetwork {
  /** Filecoin Mainnet */
  filecoin = 'filecoin'
}

export type FilecoinTransferFilter = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<TransferTypeSelector>;
};

export enum FilecoinTransferType {
  /** Burn */
  burn = 'burn',
  /** Genesis */
  genesis = 'genesis',
  /** Miner Tip */
  miner = 'miner',
  /** Rebalance */
  rebalance = 'rebalance',
  /** Reward */
  reward = 'reward',
  /** Send (transfer) */
  send = 'send'
}

/** Transfers in Filecoin blockchain */
export type FilecoinTransfers = {
  __typename?: 'FilecoinTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer Transfer is included */
  block?: Maybe<BlockExtended>;
  /** Call hash */
  callHash?: Maybe<Scalars['String']>;
  /** Call hash */
  callPath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Message hash */
  hash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Message Method */
  messageMethod?: Maybe<NameWithId>;
  /** Method */
  method?: Maybe<NameWithId>;
  minimum?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer timestamp */
  timestamp?: Maybe<DateTime>;
  /** Type of transfer */
  transferType?: Maybe<FilecoinTransferType>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfersamountArgs = {
  amount?: InputMaybe<AmountSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<TransferTypeSelector>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfersanyArgs = {
  of: FilecoinTransfersMeasureable;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransferscountArgs = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<TransferTypeSelector>;
  uniq?: InputMaybe<FilecoinMessagesUniq>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransferscountBigIntArgs = {
  amount?: InputMaybe<AmountSelector>;
  date?: InputMaybe<DateSelector>;
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  messageMethod?: InputMaybe<IntegerSelector>;
  method?: InputMaybe<IntegerSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transferType?: InputMaybe<TransferTypeSelector>;
  uniq?: InputMaybe<FilecoinMessagesUniq>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfershashArgs = {
  hash?: InputMaybe<HashSelector>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfersmaximumArgs = {
  get?: InputMaybe<FilecoinTransfersMeasureable>;
  of: FilecoinTransfersMeasureable;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfersmessageMethodArgs = {
  messageMethod?: InputMaybe<IntegerSelector>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfersmethodArgs = {
  method?: InputMaybe<IntegerSelector>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfersminimumArgs = {
  get?: InputMaybe<FilecoinTransfersMeasureable>;
  of: FilecoinTransfersMeasureable;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransfersreceiverArgs = {
  receiver?: InputMaybe<AddressSelector>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransferssenderArgs = {
  sender?: InputMaybe<AddressSelector>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransferstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Transfers in Filecoin blockchain */
export type FilecoinTransferstransferTypeArgs = {
  transferType?: InputMaybe<TransferTypeSelector>;
};

export enum FilecoinTransfersMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Gas used */
  gas = 'gas',
  /** Gas limit */
  gas_limit = 'gas_limit',
  /** Gas value */
  gas_value = 'gas_value',
  /** Time */
  time = 'time',
  /** Transfer hash */
  tx_hash = 'tx_hash',
  /** Value */
  value = 'value'
}

/** Select by number */
export type FloatSelector = {
  /** in range */
  between?: InputMaybe<Array<Scalars['Float']>>;
  /** greater than */
  gt?: InputMaybe<Scalars['Float']>;
  /** greater or equal than */
  gteq?: InputMaybe<Scalars['Float']>;
  /** in the list */
  in?: InputMaybe<Array<Scalars['Float']>>;
  /** is */
  is?: InputMaybe<Scalars['Float']>;
  /** less than */
  lt?: InputMaybe<Scalars['Float']>;
  /** less or equal than */
  lteq?: InputMaybe<Scalars['Float']>;
  /** not */
  not?: InputMaybe<Scalars['Float']>;
  /** not in the list */
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export enum FlowDirection {
  /** Inbound transfers */
  inbound = 'inbound',
  /** Outbound transfers */
  outbound = 'outbound'
}

/** Harmony Chain */
export type Harmony = {
  __typename?: 'Harmony';
  /** Arguments of Smart Contract Calls and Events */
  arguments?: Maybe<Array<HarmonyArguments>>;
  /** Harmony Blocks */
  blocks?: Maybe<Array<HarmonyBlocks>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<HarmonySmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<HarmonySmartContractEvents>>;
  /** Harmony Staking Transactions */
  stakingTransactions?: Maybe<Array<HarmonyStakingTransactions>>;
  /** Harmony Transactions */
  transactions?: Maybe<Array<HarmonyTransactions>>;
  /** Harmony Transfers */
  transfers?: Maybe<Array<HarmonyTransfers>>;
};


/** Harmony Chain */
export type HarmonyargumentsArgs = {
  any?: InputMaybe<Array<HarmonyArgumentsFilter>>;
  argument?: InputMaybe<StringSelector>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  smartContractAddress?: InputMaybe<HashSelector>;
  smartContractId?: InputMaybe<IntegerSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Harmony Chain */
export type HarmonyblocksArgs = {
  any?: InputMaybe<Array<HarmonyBlocksFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<HashSelector>;
  options?: InputMaybe<QueryOptions>;
  perentHash?: InputMaybe<HashSelector>;
  stakingTransactionsCount?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<HashSelector>;
  unclesCount?: InputMaybe<HashSelector>;
  viewId?: InputMaybe<HashSelector>;
};


/** Harmony Chain */
export type HarmonysmartContractCallsArgs = {
  any?: InputMaybe<Array<HarmonySmartContractCallsFilter>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Harmony Chain */
export type HarmonysmartContractEventsArgs = {
  any?: InputMaybe<Array<HarmonySmartContractEventsFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractEvent?: InputMaybe<EventSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Harmony Chain */
export type HarmonystakingTransactionsArgs = {
  any?: InputMaybe<Array<HarmonyStakingTransactionsFilter>>;
  date?: InputMaybe<DateSelector>;
  delegatorAddress?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  status?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<StakingTransactionsTypeSelector>;
  validatorAddress?: InputMaybe<HashSelector>;
};


/** Harmony Chain */
export type HarmonytransactionsArgs = {
  any?: InputMaybe<Array<HarmonyTransactionsFilter>>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  reciever?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  status?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Harmony Chain */
export type HarmonytransfersArgs = {
  any?: InputMaybe<Array<HarmonyTransfersFilter>>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  sender?: InputMaybe<HashSelector>;
  status?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};

/** Arguments of Smart Contract Calls and Events */
export type HarmonyArguments = {
  __typename?: 'HarmonyArguments';
  /** Value */
  address?: Maybe<Scalars['String']>;
  any?: Maybe<Scalars['String']>;
  /** Argument Index */
  argIndex?: Maybe<Scalars['String']>;
  /** Argument Type */
  argType?: Maybe<Scalars['String']>;
  /** Argument */
  argument?: Maybe<Scalars['String']>;
  /** Transaction hash */
  blockHash?: Maybe<Scalars['String']>;
  /** Call Path */
  callPath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Epoch */
  epoch?: Maybe<Scalars['BigInt']>;
  /** Hash of the block where this transaction was in */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The number of transactions made by the sender prior to this one. */
  nonce?: Maybe<Scalars['BigInt']>;
  /** Value */
  number?: Maybe<Scalars['String']>;
  /** Address of the receiver */
  receiver?: Maybe<Scalars['String']>;
  /** Address of the sender */
  sender?: Maybe<Scalars['String']>;
  /** ShardID */
  shardId?: Maybe<Scalars['BigInt']>;
  /** Signature ID */
  signatureId?: Maybe<Scalars['BigInt']>;
  /** Address of the smart contract */
  smartContractAddress?: Maybe<Scalars['String']>;
  /** Id of the smart contract */
  smartContractId?: Maybe<Scalars['BigInt']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Value */
  value?: Maybe<Scalars['String']>;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentsanyArgs = {
  of: HarmonyArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentsargumentArgs = {
  argument?: InputMaybe<Scalars['String']>;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentsblockHashArgs = {
  blockHash?: InputMaybe<HashSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentscountArgs = {
  uniq?: InputMaybe<HarmonyArgumentsUniq>;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentsledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentsmaximumArgs = {
  get?: InputMaybe<HarmonyArgumentsMeasureable>;
  of: HarmonyArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentsminimumArgs = {
  get?: InputMaybe<HarmonyArgumentsMeasureable>;
  of: HarmonyArgumentsMeasureable;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentsreceiverArgs = {
  receiver?: InputMaybe<HashSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentssenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentssmartContractAddressArgs = {
  smartContractAddress?: InputMaybe<HashSelector>;
};


/** Arguments of Smart Contract Calls and Events */
export type HarmonyArgumentssmartContractIdArgs = {
  smartContractAddress?: InputMaybe<IntegerSelector>;
};

export type HarmonyArgumentsFilter = {
  argument?: InputMaybe<StringSelector>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  smartContractAddress?: InputMaybe<HashSelector>;
  smartContractId?: InputMaybe<IntegerSelector>;
  time?: InputMaybe<DateTimeSelector>;
};

export enum HarmonyArgumentsMeasureable {
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Address of  the receive */
  receiver = 'receiver',
  /** Address of the sender */
  sender = 'sender',
  /** Signature */
  signature = 'signature',
  /** Hash of the signature */
  signature_hash = 'signature_hash',
  /** Name of the signature */
  signature_name = 'signature_name',
  /** Address of the smart contract */
  smart_contract_address = 'smart_contract_address',
  /** Id of the smart contract */
  smart_contract_id = 'smart_contract_id',
  /** Time */
  time = 'time'
}

export enum HarmonyArgumentsUniq {
  /** Unique block hash count */
  block_hash = 'block_hash',
  /** Unique date count */
  dates = 'dates',
  /** Unique ledger count */
  ledger = 'ledger',
  /** Unique address of the receiver */
  receiver = 'receiver',
  /** Unique address of the sender */
  sender = 'sender',
  /** Unique smart contract address */
  smart_contract_address = 'smart_contract_address',
  /** Unique time */
  times = 'times'
}

/** Blocks in Harmony blockchain */
export type HarmonyBlocks = {
  __typename?: 'HarmonyBlocks';
  any?: Maybe<Scalars['String']>;
  /** Transaction hash */
  blockHash?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Difficulty */
  difficulty?: Maybe<Scalars['String']>;
  /** Epoch */
  epoch?: Maybe<Scalars['BigInt']>;
  /** The “extra data” field of this block */
  extraData?: Maybe<Scalars['String']>;
  /** Gas limit */
  gasLimit?: Maybe<Scalars['BigInt']>;
  /** Gas used */
  gasUsed?: Maybe<Scalars['String']>;
  /** Hash of the block where this transaction was in */
  ledger?: Maybe<Scalars['BigInt']>;
  /** The bloom filter for the logs of the block. null when its pending block */
  logsBloom?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Transaction hash */
  miner?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Mix Hash */
  mixHash?: Maybe<Scalars['String']>;
  /** Nonce */
  nonce?: Maybe<Scalars['BigInt']>;
  /** Parent hash */
  parentHash?: Maybe<Scalars['String']>;
  /** Receipts Root */
  receiptsRoot?: Maybe<Scalars['String']>;
  /** ShardID */
  shardId?: Maybe<Scalars['BigInt']>;
  /** Integer the size of this block in bytes */
  size?: Maybe<Scalars['BigInt']>;
  /** Staking Transaction Count */
  stakingTransactionsCount?: Maybe<Scalars['BigInt']>;
  /** The root of the final state trie of the block */
  stateRoot?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Transaction Count */
  transactionCount?: Maybe<Scalars['BigInt']>;
  /** The root of the transaction trie of the block */
  transactionsRoot?: Maybe<Scalars['String']>;
  /** Count of ucles hashes */
  unclesCount?: Maybe<Scalars['BigInt']>;
  /** View ID */
  viewId?: Maybe<Scalars['String']>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksanyArgs = {
  of: HarmonyBlocksMeasureable;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksblockHashArgs = {
  blockHash?: InputMaybe<HashSelector>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlockscountArgs = {
  uniq?: InputMaybe<HarmonyBlocksUniq>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlockscountBigIntArgs = {
  uniq?: InputMaybe<HarmonyBlocksUniq>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksmaximumArgs = {
  get?: InputMaybe<HarmonyBlocksMeasureable>;
  of: HarmonyBlocksMeasureable;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksminerArgs = {
  miner?: InputMaybe<HashSelector>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksminimumArgs = {
  get?: InputMaybe<HarmonyBlocksMeasureable>;
  of: HarmonyBlocksMeasureable;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksparentHashArgs = {
  parentHash?: InputMaybe<HashSelector>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlockssizeArgs = {
  size?: InputMaybe<HashSelector>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksstakingTransactionsCountArgs = {
  stakingTransactionsCount?: InputMaybe<HashSelector>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlockstransactionCountArgs = {
  transactionCount?: InputMaybe<HashSelector>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksunclesCountArgs = {
  unclesCount?: InputMaybe<HashSelector>;
};


/** Blocks in Harmony blockchain */
export type HarmonyBlocksviewIdArgs = {
  viewId?: InputMaybe<HashSelector>;
};

export type HarmonyBlocksFilter = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  miner?: InputMaybe<HashSelector>;
  perentHash?: InputMaybe<HashSelector>;
  stakingTransactionsCount?: InputMaybe<HashSelector>;
  transactionCount?: InputMaybe<HashSelector>;
  unclesCount?: InputMaybe<HashSelector>;
  viewId?: InputMaybe<HashSelector>;
};

export enum HarmonyBlocksMeasureable {
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Gas limit */
  gas_limit = 'gas_limit',
  /** Gas Used */
  gas_used = 'gas_used',
  /** Parent hash */
  paret_hash = 'paret_hash',
  /** Time */
  time = 'time'
}

export enum HarmonyBlocksUniq {
  /** Unique block hash count */
  block_hash = 'block_hash',
  /** Unique date count */
  dates = 'dates',
  /** Unique ledger count */
  ledger = 'ledger',
  /** Unique miner count */
  miner = 'miner',
  /** Unique mix hash count */
  mix_hash = 'mix_hash',
  /** Unique parent hash count */
  parent_hash = 'parent_hash',
  /** Unique receipts root count */
  receipts_root = 'receipts_root',
  /** Unique state root count */
  state_root = 'state_root',
  /** Unique time */
  times = 'times',
  /** Unique transactions root count */
  transactions_root = 'transactions_root'
}

export enum HarmonyEventsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Smart Contract Method Signature */
  signature = 'signature',
  /** Smart Contract Method Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Method Name */
  signature_name = 'signature_name',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Action From */
  tx_from = 'tx_from',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Action To */
  tx_to = 'tx_to'
}

export enum HarmonyNetwork {
  /** Harmony Mainnat */
  harmony = 'harmony',
  /** Harmony Testnet */
  harmony_testnet = 'harmony_testnet'
}

/** Smart Contract Calls */
export type HarmonySmartContractCalls = {
  __typename?: 'HarmonySmartContractCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callPath?: Maybe<Scalars['String']>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** External call executed explicitly by caller. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  gas?: Maybe<Scalars['Int']>;
  /** Gas unit price */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Nonce */
  nonce?: Maybe<Scalars['BigInt']>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Transaction Sender */
  txSender?: Maybe<Address>;
  /** Action to address */
  txTo?: Maybe<Address>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsamountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsanyArgs = {
  of: HarmonySmartContractCallsMeasureable;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallscountArgs = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<HarmonySmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<HarmonySmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsgasArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsgasPriceArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsgasValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsmaximumArgs = {
  get?: InputMaybe<HarmonySmartContractCallsMeasureable>;
  of: HarmonySmartContractCallsMeasureable;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsminimumArgs = {
  get?: InputMaybe<HarmonySmartContractCallsMeasureable>;
  of: HarmonySmartContractCallsMeasureable;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallsnonceArgs = {
  nonce?: InputMaybe<IntegerSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallssmartContractMethodArgs = {
  smartContractMethod?: InputMaybe<MethodSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallssuccessArgs = {
  success?: InputMaybe<Array<Scalars['Boolean']>>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallstxFromArgs = {
  txFrom?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallstxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallstxSenderArgs = {
  txSender?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type HarmonySmartContractCallstxToArgs = {
  txTo?: InputMaybe<AddressSelector>;
};

export type HarmonySmartContractCallsFilter = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

export enum HarmonySmartContractCallsMeasureable {
  /** Block */
  block = 'block',
  /** Call depth */
  call_depth = 'call_depth',
  /** Date */
  date = 'date',
  /** Smart Contract Method Signature */
  signature = 'signature',
  /** Smart Contract Method Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Method Name */
  signature_name = 'signature_name',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Action From */
  tx_from = 'tx_from',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Action To */
  tx_to = 'tx_to'
}

export enum HarmonySmartContractCallsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique smart contract methods count */
  smart_contract_methods = 'smart_contract_methods',
  /** Unique smart contracts count */
  smart_contracts = 'smart_contracts',
  /** Unique transaction senders */
  tx_from = 'tx_from',
  /** Unique callers count */
  tx_to = 'tx_to',
  /** Unique transactions count */
  txs = 'txs'
}

/** Smart Contract Events */
export type HarmonySmartContractEvents = {
  __typename?: 'HarmonySmartContractEvents';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Transaction hash where transfer happened */
  epoch?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The number of transactions made by the sender prior to this one. */
  nonce?: Maybe<Scalars['BigInt']>;
  /** Contract method invoked */
  smartContractEvent?: Maybe<Event>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventsanyArgs = {
  of: HarmonyEventsMeasureable;
};


/** Smart Contract Events */
export type HarmonySmartContractEventsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventscountArgs = {
  uniq?: InputMaybe<SmartContractEventsUniq>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventscountBigIntArgs = {
  uniq?: InputMaybe<SmartContractEventsUniq>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventsepochArgs = {
  epoch?: InputMaybe<IntegerSelector>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventsmaximumArgs = {
  get?: InputMaybe<HarmonyEventsMeasureable>;
  of: HarmonyEventsMeasureable;
};


/** Smart Contract Events */
export type HarmonySmartContractEventsminimumArgs = {
  get?: InputMaybe<HarmonyEventsMeasureable>;
  of: HarmonyEventsMeasureable;
};


/** Smart Contract Events */
export type HarmonySmartContractEventsnonceArgs = {
  nonce?: InputMaybe<IntegerSelector>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventssmartContractEventArgs = {
  smartContractEvent?: InputMaybe<EventSelector>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventstxFromArgs = {
  txFrom?: InputMaybe<AddressSelector>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventstxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Smart Contract Events */
export type HarmonySmartContractEventstxToArgs = {
  txTo?: InputMaybe<AddressSelector>;
};

export type HarmonySmartContractEventsFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractEvent?: InputMaybe<EventSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactions = {
  __typename?: 'HarmonyStakingTransactions';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Data */
  data?: Maybe<Scalars['String']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Delegator Address */
  delegatorAddress?: Maybe<Scalars['String']>;
  /** Epoch */
  epoch?: Maybe<Scalars['BigInt']>;
  /** Gas provided by the sender */
  gas?: Maybe<Scalars['BigInt']>;
  /** Gas price provided by the sender */
  gasPrice?: Maybe<Scalars['String']>;
  /** Hash of the block where this transaction was in */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The number of transactions made by the sender prior to this one */
  nonce?: Maybe<Scalars['BigInt']>;
  /** ShardID */
  shardId?: Maybe<Scalars['BigInt']>;
  /** Status */
  status?: Maybe<Scalars['Boolean']>;
  /** Successful of not */
  success?: Maybe<Scalars['Boolean']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Transaction hash */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transaction type */
  transactionType?: Maybe<Scalars['String']>;
  /** Validator Address */
  validatorAddress?: Maybe<Scalars['String']>;
  /** Value transferred in ATTO */
  value?: Maybe<Scalars['String']>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionsanyArgs = {
  of: HarmonyStakingTransactionsMeasureable;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionscountArgs = {
  uniq?: InputMaybe<HarmonyStakingTransactionsUniq>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionscountBigIntArgs = {
  uniq?: InputMaybe<HarmonyStakingTransactionsUniq>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionsdelegatorAddressArgs = {
  delegatorAddress?: InputMaybe<HashSelector>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionsledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionsmaximumArgs = {
  get?: InputMaybe<HarmonyStakingTransactionsMeasureable>;
  of: HarmonyStakingTransactionsMeasureable;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionsminimumArgs = {
  get?: InputMaybe<HarmonyStakingTransactionsMeasureable>;
  of: HarmonyStakingTransactionsMeasureable;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionsstatusArgs = {
  status?: InputMaybe<Scalars['Boolean']>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionstransactionTypeArgs = {
  transactionType?: InputMaybe<StakingTransactionsTypeSelector>;
};


/** StakingTransactions in Harmony blockchain */
export type HarmonyStakingTransactionsvalidatorAddressArgs = {
  validatorAddress?: InputMaybe<HashSelector>;
};

export type HarmonyStakingTransactionsFilter = {
  date?: InputMaybe<DateSelector>;
  delegatorAddress?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  status?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<StakingTransactionsTypeSelector>;
  validatorAddress?: InputMaybe<HashSelector>;
};

export enum HarmonyStakingTransactionsMeasureable {
  /** Date */
  date = 'date',
  /** Deligator Address */
  deligator_address = 'deligator_address',
  /** Gas provided by the sender */
  gas = 'gas',
  /** Gas price provided by the sender */
  gasPrice = 'gasPrice',
  /** Gas price provided by the sender */
  gas_price = 'gas_price',
  /** Time */
  time = 'time',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Validator Address */
  validator_address = 'validator_address',
  /** Value transferred in ATTO */
  value = 'value'
}

export enum HarmonyStakingTransactionsUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique delegator validator */
  delegator_address = 'delegator_address',
  /** Unique block */
  ledger = 'ledger',
  /** Unique time */
  times = 'times',
  /** Unique address validator */
  validator_address = 'validator_address'
}

/** Transactions in Harmony blockchain */
export type HarmonyTransactions = {
  __typename?: 'HarmonyTransactions';
  any?: Maybe<Scalars['String']>;
  /** Hash of the block */
  blockHash?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Transaction creates */
  creates?: Maybe<Scalars['String']>;
  /** Data */
  data?: Maybe<Scalars['String']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Epoch */
  epoch?: Maybe<Scalars['BigInt']>;
  /** Gas provided by the sender */
  gas?: Maybe<Scalars['BigInt']>;
  /** Gas price provided by the sender */
  gasPrice?: Maybe<Scalars['String']>;
  /** Gas value provided by the sender */
  gasValue?: Maybe<Scalars['String']>;
  /** Hash of the block where this transaction was in */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The number of transactions made by the sender prior to this one */
  nonce?: Maybe<Scalars['BigInt']>;
  /** Address of the reciever */
  reciever?: Maybe<Scalars['String']>;
  /** Address of the sender */
  sender?: Maybe<Scalars['String']>;
  /** ShardID */
  shardId?: Maybe<Scalars['BigInt']>;
  /** Status */
  status?: Maybe<Scalars['Boolean']>;
  /** Successful of not */
  success?: Maybe<Scalars['Boolean']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Integer of the transactions index position in the block. null when its pending. */
  transactionHash?: Maybe<Scalars['String']>;
  /** Index of the transaction */
  transactionIndex?: Maybe<Scalars['Int']>;
  /** Value transferred in ATTO */
  value?: Maybe<Scalars['String']>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionsanyArgs = {
  of: HarmonyTransactionsMeasureable;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionsblockHashArgs = {
  blockHash?: InputMaybe<HashSelector>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionscountArgs = {
  uniq?: InputMaybe<HarmonyTransactionsUniq>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionscountBigIntArgs = {
  uniq?: InputMaybe<HarmonyTransactionsUniq>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionscreatesArgs = {
  creates?: InputMaybe<HashSelector>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionsledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionsmaximumArgs = {
  get?: InputMaybe<HarmonyTransactionsMeasureable>;
  of: HarmonyTransactionsMeasureable;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionsminimumArgs = {
  get?: InputMaybe<HarmonyTransactionsMeasureable>;
  of: HarmonyTransactionsMeasureable;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionsrecieverArgs = {
  reciever?: InputMaybe<HashSelector>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionssenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionsstatusArgs = {
  status?: InputMaybe<Scalars['Boolean']>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transactions in Harmony blockchain */
export type HarmonyTransactionstransactionIndexArgs = {
  transactionIndex?: InputMaybe<HashSelector>;
};

export type HarmonyTransactionsFilter = {
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  reciever?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  status?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};

export enum HarmonyTransactionsMeasureable {
  /** Date */
  date = 'date',
  /** Gas provided by the sender */
  gas = 'gas',
  /** Gas price provided by the sender */
  gasPrice = 'gasPrice',
  /** Gas value provided by the sender */
  gasValue = 'gasValue',
  /** Gas price provided by the sender */
  gas_price = 'gas_price',
  /** Deligator Address */
  reciever = 'reciever',
  /** Validator Address */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Value transferred in ATTO */
  value = 'value'
}

export enum HarmonyTransactionsUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique block */
  ledger = 'ledger',
  /** Unique reciever */
  reciever = 'reciever',
  /** Unique sender */
  sender = 'sender',
  /** Unique time */
  times = 'times'
}

/** Transfers in Harmony blockchain */
export type HarmonyTransfers = {
  __typename?: 'HarmonyTransfers';
  any?: Maybe<Scalars['String']>;
  /** Hash of the block */
  blockHash?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Data */
  data?: Maybe<Scalars['String']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Epoch */
  epoch?: Maybe<Scalars['BigInt']>;
  /** External */
  external?: Maybe<Scalars['Boolean']>;
  /** Gas provided by the sender */
  gas?: Maybe<Scalars['BigInt']>;
  /** Gas price provided by the sender */
  gasPrice?: Maybe<Scalars['String']>;
  /** Gas value provided by the sender */
  gasValue?: Maybe<Scalars['String']>;
  /** Hash of the block where this transaction was in */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The number of transactions made by the sender prior to this one */
  nonce?: Maybe<Scalars['BigInt']>;
  /** Address of the sender */
  sender?: Maybe<Scalars['String']>;
  /** ShardID */
  shardId?: Maybe<Scalars['BigInt']>;
  /** Status */
  status?: Maybe<Scalars['Boolean']>;
  /** Successful of not */
  success?: Maybe<Scalars['Boolean']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Integer of the transactions index position in the block. null when its pending. */
  transactionHash?: Maybe<Scalars['String']>;
  /** Index of the transaction */
  transactionIndex?: Maybe<Scalars['Int']>;
  /** Address of the payer */
  transferFrom?: Maybe<Scalars['String']>;
  /** Address of the receiver */
  transferTo?: Maybe<Scalars['String']>;
  /** Value transferred in ATTO */
  value?: Maybe<Scalars['String']>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransfersanyArgs = {
  of: HarmonyTransfersMeasureable;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransfersblockHashArgs = {
  blockHash?: InputMaybe<HashSelector>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransferscountArgs = {
  uniq?: InputMaybe<HarmonyTransfersUniq>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransferscountBigIntArgs = {
  uniq?: InputMaybe<HarmonyTransfersUniq>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransfersexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransfersledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransfersmaximumArgs = {
  get?: InputMaybe<HarmonyTransfersMeasureable>;
  of: HarmonyTransfersMeasureable;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransfersminimumArgs = {
  get?: InputMaybe<HarmonyTransfersMeasureable>;
  of: HarmonyTransfersMeasureable;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransferssenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransfersstatusArgs = {
  status?: InputMaybe<Scalars['Boolean']>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransferssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransferstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransferstransactionIndexArgs = {
  transactionIndex?: InputMaybe<HashSelector>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransferstransferFromArgs = {
  transferFrom?: InputMaybe<HashSelector>;
};


/** Transfers in Harmony blockchain */
export type HarmonyTransferstransferToArgs = {
  transferTo?: InputMaybe<HashSelector>;
};

export type HarmonyTransfersFilter = {
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  sender?: InputMaybe<HashSelector>;
  status?: InputMaybe<Scalars['Boolean']>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};

export enum HarmonyTransfersMeasureable {
  /** Date */
  date = 'date',
  /** Gas provided by the sender */
  gas = 'gas',
  /** Gas price provided by the sender */
  gasPrice = 'gasPrice',
  /** Gas value provided by the sender */
  gasValue = 'gasValue',
  /** Gas price provided by the sender */
  gas_price = 'gas_price',
  /** Validator Address */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Value transferred in ATTO */
  value = 'value'
}

export enum HarmonyTransfersUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique block */
  ledger = 'ledger',
  /** Unique sender */
  sender = 'sender',
  /** Unique time */
  times = 'times',
  /** Unique transfer from */
  transfer_from = 'transfer_from',
  /** Unique transfer to */
  transfer_to = 'transfer_to'
}

/** Select by hash */
export type HashSelector = {
  /** Hash in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Hash is */
  is?: InputMaybe<Scalars['String']>;
  /** Hash not */
  not?: InputMaybe<Scalars['String']>;
  /** Hash not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Hedera Chain */
export type Hedera = {
  __typename?: 'Hedera';
  /** Blockchain Arguments */
  arguments?: Maybe<Array<HederaArgument>>;
  /** Blockhain Calls */
  calls?: Maybe<Array<HederaCall>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<HederaCoinpath>>;
  /** Blockhain Inputs */
  inputs?: Maybe<Array<HederaInput>>;
  /** Blockhain Messages */
  messages?: Maybe<Array<HederaMessage>>;
  /** Blockchain Outputs */
  outputs?: Maybe<Array<HederaOutput>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<HederaTransaction>>;
};


/** Hedera Chain */
export type HederaargumentsArgs = {
  any?: InputMaybe<Array<HederaArgumentFilter>>;
  date?: InputMaybe<DateSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Hedera Chain */
export type HederacallsArgs = {
  any?: InputMaybe<Array<HederaCallFilter>>;
  callInput?: InputMaybe<HashSelector>;
  callResult?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Hedera Chain */
export type HederacoinpathArgs = {
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Hedera Chain */
export type HederainputsArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<HederaInputFilter>>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Hedera Chain */
export type HederamessagesArgs = {
  any?: InputMaybe<Array<HederaMessageFilter>>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionRunningHash?: InputMaybe<HashSelector>;
};


/** Hedera Chain */
export type HederaoutputsArgs = {
  any?: InputMaybe<Array<HederaOutputFilter>>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Hedera Chain */
export type HederatransactionsArgs = {
  any?: InputMaybe<Array<HederaTransactionFilter>>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};

/** Arguments in Hedera blockchain */
export type HederaArgument = {
  __typename?: 'HederaArgument';
  any?: Maybe<Scalars['String']>;
  /** Argument type */
  argtype?: Maybe<Scalars['String']>;
  /** Argument */
  argument?: Maybe<Scalars['String']>;
  chargedTxFee?: Maybe<Scalars['BigInt']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Smart contract */
  smartContractEntity?: Maybe<Account>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
  /** Value */
  value?: Maybe<Scalars['String']>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentanyArgs = {
  of: HederaArgumentsMeasureable;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentcountArgs = {
  uniq?: InputMaybe<HederaArgumentsUniq>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentcountBigIntArgs = {
  uniq?: InputMaybe<HederaArgumentsUniq>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentinitialBalanceArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentmaxFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentmaximumArgs = {
  get?: InputMaybe<HederaArgumentsMeasureable>;
  of: HederaArgumentsMeasureable;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentminimumArgs = {
  get?: InputMaybe<HederaArgumentsMeasureable>;
  of: HederaArgumentsMeasureable;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentresultArgs = {
  result?: InputMaybe<HashSelector>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentsuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumenttransactionFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumenttransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Arguments in Hedera blockchain */
export type HederaArgumentvalidStartArgs = {
  nanoseconds?: InputMaybe<Scalars['BigInt']>;
  time?: InputMaybe<DateTimeSelector>;
};

export type HederaArgumentFilter = {
  date?: InputMaybe<DateSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};

export enum HederaArgumentsMeasureable {
  /** Date */
  date = 'date',
  /** Max Fee */
  max_fee = 'max_fee',
  /** Time */
  time = 'time',
  /** Charged Fee */
  transaction_fee = 'transaction_fee',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Valid duration */
  valid_duration = 'valid_duration',
  /** Valid start */
  valid_start = 'valid_start'
}

export enum HederaArgumentsUniq {
  /** Unique consensus time */
  consensus_times = 'consensus_times',
  /** Unique date count */
  dates = 'dates',
  /** Unique initial balance */
  initial_balance = 'initial_balance',
  /** Unique node account */
  node_account = 'node_account',
  /** Unique payer account */
  payer_account = 'payer_account',
  /** Unique node account */
  smart_contract_entity = 'smart_contract_entity',
  /** Unique time */
  times = 'times'
}

/** Calls in Hedera blockchain */
export type HederaCall = {
  __typename?: 'HederaCall';
  any?: Maybe<Scalars['String']>;
  /** Call input */
  callInput?: Maybe<Scalars['String']>;
  /** Call input */
  callResult?: Maybe<Scalars['String']>;
  chargedTxFee?: Maybe<Scalars['BigInt']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  gas?: Maybe<Scalars['Int']>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Smart contract */
  smartContractEntity?: Maybe<Account>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
};


/** Calls in Hedera blockchain */
export type HederaCallanyArgs = {
  of: HederaCallsMeasureable;
};


/** Calls in Hedera blockchain */
export type HederaCallcallInputArgs = {
  callInput?: InputMaybe<HashSelector>;
};


/** Calls in Hedera blockchain */
export type HederaCallcallResultArgs = {
  callResult?: InputMaybe<HashSelector>;
};


/** Calls in Hedera blockchain */
export type HederaCallcountArgs = {
  uniq?: InputMaybe<HederaCallsUniq>;
};


/** Calls in Hedera blockchain */
export type HederaCallcountBigIntArgs = {
  uniq?: InputMaybe<HederaCallsUniq>;
};


/** Calls in Hedera blockchain */
export type HederaCallgasArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  callInput?: InputMaybe<HashSelector>;
  callResult?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Calls in Hedera blockchain */
export type HederaCallinitialBalanceArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Calls in Hedera blockchain */
export type HederaCallmaxFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Calls in Hedera blockchain */
export type HederaCallmaximumArgs = {
  get?: InputMaybe<HederaCallsMeasureable>;
  of: HederaCallsMeasureable;
};


/** Calls in Hedera blockchain */
export type HederaCallminimumArgs = {
  get?: InputMaybe<HederaCallsMeasureable>;
  of: HederaCallsMeasureable;
};


/** Calls in Hedera blockchain */
export type HederaCallresultArgs = {
  result?: InputMaybe<HashSelector>;
};


/** Calls in Hedera blockchain */
export type HederaCallsuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Calls in Hedera blockchain */
export type HederaCalltransactionFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Calls in Hedera blockchain */
export type HederaCalltransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Calls in Hedera blockchain */
export type HederaCallvalidStartArgs = {
  nanoseconds?: InputMaybe<Scalars['BigInt']>;
  time?: InputMaybe<DateTimeSelector>;
};

export type HederaCallFilter = {
  callInput?: InputMaybe<HashSelector>;
  callResult?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  smartContractEntity?: InputMaybe<StringSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};

export enum HederaCallsMeasureable {
  /** Date */
  date = 'date',
  /** Max Fee */
  max_fee = 'max_fee',
  /** Time */
  time = 'time',
  /** Charged Fee */
  transaction_fee = 'transaction_fee',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Valid duration */
  valid_duration = 'valid_duration',
  /** Valid start */
  valid_start = 'valid_start'
}

export enum HederaCallsUniq {
  /** Unique consensus time */
  consensus_times = 'consensus_times',
  /** Unique date count */
  dates = 'dates',
  /** Unique initial balance */
  initial_balance = 'initial_balance',
  /** Unique node account */
  node_account = 'node_account',
  /** Unique payer account */
  payer_account = 'payer_account',
  /** Unique node account */
  smart_contract_entity = 'smart_contract_entity',
  /** Unique time */
  times = 'times'
}

/** Coinpath */
export type HederaCoinpath = {
  __typename?: 'HederaCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Attributes of transaction included in Coinpath result */
  transactions?: Maybe<Array<CoinpathEntry>>;
};


/** Coinpath */
export type HederaCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type HederaCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type HederaCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type HederaCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

/** Currency selector in Hedera blockchain. */
export type HederaCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Inputs in Hedera blockchain */
export type HederaInput = {
  __typename?: 'HederaInput';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  /** Transfer Account */
  transferEntity?: Maybe<Account>;
  validStart?: Maybe<Timestamp>;
};


/** Inputs in Hedera blockchain */
export type HederaInputamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Inputs in Hedera blockchain */
export type HederaInputanyArgs = {
  of: HederaInputMeasureable;
};


/** Inputs in Hedera blockchain */
export type HederaInputcountArgs = {
  uniq?: InputMaybe<HederaInputsUniq>;
};


/** Inputs in Hedera blockchain */
export type HederaInputcountBigIntArgs = {
  uniq?: InputMaybe<HederaInputsUniq>;
};


/** Inputs in Hedera blockchain */
export type HederaInputcurrencyArgs = {
  currency?: InputMaybe<HederaCurrencySelector>;
};


/** Inputs in Hedera blockchain */
export type HederaInputentityArgs = {
  entityType?: InputMaybe<EntityTypeSelector>;
};


/** Inputs in Hedera blockchain */
export type HederaInputinitialBalanceArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Inputs in Hedera blockchain */
export type HederaInputmaxFeeArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Inputs in Hedera blockchain */
export type HederaInputmaximumArgs = {
  get?: InputMaybe<HederaInputMeasureable>;
  of: HederaInputMeasureable;
};


/** Inputs in Hedera blockchain */
export type HederaInputminimumArgs = {
  get?: InputMaybe<HederaInputMeasureable>;
  of: HederaInputMeasureable;
};


/** Inputs in Hedera blockchain */
export type HederaInputresultArgs = {
  result?: InputMaybe<HashSelector>;
};


/** Inputs in Hedera blockchain */
export type HederaInputsuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Inputs in Hedera blockchain */
export type HederaInputtransactionFeeArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Inputs in Hedera blockchain */
export type HederaInputtransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Inputs in Hedera blockchain */
export type HederaInputvalidStartArgs = {
  nanoseconds?: InputMaybe<Scalars['BigInt']>;
  time?: InputMaybe<DateTimeSelector>;
};

export type HederaInputFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};

export enum HederaInputMeasureable {
  /** Amount */
  amount = 'amount',
  /** Date */
  date = 'date',
  /** Max Fee */
  max_fee = 'max_fee',
  /** Time */
  time = 'time',
  /** Charged Fee */
  transaction_fee = 'transaction_fee',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Valid duration */
  valid_duration = 'valid_duration',
  /** Valid start */
  valid_start = 'valid_start'
}

export enum HederaInputsUniq {
  /** Unique consensus time */
  consensus_times = 'consensus_times',
  /** Unique date count */
  dates = 'dates',
  /** Unique entity id */
  entity_id = 'entity_id',
  /** Unique entity type */
  entity_type = 'entity_type',
  /** Unique initial balance */
  initial_balance = 'initial_balance',
  /** Unique node account */
  node_account = 'node_account',
  /** Unique payer account */
  payer_account = 'payer_account',
  /** Unique time */
  times = 'times'
}

/** Messages in Hedera blockchain */
export type HederaMessage = {
  __typename?: 'HederaMessage';
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar date time */
  time?: Maybe<DateTime>;
  /** Transaction running hash */
  topicRunningHash?: Maybe<Scalars['String']>;
  /** Transaction running hash */
  topicSequenceNumber?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
};


/** Messages in Hedera blockchain */
export type HederaMessageanyArgs = {
  of: HederaMessageMeasureable;
};


/** Messages in Hedera blockchain */
export type HederaMessagecountArgs = {
  uniq?: InputMaybe<HederaMessagesUniq>;
};


/** Messages in Hedera blockchain */
export type HederaMessagecountBigIntArgs = {
  uniq?: InputMaybe<HederaMessagesUniq>;
};


/** Messages in Hedera blockchain */
export type HederaMessageentityArgs = {
  entityType?: InputMaybe<EntityTypeSelector>;
};


/** Messages in Hedera blockchain */
export type HederaMessageinitialBalanceArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionRunningHash?: InputMaybe<HashSelector>;
};


/** Messages in Hedera blockchain */
export type HederaMessagemaxFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionRunningHash?: InputMaybe<HashSelector>;
};


/** Messages in Hedera blockchain */
export type HederaMessagemaximumArgs = {
  get?: InputMaybe<HederaMessageMeasureable>;
  of: HederaMessageMeasureable;
};


/** Messages in Hedera blockchain */
export type HederaMessageminimumArgs = {
  get?: InputMaybe<HederaMessageMeasureable>;
  of: HederaMessageMeasureable;
};


/** Messages in Hedera blockchain */
export type HederaMessageresultArgs = {
  result?: InputMaybe<HashSelector>;
};


/** Messages in Hedera blockchain */
export type HederaMessagesuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Messages in Hedera blockchain */
export type HederaMessagetopicRunningHashArgs = {
  topicRunningHash?: InputMaybe<StringSelector>;
};


/** Messages in Hedera blockchain */
export type HederaMessagetopicSequenceNumberArgs = {
  topicSequenceNumber?: InputMaybe<HashSelector>;
};


/** Messages in Hedera blockchain */
export type HederaMessagetransactionFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionRunningHash?: InputMaybe<HashSelector>;
};


/** Messages in Hedera blockchain */
export type HederaMessagetransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Messages in Hedera blockchain */
export type HederaMessagevalidStartArgs = {
  nanoseconds?: InputMaybe<Scalars['BigInt']>;
  time?: InputMaybe<DateTimeSelector>;
};

export type HederaMessageFilter = {
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionRunningHash?: InputMaybe<HashSelector>;
};

export enum HederaMessageMeasureable {
  /** Date */
  date = 'date',
  /** Max Fee */
  max_fee = 'max_fee',
  /** Time */
  time = 'time',
  /** Charged Fee */
  transaction_fee = 'transaction_fee',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Valid duration */
  valid_duration = 'valid_duration',
  /** Valid start */
  valid_start = 'valid_start'
}

export enum HederaMessagesUniq {
  /** Unique consensus time */
  consensus_times = 'consensus_times',
  /** Unique date count */
  dates = 'dates',
  /** Unique entity id */
  entity_id = 'entity_id',
  /** Unique entity type */
  entity_type = 'entity_type',
  /** Unique initial balance */
  initial_balance = 'initial_balance',
  /** Unique node account */
  node_account = 'node_account',
  /** Unique payer account */
  payer_account = 'payer_account',
  /** Unique time */
  times = 'times'
}

export enum HederaNetwork {
  /** The Hedera mainnet */
  hedera = 'hedera',
  /** The Hedera testnets */
  hedera_testnets = 'hedera_testnets'
}

/** Outputs in Hedera blockchain */
export type HederaOutput = {
  __typename?: 'HederaOutput';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  /** Transfer Account */
  transferEntity?: Maybe<Account>;
  validStart?: Maybe<Timestamp>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputanyArgs = {
  of: HederaOutputMeasureable;
};


/** Outputs in Hedera blockchain */
export type HederaOutputcountArgs = {
  uniq?: InputMaybe<HederaOutputUniq>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputcountBigIntArgs = {
  uniq?: InputMaybe<HederaOutputUniq>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputcurrencyArgs = {
  currency?: InputMaybe<HederaCurrencySelector>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputentityArgs = {
  entityType?: InputMaybe<EntityTypeSelector>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputinitialBalanceArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputmaxFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputmaximumArgs = {
  get?: InputMaybe<HederaOutputMeasureable>;
  of: HederaOutputMeasureable;
};


/** Outputs in Hedera blockchain */
export type HederaOutputminimumArgs = {
  get?: InputMaybe<HederaOutputMeasureable>;
  of: HederaOutputMeasureable;
};


/** Outputs in Hedera blockchain */
export type HederaOutputresultArgs = {
  result?: InputMaybe<HashSelector>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputsuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputtransactionFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputtransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Outputs in Hedera blockchain */
export type HederaOutputvalidStartArgs = {
  nanoseconds?: InputMaybe<Scalars['BigInt']>;
  time?: InputMaybe<DateTimeSelector>;
};

export type HederaOutputFilter = {
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
  transferEntity?: InputMaybe<StringSelector>;
};

export enum HederaOutputMeasureable {
  /** Amount */
  amount = 'amount',
  /** Date */
  date = 'date',
  /** Max Fee */
  max_fee = 'max_fee',
  /** Time */
  time = 'time',
  /** Charged Fee */
  transaction_fee = 'transaction_fee',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Valid duration */
  valid_duration = 'valid_duration',
  /** Valid start */
  valid_start = 'valid_start'
}

export enum HederaOutputUniq {
  /** Unique consensus time */
  consensus_times = 'consensus_times',
  /** Unique date count */
  dates = 'dates',
  /** Unique entity id */
  entity_id = 'entity_id',
  /** Unique entity type */
  entity_type = 'entity_type',
  /** Unique initial balance */
  initial_balance = 'initial_balance',
  /** Unique node account */
  node_account = 'node_account',
  /** Unique payer account */
  payer_account = 'payer_account',
  /** Unique time */
  times = 'times',
  /** Unique Transfer entity */
  transfer_entity = 'transfer_entity'
}

/** Transactions in Hedera blockchain */
export type HederaTransaction = {
  __typename?: 'HederaTransaction';
  any?: Maybe<Scalars['String']>;
  consensusTimestamp?: Maybe<Timestamp>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Entity */
  entity?: Maybe<Entity>;
  /** Currency of transfer */
  feeCurrency?: Maybe<Currency>;
  initialBalance?: Maybe<Scalars['Float']>;
  maxFee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /**
   * Used to reference a specific
   *       account of the node the transaction is being sent to
   */
  nodeAccount?: Maybe<Account>;
  /**
   * Used to
   *       reference a specific account in transactions
   */
  payerAccount?: Maybe<Account>;
  /** Transaction result */
  result?: Maybe<TransactionResult>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Calendar time */
  time?: Maybe<DateTime>;
  transactionBytes?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash where transfer happened */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transaction Type */
  transactionType?: Maybe<Scalars['String']>;
  transactionValidDurationInSec?: Maybe<Scalars['Int']>;
  validStart?: Maybe<Timestamp>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactionanyArgs = {
  of: HederaTransactionMeasureable;
};


/** Transactions in Hedera blockchain */
export type HederaTransactioncountArgs = {
  uniq?: InputMaybe<HederaTransactionsUniq>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactioncountBigIntArgs = {
  uniq?: InputMaybe<HederaTransactionsUniq>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactionentityArgs = {
  entityType?: InputMaybe<EntityTypeSelector>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactioninitialBalanceArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactionmaxFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactionmaximumArgs = {
  get?: InputMaybe<HederaTransactionMeasureable>;
  of: HederaTransactionMeasureable;
};


/** Transactions in Hedera blockchain */
export type HederaTransactionminimumArgs = {
  get?: InputMaybe<HederaTransactionMeasureable>;
  of: HederaTransactionMeasureable;
};


/** Transactions in Hedera blockchain */
export type HederaTransactionresultArgs = {
  result?: InputMaybe<HashSelector>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactionsuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactiontransactionFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactiontransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transactions in Hedera blockchain */
export type HederaTransactionvalidStartArgs = {
  nanoseconds?: InputMaybe<Scalars['BigInt']>;
  time?: InputMaybe<DateTimeSelector>;
};

export type HederaTransactionFilter = {
  date?: InputMaybe<DateSelector>;
  entityType?: InputMaybe<EntityTypeSelector>;
  nodeAccount?: InputMaybe<StringSelector>;
  payerAccount?: InputMaybe<StringSelector>;
  result?: InputMaybe<HashSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  transactionHash?: InputMaybe<HashSelector>;
};

export enum HederaTransactionMeasureable {
  /** Date */
  date = 'date',
  /** Max Fee */
  max_fee = 'max_fee',
  /** Time */
  time = 'time',
  /** Charged Fee */
  transaction_fee = 'transaction_fee',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Valid duration */
  valid_duration = 'valid_duration',
  /** Valid start */
  valid_start = 'valid_start'
}

export enum HederaTransactionsUniq {
  /** Unique consensus time */
  consensus_times = 'consensus_times',
  /** Unique date count */
  dates = 'dates',
  /** Unique entity id */
  entity_id = 'entity_id',
  /** Unique entity type */
  entity_type = 'entity_type',
  /** Unique initial balance */
  initial_balance = 'initial_balance',
  /** Unique node account */
  node_account = 'node_account',
  /** Unique payer account */
  payer_account = 'payer_account',
  /** Unique time */
  times = 'times',
  /** Unique transaction type */
  transaction_type = 'transaction_type'
}

/** Input Script Type of UTXO transaction input */
export type InputScript = {
  __typename?: 'InputScript';
  /** Script annotation */
  annotation?: Maybe<Scalars['String']>;
  /** Long script pattern */
  pattern: Scalars['String'];
  /** Short script pattern */
  shortPattern: Scalars['String'];
  /** Simple script pattern */
  simplePattern: Scalars['String'];
  /** Script type */
  type?: Maybe<BitcoinInputScriptType>;
};

/** Solana Instruction */
export type Instruction = {
  __typename?: 'Instruction';
  action?: Maybe<Action>;
  callPath?: Maybe<Scalars['String']>;
  external?: Maybe<Scalars['Boolean']>;
  program?: Maybe<Program>;
};

/** Solana Instruction */
export type InstructionWithExternals = {
  __typename?: 'InstructionWithExternals';
  action?: Maybe<Action>;
  callPath?: Maybe<Scalars['String']>;
  external?: Maybe<Scalars['Boolean']>;
  externalAction?: Maybe<Action>;
  externalProgram?: Maybe<Program>;
  program?: Maybe<Program>;
};

/** Select by ID */
export type IntIdSelector = {
  /** ID in range */
  between?: InputMaybe<Array<Scalars['Int']>>;
  /** ID greater than */
  gt?: InputMaybe<Scalars['Int']>;
  /** ID greater or equal than */
  gteq?: InputMaybe<Scalars['Int']>;
  /** ID in the list */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** ID is */
  is?: InputMaybe<Scalars['Int']>;
  /** ID less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** ID less or equal than */
  lteq?: InputMaybe<Scalars['Int']>;
  /** ID not */
  not?: InputMaybe<Scalars['Int']>;
  /** ID not in the list */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** Select limited upper number */
export type IntegerLimitedSelector = {
  /** in range */
  between?: InputMaybe<Array<Scalars['Int']>>;
  /** in the list */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** is */
  is?: InputMaybe<Scalars['Int']>;
  /** less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** less or equal than */
  lteq?: InputMaybe<Scalars['Int']>;
};

/** Select by number */
export type IntegerSelector = {
  /** in range */
  between?: InputMaybe<Array<Scalars['Int']>>;
  /** greater than */
  gt?: InputMaybe<Scalars['Int']>;
  /** greater or equal than */
  gteq?: InputMaybe<Scalars['Int']>;
  /** in the list */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** is */
  is?: InputMaybe<Scalars['Int']>;
  /** less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** less or equal than */
  lteq?: InputMaybe<Scalars['Int']>;
  /** not */
  not?: InputMaybe<Scalars['Int']>;
  /** not in the list */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** Libra */
export type Libra = {
  __typename?: 'Libra';
  /** Libra Network Blocks */
  blocks?: Maybe<Array<LibraBlock>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<LibraCoinpath>>;
  /** Libra Network Currency Minting */
  mints?: Maybe<Array<LibraMints>>;
  /** Libra Network Transactions */
  transactions?: Maybe<Array<LibraTransactions>>;
  /** Libra Network Currency Transfers */
  transfers?: Maybe<Array<LibraTransfers>>;
};


/** Libra */
export type LibrablocksArgs = {
  any?: InputMaybe<Array<LibraBlockFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  metadata?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Libra */
export type LibracoinpathArgs = {
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Libra */
export type LibramintsArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<LibraMintFilter>>;
  block?: InputMaybe<BlockSelector>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  minter?: InputMaybe<AddressSelector>;
  options?: InputMaybe<QueryOptions>;
  time?: InputMaybe<DateTimeSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Libra */
export type LibratransactionsArgs = {
  any?: InputMaybe<Array<LibraTransactionFilter>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Libra */
export type LibratransfersArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<LibraTransferFilter>>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<AddressSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};

/** Block */
export type LibraBlock = {
  __typename?: 'LibraBlock';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  gasUsed?: Maybe<Scalars['Float']>;
  /** Block round in blockchain */
  height: Scalars['Int'];
  /** Key */
  key?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  /** Metadata */
  metadata?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Proposer */
  proposer?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of transaction for this block */
  version: Scalars['Int'];
  /** Version hash of transaction for this block */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
};


/** Block */
export type LibraBlockanyArgs = {
  of: LibraBlocksMeasureable;
};


/** Block */
export type LibraBlockcountArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  metadata?: InputMaybe<StringSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<LibraBlockUniq>;
  version?: InputMaybe<IntegerSelector>;
};


/** Block */
export type LibraBlockcountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  metadata?: InputMaybe<StringSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<LibraBlockUniq>;
  version?: InputMaybe<IntegerSelector>;
};


/** Block */
export type LibraBlockgasUsedArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  metadata?: InputMaybe<StringSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Block */
export type LibraBlockheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Block */
export type LibraBlockmaximumArgs = {
  get?: InputMaybe<LibraBlocksMeasureable>;
  of: LibraBlocksMeasureable;
};


/** Block */
export type LibraBlockmetadataArgs = {
  metadata?: InputMaybe<StringSelector>;
};


/** Block */
export type LibraBlockminimumArgs = {
  get?: InputMaybe<LibraBlocksMeasureable>;
  of: LibraBlocksMeasureable;
};


/** Block */
export type LibraBlockproposerArgs = {
  proposer?: InputMaybe<AddressSelector>;
};


/** Block */
export type LibraBlocktimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Block */
export type LibraBlockversionArgs = {
  version?: InputMaybe<IntegerSelector>;
};

export type LibraBlockFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  metadata?: InputMaybe<StringSelector>;
  proposer?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  version?: InputMaybe<IntegerSelector>;
};

export enum LibraBlockUniq {
  /** Unique date count */
  dates = 'dates',
  /** Proposer */
  proposer = 'proposer'
}

export enum LibraBlocksMeasureable {
  /** Block round */
  block = 'block',
  /** Date */
  date = 'date',
  /** Gas Used */
  gas_used = 'gas_used',
  /** Proposer */
  proposer = 'proposer',
  /** Time */
  time = 'time',
  /** Version */
  version = 'version'
}

/** Coinpath */
export type LibraCoinpath = {
  __typename?: 'LibraCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<Address>;
  /** Sender address */
  sender?: Maybe<Address>;
  /** Transaction of transfer happened */
  transaction?: Maybe<LibraTransactionValue>;
};


/** Coinpath */
export type LibraCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type LibraCoinpathanyArgs = {
  of: LibraCoinpathMeasureable;
};


/** Coinpath */
export type LibraCoinpathmaximumArgs = {
  get?: InputMaybe<LibraCoinpathMeasureable>;
  of: LibraCoinpathMeasureable;
};


/** Coinpath */
export type LibraCoinpathminimumArgs = {
  get?: InputMaybe<LibraCoinpathMeasureable>;
  of: LibraCoinpathMeasureable;
};

export enum LibraCoinpathMeasureable {
  /** Block */
  block = 'block',
  /** Depth */
  depth = 'depth',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Version */
  version = 'version'
}

/**
 * Currency selector in Libra blockchain.
 * Libra has native chain currency (LBR) and a number of others ( Coin1/Coin2 ) for Testnet.
 * Use name of currency for selection
 */
export type LibraCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type LibraMintFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  block?: InputMaybe<BlockSelector>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  minter?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  version?: InputMaybe<IntegerSelector>;
};

/** Mints in Libra blockchain */
export type LibraMints = {
  __typename?: 'LibraMints';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Minter */
  minter?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Mint timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
};


/** Mints in Libra blockchain */
export type LibraMintsamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  block?: InputMaybe<BlockSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  minter?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Mints in Libra blockchain */
export type LibraMintsanyArgs = {
  of: LibraMintsMeasureable;
};


/** Mints in Libra blockchain */
export type LibraMintsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Mints in Libra blockchain */
export type LibraMintscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  block?: InputMaybe<BlockSelector>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  minter?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<LibraMintsUniq>;
  version?: InputMaybe<IntegerSelector>;
};


/** Mints in Libra blockchain */
export type LibraMintscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  block?: InputMaybe<BlockSelector>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  minter?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<LibraMintsUniq>;
  version?: InputMaybe<IntegerSelector>;
};


/** Mints in Libra blockchain */
export type LibraMintscurrencyArgs = {
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
};


/** Mints in Libra blockchain */
export type LibraMintsmaximumArgs = {
  get?: InputMaybe<LibraMintsMeasureable>;
  of: LibraMintsMeasureable;
};


/** Mints in Libra blockchain */
export type LibraMintsminimumArgs = {
  get?: InputMaybe<LibraMintsMeasureable>;
  of: LibraMintsMeasureable;
};


/** Mints in Libra blockchain */
export type LibraMintsminterArgs = {
  sender?: InputMaybe<AddressSelector>;
};


/** Mints in Libra blockchain */
export type LibraMintssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Mints in Libra blockchain */
export type LibraMintstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Mints in Libra blockchain */
export type LibraMintsversionArgs = {
  version?: InputMaybe<IntegerSelector>;
};

export enum LibraMintsMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Currency symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** Minter */
  minter = 'minter',
  /** Time */
  time = 'time',
  /** Version */
  version = 'version',
  /** Mint version hash */
  version_hash = 'version_hash'
}

export enum LibraMintsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique currencies */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique minters */
  minters = 'minters',
  /** Unique versions */
  versions = 'versions'
}

export type LibraTransactionFilter = {
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};

/** Blockchain transaction with value */
export type LibraTransactionValue = {
  __typename?: 'LibraTransactionValue';
  /** Transaction value */
  value: Scalars['Float'];
  /** Transaction version */
  version: Scalars['Int'];
};

/** Transactions in Libra blockchain */
export type LibraTransactions = {
  __typename?: 'LibraTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Expiration Time */
  expirationTime?: Maybe<DateTime>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas unit price */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Max gas amount */
  maxGasAmount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Public key */
  publicKey?: Maybe<Scalars['String']>;
  /** Script Hash */
  scriptHash?: Maybe<Scalars['String']>;
  /** Script Type */
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  /** Transaction sender */
  sender?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature scheme */
  signatureScheme?: Maybe<Scalars['String']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction timestamp */
  timestamp?: Maybe<DateTime>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsanyArgs = {
  of: LibraTransactionsMeasureable;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionscountArgs = {
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<LibraTransactionsUniq>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<LibraTransactionsUniq>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsgasArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsgasCurrencyArgs = {
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsgasPriceArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsgasValueArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsmaximumArgs = {
  get?: InputMaybe<LibraTransactionsMeasureable>;
  of: LibraTransactionsMeasureable;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsminimumArgs = {
  get?: InputMaybe<LibraTransactionsMeasureable>;
  of: LibraTransactionsMeasureable;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsscriptHashArgs = {
  scriptHash?: InputMaybe<StringSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionssenderArgs = {
  txSender?: InputMaybe<AddressSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Transactions in Libra blockchain */
export type LibraTransactionsversionArgs = {
  version?: InputMaybe<IntegerSelector>;
};

export enum LibraTransactionsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Gas used */
  gas = 'gas',
  /** Gas price */
  gas_price = 'gas_price',
  /** Script Hash */
  script_hash = 'script_hash',
  /** Time */
  time = 'time',
  /** Transaction Sender */
  tx_sender = 'tx_sender',
  /** Version */
  version = 'version'
}

export enum LibraTransactionsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique transaction script hashes */
  scripts = 'scripts',
  /** Unique transaction senders */
  senders = 'senders',
  /** Unique versions */
  versions = 'versions'
}

export type LibraTransferFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};

/** Transfers in Libra blockchain */
export type LibraTransfers = {
  __typename?: 'LibraTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Expiration Time */
  expirationTime?: Maybe<DateTime>;
  gas?: Maybe<Scalars['Int']>;
  /** Currency of gas */
  gasCurrency?: Maybe<Currency>;
  /** Gas price */
  gasPrice: Scalars['Float'];
  gasValue?: Maybe<Scalars['Float']>;
  /** Max gas amount */
  maxGasAmount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Public key */
  publicKey?: Maybe<Scalars['String']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Script Hash */
  scriptHash?: Maybe<Scalars['String']>;
  /** Script Type */
  scriptType?: Maybe<ScriptTypeSelectorSelector>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Sequence number */
  sequenceNumber?: Maybe<Scalars['Int']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature scheme */
  signatureScheme?: Maybe<Scalars['String']>;
  /** Status Name */
  statusName?: Maybe<Scalars['String']>;
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
  /** Transfer timestamp */
  timestamp?: Maybe<DateTime>;
  /** Transaction sender */
  txSender?: Maybe<Address>;
  /** Version of blockchain for this transaction */
  version: Scalars['Int'];
  /** Version hash of blockchain for this transaction */
  versionHash: Scalars['String'];
  /** VM Status */
  vmStatus?: Maybe<Scalars['Int']>;
};


/** Transfers in Libra blockchain */
export type LibraTransfersamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransfersanyArgs = {
  of: LibraTransfersMeasureable;
};


/** Transfers in Libra blockchain */
export type LibraTransfersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransferscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<TransfersUniq>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransferscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<TransfersUniq>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransferscurrencyArgs = {
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
};


/** Transfers in Libra blockchain */
export type LibraTransfersgasArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransfersgasCurrencyArgs = {
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
};


/** Transfers in Libra blockchain */
export type LibraTransfersgasValueArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  currency?: InputMaybe<Array<LibraCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  gasCurrency?: InputMaybe<Array<LibraCurrencySelector>>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  scriptHash?: InputMaybe<StringSelector>;
  scriptType?: InputMaybe<ScriptTypeSelectorSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txSender?: InputMaybe<AddressSelector>;
  version?: InputMaybe<IntegerSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransfersmaximumArgs = {
  get?: InputMaybe<LibraTransfersMeasureable>;
  of: LibraTransfersMeasureable;
};


/** Transfers in Libra blockchain */
export type LibraTransfersminimumArgs = {
  get?: InputMaybe<LibraTransfersMeasureable>;
  of: LibraTransfersMeasureable;
};


/** Transfers in Libra blockchain */
export type LibraTransfersreceiverArgs = {
  receiver?: InputMaybe<AddressSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransfersscriptHashArgs = {
  scriptHash?: InputMaybe<StringSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransferssenderArgs = {
  sender?: InputMaybe<AddressSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransferssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Transfers in Libra blockchain */
export type LibraTransferstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransferstxSenderArgs = {
  txSender?: InputMaybe<AddressSelector>;
};


/** Transfers in Libra blockchain */
export type LibraTransfersversionArgs = {
  version?: InputMaybe<IntegerSelector>;
};

export enum LibraTransfersMeasureable {
  /** Amount */
  amount = 'amount',
  /** Currency symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** Gas used */
  gas = 'gas',
  /** Gas price */
  gas_price = 'gas_price',
  /** Gas value */
  gas_value = 'gas_value',
  /** Block */
  height = 'height',
  /** Receiver */
  receiver = 'receiver',
  /** Script Hash */
  script_hash = 'script_hash',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transfer Sender */
  tx_sender = 'tx_sender',
  /** Version */
  version = 'version',
  /** Version hash */
  version_hash = 'version_hash'
}

/** Limit by definition */
export type LimitByOption = {
  /** Take limit for each combination of the field */
  each: Scalars['String'];
  /** Limit number of results */
  limit?: InputMaybe<Scalars['Int']>;
  /** Offset of results, starting from 0 */
  offset?: InputMaybe<Scalars['Int']>;
};

/** Solana Log */
export type Log = {
  __typename?: 'Log';
  consumed: Scalars['BigInt'];
  instruction: Scalars['String'];
  logs: Scalars['String'];
  result: Scalars['String'];
  totalGas: Scalars['BigInt'];
};

/** Smart contract method */
export type Method = {
  __typename?: 'Method';
  /** Name */
  name?: Maybe<Scalars['String']>;
  /** Signature */
  signature?: Maybe<Scalars['String']>;
  /** Signature Hash */
  signatureHash: Scalars['String'];
};

/** Smart contract method. In selector you can use the name, signature or hex hash */
export type MethodSelector = {
  /** Method signature in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Method signature is */
  is?: InputMaybe<Scalars['String']>;
  /** Method signature not */
  not?: InputMaybe<Scalars['String']>;
  /** Method signature not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Information about miniblock */
export type MiniblockElrond = {
  __typename?: 'MiniblockElrond';
  /** Miniblock hash */
  hash?: Maybe<Scalars['String']>;
  /** Hash of the receiver block */
  receiverBlockHash?: Maybe<Scalars['String']>;
  /** Number of the receiver shard */
  receiverShard?: Maybe<Scalars['String']>;
  /** Miniblock type */
  type?: Maybe<Scalars['String']>;
};


/** Information about miniblock */
export type MiniblockElrondhashArgs = {
  miniblockHash?: InputMaybe<HashSelector>;
};


/** Information about miniblock */
export type MiniblockElrondreceiverBlockHashArgs = {
  miniblockReceiverBlockHash?: InputMaybe<HashSelector>;
};


/** Information about miniblock */
export type MiniblockElrondreceiverShardArgs = {
  miniblockReceiverShard?: InputMaybe<IntIdSelector>;
};


/** Information about miniblock */
export type MiniblockElrondtypeArgs = {
  type?: InputMaybe<StringSelector>;
};

/** Name with an identifier */
export type NameWithId = {
  __typename?: 'NameWithId';
  /** ID */
  id?: Maybe<Scalars['Int']>;
  /** Name */
  name?: Maybe<Scalars['String']>;
};

export enum Network {
  /** Algorand Mainnet (ALGO) */
  algorand = 'algorand',
  /** Algorand Betanet */
  algorand_betanet = 'algorand_betanet',
  /** Algorand Testnet */
  algorand_testnet = 'algorand_testnet',
  /** Binance DEX */
  binance = 'binance',
  /** Bitcoin Cash ( BCH ) */
  bitcash = 'bitcash',
  /** Bitcoin ( BTC ) */
  bitcoin = 'bitcoin',
  /** Bitcoin SV ( BSV ) */
  bitcoinsv = 'bitcoinsv',
  /** Binance Smart Chain Mainnet */
  bsc = 'bsc',
  /** Binance Smart Chain Testnet */
  bsc_testnet = 'bsc_testnet',
  /** Cardano ( ADA ) */
  cardano = 'cardano',
  /** Celo Alfajores Testnet */
  celo_alfajores = 'celo_alfajores',
  /** Celo Baklava Testnet */
  celo_baklava = 'celo_baklava',
  /** Celo RC1 */
  celo_rc1 = 'celo_rc1',
  /** Conflux Oceanus */
  conflux_oceanus = 'conflux_oceanus',
  /** Conflux Tethys */
  conflux_tethys = 'conflux_tethys',
  /** Dash ( DASH ) */
  dash = 'dash',
  /** Diem Testnet */
  diem_testnet = 'diem_testnet',
  /** Dogecoin ( DOGE ) */
  dogecoin = 'dogecoin',
  /** Elrond Mainnet */
  elrond = 'elrond',
  /** EOS Mainnet */
  eos = 'eos',
  /** Beacon Chain Ethereum 2.0 */
  eth2 = 'eth2',
  /** Ethereum Classic */
  ethclassic = 'ethclassic',
  /** Ethereum Classic ( no reorg from block 10904146) */
  ethclassic_reorg = 'ethclassic_reorg',
  /** Ethereum Mainnet */
  ethereum = 'ethereum',
  /** Filecoin Mainnet */
  filecoin = 'filecoin',
  /** Goerli Ethereum Testnet */
  goerli = 'goerli',
  /** Hedera Hashgraph */
  hedera = 'hedera',
  /** Klaytn Mainnet */
  klaytn = 'klaytn',
  /** Libra Testnet */
  libra_testnet = 'libra_testnet',
  /** Litecoin ( LTC ) */
  litecoin = 'litecoin',
  /** Matic (Polygon) Mainnet */
  matic = 'matic',
  /** Medalla Ethereum 2.0 Beacon Testnet */
  medalla = 'medalla',
  /** Solana Mainnet */
  solana = 'solana',
  /** TRON Mainnet */
  tron = 'tron',
  /** Velas Mainnet */
  velas = 'velas',
  /** Velas Testnet */
  velas_testnet = 'velas_testnet',
  /** Zcash ( ZEC ) */
  zcash = 'zcash'
}

/** Offchain Data */
export type Offchain = {
  __typename?: 'Offchain';
  /** Historical COVID data */
  covid?: Maybe<CovidHistory>;
};

/** Select order by ID */
export type OrderIdSelector = {
  /** Order ID in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Order ID is */
  is?: InputMaybe<Scalars['String']>;
  /** Order ID not */
  not?: InputMaybe<Scalars['String']>;
  /** Order ID not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Select by order side */
export type OrderSideSelector = {
  /** Order Side in the list */
  in?: InputMaybe<Array<BinanceOrderSide>>;
  /** Order Side is */
  is?: InputMaybe<BinanceOrderSide>;
  /** Order Side not */
  not?: InputMaybe<BinanceOrderSide>;
  /** Order Side not in the list */
  notIn?: InputMaybe<Array<BinanceOrderSide>>;
};

/** Select by order status */
export type OrderStatusSelector = {
  /** Order Status in the list */
  in?: InputMaybe<Array<BinanceOrderStatus>>;
  /** Order Status is */
  is?: InputMaybe<BinanceOrderStatus>;
  /** Order Status not */
  not?: InputMaybe<BinanceOrderStatus>;
  /** Order Status not in the list */
  notIn?: InputMaybe<Array<BinanceOrderStatus>>;
};

/** Select by order time in force */
export type OrderTimeInForceSelector = {
  /** Order TimeInForce in the list */
  in?: InputMaybe<Array<BinanceOrderTimeInForce>>;
  /** Order TimeInForce is */
  is?: InputMaybe<BinanceOrderTimeInForce>;
  /** Order TimeInForce not */
  not?: InputMaybe<BinanceOrderTimeInForce>;
  /** Order TimeInForce not in the list */
  notIn?: InputMaybe<Array<BinanceOrderTimeInForce>>;
};

/** Select by order type */
export type OrderTypeSelector = {
  /** Order Type in the list */
  in?: InputMaybe<Array<BinanceOrderType>>;
  /** Order Type is */
  is?: InputMaybe<BinanceOrderType>;
  /** Order Type not */
  not?: InputMaybe<BinanceOrderType>;
  /** Order Type not in the list */
  notIn?: InputMaybe<Array<BinanceOrderType>>;
};

/** Select by output index ( o based ) */
export type OutputIndexSelector = {
  /** Output index in range */
  between?: InputMaybe<Array<Scalars['Int']>>;
  /** Output index greater than */
  gt?: InputMaybe<Scalars['Int']>;
  /** Output index greater or equal than */
  gteq?: InputMaybe<Scalars['Int']>;
  /** Output index in the list */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Output index is */
  is?: InputMaybe<Scalars['Int']>;
  /** Output index less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** Output index less or equal than */
  lteq?: InputMaybe<Scalars['Int']>;
  /** Output index not */
  not?: InputMaybe<Scalars['Int']>;
  /** Output index not in the list */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** Output Script Type of UTXO transaction output */
export type OutputScript = {
  __typename?: 'OutputScript';
  /** Script annotation */
  annotation?: Maybe<Scalars['String']>;
  /** Long script pattern */
  pattern: Scalars['String'];
  /** Short script pattern */
  short: Scalars['String'];
  /** Simple script pattern */
  simplePattern: Scalars['String'];
  /** Script type */
  type?: Maybe<BitcoinOutputScriptType>;
};

export enum PriceAggregateFunction {
  /** Any value */
  any = 'any',
  /** Last value */
  anyLast = 'anyLast',
  /** Average */
  average = 'average',
  /** Maximum */
  maximum = 'maximum',
  /** Median */
  median = 'median',
  /** Minimum */
  minimum = 'minimum',
  /** Aggregated over interval */
  sum = 'sum'
}

/** Solana Program */
export type Program = {
  __typename?: 'Program';
  id: Scalars['String'];
  name: Scalars['String'];
  parsed: Scalars['Boolean'];
  parsedName: Scalars['String'];
};

export enum Protocol {
  /** Algorand */
  algorand = 'algorand',
  /** Binance DEX */
  binance = 'binance',
  /** Bitcoin */
  bitcoin = 'bitcoin',
  /** Cardano */
  cardano = 'cardano',
  /** Elrond */
  elrond = 'elrond',
  /** EOS */
  eos = 'eos',
  /** Ethereum */
  ethereum = 'ethereum',
  /** Filecoin */
  filecoin = 'filecoin',
  /** Hedera Hashgraph */
  hedera = 'hedera',
  /** Libra */
  libra = 'libra',
  /** Solana */
  solana = 'solana',
  /** Tron */
  tron = 'tron'
}

/** Blockchain Unified GraphQL API */
export type Query = {
  __typename?: 'Query';
  /** Algorand Chains Dataset */
  algorand?: Maybe<Algorand>;
  /** Binance DEX Chain Dataset */
  binance?: Maybe<Binance>;
  /** Bitcoin and other UTXO Chains Dataset */
  bitcoin?: Maybe<Bitcoin>;
  /** Cardano Chain Dataset */
  cardano?: Maybe<Cardano>;
  /** Conflux Chains Dataset */
  conflux?: Maybe<Conflux>;
  /** Diem ( former Libra ) Testnet Dataset */
  diem?: Maybe<Libra>;
  /** Elrond Dataset */
  elrond?: Maybe<Elrond>;
  /** EOS Mainnet Dataset */
  eos?: Maybe<Eos>;
  /** Ethereum Mainnet / Classic Chain Datasets */
  ethereum?: Maybe<Ethereum>;
  /** Ethereum v2.0 Beacon Chain Datasets */
  ethereum2?: Maybe<Ethereum2>;
  /** Filecoin Dataset */
  filecoin?: Maybe<Filecoin>;
  /** Harmony Dataset */
  harmony?: Maybe<Harmony>;
  /** Hedera Dataset */
  hedera?: Maybe<Hedera>;
  /** Offchain data */
  offchain?: Maybe<Offchain>;
  /** Ripple Dataset */
  ripple?: Maybe<Ripple>;
  /** Search by query string */
  search?: Maybe<Array<Result>>;
  /** Solana Dataset */
  solana?: Maybe<Solana>;
  /** Stellar Dataset */
  stellar?: Maybe<Stellar>;
  /** Tron Mainnet Dataset */
  tron?: Maybe<Tron>;
};


/** Blockchain Unified GraphQL API */
export type QueryalgorandArgs = {
  network?: InputMaybe<AlgorandNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QuerybitcoinArgs = {
  network?: InputMaybe<BitcoinNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QuerycardanoArgs = {
  network?: InputMaybe<CardanoNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QueryconfluxArgs = {
  network?: InputMaybe<ConfluxNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QuerydiemArgs = {
  network?: InputMaybe<DiemNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QueryelrondArgs = {
  network?: InputMaybe<ElrondNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QueryeosArgs = {
  network?: InputMaybe<EosNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QueryethereumArgs = {
  network?: InputMaybe<EthereumNetwork>;
};


/** Blockchain Unified GraphQL API */
export type Queryethereum2Args = {
  network?: InputMaybe<Ethereum2Network>;
};


/** Blockchain Unified GraphQL API */
export type QueryfilecoinArgs = {
  network?: InputMaybe<FilecoinNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QueryharmonyArgs = {
  network?: InputMaybe<HarmonyNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QueryhederaArgs = {
  network?: InputMaybe<HederaNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QueryrippleArgs = {
  network?: InputMaybe<RippleNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QuerysearchArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  network?: InputMaybe<Network>;
  offset?: InputMaybe<Scalars['Int']>;
  string: Scalars['String'];
};


/** Blockchain Unified GraphQL API */
export type QuerysolanaArgs = {
  network?: InputMaybe<SolanaNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QuerystellarArgs = {
  network?: InputMaybe<StellarNetwork>;
};


/** Blockchain Unified GraphQL API */
export type QuerytronArgs = {
  network?: InputMaybe<TronNetwork>;
};

/** Limits, Ordering, Constraints */
export type QueryOptions = {
  /** Ordering field(s) for ascending */
  asc?: InputMaybe<Array<Scalars['String']>>;
  /** Ordering field(s) for descending */
  desc?: InputMaybe<Array<Scalars['String']>>;
  /** Limit number of results */
  limit?: InputMaybe<Scalars['Int']>;
  /** Limit number of results by specific field */
  limitBy?: InputMaybe<LimitByOption>;
  /** Offset of results, starting from 0 */
  offset?: InputMaybe<Scalars['Int']>;
};

/** Solana Receiver */
export type Receiver = {
  __typename?: 'Receiver';
  address: Scalars['String'];
  mintAccount: Scalars['String'];
  type: Scalars['String'];
};

/** Search result item */
export type Result = {
  __typename?: 'Result';
  /** Blockchain where result is found */
  network: BlockchainNetwork;
  /** Subject in blockchain */
  subject: Subject;
};

/** Select by reward type */
export type RewardTypeSelector = {
  /** Type in the list */
  in?: InputMaybe<Array<SolanaRewardType>>;
  /** Type is */
  is?: InputMaybe<SolanaRewardType>;
  /** Type not */
  not?: InputMaybe<SolanaRewardType>;
  /** Type not in the list */
  notIn?: InputMaybe<Array<SolanaRewardType>>;
};

/** Ripple Chain */
export type Ripple = {
  __typename?: 'Ripple';
  /** The Escrow object type represents a held payment of XRP waiting to be executed or canceled */
  accountRoots?: Maybe<Array<RippleAccountRoots>>;
  /** Ripple Balances */
  balances?: Maybe<Array<RippleBalances>>;
  /** Ripple Blocks */
  blocks?: Maybe<Array<RippleBlocks>>;
  /** A check that can be redeemed for money by its destination. */
  checks?: Maybe<Array<RippleChecks>>;
  /** The Escrow object type represents a held payment of XRP waiting to be executed or canceled */
  escrows?: Maybe<Array<RippleEscrows>>;
  /** An order to make a currency trade. */
  offers?: Maybe<Array<RippleOffers>>;
  /** Ripple Payments */
  payments?: Maybe<Array<RipplePayments>>;
  /** The RippleState object type connects two accounts in a single currency */
  rippleStates?: Maybe<Array<RippleRippleStates>>;
  /** Ripple Transactions */
  transactions?: Maybe<Array<RippleTransactions>>;
  /** Ripple Transfers */
  transfers?: Maybe<Array<RippleTransfers>>;
};


/** Ripple Chain */
export type RippleaccountRootsArgs = {
  account?: InputMaybe<HashSelector>;
  any?: InputMaybe<Array<RippleAccountRootsFilter>>;
  balance?: InputMaybe<IntegerSelector>;
  blockHeight?: InputMaybe<BlockSelector>;
  date?: InputMaybe<DateSelector>;
  domain?: InputMaybe<StringSelector>;
  flags?: InputMaybe<IntegerSelector>;
  operation?: InputMaybe<HashSelector>;
  options?: InputMaybe<QueryOptions>;
  ownerCount?: InputMaybe<IntegerSelector>;
  prevBalance?: InputMaybe<IntegerSelector>;
  previousTxnId?: InputMaybe<HashSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sequence?: InputMaybe<IntegerSelector>;
  transactionType?: InputMaybe<TypeSelector>;
  transferRate?: InputMaybe<IntegerSelector>;
};


/** Ripple Chain */
export type RipplebalancesArgs = {
  account?: InputMaybe<HashSelector>;
  any?: InputMaybe<Array<RippleBalancesFilter>>;
  date?: InputMaybe<DateSelector>;
  flags?: InputMaybe<HashSelector>;
  issuer?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  prevBalance?: InputMaybe<HashSelector>;
  prevLedgerSeq?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionSender?: InputMaybe<HashSelector>;
};


/** Ripple Chain */
export type RippleblocksArgs = {
  accountHash?: InputMaybe<HashSelector>;
  any?: InputMaybe<Array<RippleBlocksFilter>>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  ledgerHash?: InputMaybe<HashSelector>;
  options?: InputMaybe<QueryOptions>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Ripple Chain */
export type RipplechecksArgs = {
  any?: InputMaybe<Array<RippleChecksFilter>>;
  blockHeight?: InputMaybe<BlockSelector>;
  date?: InputMaybe<DateSelector>;
  destination?: InputMaybe<HashSelector>;
  destinationTag?: InputMaybe<IntegerSelector>;
  expiration?: InputMaybe<IntegerSelector>;
  flags?: InputMaybe<IntegerSelector>;
  invoiceId?: InputMaybe<IntegerSelector>;
  operation?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  previousTxnId?: InputMaybe<IntegerSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sendMax?: InputMaybe<IntegerSelector>;
  sender?: InputMaybe<HashSelector>;
  sequence?: InputMaybe<IntegerSelector>;
  sourceTag?: InputMaybe<IntegerSelector>;
  transactionType?: InputMaybe<HashSelector>;
};


/** Ripple Chain */
export type RippleescrowsArgs = {
  amount?: InputMaybe<IntegerSelector>;
  any?: InputMaybe<Array<RippleEscrowsFilter>>;
  blockHeight?: InputMaybe<BlockSelector>;
  cancelAfter?: InputMaybe<IntegerSelector>;
  condition?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  destination?: InputMaybe<HashSelector>;
  destinationTag?: InputMaybe<IntegerSelector>;
  finishedAfter?: InputMaybe<IntegerSelector>;
  flags?: InputMaybe<IntegerSelector>;
  operation?: InputMaybe<HashSelector>;
  options?: InputMaybe<QueryOptions>;
  previousTxnId?: InputMaybe<IntegerSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sender?: InputMaybe<HashSelector>;
  sourceTag?: InputMaybe<IntegerSelector>;
  transactionType?: InputMaybe<TypeSelector>;
};


/** Ripple Chain */
export type RippleoffersArgs = {
  account?: InputMaybe<HashSelector>;
  any?: InputMaybe<Array<RippleOffersFilter>>;
  bookDirectory?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  sequence?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionSender?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<HashSelector>;
};


/** Ripple Chain */
export type RipplepaymentsArgs = {
  amountIssuer?: InputMaybe<HashSelector>;
  any?: InputMaybe<Array<RipplePaymentsFilter>>;
  date?: InputMaybe<DateSelector>;
  deliverIssuer?: InputMaybe<HashSelector>;
  deliverMinIssuer?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  sendMaxIssuer?: InputMaybe<HashSelector>;
  tag?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};


/** Ripple Chain */
export type RipplerippleStatesArgs = {
  any?: InputMaybe<Array<RippleStatesFilter>>;
  balance?: InputMaybe<IntegerSelector>;
  blockHeight?: InputMaybe<BlockSelector>;
  date?: InputMaybe<DateSelector>;
  flags?: InputMaybe<IntegerSelector>;
  highAccount?: InputMaybe<HashSelector>;
  lowAccount?: InputMaybe<HashSelector>;
  operation?: InputMaybe<StringSelector>;
  options?: InputMaybe<QueryOptions>;
  preBalance?: InputMaybe<IntegerSelector>;
  previousTxnId?: InputMaybe<IntegerSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sender?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<HashSelector>;
};


/** Ripple Chain */
export type RippletransactionsArgs = {
  any?: InputMaybe<Array<RippleTransactionsFilter>>;
  date?: InputMaybe<DateSelector>;
  lastLedgerSequence?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  result?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  sequence?: InputMaybe<HashSelector>;
  status?: InputMaybe<Scalars['Boolean']>;
  transactionFee?: InputMaybe<TransactionTypeSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<TransactionTypeSelector>;
};


/** Ripple Chain */
export type RippletransfersArgs = {
  any?: InputMaybe<Array<RippleTransfersFilter>>;
  blockHeight?: InputMaybe<BlockSelector>;
  date?: InputMaybe<DateSelector>;
  options?: InputMaybe<QueryOptions>;
  sender?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<StringSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};

/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRoots = {
  __typename?: 'RippleAccountRoots';
  /** The identifying (classic) address of this account. */
  account?: Maybe<Scalars['String']>;
  any?: Maybe<Scalars['String']>;
  /** The account`s current XRP balance in drops, represented as a string. */
  balance?: Maybe<Scalars['BigInt']>;
  /** Number of block in the blockchains */
  blockHeight?: Maybe<Scalars['BigInt']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** domain associated with this account. In JSON, this is the hexadecimal for the ASCII representation of the domain */
  domain?: Maybe<Scalars['String']>;
  /** 	A bit-map of boolean flags. No flags are defined for the Escrow type, so this value is always 0. */
  flags?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Operation */
  operation?: Maybe<Scalars['String']>;
  /** The number of objects this account owns in the ledger, which contributes to its owner reserve. */
  ownerCount?: Maybe<Scalars['Int']>;
  /** Previous Balance */
  prevBalance?: Maybe<Scalars['BigInt']>;
  /** The identifying hash of the transaction that most recently modified this object. */
  previousTxnId?: Maybe<Scalars['String']>;
  /** The identifying hash of the transaction that most recently modified this object. */
  previousTxnLedgerSeq?: Maybe<Scalars['BigInt']>;
  /** The sequence number of the next valid transaction for this account. (Each account starts with Sequence = 1 and increases each time a transaction is made.) */
  sequence?: Maybe<Scalars['BigInt']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Type of transaction */
  transactionType?: Maybe<Scalars['String']>;
  /** A transfer fee  to charge other users for sending currency issued by this account to each other. */
  transferRate?: Maybe<Scalars['BigInt']>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsaccountArgs = {
  account?: InputMaybe<HashSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsanyArgs = {
  of: RippleccountRootsMeasureable;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsbalanceArgs = {
  balance?: InputMaybe<IntegerSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsblockHeightArgs = {
  blockHeight?: InputMaybe<BlockSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootscountArgs = {
  uniq?: InputMaybe<RippleAccountRootsUniq>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootscountBigIntArgs = {
  uniq?: InputMaybe<RippleAccountRootsUniq>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsdomainArgs = {
  domain?: InputMaybe<StringSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsflagsArgs = {
  flags?: InputMaybe<IntegerSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsmaximumArgs = {
  get?: InputMaybe<RippleccountRootsMeasureable>;
  of: RippleccountRootsMeasureable;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsminimumArgs = {
  get?: InputMaybe<RippleccountRootsMeasureable>;
  of: RippleccountRootsMeasureable;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsoperationArgs = {
  operation?: InputMaybe<HashSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsownerCountArgs = {
  ownerCount?: InputMaybe<IntegerSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootsprevBalanceArgs = {
  prevBalance?: InputMaybe<IntegerSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootspreviousTxnIdArgs = {
  previousTxnId?: InputMaybe<HashSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootspreviousTxnLedgerSeqArgs = {
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootssequenceArgs = {
  sequence?: InputMaybe<IntegerSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootstransactionTypeArgs = {
  transactionType?: InputMaybe<TypeSelector>;
};


/** The AccountRoot object type describes a single account, its settings, and XRP balance. */
export type RippleAccountRootstransferRateArgs = {
  transferRate?: InputMaybe<IntegerSelector>;
};

export type RippleAccountRootsFilter = {
  account?: InputMaybe<HashSelector>;
  balance?: InputMaybe<IntegerSelector>;
  blockHeight?: InputMaybe<BlockSelector>;
  date?: InputMaybe<DateSelector>;
  domain?: InputMaybe<StringSelector>;
  flags?: InputMaybe<IntegerSelector>;
  operation?: InputMaybe<HashSelector>;
  ownerCount?: InputMaybe<IntegerSelector>;
  prevBalance?: InputMaybe<IntegerSelector>;
  previousTxnId?: InputMaybe<HashSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sequence?: InputMaybe<IntegerSelector>;
  transactionType?: InputMaybe<TypeSelector>;
  transferRate?: InputMaybe<IntegerSelector>;
};

export enum RippleAccountRootsUniq {
  /** Unique Number of block in the blockchains */
  block_height = 'block_height',
  /** Unique currencies */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique sender */
  sender = 'sender',
  /** Unique time */
  times = 'times'
}

/** Balances in Ripple blockchain */
export type RippleBalances = {
  __typename?: 'RippleBalances';
  /** Account */
  account?: Maybe<Scalars['String']>;
  any?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency */
  currency?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Previous Ledge Seq */
  flags?: Maybe<Scalars['BigInt']>;
  /** Issuer */
  issuer?: Maybe<Scalars['String']>;
  /** Block number */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Previous Balance */
  prevBalance?: Maybe<Scalars['Float']>;
  /** Previous Ledger Seq */
  prevLedgerSeq?: Maybe<Scalars['BigInt']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Transaction hash */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transaction Sender */
  transactionSender?: Maybe<Scalars['String']>;
  /** Transaction type */
  transactionType?: Maybe<Scalars['String']>;
};


/** Balances in Ripple blockchain */
export type RippleBalancesaccountArgs = {
  account?: InputMaybe<HashSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancesanyArgs = {
  of: RippleBalancesMeasureable;
};


/** Balances in Ripple blockchain */
export type RippleBalancesbalanceArgs = {
  account?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  flags?: InputMaybe<HashSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  issuer?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  prevBalance?: InputMaybe<HashSelector>;
  prevLedgerSeq?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionSender?: InputMaybe<HashSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancescountArgs = {
  uniq?: InputMaybe<RippleBalancesUniq>;
};


/** Balances in Ripple blockchain */
export type RippleBalancescountBigIntArgs = {
  uniq?: InputMaybe<RippleBalancesUniq>;
};


/** Balances in Ripple blockchain */
export type RippleBalancesflagsArgs = {
  flags?: InputMaybe<HashSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancesissuerArgs = {
  issuer?: InputMaybe<HashSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancesledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancesmaximumArgs = {
  get?: InputMaybe<RippleBalancesMeasureable>;
  of: RippleBalancesMeasureable;
};


/** Balances in Ripple blockchain */
export type RippleBalancesminimumArgs = {
  get?: InputMaybe<RippleBalancesMeasureable>;
  of: RippleBalancesMeasureable;
};


/** Balances in Ripple blockchain */
export type RippleBalancesprevBalanceArgs = {
  prevBalance?: InputMaybe<HashSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancesprevLedgerSeqArgs = {
  prevLedgerSeq?: InputMaybe<HashSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancestransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancestransactionSenderArgs = {
  transactionSender?: InputMaybe<HashSelector>;
};


/** Balances in Ripple blockchain */
export type RippleBalancestransactionTypeArgs = {
  transactionType?: InputMaybe<TransactionTypeSelector>;
};

export type RippleBalancesFilter = {
  account?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  flags?: InputMaybe<HashSelector>;
  issuer?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  prevBalance?: InputMaybe<HashSelector>;
  prevLedgerSeq?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionSender?: InputMaybe<HashSelector>;
};

export enum RippleBalancesMeasureable {
  /** Account */
  account = 'account',
  /** Balance */
  balance = 'balance',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Transaction Sender */
  transaction_sender = 'transaction_sender'
}

export enum RippleBalancesUniq {
  /** Unique account count */
  account = 'account',
  /** Unique date count */
  dates = 'dates',
  /** Unique issuer count */
  issuer = 'issuer',
  /** Unique ledger count */
  ledger = 'ledger',
  /** Unique time */
  times = 'times',
  /** Unique transaction hash count */
  transactionHash = 'transactionHash',
  /** Unique transaction sender count */
  transactionSender = 'transactionSender'
}

/** Blocks in Ripple blockchain */
export type RippleBlocks = {
  __typename?: 'RippleBlocks';
  /** Hash of this ledger`s state tree information. */
  accountHash?: Maybe<Scalars['String']>;
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Block number */
  ledger?: Maybe<Scalars['BigInt']>;
  /** This serves as a unique identifier for this ledger and all its contents. */
  ledgerHash?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** The total number of drops of XRP owned by accounts in the ledger. */
  totalCoins?: Maybe<Scalars['BigInt']>;
  /** Transaction hash */
  transactionHash?: Maybe<Scalars['String']>;
};


/** Blocks in Ripple blockchain */
export type RippleBlocksaccountHashArgs = {
  accountHash?: InputMaybe<HashSelector>;
};


/** Blocks in Ripple blockchain */
export type RippleBlocksanyArgs = {
  of: RippleBlocksMeasureable;
};


/** Blocks in Ripple blockchain */
export type RippleBlockscountArgs = {
  uniq?: InputMaybe<RippleBlocksUniq>;
};


/** Blocks in Ripple blockchain */
export type RippleBlockscountBigIntArgs = {
  uniq?: InputMaybe<RippleBlocksUniq>;
};


/** Blocks in Ripple blockchain */
export type RippleBlocksledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Blocks in Ripple blockchain */
export type RippleBlocksledgerHashArgs = {
  ledgerHash?: InputMaybe<HashSelector>;
};


/** Blocks in Ripple blockchain */
export type RippleBlocksmaximumArgs = {
  get?: InputMaybe<RippleBlocksMeasureable>;
  of: RippleBlocksMeasureable;
};


/** Blocks in Ripple blockchain */
export type RippleBlocksminimumArgs = {
  get?: InputMaybe<RippleBlocksMeasureable>;
  of: RippleBlocksMeasureable;
};


/** Blocks in Ripple blockchain */
export type RippleBlockstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};

export type RippleBlocksFilter = {
  accountHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  ledgerHash?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
};

export enum RippleBlocksMeasureable {
  /** Hash of this ledger`s state tree information */
  account_hash = 'account_hash',
  /** Date */
  date = 'date',
  /** Block number */
  ledger = 'ledger',
  /** This serves as a unique identifier for this ledger and all its contents */
  ledger_hash = 'ledger_hash',
  /** Time */
  time = 'time',
  /** The total number of drops of XRP owned by accounts in the ledger */
  total_coins = 'total_coins'
}

export enum RippleBlocksUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique blocks */
  ledger = 'ledger',
  /** Unique time */
  times = 'times'
}

/** Checks in Ripple blockchain */
export type RippleChecks = {
  __typename?: 'RippleChecks';
  any?: Maybe<Scalars['String']>;
  /** Number of block in the blockchains */
  blockHeight?: Maybe<Scalars['BigInt']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** The destination address where the XRP is paid if the held payment is successful. */
  destination?: Maybe<Scalars['String']>;
  /** An arbitrary tag to further specify the destination for this held payment, such as a hosted recipient at the destination address. */
  destinationTag?: Maybe<Scalars['BigInt']>;
  /** Indicates the time after which this Check is considered expired. */
  expiration?: Maybe<Scalars['BigInt']>;
  /** A bit-map of boolean flags. No flags are defined for the Escrow type, so this value is always 0. */
  flags?: Maybe<Scalars['BigInt']>;
  /** The time after which this held payment can be finished */
  invoiceId?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Operation */
  operation?: Maybe<Scalars['String']>;
  /** The identifying hash of the transaction that most recently modified this object. */
  previousTxnId?: Maybe<Scalars['String']>;
  /** The identifying hash of the transaction that most recently modified this object. */
  previousTxnLedgerSeq?: Maybe<Scalars['BigInt']>;
  /** The maximum amount of currency this Check can debit the sender.  */
  sendMax?: Maybe<Scalars['BigInt']>;
  /** The sender of the Check. Cashing the Check debits this address`s balance. */
  sender?: Maybe<Scalars['String']>;
  /** The sequence number of the CheckCreate transaction that created this check. */
  sequence?: Maybe<Scalars['BigInt']>;
  /** An arbitrary tag to further specify the source for this held payment, such as a hosted recipient at the owner`s address. */
  sourceTag?: Maybe<Scalars['BigInt']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Type of transaction */
  transactionType?: Maybe<Scalars['String']>;
};


/** Checks in Ripple blockchain */
export type RippleChecksanyArgs = {
  of: RippleChecksMeasureable;
};


/** Checks in Ripple blockchain */
export type RippleChecksblockHeightArgs = {
  blockHeight?: InputMaybe<BlockSelector>;
};


/** Checks in Ripple blockchain */
export type RippleCheckscountArgs = {
  uniq?: InputMaybe<RippleChecksUniq>;
};


/** Checks in Ripple blockchain */
export type RippleCheckscountBigIntArgs = {
  uniq?: InputMaybe<RippleChecksUniq>;
};


/** Checks in Ripple blockchain */
export type RippleChecksdestinationArgs = {
  destination?: InputMaybe<HashSelector>;
};


/** Checks in Ripple blockchain */
export type RippleChecksdestinationTagArgs = {
  destinationTag?: InputMaybe<IntegerSelector>;
};


/** Checks in Ripple blockchain */
export type RippleChecksexpirationArgs = {
  expiration?: InputMaybe<IntegerSelector>;
};


/** Checks in Ripple blockchain */
export type RippleChecksflagsArgs = {
  flags?: InputMaybe<IntegerSelector>;
};


/** Checks in Ripple blockchain */
export type RippleChecksinvoiceIdArgs = {
  invoiceId?: InputMaybe<IntegerSelector>;
};


/** Checks in Ripple blockchain */
export type RippleChecksmaximumArgs = {
  get?: InputMaybe<RippleChecksMeasureable>;
  of: RippleChecksMeasureable;
};


/** Checks in Ripple blockchain */
export type RippleChecksminimumArgs = {
  get?: InputMaybe<RippleChecksMeasureable>;
  of: RippleChecksMeasureable;
};


/** Checks in Ripple blockchain */
export type RippleChecksoperationArgs = {
  operation?: InputMaybe<StringSelector>;
};


/** Checks in Ripple blockchain */
export type RippleCheckspreviousTxnIdArgs = {
  previousTxnId?: InputMaybe<HashSelector>;
};


/** Checks in Ripple blockchain */
export type RippleCheckspreviousTxnLedgerSeqArgs = {
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
};


/** Checks in Ripple blockchain */
export type RippleCheckssendMaxArgs = {
  sendMax?: InputMaybe<IntegerSelector>;
};


/** Checks in Ripple blockchain */
export type RippleCheckssenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** Checks in Ripple blockchain */
export type RippleCheckssequenceArgs = {
  sequence?: InputMaybe<IntegerSelector>;
};


/** Checks in Ripple blockchain */
export type RippleCheckssourceTagArgs = {
  sourceTag?: InputMaybe<IntegerSelector>;
};


/** Checks in Ripple blockchain */
export type RippleCheckstransactionTypeArgs = {
  transactionType?: InputMaybe<TypeSelector>;
};

export type RippleChecksFilter = {
  blockHeight?: InputMaybe<BlockSelector>;
  date?: InputMaybe<DateSelector>;
  destination?: InputMaybe<HashSelector>;
  destinationTag?: InputMaybe<IntegerSelector>;
  expiration?: InputMaybe<IntegerSelector>;
  flags?: InputMaybe<IntegerSelector>;
  invoiceId?: InputMaybe<IntegerSelector>;
  operation?: InputMaybe<StringSelector>;
  previousTxnId?: InputMaybe<IntegerSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sendMax?: InputMaybe<IntegerSelector>;
  sender?: InputMaybe<HashSelector>;
  sequence?: InputMaybe<IntegerSelector>;
  sourceTag?: InputMaybe<IntegerSelector>;
  transactionType?: InputMaybe<HashSelector>;
};

export enum RippleChecksMeasureable {
  /** Number of block in the blockhains */
  block_height = 'block_height',
  /** Currency Address */
  currency_address = 'currency_address',
  /** Currency Symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** The sender of the Check. Cashing the Check debits this address`s balance. */
  sender = 'sender',
  /** Time */
  time = 'time'
}

export enum RippleChecksUniq {
  /** Unique Number of block in the blockchains */
  block_height = 'block_height',
  /** Unique currencies */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique destination */
  destination = 'destination',
  /** Unique sender */
  sender = 'sender',
  /** Unique time */
  times = 'times'
}

/** Escrows in Ripple blockchain */
export type RippleEscrows = {
  __typename?: 'RippleEscrows';
  /** The amount of XRP, in drops, to be delivered by the held payment. */
  amount?: Maybe<Scalars['BigInt']>;
  any?: Maybe<Scalars['String']>;
  /** Number of block in the blockchains */
  blockHeight?: Maybe<Scalars['BigInt']>;
  /** The held payment can be canceled if and only if this field is present and the time it specifies has passed */
  cancelAfter?: Maybe<Scalars['BigInt']>;
  /** Crypto condition as hexadecimal. If present, the EscrowFinish transaction must contain a fulfillment that satisfies this condition. */
  condition?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** The destination address where the XRP is paid if the held payment is successful. */
  destination?: Maybe<Scalars['String']>;
  /** An arbitrary tag to further specify the destination for this held payment, such as a hosted recipient at the destination address. */
  destinationTag?: Maybe<Scalars['BigInt']>;
  /** The time after which this held payment can be finished */
  finishedAfter?: Maybe<Scalars['BigInt']>;
  /** 	A bit-map of boolean flags. No flags are defined for the Escrow type, so this value is always 0. */
  flags?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Operation */
  operation?: Maybe<Scalars['String']>;
  /** The identifying hash of the transaction that most recently modified this object. */
  previousTxnId?: Maybe<Scalars['String']>;
  /** The identifying hash of the transaction that most recently modified this object. */
  previousTxnLedgerSeq?: Maybe<Scalars['BigInt']>;
  /** The address of the owner (sender) of this held payment */
  sender?: Maybe<Scalars['String']>;
  /** An arbitrary tag to further specify the source for this held payment, such as a hosted recipient at the owner`s address. */
  sourceTag?: Maybe<Scalars['BigInt']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Type of transaction */
  transactionType?: Maybe<Scalars['String']>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsamountArgs = {
  amount?: InputMaybe<IntegerSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsanyArgs = {
  of: RippleEscrowsMeasureable;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsblockHeightArgs = {
  blockHeight?: InputMaybe<BlockSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowscancelAfterArgs = {
  cancelAfter?: InputMaybe<IntegerSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsconditionArgs = {
  condition?: InputMaybe<HashSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowscountArgs = {
  uniq?: InputMaybe<RippleEscrowsUniq>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowscountBigIntArgs = {
  uniq?: InputMaybe<RippleEscrowsUniq>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsdestinationArgs = {
  destination?: InputMaybe<HashSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsdestinationTagArgs = {
  destinationTag?: InputMaybe<IntegerSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsfinishedAfterArgs = {
  finishedAfter?: InputMaybe<IntegerSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsflagsArgs = {
  flags?: InputMaybe<IntegerSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsmaximumArgs = {
  get?: InputMaybe<RippleEscrowsMeasureable>;
  of: RippleEscrowsMeasureable;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsminimumArgs = {
  get?: InputMaybe<RippleEscrowsMeasureable>;
  of: RippleEscrowsMeasureable;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowsoperationArgs = {
  operation?: InputMaybe<HashSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowspreviousTxnIdArgs = {
  previousTxnId?: InputMaybe<IntegerSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowspreviousTxnLedgerSeqArgs = {
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowssenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowssourceTagArgs = {
  sourceTag?: InputMaybe<IntegerSelector>;
};


/** Escrows in Ripple blockchain */
export type RippleEscrowstransactionTypeArgs = {
  transactionType?: InputMaybe<TypeSelector>;
};

export type RippleEscrowsFilter = {
  amount?: InputMaybe<IntegerSelector>;
  blockHeight?: InputMaybe<BlockSelector>;
  cancelAfter?: InputMaybe<IntegerSelector>;
  condition?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  destination?: InputMaybe<HashSelector>;
  destinationTag?: InputMaybe<IntegerSelector>;
  finishedAfter?: InputMaybe<IntegerSelector>;
  flags?: InputMaybe<IntegerSelector>;
  operation?: InputMaybe<HashSelector>;
  previousTxnId?: InputMaybe<IntegerSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sender?: InputMaybe<HashSelector>;
  sourceTag?: InputMaybe<IntegerSelector>;
  transactionType?: InputMaybe<TypeSelector>;
};

export enum RippleEscrowsMeasureable {
  /** Number of block in the blockhains */
  block_height = 'block_height',
  /** Currency Address */
  currency_address = 'currency_address',
  /** Currency Symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** The address of the owner (sender) of this held payment */
  sender = 'sender',
  /** Time */
  time = 'time'
}

export enum RippleEscrowsUniq {
  /** Unique Number of block in the blockchains */
  block_height = 'block_height',
  /** Unique date count */
  dates = 'dates',
  /** Unique destination */
  destination = 'destination',
  /** Unique sender */
  sender = 'sender',
  /** Unique time */
  times = 'times'
}

export enum RippleNetwork {
  /** Ripple XRP Ledger */
  ripple = 'ripple'
}

/** Offers in Ripple blockchain */
export type RippleOffers = {
  __typename?: 'RippleOffers';
  any?: Maybe<Scalars['String']>;
  /** Book Directory */
  bookDirectory?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Expiration */
  expiration?: Maybe<Scalars['BigInt']>;
  /** Flags */
  flags?: Maybe<Scalars['BigInt']>;
  /** Block number */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Operation */
  operation?: Maybe<Scalars['String']>;
  /** Sequence */
  sequence?: Maybe<Scalars['Float']>;
  takerGets?: Maybe<Scalars['BigInt']>;
  /** Taker Gets Currency */
  takerGetsCurrency?: Maybe<Currency>;
  takerPays?: Maybe<Scalars['BigInt']>;
  /** Taker Pays Currency */
  takerPaysCurrency?: Maybe<Currency>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Transaction hash */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transaction Sender */
  transactionSender?: Maybe<Scalars['String']>;
  /** Transaction type */
  transactionType?: Maybe<Scalars['String']>;
};


/** Offers in Ripple blockchain */
export type RippleOffersanyArgs = {
  of: RippleOffersMeasureable;
};


/** Offers in Ripple blockchain */
export type RippleOffersbookDirectoryArgs = {
  bookDirectory?: InputMaybe<HashSelector>;
};


/** Offers in Ripple blockchain */
export type RippleOfferscountArgs = {
  uniq?: InputMaybe<RippleOffersUniq>;
};


/** Offers in Ripple blockchain */
export type RippleOfferscountBigIntArgs = {
  uniq?: InputMaybe<RippleOffersUniq>;
};


/** Offers in Ripple blockchain */
export type RippleOffersledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Offers in Ripple blockchain */
export type RippleOffersmaximumArgs = {
  get?: InputMaybe<RippleOffersMeasureable>;
  of: RippleOffersMeasureable;
};


/** Offers in Ripple blockchain */
export type RippleOffersminimumArgs = {
  get?: InputMaybe<RippleOffersMeasureable>;
  of: RippleOffersMeasureable;
};


/** Offers in Ripple blockchain */
export type RippleOfferssequenceArgs = {
  sequence?: InputMaybe<HashSelector>;
};


/** Offers in Ripple blockchain */
export type RippleOfferstakerGetsArgs = {
  account?: InputMaybe<HashSelector>;
  bookDirectory?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  ledger?: InputMaybe<BlockSelector>;
  sequence?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionSender?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<HashSelector>;
};


/** Offers in Ripple blockchain */
export type RippleOfferstakerPaysArgs = {
  account?: InputMaybe<HashSelector>;
  bookDirectory?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  ledger?: InputMaybe<BlockSelector>;
  sequence?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionSender?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<HashSelector>;
};


/** Offers in Ripple blockchain */
export type RippleOfferstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Offers in Ripple blockchain */
export type RippleOfferstransactionSenderArgs = {
  transactionSender?: InputMaybe<HashSelector>;
};


/** Offers in Ripple blockchain */
export type RippleOfferstransactionTypeArgs = {
  transactionType?: InputMaybe<TransactionTypeSelector>;
};

export type RippleOffersFilter = {
  account?: InputMaybe<HashSelector>;
  bookDirectory?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  ledger?: InputMaybe<BlockSelector>;
  sequence?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionSender?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<HashSelector>;
};

export enum RippleOffersMeasureable {
  /** Date */
  date = 'date',
  /** Taker Gets Currency Address */
  taker_gets_currency_address = 'taker_gets_currency_address',
  /** Taker Gets Currency Symbol */
  taker_gets_currency_symbol = 'taker_gets_currency_symbol',
  /** Taker Pays Currency Address */
  taker_pays_currency_address = 'taker_pays_currency_address',
  /** Taker Pays Currency Symbol */
  taker_pays_currency_symbol = 'taker_pays_currency_symbol',
  /** Time */
  time = 'time',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Transaction Sender */
  transaction_sender = 'transaction_sender',
  /** Transaction Type */
  transaction_type = 'transaction_type'
}

export enum RippleOffersUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique time */
  times = 'times',
  /** Uniq transaction hash */
  transaction_hash = 'transaction_hash',
  /** Uniq transaction sender */
  transaction_sender = 'transaction_sender'
}

/** Payments in Ripple blockchain */
export type RipplePayments = {
  __typename?: 'RipplePayments';
  /** Amount Currency */
  amountCurrency?: Maybe<Currency>;
  /** Amount Issuer */
  amountIssuer?: Maybe<Scalars['String']>;
  amountValue?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Delivered min currency */
  deliverMinCurrency?: Maybe<Currency>;
  /** Delivered Min Issuer */
  deliverMinIssuer?: Maybe<Scalars['String']>;
  deliverMinValue?: Maybe<Scalars['Float']>;
  /** Currency of the money sender's transfer */
  deliveredCurrency?: Maybe<Currency>;
  /** Delivered Value */
  deliveredIssuer?: Maybe<Scalars['String']>;
  deliveredValue?: Maybe<Scalars['Float']>;
  /** Flags */
  flags?: Maybe<Scalars['BigInt']>;
  /** Invoice */
  invoice?: Maybe<Scalars['String']>;
  /** Block number */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Partial */
  partial?: Maybe<Scalars['BigInt']>;
  /** Currency of the money sender's transfer */
  sendMaxCurrency?: Maybe<Currency>;
  /** Send Max Issuer */
  sendMaxIssuer?: Maybe<Scalars['String']>;
  sendMaxValue?: Maybe<Scalars['Float']>;
  /** Tag */
  tag?: Maybe<Scalars['BigInt']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Transaction hash */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transfer from */
  transferFrom?: Maybe<Scalars['String']>;
  /** Transfer to */
  transferTo?: Maybe<Scalars['String']>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsamountIssuerArgs = {
  amountIssuer?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsamountValueArgs = {
  amountIssuer?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  deliverIssuer?: InputMaybe<HashSelector>;
  deliverMinIssuer?: InputMaybe<HashSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  ledger?: InputMaybe<BlockSelector>;
  sendMaxIssuer?: InputMaybe<HashSelector>;
  tag?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsanyArgs = {
  of: RipplePaymentsMeasureable;
};


/** Payments in Ripple blockchain */
export type RipplePaymentscountArgs = {
  uniq?: InputMaybe<RipplePaymentsUniq>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentscountBigIntArgs = {
  uniq?: InputMaybe<RipplePaymentsUniq>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsdeliverMinIssuerArgs = {
  deliverMinIssuer?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsdeliverMinValueArgs = {
  amountIssuer?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  deliverIssuer?: InputMaybe<HashSelector>;
  deliverMinIssuer?: InputMaybe<HashSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  ledger?: InputMaybe<BlockSelector>;
  sendMaxIssuer?: InputMaybe<HashSelector>;
  tag?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsdeliveredIssuerArgs = {
  deliveredIssuer?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsdeliveredValueArgs = {
  amountIssuer?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  deliverIssuer?: InputMaybe<HashSelector>;
  deliverMinIssuer?: InputMaybe<HashSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  ledger?: InputMaybe<BlockSelector>;
  sendMaxIssuer?: InputMaybe<HashSelector>;
  tag?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsmaximumArgs = {
  get?: InputMaybe<RipplePaymentsMeasureable>;
  of: RipplePaymentsMeasureable;
};


/** Payments in Ripple blockchain */
export type RipplePaymentsminimumArgs = {
  get?: InputMaybe<RipplePaymentsMeasureable>;
  of: RipplePaymentsMeasureable;
};


/** Payments in Ripple blockchain */
export type RipplePaymentssendMaxIssuerArgs = {
  sendMaxIssuer?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentssendMaxValueArgs = {
  amountIssuer?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  deliverIssuer?: InputMaybe<HashSelector>;
  deliverMinIssuer?: InputMaybe<HashSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  ledger?: InputMaybe<BlockSelector>;
  sendMaxIssuer?: InputMaybe<HashSelector>;
  tag?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentstagArgs = {
  tag?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentstransferFromArgs = {
  transferFrom?: InputMaybe<HashSelector>;
};


/** Payments in Ripple blockchain */
export type RipplePaymentstransferToArgs = {
  transferTo?: InputMaybe<HashSelector>;
};

export type RipplePaymentsFilter = {
  amountIssuer?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  deliverIssuer?: InputMaybe<HashSelector>;
  deliverMinIssuer?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  sendMaxIssuer?: InputMaybe<HashSelector>;
  tag?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};

export enum RipplePaymentsMeasureable {
  /** Amount Currency Address */
  amount_currency_address = 'amount_currency_address',
  /** Amount Currency Symbol */
  amount_currency_symbol = 'amount_currency_symbol',
  /** Amount Value */
  amount_value = 'amount_value',
  /** Date */
  date = 'date',
  /** Delivered Min Currency Address */
  deliver_min_currency_address = 'deliver_min_currency_address',
  /** Delivered Min Currency Symbol */
  deliver_min_currency_symbol = 'deliver_min_currency_symbol',
  /** Delivered Currency Address */
  delivered_currency_address = 'delivered_currency_address',
  /** Delivered Currency Symbol */
  delivered_currency_symbol = 'delivered_currency_symbol',
  /** Send max Currency Address */
  send_max_currency_address = 'send_max_currency_address',
  /** Send max Currency Symbol */
  send_max_currency_symbol = 'send_max_currency_symbol',
  /** Time */
  time = 'time',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash',
  /** Transfer From */
  transfer_from = 'transfer_from',
  /** Transfer To */
  transfer_to = 'transfer_to'
}

export enum RipplePaymentsUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique blocks */
  ledger = 'ledger',
  /** Unique time */
  times = 'times',
  /** Unique transfer from */
  transfer_from = 'transfer_from',
  /** Unique transfer to */
  transfer_to = 'transfer_to'
}

/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStates = {
  __typename?: 'RippleRippleStates';
  any?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  /** Number of block in the blockchains */
  blockHeight?: Maybe<Scalars['BigInt']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** 	A bit-map of boolean flags. No flags are defined for the Escrow type, so this value is always 0. */
  flags?: Maybe<Scalars['String']>;
  /** High Account */
  highAccount?: Maybe<Scalars['String']>;
  /** Low Account */
  lowAccount?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Operation */
  operation?: Maybe<Scalars['String']>;
  /** Previous Balance */
  preBalance?: Maybe<Scalars['BigInt']>;
  /** The identifying hash of the transaction that most recently modified this object. */
  previousTxnId?: Maybe<Scalars['String']>;
  /** The identifying hash of the transaction that most recently modified this object. */
  previousTxnLedgerSeq?: Maybe<Scalars['BigInt']>;
  /** The address of the owner (sender) of this held payment */
  sender?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Type of transaction */
  transactionType?: Maybe<Scalars['String']>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatesanyArgs = {
  of: RippleRippleStatesMeasureable;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatesbalanceArgs = {
  balance?: InputMaybe<IntegerSelector>;
  blockHeight?: InputMaybe<BlockSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  flags?: InputMaybe<IntegerSelector>;
  highAccount?: InputMaybe<HashSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  lowAccount?: InputMaybe<HashSelector>;
  operation?: InputMaybe<StringSelector>;
  preBalance?: InputMaybe<IntegerSelector>;
  previousTxnId?: InputMaybe<IntegerSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sender?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<HashSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatesblockHeightArgs = {
  blockHeight?: InputMaybe<BlockSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatescountArgs = {
  uniq?: InputMaybe<RippleRippleStatesUniq>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatescountBigIntArgs = {
  uniq?: InputMaybe<RippleRippleStatesUniq>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatesflagsArgs = {
  flags?: InputMaybe<IntegerSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStateshighAccountArgs = {
  highAccount?: InputMaybe<HashSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStateslowAccountArgs = {
  lowAccount?: InputMaybe<HashSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatesmaximumArgs = {
  get?: InputMaybe<RippleRippleStatesMeasureable>;
  of: RippleRippleStatesMeasureable;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatesminimumArgs = {
  get?: InputMaybe<RippleRippleStatesMeasureable>;
  of: RippleRippleStatesMeasureable;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatesoperationArgs = {
  operation?: InputMaybe<StringSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatespreBalanceArgs = {
  preBalance?: InputMaybe<HashSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatespreviousTxnIdArgs = {
  previousTxnId?: InputMaybe<IntegerSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatespreviousTxnLedgerSeqArgs = {
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatessenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** The RippleState object type connects two accounts in a single currency */
export type RippleRippleStatestransactionTypeArgs = {
  transactionType?: InputMaybe<TypeSelector>;
};

export enum RippleRippleStatesMeasureable {
  /** Number of block in the blockhains */
  block_height = 'block_height',
  /** Currency Address */
  currency_address = 'currency_address',
  /** Currency Symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** High Account */
  high_account = 'high_account',
  /** Low Account */
  low_account = 'low_account',
  /** The address of the owner (sender) of this held payment */
  sender = 'sender',
  /** Time */
  time = 'time'
}

export enum RippleRippleStatesUniq {
  /** Unique Number of block in the blockchains */
  block_height = 'block_height',
  /** Unique currencies */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique High Account */
  high_account = 'high_account',
  /** Unique Lower Account */
  lower_account = 'lower_account',
  /** Unique sender */
  sender = 'sender',
  /** Unique time */
  times = 'times'
}

export type RippleStatesFilter = {
  balance?: InputMaybe<IntegerSelector>;
  blockHeight?: InputMaybe<BlockSelector>;
  date?: InputMaybe<DateSelector>;
  flags?: InputMaybe<IntegerSelector>;
  highAccount?: InputMaybe<HashSelector>;
  lowAccount?: InputMaybe<HashSelector>;
  operation?: InputMaybe<StringSelector>;
  preBalance?: InputMaybe<IntegerSelector>;
  previousTxnId?: InputMaybe<IntegerSelector>;
  previousTxnLedgerSeq?: InputMaybe<IntegerSelector>;
  sender?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<HashSelector>;
};

/** Transactions in Ripple blockchain */
export type RippleTransactions = {
  __typename?: 'RippleTransactions';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** A transactions Flags field can contain flags that apply at different levels or contexts. */
  flags?: Maybe<Scalars['BigInt']>;
  /** Index in ledger */
  indexInLedger?: Maybe<Scalars['BigInt']>;
  /** Highest ledger index this transaction can appear in. */
  lastLedgerSequence?: Maybe<Scalars['Float']>;
  /** Block number */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  /** Additional arbitrary information used to identify this transaction. */
  memos?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Result */
  result?: Maybe<Scalars['String']>;
  /** Transaction Sender */
  sender?: Maybe<Scalars['String']>;
  /** The sequence number of the account sending the transaction. */
  sequence?: Maybe<Scalars['Float']>;
  /** Successful of not */
  status?: Maybe<Scalars['Boolean']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Transaction fee */
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction hash */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transaction type */
  transactionType?: Maybe<Scalars['String']>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionsanyArgs = {
  of: RippleTransactionsMeasureable;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionscountArgs = {
  uniq?: InputMaybe<RippleTransactionsUniq>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionscountBigIntArgs = {
  uniq?: InputMaybe<RippleTransactionsUniq>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionslastLedgerSequenceArgs = {
  lastLedgerSequence?: InputMaybe<HashSelector>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionsledgerArgs = {
  ledger?: InputMaybe<BlockSelector>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionsmaximumArgs = {
  get?: InputMaybe<RippleTransactionsMeasureable>;
  of: RippleTransactionsMeasureable;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionsminimumArgs = {
  get?: InputMaybe<RippleTransactionsMeasureable>;
  of: RippleTransactionsMeasureable;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionsresultArgs = {
  result?: InputMaybe<HashSelector>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionssenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionssequenceArgs = {
  sequence?: InputMaybe<HashSelector>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionsstatusArgs = {
  status?: InputMaybe<Scalars['Boolean']>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionstransactionFeeArgs = {
  transactionFee?: InputMaybe<HashSelector>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transactions in Ripple blockchain */
export type RippleTransactionstransactionTypeArgs = {
  transactionType?: InputMaybe<TransactionTypeSelector>;
};

export type RippleTransactionsFilter = {
  date?: InputMaybe<DateSelector>;
  lastLedgerSequence?: InputMaybe<HashSelector>;
  ledger?: InputMaybe<BlockSelector>;
  result?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  sequence?: InputMaybe<HashSelector>;
  status?: InputMaybe<Scalars['Boolean']>;
  transactionFee?: InputMaybe<TransactionTypeSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<TransactionTypeSelector>;
};

export enum RippleTransactionsMeasureable {
  /** Date */
  date = 'date',
  /** Transaction sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transaction Fee */
  transaction_fee = 'transaction_fee',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash'
}

export enum RippleTransactionsUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique ledger count */
  ledger = 'ledger',
  /** Unique sender count */
  sender = 'sender',
  /** Unique time */
  times = 'times'
}

/** Transfers in Ripple blockchain */
export type RippleTransfers = {
  __typename?: 'RippleTransfers';
  any?: Maybe<Scalars['String']>;
  /** Number of block in the blockchains */
  blockHeight?: Maybe<Scalars['BigInt']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of the money sender's transfer */
  currencyFrom?: Maybe<Currency>;
  /** Currency of the money receiver's transfer */
  currencyTo?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The sender of the Check. Cashing the Check debits this address`s balance. */
  sender?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Transaction Hash */
  transactionHash?: Maybe<Scalars['String']>;
  /** Transfer From */
  transferFrom?: Maybe<Scalars['String']>;
  /** Transfer To */
  transferTo?: Maybe<Scalars['String']>;
  valueFrom?: Maybe<Scalars['Float']>;
  valueTo?: Maybe<Scalars['Float']>;
};


/** Transfers in Ripple blockchain */
export type RippleTransfersanyArgs = {
  of: RippleTransfersMeasureable;
};


/** Transfers in Ripple blockchain */
export type RippleTransfersblockHeightArgs = {
  blockHeight?: InputMaybe<BlockSelector>;
};


/** Transfers in Ripple blockchain */
export type RippleTransferscountArgs = {
  uniq?: InputMaybe<RippleTransfersUniq>;
};


/** Transfers in Ripple blockchain */
export type RippleTransferscountBigIntArgs = {
  uniq?: InputMaybe<RippleTransfersUniq>;
};


/** Transfers in Ripple blockchain */
export type RippleTransfersmaximumArgs = {
  get?: InputMaybe<RippleTransfersMeasureable>;
  of: RippleTransfersMeasureable;
};


/** Transfers in Ripple blockchain */
export type RippleTransfersminimumArgs = {
  get?: InputMaybe<RippleTransfersMeasureable>;
  of: RippleTransfersMeasureable;
};


/** Transfers in Ripple blockchain */
export type RippleTransferssenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** Transfers in Ripple blockchain */
export type RippleTransferstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transfers in Ripple blockchain */
export type RippleTransferstransferFromArgs = {
  transferFrom?: InputMaybe<HashSelector>;
};


/** Transfers in Ripple blockchain */
export type RippleTransferstransferToArgs = {
  transferTo?: InputMaybe<HashSelector>;
};


/** Transfers in Ripple blockchain */
export type RippleTransfersvalueFromArgs = {
  blockHeight?: InputMaybe<BlockSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  sender?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<StringSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};


/** Transfers in Ripple blockchain */
export type RippleTransfersvalueToArgs = {
  blockHeight?: InputMaybe<BlockSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  sender?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<StringSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};

export type RippleTransfersFilter = {
  blockHeight?: InputMaybe<BlockSelector>;
  date?: InputMaybe<DateSelector>;
  sender?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
  transactionType?: InputMaybe<StringSelector>;
  transferFrom?: InputMaybe<HashSelector>;
  transferTo?: InputMaybe<HashSelector>;
};

export enum RippleTransfersMeasureable {
  /** Number of block in the blockhains */
  block_height = 'block_height',
  /** Currency Address of the money sender`s transfer */
  currency_from_address = 'currency_from_address',
  /** Currency Symbol of the money sender`s transfer */
  currency_from_symbol = 'currency_from_symbol',
  /** Currency Address of the money receiver`s trasfer */
  currency_to_address = 'currency_to_address',
  /** Currency Symbol of the money receiver`s transfer */
  currency_to_symbol = 'currency_to_symbol',
  /** Date */
  date = 'date',
  /** The sender of the payment */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transfer From */
  transfer_from = 'transfer_from',
  /** Transfer To */
  transfer_to = 'transfer_to',
  /** Value From */
  value_from = 'value_from',
  /** Value To */
  value_to = 'value_to'
}

export enum RippleTransfersUniq {
  /** Unique Number of block in the blockchains */
  block_height = 'block_height',
  /** Unique currencies */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique destination */
  destination = 'destination',
  /** Unique sender */
  sender = 'sender',
  /** Unique time */
  times = 'times'
}

export enum RippleccountRootsMeasureable {
  /** The identifying (classic) address of this account. */
  account = 'account',
  /** Number of block in the blockhains */
  block_height = 'block_height',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time'
}

export enum ScriptTypeSelectorSelector {
  /** Peer-to-peer */
  peer_to_peer_transaction = 'peer_to_peer_transaction',
  /** Unknown Transaction */
  unknown_transaction = 'unknown_transaction'
}

/** Solana Sender */
export type Sender = {
  __typename?: 'Sender';
  address: Scalars['String'];
  mintAccount: Scalars['String'];
  type: Scalars['String'];
};

/** Smart contract method or event */
export type Signature = Event | Method;

export enum SignatureTypeSelector {
  /** Smart contract event */
  Event = 'Event',
  /** Smart contract method */
  Function = 'Function'
}

/** Blockchain smart contract */
export type SmartContract = {
  __typename?: 'SmartContract';
  /** String address representation */
  address?: Maybe<Scalars['String']>;
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract Type */
  contractType: SmartContractType;
  /** Smart Contract Protocol Type */
  protocol?: Maybe<Scalars['String']>;
};

export enum SmartContractArgumentsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique callers count */
  callers = 'callers',
  /** Calls or events */
  calls = 'calls',
  /** Unique date count */
  dates = 'dates',
  /** Unique transaction senders */
  senders = 'senders',
  /** Unique signatures count */
  signatures = 'signatures',
  /** Unique smart contracts count */
  smart_contracts = 'smart_contracts',
  /** Unique transactions count */
  txs = 'txs',
  /** Unique values */
  values = 'values'
}

export enum SmartContractCallsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique callers count */
  callers = 'callers',
  /** Calls */
  calls = 'calls',
  /** Unique date count */
  dates = 'dates',
  /** Unique transaction senders */
  senders = 'senders',
  /** Unique smart contract methods count */
  smart_contract_methods = 'smart_contract_methods',
  /** Unique smart contracts count */
  smart_contracts = 'smart_contracts',
  /** Unique transactions count */
  txs = 'txs'
}

export enum SmartContractEventsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates',
  /** Unique smart contract methods count */
  smart_contract_methods = 'smart_contract_methods',
  /** Unique smart contracts count */
  smart_contracts = 'smart_contracts',
  /** Unique transaction senders */
  tx_from = 'tx_from',
  /** Unique callers count */
  tx_to = 'tx_to',
  /** Unique transactions count */
  txs = 'txs'
}

export type SmartContractReadonlyAttribute = {
  __typename?: 'SmartContractReadonlyAttribute';
  /** Value as address if applicable */
  address?: Maybe<EthereumAddressInfo>;
  /** Method name */
  name: Scalars['String'];
  /** Method return type */
  type: Scalars['String'];
  /** Method return value */
  value: Scalars['String'];
};

export enum SmartContractType {
  /** Decentralized exchange */
  DEX = 'DEX',
  /** General Purpose Smart contract */
  Generic = 'Generic',
  /** Smart contract for token derivatives */
  MarginPositionToken = 'MarginPositionToken',
  /** Multi signature wallet */
  Multisig = 'Multisig',
  /** Not A Smart contract */
  None = 'None',
  /** Transaction Execution Approval Language */
  TEAL = 'TEAL',
  /** Token */
  Token = 'Token',
  /** Token Sale */
  TokenSale = 'TokenSale'
}

/** Selector of smart contract type */
export type SmartContractTypeSelector = {
  /** Smart Contract type in the list */
  in?: InputMaybe<Array<SmartContractType>>;
  /** Smart Contract type is */
  is?: InputMaybe<SmartContractType>;
  /** Smart Contract type not */
  not?: InputMaybe<SmartContractType>;
  /** Smart Contract type not in the list */
  notIn?: InputMaybe<Array<SmartContractType>>;
};

/** Solana Chain */
export type Solana = {
  __typename?: 'Solana';
  /** BlockRewards of Smart Contract Calls and Events */
  blockRewards?: Maybe<Array<SolanaBlockReward>>;
  /** Solana Blocks */
  blocks?: Maybe<Array<SolanaBlock>>;
  /**
   * Each instruction specifies a single program, a subset of the transaction`s accounts
   *         that should be passed to the program.
   */
  instructionAccounts?: Maybe<Array<SolanaInstructionAccount>>;
  /**
   * Each instruction specifies a single program, a subset of the transaction`s accounts
   *         that should be passed to the program.
   */
  instructions?: Maybe<Array<SolanaInstruction>>;
  /** Solana Transaction */
  transactions?: Maybe<Array<SolanaTransaction>>;
  /** Currency transfers from/to addresses in crypto currencies */
  transfers?: Maybe<Array<SolanaTransfer>>;
};


/** Solana Chain */
export type SolanablockRewardsArgs = {
  account?: InputMaybe<StringSelector>;
  any?: InputMaybe<Array<SolanaBlockRewardFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  parentSlot?: InputMaybe<IntegerSelector>;
  postBalance?: InputMaybe<AmountSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  reward?: InputMaybe<AmountSelector>;
  rewardType?: InputMaybe<RewardTypeSelector>;
};


/** Solana Chain */
export type SolanablocksArgs = {
  any?: InputMaybe<Array<SolanaBlockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  parentSlot?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  rewards?: InputMaybe<AmountSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Solana Chain */
export type SolanainstructionAccountsArgs = {
  account?: InputMaybe<StringSelector>;
  accountIndex?: InputMaybe<IntegerSelector>;
  accountOwner?: InputMaybe<StringSelector>;
  accountType?: InputMaybe<StringSelector>;
  any?: InputMaybe<Array<SolanaInstructionAccountFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  callPath?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<IntegerSelector>;
  fee?: InputMaybe<IntegerSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  parsed?: InputMaybe<IntegerSelector>;
  parsedActionName?: InputMaybe<StringSelector>;
  parsedProgramName?: InputMaybe<StringSelector>;
  parsedType?: InputMaybe<StringSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  programId?: InputMaybe<StringSelector>;
  signature?: InputMaybe<StringSelector>;
  success?: InputMaybe<BooleanSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
};


/** Solana Chain */
export type SolanainstructionsArgs = {
  any?: InputMaybe<Array<SolanaInstructionFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  callPath?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<IntegerSelector>;
  externalParsed?: InputMaybe<IntegerSelector>;
  externalParsedActionName?: InputMaybe<StringSelector>;
  externalParsedProgramName?: InputMaybe<StringSelector>;
  externalParsedType?: InputMaybe<StringSelector>;
  externalProgramId?: InputMaybe<StringSelector>;
  fee?: InputMaybe<IntegerSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  parsed?: InputMaybe<IntegerSelector>;
  parsedActionName?: InputMaybe<StringSelector>;
  parsedProgramName?: InputMaybe<StringSelector>;
  parsedType?: InputMaybe<StringSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  programId?: InputMaybe<StringSelector>;
  signature?: InputMaybe<StringSelector>;
  success?: InputMaybe<BooleanSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
};


/** Solana Chain */
export type SolanatransactionsArgs = {
  accountsCount?: InputMaybe<IntegerSelector>;
  any?: InputMaybe<Array<SolanaTransactionFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  fee?: InputMaybe<IntegerSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  innerInstructionsCount?: InputMaybe<IntegerSelector>;
  instructionsCount?: InputMaybe<IntegerSelector>;
  options?: InputMaybe<QueryOptions>;
  parentSlot?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  recentBlockHash?: InputMaybe<HashSelector>;
  signature?: InputMaybe<HashSelector>;
  signer?: InputMaybe<HashSelector>;
  success?: InputMaybe<BooleanSelector>;
  transactionFee?: InputMaybe<AmountSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
};


/** Solana Chain */
export type SolanatransfersArgs = {
  any?: InputMaybe<Array<SolanaTransferFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  callPath?: InputMaybe<StringSelector>;
  currency?: InputMaybe<Array<SolanaCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<StringSelector>;
  externalParsed?: InputMaybe<IntegerSelector>;
  externalParsedActionName?: InputMaybe<StringSelector>;
  externalParsedProgramName?: InputMaybe<StringSelector>;
  externalParsedType?: InputMaybe<StringSelector>;
  externalProgramId?: InputMaybe<StringSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  parsed?: InputMaybe<IntegerSelector>;
  parsedActionName?: InputMaybe<StringSelector>;
  parsedProgramName?: InputMaybe<StringSelector>;
  parsedType?: InputMaybe<StringSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  programId?: InputMaybe<StringSelector>;
  receiverAddress?: InputMaybe<StringSelector>;
  receiverType?: InputMaybe<StringSelector>;
  recentBlockHash?: InputMaybe<HashSelector>;
  senderAddress?: InputMaybe<StringSelector>;
  senderType?: InputMaybe<StringSelector>;
  signature?: InputMaybe<HashSelector>;
  success?: InputMaybe<BooleanSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
  transferType?: InputMaybe<SolanaTransferTypeSelector>;
};

/** Solana Account */
export type SolanaAccount = {
  __typename?: 'SolanaAccount';
  index: Scalars['Int'];
  name: Scalars['String'];
  owner: Scalars['String'];
  type: Scalars['String'];
};

/** Block in Solana  blockchain */
export type SolanaBlock = {
  __typename?: 'SolanaBlock';
  any?: Maybe<Scalars['String']>;
  /** Hash of the the block */
  blockHash?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Number of block in the blockchains */
  height?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** The slot index of this block`s parent */
  parentSlot?: Maybe<Scalars['BigInt']>;
  /** The block hash of this block`s parent */
  previousBlockHash?: Maybe<Scalars['String']>;
  rewards?: Maybe<Scalars['Float']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Count of transactions in this block */
  transactionCount?: Maybe<Scalars['Int']>;
};


/** Block in Solana  blockchain */
export type SolanaBlockanyArgs = {
  of: SolanaBlockMeasureable;
};


/** Block in Solana  blockchain */
export type SolanaBlockblockHashArgs = {
  blockHash?: InputMaybe<HashSelector>;
};


/** Block in Solana  blockchain */
export type SolanaBlockcountArgs = {
  uniq?: InputMaybe<SolanaBlockUniq>;
};


/** Block in Solana  blockchain */
export type SolanaBlockcountBigIntArgs = {
  uniq?: InputMaybe<SolanaBlockUniq>;
};


/** Block in Solana  blockchain */
export type SolanaBlockheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Block in Solana  blockchain */
export type SolanaBlockmaximumArgs = {
  get?: InputMaybe<SolanaBlockMeasureable>;
  of: SolanaBlockMeasureable;
};


/** Block in Solana  blockchain */
export type SolanaBlockminimumArgs = {
  get?: InputMaybe<SolanaBlockMeasureable>;
  of: SolanaBlockMeasureable;
};


/** Block in Solana  blockchain */
export type SolanaBlockparentSlotArgs = {
  parentSlot?: InputMaybe<IntegerSelector>;
};


/** Block in Solana  blockchain */
export type SolanaBlockpreviousBlockHashArgs = {
  previousBlockHash?: InputMaybe<HashSelector>;
};


/** Block in Solana  blockchain */
export type SolanaBlockrewardsArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  parentSlot?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  rewards?: InputMaybe<AmountSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};


/** Block in Solana  blockchain */
export type SolanaBlocktransactionCountArgs = {
  transactionCount?: InputMaybe<IntegerSelector>;
};

export type SolanaBlockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  parentSlot?: InputMaybe<IntegerSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  rewards?: InputMaybe<AmountSelector>;
  transactionCount?: InputMaybe<IntegerSelector>;
};

/** Solana Block Info */
export type SolanaBlockInfo = {
  __typename?: 'SolanaBlockInfo';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  parentSlot?: Maybe<Scalars['BigInt']>;
  previousBlockHash?: Maybe<Scalars['String']>;
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
};

export enum SolanaBlockMeasureable {
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Number of block in the blockhains */
  height = 'height',
  /** The slot index of this block`s parent */
  parent_slot = 'parent_slot',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Number of reward lamports credited or debited by the account */
  rewards = 'rewards',
  /** Time */
  time = 'time',
  /** Count of transactions in this block */
  transaction_count = 'transaction_count'
}

/** BlockReward in Solana  blockchain */
export type SolanaBlockReward = {
  __typename?: 'SolanaBlockReward';
  /** Account */
  account?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where  transaction is included */
  block?: Maybe<SolanaBlockInfo>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  postBalance?: Maybe<Scalars['Float']>;
  /** Type of reward */
  rewardType?: Maybe<Scalars['String']>;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardaccountArgs = {
  account?: InputMaybe<BlockSelector>;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardamountArgs = {
  account?: InputMaybe<StringSelector>;
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  parentSlot?: InputMaybe<IntegerSelector>;
  postBalance?: InputMaybe<AmountSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  reward?: InputMaybe<AmountSelector>;
  rewardType?: InputMaybe<RewardTypeSelector>;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardanyArgs = {
  of: SolanaBlockRewardMeasureable;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardblockArgs = {
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardcountArgs = {
  uniq?: InputMaybe<SolanaBlockRewardUniq>;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardcountBigIntArgs = {
  uniq?: InputMaybe<SolanaBlockRewardUniq>;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardmaximumArgs = {
  get?: InputMaybe<SolanaBlockRewardMeasureable>;
  of: SolanaBlockRewardMeasureable;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardminimumArgs = {
  get?: InputMaybe<SolanaBlockRewardMeasureable>;
  of: SolanaBlockRewardMeasureable;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardpostBalanceArgs = {
  account?: InputMaybe<StringSelector>;
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  parentSlot?: InputMaybe<IntegerSelector>;
  postBalance?: InputMaybe<AmountSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  reward?: InputMaybe<AmountSelector>;
  rewardType?: InputMaybe<RewardTypeSelector>;
};


/** BlockReward in Solana  blockchain */
export type SolanaBlockRewardrewardTypeArgs = {
  rewardType?: InputMaybe<RewardTypeSelector>;
};

export type SolanaBlockRewardFilter = {
  account?: InputMaybe<StringSelector>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  parentSlot?: InputMaybe<IntegerSelector>;
  postBalance?: InputMaybe<AmountSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  reward?: InputMaybe<AmountSelector>;
  rewardType?: InputMaybe<RewardTypeSelector>;
};

export enum SolanaBlockRewardMeasureable {
  /** Account */
  account = 'account',
  /** Number of reward lamports credited or debited by the account */
  amount = 'amount',
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Number of block in the blockhains */
  height = 'height',
  /** The slot index of this block`s parent */
  parent_slot = 'parent_slot',
  /** Account balances after the transaction was processed */
  post_balance = 'post_balance',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Time */
  time = 'time'
}

export enum SolanaBlockRewardUniq {
  /** Unique accounts */
  account = 'account',
  /** Unique hash of the the block */
  block_hash = 'block_hash',
  /** Unique currencies */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique time */
  times = 'times'
}

export enum SolanaBlockUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique Number of block in the blockchains */
  height = 'height',
  /** Unique time */
  times = 'times'
}

/** Currency is defined by a mint address. Solana coin defined as 'SOL'. You can use filter bby symbol, bbut it only works if there is just one token with that symbol */
export type SolanaCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Instruction in Solana  blockchain */
export type SolanaInstruction = {
  __typename?: 'SolanaInstruction';
  /** Accounts count */
  accountsCount?: Maybe<Scalars['Int']>;
  /** Action */
  action?: Maybe<Action>;
  any?: Maybe<Scalars['String']>;
  /** Block where  transaction is included */
  block?: Maybe<SolanaBlockInfo>;
  /** Call Path */
  callPath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Instruction Data */
  data?: Maybe<Data>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** External */
  external?: Maybe<Scalars['Boolean']>;
  /** External Action */
  externalAction?: Maybe<Action>;
  /** External Program */
  externalProgram?: Maybe<Program>;
  log?: Maybe<Log>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Program */
  program?: Maybe<Program>;
  /** Transaction where instruction is included */
  transaction?: Maybe<SolanaTransactionInfo>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionactionArgs = {
  parsedActionName?: InputMaybe<StringSelector>;
  parsedType?: InputMaybe<StringSelector>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionanyArgs = {
  of: SolanaInstructionMeasureable;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionblockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructioncallPathArgs = {
  callPath?: InputMaybe<StringSelector>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructioncountArgs = {
  uniq?: InputMaybe<SolanaInstructionUniq>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructioncountBigIntArgs = {
  uniq?: InputMaybe<SolanaInstructionUniq>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructiondataArgs = {
  dataBase58?: InputMaybe<StringSelector>;
  dataHex?: InputMaybe<StringSelector>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionexternalArgs = {
  external?: InputMaybe<BooleanSelector>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionexternalActionArgs = {
  externalParsedActionName?: InputMaybe<StringSelector>;
  externalParsedType?: InputMaybe<StringSelector>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionexternalProgramArgs = {
  externalParsedProgramName?: InputMaybe<StringSelector>;
  externalProgramId?: InputMaybe<StringSelector>;
  externalProgramName?: InputMaybe<StringSelector>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionmaximumArgs = {
  get?: InputMaybe<SolanaInstructionMeasureable>;
  of: SolanaInstructionMeasureable;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionminimumArgs = {
  get?: InputMaybe<SolanaInstructionMeasureable>;
  of: SolanaInstructionMeasureable;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructionprogramArgs = {
  parsedProgramName?: InputMaybe<StringSelector>;
  programId?: InputMaybe<StringSelector>;
  programName?: InputMaybe<StringSelector>;
};


/** Instruction in Solana  blockchain */
export type SolanaInstructiontransactionArgs = {
  signature?: InputMaybe<HashSelector>;
};

/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccount = {
  __typename?: 'SolanaInstructionAccount';
  /** Information about account */
  account?: Maybe<SolanaAccount>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<SolanaBlockInfo>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Instruction */
  instruction?: Maybe<Instruction>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Transaction */
  transaction?: Maybe<SolanaTransactionInfo>;
};


/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccountaccountArgs = {
  accountIndex?: InputMaybe<IntegerSelector>;
  accountName?: InputMaybe<StringSelector>;
  accountOwner?: InputMaybe<StringSelector>;
  accountType?: InputMaybe<StringSelector>;
};


/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccountanyArgs = {
  of: SolanaInstructionAccountMeasureable;
};


/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccountblockArgs = {
  blockHash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccountcountArgs = {
  uniq?: InputMaybe<SolanaInstructionAccountUniq>;
};


/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccountcountBigIntArgs = {
  uniq?: InputMaybe<SolanaInstructionAccountUniq>;
};


/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccountmaximumArgs = {
  get?: InputMaybe<SolanaInstructionAccountMeasureable>;
  of: SolanaInstructionAccountMeasureable;
};


/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccountminimumArgs = {
  get?: InputMaybe<SolanaInstructionAccountMeasureable>;
  of: SolanaInstructionAccountMeasureable;
};


/** InstructionAccount in Solana  blockchain */
export type SolanaInstructionAccounttransactionArgs = {
  signature?: InputMaybe<HashSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
};

export type SolanaInstructionAccountFilter = {
  account?: InputMaybe<StringSelector>;
  accountIndex?: InputMaybe<IntegerSelector>;
  accountOwner?: InputMaybe<StringSelector>;
  accountType?: InputMaybe<StringSelector>;
  blockHash?: InputMaybe<HashSelector>;
  callPath?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<IntegerSelector>;
  fee?: InputMaybe<IntegerSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  parsed?: InputMaybe<IntegerSelector>;
  parsedActionName?: InputMaybe<StringSelector>;
  parsedProgramName?: InputMaybe<StringSelector>;
  parsedType?: InputMaybe<StringSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  programId?: InputMaybe<StringSelector>;
  signature?: InputMaybe<StringSelector>;
  success?: InputMaybe<BooleanSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
};

export enum SolanaInstructionAccountMeasureable {
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Number of block in the blockhains */
  height = 'height',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Transaction Hash */
  signature = 'signature',
  /** Time */
  time = 'time'
}

export enum SolanaInstructionAccountUniq {
  /** Account name */
  account_name = 'account_name',
  /** Unique date count */
  dates = 'dates',
  /** Number of block in the blockchains */
  height = 'height',
  /** Transaction Hash */
  signature = 'signature',
  /** Unique time */
  times = 'times'
}

export type SolanaInstructionFilter = {
  blockHash?: InputMaybe<HashSelector>;
  callPath?: InputMaybe<StringSelector>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<IntegerSelector>;
  externalParsed?: InputMaybe<IntegerSelector>;
  externalParsedActionName?: InputMaybe<StringSelector>;
  externalParsedProgramName?: InputMaybe<StringSelector>;
  externalParsedType?: InputMaybe<StringSelector>;
  externalProgramId?: InputMaybe<StringSelector>;
  fee?: InputMaybe<IntegerSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  parsed?: InputMaybe<IntegerSelector>;
  parsedActionName?: InputMaybe<StringSelector>;
  parsedProgramName?: InputMaybe<StringSelector>;
  parsedType?: InputMaybe<StringSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  programId?: InputMaybe<StringSelector>;
  signature?: InputMaybe<StringSelector>;
  success?: InputMaybe<BooleanSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
};

export enum SolanaInstructionMeasureable {
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Transaction Fee */
  fee = 'fee',
  /** Number of block in the blockhains */
  height = 'height',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Transaction Hash */
  signature = 'signature',
  /** Time */
  time = 'time'
}

export enum SolanaInstructionUniq {
  /** Unique date count */
  dates = 'dates',
  /** Number of block in the blockchains */
  height = 'height',
  /** Transaction Hash */
  signature = 'signature',
  /** Unique time */
  times = 'times'
}

export enum SolanaNetwork {
  /** Solana Mainnat */
  solana = 'solana'
}

export enum SolanaRewardType {
  /** fee type */
  Fee = 'Fee',
  /** rent type */
  Rent = 'Rent',
  /** staking type */
  Staking = 'Staking',
  /** voing type */
  Voting = 'Voting'
}

/** Transaction in Solana  blockchain */
export type SolanaTransaction = {
  __typename?: 'SolanaTransaction';
  /** Count of inner instructions */
  accountsCount?: Maybe<Scalars['Int']>;
  any?: Maybe<Scalars['String']>;
  /** Block where  transaction is included */
  block?: Maybe<SolanaBlockInfo>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Error */
  error?: Maybe<Scalars['String']>;
  /** Fee Payer */
  feePayer?: Maybe<Scalars['String']>;
  /** Count of inner instructions */
  innerInstructionsCount?: Maybe<Scalars['Int']>;
  /** Count of instructions */
  instructionsCount?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Recent blockhash prevents duplication and to give transactions lifetimes */
  recentBlockHash?: Maybe<Scalars['String']>;
  /** Transaction Hash */
  signature?: Maybe<Scalars['String']>;
  /** Accounts` public keys */
  signer?: Maybe<Scalars['String']>;
  /** Successed or failed */
  success?: Maybe<Scalars['Boolean']>;
  transactionFee?: Maybe<Scalars['Float']>;
  /** Transaction Index */
  transactionIndex?: Maybe<Scalars['Int']>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionaccountsCountArgs = {
  accountsCount?: InputMaybe<IntegerSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionanyArgs = {
  of: SolanaTransactionMeasureable;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionblockArgs = {
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactioncountArgs = {
  uniq?: InputMaybe<SolanaTransactionUniq>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactioncountBigIntArgs = {
  uniq?: InputMaybe<SolanaTransactionUniq>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionerrorArgs = {
  error?: InputMaybe<StringSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionfeePayerArgs = {
  feePayer?: InputMaybe<HashSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactioninnerInstructionsCountArgs = {
  innerInstructionsCount?: InputMaybe<IntegerSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactioninstructionsCountArgs = {
  instructionsCount?: InputMaybe<IntegerSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionmaximumArgs = {
  get?: InputMaybe<SolanaTransactionMeasureable>;
  of: SolanaTransactionMeasureable;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionminimumArgs = {
  get?: InputMaybe<SolanaTransactionMeasureable>;
  of: SolanaTransactionMeasureable;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionrecentBlockHashArgs = {
  recentBlockHash?: InputMaybe<HashSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionsignatureArgs = {
  signature?: InputMaybe<HashSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionsignerArgs = {
  signer?: InputMaybe<HashSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactionsuccessArgs = {
  success?: InputMaybe<BooleanSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactiontransactionFeeArgs = {
  accountsCount?: InputMaybe<IntegerSelector>;
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  fee?: InputMaybe<IntegerSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  innerInstructionsCount?: InputMaybe<IntegerSelector>;
  instructionsCount?: InputMaybe<IntegerSelector>;
  parentSlot?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  recentBlockHash?: InputMaybe<HashSelector>;
  signature?: InputMaybe<HashSelector>;
  signer?: InputMaybe<HashSelector>;
  success?: InputMaybe<BooleanSelector>;
  transactionFee?: InputMaybe<AmountSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
};


/** Transaction in Solana  blockchain */
export type SolanaTransactiontransactionIndexArgs = {
  transactionIndex?: InputMaybe<IntegerSelector>;
};

export type SolanaTransactionFilter = {
  accountsCount?: InputMaybe<IntegerSelector>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  fee?: InputMaybe<IntegerSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  innerInstructionsCount?: InputMaybe<IntegerSelector>;
  instructionsCount?: InputMaybe<IntegerSelector>;
  parentSlot?: InputMaybe<BlockSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  recentBlockHash?: InputMaybe<HashSelector>;
  signature?: InputMaybe<HashSelector>;
  signer?: InputMaybe<HashSelector>;
  success?: InputMaybe<BooleanSelector>;
  transactionFee?: InputMaybe<AmountSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
};

/** Solana Transaction Info */
export type SolanaTransactionInfo = {
  __typename?: 'SolanaTransactionInfo';
  feePayer?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  transactionIndex?: Maybe<Scalars['BigInt']>;
};

/** Solana Transaction Info Extended */
export type SolanaTransactionInfoExt = {
  __typename?: 'SolanaTransactionInfoExt';
  accountsCount?: Maybe<Scalars['Int']>;
  error?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  feePayer?: Maybe<Scalars['String']>;
  innerInstructionsCount?: Maybe<Scalars['Int']>;
  instructionsCount?: Maybe<Scalars['Int']>;
  recentBlockHash?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  signer?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  transactionIndex?: Maybe<Scalars['BigInt']>;
};

export enum SolanaTransactionMeasureable {
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Transaction Fee */
  fee = 'fee',
  /** Number of block in the blockhains */
  height = 'height',
  /** The slot index of this block`s parent */
  parent_slot = 'parent_slot',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Transaction Hash */
  signature = 'signature',
  /** Time */
  time = 'time',
  /** Transaction Fee */
  transaction_fee = 'transaction_fee'
}

export enum SolanaTransactionUniq {
  /** Unique date count */
  dates = 'dates',
  /** Number of block in the blockchains */
  height = 'height',
  /** Transaction Hash */
  signature = 'signature',
  /** Accounts` public key */
  signer = 'signer',
  /** Unique time */
  times = 'times'
}

/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransfer = {
  __typename?: 'SolanaTransfer';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<SolanaBlockInfo>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Instruction where transfer is included */
  instruction?: Maybe<InstructionWithExternals>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver */
  receiver?: Maybe<Receiver>;
  /** Sender */
  sender?: Maybe<Sender>;
  /** Transaction where transfer is included */
  transaction?: Maybe<SolanaTransactionInfoExt>;
  /** Transfer Type */
  transferType?: Maybe<Scalars['String']>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransferamountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  callPath?: InputMaybe<StringSelector>;
  currency?: InputMaybe<Array<SolanaCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<StringSelector>;
  externalParsed?: InputMaybe<IntegerSelector>;
  externalParsedActionName?: InputMaybe<StringSelector>;
  externalParsedProgramName?: InputMaybe<StringSelector>;
  externalParsedType?: InputMaybe<StringSelector>;
  externalProgramId?: InputMaybe<StringSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  parsed?: InputMaybe<IntegerSelector>;
  parsedActionName?: InputMaybe<StringSelector>;
  parsedProgramName?: InputMaybe<StringSelector>;
  parsedType?: InputMaybe<StringSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  programId?: InputMaybe<StringSelector>;
  receiverAddress?: InputMaybe<StringSelector>;
  receiverType?: InputMaybe<StringSelector>;
  recentBlockHash?: InputMaybe<HashSelector>;
  senderAddress?: InputMaybe<StringSelector>;
  senderType?: InputMaybe<StringSelector>;
  signature?: InputMaybe<HashSelector>;
  success?: InputMaybe<BooleanSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
  transferType?: InputMaybe<SolanaTransferTypeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransferanyArgs = {
  of: SolanaTransferMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransferblockArgs = {
  hash?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransfercountArgs = {
  uniq?: InputMaybe<SolanaTransferUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransfercountBigIntArgs = {
  uniq?: InputMaybe<SolanaTransferUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransfermaximumArgs = {
  get?: InputMaybe<SolanaTransferMeasureable>;
  of: SolanaTransferMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransferminimumArgs = {
  get?: InputMaybe<SolanaTransferMeasureable>;
  of: SolanaTransferMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransfertransactionArgs = {
  signature?: InputMaybe<HashSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type SolanaTransfertransferTypeArgs = {
  transferType?: InputMaybe<SolanaTransferTypeSelector>;
};

export type SolanaTransferFilter = {
  blockHash?: InputMaybe<HashSelector>;
  callPath?: InputMaybe<StringSelector>;
  currency?: InputMaybe<Array<SolanaCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<StringSelector>;
  externalParsed?: InputMaybe<IntegerSelector>;
  externalParsedActionName?: InputMaybe<StringSelector>;
  externalParsedProgramName?: InputMaybe<StringSelector>;
  externalParsedType?: InputMaybe<StringSelector>;
  externalProgramId?: InputMaybe<StringSelector>;
  feePayer?: InputMaybe<HashSelector>;
  height?: InputMaybe<BlockSelector>;
  parsed?: InputMaybe<IntegerSelector>;
  parsedActionName?: InputMaybe<StringSelector>;
  parsedProgramName?: InputMaybe<StringSelector>;
  parsedType?: InputMaybe<StringSelector>;
  previousBlockHash?: InputMaybe<HashSelector>;
  programId?: InputMaybe<StringSelector>;
  receiverAddress?: InputMaybe<StringSelector>;
  receiverType?: InputMaybe<StringSelector>;
  recentBlockHash?: InputMaybe<HashSelector>;
  senderAddress?: InputMaybe<StringSelector>;
  senderType?: InputMaybe<StringSelector>;
  signature?: InputMaybe<HashSelector>;
  success?: InputMaybe<BooleanSelector>;
  time?: InputMaybe<DateTimeSelector>;
  transactionIndex?: InputMaybe<IntegerSelector>;
  transferType?: InputMaybe<SolanaTransferTypeSelector>;
};

export enum SolanaTransferMeasureable {
  /** Amount Transfer */
  amount = 'amount',
  /** Hash of the the block */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Transaction Fee */
  fee_payer = 'fee_payer',
  /** Number of block in the blockhains */
  height = 'height',
  /** The block hash of this block`s parent */
  previous_block_hash = 'previous_block_hash',
  /** Transaction Hash */
  signature = 'signature',
  /** Time */
  time = 'time',
  /** Transfer Type */
  transfer_type = 'transfer_type'
}

export enum SolanaTransferType {
  /** Burn */
  burn = 'burn',
  /** Close Account */
  close_account = 'close_account',
  /** Create Account */
  create_account = 'create_account',
  /** Mint */
  mint = 'mint',
  /** Nonce Withdraw */
  nonce_withdraw = 'nonce_withdraw',
  /** Rent Exemption */
  rent_exemption = 'rent_exemption',
  /** Self */
  self = 'self',
  /** Stake */
  stake = 'stake',
  /** Stake Withdraw */
  stake_withdraw = 'stake_withdraw',
  /** Trade Unknown */
  trade_unknown = 'trade_unknown',
  /** Transfer */
  transfer = 'transfer',
  /** Vote */
  vote = 'vote'
}

/** Select by transfer type */
export type SolanaTransferTypeSelector = {
  /** Type in the list */
  in?: InputMaybe<Array<SolanaTransferType>>;
  /** Type is */
  is?: InputMaybe<SolanaTransferType>;
  /** Type not */
  not?: InputMaybe<SolanaTransferType>;
  /** Type not in the list */
  notIn?: InputMaybe<Array<SolanaTransferType>>;
};

export enum SolanaTransferUniq {
  /** Unique date count */
  dates = 'dates',
  /** Number of block in the blockchains */
  height = 'height',
  /** Transfer To */
  receiver_address = 'receiver_address',
  /** Transfer From */
  sender_address = 'sender_address',
  /** Transaction Hash */
  signature = 'signature',
  /** Unique time */
  times = 'times'
}

export enum StakingTransactionsTypeEnum {
  CollectRewards = 'CollectRewards',
  CreateValidator = 'CreateValidator',
  Delegate = 'Delegate',
  EditValidator = 'EditValidator',
  Undelegate = 'Undelegate'
}

/** Indicates what type of operation the transaction is supposed to do. */
export type StakingTransactionsTypeSelector = {
  /** Type in the list */
  in?: InputMaybe<Array<StakingTransactionsTypeEnum>>;
  /** Type is */
  is?: InputMaybe<StakingTransactionsTypeEnum>;
  /** Type not */
  not?: InputMaybe<StakingTransactionsTypeEnum>;
  /** Type not in the list */
  notIn?: InputMaybe<Array<StakingTransactionsTypeEnum>>;
};

/** Stellar Chain */
export type Stellar = {
  __typename?: 'Stellar';
  /** Stellar Transfers */
  transfers?: Maybe<Array<StellarTransfers>>;
};


/** Stellar Chain */
export type StellartransfersArgs = {
  any?: InputMaybe<Array<StellarTransfersFilter>>;
  date?: InputMaybe<DateSelector>;
  direction?: InputMaybe<HashSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
};

export enum StellarNetwork {
  /** The Stellar Ledger */
  stellar = 'stellar'
}

/** Transfers in Stellar blockchain */
export type StellarTransfers = {
  __typename?: 'StellarTransfers';
  amountFrom?: Maybe<Scalars['Float']>;
  amountTo?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency from of transfer */
  currencyFrom?: Maybe<Currency>;
  /** Currency to of transfer */
  currencyTo?: Maybe<Currency>;
  /** The date this transaction was created */
  date?: Maybe<Date>;
  /** Direction */
  direction?: Maybe<Scalars['String']>;
  /** The sequence number of the ledger that this transaction was included in */
  ledger?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Operation */
  operation?: Maybe<Scalars['String']>;
  /** The number of operations contained within this transaction */
  operationCount?: Maybe<Scalars['BigInt']>;
  /** The account this transaction is been sent to */
  receiver?: Maybe<Scalars['String']>;
  /** Sender */
  sender?: Maybe<Scalars['String']>;
  /** The time this transaction was created */
  time?: Maybe<DateTime>;
  /** Hash of this transaction */
  transactionHash?: Maybe<Scalars['String']>;
};


/** Transfers in Stellar blockchain */
export type StellarTransfersamountFromArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  direction?: InputMaybe<HashSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  receiver?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transfers in Stellar blockchain */
export type StellarTransfersamountToArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  direction?: InputMaybe<HashSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  receiver?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
};


/** Transfers in Stellar blockchain */
export type StellarTransfersanyArgs = {
  of: StellarTransfersMeasureable;
};


/** Transfers in Stellar blockchain */
export type StellarTransferscountArgs = {
  uniq?: InputMaybe<StellarTransfersUniq>;
};


/** Transfers in Stellar blockchain */
export type StellarTransferscountBigIntArgs = {
  uniq?: InputMaybe<StellarTransfersUniq>;
};


/** Transfers in Stellar blockchain */
export type StellarTransfersdirectionArgs = {
  direction?: InputMaybe<StringSelector>;
};


/** Transfers in Stellar blockchain */
export type StellarTransfersmaximumArgs = {
  get?: InputMaybe<StellarTransfersMeasureable>;
  of: StellarTransfersMeasureable;
};


/** Transfers in Stellar blockchain */
export type StellarTransfersminimumArgs = {
  get?: InputMaybe<StellarTransfersMeasureable>;
  of: StellarTransfersMeasureable;
};


/** Transfers in Stellar blockchain */
export type StellarTransfersreceiverArgs = {
  receiver?: InputMaybe<HashSelector>;
};


/** Transfers in Stellar blockchain */
export type StellarTransferssenderArgs = {
  sender?: InputMaybe<HashSelector>;
};


/** Transfers in Stellar blockchain */
export type StellarTransferstransactionHashArgs = {
  transactionHash?: InputMaybe<HashSelector>;
};

export type StellarTransfersFilter = {
  date?: InputMaybe<DateSelector>;
  direction?: InputMaybe<HashSelector>;
  receiver?: InputMaybe<HashSelector>;
  sender?: InputMaybe<HashSelector>;
  transactionHash?: InputMaybe<HashSelector>;
};

export enum StellarTransfersMeasureable {
  /** Date */
  date = 'date',
  /** Transfer Receiver */
  receiver = 'receiver',
  /** Transfer Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Transaction Hash */
  transaction_hash = 'transaction_hash'
}

export enum StellarTransfersUniq {
  /** Unique date count */
  dates = 'dates',
  /** Transfer Receiver */
  receiver = 'receiver',
  /** Transfer sender */
  sender = 'sender',
  /** Unique time */
  times = 'times',
  /** Unique date count */
  transaction_hash = 'transaction_hash'
}

/** Select by ID */
export type StringIdSelector = {
  /** ID in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** ID is */
  is?: InputMaybe<Scalars['String']>;
  /** ID not */
  not?: InputMaybe<Scalars['String']>;
  /** ID not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Select by string */
export type StringSelector = {
  /** String in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** String is */
  is?: InputMaybe<Scalars['String']>;
  /** String not */
  not?: InputMaybe<Scalars['String']>;
  /** String not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Search result subject */
export type Subject = Address | Currency | SmartContract | TransactionHash;

/** Blockchain Unified GraphQL Subscription API */
export type Subscription = {
  __typename?: 'Subscription';
  /** Ethereum Mainnet / Classic Chain Datasets */
  ethereum?: Maybe<Ethereum>;
};


/** Blockchain Unified GraphQL Subscription API */
export type SubscriptionethereumArgs = {
  network?: InputMaybe<EthereumNetwork>;
};

/** Time Interval */
export type TimeInterval = {
  __typename?: 'TimeInterval';
  day: Scalars['String'];
  hour: Scalars['String'];
  minute: Scalars['String'];
  month: Scalars['String'];
  second: Scalars['String'];
  year: Scalars['String'];
};


/** Time Interval */
export type TimeIntervaldayArgs = {
  count?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
};


/** Time Interval */
export type TimeIntervalhourArgs = {
  count?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
};


/** Time Interval */
export type TimeIntervalminuteArgs = {
  count?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
};


/** Time Interval */
export type TimeIntervalmonthArgs = {
  count?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
};


/** Time Interval */
export type TimeIntervalsecondArgs = {
  count?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
};


/** Time Interval */
export type TimeIntervalyearArgs = {
  count?: InputMaybe<Scalars['Int']>;
  format?: InputMaybe<Scalars['String']>;
};

/** Timestamp */
export type Timestamp = {
  __typename?: 'Timestamp';
  /** Nanoseconds */
  nanoseconds: Scalars['BigInt'];
  time: Scalars['ISO8601Date'];
};

/** Select trade by ID */
export type TradeIdSelector = {
  /** Trade ID in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Trade ID is */
  is?: InputMaybe<Scalars['String']>;
  /** Trade ID not */
  not?: InputMaybe<Scalars['String']>;
  /** Trade ID not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export enum TradeSide {
  /** Buy side */
  BUY = 'BUY',
  /** Sell side */
  SELL = 'SELL'
}

/** Information about transaction */
export type TransactionElrond = {
  __typename?: 'TransactionElrond';
  /** Shard number of sender */
  data?: Maybe<Scalars['String']>;
  /** Shard number of sender */
  dataOperation?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['Float']>;
  /** Transaction hash */
  hash?: Maybe<Scalars['String']>;
  /** Transaction index */
  index?: Maybe<Scalars['Int']>;
  /** Transaction nonce */
  nonce?: Maybe<Scalars['Int']>;
  /** Hash of the receiver */
  receiver?: Maybe<Address>;
  /** Shard number of receiver */
  receiverShard?: Maybe<Scalars['BigInt']>;
  /** Hash of the sender */
  sender?: Maybe<Address>;
  /** Shard number of sender */
  senderShard?: Maybe<Scalars['BigInt']>;
  /** Shard number of sender */
  signature?: Maybe<Scalars['String']>;
  /** Shard number of sender */
  status?: Maybe<Scalars['String']>;
};


/** Information about transaction */
export type TransactionElronddataArgs = {
  data?: InputMaybe<StringSelector>;
};


/** Information about transaction */
export type TransactionElronddataOperationArgs = {
  dataOperation?: InputMaybe<StringSelector>;
};


/** Information about transaction */
export type TransactionElrondfeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Information about transaction */
export type TransactionElrondhashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Information about transaction */
export type TransactionElrondindexArgs = {
  index?: InputMaybe<IntegerSelector>;
};


/** Information about transaction */
export type TransactionElrondnonceArgs = {
  nonce?: InputMaybe<IntegerSelector>;
};


/** Information about transaction */
export type TransactionElrondreceiverArgs = {
  txReceiver?: InputMaybe<HashSelector>;
};


/** Information about transaction */
export type TransactionElrondreceiverShardArgs = {
  txReceiverShard?: InputMaybe<IntIdSelector>;
};


/** Information about transaction */
export type TransactionElrondsenderArgs = {
  txSender?: InputMaybe<HashSelector>;
};


/** Information about transaction */
export type TransactionElrondsenderShardArgs = {
  txSenderShard?: InputMaybe<IntIdSelector>;
};


/** Information about transaction */
export type TransactionElrondsignatureArgs = {
  signature?: InputMaybe<HashSelector>;
};


/** Information about transaction */
export type TransactionElrondstatusArgs = {
  status?: InputMaybe<StringSelector>;
};

/** Blockchain transaction */
export type TransactionHash = {
  __typename?: 'TransactionHash';
  /** Hash hex representation */
  hash: Scalars['String'];
};

/** Blockchain transaction */
export type TransactionHashIndex = {
  __typename?: 'TransactionHashIndex';
  /** Block of the Output Transaction for this input */
  block?: Maybe<Scalars['Int']>;
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0-based */
  index: Scalars['String'];
};

/** Blockchain transaction with value */
export type TransactionHashValue = {
  __typename?: 'TransactionHashValue';
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction value */
  value: Scalars['Float'];
};

/** Transaction result */
export type TransactionResult = {
  __typename?: 'TransactionResult';
  /** Result ID */
  id: Scalars['Int'];
  /** Result name */
  name: Scalars['String'];
};

/** Identification of transaction source as client application */
export type TransactionSource = {
  __typename?: 'TransactionSource';
  /** ID numeric */
  code: Scalars['Int'];
  /** Name */
  name: Scalars['String'];
};

export enum TransactionTypeEnum {
  /** Delete an account */
  AccountDelete = 'AccountDelete',
  /** Set options on an account */
  AccountSet = 'AccountSet',
  /** Cancel a check */
  CheckCancel = 'CheckCancel',
  /** Redeem a check */
  CheckCash = 'CheckCash',
  /** Create a check */
  CheckCreate = 'CheckCreate',
  /** Preauthorizes an account to send payments to this one */
  DepositPreauth = 'DepositPreauth',
  /** Reclaim escrowed XRP */
  EscrowCancel = 'EscrowCancel',
  /** Create an ascrowed XRP payment */
  EscrowCreate = 'EscrowCreate',
  /** Deliver escrowed XRP recipient */
  EscrowFinish = 'EscrowFinish',
  /** Withdraw a currency-exchange order */
  OfferCancel = 'OfferCancel',
  /** Sibmit an order to exchange currency */
  OfferCreate = 'OfferCreate',
  /** Send funds from one account to another */
  Payment = 'Payment',
  /** Claim money from a payment channel */
  PaymentChannelClaim = 'PaymentChannelClaim',
  /** Open a new payment channel */
  PaymentChannelCreate = 'PaymentChannelCreate',
  /** Add more XRP to a payment channel */
  PaymentChannelFund = 'PaymentChannelFund',
  /** Add, remove or modify an accounts regular key pair */
  SetRegularKey = 'SetRegularKey',
  /** Add, remove, or modify an accounts multi-signing list */
  SignerListSet = 'SignerListSet',
  /** Setaside one or more sequence numbers as Tickets */
  TicketCreate = 'TicketCreate',
  /** Add or modify a trust line */
  TrustSet = 'TrustSet'
}

/** Indicates what type of operation the transaction is supposed to do. */
export type TransactionTypeSelector = {
  /** Type in the list */
  in?: InputMaybe<Array<TransactionTypeEnum>>;
  /** Type is */
  is?: InputMaybe<TransactionTypeEnum>;
  /** Type not */
  not?: InputMaybe<TransactionTypeEnum>;
  /** Type not in the list */
  notIn?: InputMaybe<Array<TransactionTypeEnum>>;
};

export enum TransferReasonEnum {
  /** Smart Contract Call */
  call_result = 'call_result',
  /** ESDT Transfer */
  esdt_transfer = 'esdt_transfer',
  /** NFT Transfer */
  nft_transfer = 'nft_transfer',
  /** Transaction */
  transaction = 'transaction'
}

/** Select by transfer reason */
export type TransferReasonSelector = {
  /** Reason in the list */
  in?: InputMaybe<Array<TransferReasonEnum>>;
  /** Reason is */
  is?: InputMaybe<TransferReasonEnum>;
  /** Reason not */
  not?: InputMaybe<TransferReasonEnum>;
  /** Reason not in the list */
  notIn?: InputMaybe<Array<TransferReasonEnum>>;
};

/** Select by type of transfer */
export type TransferTypeSelector = {
  /** Transfer Type in the list */
  in?: InputMaybe<Array<FilecoinTransferType>>;
  /** Transfer Type is */
  is?: InputMaybe<FilecoinTransferType>;
  /** Transfer Type not */
  not?: InputMaybe<FilecoinTransferType>;
  /** Transfer Type not in the list */
  notIn?: InputMaybe<Array<FilecoinTransferType>>;
};

export enum TransfersUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique currencies */
  currencies = 'currencies',
  /** Unique date count */
  dates = 'dates',
  /** Unique receivers count */
  receivers = 'receivers',
  /** Unique senders count */
  senders = 'senders',
  /** Transfers */
  transfers = 'transfers',
  /** Unique transactions count */
  txs = 'txs'
}

/** Tron Chain */
export type Tron = {
  __typename?: 'Tron';
  /** Basic information about address ( or smart contract ) */
  address: Array<TronAddressInfo>;
  /** Blockchain Blocks */
  blocks?: Maybe<Array<TronBlocks>>;
  /** Money flow using Coinpath technology */
  coinpath?: Maybe<Array<TronCoinpath>>;
  /** Blockchain Embedded Contracts */
  contracts?: Maybe<Array<TronSmartContracts>>;
  /** Trades on Ethereum DEX Smart Contracts */
  dexTrades?: Maybe<Array<TronDexTrades>>;
  /** Smart Contract Calls */
  smartContractCalls?: Maybe<Array<TronSmartContractCalls>>;
  /** Smart Contract Events */
  smartContractEvents?: Maybe<Array<TronSmartContractEvents>>;
  /** Blockchain Embedded Contracts */
  trades?: Maybe<Array<TronTrades>>;
  /** Blockchain Transactions */
  transactions?: Maybe<Array<TronTransactions>>;
  /** Currency Transfers */
  transfers?: Maybe<Array<TronTransfers>>;
};


/** Tron Chain */
export type TronaddressArgs = {
  address: Array<AddressSelectorIn>;
};


/** Tron Chain */
export type TronblocksArgs = {
  any?: InputMaybe<Array<TronBlockFilter>>;
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  parentBlockHash?: InputMaybe<Array<HashSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  version?: InputMaybe<IntegerSelector>;
  witness?: InputMaybe<AddressSelector>;
};


/** Tron Chain */
export type TroncoinpathArgs = {
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  depth?: InputMaybe<IntegerLimitedSelector>;
  initialAddress?: InputMaybe<AddressSelector>;
  initialDate?: InputMaybe<DateSelector>;
  initialTime?: InputMaybe<DateTimeSelector>;
  options?: InputMaybe<CoinpathOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Tron Chain */
export type TroncontractsArgs = {
  any?: InputMaybe<Array<TronContractFilter>>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txOwner?: InputMaybe<AddressSelector>;
};


/** Tron Chain */
export type TrondexTradesArgs = {
  any?: InputMaybe<Array<TronDexTradeFilter>>;
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  options?: InputMaybe<QueryOptions>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Tron Chain */
export type TronsmartContractCallsArgs = {
  any?: InputMaybe<Array<TronSmartContractCallFilter>>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Tron Chain */
export type TronsmartContractEventsArgs = {
  any?: InputMaybe<Array<TronSmartContractEventFilter>>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractEvent?: InputMaybe<EventSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Tron Chain */
export type TrontradesArgs = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<TronTradeFilter>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Tron Chain */
export type TrontransactionsArgs = {
  any?: InputMaybe<Array<TronTransactionFilter>>;
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Tron Chain */
export type TrontransfersArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  any?: InputMaybe<Array<TronTransferFilter>>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  options?: InputMaybe<QueryOptions>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

/** Address detailed information for Tron network */
export type TronAddressInfo = {
  __typename?: 'TronAddressInfo';
  /** Address */
  address?: Maybe<Scalars['String']>;
  /** Annotations ( tags ), if exists */
  annotation?: Maybe<Scalars['String']>;
  /** Smart Contract if exists on the address */
  smartContract?: Maybe<TronSmartContractInfo>;
};

export type TronBlockFilter = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  parentBlockHash?: InputMaybe<Array<HashSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  version?: InputMaybe<IntegerSelector>;
  witness?: InputMaybe<AddressSelector>;
};

/** Blocks in Tron blockchain */
export type TronBlocks = {
  __typename?: 'TronBlocks';
  any?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  /** Block hash */
  hash: Scalars['String'];
  /** Block number (height) in blockchain */
  height: Scalars['Int'];
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Parent block hash */
  parentBlockHash: Scalars['String'];
  /** Block timestamp */
  timestamp?: Maybe<DateTime>;
  /** TX Trie Root Hash */
  txTrieRoot: Scalars['String'];
  /** Block version */
  version?: Maybe<Scalars['Int']>;
  /** Block witness */
  witness?: Maybe<Address>;
  /** Witness signature */
  witnessSignature: Scalars['String'];
};


/** Blocks in Tron blockchain */
export type TronBlocksanyArgs = {
  of: TronBlocksMeasureable;
};


/** Blocks in Tron blockchain */
export type TronBlockscountArgs = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  parentBlockHash?: InputMaybe<Array<HashSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<TronBlocksUniq>;
  version?: InputMaybe<IntegerSelector>;
  witness?: InputMaybe<AddressSelector>;
};


/** Blocks in Tron blockchain */
export type TronBlockscountBigIntArgs = {
  blockHash?: InputMaybe<HashSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  parentBlockHash?: InputMaybe<Array<HashSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  uniq?: InputMaybe<TronBlocksUniq>;
  version?: InputMaybe<IntegerSelector>;
  witness?: InputMaybe<AddressSelector>;
};


/** Blocks in Tron blockchain */
export type TronBlockshashArgs = {
  blockHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in Tron blockchain */
export type TronBlocksheightArgs = {
  height?: InputMaybe<BlockSelector>;
};


/** Blocks in Tron blockchain */
export type TronBlocksmaximumArgs = {
  get?: InputMaybe<TronBlocksMeasureable>;
  of: TronBlocksMeasureable;
};


/** Blocks in Tron blockchain */
export type TronBlocksminimumArgs = {
  get?: InputMaybe<TronBlocksMeasureable>;
  of: TronBlocksMeasureable;
};


/** Blocks in Tron blockchain */
export type TronBlocksparentBlockHashArgs = {
  parentBlockHash?: InputMaybe<Array<HashSelector>>;
};


/** Blocks in Tron blockchain */
export type TronBlockstimestampArgs = {
  time?: InputMaybe<DateTimeSelector>;
};


/** Blocks in Tron blockchain */
export type TronBlocksversionArgs = {
  version?: InputMaybe<IntegerSelector>;
};


/** Blocks in Tron blockchain */
export type TronBlockswitnessArgs = {
  witness?: InputMaybe<AddressSelector>;
};

export enum TronBlocksMeasureable {
  /** Block */
  block = 'block',
  /** Block hash */
  block_hash = 'block_hash',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Block Version */
  version = 'version',
  /** Block Witness address */
  witness = 'witness'
}

export enum TronBlocksUniq {
  /** Unique date count */
  dates = 'dates',
  /** Unique witness count */
  witnesses = 'witnesses'
}

export enum TronCallsMeasureable {
  /** Block */
  block = 'block',
  /** Call depth */
  call_depth = 'call_depth',
  /** Date */
  date = 'date',
  /** Smart Contract Method Signature */
  signature = 'signature',
  /** Smart Contract Method Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Method Name */
  signature_name = 'signature_name',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Action From */
  tx_from = 'tx_from',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Action To */
  tx_to = 'tx_to'
}

/** Coinpath */
export type TronCoinpath = {
  __typename?: 'TronCoinpath';
  /** Summary of transfered value */
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transaction is included */
  block?: Maybe<Block>;
  /** Count of transfers */
  count?: Maybe<Scalars['Int']>;
  /** Count of transfers */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** 1-based hop depth of the graph */
  depth?: Maybe<Scalars['Int']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Receiver address */
  receiver?: Maybe<TronAddressInfo>;
  /** Sender address */
  sender?: Maybe<TronAddressInfo>;
  /** Transaction of transfer happened */
  transaction?: Maybe<TransactionHashValue>;
};


/** Coinpath */
export type TronCoinpathamountArgs = {
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Coinpath */
export type TronCoinpathanyArgs = {
  of: CoinpathMeasureable;
};


/** Coinpath */
export type TronCoinpathmaximumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};


/** Coinpath */
export type TronCoinpathminimumArgs = {
  get?: InputMaybe<CoinpathMeasureable>;
  of: CoinpathMeasureable;
};

export type TronContractFilter = {
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txOwner?: InputMaybe<AddressSelector>;
};

export enum TronContractType {
  /** Account Create */
  AccountCreate = 'AccountCreate',
  /** Account Permission Update */
  AccountPermissionUpdate = 'AccountPermissionUpdate',
  /** Account Update */
  AccountUpdate = 'AccountUpdate',
  /** Asset Issue */
  AssetIssue = 'AssetIssue',
  /** Clear ABI */
  ClearABI = 'ClearABI',
  /** Create Smart */
  CreateSmart = 'CreateSmart',
  /** Exchange Create */
  ExchangeCreate = 'ExchangeCreate',
  /** Exchange Inject */
  ExchangeInject = 'ExchangeInject',
  /** Exchange Transaction */
  ExchangeTransaction = 'ExchangeTransaction',
  /** Exchange Withdraw */
  ExchangeWithdraw = 'ExchangeWithdraw',
  /** Freeze Balance */
  FreezeBalance = 'FreezeBalance',
  /** Participate Asset Issue */
  ParticipateAssetIssue = 'ParticipateAssetIssue',
  /** Proposal Approve */
  ProposalApprove = 'ProposalApprove',
  /** Proposal Create */
  ProposalCreate = 'ProposalCreate',
  /** Proposal Delete */
  ProposalDelete = 'ProposalDelete',
  /** Set Account Id */
  SetAccountId = 'SetAccountId',
  /** Transfer */
  Transfer = 'Transfer',
  /** Transfer Asset */
  TransferAsset = 'TransferAsset',
  /** Trigger Smart */
  TriggerSmart = 'TriggerSmart',
  /** Unfreeze Asset */
  UnfreezeAsset = 'UnfreezeAsset',
  /** Unfreeze Balance */
  UnfreezeBalance = 'UnfreezeBalance',
  /** Update Asset */
  UpdateAsset = 'UpdateAsset',
  /** Update Brokerage */
  UpdateBrokerage = 'UpdateBrokerage',
  /** Update Energy Limit */
  UpdateEnergyLimit = 'UpdateEnergyLimit',
  /** Update Setting */
  UpdateSetting = 'UpdateSetting',
  /** Vote Witness */
  VoteWitness = 'VoteWitness',
  /** Withdraw Balance */
  WithdrawBalance = 'WithdrawBalance',
  /** Witness Create */
  WitnessCreate = 'WitnessCreate',
  /** Witness Update */
  WitnessUpdate = 'WitnessUpdate'
}

/** Select contract type(s) */
export type TronContractTypeSelector = {
  /** Contract type in the list */
  in?: InputMaybe<Array<TronContractType>>;
  /** Contract type is */
  is?: InputMaybe<TronContractType>;
  /** Contract type not */
  not?: InputMaybe<TronContractType>;
  /** Contract type not in the list */
  notIn?: InputMaybe<Array<TronContractType>>;
};

export enum TronContractsMeasureable {
  /** Block */
  block = 'block',
  /** Contract */
  contract_type = 'contract_type',
  /** Date */
  date = 'date',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Transaction owner */
  tx_owner = 'tx_owner'
}

/**
 * Currency selector in Tron blockchain.
 * Token identified by address of contract for TRC20 tokens and token name (or numeric token ID )  for TRC10
 */
export type TronCurrencySelector = {
  /** Currency in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Currency is */
  is?: InputMaybe<Scalars['String']>;
  /** Currency not */
  not?: InputMaybe<Scalars['String']>;
  /** Currency not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

/** Tron DEX attributes */
export type TronDex = {
  __typename?: 'TronDex';
  /** Address for DEX exchange identification */
  address: Address;
  /** Full name ( name for known, Protocol for unknown ) */
  fullName: Scalars['String'];
  /** Full name ( name for known, Protocol / address for unknown ) */
  fullNameWithId: Scalars['String'];
  /** Name for known exchanges */
  name?: Maybe<Scalars['String']>;
};

export type TronDexTradeFilter = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};

/** Trades on DEX smart contracts */
export type TronDexTrades = {
  __typename?: 'TronDexTrades';
  /** Trader (maker or taker) */
  address?: Maybe<TronAddressInfo>;
  any?: Maybe<Scalars['String']>;
  baseAmount?: Maybe<Scalars['Float']>;
  /** Base currency */
  baseCurrency?: Maybe<Currency>;
  /** Block in the blockchain */
  block?: Maybe<BlockExtended>;
  buyAmount?: Maybe<Scalars['Float']>;
  /** Maker buys this currency */
  buyCurrency?: Maybe<Currency>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyFee?: Maybe<Scalars['Float']>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** Identification of admin / manager / factory of smart contract, executing trades */
  exchange?: Maybe<TronDex>;
  fee?: Maybe<Scalars['Float']>;
  internalTransactionsCount?: Maybe<Scalars['Int']>;
  internalTransactionsCountBigInt?: Maybe<Scalars['BigInt']>;
  logsCount?: Maybe<Scalars['Int']>;
  logsCountBigInt?: Maybe<Scalars['BigInt']>;
  /** Trade 'maker' side */
  maker?: Maybe<TronAddressInfo>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netFee?: Maybe<Scalars['Float']>;
  netUsage?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  /** Protocol name of the smart contract */
  protocol?: Maybe<Scalars['String']>;
  quoteAmount?: Maybe<Scalars['Float']>;
  /** Quote currency */
  quoteCurrency?: Maybe<Currency>;
  quotePrice?: Maybe<Scalars['Float']>;
  sellAmount?: Maybe<Scalars['Float']>;
  /** Maker sells this currency */
  sellCurrency?: Maybe<Currency>;
  /** Side of trade ( SELL / BUY ) */
  side?: Maybe<TradeSide>;
  /** Smart contract being called */
  smartContract?: Maybe<TronSmartContract>;
  /** Trade 'taker' side */
  taker?: Maybe<TronAddressInfo>;
  /** Time interval */
  timeInterval?: Maybe<TimeInterval>;
  tradeAmount?: Maybe<Scalars['Float']>;
  /** Index of trade in transaction, used to separate trades in transaction */
  tradeIndex?: Maybe<Scalars['String']>;
  /** Transaction of DexTrade */
  transaction?: Maybe<TronTransactionInfoExtended>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesaddressArgs = {
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesanyArgs = {
  of: TronDexTradesMeasureable;
};


/** Trades on DEX smart contracts */
export type TronDexTradesbaseAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesbaseCurrencyArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesbuyAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesbuyCurrencyArgs = {
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradescountArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<TronDexTradesUniq>;
};


/** Trades on DEX smart contracts */
export type TronDexTradescountBigIntArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<TronDexTradesUniq>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesenergyFeeArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesenergyUsageTotalArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesexchangeArgs = {
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesfeeArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesinternalTransactionsCountArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesinternalTransactionsCountBigIntArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradeslogsCountArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradeslogsCountBigIntArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesmakerArgs = {
  maker?: InputMaybe<Array<AddressSelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesmaximumArgs = {
  get?: InputMaybe<TronDexTradesMeasureable>;
  of: TronDexTradesMeasureable;
};


/** Trades on DEX smart contracts */
export type TronDexTradesminimumArgs = {
  get?: InputMaybe<TronDexTradesMeasureable>;
  of: TronDexTradesMeasureable;
};


/** Trades on DEX smart contracts */
export type TronDexTradesnetFeeArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesnetUsageArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradespriceArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  calculate?: InputMaybe<PriceAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesprotocolArgs = {
  protocol?: InputMaybe<Array<StringSelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesquoteAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesquoteCurrencyArgs = {
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradesquotePriceArgs = {
  baseCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  buyAmount?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  calculate?: InputMaybe<PriceAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  exchangeAddress?: InputMaybe<Array<AddressSelector>>;
  exchangeName?: InputMaybe<Array<StringSelector>>;
  height?: InputMaybe<BlockSelector>;
  maker?: InputMaybe<Array<AddressSelector>>;
  makerOrTaker?: InputMaybe<Array<AddressSelector>>;
  price?: InputMaybe<Array<AmountSelector>>;
  priceAsymmetry?: InputMaybe<Array<FloatSelector>>;
  protocol?: InputMaybe<Array<StringSelector>>;
  quoteCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  sellAmount?: InputMaybe<Array<AmountSelector>>;
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
  taker?: InputMaybe<Array<AddressSelector>>;
  time?: InputMaybe<DateTimeSelector>;
  tradeAmountUsd?: InputMaybe<Array<FloatSelector>>;
  tradeIndex?: InputMaybe<Array<StringSelector>>;
  txHash?: InputMaybe<HashSelector>;
};


/** Trades on DEX smart contracts */
export type TronDexTradessellAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in?: InputMaybe<BaseCurrencyEnum>;
};


/** Trades on DEX smart contracts */
export type TronDexTradessellCurrencyArgs = {
  sellCurrency?: InputMaybe<Array<TronCurrencySelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradessmartContractArgs = {
  smartContractAddress?: InputMaybe<Array<AddressSelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradestakerArgs = {
  taker?: InputMaybe<Array<AddressSelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradestradeAmountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  in: BaseCurrencyEnum;
};


/** Trades on DEX smart contracts */
export type TronDexTradestradeIndexArgs = {
  tradeIndex?: InputMaybe<Array<StringSelector>>;
};


/** Trades on DEX smart contracts */
export type TronDexTradestransactionArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};

export enum TronDexTradesMeasureable {
  /** Block */
  block = 'block',
  /** Buy Amount */
  buy_amount = 'buy_amount',
  /** Buy Token address */
  buy_currency_address = 'buy_currency_address',
  /** Buy Currency symbol */
  buy_currency_symbol = 'buy_currency_symbol',
  /** Date */
  date = 'date',
  /** Maker */
  maker = 'maker',
  /** Price */
  price = 'price',
  /** Quote Price */
  quote_price = 'quote_price',
  /** Sell Amount */
  sell_amount = 'sell_amount',
  /** Sell Token address */
  sell_currency_address = 'sell_currency_address',
  /** Sell Currency symbol */
  sell_currency_symbol = 'sell_currency_symbol',
  /** Taker */
  taker = 'taker',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum TronDexTradesUniq {
  /** Unique makers & takers count */
  address = 'address',
  /** Base currencies count */
  base_currency = 'base_currency',
  /** Unique blocks */
  blocks = 'blocks',
  /** Buy currencies count */
  buy_currency = 'buy_currency',
  /** Unique date count */
  dates = 'dates',
  /** Unique makers count */
  makers = 'makers',
  /** Unique protocols count */
  protocols = 'protocols',
  /** Quote currencies count */
  quote_currency = 'quote_currency',
  /** Sell currencies count */
  sell_currency = 'sell_currency',
  /** Unique smart contract count */
  smart_contracts = 'smart_contracts',
  /** Unique makers count */
  takers = 'takers',
  /** Unique transactions count */
  txs = 'txs'
}

export enum TronEventsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Smart Contract Method Signature */
  signature = 'signature',
  /** Smart Contract Method Signature Hash */
  signature_hash = 'signature_hash',
  /** Smart Contract Method Name */
  signature_name = 'signature_name',
  /** Smart Contract */
  smart_contract = 'smart_contract',
  /** Time */
  time = 'time',
  /** Action From */
  tx_from = 'tx_from',
  /** Transaction hash */
  tx_hash = 'tx_hash',
  /** Action To */
  tx_to = 'tx_to'
}

export enum TronNetwork {
  /** TRON mainnet */
  tron = 'tron'
}

/** Tron smart contract */
export type TronSmartContract = {
  __typename?: 'TronSmartContract';
  /** Smart Contract Address */
  address: Address;
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

export type TronSmartContractCallFilter = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

/** Smart Contract Calls */
export type TronSmartContractCalls = {
  __typename?: 'TronSmartContractCalls';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Depth of the call. Empty string for external call, then counted as 0...N, and the next layer is added through '-'. For example 0-3-9. */
  callDepth?: Maybe<Scalars['String']>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** External call executed explicitly by caller. Internal calls executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Smart contract being called */
  smartContract?: Maybe<TronSmartContract>;
  /** Contract method invoked */
  smartContractMethod?: Maybe<Method>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};


/** Smart Contract Calls */
export type TronSmartContractCallsamountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallsanyArgs = {
  of: TronCallsMeasureable;
};


/** Smart Contract Calls */
export type TronSmartContractCallsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallscountArgs = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type TronSmartContractCallscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Calls */
export type TronSmartContractCallsenergyUsageTotalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallsexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Smart Contract Calls */
export type TronSmartContractCallsfeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallsmaximumArgs = {
  get?: InputMaybe<TronCallsMeasureable>;
  of: TronCallsMeasureable;
};


/** Smart Contract Calls */
export type TronSmartContractCallsminimumArgs = {
  get?: InputMaybe<TronCallsMeasureable>;
  of: TronCallsMeasureable;
};


/** Smart Contract Calls */
export type TronSmartContractCallsnetUsageArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  date?: InputMaybe<DateSelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractMethod?: InputMaybe<MethodSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallssmartContractArgs = {
  smartContractAddress?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallssmartContractMethodArgs = {
  smartContractMethod?: InputMaybe<MethodSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallssuccessArgs = {
  success?: InputMaybe<Array<Scalars['Boolean']>>;
};


/** Smart Contract Calls */
export type TronSmartContractCallstxFromArgs = {
  txFrom?: InputMaybe<AddressSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallstxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Smart Contract Calls */
export type TronSmartContractCallstxToArgs = {
  txTo?: InputMaybe<AddressSelector>;
};

export type TronSmartContractEventFilter = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractEvent?: InputMaybe<EventSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

/** Smart Contract Events */
export type TronSmartContractEvents = {
  __typename?: 'TronSmartContractEvents';
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  /** Smart contract being Evented */
  smartContract?: Maybe<TronSmartContract>;
  /** Contract method invoked */
  smartContractEvent?: Maybe<Event>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};


/** Smart Contract Events */
export type TronSmartContractEventsanyArgs = {
  of: TronEventsMeasureable;
};


/** Smart Contract Events */
export type TronSmartContractEventsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Smart Contract Events */
export type TronSmartContractEventscountArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractEvent?: InputMaybe<EventSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Events */
export type TronSmartContractEventscountBigIntArgs = {
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  smartContractAddress?: InputMaybe<AddressSelector>;
  smartContractEvent?: InputMaybe<EventSelector>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Smart Contract Events */
export type TronSmartContractEventsmaximumArgs = {
  get?: InputMaybe<TronEventsMeasureable>;
  of: TronEventsMeasureable;
};


/** Smart Contract Events */
export type TronSmartContractEventsminimumArgs = {
  get?: InputMaybe<TronEventsMeasureable>;
  of: TronEventsMeasureable;
};


/** Smart Contract Events */
export type TronSmartContractEventssmartContractArgs = {
  smartContractAddress?: InputMaybe<AddressSelector>;
};


/** Smart Contract Events */
export type TronSmartContractEventssmartContractEventArgs = {
  smartContractEvent?: InputMaybe<EventSelector>;
};


/** Smart Contract Events */
export type TronSmartContractEventstxFromArgs = {
  txFrom?: InputMaybe<AddressSelector>;
};


/** Smart Contract Events */
export type TronSmartContractEventstxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Smart Contract Events */
export type TronSmartContractEventstxToArgs = {
  txTo?: InputMaybe<AddressSelector>;
};

/** Blockchain smart contract */
export type TronSmartContractInfo = {
  __typename?: 'TronSmartContractInfo';
  /** Smart Contract Type */
  contractType?: Maybe<SmartContractType>;
  /** Token implemented in this smart contract */
  currency?: Maybe<Currency>;
  /** Smart Contract Protocol Type */
  protocolType?: Maybe<Scalars['String']>;
};

/** Contracts */
export type TronSmartContracts = {
  __typename?: 'TronSmartContracts';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block in the blockchain */
  block?: Maybe<Block>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  /** Counts and other metrics */
  count?: Maybe<Scalars['Int']>;
  /** Counts and other metrics */
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** True if call succeeded, false if error happened. Note, that by default only successfull calls are returned in API. */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Transactio owner from address */
  txOwner?: Maybe<Address>;
};


/** Contracts */
export type TronSmartContractsamountArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txOwner?: InputMaybe<AddressSelector>;
};


/** Contracts */
export type TronSmartContractsanyArgs = {
  of: TronContractsMeasureable;
};


/** Contracts */
export type TronSmartContractsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Contracts */
export type TronSmartContractscontractTypeArgs = {
  contractType?: InputMaybe<TronContractTypeSelector>;
};


/** Contracts */
export type TronSmartContractscountArgs = {
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txOwner?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Contracts */
export type TronSmartContractscountBigIntArgs = {
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txOwner?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<SmartContractCallsUniq>;
};


/** Contracts */
export type TronSmartContractscurrencyArgs = {
  currency?: InputMaybe<TronCurrencySelector>;
};


/** Contracts */
export type TronSmartContractsenergyUsageTotalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txOwner?: InputMaybe<AddressSelector>;
};


/** Contracts */
export type TronSmartContractsfeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txOwner?: InputMaybe<AddressSelector>;
};


/** Contracts */
export type TronSmartContractsmaximumArgs = {
  get?: InputMaybe<TronContractsMeasureable>;
  of: TronContractsMeasureable;
};


/** Contracts */
export type TronSmartContractsminimumArgs = {
  get?: InputMaybe<TronContractsMeasureable>;
  of: TronContractsMeasureable;
};


/** Contracts */
export type TronSmartContractsnetUsageArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txOwner?: InputMaybe<AddressSelector>;
};


/** Contracts */
export type TronSmartContractssuccessArgs = {
  success?: InputMaybe<Array<Scalars['Boolean']>>;
};


/** Contracts */
export type TronSmartContractstxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Contracts */
export type TronSmartContractstxOwnerArgs = {
  txOwner?: InputMaybe<AddressSelector>;
};

export type TronTradeFilter = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};

/** Currency Trades from/to addresses in crypto currencies */
export type TronTrades = {
  __typename?: 'TronTrades';
  amountBuy?: Maybe<Scalars['Float']>;
  amountSell?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where Trade transaction is included */
  block?: Maybe<Block>;
  /** Buy Currency of Trade */
  buyCurrency?: Maybe<Currency>;
  /** Trade buyer */
  buyer?: Maybe<Address>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** exchange_id */
  exchangeId?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Sell Currency of Trade */
  sellCurrency?: Maybe<Currency>;
  /** Trade seller */
  seller?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Transaction hash where Trade happened */
  txHash?: Maybe<Scalars['String']>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesamountBuyArgs = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesamountSellArgs = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesanyArgs = {
  of: TronTradesMeasureable;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesbuyCurrencyArgs = {
  buyCurrency?: InputMaybe<TronCurrencySelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesbuyerArgs = {
  buyer?: InputMaybe<AddressSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradescontractTypeArgs = {
  contractType?: InputMaybe<TronContractTypeSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradescountArgs = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<TronTradesUniq>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradescountBigIntArgs = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  uniq?: InputMaybe<TronTradesUniq>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesenergyUsageTotalArgs = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesexchangeIdArgs = {
  exchangeId?: InputMaybe<IntIdSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesfeeArgs = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesmaximumArgs = {
  get?: InputMaybe<TronTradesMeasureable>;
  of: TronTradesMeasureable;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesminimumArgs = {
  get?: InputMaybe<TronTradesMeasureable>;
  of: TronTradesMeasureable;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradesnetUsageArgs = {
  amountBuy?: InputMaybe<Array<AmountSelector>>;
  amountSell?: InputMaybe<Array<AmountSelector>>;
  buyCurrency?: InputMaybe<TronCurrencySelector>;
  buyer?: InputMaybe<AddressSelector>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  date?: InputMaybe<DateSelector>;
  exchangeId?: InputMaybe<IntIdSelector>;
  height?: InputMaybe<BlockSelector>;
  sellCurrency?: InputMaybe<TronCurrencySelector>;
  seller?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradessellCurrencyArgs = {
  sellCurrency?: InputMaybe<TronCurrencySelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradessellerArgs = {
  seller?: InputMaybe<AddressSelector>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradessuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Currency Trades from/to addresses in crypto currencies */
export type TronTradestxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};

export enum TronTradesMeasureable {
  /** Amount Sell */
  amount_buy = 'amount_buy',
  /** Amount Sell */
  amount_sell = 'amount_sell',
  /** Block */
  block = 'block',
  /** Buy Token address */
  buy_currency_address = 'buy_currency_address',
  /** Buy Currency name */
  buy_currency_name = 'buy_currency_name',
  /** Buy Currency symbol */
  buy_currency_symbol = 'buy_currency_symbol',
  /** Buy Token address */
  buy_token_id = 'buy_token_id',
  /** Buy Token type */
  buy_token_type = 'buy_token_type',
  /** Buyer */
  buyer = 'buyer',
  /** Contract Type */
  contract_type = 'contract_type',
  /** Date */
  date = 'date',
  /** Exchange ID */
  exchange_id = 'exchange_id',
  /** Buy Token address */
  sell_currency_address = 'sell_currency_address',
  /** Buy Currency name */
  sell_currency_name = 'sell_currency_name',
  /** Buy Currency symbol */
  sell_currency_symbol = 'sell_currency_symbol',
  /** Buy Token address */
  sell_token_id = 'sell_token_id',
  /** Buy Token type */
  sell_token_type = 'sell_token_type',
  /** Seller */
  seller = 'seller',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum TronTradesUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Buy currencies */
  buy_currencies = 'buy_currencies',
  /** Buyers count */
  buyers = 'buyers',
  /** Unique date count */
  dates = 'dates',
  /** Exchange IDs */
  exchanges = 'exchanges',
  /** Sell currencies */
  sell_currencies = 'sell_currencies',
  /** Sellers count */
  sellers = 'sellers'
}

export type TronTransactionFilter = {
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};

/** Blockchain Transaction Extended info */
export type TronTransactionInfoExtended = {
  __typename?: 'TronTransactionInfoExtended';
  /** Contract Address */
  contractAddress?: Maybe<Address>;
  /** Expiration */
  expiration: Scalars['Int'];
  /** Fee Limit */
  feeLimit: Scalars['Int'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  /** Ref block Hash hex representation */
  refBlockHash: Scalars['String'];
  /** Result message */
  result?: Maybe<Scalars['String']>;
  /** Signatures */
  signatures: Scalars['String'];
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
};

/** Transactions in Tron blockchain */
export type TronTransactions = {
  __typename?: 'TronTransactions';
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Contract Address */
  contractAddress?: Maybe<Address>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyFee?: Maybe<Scalars['Float']>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** Expiration */
  expiration: Scalars['Int'];
  fee?: Maybe<Scalars['Float']>;
  /** Fee Limit */
  feeLimit: Scalars['Int'];
  /** Hash hex representation */
  hash: Scalars['String'];
  /** Transaction index in block, 0 based */
  index?: Maybe<Scalars['Int']>;
  internalTransactionsCount?: Maybe<Scalars['Int']>;
  internalTransactionsCountBigInt?: Maybe<Scalars['BigInt']>;
  logsCount?: Maybe<Scalars['Int']>;
  logsCountBigInt?: Maybe<Scalars['BigInt']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netFee?: Maybe<Scalars['Float']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Ref block Hash hex representation */
  refBlockHash: Scalars['String'];
  /** Result message */
  result?: Maybe<Scalars['String']>;
  /** Signatures */
  signatures: Scalars['String'];
  /** Success */
  success?: Maybe<Scalars['Boolean']>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsanyArgs = {
  of: TronTransactionsMeasureable;
};


/** Transactions in Tron blockchain */
export type TronTransactionsblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionscontractAddressArgs = {
  contractAddress?: InputMaybe<AddressSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionscountArgs = {
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  uniq?: InputMaybe<TronTransactionsUniq>;
};


/** Transactions in Tron blockchain */
export type TronTransactionscountBigIntArgs = {
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
  uniq?: InputMaybe<TronTransactionsUniq>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsenergyFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsenergyUsageTotalArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsfeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionshashArgs = {
  txHash?: InputMaybe<Array<HashSelector>>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsindexArgs = {
  txIndex?: InputMaybe<Array<TxIndexSelector>>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsinternalTransactionsCountArgs = {
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsinternalTransactionsCountBigIntArgs = {
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionslogsCountArgs = {
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionslogsCountBigIntArgs = {
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsmaximumArgs = {
  get?: InputMaybe<TronTransactionsMeasureable>;
  of: TronTransactionsMeasureable;
};


/** Transactions in Tron blockchain */
export type TronTransactionsminimumArgs = {
  get?: InputMaybe<TronTransactionsMeasureable>;
  of: TronTransactionsMeasureable;
};


/** Transactions in Tron blockchain */
export type TronTransactionsnetFeeArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsnetUsageArgs = {
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractAddress?: InputMaybe<AddressSelector>;
  date?: InputMaybe<DateSelector>;
  height?: InputMaybe<BlockSelector>;
  refBlockHash?: InputMaybe<Array<HashSelector>>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txHash?: InputMaybe<HashSelector>;
  txIndex?: InputMaybe<TxIndexSelector>;
};


/** Transactions in Tron blockchain */
export type TronTransactionsrefBlockHashArgs = {
  refBlockHash?: InputMaybe<Array<HashSelector>>;
};


/** Transactions in Tron blockchain */
export type TronTransactionssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};

export enum TronTransactionsMeasureable {
  /** Block */
  block = 'block',
  /** Date */
  date = 'date',
  /** Energy Fee */
  energy_fee = 'energy_fee',
  /** Fee */
  fee = 'fee',
  /** Fee Limit */
  fee_limit = 'fee_limit',
  /** Internal transactions count */
  internal_transactions_count = 'internal_transactions_count',
  /** Net usage */
  net_usage = 'net_usage',
  /** Time */
  time = 'time',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

export enum TronTransactionsUniq {
  /** Unique blocks */
  blocks = 'blocks',
  /** Unique date count */
  dates = 'dates'
}

export type TronTransferFilter = {
  amount?: InputMaybe<Array<AmountSelector>>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};

/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfers = {
  __typename?: 'TronTransfers';
  amount?: Maybe<Scalars['Float']>;
  any?: Maybe<Scalars['String']>;
  /** Block where transfer transaction is included */
  block?: Maybe<Block>;
  /** Contract type */
  contractType?: Maybe<TronContractType>;
  count?: Maybe<Scalars['Int']>;
  countBigInt?: Maybe<Scalars['BigInt']>;
  /** Currency of transfer */
  currency?: Maybe<Currency>;
  /** Calendar date */
  date?: Maybe<Date>;
  energyUsageTotal?: Maybe<Scalars['Float']>;
  /** Entity identifier ( for ERC-721 NFT tokens ) */
  entityId?: Maybe<Scalars['String']>;
  /** External transfer executed explicitly by tx sender. Internal transfers executed by smart contracts. */
  external?: Maybe<Scalars['Boolean']>;
  fee?: Maybe<Scalars['Float']>;
  maximum?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['String']>;
  netUsage?: Maybe<Scalars['Float']>;
  /** Transfer receiver */
  receiver?: Maybe<Address>;
  /** Transfer sender */
  sender?: Maybe<Address>;
  /** Transfer succeeded */
  success?: Maybe<Scalars['Boolean']>;
  /** Action from address */
  txFrom?: Maybe<Address>;
  /** Transaction hash where transfer happened */
  txHash?: Maybe<Scalars['String']>;
  /** Action to address */
  txTo?: Maybe<Address>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersamountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersanyArgs = {
  of: TronTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersblockArgs = {
  height?: InputMaybe<BlockSelector>;
  time?: InputMaybe<DateTimeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferscontractTypeArgs = {
  contractType?: InputMaybe<TronContractTypeSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferscountArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferscountBigIntArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
  uniq?: InputMaybe<TransfersUniq>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferscurrencyArgs = {
  currency?: InputMaybe<TronCurrencySelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersenergyUsageTotalArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersentityIdArgs = {
  entityId?: InputMaybe<EntitySelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersexternalArgs = {
  external?: InputMaybe<Scalars['Boolean']>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersfeeArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  in?: InputMaybe<BaseCurrencyEnum>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersmaximumArgs = {
  get?: InputMaybe<TronTransfersMeasureable>;
  of: TronTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersminimumArgs = {
  get?: InputMaybe<TronTransfersMeasureable>;
  of: TronTransfersMeasureable;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersnetUsageArgs = {
  amount?: InputMaybe<Array<AmountSelector>>;
  calculate?: InputMaybe<AmountAggregateFunction>;
  contractType?: InputMaybe<TronContractTypeSelector>;
  currency?: InputMaybe<TronCurrencySelector>;
  date?: InputMaybe<DateSelector>;
  entityId?: InputMaybe<EntitySelector>;
  external?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<BlockSelector>;
  receiver?: InputMaybe<AddressSelector>;
  sender?: InputMaybe<AddressSelector>;
  success?: InputMaybe<Scalars['Boolean']>;
  time?: InputMaybe<DateTimeSelector>;
  txFrom?: InputMaybe<AddressSelector>;
  txHash?: InputMaybe<HashSelector>;
  txTo?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransfersreceiverArgs = {
  receiver?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferssenderArgs = {
  sender?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferssuccessArgs = {
  success?: InputMaybe<Scalars['Boolean']>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferstxFromArgs = {
  txFrom?: InputMaybe<AddressSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferstxHashArgs = {
  txHash?: InputMaybe<HashSelector>;
};


/** Currency transfers from/to addresses in crypto currencies */
export type TronTransferstxToArgs = {
  txTo?: InputMaybe<AddressSelector>;
};

export enum TronTransfersMeasureable {
  /** Amount */
  amount = 'amount',
  /** Block */
  block = 'block',
  /** Token address */
  currency_address = 'currency_address',
  /** Currency symbol */
  currency_symbol = 'currency_symbol',
  /** Date */
  date = 'date',
  /** Receiver */
  receiver = 'receiver',
  /** Sender */
  sender = 'sender',
  /** Time */
  time = 'time',
  /** Token ID */
  token_id = 'token_id',
  /** Token type */
  token_type = 'token_type',
  /** Transaction hash */
  tx_hash = 'tx_hash'
}

/** Selector of index of transaction in block */
export type TxIndexSelector = {
  /** Tx index in the list */
  in?: InputMaybe<Array<Scalars['Int']>>;
  /** Tx index is */
  is?: InputMaybe<Scalars['Int']>;
  /** Tx index not */
  not?: InputMaybe<Scalars['Int']>;
  /** Tx index not in the list */
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

/** Select transactions by subtype */
export type TxSubtypeSelector = {
  /** Transaction SubType in the list */
  in?: InputMaybe<Array<AlgorandTxSubType>>;
  /** Transaction SubType is */
  is?: InputMaybe<AlgorandTxSubType>;
  /** Transaction SubType not */
  not?: InputMaybe<AlgorandTxSubType>;
  /** Transaction SubType not in the list */
  notIn?: InputMaybe<Array<AlgorandTxSubType>>;
};

/** Select transactions by type */
export type TxTypeSelector = {
  /** Transaction Type in the list */
  in?: InputMaybe<Array<AlgorandTxType>>;
  /** Transaction Type is */
  is?: InputMaybe<AlgorandTxType>;
  /** Transaction Type not */
  not?: InputMaybe<AlgorandTxType>;
  /** Transaction Type not in the list */
  notIn?: InputMaybe<Array<AlgorandTxType>>;
};

/** Select by type */
export type TypeSelector = {
  /** Type in the list */
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Type is */
  is?: InputMaybe<Scalars['String']>;
  /** Type not */
  not?: InputMaybe<Scalars['String']>;
  /** Type not in the list */
  notIn?: InputMaybe<Array<Scalars['String']>>;
};

export type getOffChanQueryVariables = Exact<{ [key: string]: never; }>;


export type getOffChanQuery = { __typename?: 'Query', offchain?: { __typename?: 'Offchain', covid?: { __typename?: 'CovidHistory', facts?: Array<{ __typename?: 'CovidFact', confirmed?: number | null | undefined, recovered?: number | null | undefined, deaths?: number | null | undefined }> | null | undefined } | null | undefined } | null | undefined };

export type GetFactsQueryVariables = Exact<{
  from?: InputMaybe<Scalars['ISO8601DateTime']>;
  till?: InputMaybe<Scalars['ISO8601DateTime']>;
}>;


export type GetFactsQuery = { __typename?: 'Query', offchain?: { __typename?: 'Offchain', covid?: { __typename?: 'CovidHistory', facts?: Array<{ __typename?: 'CovidFact', confirmed?: number | null | undefined, recovered?: number | null | undefined, deaths?: number | null | undefined }> | null | undefined } | null | undefined } | null | undefined };

export type GetFactsPerDatesQueryVariables = Exact<{
  from?: InputMaybe<Scalars['ISO8601DateTime']>;
  till?: InputMaybe<Scalars['ISO8601DateTime']>;
}>;


export type GetFactsPerDatesQuery = { __typename?: 'Query', offchain?: { __typename?: 'Offchain', covid?: { __typename?: 'CovidHistory', facts?: Array<{ __typename?: 'CovidFact', confirmed?: number | null | undefined, recovered?: number | null | undefined, deaths?: number | null | undefined, date?: { __typename?: 'Date', date: string } | null | undefined }> | null | undefined } | null | undefined } | null | undefined };


export const getOffChanDocument = gql`
    query getOffChan {
  offchain {
    covid {
      facts {
        confirmed
        recovered
        deaths
      }
    }
  }
}
    `;

/**
 * __usegetOffChanQuery__
 *
 * To run a query within a React component, call `usegetOffChanQuery` and pass it any options that fit your needs.
 * When your component renders, `usegetOffChanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usegetOffChanQuery({
 *   variables: {
 *   },
 * });
 */
export function usegetOffChanQuery(baseOptions?: Apollo.QueryHookOptions<getOffChanQuery, getOffChanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<getOffChanQuery, getOffChanQueryVariables>(getOffChanDocument, options);
      }
export function usegetOffChanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<getOffChanQuery, getOffChanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<getOffChanQuery, getOffChanQueryVariables>(getOffChanDocument, options);
        }
export type getOffChanQueryHookResult = ReturnType<typeof usegetOffChanQuery>;
export type getOffChanLazyQueryHookResult = ReturnType<typeof usegetOffChanLazyQuery>;
export type getOffChanQueryResult = Apollo.QueryResult<getOffChanQuery, getOffChanQueryVariables>;
export const GetFactsDocument = gql`
    query GetFacts($from: ISO8601DateTime, $till: ISO8601DateTime) {
  offchain {
    covid {
      facts(date: {since: $from, till: $till}) {
        confirmed
        recovered
        deaths
      }
    }
  }
}
    `;

/**
 * __useGetFactsQuery__
 *
 * To run a query within a React component, call `useGetFactsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFactsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFactsQuery({
 *   variables: {
 *      from: // value for 'from'
 *      till: // value for 'till'
 *   },
 * });
 */
export function useGetFactsQuery(baseOptions?: Apollo.QueryHookOptions<GetFactsQuery, GetFactsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFactsQuery, GetFactsQueryVariables>(GetFactsDocument, options);
      }
export function useGetFactsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFactsQuery, GetFactsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFactsQuery, GetFactsQueryVariables>(GetFactsDocument, options);
        }
export type GetFactsQueryHookResult = ReturnType<typeof useGetFactsQuery>;
export type GetFactsLazyQueryHookResult = ReturnType<typeof useGetFactsLazyQuery>;
export type GetFactsQueryResult = Apollo.QueryResult<GetFactsQuery, GetFactsQueryVariables>;
export const GetFactsPerDatesDocument = gql`
    query GetFactsPerDates($from: ISO8601DateTime, $till: ISO8601DateTime) {
  offchain {
    covid {
      facts(date: {since: $from, till: $till}, options: {asc: "date.date"}) {
        date {
          date
        }
        confirmed
        recovered
        deaths
      }
    }
  }
}
    `;

/**
 * __useGetFactsPerDatesQuery__
 *
 * To run a query within a React component, call `useGetFactsPerDatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFactsPerDatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFactsPerDatesQuery({
 *   variables: {
 *      from: // value for 'from'
 *      till: // value for 'till'
 *   },
 * });
 */
export function useGetFactsPerDatesQuery(baseOptions?: Apollo.QueryHookOptions<GetFactsPerDatesQuery, GetFactsPerDatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFactsPerDatesQuery, GetFactsPerDatesQueryVariables>(GetFactsPerDatesDocument, options);
      }
export function useGetFactsPerDatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFactsPerDatesQuery, GetFactsPerDatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFactsPerDatesQuery, GetFactsPerDatesQueryVariables>(GetFactsPerDatesDocument, options);
        }
export type GetFactsPerDatesQueryHookResult = ReturnType<typeof useGetFactsPerDatesQuery>;
export type GetFactsPerDatesLazyQueryHookResult = ReturnType<typeof useGetFactsPerDatesLazyQuery>;
export type GetFactsPerDatesQueryResult = Apollo.QueryResult<GetFactsPerDatesQuery, GetFactsPerDatesQueryVariables>;