
export const TodoAdd = ({ buttonText, handleAddTodoListItem }: { buttonText: string; handleAddTodoListItem: () => void }) => {
    return (
        <>
            <button onClick={handleAddTodoListItem}>{buttonText}</button>
        </>
    );
};
