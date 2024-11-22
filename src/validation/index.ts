// ** Interface
interface IFormInputs{
    userName: string,
    userEmail: string,
    userPassword: string,
    userConfirmPassword: string,
    hasAcceptedTerms: boolean
}




const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function formValidation({userName,userEmail,userPassword,userConfirmPassword,hasAcceptedTerms}:IFormInputs)
{
    const errorMsgs = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
        terms: ''
    }

    if(!userName.trim())
    {
        errorMsgs.userName = 'Username is required.';
    }
    else if(userName.length < 8 || userName.length > 20)
    {
        errorMsgs.userName = 'Username must be between 8 and 20 characters.';
    }


    if(!userEmail.trim())
    {
        errorMsgs.userEmail = 'Email is required.';
    }
    else if(!emailRegex.test(userEmail))
    {
        errorMsgs.userEmail = 'Please enter a valid email address.';
    }

    if(!userPassword.trim())
    {
        errorMsgs.userPassword = 'Password is required.';
    }
    else if(userPassword.length < 8 || userPassword.length > 20)
    {
        errorMsgs.userPassword = 'Password must be between 8 and 20 characters.';
    }

    if(userConfirmPassword !== userPassword)
    {
        errorMsgs.userConfirmPassword = 'Passwords do not match.';
    }

    if(!hasAcceptedTerms)
    {
        errorMsgs.terms = 'You must accept the Terms and Privacy Policy.';
    }

    return errorMsgs;
}