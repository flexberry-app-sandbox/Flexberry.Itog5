import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.itog5.caption'),
          title: i18n.t('forms.application.sitemap.itog5.title'),
          children: [{
            link: 'i-i-s-itog5-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-расчет-ост-врем-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-itog5-услуги-l',
            caption: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-услуги-l.title'),
            children: null
          }, {
            link: 'i-i-s-itog5-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-дир-отд-по-раб-с-кл-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-itog5-клиент-l',
            caption: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-клиент-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-itog5-длительность-l',
            caption: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-длительность-l.caption'),
            title: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-длительность-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-itog5-договор-l',
            caption: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-договор-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-itog5-затр-время-l',
            caption: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-затр-время-l.caption'),
            title: i18n.t('forms.application.sitemap.itog5.i-i-s-itog5-затр-время-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})