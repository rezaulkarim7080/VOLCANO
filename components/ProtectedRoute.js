import React from 'react';
import { useUserAuth } from '../app/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function ProtectedRoute({ children }) {

    const { user } = useUserAuth();
    const router = useRouter();
    
    if (!user) {
        return router.push('/');

    } else {
        return children;
    }

};
