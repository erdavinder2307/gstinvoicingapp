export class SignUpModel {
    constructor(FirstName: string, LastName: string, Email: string, Password: string) {
        this.firstName = FirstName;
        this.lastName = LastName;
        this.email = Email;
        this.password = Password;
    }

    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;


}