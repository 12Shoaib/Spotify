export const isValidemail  =(emailCapture) => {
    const emailRegixExpression = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;
    if((emailRegixExpression.test(emailCapture)) ){
        return true
    }else{
        return false
    }
}
export const isValidPhone  =(PhoneCapture) => {
    const mobileRegixExpression = /^([+]\d{2})?\d{10}$/;
    if((mobileRegixExpression.test(PhoneCapture)) ){
        return true
    }else{
        return false
    }
}
export const isValidPassword =(passwordCapture) => {
    const passwordRegixExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/
        if(passwordRegixExpression.test(passwordCapture)){
            return true
        } else {
           return false
        }
}
export const isValidUserName = (userNameCapture) => {
    const nameRegixExpression ='/^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/'
    if(nameRegixExpression.test(userNameCapture)){
     return true
    }else{
     return false
    }
}
