import React from "react";
import UsersTable from "../../containers/users/usersTable";
interface IUsersPageProps {}

export default function UsersPage(props: IUsersPageProps) {
    return (
        <div>
           <UsersTable/>
        </div>
    )
}