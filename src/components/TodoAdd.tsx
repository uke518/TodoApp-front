import { FC } from 'react'

type Props = {
    buttonText: string
    AddItem: () => void
}

export const AddButton: FC<Props> = ({ buttonText, AddItem }) => {
    return (
        <>
            <button onClick={AddItem}>{buttonText}</button>
        </>
    );
};
