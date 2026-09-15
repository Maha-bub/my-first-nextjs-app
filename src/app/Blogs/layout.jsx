
const layout = ({children}) => {
    return (
        <div>
            <h3>fixed portion of layout-</h3>
            <div>{children}</div>
        </div>
    );
};

export default layout;