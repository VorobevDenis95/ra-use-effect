interface PropsListItem {
    id: string,
    name: string,
    onClickItem: (el: PropsInfoEl) => React.MouseEventHandler<HTMLDivElement>
}

interface PropsInfoEl {
    id: string,
    name: string,
}


const ListItem = ({name, id, onClickItem}: PropsListItem) => {

    const el : PropsInfoEl = {
        name: name,
        id: id,
    }

    return (
        <div className="list__item" onClick={() => onClickItem(el)}>
            <span className="name__item">{name}</span>
        </div>
    )
}

export default ListItem;
export type {PropsListItem, PropsInfoEl};