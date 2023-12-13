import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УслугаEnum from '../enums/i-i-s-itog5-услуга';

export default FlexberryEnum.extend({
  enum: УслугаEnum,
  sourceType: 'IIS.Itog5.Услуга'
});
