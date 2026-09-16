import Link from 'next/link';
import React from 'react';

const UserCardPage = ({ userData }) => {
    return (
        <div className="card card-dash bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{userData.name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <Link href={`/users/${userData.id}`}>
                        <button className="btn btn-primary">See User Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserCardPage;