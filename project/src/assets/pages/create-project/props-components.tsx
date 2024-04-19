import React from "react";
import CreateProject from './create-project';

interface Form{
    onSubmit: (data: { projectName: string; category: string; file: File | null }) => void;
}
export const PropsComponent: React.FC<Form>= ({ onSubmit }) => {
    return (
        <>
            
        </>
    )
}

