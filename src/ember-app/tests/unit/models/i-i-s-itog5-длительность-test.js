import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itog5-длительность', 'Unit | Model | i-i-s-itog5-длительность', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-itog5-дир-отд-по-раб-с-кл',
    'model:i-i-s-itog5-длительность',
    'model:i-i-s-itog5-договор',
    'model:i-i-s-itog5-затр-время',
    'model:i-i-s-itog5-клиент',
    'model:i-i-s-itog5-оказ-услуг',
    'model:i-i-s-itog5-расчет-ост-врем',
    'model:i-i-s-itog5-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
