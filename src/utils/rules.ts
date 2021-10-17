import moment, {Moment} from "moment";

export const rules = {
    required: (message: string = "Обязательное поле") => ({
        required: true,
        message
    }),
    isDateAfter: (message: string) => ({              // убрал () =>
        validator(_: any, value: Moment) {            // _ говорит о том что 1й аргумент не обязателен
            // console.log(value);                    // value это выбранная дата
            if (value.isSameOrAfter(moment())) {      // сравниваем дату пришедшую с datePicker с текущей
                return Promise.resolve()
            }
            return Promise.reject(new Error(message));
        }
    })
}
