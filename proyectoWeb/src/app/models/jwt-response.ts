export interface JwtResponseI {
    dataUser: {
        id: number,
        Name: string,
        Email: string,
        Pin: string,
        accessToken: string,
        expiresIn: string
    }
}