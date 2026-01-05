import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}: ButtonProps) {
    const baseStyles = "font-medium rounded-lg transition-smooth inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-500",
        secondary: "bg-gold-500 text-navy-900 hover:bg-gold-600 focus:ring-gold-500",
        ghost: "bg-transparent text-navy-900 hover:bg-gray-100 focus:ring-gray-500",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
