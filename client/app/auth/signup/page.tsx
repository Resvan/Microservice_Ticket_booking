'use client'
import { useState } from "react";
import useRequest from '../../../hooks/use-request';
import Router from "next/router";

export default function Page() {

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const {doRequest, errors} = useRequest({
        url: '/api/users/signup',
        method: 'post',
        body: {
            email: Email,
            password: Password
        },
        onSuccess: () => Router.push('/')
    })

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        doRequest()
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <h1>Sign up</h1>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" value={Email} onChange={e => setEmail(e.target.value)} name="email" id="eamil" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" value={Password} onChange={e => setPassword(e.target.value)} name="password" id="password" className="form-control" />
            </div>
            {
                errors
            }
            <button type="submit" className="btn btn-primary">Sign up</button>
        </form>
    )
}