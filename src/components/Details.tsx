import { useEffect, useState } from "react";
import { PropsInfo } from "./List";

const Details = (info? :PropsInfo) => {
    interface PropsUser {
        id: number,
        name: string,
        avatar: string,
        details: {
            city: string,
            company: string,
            position: string,
        }
    }

    const [user, setUser] = useState<PropsUser>();

    useEffect(() => {
        if (info?.id !== 0) {
            getItem(info);
        }
    }, [info])
  
    async function getItem(item: PropsInfo) {
        try {
            const request = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item.id}.json`);
            if (request.status) {
                const data = await request.json();
                setUser(data);
                console.log(user);
            }
            
        } catch (error) {
            throw new Error;
        }
    }
    return (
        <div className="details__container">
            {user ? (
                <>
                <div className="name__details">{user.name}</div>
                <img src={`${user.avatar}`} alt="avatar" className="avatar__details" />
                <p className="city__details">{user.details.city}</p>
                <p className="company__details">{user.details.company}</p>
                <p className="position__details">{user.details.position}</p>
                </>
            ): ''}
        </div>
        )
}

export default Details;