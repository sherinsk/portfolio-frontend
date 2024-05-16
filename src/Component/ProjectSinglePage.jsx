import React from 'react';
import { useParams } from "react-router-dom"

export default function ProjectSinglePage() {
    const { id } = useParams()

    const users = [
        {
            name: "test",
            user: {
                name: "test user name",
                data: {
                    father: "test"
                }
            }
        },
        {
            name: "test 1",
            user: {
                name: "test user name 1",
                data: null
            }
        }
    ]


    console.log("params ====>", id)
    return (
        <div>
            {
                users?.map(user => (
                    <>
                        <h1>{user.name}</h1>
                        <h1>{user.user.name}</h1>
                        <h1>{user?.user?.data?.father ?? "no name added for father"}</h1>
                    </>
                ))
            }
        </div>
    )
}
