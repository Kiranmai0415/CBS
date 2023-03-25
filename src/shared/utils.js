import * as Constants from './constants';

export function isEmailValid(email) {
    let emailRegex = Constants.EMAIL_REGEX;
    return emailRegex.test(email)
}
export function isPasswordValid(password) {
    let passwordRegex = Constants.PASSWORD_REGEX;
    return passwordRegex.test(password)
}
export function isNumberValid(number) {
    let numberRegex = Constants.NUMBER_REGEX;
    return numberRegex.test(number)
}
export function isConfirmPasswordValid(confirmPassword, password) {
    if (confirmPassword !== password) {
        return false;
    }
    return true;
}

export function getUserInitials() {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? `${user.firstName.charAt(0)} ${user.lastName.charAt(0)}` : '';
}