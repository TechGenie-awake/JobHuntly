// app/login/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Handle login logic here (API call, validation, etc.)
        console.log('Logging in with:', email, password);
        router.push('/'); // Redirect to homepage after login
    };

    return (
        <main className="min-h-screen flex flex-col justify-center items-center px-6 py-12">
            <h1 className="text-3xl font-bold mb-6 text-[#25324B]">Login to JobHuntly</h1>
            <form onSubmit={handleLogin} className="w-full max-w-md bg-white p-8 rounded-md shadow-md space-y-6">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
                <button type="submit" className="w-full bg-[#4640DE] text-white py-3 rounded-md hover:bg-[#3c36b4] transition">
                    Login
                </button>
            </form>
        </main>
    );
}
