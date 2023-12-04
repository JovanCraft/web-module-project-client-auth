import React from 'react'


const AddFriends = () => {
    return (
        <div>
            <h2>AddFriends</h2>
            <form>
                <div>
                    <label htmlFor='username'>Username:</label>
                    <input id='username' />
                </div>
                <div>
                    <label htmlFor='age'>Age:</label>
                    <input id='age' />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' />
                </div>
                <button>Submit</button>
            </form>
        </div>

    )
}



export default AddFriends;
