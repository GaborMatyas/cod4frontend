const nameValidation = (fieldName: string, fieldValue: string) => {
    if (fieldValue.trim() === '') {
      return `A mező kitöltése kötelező`;
    }
    if ((/^[a-z][a-z\d]*_?[a-z\d]+$/i.test(fieldValue))) {
      return 'Csak ékezet nélküli kis- és nagybetűket, számokat, közte alulvonás karaktert tartalmazhat';
    }
    if (fieldValue.trim().length < 3) {
      return `Legalább 3 karakter hosszú legyen`;
    }
    if (fieldValue.trim().length > 20) {
        return `A felhasználónévnek maximum 20 karakternek kell lennie`;
    }
    return null;
};

const passwordValidation = (fieldName: string, fieldValue: string) => {
    if (fieldValue.trim() === '') {
      return `A mező kitöltése kötelező`;
    }
    if (!(/^[a-z][a-z\d]*_?[a-z\d]+$/i.test(fieldValue))) {
        return 'Csak ékezet nélküli kis- és nagybetűket, számokat, közte alulvonás karaktert tartalmazhat';
    }
    if (fieldValue.trim().length < 8) {
      return `A jelszónak legalább 8 karakternek kell lennie`;
    }
    if (fieldValue.trim().length > 20) {
        return `A jelszónak maximum 20 karakternek kell lennie`;
    }
    return null;
};

const validate = {
    username: (name: string) => nameValidation('email', name),
    password: (password: string) => passwordValidation('password', password),
  };