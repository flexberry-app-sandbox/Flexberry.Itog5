import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-itog5-клиент', 'Unit | Serializer | i-i-s-itog5-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-itog5-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-itog5-статус',
    'transform:i-i-s-itog5-тип-договора',
    'transform:i-i-s-itog5-услуга',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
