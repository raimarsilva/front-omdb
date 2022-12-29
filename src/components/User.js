import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function User() {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <h3>Olá, {user.name}!</h3>
            <h6>{user.email}</h6>
        </div>
    )
}