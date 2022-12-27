import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function User() {

    const { user, setUser } = useContext(AuthContext)

    return (
        <div>
            <h2>Bem-vindo, {user}!</h2>
        </div>
    )
}