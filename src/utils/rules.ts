import moment, {Moment} from "moment";

export const rules = {
    required: (message: string = 'Обязательное поле') => ({
        required: true,
        message
    }),
    isDataAfter: (message: string = 'Нельзя создать событие в прошлом') => () => ({
        validator(_: any, value: Moment) {
            if (value.isSameOrAfter(moment())) {
                return Promise.resolve()
            }
            return Promise.reject(new Error(message))
        }
    })
}