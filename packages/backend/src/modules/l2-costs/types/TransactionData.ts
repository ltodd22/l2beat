export type TransactionData = Type2TransactionData | Type3TransactionData

export interface Type2TransactionData {
  type: 2
  gasUsed: number
  gasPrice: number
  calldataLength: number
}

export interface Type3TransactionData {
  type: 3
  gasUsed: number
  gasPrice: number
  calldataLength: number
  blobGasUsed: number
  blobBaseFee: number
  blobDataLength: number
}
