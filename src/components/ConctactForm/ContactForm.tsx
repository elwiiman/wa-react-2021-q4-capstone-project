import Container from '../Common/Container';
import CustomInput from '../Formik/CustomInput';
import CustomTextArea from '../Formik/CustomTextArea';
import { normalizeZipCode, deleteEmojis } from '../../helpers/formNormalizers';
import { NAME, EMAIL, ZIPCODE, NOTES } from './fieldsNames';

const ContactForm = () => {
    return (
        <Container>
            <CustomInput
                name={`${NAME}`}
                id={`${NAME}`}
                label="Full Name"
                maxLength={100}
                normalize={deleteEmojis}
                extraMessage="Example: Jhon Dae"
            />

            <CustomInput
                name={`${EMAIL}`}
                id={`${EMAIL}`}
                label="Email"
                maxLength={70}
                extraMessage="Example: jhondae@my-furniture.com"
            />

            <CustomInput
                name={`${ZIPCODE}`}
                id={`${ZIPCODE}`}
                label="Zip Code"
                maxLength={6}
                normalize={normalizeZipCode}
                extraMessage="Example: 03660"
            />

            <CustomTextArea
                name={`${NOTES}`}
                id={`${NOTES}`}
                label="Add a note to your order"
                maxLength={200}
                extraMessage="Example: 03660"
                showCharactersLeft={true}
                warnMessage="Are you sure don't want leave a note?"
            />
        </Container>
    );
};

export default ContactForm;
