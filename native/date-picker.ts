import { moment } from 'moment';
import { DatePicker } from '@capacitor-community/date-picker'

const selectedTheme = "light";
const locale = "en_US";
const format = "yyyy-MM-dd";
const mode = "date";

export const datePicker = {
  async open(date: Date = new Date()) {  
    const formattedDate = moment(date).format('YYYY-MM-DD');
    const datePicker = new DatePicker();
    const { value } = await datePicker.present({
      mode,
      format,
      locale,
      date: formattedDate,
      theme: selectedTheme
    });

    return value;
  }
};
