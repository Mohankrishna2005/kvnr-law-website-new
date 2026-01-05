import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
    const hoverStyles = hover
        ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
        : "";

    return (
        <div
            className={`bg-white rounded-lg shadow-md p-6 transition-smooth ${hoverStyles} ${className}`}
        >
            {children}
        </div>
    );
}
