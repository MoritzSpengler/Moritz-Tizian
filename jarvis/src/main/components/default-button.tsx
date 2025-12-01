import { Button, type ButtonProps } from "@mui/material";

interface JButtonProps {
    label: string;
    color?: ButtonProps['color'];
    size?: ButtonProps['size'];
    variant?: ButtonProps['variant'];
    onClick?: () => void;
}

export function JButton({ label, color = 'primary', size = 'medium', variant = 'contained', onClick }: JButtonProps) {

    return (
        <Button children={label} color={color} size={size} variant={variant} onClick={onClick} />
    );
}