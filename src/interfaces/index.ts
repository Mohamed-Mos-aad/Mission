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

export interface ILoginFormInputs{
    id: string,
    img: {
        src: string,
        alt: string,
    },
    type: string,
    name: 'userEmail' |'userPassword',
    placeholder: string
}

export interface INavBarIcons
{
    id: string,
    img: {
        src: string,
        alt: string,
    },
    title: string,
    path: string
}