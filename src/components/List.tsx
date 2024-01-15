import { useEffect, useState } from "react"
import ListItem, { PropsListItem } from "./ListItem";


interface PropsInfo {
    id: number,
    name: string,
}

interface PropsList {
    onClickElement: (id:string) => React.MouseEventHandler<HTMLDivElement>
}

const List = ({onClickElement} : PropsList) => {
    const [list, setList] = useState<Array<PropsListItem>>([])        
    
    async function getData() {
        console.log(1);
        try {
            const responce = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
            if (responce.ok) {
              const data = await responce.json();
              setList(data);  
            }
        } catch (error) {
            throw new Error();
        }    
    } 

    useEffect(() => {
        getData()
    }, []);

    // const asd = (id) => {
    //     console.log(id);
    // }

    return (
        <div className="users">
            {list.map(el => (<ListItem key={el.id} name={el.name} id={el.id} onClickItem={onClickElement} />) )}
        </div>       
    )
}

export default List;
export type {PropsInfo};