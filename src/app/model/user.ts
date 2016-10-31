export interface RegisteredUser {
    id: string;
    name: string;
    email: string;
    youthGroup: string;
    roles: string[];
}

export interface AuthUser extends firebase.User {
}

export interface UserAuthStatus {
    isAuthorized: boolean;
    isRegistered: boolean;
}
