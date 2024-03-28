export const User = () => {
    const deleteUser = (event: React.MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    };
    const saveUser = () => {
        alert('user have been saved');
    };
    const onNameChanged = () => {
        alert('user name have been saved');
    };

    return (
        <div>
            user
            <button name="Del" onClick={deleteUser}>
                Del
            </button>
            <button name="Edit" onClick={saveUser}>
                Edit
            </button>
            <div>
                <textarea onChange={onNameChanged} />
            </div>
        </div>
    );
};
