// Copyright 2017-2022 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import kusama from '@polkadot/types-support/metadata/static-kusama';
import polkadot from '@polkadot/types-support/metadata/static-polkadot';
import substrate from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../create';
import { Metadata } from './Metadata';

const allData: Record<string, HexString> = {
  kusama,
  polkadot,
  substrate
};

describe.each(['kusama', 'polkadot', 'substrate'])('%s metadata', (type): void => {
  const metadata = new Metadata(new TypeRegistry(), allData[type]);

  it('allows creation from hex', (): void => {
    expect(
      new Metadata(new TypeRegistry(), metadata.toHex()).toJSON()
    ).toEqual(metadata.toJSON());
  });

  it('has a sane toCallsOnly', (): void => {
    expect(
      metadata.asCallsOnly.toU8a().length > 65536
    ).toBe(true);
  });
});
