export interface HealthResponse {
    ok: boolean;
    service?: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
    createdAt: string;
}
