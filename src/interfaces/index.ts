export interface IFormInputs{
    id: string,
    img: {
        src: string,
        alt: string,
    },
    type: string,
    name: 'userName' |'userEmail' |'userPassword' |'userConfirmPassword',
    placeholder: string
}