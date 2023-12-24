'use client'
// -React-
import React from 'react';
import { useRouter } from 'next/navigation';

interface ButtonProps {
    title: string;
    Icon?: React.ElementType;
    onlyIcon?: boolean;
    iconClassName?: string;
    titleClassName?: string;
    className?: string;
    href?: string;
    children?: React.ReactNode; 
    onClick?: () => void; 

}

const Button = ({
    title = "",
    Icon,
    onlyIcon,
    className = "",
    iconClassName = "",
    titleClassName = "",
    href,
    children,
}: ButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        }
    };

    const IconComponent = typeof Icon === 'function' ? Icon : () => null;

    return (
        <button
            onClick={handleClick}
            title={title}
            type="button"
            className={`px-6 lg:px-0 py-2 rounded-3xl shadow-md group ${className}`}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            {onlyIcon && Icon && <IconComponent className={`${iconClassName} text-20px`} />}
            {!onlyIcon && !Icon && (
                <span className={`${titleClassName} text-[17px]`}>
                    {title}
                </span>
            )}
            {Icon && title && !onlyIcon && (
                <>
                    <span className={`${titleClassName} text-[17px]`}>
                        {title}
                    </span>
                    <IconComponent className={`${iconClassName} text-[20px]`} />
                </>
            )}
            {children && children}
        </button>
    );
};

export default Button;