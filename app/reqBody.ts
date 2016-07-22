export class ReqBody{
    grant_type: string = 'password';
    username: string;
    password: string;
    client_id: string = 'webapp';
}
