import { useState } from "react";
import moment from "moment";

export default function UsersList({ list = [] }) {
    const [sortedList, setSortedList] = useState(list);

    const srotAlphabetically = () => {
        setSortedList([
            ...sortedList.sort((a, b) => {
                let na = a.first_name.toLowerCase() + a.last_name.toLowerCase(),
                    nb = b.first_name.toLowerCase() + b.last_name.toLowerCase();
                if (na < nb) return -1;
                else if (na > nb) return 1;
                else return 0;
            }),
        ]);
    };

    const sortByEarlier = () => {
        setSortedList([
            ...sortedList.sort((a, b) => {
                let da = new Date(a.created_at),
                    db = new Date(b.created_at);
                if (da < db) return 1;
                else if (da > db) return -1;
                else return 0;
            }),
        ]);
    };

    return (
        <section className="usersList bg-white border border-secondary_3_o rounded-xl p-16 my-16">
            <table>
                <thead>
                    <tr className="text-xl text-primary_1 bg-secondary_2">
                        <th
                            className="p-4 underline cursor-pointer hover:text-primary_2"
                            onClick={srotAlphabetically}
                        >
                            Name
                        </th>
                        <th className="p-4">Email</th>
                        <th
                            className="p-4 underline cursor-pointer hover:text-primary_2"
                            onClick={sortByEarlier}
                        >
                            Created at
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedList.map(({ id, first_name, last_name, email, created_at }) => (
                        <tr
                            key={id}
                            className="border-b border-secondary_3_o hover:bg-primary_1 hover:text-white transition"
                        >
                            <td className="pr-12 py-4">
                                {first_name} {last_name}
                            </td>
                            <td className="px-12 py-4">{email}</td>
                            <td className="pl-12 py-4">
                                {moment(created_at).utc().format("MMMM Do YYYY / h:mm a")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
