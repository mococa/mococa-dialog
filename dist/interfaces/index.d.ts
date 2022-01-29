export declare enum ToastrTypes {
    success = 0,
    error = 1,
    warning = 2
}
export interface ToastrOptions {
    timeout: number;
    onClose?(): void | null;
}
export interface ToastrCreation {
    createToastr: (type: keyof typeof ToastrTypes, title: string, message: string, options?: ToastrOptions) => void;
}
export interface IToastr {
    id: string;
    timeout: number;
    title: string;
    message: string;
    type: keyof typeof ToastrTypes;
    onClose(id: string): void;
    options?: ToastrOptions;
}
export interface ProviderInterface {
    timeout?: number;
    onClose?(): void;
}
