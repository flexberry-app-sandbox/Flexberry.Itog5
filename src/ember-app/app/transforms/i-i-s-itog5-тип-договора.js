import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоговораEnum from '../enums/i-i-s-itog5-тип-договора';

export default FlexberryEnum.extend({
  enum: ТипДоговораEnum,
  sourceType: 'IIS.Itog5.ТипДоговора'
});
