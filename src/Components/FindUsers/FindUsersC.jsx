import React from 'react';
import classes from "./FindUsers.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/avatar-default.png";

class FindUsersC extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(responce => {
                    this.props.setUsers(responce.data.items)
                }
            )
    }


// props.setUsers([
//         {
//             id: 1,
//             followed: true,
//             fullName: 'Lily Folrance',
//             location: {country: 'Canada', city: 'Monreal'},
//             status: 'I love cute cats)🥰',
//             avatar: 'https://img.freepik.com/free-photo/hair-style-street-fashion-beautiful-girl_1139-844.jpg?w=740&t=st=1663922249~exp=1663922849~hmac=bca10ff83d897562a5747003c10d6305ca16a917b73801179e9b27649bb133e6'
//         },
//         {
//             id: 2,
//             followed: true,
//             fullName: 'Stanislav Rostigaev',
//             location: {country: 'Russia', city: 'Rostov'},
//             status: 'i dream to be famous singer',
//             avatar: 'https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1663922485~exp=1663923085~hmac=2893c3c03663590fdd26f9a959d3e22bcb765476d94cc423ea750f126a4d76cd'
//         },
//         {
//             id: 3,
//             followed: false,
//             fullName: 'Kate Vinston',
//             location: {country: 'Latvia', city: 'Riga'},
//             status: 'i want to eat a big sendwitch 😜',
//             avatar: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=740&t=st=1663922672~exp=1663923272~hmac=167c5699c86772785c8e7bb3c6ed500e024e4992a6565870bb65a3f6f0627019'
//         },
//         {
//             id: 4,
//             followed: false,
//             fullName: 'Sarah Connor',
//             location: {country: 'USA', city: 'New-York'},
//             status: 'I like to walk, you understand?)😉, ',
//             avatar: 'https://img.freepik.com/free-photo/portrait-of-cute-tender-ginger-woman-with-curly-hair_176420-14506.jpg?w=740&t=st=1664005998~exp=1664006598~hmac=113bd0b2dea5571663574d5e756f0ae7c694536b327e4f184d6fd1cff6a81add'
//         },
//         {
//             id: 5,
//             followed: false,
//             fullName: 'David Britlin',
//             location: {country: 'Brazil', city: 'Sao paulo '},
//             status: 'I am looking for a good job!',
//             avatar: 'https://img.freepik.com/free-photo/confident-handsome-guy-posing-against-the-white-wall_176420-32936.jpg?w=740&t=st=1664006217~exp=1664006817~hmac=18849afd2eb07a207e59d2d9b2409d7a8a7e56a892acd65a1388d9cee8a96ab1'
//         },
//         {
//             id: 6,
//             followed: false,
//             fullName: 'Stela Florman',
//             location: {country: 'Australia', city: 'Melbourne'},
//             status: 'I love to run, do you want to come with me?',
//             avatar: 'https://img.freepik.com/free-photo/pretty-beautiful-woman-with-blonde-long-hair-having-excited-and-happy-facial-expression_176420-14958.jpg?t=st=1664005750~exp=1664006350~hmac=3740a83c16ffb30a8ff874c1544e4ba57b2667af9b9bef65b4b1ccc483c39f19'
//         },
//     ]
// )
    render() {
        return  <div>
            {
                this.props.users.map(u => <div key={u.id}>

                        <div className={classes.usersZone}>
                            <div className={classes.usersItem}>
                                <div className={classes.usersAvatar}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={classes.avatar}
                                         alt='avatar'/>
                                </div>
                                <div>
                                    {u.followed ?
                                        <button onClick={ () => {this.props.unfollow(u.id)}} className={classes.unfollow}>Unfollow</button> :
                                        <button onClick={ () => {this.props.follow(u.id)}} className={classes.follow}>Follow</button>}
                                </div>
                            </div>
                            <div className={classes.descriptionBlockOne}>
                                <div className={classes.fullName}>{u.name}</div>
                                <div className={classes.status}>{u.status}</div>
                            </div>
                            <div className={classes.descriptionBlockTwo}>
                                <div className={classes.country}>{'props.location.country'}</div>
                                <div className={classes.city}>{'props.location.city'}</div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    }
}

export default FindUsersC;