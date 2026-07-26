import { useEffect, useState } from "react";
import { ToastStyled } from "./styles";
import { FiCheckCircle, FiAlertCircle, FiX } from "react-icons/fi";

type Props = {
    message: string;
    type: "success" | "error";
    visible: boolean;
    onClose: () => void;
};

function Toast({ message, type, visible, onClose }: Props) {
    const [closing, setClosing] = useState(false);

    const handleManualClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
            setClosing(false);
        }, 300);
    };

    useEffect(() => {
        if (!visible) return;

        const timer = setTimeout(() => {
            setClosing(true);
            setTimeout(() => {
                onClose();
                setClosing(false);
            }, 300);
        }, 3000);

        return () => clearTimeout(timer);
    }, [visible, onClose]);

    if (!visible) return null;

    return (
        <ToastStyled $type={type} $closing={closing}>
            <div className="toast-content">
                {type === "success" ? (
                    <FiCheckCircle size={20} className="icon" />
                ) : (
                    <FiAlertCircle size={20} className="icon" />
                )}
                <span>{message}</span>
            </div>

            <button type="button" onClick={handleManualClose} aria-label="Fechar">
                <FiX size={18} />
            </button>
        </ToastStyled>
    );
}

export default Toast;