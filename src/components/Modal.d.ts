import type { ReactElement, ReactEventHandler } from "react";
interface Modal {
    modalHeader: ReactElement;
    modalBody: ReactElement;
    modalFooter: ReactElement;
    modalId: string;
    cssClass: string;
    modalRef: null;
    modalOnClose: ReactEventHandler;
}
export default function Modal({ modalHeader, modalBody, modalFooter, modalId, cssClass, modalRef, modalOnClose, }: Modal): import("react/jsx-runtime").JSX.Element;
export {};
