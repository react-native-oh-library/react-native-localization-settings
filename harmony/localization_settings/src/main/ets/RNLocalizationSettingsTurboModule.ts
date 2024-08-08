import { TurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from '@rnoh/react-native-openharmony/generated/ts';
import I18n from '@ohos.i18n';
import Intl from '@ohos.intl';
import { i18n } from '@kit.LocalizationKit';

export class RNLocalizationSettingsTurboModule extends TurboModule implements TM.LocalizationSettings.Spec {

  constructor(ctx) {
    super(ctx);
  }

  getConstants(): Object {
    return { language: this.getCurrentLanguage(); }
  }

  private getLanguageTag(language: string) {
    let locale = new Intl.Locale(language);
    let preferredLanguageList: Array<string> = I18n.System.getPreferredLanguageList();
    if (!preferredLanguageList.includes(locale.maximize().toString())) {
      locale = new Intl.Locale(I18n.System.getSystemLanguage());
    }
    return locale.toString();
  }

  getCurrentLanguage() {
    return i18n.System.getAppPreferredLanguage();
  }

  setCurrentLanguage(lang: string) {
    let localeList = this.getLanguageTag(lang);
    I18n.System.setAppPreferredLanguage(localeList);
  }

  getLanguage(): Promise<string> {
    return Promise.resolve(this.getCurrentLanguage());
  }

  setLanguage(lang: string) {
    this.setCurrentLanguage(lang);
  }
}