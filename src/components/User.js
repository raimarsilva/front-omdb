import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Logout from "./Logout";

export default function User() {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <div class='container'>
                <div class='row align-items-center'>
                    <div class='col'>
                        <h3>Olá, {user.name}!</h3>
                        <h6>{user.email}</h6>
                    </div>
                    <div class='col'>
                        <Logout />
                    </div>
                </div>
            </div>
        </div>
    )
}