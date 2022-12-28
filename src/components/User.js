import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function User() {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h3>Olá, {user.name}!</h3>
            <h4>{user.email}</h4>
        </div>
    )
}