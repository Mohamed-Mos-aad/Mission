interface IFormData{
    userName: string;
    userEmail: string;
    userPassword: string;
    userConfirmPassword: string;
    termsAndPolicyReaded: boolean;
}



const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;



export function InputValidation({userName,userEmail,userPassword,userConfirmPassword,termsAndPolicyReaded}:IFormData) {
    const errorsMsgs = {
        userName: '',
        userEmail: '',
        userPassword: '',
        userConfirmPassword: '',
        termsAndPolicyReaded: ''
    };

    const isValiEmail = gmailRegex.test(userEmail);

    if(!userName.trim() || userName.length < 3 || userName.length > 20)
    {
        errorsMsgs.userName = 'Username must be between 3 and 20 characters.';
    }
    
    if(!userEmail.trim() || !isValiEmail)
    {
        errorsMsgs.userEmail = 'it must ended with  Ex : @gmail.com.';
    }
    
    if(!userPassword.trim() || userPassword.length < 8 || userPassword.length > 20)
    {
        errorsMsgs.userPassword = 'Password must be between 8 and 20 characters.';
    }
    
    if(userPassword !== userConfirmPassword)
    {
        errorsMsgs.userConfirmPassword = 'Passwords do not match.';
    }
    if(!termsAndPolicyReaded)
    {
        errorsMsgs.termsAndPolicyReaded = "You must agree to the Terms of Service and Privacy Policies.";
    }


    return errorsMsgs;
}