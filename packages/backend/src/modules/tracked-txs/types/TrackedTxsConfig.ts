import { Layer2TxConfig } from '@l2beat/config'
import { EthereumAddress, ProjectId, UnixTime } from '@l2beat/shared-pure'

export type TrackedTxsConfig = {
  entries: TrackedTxsConfigEntry[]
}

export type TrackedTxsConfigEntry =
  | TrackedTxFunctionCall
  | TrackedTxTransfer
  | TrackedTxSharpSubmission

interface TrackedTxConfigBase {
  // TODO: (tracked_tx) add configHash
  projectId: ProjectId
  uses: Layer2TxConfig['uses']
  sinceTimestamp: UnixTime
  untilTimestamp?: UnixTime
}

export interface TrackedTxFunctionCall extends TrackedTxConfigBase {
  formula: 'functionCall'
  address: EthereumAddress
  selector: string
}

export interface TrackedTxTransfer extends TrackedTxConfigBase {
  formula: 'transfer'
  from: EthereumAddress
  to: EthereumAddress
}

export interface TrackedTxSharpSubmission extends TrackedTxConfigBase {
  formula: 'sharpSubmission'
  address: EthereumAddress
  selector: string
  programHashes: string[]
}

export const SHARP_SUBMISSION_ADDRESS = EthereumAddress(
  '0x47312450B3Ac8b5b8e247a6bB6d523e7605bDb60',
)
export const SHARP_SUBMISSION_SELECTOR = '0x9b3b76cc'
