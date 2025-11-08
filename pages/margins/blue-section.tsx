import { ReactNode } from "react";

interface BlueSectionProps {
    children: ReactNode | ReactNode[];
    className?: string;
}

export const BlueSection = ({ children, className }: BlueSectionProps) => {
    return (
        <section className={`bg-portfolio-yinmn-blue rounded p-2 m-3 ${className}`}>
            <div>
                {children}
            </div>
        </section>
    )
}