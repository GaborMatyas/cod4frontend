import { FormTypes } from '@components/form/constants';

export const LoginProps = {
    title: 'Bejelentkezés',
    formClass: FormTypes.LOGIN_PAGE,
    question: 'Még nem vagy besorozva?',
    smallButtonText: 'Regisztrálj'
}

export const RegistrationProps = {
    title: 'Regisztráció',
    formClass: FormTypes.REGISTER_PAGE,
    question: 'Már be vagy sorozva?',
    smallButtonText: 'Jelentkezz be!'
}
