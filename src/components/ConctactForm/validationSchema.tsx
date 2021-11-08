import * as Yup from 'yup';
import { NAME, EMAIL, ZIPCODE } from './fieldsNames';

const REQUIRED_MESSAGE = {
    name: 'Please entre your full name',
    zipcode: 'Please enter a zipcode',
    email: 'Please enter an email',
};

const INVALID_EMAIL_FORMAT = 'Please enter a valid email';

const validationSchema = Yup.object({
    [NAME]: Yup.string().required(REQUIRED_MESSAGE[`${NAME}`]),

    [ZIPCODE]: Yup.string().required(REQUIRED_MESSAGE[`${ZIPCODE}`]),

    [EMAIL]: Yup.string()
        .required(REQUIRED_MESSAGE[`${EMAIL}`])
        .email(INVALID_EMAIL_FORMAT),
});

export default validationSchema;
