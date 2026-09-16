import { useId } from "react";

const UserDataPage = async ({ params }) => {
    const { userId } = await params;
    return (
        <div>
            User Id:{userId}

        </div>
    );
};

export default UserDataPage;