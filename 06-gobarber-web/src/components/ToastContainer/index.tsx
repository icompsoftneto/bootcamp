import React from "react";
// import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import Toast from "./Toast";
import { useTransition, animated } from 'react-spring';
import { ToastMessage } from "../../hooks/Toast";
import { Container } from "./styles";
// import { isTemplateLiteral } from "typescript";


interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    const messagesWithTransitions = useTransition(messages,
        {
            from: { right: '-120%', opacity: 0 },
            enter: { right: '0%', opacity: 1 },
            leave: { right: '-120%', opacity: 0 },

        });

    return messagesWithTransitions((style, item) => (
        <animated.div>
            <Container>
                <Toast style={style} message={item} />
            </Container>
        </animated.div>
    ));

    // return messagesWithTransitions((style, item) => (
    //     <Container style={style}>

    //     </Container>
    // ))


    // const messagesWithTransitions = useTransition(
    //     messages,
    //     // (message: ToastMessage) => message.id,
    //     {
    //         from: { right: '-120%', opacity: 0 },
    //         enter: { right: '0%', opacity: 1 },
    //         leave: { right: '-120%', opacity: 0 },
    //     },
    // );

    //     return (
    //         <Container>
    //             {messagesWithTransitions.map(({ item, key, props }) => (
    //                 <Toast key={key} style={props} message={item} />
    //             ))}
    //         </Container>
    //     );
    // };
};
export default ToastContainer;
