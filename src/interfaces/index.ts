export interface IRegistrationFormInputs
{
    id: string,
    icon: {
        src: string,
        alt: string
    },
    type: string,
    name: "userName" | "userEmail" | "userPassword" | "userConfirmPassword",
    placeholder: string
}