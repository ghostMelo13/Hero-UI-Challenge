"use client";
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import "./pl2.css";

export default function ClipPathButton() {
    const [buttonState, setButtonState] = useState("idle");
    const buttonCopy: any = {
        idle: "Send me a login link",
        loading: 'spinnerrrrr',
        success: "Login link sent!",
    };


    // clip-path: inset(0% 0-100% 0% 0% round 19px);
    return (
        <div className="wrapper h-screen flex justify-center items-center">
            <div className="outer-wrapper overflow-hidden">
                <motion.button
                    className="blue-button rounded-xl min-w-[13rem] bg-neutral-800 flex flex-col overflow-hidden"
                    disabled={buttonState !== "idle"}
                    onClick={() => {
                        // This code is just a placeholder
                        setButtonState("loading");

                        setTimeout(() => {
                            setButtonState("success");
                        }, 1750);

                        setTimeout(() => {
                            setButtonState("idle");
                        }, 3500);
                    }}
                >
                    <AnimatePresence mode='popLayout'>
                        <motion.span
                            key={buttonState}
                            initial={{
                                y: -25,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            exit={{
                                y: 25,
                                opacity: 0
                            }}
                        >{buttonCopy[buttonState]}</motion.span>
                    </AnimatePresence>
                </motion.button>
            </div>
        </div>
    );
}