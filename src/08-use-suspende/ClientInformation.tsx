import { useEffect } from "react";
import { getUserAction } from "./api/get-user.action";

export const ClientInformation = ({ id }: { id: number }) => {

    useEffect(() => {
        getUserAction(id)
            .then(user => console.log({ user }));
    }, [id]);

    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h2 className="text-4xl font-thin text-white">Jhonnatan - #123</h2>

            <p className="text-white text-2xl">Villa Alemana, Chile</p>
            <p className="text-white text-xl">Un rol del usuario</p>
        </div>
    );
};