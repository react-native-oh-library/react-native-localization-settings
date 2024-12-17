/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
 */

import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getLanguage(): Promise<string>;
  setLanguage(lang: string): void;
  getConstants():Object;
}

export default TurboModuleRegistry.getEnforcing<Spec>('LocalizationSettings');
