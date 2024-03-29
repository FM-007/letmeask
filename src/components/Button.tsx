import { ButtonHTMLAttributes } from "react";

import '../style/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export const Button = ({ isOutlined = false, ...props }: ButtonProps) => {
    return (
        <button
            className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props}
        />
    );
}