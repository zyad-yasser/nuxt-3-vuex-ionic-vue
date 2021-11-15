import moment from "moment";
import logger from "~/services/logger";
const selectedTheme = "light";

const datePicker = {
  async open(date) {  
    try {
      const usedDate = date || new Date();
      const formattedDate = moment(usedDate).format('YYYY-MM-DD');
      console.log(window.Capacitor.Plugins)
      const { value } = await window.Capacitor.Plugins.DatePickerPlugin.present({
        mode: "date",
        format: 'yyyy-MM-dd',
        locale: "en_US",
        date: formattedDate,
        theme: selectedTheme
      });

      return value;
    } catch (error) {
      logger.error({ error, loc: 'native datepicker', msg: 'error in native datepicker open()' })
    }
  }
};

export { datePicker };
