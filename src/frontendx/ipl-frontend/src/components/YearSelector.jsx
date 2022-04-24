import {React} from "react";
import {Link} from "react-router-dom";

export const YearSelector = ({teamName}) => {
    const startYear = 2008;
    const endYear = 2020;

    const years = [];

    for(let i= startYear; i<=endYear; i++){
        years.push(i);
    }

    return (
        <ul className="list-group">
            {
                years.map(
                    (year)=>(
                        <li key={year} className="list" >
                            <Link to={`/team/${teamName}/matches/${year}`}>{year}</Link>
                        </li>
                    )
                )
            }
        </ul>
    )

}