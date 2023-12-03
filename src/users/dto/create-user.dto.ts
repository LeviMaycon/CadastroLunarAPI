export class CreateUserDto {
    email: string;
    username: string;
    password: string;
    role: string;
    profile: {
        name: string;
        bio: string;
        avatar: string;
    }
    reputation: number;
    created_at: Date;
}
