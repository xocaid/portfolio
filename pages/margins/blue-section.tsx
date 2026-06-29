import { ReactNode } from "react";

interface BlueSectionProps {
    children: ReactNode | ReactNode[];
    className?: string;
}

export const BlueSection = ({ children, className }: BlueSectionProps) => {
    return (
        <section className={`rounded p-2 ${className}`}>
            <div>
                {children}
            </div>
        </section>
    )
}