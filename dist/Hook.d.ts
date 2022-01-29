import { ToastrOptions } from './interfaces';
export declare const useToastr: () => {
    success(title: string, message?: string | undefined, options?: ToastrOptions | undefined): void;
    error(title: string, message?: string | undefined, options?: ToastrOptions | undefined): void;
    warning(title: string, message?: string | undefined, options?: ToastrOptions | undefined): void;
};
