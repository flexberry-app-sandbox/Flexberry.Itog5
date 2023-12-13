import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISItog5ДирОтдПоРабСКлLForm from './forms/i-i-s-itog5-дир-отд-по-раб-с-кл-l';
import IISItog5ДлительностьLForm from './forms/i-i-s-itog5-длительность-l';
import IISItog5ДоговорLForm from './forms/i-i-s-itog5-договор-l';
import IISItog5ЗатрВремяLForm from './forms/i-i-s-itog5-затр-время-l';
import IISItog5КлиентLForm from './forms/i-i-s-itog5-клиент-l';
import IISItog5РасчетОстВремLForm from './forms/i-i-s-itog5-расчет-ост-врем-l';
import IISItog5УслугиLForm from './forms/i-i-s-itog5-услуги-l';
import IISItog5ДирОтдПоРабСКлEForm from './forms/i-i-s-itog5-дир-отд-по-раб-с-кл-e';
import IISItog5ДлительностьEForm from './forms/i-i-s-itog5-длительность-e';
import IISItog5ДоговорEForm from './forms/i-i-s-itog5-договор-e';
import IISItog5ЗатрВремяEForm from './forms/i-i-s-itog5-затр-время-e';
import IISItog5КлиентEForm from './forms/i-i-s-itog5-клиент-e';
import IISItog5РасчетОстВремEForm from './forms/i-i-s-itog5-расчет-ост-врем-e';
import IISItog5УслугиEForm from './forms/i-i-s-itog5-услуги-e';
import IISItog5ДирОтдПоРабСКлModel from './models/i-i-s-itog5-дир-отд-по-раб-с-кл';
import IISItog5ДлительностьModel from './models/i-i-s-itog5-длительность';
import IISItog5ДоговорModel from './models/i-i-s-itog5-договор';
import IISItog5ЗатрВремяModel from './models/i-i-s-itog5-затр-время';
import IISItog5КлиентModel from './models/i-i-s-itog5-клиент';
import IISItog5ОказУслугModel from './models/i-i-s-itog5-оказ-услуг';
import IISItog5РасчетОстВремModel from './models/i-i-s-itog5-расчет-ост-врем';
import IISItog5УслугиModel from './models/i-i-s-itog5-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog5-дир-отд-по-раб-с-кл': IISItog5ДирОтдПоРабСКлModel,
    'i-i-s-itog5-длительность': IISItog5ДлительностьModel,
    'i-i-s-itog5-договор': IISItog5ДоговорModel,
    'i-i-s-itog5-затр-время': IISItog5ЗатрВремяModel,
    'i-i-s-itog5-клиент': IISItog5КлиентModel,
    'i-i-s-itog5-оказ-услуг': IISItog5ОказУслугModel,
    'i-i-s-itog5-расчет-ост-врем': IISItog5РасчетОстВремModel,
    'i-i-s-itog5-услуги': IISItog5УслугиModel
  },

  'application-name': 'Itog5',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Itog5',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Itog5',
          title: 'Itog5'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        itog5: {
          caption: 'Itog5',
          title: 'Itog5',
          'i-i-s-itog5-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-itog5-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-itog5-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-itog5-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-itog5-длительность-l': {
            caption: 'Длительность',
            title: ''
          },
          'i-i-s-itog5-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-itog5-затр-время-l': {
            caption: 'Затр время',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-itog5-дир-отд-по-раб-с-кл-l': IISItog5ДирОтдПоРабСКлLForm,
    'i-i-s-itog5-длительность-l': IISItog5ДлительностьLForm,
    'i-i-s-itog5-договор-l': IISItog5ДоговорLForm,
    'i-i-s-itog5-затр-время-l': IISItog5ЗатрВремяLForm,
    'i-i-s-itog5-клиент-l': IISItog5КлиентLForm,
    'i-i-s-itog5-расчет-ост-врем-l': IISItog5РасчетОстВремLForm,
    'i-i-s-itog5-услуги-l': IISItog5УслугиLForm,
    'i-i-s-itog5-дир-отд-по-раб-с-кл-e': IISItog5ДирОтдПоРабСКлEForm,
    'i-i-s-itog5-длительность-e': IISItog5ДлительностьEForm,
    'i-i-s-itog5-договор-e': IISItog5ДоговорEForm,
    'i-i-s-itog5-затр-время-e': IISItog5ЗатрВремяEForm,
    'i-i-s-itog5-клиент-e': IISItog5КлиентEForm,
    'i-i-s-itog5-расчет-ост-врем-e': IISItog5РасчетОстВремEForm,
    'i-i-s-itog5-услуги-e': IISItog5УслугиEForm
  },

});

export default translations;
