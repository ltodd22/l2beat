Generated with discovered.json: 0x2f2ba4933ab604e3fea69cb0554f79110c0ea619

# Diff at Fri, 08 Mar 2024 09:05:01 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@a10be30b5303dc6a457478efdaca424c246501ca block: 19375693
- current block number: 19389434

## Description

Two new plugs.

## Watched changes

```diff
    contract Socket (0x943AC2775928318653e91d350574436A1b9b16f9) {
    +++ description: None
      values.plugs[17]:
+        "0xdCcFb24f983586144c085426dbfa3414045E19a3"
      values.plugs[16]:
+        "0x727aD65db6aE99DB5Dbee8F202846DD6009bf6D5"
    }
```

Generated with discovered.json: 0x37cb2efea554c7c5038c7efcd12e8cd84046d16f

# Diff at Wed, 06 Mar 2024 11:01:08 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@724fc93d9bd160395a856b93ce5016ca876c6436 block: 19212794
- current block number: 19375693

## Description

Three new plugs.

## Watched changes

```diff
    contract Socket (0x943AC2775928318653e91d350574436A1b9b16f9) {
    +++ description: None
      values.plugs[15]:
+        "0x4ab7B94BA3f3CF69354Eb2f6b5E856DC61e13660"
      values.plugs[14]:
+        "0x8F4e67C61232167584333e23D7d67BD73d80a4F5"
      values.plugs[13]:
+        "0x68411d61adF1341A6392C87A93941FdD3EE7DF8E"
    }
```

Generated with discovered.json: 0xbe11b5db1a4e90286ad51c890467859b0f633f8f

# Diff at Mon, 12 Feb 2024 15:19:43 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@49775e355a1eff76df613908442249b787dac181 block: 19126484
- current block number: 19212794

## Description

Ignored nonce for usdc vault owner.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19126484 (main branch discovery), not current.

```diff
    contract GnosisSafe (0x246d38588b16Dd877c558b245e6D5a711C649fCF) {
      name:
-        "GnosisSafe"
+        "USDCVaultOwner"
      derivedName:
+        "GnosisSafe"
    }
```

Generated with discovered.json: 0x27bd701904bb21c706ab1fea624a84968e3fa15f

# Diff at Wed, 31 Jan 2024 12:32:59 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e27d63e182fc6d33d67f67df00e2990c9700987e block: 19085063
- current block number: 19126484

## Description

Two new plugs.
Ignore `globalMessageCount` in watch mode.

## Watched changes

```diff
    contract Socket (0x943AC2775928318653e91d350574436A1b9b16f9) {
      values.plugs[12]:
+        "0x37091ade7C4E1A914D3155449e25eE91DA08EbE4"
      values.plugs[11]:
+        "0x280D208f0eE2f053A0441099bcBFf298bc8b9444"
    }
```

Generated with discovered.json: 0x7e76d559dbb49ba64aaea7b6263c85048220674d

# Diff at Thu, 25 Jan 2024 17:16:49 GMT:

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- current block number: 19085063

## Description

Several new Switchboards created: PolygonL1Switchboard, OptimismSwitchboard2, OptimismSwitchboard, FastSwitchboard, ArbitrumL1Switchboard.

## Initial discovery

```diff
+   Status: CREATED
    contract PolygonL1Switchboard (0x053407DFA30267f6332f3c94a9e9F704A55e62CD) {
    }
```

```diff
+   Status: CREATED
    contract OptimismSwitchboard2 (0x0E674e057EC0FF97eeA57B6A350DBAAD22FE41BA) {
    }
```

```diff
+   Status: CREATED
    contract CapacitorFactory (0x11Fbb9116801DB54bB51fF4dF423e34E8b45fc9a) {
    }
```

```diff
+   Status: CREATED
    contract OptimismSwitchboard (0x139f39DC7dC05F7aC2DB3DB6af4f2e1a9De7c287) {
    }
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x246d38588b16Dd877c558b245e6D5a711C649fCF) {
    }
```

```diff
+   Status: CREATED
    contract Hasher (0x5C71beE4a6b0D617D8c3d107D331292741789E27) {
    }
```

```diff
+   Status: CREATED
    contract USDC Vault (0x6D303CEE7959f814042D31E0624fB88Ec6fbcC1d) {
    }
```

```diff
+   Status: CREATED
    contract Socket (0x943AC2775928318653e91d350574436A1b9b16f9) {
    }
```

```diff
+   Status: CREATED
    contract FastSwitchboard (0xD5a83a40F262E2247e6566171f9ADc76b745F5cD) {
    }
```

```diff
+   Status: CREATED
    contract ArbitrumL1Switchboard (0xdf5f7dfDFc26ee5F629949e330bEf56906319CAe) {
    }
```

```diff
+   Status: CREATED
    contract TransmitManager (0xeD037aFBffC65a94E9CC592947E851FB2f730341) {
    }
```

```diff
+   Status: CREATED
    contract SignatureVerifier (0xf1ABF110d1B6ff0E2e8C05dd64FBF9eBA4d8af98) {
    }
```

```diff
+   Status: CREATED
    contract ExecutionManager (0xFB4dcD94A051a1D2cF3EaF713a2Ef686653884E0) {
    }
```
