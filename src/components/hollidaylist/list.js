import React from 'react'
import lista from './dummydata'
import { useTranslation } from 'react-i18next'
import 'assets/css/hollidaylist.css' 

export default function ListGetter(){
        const { t } = useTranslation()
    return(
        <div className="space">
        <table className="tabela">
            <thead className="cap">
                        <tr>
                            <th>Inceput</th>
                            <th>Sfarsit</th>
                            <th>Stare</th>
                        </tr>
                    </thead>
            <tbody>
            {lista.map(emp => (
                            <tr key={emp.id} className="rand">
                                <td>{emp.inceput}</td>
                                <td>{emp.sfarsit}</td>
                                <td>{emp.status}</td>
                            </tr>
                        ))}
            </tbody>
        </table>
        </div>
    )
}