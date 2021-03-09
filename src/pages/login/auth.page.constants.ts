import { FormTypes } from '@components/form/constants';
import { authPageProps } from './auth.page';

export const LoginProps: authPageProps = {
    title: 'Bejelentkezés',
    formClass: FormTypes.LOGIN_PAGE,
    question: 'Még nem vagy besorozva?',
    smallButtonText: 'Regisztrálj',
    headline: 'Üdv újra itt! Jelentkezz be és szavazz mikor legyen a legközelebbi öldöklés!',
    instruction: 'Ha elfelejtetted a jelszavadat vagy törölnéd a profilodat, lépj kapcsolatba Plato-val!'
}

export const RegistrationProps: authPageProps = {
    title: 'Regisztráció',
    formClass: FormTypes.REGISTER_PAGE,
    question: 'Már be vagy sorozva?',
    smallButtonText: 'Jelentkezz be!',
    headline: 'Gyülekező! Regisztráld magad a CoD 4 Légióba és nyerj egy ingyen utat a pokolba!',
    instruction: 'Ne adj meg olyan jelszót amit máshol is használsz, így is nyomunkban az FBI'
}
