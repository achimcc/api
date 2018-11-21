// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AnyU8a } from './types';

import U8aFixed from './codec/U8aFixed';

// Hash containing 512 bits (64 bytes), typically used for signatures
export default class H512 extends U8aFixed {
  constructor (value?: AnyU8a) {
    super(value, 512);
  }
}
