import { Children } from "react";

const layout = ({ Children }) => {
    return (
        <div>
            <h3>Fixed portion of post layouts</h3>
            <div>{Children}</div>
        </div>
    );
};

export default layout;