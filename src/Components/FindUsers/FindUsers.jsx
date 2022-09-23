import React from 'react';
import classes from './FindUsers.module.css';
import FindUsersElement from "./FindUsersElement";


const FindUsers = (props) => {
    // if (props.users.length === 0) {
    //     props.setUsers([
    //             {
    //                 id: 1,
    //                 followed: true,
    //                 fullName: 'Lily Folrance',
    //                 location: {country: 'Canada', city: 'Monreal'},
    //                 status: 'I love cute cats)🥰',
    //                 avatar: 'https://img.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg?w=740&t=st=1663922249~exp=1663922849~hmac=bca10ff83d897562a5747003c10d6305ca16a917b73801179e9b27649bb133e6'
    //             },
    //             {
    //                 id: 2,
    //                 followed: true,
    //                 fullName: 'Stanislav Rostigaev',
    //                 location: {country: 'Russia', city: 'Rostov'},
    //                 status: 'i dream to be famous singer',
    //                 avatar: 'https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1663922485~exp=1663923085~hmac=2893c3c03663590fdd26f9a959d3e22bcb765476d94cc423ea750f126a4d76cd'
    //             },
    //             {
    //                 id: 3,
    //                 followed: false,
    //                 fullName: 'Kate Vinston',
    //                 location: {country: 'Latvia', city: 'Riga'},
    //                 status: 'i want to eat a big sendwitch 😜',
    //                 avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1663922672~exp=1663923272~hmac=167c5699c86772785c8e7bb3c6ed500e024e4992a6565870bb65a3f6f0627019'
    //             },
    //         ]
    //     )
    // }

    let findUsersItem = props.users.map((u) => (
        <FindUsersElement key={u.id}
                          avatar={u.avatar}
                          fullName={u.fullName}
                          status={u.status}
                          location={u.location}
                          followed={u.followed}
                          id={u.id}
        />
    ))

    return (
        <div>{findUsersItem}</div>
    )
}

export default FindUsers;