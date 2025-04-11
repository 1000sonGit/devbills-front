import { Content, Overlay, Portal, Root, Trigger } from "./styles";
import { JSX, ReactNode } from "react";

type DialogProps = {
    children: ReactNode;
    trigger: JSX.Element;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function Dialog({children, trigger, open, onOpenChange}: DialogProps) {
    return(
        <Root open={open} onOpenChange={onOpenChange}>
            <Trigger asChild>{trigger}</Trigger>
            <Portal>
                <Overlay/>
                <Content>{children}</Content>
            </Portal>
        </Root>
    )
}