import '../App.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SectionLinks = ({Parentclass, ItemClass, listaLinks}: any) => {
    return (
        <ul className={Parentclass} id={Parentclass}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
            { listaLinks.map( (link: any) => (
                <li key={link.id}>
                    <a href={`#${link.original}`} className={ItemClass}>
                        {link.link}
                    </a>
                </li>
            ) ) }
        </ul>
    );
};
